import { motion } from "framer-motion";

const AnimatedLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-full"
          style={{ top: `${20 * (i + 1)}%` }}
          animate={{
            x: [-1000, 1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
          style={{ left: `${12.5 * (i + 1)}%` }}
          animate={{
            y: [-1000, 1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLines;
