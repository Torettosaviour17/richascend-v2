// src/pages/FullTeamPage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function FullTeamPage() {
  const teamMembers = [
    {
      name: "Toretto Saviour",
      role: "Frontend developer",
      bio: "i can being your idea to life",
      expertise: "Strategic Planning, International Project Management",
    },
    {
      name: "Michael Chen",
      role: "Chief Technical Officer",
      bio: "Pioneer in structural engineering innovations and material science. Holds 12 patents in sustainable building technologies.",
      expertise: "Structural Engineering, Material Science, Innovation",
    },
    {
      name: "Elena Rodriguez",
      role: "Director of Sustainability",
      bio: "Award-winning environmental engineer with global project experience. Developed carbon-neutral solutions for mega infrastructure projects.",
      expertise: "Environmental Engineering, Sustainable Design",
    },
    {
      name: "David Kim",
      role: "Head of Innovation",
      bio: "Tech visionary leading our AI and digital transformation initiatives. Created proprietary algorithms for predictive infrastructure maintenance.",
      expertise: "AI Integration, Digital Transformation",
    },
    {
      name: "Priya Sharma",
      role: "VP of Engineering",
      bio: "Specializes in large-scale transportation infrastructure. Managed construction of 3 international airports and 2 high-speed rail networks.",
      expertise: "Transportation Infrastructure, Mega Projects",
    },
    {
      name: "Thomas Wright",
      role: "Director of Operations",
      bio: "Expert in resource optimization and project delivery. Reduced project timelines by 25% while maintaining safety standards.",
      expertise: "Operations Management, Efficiency Optimization",
    },
    {
      name: "Aisha Mohammed",
      role: "Head of Research & Development",
      bio: "Developed award-winning sustainable materials now used in 50+ major projects worldwide. PhD in Material Sciences.",
      expertise: "Material Innovation, R&D Strategy",
    },
    {
      name: "James Wilson",
      role: "Chief Financial Officer",
      bio: "Financial strategist with expertise in infrastructure funding models. Secured over $2B in project financing.",
      expertise: "Financial Strategy, Project Financing",
    },
  ];

  const departments = [
    {
      name: "Structural Engineering",
      members: 24,
      description: "Designing the foundations of tomorrow's infrastructure",
    },
    {
      name: "Environmental Solutions",
      members: 18,
      description: "Creating sustainable ecosystems within our projects",
    },
    {
      name: "Digital Innovation",
      members: 15,
      description: "Integrating technology into engineering excellence",
    },
    {
      name: "Project Management",
      members: 22,
      description: "Ensuring precision in execution and delivery",
    },
    {
      name: "Research & Development",
      members: 12,
      description: "Pioneering the materials and methods of the future",
    },
    {
      name: "Operations",
      members: 28,
      description: "Optimizing processes for maximum efficiency",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Meet Our <span className="text-red-500">Full Team</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The brilliant minds behind Richascend's engineering excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Back to About
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light opacity-10 blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Executive <span className="text-red-500">Leadership</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Visionaries guiding our strategic direction and innovation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gray-200 dark:bg-gray-800 h-60 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
                  <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-red-500 absolute -bottom-16 left-1/2 transform -translate-x-1/2"></div>
                </div>

                <div className="pt-20 pb-8 px-6 text-center">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-red-500 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {member.bio}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                    Expertise: {member.expertise}
                  </p>

                  <div className="flex justify-center mt-4 space-x-3">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <FaTwitter className="text-lg" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <FaEnvelope className="text-lg" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Team */}
      <section className="py-16 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-red-500">Expert Team</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Dedicated professionals driving engineering excellence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(4).map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex p-6">
                  <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 border-2 border-red-500 mr-5"></div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-red-500 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Engineering <span className="text-red-500">Departments</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Specialized teams working in synergy to deliver exceptional
              results
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {dept.name}
                  </h3>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">
                    {dept.members} members
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {dept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Engineering Team
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
              We're always looking for talented engineers to help build the
              future
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg transition-all transform hover:-translate-y-1">
                View Open Positions
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                Contact Our HR Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
