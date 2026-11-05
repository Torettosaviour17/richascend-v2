import { Section } from "../SiteUI";
export default function ProjectsStats() {
  return (
    <Section title="A considered approach to every brief">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          [
            "Site-led planning",
            "Understand the supply, load and operating environment.",
          ],
          [
            "Clear project scope",
            "Agree the work, technical requirements and handover expectations.",
          ],
          [
            "Long-term thinking",
            "Consider reliability, maintenance and future capacity.",
          ],
        ].map(([t, d]) => (
          <article className="surface-card" key={t}>
            <h3 className="text-xl font-bold mb-3">{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
