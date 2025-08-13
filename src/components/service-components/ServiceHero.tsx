import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaTools,
  FaLightbulb,
  FaHardHat,
  FaTruck,
  FaUserCog,
  FaSolarPanel,
} from "react-icons/fa";

export const ServiceHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Particle system
    const particles: any[] = [];
    const particleCount = 100;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `rgba(${Math.floor(Math.random() * 100 + 155)}, 
                ${Math.floor(Math.random() * 50)}, 
                ${Math.floor(Math.random() * 50)}, 
                ${Math.random() * 0.3 + 0.1})`,
      });
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const services = [
    { icon: <FaBolt />, name: "Transformer Installation" },
    { icon: <FaTools />, name: "Transformer Repair" },
    { icon: <FaLightbulb />, name: "Rural Electrification" },
    { icon: <FaHardHat />, name: "Construction Work" },
    { icon: <FaTruck />, name: "HIAB Hiring" },
    { icon: <FaUserCog />, name: "Project Management" },
    { icon: <FaSolarPanel />, name: "Solar Installation" },
    { icon: <FaUserCog />, name: "Consultancy" },
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/90 to-gray-50 dark:via-gray-900/90 dark:to-gray-900" />

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Comprehensive <span className="text-red-600">Energy</span> &{" "}
              <br />
              <span className="text-blue-500">Infrastructure</span> Solutions
            </motion.h1>

            <motion.p
              className="text-xl mb-8 max-w-2xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Expert services for transformer systems, solar installations,
              construction projects, and infrastructure development
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="px-6 py-3 rounded-lg font-medium transition-colors bg-red-600 hover:bg-red-700 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Quote
              </motion.button>

              <motion.button
                className="px-6 py-3 rounded-lg font-medium transition-colors bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800/10 dark:border-white dark:text-white dark:hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/80 border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Core Services
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 rounded-lg flex flex-col items-center text-center hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400">
                      {service.icon}
                    </div>
                    <p className="font-medium text-sm text-gray-700 dark:text-gray-200">
                      {service.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/10"></div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-red-500/10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
