import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";


type Position = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
};

export default function OpenPositionsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const positions: Position[] = [
    {
      id: "1",
      title: "Senior Structural Engineer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
    },
    {
      id: "2",
      title: "Project Manager",
      department: "Operations",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "7+ years",
    },
    {
      id: "3",
      title: "Civil Engineering Intern",
      department: "Engineering",
      location: "Remote",
      type: "Internship",
      experience: "Student",
    },
    {
      id: "4",
      title: "CAD Technician",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
    },
    {
      id: "5",
      title: "Sustainability Specialist",
      department: "Research",
      location: "Boston, MA",
      type: "Full-time",
      experience: "4+ years",
    },
    {
      id: "6",
      title: "DevOps Engineer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
    },
  ];

  const filteredPositions =
    activeTab === "all"
      ? positions
      : positions.filter(
          (pos) => pos.department === activeTab || pos.type === activeTab
        );

  const departments = [...new Set(positions.map((p) => p.department))];
  const types = [...new Set(positions.map((p) => p.type))];

  return (
    <motion.section
      className="py-20 bg-white dark:bg-gray-900"
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
            Open <span className="text-red-500">Positions</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join our team of innovative engineers and problem solvers
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full font-medium ${
              activeTab === "all"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Positions
          </motion.button>

          {departments.map((dept, index) => (
            <motion.button
              key={dept}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium ${
                activeTab === dept
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab(dept)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {dept}
            </motion.button>
          ))}

          {types.map((type, index) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium ${
                activeTab === type
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab(type)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (departments.length + index) * 0.1 }}
            >
              {type}
            </motion.button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredPositions.map((position, index) => (
            <motion.div
              key={position.id}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() =>
                  setExpandedId(expandedId === position.id ? null : position.id)
                }
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      {position.department}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {position.location}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {position.type}
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === position.id ? 180 : 0 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </div>

              {expandedId === position.id && (
                <motion.div
                  className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mt-4">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      About the Role
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      We're looking for an experienced {position.title} to join
                      our {position.department} team. You'll work on
                      cutting-edge projects that shape the future of
                      infrastructure.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                          Responsibilities
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                          <li>
                            Design and analyze complex engineering systems
                          </li>
                          <li>Collaborate with cross-functional teams</li>
                          <li>
                            Ensure projects meet quality and sustainability
                            standards
                          </li>
                          <li>Mentor junior engineers</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                          Requirements
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                          <li>
                            Bachelor's degree in Engineering or related field
                          </li>
                          <li>{position.experience} of relevant experience</li>
                          <li>Professional Engineer (PE) license preferred</li>
                          <li>Strong problem-solving skills</li>
                        </ul>
                      </div>
                    </div>

                    <Link to="/application">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg"
                      >
                        Apply Now
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
