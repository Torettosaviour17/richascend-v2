import { motion } from "framer-motion";
import {
  FaBolt,
  FaTools,
  FaLightbulb,
  FaHardHat,
  FaTruck,
  FaUserCog,
  FaSolarPanel,
  FaChartLine,
} from "react-icons/fa";

export const ServiceOverview = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const services = [
    {
      icon: <FaBolt className="text-3xl" />,
      title: "Transformer Installation",
      desc: "Professional installation of power transformers",
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "Transformer Repair",
      desc: "Maintenance and repair services for transformers",
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Rural Electrification",
      desc: "Bringing power to remote communities",
    },
    {
      icon: <FaHardHat className="text-3xl" />,
      title: "Construction Work",
      desc: "Infrastructure development projects",
    },
    {
      icon: <FaTruck className="text-3xl" />,
      title: "HIAB Hiring Services",
      desc: "Crane and specialized equipment rental",
    },
    {
      icon: <FaUserCog className="text-3xl" />,
      title: "Project Management",
      desc: "End-to-end project supervision",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Consultancy",
      desc: "Technical expertise and advisory services",
    },
    {
      icon: <FaSolarPanel className="text-3xl" />,
      title: "Solar Installation Management",
      desc: "Complete solar project solutions",
    },
  ];

  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Comprehensive Services
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            End-to-end solutions for energy and infrastructure projects
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className="w-16 h-16 bg-red-500/10 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600 dark:text-red-400"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
