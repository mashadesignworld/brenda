"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import EmailModal from "../components/EmailModal";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#050a12]">
      {/* Background Video with Sophisticated Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        {/* Radial mask creates a "spotlight" effect on the text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050a12]/60 to-[#050a12]" />
        {/* Fine grain texture overlay for a "filmic" look */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {showModal && <EmailModal onClose={() => setShowModal(false)} />}

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Main Content - Pushed slightly left for an asymmetric, modern feel */}
        <div className="lg:col-span-8 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="h-[1px] w-12 bg-pink-500" />
            <span className="text-pink-500 uppercase tracking-[0.3em] text-xs font-bold">
              The Aligned Voice
            </span>
          </motion.div>

          <div className="space-y-2">
            {["Presence.", "Diplomacy.", "Sustainability."].map((text, i) => (
              <motion.h2
                key={text}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] 
                  ${i === 1 ? "text-transparent stroke-white stroke-1 italic" : "text-white"}`}
                style={{ WebkitTextStroke: i === 1 ? "1px rgba(255,255,255,0.5)" : "none" }}
              >
                {text}
              </motion.h2>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-400 text-xl md:text-2xl font-light max-w-md border-l-2 border-gray-800 pl-6"
          >
            <Typewriter
              words={["From soul to systems"]}
              cursor
              cursorStyle="|"
              typeSpeed={70}
            />
          </motion.p>
        </div>

        {/* CTA Section - Separate visual area */}
        <motion.div 
          className="lg:col-span-4 flex justify-start lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button
            onClick={() => setShowModal(true)}
            className="group relative px-10 py-5 bg-white overflow-hidden rounded-full transition-all duration-500 hover:pr-16"
          >
            <span className="relative z-10 text-black font-bold uppercase tracking-widest text-sm transition-colors duration-500 group-hover:text-white">
              Download PDF
            </span>
            {/* The "Liquid" Fill Effect */}
            <div className="absolute inset-0 bg-pink-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
              →
            </span>
          </button>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}