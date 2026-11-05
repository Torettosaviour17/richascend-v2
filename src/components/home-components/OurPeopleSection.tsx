import { Link } from "react-router-dom";
import { Section, DisciplineCards } from "../SiteUI";
export default function OurPeopleSection() {
  return (
    <Section title="People. Precision. Practical solutions.">
      <p className="section-description">
        Engineering brings different disciplines together. Our work is built
        around understanding the site, selecting the right systems and
        coordinating delivery.
      </p>
      <DisciplineCards />
      <Link to="/FullTeamPage" className="button button-outline mt-8">
        How we work together ↗
      </Link>
    </Section>
  );
}
