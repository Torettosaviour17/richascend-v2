import { Link } from "react-router-dom";
import { PageHero } from "../SiteUI";
export default function HeroSection() {
  return (
    <PageHero
      eyebrow="ABOUT / RICHASCEND"
      title="Powering progress through engineering."
    >
      <p>
        Based in Nibo, Anambra State, Richascend brings electrical engineering,
        energy solutions and project delivery together around the needs of each
        site.
      </p>
      <div className="flex flex-wrap gap-3 mt-6">
        <Link className="button button-primary" to="/services">
          Explore our services ↗
        </Link>
        <Link className="button button-outline" to="/contact">
          Get in touch ↗
        </Link>
      </div>
    </PageHero>
  );
}
