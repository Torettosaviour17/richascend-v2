// src/components/Hero/HeroSection.tsx
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsVideoLoaded(true);
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background with dark/light mode overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/engineering-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced gradient overlay with dark mode adjustments */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black opacity-80 dark:opacity-90 dark:via-black/50 dark:to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent dark:from-black/80" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div
          className={`max-w-3xl space-y-6 transition-all duration-700 ease-out ${
            isVideoLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
            <span className="block">Engineering</span>
            <span className="block mt-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              The Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl dark:text-gray-300 leading-relaxed">
            Pioneering innovative solutions that bridge imagination with
            reality. Where precision meets passion to build a better tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              Our Projects
            </button>
            <button className="px-8 py-3.5 bg-transparent border-2 border-white/80 text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300 hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-slow">
        <div className="w-10 h-14 rounded-full border-2 border-white/80 flex justify-center">
          <div className="w-2.5 h-2.5 bg-white rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
