import { motion } from "framer-motion";
import { useState } from "react";
import { FaBolt, FaSolarPanel, FaHardHat } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // 👈 add this

// Define types for our services
type ServiceKey = "transformers" | "solar" | "construction";

interface ServiceDetail {
  icon: React.ReactNode; // 👈 safer type than JSX.Element
  title: string;
  description: string;
  items: string[];
  videoUrl: string;
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
      videoUrl: "https://www.youtube.com/embed/96Vekm8Ws4U?si=yvolmthVFSMwMPv6",
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
      videoUrl: "https://www.youtube.com/embed/xKxrkht7CpY?si=fJo9IkV9CIGEDfe_",
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
      videoUrl: "https://www.youtube.com/embed/vkew-1KK3Sc?si=H8YnYkro3jLxWvGZ",
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
        {/* Header */}
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

        {/* Service Tabs */}
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

          {/* Service Content */}
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
              {/* Left side - Text */}
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

                {/* ✅ Changed button into a Link */}
                <Link to="/quote">
                  <motion.button
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Service Quote
                  </motion.button>
                </Link>
              </motion.div>

              {/* Right side - Video */}
              <motion.div
                className="bg-gray-100 dark:bg-gray-800 rounded-xl aspect-video flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <iframe
                  className="w-full h-full"
                  src={services[activeService].videoUrl}
                  title={services[activeService].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
