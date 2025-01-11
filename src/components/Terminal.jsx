import { motion } from "framer-motion";

const Terminal = () => {
  return (
    <motion.div
      className="hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.div 
        className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-2xl border border-gray-800"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Terminal Header */}
        <div className="bg-[#2D2D2D] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF605C] cursor-pointer hover:opacity-75" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD44] cursor-pointer hover:opacity-75" />
            <div className="w-3 h-3 rounded-full bg-[#00CA4E] cursor-pointer hover:opacity-75" />
          </div>
          <div className="text-gray-400 text-sm font-medium">developer.js</div>
          <div className="w-16"></div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          <div className="flex items-center text-gray-400 mb-4">
            <span className="mr-2">$</span>
            <span className="text-blue-400">node</span>
            <span className="ml-2">developer.js</span>
          </div>
          <div className="text-white">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">developer</span> = {"{"}
            <br />
            <div className="pl-4">
              <span className="text-[#9CDCFE]">name</span>:{" "}
              <span className="text-[#CE9178]">'Pet Sereypanha'</span>,
              <br />
              <span className="text-[#9CDCFE]">role</span>:{" "}
              <span className="text-[#CE9178]">'Software Developer'</span>,
              <br />
              <span className="text-[#9CDCFE]">location</span>:{" "}
              <span className="text-[#CE9178]">'Cambodia'</span>,
              <br />
              <span className="text-[#9CDCFE]">skills</span>: [
              <div className="pl-4">
                <span className="text-[#CE9178]">'JavaScript'</span>,
                <br />
                <span className="text-[#CE9178]">'React.js'</span>,
                <br />
                <span className="text-[#CE9178]">'Node.js'</span>,
                <br />
                <span className="text-[#CE9178]">'UI/UX Design'</span>
              </div>
              ],
              <br />
              <span className="text-[#9CDCFE]">passions</span>: [
              <div className="pl-4">
                <span className="text-[#CE9178]">'Clean Code'</span>,
                <br />
                <span className="text-[#CE9178]">'Innovation'</span>,
                <br />
                <span className="text-[#CE9178]">'Problem Solving'</span>
              </div>
              ]
            </div>
            {"}"};
            <div className="mt-4 text-gray-400">
              <span className="mr-2">$</span>
              <span className="animate-pulse">▊</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Terminal;
