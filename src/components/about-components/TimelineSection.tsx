import { Section } from "../SiteUI";
export default function TimelineSection() {
  return (
    <Section title="From an idea to an installation">
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          [
            "Discover",
            "Understand the site, intended use and existing systems.",
          ],
          ["Plan", "Agree the approach, scope and technical requirements."],
          ["Deliver", "Coordinate installation and keep the client informed."],
          ["Handover", "Discuss testing, operation and ongoing maintenance."],
        ].map(([t, d], i) => (
          <li key={t} className="surface-card">
            <p className="eyebrow">0{i + 1}</p>
            <h3 className="text-xl font-bold my-4">{t}</h3>
            <p>{d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
