import { useEffect, useState } from "react";
import Navbar, { type NavKey } from "./components/Navbar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

const fromHash = (): NavKey => (window.location.hash.replace("#/", "") === "contacts" ? "Contacts" : "Home");

export default function App() {
  const [page, setPage] = useState<NavKey>(fromHash());

  useEffect(() => {
    const onHash = () => setPage(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (k: NavKey) => {
    window.location.hash = k === "Contacts" ? "#/contacts" : "#/";
    setPage(k);
  };

  return (
    <div className="app">
      <Navbar active={page} onNavigate={go} />
      {page === "Contacts" ? <Contacts /> : <Home />}
    </div>
  );
}
