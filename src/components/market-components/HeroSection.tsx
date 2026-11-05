import { Link } from "react-router-dom";
import { PageHero } from "../SiteUI";
export default function HeroSection() {
  return (
    <PageHero
      eyebrow="MARKET / ENERGY SYSTEMS"
      title="The right energy solution starts here."
    >
      <p>
        Explore transformers and solar applications for your next installation.
        Discuss capacity, configuration and site requirements with the team.
      </p>
      <div className="flex flex-wrap gap-3 mt-6">
        <Link className="button button-primary" to="/services">
          Explore services ↗
        </Link>
        <Link className="button button-outline" to="/contact">
          Discuss requirements ↗
        </Link>
      </div>
    </PageHero>
  );
}
