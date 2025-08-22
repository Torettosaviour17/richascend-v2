import { motion } from "framer-motion";

const ApplicationForm = () => {
  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Job Application Form
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <input
            type="file"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <textarea
            placeholder="Tell us why you'd be a great fit..."
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ApplicationForm;
