import { motion } from "motion/react";
import { useRef } from "react";
import AnimatedLines from "./AnimatedLines.jsx";

const StatsCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -10 }}
      className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
    >
      <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
      <div className="text-sm text-gray-400">{stat.label}</div>
    </motion.div>
  );
};

const InterestCard = ({ interest, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
    >
      <div className="flex items-start space-x-4">
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
          {interest.icon}
        </span>
        <div>
          <h4 className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors duration-300">
            {interest.name}
          </h4>
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
            {interest.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const stats = [
    { label: "Years Experience", value: "0" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "10+" },
    { label: "Happy Clients", value: "14+" },
  ];

  const interests = [
    {
      icon: "🚀",
      name: "Innovation",
      desc: "Exploring cutting-edge technologies",
    },
    { icon: "💡", name: "Problem Solving", desc: "Finding elegant solutions" },
    { icon: "🎨", name: "Design", desc: "Creating beautiful interfaces" },
    { icon: "🔄", name: "Agile", desc: "Iterative development" },
    { icon: "🌐", name: "Web Performance", desc: "Optimizing for speed and efficiency" },
    { icon: "🛡️", name: "Security", desc: "Building secure applications" }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As a passionate Software Developer based in Cambodia, I
                  specialize in building exceptional digital experiences. With a
                  strong foundation in full-stack development and a keen eye for
                  design, I create solutions that are not only functional but
                  also intuitive and user-friendly.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <StatsCard key={stat.label} stat={stat} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Interests & Skills */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  What Drives Me
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {interests.map((interest, index) => (
                    <InterestCard
                      key={interest.name}
                      interest={interest}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
