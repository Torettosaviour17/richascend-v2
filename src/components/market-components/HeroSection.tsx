import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaHardHat,
  FaLightbulb,
  FaTools,
  FaTruck,
  FaUserCog,
} from "react-icons/fa";

const HeroSection = () => {
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

    // Create particles with red/blue theme
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `rgba(${Math.floor(200 + Math.random() * 55)}, 
                ${Math.floor(50 + Math.random() * 50)}, 
                ${Math.floor(40 + Math.random() * 40)}, 
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
    {
      icon: <FaBolt className="mx-auto mb-2 text-red-600" />,
      text: "Transformer Installation",
    },
    {
      icon: <FaTools className="mx-auto mb-2 text-red-600" />,
      text: "Transformer Repair",
    },
    {
      icon: <FaLightbulb className="mx-auto mb-2 text-blue-500" />,
      text: "Rural Electrification",
    },
    {
      icon: <FaHardHat className="mx-auto mb-2 text-red-600" />,
      text: "Construction Work",
    },
    {
      icon: <FaTruck className="mx-auto mb-2 text-blue-500" />,
      text: "HIAB Hiring",
    },
    {
      icon: <FaUserCog className="mx-auto mb-2 text-red-600" />,
      text: "Project Management",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/80 to-gray-50 dark:via-gray-900/80 dark:to-gray-900" />

      <div className="container relative z-10 mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Comprehensive Energy & Infrastructure Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-200">
          Expert services for power systems, construction, and project
          management
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg transition-all bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
            >
              <div className="text-2xl">{service.icon}</div>
              <p className="font-medium text-sm md:text-base">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-16">
          <Link to="/services">
            <button className="px-8 py-3 rounded-lg font-medium transition-colors bg-red-600 hover:bg-red-700 text-white">
              View All Services
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-8 py-3 rounded-lg font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border bg-black/20 border-white/10 dark:bg-white/80 dark:border-gray-300">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dcu9phret/video/upload/v1754269580/hero_qixtsp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
