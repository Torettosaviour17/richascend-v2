import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      className="relative py-20 md:py-32 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black opacity-90"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-red-500/10 to-transparent"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light opacity-20 blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="max-w-3xl" variants={itemVariants}>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Build the <span className="text-red-500">Future</span> With Us
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 mb-10"
            variants={itemVariants}
          >
            Join Richascend Engineering and help shape the world through innovative engineering solutions.
          </motion.p>
          
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg"
            >
              View Open Positions
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30 font-semibold py-3 px-6 rounded-lg"
            >
              Our Culture
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-900 z-10"></div>
    </motion.section>
  );
}
