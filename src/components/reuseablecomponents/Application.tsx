import { motion } from "framer-motion";

export default function Application() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-20 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Job Application
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Fill in your details below and submit your application. 🚀
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Resume (PDF)
          </label>
          <input
            type="file"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Submit Application
        </motion.button>
      </form>
    </motion.div>
  );
}
