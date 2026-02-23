"use client";
import { motion } from "framer-motion";

export const Reveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative overflow-hidden inline-flex items-baseline">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};