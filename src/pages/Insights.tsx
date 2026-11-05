import { Link } from "react-router-dom";
import { PageHero, Section, CTA } from "../components/SiteUI";
import { guides } from "../content/guides";
export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="INSIGHTS / PRACTICAL KNOWLEDGE"
        title="Better questions. Better project decisions."
      >
        <p>
          Clear starting points for conversations about solar energy,
          transformers and the long-term care of your installation.
        </p>
        <a className="button button-primary mt-6" href="#guides">
          Explore the guides ↓
        </a>
      </PageHero>
      <Section id="guides" title="Engineering, explained">
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g) => (
            <article
              className="surface-card overflow-hidden p-0 flex flex-col"
              key={g.id}
            >
              <img
                className="w-full h-52 object-cover"
                src={g.image}
                alt=""
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-1">
                <p className="eyebrow">{g.category}</p>
                <h3 className="text-xl font-bold my-4">{g.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {g.summary}
                </p>
                <Link
                  className="text-red-600 dark:text-red-400 font-semibold mt-auto"
                  to={"/insights/" + g.id}
                >
                  Read the guide ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
