import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaBolt,
  FaSolarPanel,
  FaHardHat,
  FaUserCog,
  FaTruck,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

// Define types for our services
type ServiceKey =
  | "transformers"
  | "solar"
  | "construction"
  | "management"
  | "equipment";

interface ServiceDetail {
  icon: JSX.Element;
  title: string;
  description: string;
  items: string[];
}

type ServicesType = Record<ServiceKey, ServiceDetail>;

export const ServiceDetailedSolutions = () => {
  const [activeService, setActiveService] =
    useState<ServiceKey>("transformers");

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const services: ServicesType = {
    transformers: {
      icon: <FaBolt className="text-3xl text-red-600" />,
      title: "Transformer Services",
      description:
        "Comprehensive solutions for power transformers of all types and capacities.",
      items: [
        "Professional installation & commissioning",
        "Diagnostic testing & analysis",
        "Repair & refurbishment services",
        "Preventive maintenance programs",
        "Oil analysis & filtration",
        "Emergency response services",
      ],
    },
    solar: {
      icon: <FaSolarPanel className="text-3xl text-blue-500" />,
      title: "Solar Solutions",
      description:
        "End-to-end solar installation management and maintenance services.",
      items: [
        "Solar farm installation management",
        "Commercial solar solutions",
        "Residential solar systems",
        "Solar panel maintenance",
        "Performance monitoring",
        "Grid integration services",
      ],
    },
    construction: {
      icon: <FaHardHat className="text-3xl text-red-600" />,
      title: "Construction Services",
      description:
        "Infrastructure development and construction project management.",
      items: [
        "Civil engineering projects",
        "Electrical infrastructure development",
        "Industrial construction",
        "Site preparation & earthworks",
        "Structural engineering",
        "Project supervision",
      ],
    },
    management: {
      icon: <FaUserCog className="text-3xl text-blue-500" />,
      title: "Project Management",
      description: "Comprehensive project oversight and consultancy services.",
      items: [
        "End-to-end project supervision",
        "Technical consultancy services",
        "Budget planning & control",
        "Timeline management",
        "Quality assurance",
        "Risk management",
      ],
    },
    equipment: {
      icon: <FaTruck className="text-3xl text-red-600" />,
      title: "Equipment Services",
      description: "Specialized equipment rental and support services.",
      items: [
        "HIAB crane rental",
        "Heavy equipment hiring",
        "Transportation solutions",
        "Equipment maintenance",
        "On-site support",
        "Logistics management",
      ],
    },
  };

  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Helmet>
        <title>Specialized Service Solutions</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Specialized Service Solutions
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Industry-leading expertise across all energy and infrastructure
            domains
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 justify-center">
            {(Object.keys(services) as ServiceKey[]).map((key) => {
              const service = services[key];
              return (
                <motion.button
                  key={key}
                  className={`px-4 py-3 md:px-6 md:py-4 font-medium flex items-center ${
                    activeService === key
                      ? "border-b-2 border-red-600 text-red-600 dark:text-red-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                  onClick={() => setActiveService(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={tabVariants}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.title}
                </motion.button>
              );
            })}
          </div>

          <motion.div
            className="p-6 md:p-8"
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={contentVariants}>
                <div className="flex items-center mb-4">
                  {services[activeService].icon}
                  <h3 className="text-2xl font-bold ml-3">
                    {services[activeService].title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {services[activeService].description}
                </p>
                <ul className="space-y-4 mb-8">
                  {services[activeService].items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      variants={listItem}
                    >
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Service Quote
                </motion.button>
              </motion.div>
              <motion.div
                className="bg-gray-100 dark:bg-gray-800 rounded-xl aspect-video flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="w-full h-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center">
                  <div className="text-white text-xl font-bold text-center px-4">
                    {services[activeService].title} Visualization
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
