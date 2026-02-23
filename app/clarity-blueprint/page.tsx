"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Anchor, Mic2, Zap, Heart, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import EmailModal from "../components/EmailModal";
import { Reveal } from "../components/Reveal";
import FAQSection from "../components/FAQSection";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function ClarityBlueprint() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#050a12] text-white selection:bg-[#d4a34a]/30">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Clarity Background" 
            fill 
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/40 to-[#050a12]" />
        </div>

        <div className="relative z-10 max-w-4xl text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#d4a34a] uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">
  The Signature Guide
</span>

<h1 className="flex flex-col text-6xl md:text-[120px] font-serif font-light tracking-tighter mb-8 leading-none">
  {/* LINE 1 */}
  <div className="block">
    <Reveal>The Clarity</Reveal>
  </div>

  {/* LINE 2 - Notice: No <br /> tag here! */}
  <div className="block -mt-2 md:-mt-8 lg:-mt-6">
    <Reveal>
      <span className="italic text-[#d4a34a] pl-4 md:pl-24">
        Blueprint
      </span>
    </Reveal>
  </div>
</h1>
            <div className="w-24 h-[1px] bg-[#d4a34a]/50 mx-auto mb-8" />
            
            <p className="text-xl md:text-2xl font-light text-gray-300 italic mb-10 max-w-2xl mx-auto">
              &quot;Lead with Clarity. Thrive with Grace.&quot;
            </p>

            <button 
              onClick={() => setShowModal(true)}
              className="group relative bg-[#d4a34a] text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 flex items-center gap-3 mx-auto shadow-2xl shadow-[#d4a34a]/20"
            >
              Download the Blueprint
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Decorative Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-[#d4a34a] to-transparent"
        />
      </section>

      {/* THE CORE STATEMENT */}
      <section className="py-32 px-6 text-center relative border-y border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.2] text-gray-200">
            You do not need to be <span className="opacity-40">louder.</span> <br />
            <span className="text-[#d4a34a] italic">You need to be aligned.</span>
          </h2>
        </motion.div>
      </section>

      {/* THE PROMISE (Benefits) */}
      <section className="py-24 px-6 bg-[#080f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-[#d4a34a] uppercase tracking-[0.3em] text-xs font-bold mb-4">Transformation</h3>
            <p className="text-3xl font-serif">With This Blueprint, You Will:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Reconnect with your core values",
              "Define your authentic expression",
              "Strengthen your presence",
              "Lead with structured grace",
              "Build daily alignment discipline",
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#d4a34a]/30 transition-all duration-500"
              >
                <div className="w-8 h-8 rounded-full bg-[#d4a34a]/10 flex items-center justify-center text-[#d4a34a] mb-6 text-xs font-bold">
                  0{index + 1}
                </div>
                <p className="text-sm font-medium leading-relaxed text-gray-400">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE ARCHITECTURE (Sneak Peek) */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Abstract Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a34a]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-serif mb-6">A Sneak Peek Inside...</h3>
            <p className="text-gray-500 tracking-widest uppercase text-xs">The 5-Step Architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Step One", desc: "Reconnect With Values", icon: Anchor },
              { title: "Step Two", desc: "Define Expression", icon: Mic2 },
              { title: "Step Three", desc: "Activate Presence", icon: Zap },
              { title: "Step Four", desc: "The Grace Practice", icon: Heart },
              { title: "Step Five", desc: "Daily Planner", icon: Calendar },
            ].map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#d4a34a]/40 hover:bg-[#d4a34a]/10 transition-all duration-700 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"
              >
                <step.icon className="w-10 h-10 mx-auto mb-6 text-[#d4a34a] stroke-[1px] group-hover:scale-110 transition-transform" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4a34a] mb-3 font-black">
                  {step.title}
                </p>
                <h4 className="font-serif text-lg leading-tight text-white">{step.desc}</h4>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#d4a34a] hover:text-white transition-all shadow-xl"
            >
              Unlock the Full Blueprint
            </button>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
    {/* AUTHOR SECTION - Editorial Overlap */}
<section className="py-40 px-6 bg-[#050a12] relative overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center">
      
      {/* LEFT: The Image with Decorative Frame */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full md:w-1/2 z-10"
      >
        <div className="relative group">
          {/* The "Signature" Frame that floats behind */}
          <div className="absolute -inset-4 border border-[#d4a34a]/20 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
          
          <Image
            src="/brendapp2.jpeg"
            alt="Brenda N. Keya"
            width={600}
            height={800}
            className="relative rounded-xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover shadow-2xl"
          />
        </div>
      </motion.div>

      {/* RIGHT: The Floating Text Box */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full md:w-3/5 md:-ml-20 z-20 mt-12 md:mt-0"
      >
        <div className="bg-[#080f1a]/80 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-[2rem] shadow-2xl">
          <span className="text-[#d4a34a] uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">
            The Architect
          </span>
          
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Brenda N. <br />
            <span className="italic text-[#d4a34a]">Keya</span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
            <p>
              Brenda N. Keya is an Alignment & Expression Strategist working at the intersection of personal clarity and leadership presence.
            </p>
            <p>
              With a background in psychology and diplomacy, she helps leaders align their internal conviction with their external communication.
            </p>
          </div>

          {/* The Signature Quote - Now styled as a pull-quote */}
          <div className="mt-12 pt-12 border-t border-white/5 relative">
            <span className="absolute top-8 left-0 text-6xl font-serif text-[#d4a34a]/20 italic">&quot;</span>
            <p className="italic text-xl md:text-2xl text-gray-300 pl-8">
              Your voice is not something to find. It is something to <span className="text-white font-medium underline decoration-[#d4a34a]/30 underline-offset-8">remember</span>.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>
<FAQSection />
<WhatsAppFloat />
      {/* Modal */}
      {showModal && <EmailModal onClose={() => setShowModal(false)} />}
    </div>
  );
}