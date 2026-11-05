import { Link, useParams } from "react-router-dom";
import { PageHero, Section } from "../SiteUI";
import { NotFound } from "../../pages/UtilityPage";
const capacities = [1000, 2000, 3000, 4000, 5000, 6000];
const images = [
  "/transformer1.avif",
  "/transformer2.webp",
  "/transformer3.avif",
  "/transformer4.jpeg",
  "/transformer5.jpeg",
  "/transformer6.avif",
];
export default function TransformerDetailPage() {
  const { model } = useParams();
  const index = capacities.findIndex((k) => model === `t-${k}`);
  if (index < 0) return <NotFound />;
  const kva = capacities[index];
  return (
    <>
      <PageHero
        eyebrow="MARKET / POWER TRANSFORMERS"
        title={`${kva.toLocaleString()} kVA transformer enquiry`}
      >
        <p>
          Discuss the right configuration for your electrical installation.
          Capacity options shown are a starting point for an enquiry;
          availability and manufacturer specifications need confirmation.
        </p>
      </PageHero>
      <Section title="Specify for the site">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="surface-card">
            <img
              className="rounded-xl w-full h-80 object-contain"
              src={images[index]}
              alt={`${kva} kVA transformer illustration`}
            />
            <p className="text-sm text-gray-500 mt-4">
              Illustrative image. Final equipment may differ.
            </p>
          </div>
          <div className="surface-card">
            <p className="eyebrow">CAPACITY / {kva.toLocaleString()} kVA</p>
            <h3 className="text-2xl font-bold my-4">
              Details to confirm with the engineer
            </h3>
            <dl className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                [
                  "Voltage & connection",
                  "Confirm primary/secondary voltage, phases and winding arrangement.",
                ],
                [
                  "Cooling & protection",
                  "Select according to duty, ambient conditions and installation requirements.",
                ],
                [
                  "Physical requirements",
                  "Request manufacturer dimensions, weight and required clearances.",
                ],
                [
                  "Performance & documentation",
                  "Request certified losses, impedance, test records and applicable standards.",
                ],
              ].map(([t, d]) => (
                <div key={t} className="py-4">
                  <dt className="font-bold">{t}</dt>
                  <dd className="text-gray-600 dark:text-gray-300 mt-2">{d}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link className="button button-primary" to="/quote">
                Request a quote
              </Link>
              <Link className="button button-outline" to="/contact">
                Ask for a datasheet
              </Link>
            </div>
          </div>
        </div>
        <Link
          className="inline-block mt-8 text-red-600 dark:text-red-400 font-semibold"
          to="/transformers"
        >
          ← All transformer options
        </Link>
      </Section>
    </>
  );
}
