import { useState } from "react";
import { motion } from "framer-motion";
import ProjectsHero from "../components/project-components/ProjectsHero";
import ProjectsFilters from "../components/project-components/ProjectsFilters";
import ProjectsGrid from "../components/project-components/ProjectsGrid";
import ProjectsStats from "../components/project-components/ProjectsStats";
import ProjectsCTA from "../components/project-components/ProjectsCTA";
import { projects } from "../components/project-components/projectTypes";

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const term = searchTerm.trim().toLowerCase();
  const filteredProjects = projects.filter(
    (project) =>
      (filter === "all" || project.category === filter) &&
      (!term ||
        [
          project.title,
          project.description,
          project.location,
          ...project.technologies,
        ].some((value) => value.toLowerCase().includes(term))),
  );

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsHero />
      <div className="site-container">
        <p className="form-notice">
          Illustrative engineering concepts: the entries below demonstrate
          possible applications. They are not verified Richascend client
          projects or completion records.
        </p>
      </div>

      <ProjectsFilters
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <section id="project-list" className="py-12">
        <div className="container mx-auto px-4">
          <ProjectsGrid
            filteredProjects={filteredProjects}
            expandedProject={expandedProject}
            setExpandedProject={setExpandedProject}
          />
        </div>
      </section>

      <ProjectsStats />
      <ProjectsCTA />
    </motion.div>
  );
};

export default ProjectsPage;
