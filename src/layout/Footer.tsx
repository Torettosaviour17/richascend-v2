import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div>
            <Link to="/" aria-label="Richascend home">
              <img src="/logo.png" alt="Richascend" className="w-36 mb-5" />
            </Link>
            <p className="text-gray-600 dark:text-gray-300">
              Engineering for dependable power, practical energy solutions and
              lasting infrastructure.
            </p>
          </div>
          <div>
            <h2 className="footer-title">Explore</h2>
            <div className="grid gap-3">
              {[
                "About",
                "Services",
                "Projects",
                "Insights",
                "Careers",
                "News",
              ].map((p) => (
                <Link key={p} to={"/" + p.toLowerCase()}>
                  {p}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="footer-title">Our expertise</h2>
            <div className="grid gap-3">
              <Link to="/transformers">Power transformers</Link>
              <Link to="/solar">Solar energy</Link>
              <Link to="/services">Engineering services</Link>
              <Link to="/quote">Request a quote</Link>
              <Link to="/schedule-consultation">Plan a consultation</Link>
            </div>
          </div>
          <div>
            <h2 className="footer-title">Visit & connect</h2>
            <p className="mb-4">
              25 Onyinafor Avenue, Nibo,
              <br />
              Anambra State, Nigeria.
            </p>
            <a className="block mb-4" href="tel:+2348135189992">
              +234 813 518 9992
            </a>
            <Link
              className="text-red-600 dark:text-red-400 font-semibold"
              to="/contact"
            >
              Contact information ↗
            </Link>
            <p className="text-sm mt-5 text-gray-500 dark:text-gray-400">
              Mon–Sat: 7:30am–5pm
              <br />
              Sunday: 3pm–6pm
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 py-6 flex flex-col sm:flex-row gap-4 justify-between text-sm">
          <p>
            © {new Date().getFullYear()} Richascend Engineering. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Website terms</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
