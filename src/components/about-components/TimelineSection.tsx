// components/about-components/TimelineSection.tsx
import { motion } from "framer-motion";

export default function TimelineSection() {
  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description:
        "Richascend established with a vision to revolutionize engineering solutions.",
    },
    {
      year: "2012",
      title: "First Major Project",
      description:
        "Completed the Harbor Bridge project, our first large-scale infrastructure development.",
    },
    {
      year: "2015",
      title: "Sustainability Initiative",
      description:
        "Launched our Green Engineering program to reduce environmental impact.",
    },
    {
      year: "2018",
      title: "International Expansion",
      description:
        "Opened offices in three new countries to serve global clients.",
    },
    {
      year: "2021",
      title: "Tech Innovation Lab",
      description:
        "Established our R&D center focused on AI and sustainable materials.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Awarded Engineering Excellence Award for SkyBridge project.",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-900 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our <span className="text-red-500">Journey</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Milestones that shaped Richascend Engineering
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-800 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  className="relative flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`md:absolute top-0 ${
                      isLeft
                        ? "md:left-1/2 md:-translate-x-16"
                        : "md:right-1/2 md:translate-x-16"
                    } z-10`}
                  >
                    <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 border-4 border-red-500 flex items-center justify-center shadow-md">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {milestone.year}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`flex-1 mt-6 md:mt-0 ${
                      isLeft ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div
                      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm ${
                        isLeft ? "md:mr-16" : "md:ml-16"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
