import React, { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(position.x, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(position.y, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div 
          className="w-full h-full bg-white rounded-full"
          animate={{ scale: isHovering ? 2.5 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-0 bg-indigo-500/10 blur-[100px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
    </>
  );
}
