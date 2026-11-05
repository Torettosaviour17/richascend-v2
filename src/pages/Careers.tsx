import { Link } from "react-router-dom";
import { PageHero, Section, DisciplineCards } from "../components/SiteUI";
export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS / BUILD WITH PURPOSE"
        title="Bring your skills to practical engineering."
      >
        <p>
          Explore how your experience in electrical systems, energy or project
          delivery could contribute to the work.
        </p>
        <Link className="button button-primary mt-6" to="/application-form">
          Prepare an introduction ↗
        </Link>
      </PageHero>
      <Section title="Where your experience could fit">
        <DisciplineCards />
      </Section>
      <Section title="Opportunities">
        <div className="surface-card">
          <p className="eyebrow">EXPRESSIONS OF INTEREST</p>
          <h3 className="text-2xl font-bold my-4">
            Start a conversation with the team.
          </h3>
          <p className="max-w-2xl text-gray-600 dark:text-gray-300">
            No confirmed vacancies are listed on this website at the moment.
            Call the company to ask about current opportunities before sharing
            an application. You can prepare an introduction covering your
            experience and the type of work you are looking for.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/application-form" className="button button-primary">
              Prepare your introduction
            </Link>
            <a href="tel:+2348135189992" className="button button-outline">
              Ask about opportunities
            </a>
          </div>
        </div>
      </Section>
      <Section title="A simple way to introduce yourself">
        <ol className="grid md:grid-cols-3 gap-6">
          {[
            [
              "01",
              "Tell us your focus",
              "Describe your discipline, practical experience and the work that interests you.",
            ],
            [
              "02",
              "Share relevant work",
              "Include a portfolio or CV link with examples relevant to engineering or delivery.",
            ],
            [
              "03",
              "Confirm the next step",
              "Contact the team to discuss available opportunities and how to apply.",
            ],
          ].map(([n, t, d]) => (
            <li key={n} className="surface-card">
              <span className="eyebrow">{n}</span>
              <h3 className="text-xl font-bold my-3">{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
