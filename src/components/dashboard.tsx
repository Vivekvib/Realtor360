import { useState } from "react";
import Avatar from "./Avatar";
import {
  ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight,
  CoinsIcon, HandshakeIcon, HomeIcon, LeadIcon, PhoneIcon,
} from "./Icons";
import {
  CAL_MARKS, KPIS, LEAD_CONTACTS, LISTINGS, PIPELINE, REMINDERS, SCHEDULE,
  type Kpi, type Listing,
} from "../data/dashboard";

const KPI_ICON = { listing: HomeIcon, leads: LeadIcon, closed: HandshakeIcon, revenue: CoinsIcon } as const;

export function KpiCard({ k }: { k: Kpi }) {
  const Icon = KPI_ICON[k.key];
  return (
    <section className="card kpi">
      <div className="kpi__head">
        <span className="kpi__icon"><Icon /></span>
        <h3>{k.label}</h3>
      </div>
      <div className="kpi__row">
        <strong>{k.value}</strong>
        <span className={`badge badge--${k.trend}`}>
          {k.delta} {k.trend === "up" ? <ArrowUpRight /> : <ArrowDownRight />}
        </span>
      </div>
    </section>
  );
}

export const KpiRow = () => <>{KPIS.map((k) => <KpiCard key={k.key} k={k} />)}</>;

/* ───────────── Pipeline table ───────────── */
export function PipelineTable() {
  return (
    <section className="card pipeline">
      <h2 className="card__title">Deals in Pipeline by Development</h2>
      <table className="pipeline__table">
        <thead>
          <tr><th>Development Name</th><th>Record Count</th></tr>
        </thead>
        <tbody>
          {PIPELINE.map((r) => (
            <tr key={r.name}><td>{r.name}</td><td>{r.count}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

/* ───────────── Total deals closed ───────────── */
export function DealsClosed() {
  return (
    <section className="card closed">
      <h2 className="card__title">Total Deals Closed</h2>
      <div className="closed__track">
        <div className="closed__fill" />
        <div className="closed__marker" />
      </div>
      <div className="closed__meta">
        <span><b>42</b> Closed Deals</span>
        <span><b>132</b> On Progress</span>
      </div>
    </section>
  );
}

/* ───────────── Active listing ───────────── */
const TONES = [
  ["#7a5640", "#c9a27a", "#3b2a20"],
  ["#4aa3c9", "#e8d9a8", "#2a6f8a"],
  ["#d9c3a3", "#6b5a4a", "#2b2b2b"],
  ["#2d5fa8", "#9cc0ea", "#16335f"],
];

function Thumb({ tone }: { tone: number }) {
  const [a, b, c] = TONES[tone];
  return (
    <svg className="thumb" viewBox="0 0 38 38" aria-hidden>
      <rect width="38" height="38" rx="6" fill={b} />
      <rect y="22" width="38" height="16" fill={a} opacity=".55" />
      <path d="M5 34V17l7-6 7 6v17z" fill={a} />
      <path d="M17 34V13l9-6 8 6v21z" fill={c} opacity=".9" />
      <g fill="#fff" opacity=".8">
        <rect x="21" y="16" width="3" height="3" /><rect x="27" y="16" width="3" height="3" />
        <rect x="21" y="23" width="3" height="3" /><rect x="27" y="23" width="3" height="3" />
      </g>
    </svg>
  );
}

function ListingRow({ l }: { l: Listing }) {
  return (
    <tr>
      <td>
        <div className="prop">
          <Thumb tone={l.tone} />
          <span>{l.name[0]}<br />{l.name[1]}</span>
        </div>
      </td>
      <td>{l.type}</td>
      <td>{l.units}</td>
      <td>{l.price}</td>
      <td>
        <div className="stack">
          <Avatar size={30} seed={3} ring />
          <Avatar size={30} seed={1} ring style={{ marginLeft: -9 }} />
          <span className="stack__more">{l.leads[2]}</span>
        </div>
      </td>
      <td>{l.views}</td>
      <td><span className={`pill pill--${l.status === "sold" ? "red" : "green"}`}>{l.statusLabel}</span></td>
    </tr>
  );
}

export function ActiveListing() {
  return (
    <section className="card listing">
      <h2 className="card__title">Active Listing</h2>
      <table className="listing__table">
        <thead>
          <tr>
            <th>Property</th><th>Type</th><th>Units</th><th>Price</th>
            <th>Active Leads</th><th>Views</th><th>Status</th>
          </tr>
        </thead>
        <tbody>{LISTINGS.map((l) => <ListingRow key={l.name[0]} l={l} />)}</tbody>
      </table>
    </section>
  );
}

/* ───────────── Leads contacts ───────────── */
export function LeadsContacts() {
  return (
    <section className="card leads">
      <div className="leads__head">
        <h2 className="card__title">Leads Contacts</h2>
        <button className="leads__open" aria-label="Open leads"><ArrowUpRight width={10} height={10} /></button>
      </div>
      <ul>
        {LEAD_CONTACTS.map((c) => (
          <li key={c.name}>
            <Avatar size={44} seed={c.seed} />
            <div>
              <b>{c.name}</b>
              <small>{c.city}</small>
            </div>
            <button className="leads__call" aria-label={`Call ${c.name}`}><PhoneIcon /></button>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ───────────── Reminder ───────────── */
export function Reminder() {
  return (
    <section className="card reminder">
      <h2 className="card__title">Reminder</h2>
      <div className="reminder__hl">
        <b>Follow-Ups</b>
        <p>15 leads need to be followed up.</p>
        <div className="reminder__faces">
          {[0, 1, 2, 3].map((i) => (
            <Avatar key={i} size={26} seed={i + 1} ring style={{ marginLeft: i ? -9 : 0 }} />
          ))}
          <span className="reminder__plus">+11</span>
        </div>
      </div>
      <ul>
        {REMINDERS.map((r) => (
          <li key={r.title}><b>{r.title}</b><p>{r.body}</p></li>
        ))}
      </ul>
    </section>
  );
}

/* ───────────── Calendar + schedule ───────────── */
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function CalendarSchedule() {
  const [view, setView] = useState({ y: 2025, m: 6 });
  const today = { y: 2025, m: 6, d: 8 };
  const first = new Date(view.y, view.m, 1).getDay();
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);

  const shift = (n: number) =>
    setView(({ y, m }) => {
      const t = m + n;
      return { y: y + Math.floor(t / 12), m: ((t % 12) + 12) % 12 };
    });

  const isMarked = view.y === 2025 && view.m === 6;

  return (
    <section className="card cal">
      <div className="cal__head">
        <h2>{MONTHS[view.m]} {view.y}</h2>
        <div>
          <button onClick={() => shift(-1)} aria-label="Previous month"><ChevronLeft /></button>
          <button onClick={() => shift(1)} aria-label="Next month"><ChevronRight /></button>
        </div>
      </div>
      <div className="cal__grid">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i} className="cal__dow">{d}</span>)}
        {cells.map((d, i) => {
          const isToday = d === today.d && view.m === today.m && view.y === today.y;
          const mark = d && isMarked ? CAL_MARKS[d] : undefined;
          return (
            <span key={i} className={`cal__day${isToday ? " is-today" : ""}`}>
              {d && <i>{d}</i>}
              {mark && <u style={{ background: mark }} />}
            </span>
          );
        })}
      </div>
      <hr />
      <h3 className="cal__sched">My Schedule</h3>
      <ul className="sched">
        {SCHEDULE.map((s) => (
          <li key={s.title} style={{ ["--c" as string]: s.color }}>
            <b>{s.title}</b>
            <p>{s.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
