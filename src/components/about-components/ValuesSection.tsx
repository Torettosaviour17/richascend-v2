// components/about-components/ValuesSection.tsx
import { motion } from "framer-motion";

export default function ValuesSection() {
  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries with creative engineering solutions",
      icon: "💡",
    },
    {
      title: "Integrity",
      description: "Ethical practices in every aspect of our work",
      icon: "🤝",
    },
    {
      title: "Excellence",
      description: "Uncompromising quality in execution",
      icon: "🏆",
    },
    {
      title: "Sustainability",
      description: "Building for future generations",
      icon: "🌱",
    },
    {
      title: "Collaboration",
      description: "Partnering for shared success",
      icon: "👥",
    },
    {
      title: "Safety",
      description: "Protecting people above all else",
      icon: "🛡️",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light opacity-10 blur-3xl"></div>
        </div>
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
            Our <span className="text-red-500">Core Values</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            The principles that guide every decision and action at Richascend
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                borderColor: "#ef4444",
                backgroundColor: "#f9fafb",
                dark: { backgroundColor: "#1f2937" },
              }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
