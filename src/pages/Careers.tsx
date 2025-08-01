import { motion } from "framer-motion";
import HeroSection from "../components/careers-components/HeroSection";
import BenefitsSection from "../components/careers-components/BenefitsSection";
import OpenPositionsSection from "../components/careers-components/OpenPositionsSection";
import CultureSection from "../components/careers-components/CultureSection";
import ApplicationProcessSection from "../components/careers-components/ApplicationProcessSection";
import Footer from "../layout/Footer";

export default function CareersPage() {
  document.documentElement.classList.remove("dark");

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <BenefitsSection />
      <OpenPositionsSection />
      <CultureSection />
      <ApplicationProcessSection />
      <Footer />
    </motion.div>
  );
}
