// components/about-components/TeamSection.tsx
import { motion } from "framer-motion";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "20+ years in engineering leadership with focus on sustainable infrastructure",
    },
    {
      name: "Michael Chen",
      role: "Chief Technical Officer",
      bio: "Pioneer in structural engineering innovations and material science",
    },
    {
      name: "Elena Rodriguez",
      role: "Director of Sustainability",
      bio: "Award-winning environmental engineer with global project experience",
    },
    {
      name: "David Kim",
      role: "Head of Innovation",
      bio: "Tech visionary leading our AI and digital transformation initiatives",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gray-100 dark:bg-gray-950 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Leadership <span className="text-red-500">Team</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Visionaries driving Richascend's engineering excellence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gray-200 dark:bg-gray-800 h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
                <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-red-500 absolute -bottom-12 left-1/2 transform -translate-x-1/2"></div>
              </div>

              <div className="pt-16 pb-8 px-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-red-500 mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-red-600 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30 font-semibold py-3 px-8 rounded-lg"
          >
            View Full Team
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
