import { Link, useParams } from "react-router-dom";
import { guides } from "../content/guides";
import { PageHero, Section } from "../components/SiteUI";
import { NotFound } from "./UtilityPage";
export default function GuidePage() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.id === slug);
  if (!guide) return <NotFound />;
  return (
    <>
      <PageHero
        eyebrow={"GUIDE / " + guide.category.toUpperCase()}
        title={guide.title}
      >
        <p>{guide.summary}</p>
      </PageHero>
      <Section title="What to consider">
        <article className="max-w-3xl mx-auto">
          <img
            className="rounded-2xl w-full max-h-96 object-cover mb-10"
            src={guide.image}
            alt=""
          />
          <div className="prose-copy">
            {guide.sections.map(([t, d]) => (
              <div className="mb-8" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="form-notice">
            General planning guidance only. Final design and installation
            requirements need a qualified professional’s assessment.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link className="button button-primary" to="/quote">
              Discuss your requirements
            </Link>
            <Link className="button button-outline" to="/insights">
              All guides
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}
