// components/pages/about.tsx
// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/about-components/HeroSection";
import MissionSection from "../components/about-components/MissionSection";
import ValuesSection from "../components/about-components/ValuesSection";
import TimelineSection from "../components/about-components/TimelineSection";
import TeamSection from "../components/about-components/TeamSection";

export default function AboutPage() {

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
     

      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />

      {/* CTA Section */}
      <motion.section
        className="py-20 relative overflow-hidden bg-gray-100 dark:bg-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/20 to-gray-100 dark:from-red-900/20 dark:to-gray-900 z-0"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light opacity-20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to <span className="text-red-500">Engineer Tomorrow</span>{" "}
              With Us?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Partner with Richascend for innovative engineering solutions that
              make a difference.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800/10 dark:border-white dark:text-white dark:hover:bg-white/10 font-semibold py-3 px-8 rounded-lg"
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
