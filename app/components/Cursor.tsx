"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Cursor() {
    const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
 const isGoldPage = pathname === '/clarity-blueprint';
  const colorClass = isGoldPage ? "border-[#d4a34a]/50" : "border-pink-[#d4a34a]/50";
  const dotClass = isGoldPage ? "bg-[#d4a34a]" : "bg-pink-500";
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
      className={`fixed top-0 left-0 w-8 h-8 rounded-full border  pointer-events-none z-[9999] flex items-center justify-center ${colorClass}`}
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      {/* Small dot in the center */}
      <div className={`w-1 h-1 rounded-full ${dotClass}`} />
    </motion.div>
  );
}