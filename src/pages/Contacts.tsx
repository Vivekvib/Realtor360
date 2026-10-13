import { useMemo, useState } from "react";
import { CaretDown, GridIcon, SearchIcon } from "../components/Icons";
import {
  ASSIGNEES, CITIES, CONTACTS, PAGE_SIZE, ROLES, SOURCES, STATUSES, type Contact, type Status,
} from "../data/contacts";
import "../styles/contacts.css";

interface Filters {
  status: string[];
  role: string[];
  assignee: string[];
  city: string[];
  source: string[];
}
const EMPTY: Filters = { status: [], role: [], assignee: [], city: [], source: [] };

const STATUS_CLASS: Record<Status, string> = {
  Active: "st--active",
  "In Progress": "st--progress",
  Converted: "st--converted",
  Cold: "st--cold",
  "Not Interested": "st--no",
};

function Group({
  title, options, value, onChange,
}: { title: string; options: string[]; value: string[]; onChange: (v: string[]) => void }) {
  const toggle = (o: string) =>
    onChange(value.includes(o) ? value.filter((x) => x !== o) : [...value, o]);
  return (
    <fieldset className="fgroup">
      <legend>{title}</legend>
      {options.map((o) => (
        <label key={o} className="check">
          <input type="checkbox" checked={value.includes(o)} onChange={() => toggle(o)} />
          <span className="check__box" />
          <span>{o}</span>
        </label>
      ))}
    </fieldset>
  );
}

const matches = (c: Contact, f: Filters, q: string) =>
  (!q || c.name.toLowerCase().includes(q.toLowerCase())) &&
  (!f.status.length || f.status.includes(c.status)) &&
  (!f.role.length || f.role.includes(c.role)) &&
  (!f.assignee.length || f.assignee.includes(c.assignee)) &&
  (!f.city.length || f.city.includes(c.city)) &&
  (!f.source.length || f.source.includes(c.source));

export default function Contacts() {
  const [draft, setDraft] = useState<Filters>(EMPTY);   // checkbox state
  const [applied, setApplied] = useState<Filters>(EMPTY); // takes effect on "Apply Filters"
  const [sideQ, setSideQ] = useState("");
  const [topQ, setTopQ] = useState("");
  const [page, setPage] = useState(1);

  const q = topQ || sideQ;
  const rows = useMemo(() => CONTACTS.filter((c) => matches(c, applied, q)), [applied, q]);
  const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const cur = Math.min(page, pages);
  const visible = rows.slice((cur - 1) * PAGE_SIZE, cur * PAGE_SIZE);

  const set = (k: keyof Filters) => (v: string[]) => setDraft((d) => ({ ...d, [k]: v }));
  const apply = () => { setApplied(draft); setPage(1); };
  const reset = () => { setDraft(EMPTY); setApplied(EMPTY); setSideQ(""); setTopQ(""); setPage(1); };

  return (
    <main className="contacts">
      <aside className="filters">
        <h2>Filters</h2>
        <label className="fsearch">
          <input placeholder="Search by Contact Name" value={sideQ} onChange={(e) => { setSideQ(e.target.value); setPage(1); }} />
          <SearchIcon width={18} height={18} />
        </label>
        <Group title="Status" options={STATUSES} value={draft.status} onChange={set("status")} />
        <Group title="Role" options={ROLES} value={draft.role} onChange={set("role")} />
        <Group title="Assigned To" options={ASSIGNEES} value={draft.assignee} onChange={set("assignee")} />
        <Group title="City" options={CITIES} value={draft.city} onChange={set("city")} />
        <Group title="Lead Source" options={SOURCES} value={draft.source} onChange={set("source")} />
        <button className="btn-apply" onClick={apply}>Apply Filters</button>
        <button className="btn-reset" onClick={reset}>Reset Filters</button>
      </aside>

      <section className="clist">
        <header className="clist__head">
          <h1>All Contacts</h1>
          <div className="clist__bar">
            <button className="btn-create">+ Create Contact</button>
            <div className="clist__tools">
              <label className="tsearch">
                <input placeholder="Search Contact" value={topQ} onChange={(e) => { setTopQ(e.target.value); setPage(1); }} />
                <SearchIcon width={24} height={24} />
              </label>
              <button className="tbtn tbtn--view" aria-label="Change view"><GridIcon /><CaretDown width={8} height={5} /></button>
              <button className="tbtn tbtn--actions">Actions <CaretDown width={9} height={5} /></button>
            </div>
          </div>
        </header>

        <div className="ctable-wrap">
        <div className="ctable">
          <div className="ctable__row ctable__row--head">
            <span>Contact Name</span><span>Company</span><span>Role</span><span>Phone No.</span>
            <span>Deal Stage</span><span>Status</span><span>Assigned to</span>
          </div>
          {visible.map((c) => (
            <div className="ctable__row" key={c.id}>
              <span className="ctable__name"><b>{c.name}</b><small>Email: {c.email}</small></span>
              <span>{c.company}</span>
              <span>{c.role}</span>
              <span>{c.phone}</span>
              <span>{c.stage}</span>
              <span><em className={`st ${STATUS_CLASS[c.status]}`}>{c.status}</em></span>
              <span>{c.assignee === "Jessica" ? "Jessica Chen" : c.assignee}</span>
            </div>
          ))}
          {!visible.length && <p className="ctable__empty">No contacts match these filters.</p>}
        </div>
        </div>

        <nav className="pager" aria-label="Pagination">
          <button disabled={cur === 1} onClick={() => setPage(cur - 1)}>‹ Prev</button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button key={n} className={n === cur ? "is-cur" : ""} onClick={() => setPage(n)}>{n}</button>
          ))}
          <button disabled={cur === pages} onClick={() => setPage(cur + 1)}>Next ›</button>
        </nav>
      </section>
    </main>
  );
}
