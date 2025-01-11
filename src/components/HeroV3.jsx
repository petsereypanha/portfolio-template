import { motion } from "framer-motion";
import profileImage from "../assets/petsereypanha_profile.jpg";
import Typewriter from "typewriter-effect";
import AnimatedLines from "./AnimatedLines.jsx";

const HeroV3 = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#0A0A0A] pt-24 md:pt-0">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-purple-500/10 opacity-60" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated Lines */}
      <AnimatedLines />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 min-h-[calc(100vh-4rem)] md:h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Content - 3 Columns */}
            <div className="lg:col-span-3 space-y-6 lg:space-y-8">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-500/30 text-blue-400 text-xs sm:text-sm">
                  Welcome to my portfolio
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3 sm:space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    SereyPanha
                  </span>
                </h1>
                <div className="text-xl sm:text-2xl text-blue-300 h-12">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer",
                        "UI/UX Enthusiast",
                        "Problem Solver",
                        "Tech Innovator",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 80,
                    }}
                  />
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-400 max-w-xl"
              >
                Crafting digital experiences that blend innovation with
                functionality. Specialized in building modern web applications
                that make a difference.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-1.5"
              >
                <a
                  href="#contact"
                  className="group relative px-6 py-3 rounded-lg overflow-hidden bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-center sm:text-left"
                >
                  <div className="relative z-10 flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-white font-medium">
                      Get in Contact
                    </span>
                    <svg
                      className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="#projects"
                  className="group px-6 py-3 rounded-lg border border-blue-500/30 hover:border-blue-500 transition-colors duration-300 text-center sm:text-left"
                >
                  <span className="text-white font-medium">View Projects</span>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center justify-center sm:justify-start gap-6 pt-4"
              >
                {[
                  {
                    platform: "GitHub",
                    url: "https://github.com/petsereypanha",
                  },
                  {
                    platform: "LinkedIn",
                    url: "https://www.linkedin.com/in/pet-sereypanha-59b751282/",
                  },
                  { platform: "Twitter", url: "#" },
                ].map(({ platform, url }) => (
                  <a
                    key={platform}
                    href={url}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {platform}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right Content - 2 Columns */}
            <div className="lg:col-span-2 relative mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative max-w-sm mx-auto lg:max-w-none"
              >
                {/* Background Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-20 blur-xl" />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-15 blur-lg animate-pulse" />

                {/* Image Container */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-0.5">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-900">
                    <img
                      src={profileImage}
                      alt="Pet Sereypanha"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-20" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>

      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.2); }
            66% { transform: translate(-20px, 20px) scale(0.8); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </section>
  );
};

export default HeroV3;
