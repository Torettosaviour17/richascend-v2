import { motion } from "framer-motion";

export default function ApplicationProcessSection() {
  const steps = [
    {
      title: "Application",
      description: "Submit your resume and portfolio through our portal",
      icon: "📝",
    },
    {
      title: "Screening",
      description: "Initial phone call with our talent team",
      icon: "📞",
    },
    {
      title: "Technical Interview",
      description: "Demonstrate your skills with our engineering team",
      icon: "💻",
    },
    {
      title: "Team Interview",
      description: "Meet your potential colleagues and manager",
      icon: "👥",
    },
    {
      title: "Offer",
      description: "Receive and review your employment offer",
      icon: "🎉",
    },
  ];

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
            Application <span className="text-red-500">Process</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Our transparent process to join the Richascend team
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-red-500 flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-900 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Apply?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Submit your application today and join our team of innovative
                engineers shaping the future.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg">
                Start Application
              </button>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 rounded-xl w-full md:w-64 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">📧</div>
                <div className="font-medium text-gray-900 dark:text-white">
                  careers@richascend.com
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

