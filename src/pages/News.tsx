import { Link } from "react-router-dom";
import { PageHero, Section } from "../components/SiteUI";
import { guides } from "../content/guides";
export default function News() {
  return (
    <>
      <PageHero
        eyebrow="NEWS / RICHASCEND"
        title="Updates worth keeping up with."
      >
        <p>
          Company announcements and useful engineering resources, in one place.
        </p>
      </PageHero>
      <Section title="Company updates">
        <div className="surface-card flex flex-col md:flex-row gap-8 items-start">
          <span className="text-red-600 text-5xl" aria-hidden="true">
            ↗
          </span>
          <div>
            <p className="eyebrow">ANNOUNCEMENTS</p>
            <h3 className="text-2xl font-bold my-4">
              Check back for the next company update.
            </h3>
            <p className="max-w-2xl text-gray-600 dark:text-gray-300">
              There are no published company announcements here yet. For current
              product availability, project enquiries or company information,
              contact the team directly.
            </p>
            <Link className="button button-outline mt-6" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </Section>
      <Section title="In the meantime, explore our guides">
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g) => (
            <article className="surface-card" key={g.id}>
              <p className="eyebrow">{g.category}</p>
              <h3 className="text-xl font-bold my-4">{g.title}</h3>
              <p className="mb-6">{g.summary}</p>
              <Link
                className="text-red-600 dark:text-red-400 font-semibold"
                to={"/insights/" + g.id}
              >
                Read guide ↗
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
