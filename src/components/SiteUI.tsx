import type { ReactNode } from "react";
import { Link } from "react-router-dom";
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="site-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="hero-description">{children}</div>
      </div>
    </section>
  );
}
export function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="section-space">
      <div className="site-container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
export function CTA() {
  return (
    <section className="section-space bg-red-700 text-white">
      <div className="site-container text-center">
        <p className="eyebrow text-red-100">LET’S BUILD SOMETHING THAT LASTS</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Your next project starts with a conversation.
        </h2>
        <p className="mb-8 text-red-100">
          Discuss your requirements, site conditions and the right engineering
          approach.
        </p>
        <Link className="button button-white" to="/quote">
          Discuss a project <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
const disciplines = [
  {
    title: "Electrical engineering",
    text: "Planning electrical systems around the demands of your site, with attention to safe installation and dependable operation.",
    icon: "01",
  },
  {
    title: "Energy solutions",
    text: "Exploring solar, storage and transformer options suited to the load, budget and operating conditions of each project.",
    icon: "02",
  },
  {
    title: "Project delivery",
    text: "Coordinating scope, installation, testing and handover so clients can understand the work at every stage.",
    icon: "03",
  },
];
export function DisciplineCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {disciplines.map((d) => (
        <article key={d.title} className="surface-card">
          <span className="eyebrow">{d.icon} / EXPERTISE</span>
          <h3 className="text-xl font-bold my-4">{d.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{d.text}</p>
        </article>
      ))}
    </div>
  );
}
