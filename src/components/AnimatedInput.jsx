import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const AnimatedInput = ({ label, type, name, value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const springProps = useSpring({
    transform: isFocused ? "scale(1.02)" : "scale(1)",
    borderColor: isFocused
      ? "rgba(59, 130, 246, 0.5)"
      : "rgba(255, 255, 255, 0.1)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={springProps} className="space-y-2">
      <label className="block text-sm font-medium text-gray-400 transition-colors duration-300">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={6}
          className="w-full px-4 py-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none hover:bg-white/[0.07]"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 py-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 hover:bg-white/[0.07]"
          placeholder={placeholder}
        />
      )}
    </animated.div>
  );
};

export default AnimatedInput;
