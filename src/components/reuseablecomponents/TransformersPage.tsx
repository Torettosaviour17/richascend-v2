import { Link } from "react-router-dom";
import { PageHero, Section, CTA } from "../SiteUI";
const options = [
  { kva: 1000, image: "/transformer1.avif" },
  { kva: 2000, image: "/transformer2.webp" },
  { kva: 3000, image: "/transformer3.avif" },
  { kva: 4000, image: "/transformer4.jpeg" },
  { kva: 5000, image: "/transformer5.jpeg" },
  { kva: 6000, image: "/transformer6.avif" },
];
export default function TransformersPage() {
  return (
    <>
      <PageHero
        eyebrow="MARKET / TRANSFORMERS"
        title="Power systems, specified with care."
      >
        <p>
          Explore capacity options from 1,000 to 6,000 kVA. Final equipment
          selection depends on site demand, supply voltage and installation
          requirements. Confirm availability with the team.
        </p>
      </PageHero>
      <Section title="Explore transformer capacities">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map(({ kva, image }) => (
            <article key={kva} className="surface-card flex flex-col">
              <img
                src={image}
                alt={`Illustrative transformer for a ${kva.toLocaleString()} kVA enquiry`}
                loading="lazy"
                className="h-48 w-full object-contain rounded-xl bg-gray-50 mb-6"
              />
              <p className="eyebrow">POWER TRANSFORMER / ENQUIRY</p>
              <h3 className="text-2xl font-bold my-3">
                {kva.toLocaleString()} kVA
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discuss voltage, cooling, protection and site requirements for
                your installation.
              </p>
              <Link
                className="button button-outline mt-auto"
                to={`/transformers/t-${kva}`}
              >
                Explore requirements ↗
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
