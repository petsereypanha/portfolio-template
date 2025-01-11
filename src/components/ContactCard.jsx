import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const ContactCard = ({ icon, title, value, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    transform: isHovered
      ? "scale(1.05) translateY(-5px)"
      : "scale(1) translateY(0)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      style={springProps}
      className="flex items-center space-x-4 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-white/10 group-hover:text-blue-300 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {title}
        </h4>
        {link ? (
          <a
            href={link}
            className="text-white hover:text-blue-400 transition-colors duration-300 relative inline-block group-hover:translate-x-1 transform transition-transform"
          >
            {value}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </animated.div>
  );
};

export default ContactCard;
