import { Link } from "react-router-dom";
import { PageHero } from "../SiteUI";
export function ServiceHero() {
  return (
    <PageHero
      eyebrow="SERVICES / ENGINEERING & DELIVERY"
      title="From the first question to the final handover."
    >
      <p>
        A practical approach to electrical infrastructure, transformer
        installations and solar energy projects.
      </p>
      <div className="flex flex-wrap gap-3 mt-6">
        <Link className="button button-primary" to="/quote">
          Request a quote ↗
        </Link>
        <Link className="button button-outline" to="/projects">
          Explore project concepts ↗
        </Link>
      </div>
    </PageHero>
  );
}
