"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {  Mic2, Leaf, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-[#050a12] text-gray-300 selection:bg-pink-500/30 font-sans pb-24">
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            The Architect of Alignment
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-white leading-tight tracking-tighter mb-8">
            Brenda N. Keya <br />
            <span className="italic text-pink-500">The Aligned Voice</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Presence. Diplomacy. Sustainability. <br />
            <span className="text-white/60">Bridging the gap between soul and systems.</span>
          </p>
        </motion.div>
      </section>

      {/* Hero Image Section - Wide Layout */}
<section className="px-6 mb-32">
  <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center">
    
    {/* The Image Container - Now using a fixed aspect ratio instead of 'fill' */}
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="md:col-span-7 relative aspect-[4/5] md:aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10"
    >
      <Image
        src="/brendapp1.jpeg"
        alt="Brenda Keya"
        fill
        className="object-cover object-center grayscale hover:grayscale-none transition-all duration-1000 "
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a12]/40 to-transparent" />
    </motion.div>

    {/* Elegant Editorial Text for the side */}
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="md:col-span-5 space-y-4"
    >
      <p className="text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px]">Est. 2024</p>
      <h3 className="text-3xl font-serif italic text-white leading-tight">
        Guided by the pursuit of <br /> radical clarity.
      </h3>
      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
        Capturing a moment of reflection before the Africa Young Diplomats Forum.
      </p>
    </motion.div>

  </div>
</section>

      {/* Core Narrative */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start mb-40">
        <motion.div {...fadeIn} className="space-y-8">
          <h2 className="text-3xl font-serif italic text-white leading-snug">
            Bringing together two worlds often seen as separate — inner mastery and global transformation.
          </h2>
          <div className="w-20 h-px bg-pink-500" />
        </motion.div>
        
        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-6 text-lg font-light leading-relaxed text-gray-400">
          <p>
            <strong className="text-white">Brenda N. Keya</strong> is a Presence & Expression Coach, Sustainability Branding Consultant, and Diplomat shaping the intersection of personal clarity and planetary impact.
          </p>
          <p>
            With a background in psychology, diplomacy, and sustainability innovation, she helps leaders speak from soul, lead with clarity, and design systems that serve both people and the planet.
          </p>
        </motion.div>
      </section>

      {/* Pillars Section */}
      <div className="bg-white/[0.02] border-y border-white/5 py-32 mb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24">
            
            {/* Pillar 1: Presence */}
            <motion.div {...fadeIn} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500">
                  <Mic2 size={24} />
                </div>
                <h3 className="text-2xl font-serif text-white uppercase tracking-widest ">Presence & Expression</h3>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                <Image src="/2.jpg" alt="Coaching" fill className="object-cover grayscale hover:grayscale-0" />
              </div>
              <p className="text-gray-400 font-light leading-relaxed italic">
                &quot;Voice isn’t something to find but something to remember. Presence is not volume, but alignment.&quot;
              </p>
            </motion.div>

            {/* Pillar 2: Diplomacy */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-8 md:mt-24">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Leaf size={24} />
                </div>
                <h3 className="text-2xl font-serif text-white uppercase tracking-widest">Diplomacy & Sustainability</h3>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                <Image src="/images/brendapp3.jpeg" alt="Diplomacy" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {["Carbon credit markets", "Green value chains", "Climate finance advocacy", "Policy harmonization"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-pink-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Final Quote */}
      <section className="max-w-4xl mx-auto px-6 text-center py-20">
        <motion.div {...fadeIn}>
          <Sparkles className="w-8 h-8 text-pink-500 mx-auto mb-8 opacity-50" />
          <blockquote className="text-3xl md:text-5xl font-serif italic text-white leading-tight mb-8">
            &quot;From soul to systems, I help leaders become aligned voices — rooted, resonant, and ready.&quot;
          </blockquote>
          <p className="text-pink-500 font-bold uppercase tracking-[0.4em] text-xs">~ Brenda N. Keya</p>
        </motion.div>
      </section>

    </div>
  );
}