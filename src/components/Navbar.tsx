import { PEOPLE } from "../data/photos";
import Avatar from "./Avatar";
import { CaretDown, Logo, SearchIcon } from "./Icons";
import "../styles/navbar.css";

export type NavKey =
  | "Home" | "Developments" | "Buildings" | "Units" | "Leads" | "Companies"
  | "Contacts" | "Deals" | "Activities" | "Attorney Firms" | "Reports";

const ITEMS: NavKey[] = [
  "Home", "Developments", "Buildings", "Units", "Leads", "Companies",
  "Contacts", "Deals", "Activities", "Attorney Firms", "Reports",
];

interface Props {
  active: NavKey;
  onNavigate: (k: NavKey) => void;
}

export default function Navbar({ active, onNavigate }: Props) {
  return (
    <header className="nav">
      <a className="nav__brand" href="#/" onClick={() => onNavigate("Home")}>
        <Logo />
        <span>REALTOR360</span>
      </a>

      <nav className="nav__items" aria-label="Primary">
        {ITEMS.map((k) => (
          <button
            key={k}
            className={`nav__item${k === active ? " is-active" : ""}`}
            onClick={() => onNavigate(k)}
          >
            {k}
          </button>
        ))}
        <button className="nav__item nav__more" aria-label="More">···</button>
      </nav>

      <div className="nav__right">
        <label className="nav__search">
          <input placeholder="Search..." />
          <SearchIcon />
        </label>
        <button className="nav__profile" aria-label="Profile">
          <Avatar size={44} seed={0} src={PEOPLE.profile} alt="Profile" />
          <CaretDown />
        </button>
      </div>
    </header>
  );
}
