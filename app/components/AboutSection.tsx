"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="aboutme" className="relative w-full min-h-screen flex flex-col lg:flex-row bg-[#050a12] overflow-hidden">
      
      {/* Left: Image with Frame */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative">
        
        {/* The Frame Wrapper */}
        <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4]">
          
          {/* The Offset Decorative Frame Border */}
          <motion.div 
            initial={{ opacity: 0, x: -20, y: -20 }}
            whileInView={{ opacity: 1, x: 20, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute inset-0 border-2 border-pink-500/40 z-0 rounded-xl"
          />

          {/* The Image Container */}
          <motion.div 
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative w-full h-full z-10 overflow-hidden rounded-xl shadow-2xl shadow-black/50"
          >
            <Image
              src="/brendapp2.jpeg"
              alt="Brenda Keya"
              fill
              className="object-cover object-top pointer-events-none select-none  transition-all duration-700 ease-in-out scale-110 hover:scale-100"
              priority
            />
            {/* Subtle Overlay to blend with the site theme */}
            <div className="absolute inset-0 bg-pink-900/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>


      {/* Right: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 space-y-12 bg-[#050a12] z-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-pink-500 font-bold tracking-[0.4em] text-xs uppercase">Discovery</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            About<span className="text-pink-500">.</span>
          </h2>
        </motion.div>

        {/* Biography Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light italic">
            &quot;Voice isn&apos;t something to find — it&apos;s something to <span className="text-white font-medium">remember</span>.&quot;
          </p>
          <div className="mt-8 space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              <strong className="text-white">Brenda N. Keya</strong> is a Presence & Expression Coach, 
              Sustainability Branding Consultant, and Diplomat shaping the intersection of personal 
              clarity and planetary impact.
            </p>
            <p>
              As the Founder of <em className="text-pink-400">The Aligned Voice</em>, she bridges 
              inner mastery and global transformation, empowering leaders to lead with clarity 
              and design systems that serve both people and planet.
            </p>
          </div>
        </motion.div>

        {/* Philosophy Block with Border */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 space-y-4"
        >
          <h3 className="text-xl font-bold text-white uppercase tracking-widest">
            Presence & Expression
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Through her platform <strong className="text-white">Command Your Space</strong>, she offers 
            tools for self-mastery and embodied leadership. Presence is not volume, but alignment.
          </p>
        </motion.div>

        {/* Modern CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="/about"
            className="group relative inline-flex items-center gap-4 text-white font-bold tracking-widest uppercase text-sm"
          >
            <span className="relative z-10">Read Full Journey</span>
            <div className="w-12 h-[1px] bg-pink-500 group-hover:w-20 transition-all duration-300" />
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative side text (Visible only on desktop) */}
      <div className="absolute hidden xl:block bottom-10 right-10 rotate-90 origin-right z-0">
        <span className="text-[100px] font-black text-white/[0.02] select-none pointer-events-none">
          AUTHENTICITY
        </span>
      </div>
    </section>
  );
}