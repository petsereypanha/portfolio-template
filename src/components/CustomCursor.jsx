import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleCursorType = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(computedStyle.cursor === 'pointer');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleCursorType);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleCursorType);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <>
      {/* Main cursor - Faster and more responsive */}
      <motion.div
        className="fixed pointer-events-none z-[999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.1, // Reduced mass for faster movement
          stiffness: 1200, // Increased stiffness for snappier response
          damping: 20, // Reduced damping for quicker movement
          restSpeed: 0.001 // Lower rest speed for more precise movement
        }}
      >
        <div className={`w-2 h-2 bg-blue-500 rounded-full ${
          isPointer ? 'mix-blend-difference' : ''
        }`} />
      </motion.div>

      {/* Trailing cursor - Also faster but with slight lag */}
      <motion.div
        className="fixed pointer-events-none z-[998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.2, // Reduced mass
          stiffness: 800, // Increased stiffness
          damping: 15, // Reduced damping
          restSpeed: 0.001 // Lower rest speed
        }}
      >
        <div className={`w-8 h-8 border border-blue-500/30 rounded-full ${
          isPointer ? 'mix-blend-difference' : ''
        }`} />
      </motion.div>

      {/* Disable default cursor */}
      <style>
        {`
          * {
            cursor: none !important;
          }
          
          /* Enable default cursor for touch devices */
          @media (hover: none) and (pointer: coarse) {
            * {
              cursor: auto !important;
            }
            .custom-cursor {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
