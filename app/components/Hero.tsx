"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
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

      <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center gap-6 pb-20">
        <h1 className="text-white text-2xl md:text-3xl font-light tracking-wide mb-2">
          | The Aligned Voice |
        </h1>

        <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
          <span className="block">Presence.</span>
          <span className="block">Diplomacy.</span>
          <span className="block">Sustainability.</span>
        </h2>

        <p className="text-white text-5xl md:text-4xl font-bold mb-6">
          <Typewriter
            words={["From soul to systems"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        <a
          href="#purpose"
          className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold uppercase tracking-wider rounded-md shadow-md hover:bg-pink-500 hover:text-white transition-all duration-300"
        >
          Discover More
        </a>
      </div>
    </section>
  );
}
