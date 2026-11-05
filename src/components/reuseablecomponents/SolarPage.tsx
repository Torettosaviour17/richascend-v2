import { Link } from "react-router-dom";
import { PageHero, Section, CTA } from "../SiteUI";
const solutions = [
  {
    type: "Residential",
    description:
      "Plan solar generation and backup around the appliances and operating hours of your home.",
    features: [
      "Essential loads",
      "Battery backup",
      "Roof and shading assessment",
    ],
  },
  {
    type: "Commercial",
    description:
      "Explore solar options for offices, retail spaces and institutions with daytime energy demand.",
    features: [
      "Demand assessment",
      "Rooftop planning",
      "Operating cost considerations",
    ],
  },
  {
    type: "Industrial",
    description:
      "Consider generation and storage alongside existing power systems and production requirements.",
    features: [
      "Load characteristics",
      "System integration",
      "Maintenance access",
    ],
  },
  {
    type: "Larger installations",
    description:
      "Discuss feasibility, grid requirements and the site conditions for a larger energy project.",
    features: [
      "Site feasibility",
      "Grid connection requirements",
      "Project scope and delivery",
    ],
  },
];
export default function SolarPage() {
  return (
    <>
      <PageHero
        eyebrow="MARKET / SOLAR ENERGY"
        title="Make room for a different energy future."
      >
        <p>
          A well-planned solar installation begins with an understanding of how
          your site uses power. Explore applications and prepare the right
          questions for an assessment.
        </p>
      </PageHero>
      <Section title="Solar around the way you work and live">
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <article className="surface-card" key={s.type}>
              <p className="eyebrow">0{i + 1} / SOLAR APPLICATION</p>
              <h3 className="text-2xl font-bold my-4">{s.type}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {s.description}
              </p>
              <ul className="space-y-3 mb-7">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden="true" className="text-red-600">
                      ↗
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link className="button button-outline" to="/quote">
                Discuss a solar project
              </Link>
            </article>
          ))}
        </div>
        <p className="form-notice mt-8">
          System capacity, equipment performance, pricing and warranty terms are
          confirmed after assessment and supplier review.
        </p>
        <Link
          className="inline-block mt-6 text-red-600 dark:text-red-400 font-semibold"
          to="/insights/solar-planning"
        >
          Read the solar planning guide ↗
        </Link>
      </Section>
      <CTA />
    </>
  );
}
