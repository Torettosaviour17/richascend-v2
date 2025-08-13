import { motion } from "framer-motion";
import {
  FaBolt,
  FaSolarPanel,
  FaHardHat,
  FaTruck,
  FaUserCog,
  FaLightbulb,
} from "react-icons/fa";

export default function ServicesShowcase() {
  const services = [
    {
      icon: <FaBolt className="text-3xl text-red-600" />,
      title: "Transformer Services",
      description: "Installation, maintenance and repair of power transformers",
    },
    {
      icon: <FaSolarPanel className="text-3xl text-blue-500" />,
      title: "Solar Solutions",
      description:
        "Management of commercial and residential solar installations",
    },
    {
      icon: <FaHardHat className="text-3xl text-red-600" />,
      title: "Construction",
      description: "Infrastructure development and civil engineering projects",
    },
    {
      icon: <FaTruck className="text-3xl text-blue-500" />,
      title: "Equipment Rental",
      description: "HIAB crane and specialized equipment hiring",
    },
    {
      icon: <FaUserCog className="text-3xl text-red-600" />,
      title: "Project Management",
      description: "End-to-end supervision of complex projects",
    },
    {
      icon: <FaLightbulb className="text-3xl text-blue-500" />,
      title: "Rural Electrification",
      description: "Bringing power to remote communities across Ghana",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-white dark:bg-gray-950"
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
            Our <span className="text-red-500">Comprehensive</span> Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Delivering end-to-end solutions for energy and infrastructure needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                borderColor: "#ef4444",
                backgroundColor: "#f9fafb",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
