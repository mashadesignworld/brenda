"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import EmailModal from "./EmailModal";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative w-full overflow-hidden min-h-screen pt-28 md:pt-32 lg:pt-36">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover z-0"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-800/40 to-pink-600/30 z-10" />
      </div>

      {/* Modal */}
      {showModal && <EmailModal onClose={() => setShowModal(false)} />}

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center gap-6 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white text-2xl md:text-3xl font-light tracking-wide mb-2"
        >
          | The Aligned Voice |
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
        >
          <span className="block">Presence.</span>
          <span className="block">Diplomacy.</span>
          <span className="block">Sustainability.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-4xl font-light mb-6"
        >
          <Typewriter
            words={["From soul to systems"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.p>

        <motion.button
          onClick={() => setShowModal(true)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold uppercase tracking-wider rounded-md shadow-md hover:bg-pink-500 hover:text-white transition-all duration-300"
        >
          Download PDF
        </motion.button>
      </div>
    </section>
  );
}
