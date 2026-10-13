import { LEAD_SOURCES, SALES_BARS, SERIES, STAGES } from "../data/dashboard";

const AXIS = "#5a5a5a";
const GRID = "#d6d6d6";

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
        <path d="M1.5 1.5 8.5 5l-7 3.5" fill="none" stroke="#555" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </marker>
    </defs>
  );
}

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
};

function arcPath(cx: number, cy: number, R: number, r: number, a0: number, a1: number) {
  const [x0, y0] = polar(cx, cy, R, a0);
  const [x1, y1] = polar(cx, cy, R, a1);
  const [x2, y2] = polar(cx, cy, r, a1);
  const [x3, y3] = polar(cx, cy, r, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M${x0},${y0} A${R},${R} 0 ${large} 1 ${x1},${y1} L${x2},${y2} A${r},${r} 0 ${large} 0 ${x3},${y3}Z`;
}

/* ───────────── Deals by Lead Source (card 669 × 415) ───────────── */
export function DonutChart() {
  const cx = 335, cy = 226, R = 144, r = 58;
  const START = -14; // degrees; matches the design's slice boundary at the top
  const total = LEAD_SOURCES.reduce((s, d) => s + d.count, 0);
  // Slice angles follow the percentages printed in the design, not raw counts.
  const pct = LEAD_SOURCES.map((d) => parseFloat(d.pct));
  const sum = pct.reduce((a, b) => a + b, 0);
  let acc = 0;
  void total;

  const label = (x: number, y: number, name: string, meta: string, anchor: "middle" = "middle") => (
    <text x={x} y={y} textAnchor={anchor} fontSize="12.5" fill="#444">
      <tspan x={x}>{name}</tspan>
      <tspan x={x} dy="15">{meta}</tspan>
    </text>
  );

  return (
    <svg viewBox="0 0 669 415" aria-label="Deals by lead source">
      <ArrowDefs />
      {LEAD_SOURCES.map((d, i) => {
        const a0 = (acc / sum) * 360 + START;
        acc += pct[i];
        const a1 = (acc / sum) * 360 + START;
        return <path key={d.name} d={arcPath(cx, cy, R, r, a0, a1)} fill={d.color} />;
      })}
      <g fill="none" stroke="#555" strokeWidth="1.4" strokeLinecap="round" markerEnd="url(#arrow)">
        <path d="M232,137 C202,128 171,133 155,157" />
        <path d="M428,133 C444,118 466,114 488,122" />
        <path d="M225,294 C220,322 188,334 154,324" />
        <path d="M410,342 C446,356 486,352 512,336" />
      </g>
      {label(122, 178, "Website", "10 (24.83%)")}
      {label(534, 139, "Inbound Call", "9 (37.87%)")}
      {label(107, 311, "Facebook", "1 (6.78%)")}
      {label(556, 314, "Reference", "1 (30.6%)")}
    </svg>
  );
}

/* ───────────── Deals by Stages by Development (card 668 × 415) ───────────── */
export function StageChart() {
  const x0 = 84, x1 = 574; // plot x-range inside the card
  const yBase = 256, perUnit = 18.6;
  const centers = [132, 208, 286, 363, 440, 518];
  const ticks = [0, 2.5, 5, 7.5, 10];
  const y = (v: number) => yBase - v * perUnit;

  return (
    <svg viewBox="0 0 668 415" aria-label="Deals by stage">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={x0} x2={x1} y1={y(t)} y2={y(t)} stroke={GRID} strokeWidth="1" />
          <text x={72} y={y(t) + 5} textAnchor="end" fontSize="15.5" fill={AXIS}>{t}</text>
        </g>
      ))}
      {STAGES.map((s, i) => {
        const bx = centers[i] - 20;
        const layers = [2, 1, 0] as const; // paint tallest first
        return (
          <g key={s.label}>
            {layers.map((li) => (
              <rect
                key={li}
                x={bx}
                y={y(s.tops[li])}
                width={40}
                height={yBase - y(s.tops[li])}
                fill={SERIES[li].color}
                rx={li === 2 ? 2 : 0}
              />
            ))}
            <text
              transform={`translate(${centers[i] + 6},${yBase + 14}) rotate(-40)`}
              textAnchor="end"
              fontSize="13.5"
              fill="#555"
            >
              {s.label}
            </text>
          </g>
        );
      })}
      <text transform="rotate(-90)" x={-159} y={39} textAnchor="middle" fontSize="16" fill="#555">Record Count</text>
      <text x={334} y={358} textAnchor="middle" fontSize="17" fill="#555">Stage</text>
      <Legend y={389} xs={[34, 173, 325]} />
    </svg>
  );
}

function Legend({ y, xs }: { y: number; xs: number[] }) {
  return (
    <g fontSize="15.5" fill="#333">
      {SERIES.map((s, i) => (
        <g key={s.name}>
          <circle cx={xs[i]} cy={y} r={10} fill={s.color} />
          <text x={xs[i] + 17} y={y + 5.5}>{s.name}</text>
        </g>
      ))}
    </g>
  );
}

/* ───────────── Deals by Sales People by Development (card 669 × 245) ───────────── */
export function SalesBars() {
  const labelX = [60, 127, 194, 260, 329, 402, 476, 549, 622];
  const labels = ["0", "2.5", "5", "7.5", "10", "12.5", "15", "17.5", "20"];
  const x0 = 60, per = 28.05; // px per record
  const rows = [{ y: 64 }, { y: 111 }];

  return (
    <svg viewBox="0 0 669 245" aria-label="Deals by sales people">
      <line x1={x0} x2={x0} y1={58} y2={152} stroke={GRID} />
      <line x1={480} x2={480} y1={58} y2={152} stroke={GRID} />
      <line x1={620} x2={620} y1={58} y2={152} stroke={GRID} />
      {rows.map((row, ri) =>
        ([2, 1, 0] as const).map((li) => (
          <rect
            key={`${ri}-${li}`}
            x={x0}
            y={row.y}
            width={SALES_BARS[ri].tops[li] * per}
            height={34}
            rx={9}
            fill={SERIES[li].color}
          />
        ))
      )}
      {labels.map((l, i) => (
        <text key={l} x={labelX[i]} y={174} textAnchor="middle" fontSize="15.5" fill={AXIS}>{l}</text>
      ))}
      <text x={334} y={197} textAnchor="middle" fontSize="17" fill="#555">Record Count</text>
      <text transform="rotate(-90)" x={-108} y={39} textAnchor="middle" fontSize="16" fill="#555">Deal Owner</text>
      <Legend y={224} xs={[36, 175, 326]} />
    </svg>
  );
}
