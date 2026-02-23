"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isMobile, setIsMobile] = useState(false);

  // Spring settings make the movement "lag" slightly behind the mouse for a smooth feel
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Hide on mobile devices
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Center the 32px div
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-pink-500/50 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      {/* Small dot in the center */}
      <div className="w-1 h-1 bg-pink-500 rounded-full" />
    </motion.div>
  );
}