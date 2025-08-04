// src/layout/Navbar.tsx
import { useEffect, useState, useRef } from "react";
import { FaSearch, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : false;
  });

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 100) {
        setShowNav(true);
        setLastScrollY(currentY);
        return;
      }

      if (currentY < lastScrollY) {
        setShowNav(true);
      } else if (currentY > lastScrollY + 10) {
        setShowNav(false);
        setIsMobileMenuOpen(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Apply dark mode globally
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Close mobile menu and search when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const centerNavItems = [
    { path: "/market", label: "Market" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/insights", label: "Insights" },
  ];

  const rightNavItems = [
    { path: "/about", label: "About" },
    { path: "/careers", label: "Careers" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-300 
          ${showNav ? "translate-y-0" : "-translate-y-full"}
          ${isMobileMenuOpen ? "hidden" : "block"}
          bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm`}
      >
        <nav className="max-w-[1440px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between gap-2">
          {/* Logo */}
          <Link to="/" className="w-[120px] h-[40px] block shrink-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Center nav links - Always visible */}
          <div className="flex-1 flex justify-center">
            <ul className="hidden lg:flex gap-4 sm:gap-6 md:gap-8 text-base font-medium overflow-x-auto whitespace-nowrap">
              {centerNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`pb-1 transition-all ${
                      isActive(item.path)
                        ? "text-red-600 dark:text-red-500 font-semibold border-b-2 border-red-600 dark:border-red-500"
                        : "text-gray-800 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right nav - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {rightNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-all ${
                  isActive(item.path)
                    ? "text-red-600 dark:text-red-500 font-semibold"
                    : "text-gray-800 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Search */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  setSearchQuery("");
                }}
                className="text-gray-800 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                <FaSearch />
              </button>

              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-3 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2 z-20">
                  <form onSubmit={handleSearch} className="flex">
                    <input
                      type="text"
                      ref={searchRef}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="flex-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                      type="submit"
                      className="bg-red-600 text-white p-2 rounded-r-lg hover:bg-red-700 transition-colors"
                    >
                      <FaSearch />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="ml-2 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-xs text-gray-800 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <div className="flex items-center gap-2">
                  <FaSun className="text-yellow-400" /> Light
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <FaMoon /> Dark
                </div>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-800 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
            >
              <FaSearch />
            </button>

            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </nav>

        {/* Mobile search */}
        {isSearchOpen && (
          <div className="lg:hidden px-4 pb-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 text-white p-2 rounded-r-lg hover:bg-red-700 transition-colors"
              >
                <FaSearch />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out overflow-auto ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Close button at top right */}
        <div className="absolute top-4 right-4 z-10">
          <button
            className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes className="text-2xl text-gray-800 dark:text-gray-200" />
          </button>
        </div>

        {/* Mobile menu content */}
        <div className="container mx-auto px-4 py-16">
          <ul className="space-y-6">
            {/* Home link */}
            <li className="w-full">
              <Link
                to="/"
                className={`block py-1 rounded-md transition text-center text-sm font-medium ${
                  isActive("/")
                    ? "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400"
                    : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Center nav items */}
            {centerNavItems.map((item) => (
              <li key={item.path} className="w-full">
                <Link
                  to={item.path}
                  className={`block py-1 rounded-md transition text-center text-md font-medium ${
                    isActive(item.path)
                      ? "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400"
                      : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Right nav items */}
            {rightNavItems.map((item) => (
              <li key={item.path} className="w-full">
                <Link
                  to={item.path}
                  className={`block py-1 rounded-md transition text-center text-md font-medium ${
                    isActive(item.path)
                      ? "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400"
                      : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Dark mode toggle */}
            <li className="w-full">
              <button
                onClick={() => {
                  setDarkMode((prev) => !prev);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-center gap-3 py-1 rounded-md transition text-xl font-medium ${
                  darkMode
                    ? "bg-gray-200 dark:bg-gray-800 text-yellow-600 dark:text-yellow-400"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                }`}
              >
                <span>{darkMode ? "Light mode" : "Dark Mode"}</span>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
