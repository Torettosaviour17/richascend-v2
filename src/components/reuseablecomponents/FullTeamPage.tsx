import { PageHero, Section, DisciplineCards, CTA } from "../SiteUI";
export default function FullTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="PEOPLE / COLLABORATION"
        title="Different skills. One considered approach."
      >
        <p>
          Electrical engineering, energy planning and project coordination work
          together around the needs of each site.
        </p>
      </PageHero>
      <Section title="Expertise across the project">
        <DisciplineCards />
      </Section>
      <Section title="What collaboration looks like">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            [
              "Start with the requirements",
              "Agree what the site needs, who will use it and how success will be assessed.",
            ],
            [
              "Make the details clear",
              "Discuss technical options, practical constraints and the scope before committing to an installation.",
            ],
            [
              "Coordinate the work",
              "Keep the client informed about delivery, access requirements and next steps.",
            ],
            [
              "Plan for ongoing use",
              "Include testing, handover and maintenance considerations in the project conversation.",
            ],
          ].map(([t, d], i) => (
            <article key={t} className="surface-card">
              <p className="eyebrow">0{i + 1} / APPROACH</p>
              <h3 className="text-xl font-bold my-3">{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
