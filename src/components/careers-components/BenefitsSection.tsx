import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries and performance bonuses",
      icon: "💰",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage",
      icon: "❤️",
    },
    {
      title: "Flexible Work",
      description: "Hybrid work options and flexible schedules",
      icon: "🏡",
    },
    {
      title: "Learning & Growth",
      description: "Professional development and tuition assistance",
      icon: "📚",
    },
    {
      title: "Retirement Planning",
      description: "401(k) with company matching",
      icon: "👵",
    },
    {
      title: "Paid Time Off",
      description: "Generous vacation, sick leave, and holidays",
      icon: "🏖️",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
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
            Employee <span className="text-red-500">Benefits</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            We invest in our team's wellbeing and professional growth
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm"
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
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
