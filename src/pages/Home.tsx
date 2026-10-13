import { DonutChart, SalesBars, StageChart } from "../components/charts";
import {
  ActiveListing, CalendarSchedule, DealsClosed, KpiRow, LeadsContacts, PipelineTable, Reminder,
} from "../components/dashboard";
import "../styles/home.css";

function ChartCard({ title, className, children }: { title: string; className: string; children: React.ReactNode }) {
  return (
    <section className={`card chart ${className}`}>
      <h2 className="card__title">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="home">
      <div className="home__main">
        <KpiRow />
        <ChartCard title="Deals by Lead Source" className="c-donut"><DonutChart /></ChartCard>
        <ChartCard title="Deals by Stages by Development" className="c-stage"><StageChart /></ChartCard>
        <ChartCard title="Deals by Sales People by Development" className="c-sales"><SalesBars /></ChartCard>
        <div className="c-pipe"><PipelineTable /></div>
        <div className="c-closed"><DealsClosed /></div>
        <div className="c-listing"><ActiveListing /></div>
        <div className="c-leads"><LeadsContacts /></div>
      </div>
      <aside className="home__side">
        <Reminder />
        <CalendarSchedule />
      </aside>
    </main>
  );
}
