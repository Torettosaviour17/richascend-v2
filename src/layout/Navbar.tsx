import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun, FaSearch } from "react-icons/fa";
const pages = [
  { path: "/", label: "Home" },
  { path: "/market", label: "Market" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/insights", label: "Insights" },
  { path: "/about", label: "About" },
  { path: "/careers", label: "Careers" },
  { path: "/news", label: "News" },
  { path: "/contact", label: "Contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });
  const location = useLocation();
  useEffect(() => { setOpen(false); setSearch(false); setQuery(""); }, [location.pathname]);
  const menuButton = useRef<HTMLButtonElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* Theme remains usable without storage. */
    }
  }, [dark]);
  useEffect(() => {
    if (search) searchInput.current?.focus();
  }, [search]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSearch(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  const close = () => {
    setOpen(false);
    setSearch(false);
    setQuery("");
  };
  const results = pages.filter((p) =>
    p.label.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <header className="site-header" key={location.pathname}>
      <div className="site-container nav-bar">
        <Link
          to="/"
          onClick={close}
          aria-label="Richascend home"
          className="brand"
        >
          <img src="/logo.png" alt="Richascend" />
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {pages.slice(1).map((p) => (
            <NavLink
              key={p.path}
              to={p.path}
              onClick={close}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {p.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <button
            className="icon-button"
            aria-label={search ? "Close search" : "Search site"}
            aria-expanded={search}
            onClick={() => {
              setSearch(!search);
              setOpen(false);
            }}
          >
            <FaSearch />
          </button>
          <button
            className="icon-button"
            aria-label={dark ? "Use light theme" : "Use dark theme"}
            onClick={() => setDark(!dark)}
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => {
              setOpen(!open);
              setSearch(false);
            }}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {search && (
        <div className="nav-panel">
          <div className="site-container py-5">
            <label htmlFor="site-search" className="block font-semibold mb-2">
              Find a page
            </label>
            <input
              ref={searchInput}
              id="site-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try services, solar or contact"
            />
            <div className="flex flex-wrap gap-2 mt-3" aria-live="polite">
              {(query.toLowerCase().includes("solar")
                ? [{ path: "/solar", label: "Solar energy" }]
                : query.toLowerCase().includes("transform")
                  ? [{ path: "/transformers", label: "Transformers" }]
                  : results
              ).map((p) => (
                <Link
                  key={p.path}
                  className="search-result"
                  to={p.path}
                  onClick={close}
                >
                  {p.label} ↗
                </Link>
              ))}
              {results.length === 0 &&
                !/solar|transform/.test(query.toLowerCase()) && (
                  <p>No matching pages. Try “services” or “contact”.</p>
                )}
            </div>
          </div>
        </div>
      )}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="nav-panel mobile-nav"
        >
          <div className="site-container grid grid-cols-2 gap-2 py-5">
            {pages.map((p) => (
              <NavLink
                key={p.path}
                to={p.path}
                onClick={close}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {p.label}
              </NavLink>
            ))}
            <Link
              to="/quote"
              className="button button-primary col-span-2 mt-3"
              onClick={close}
            >
              Discuss your project ↗
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
