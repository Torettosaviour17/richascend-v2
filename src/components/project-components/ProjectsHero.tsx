import { PageHero } from "../SiteUI";
export default function ProjectsHero() {
  return (
    <PageHero
      eyebrow="PROJECTS / POSSIBILITIES"
      title="Engineering ideas, brought into focus."
    >
      <p>
        Explore illustrative applications across renewable energy and electrical
        infrastructure.
      </p>
      <div className="flex flex-wrap gap-3 mt-6">
        <a href="#project-list" className="button button-primary">
          Browse concepts ↓
        </a>
      </div>
    </PageHero>
  );
}
