import { motion } from "framer-motion";
import profileImage from "../assets/petsereypanha_profile.jpg";
import Typewriter from 'typewriter-effect';
import Terminal from './Terminal';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9)] opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>
      </div>

      {/* Enhanced Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.25,
              filter: "blur(1px)",
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile */}
            <div className="text-center lg:text-left">
              <motion.div 
                className="relative inline-block mb-8 group"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 animate-pulse-slow" />
                <img
                  src={profileImage}
                  alt="Pet Sereypanha"
                  className="relative w-48 h-48 rounded-full border-4 border-white/10 object-cover shadow-lg group-hover:border-white/20 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Pet Sereypanha
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-8"
              >
                <div className="text-xl text-blue-400 h-12">
                  <Typewriter
                    options={{
                      strings: [
                        'Full Stack Developer',
                        'UI/UX Enthusiast',
                        'Problem Solver',
                        'Tech Innovator'
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 80,
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <motion.a
                  href="#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative text-white font-medium">Get in Touch</span>
                </motion.a>
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 border border-blue-500/50 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative">View Projects</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Terminal Component */}
            <Terminal />
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
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
          .animate-pulse-slow {
            animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
