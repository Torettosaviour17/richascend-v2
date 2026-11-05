import { Link } from "react-router-dom";
import { Section } from "../SiteUI";
export default function OurWorkSection() {
  return (
    <Section title="Powering everyday possibilities.">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="eyebrow">FROM REQUIREMENT TO REALITY</p>
          <h3 className="text-3xl font-bold my-5">
            Considered systems. Built around your site.
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            From transformer selection to solar planning, a successful
            installation begins with the right questions. Explore the systems
            and applications that shape an engineering project.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/market" className="button button-primary">
              Explore our solutions ↗
            </Link>
            <Link to="/projects" className="button button-outline">
              Project concepts
            </Link>
          </div>
        </div>
        <img
          src="/transformerGridUpgrade.jpg"
          alt="Electrical infrastructure and transformer installation"
          loading="lazy"
          className="w-full h-80 md:h-96 rounded-2xl object-cover"
        />
      </div>
    </Section>
  );
}
