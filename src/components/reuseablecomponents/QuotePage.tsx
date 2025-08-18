import { motion } from "framer-motion";

const QuotePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Request a <span className="text-red-600">Quote</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Fill out the form below and our team will get back to you with a
          personalized quote.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+123 456 7890"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          {/* Service */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Service
            </label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-red-500 outline-none">
              <option>Transformer Installation</option>
              <option>Solar Installation</option>
              <option>Construction Work</option>
              <option>Project Management</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us more about your project..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          {/* Submit */}
          <div className="col-span-2 flex justify-end">
            <motion.button
              type="submit"
              className="px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Request
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default QuotePage;
