import { animated } from "@react-spring/web";

const SuccessMessage = ({ successSpringProps }) => (
  <animated.div
    style={successSpringProps}
    className="flex flex-col items-center justify-center h-full space-y-6"
  >
    {/* Success Icon */}
    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
      <svg
        className="w-10 h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    {/* Success Text */}
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
      <p className="text-gray-400">
        Thank you for reaching out. I'll get back to you soon!
      </p>
    </div>

    {/* Success Animation */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse-slow rounded-2xl" />
    </div>
  </animated.div>
);

export default SuccessMessage;
