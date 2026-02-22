"use client";

import Image from "next/image";
import { FaYoutube, FaSpotify, FaQuoteLeft, FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MediaSection() {
  return (
    <section id="shows" className="relative bg-[#050a12] py-24 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Consistent with About/Publications */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="h-[1px] w-12 bg-pink-500" />
            <span className="text-pink-500 uppercase tracking-[0.3em] text-xs font-bold">Resonance</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter"
          >
            Digital Presence<span className="text-pink-500">.</span>
          </motion.h2>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* YouTube Feature - Large & Bold */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-bold uppercase tracking-widest">
                  <FaYoutube className="text-sm" /> YouTube Channel
                </div>
                <h3 className="text-3xl font-bold text-white leading-tight">
                  Presence & Power Africa
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Clarity tools, voice coaching, and sustainability insights. Subscribe for weekly soul-led leadership sessions.
                </p>
                <a
                  href="https://www.youtube.com/@BrendaKeya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  Watch Now
                </a>
              </div>
              
              {/* Fake Video Preview Decor */}
              <div className="w-full md:w-1/2 relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent z-10" />
                 <Image 
                   src="/brendapp2.jpeg" // Add a real thumbnail here!
                   alt="Brenda YouTube"
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Spotify - "Coming Soon" Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="space-y-4 relative z-10">
              <FaSpotify className="text-4xl text-gray-700 group-hover:text-green-500 transition-colors duration-500" />
              <h3 className="text-2xl font-bold text-white italic opacity-50">Resonating Soon...</h3>
              <p className="text-gray-500 text-sm">
                The Aligned Voice podcast is currently in production. A space for deep listening and sonic clarity.
              </p>
            </div>
            <div className="mt-8 relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600 border border-gray-800 px-4 py-2 rounded-full">
                    Stay Tuned
                </span>
            </div>
            {/* Visual fluff for "empty" state */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-12">
                <FaSpotify size={200} />
            </div>
          </motion.div>

          {/* Quote Card - Now integrated as a spanning banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12 relative py-12 border-y border-white/5 flex flex-col items-center text-center"
          >
            <FaQuoteLeft className="text-pink-500/20 text-6xl mb-6" />
            <blockquote className="max-w-4xl text-2xl md:text-4xl font-light italic text-gray-200 leading-snug">
              &quot;From soul to systems, I help leaders become <span className="text-white font-medium underline decoration-pink-500/50 underline-offset-8">aligned voices</span>, rooted, resonant and ready.&quot;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
               <div className="w-10 h-[1px] bg-gray-700" />
               <p className="text-pink-500 font-bold uppercase tracking-widest text-xs">Brenda N. Keya</p>
               <div className="w-10 h-[1px] bg-gray-700" />
            </div>
          </motion.div>

          {/* Mobile App CTA - Refined Product Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 bg-gradient-to-r from-pink-900/20 to-blue-900/20 border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2 space-y-8 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                Clarity in Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">Pocket.</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-md">
                Access exclusive coaching modules, voice exercises, and the Clarity Blueprint guide directly from your mobile device.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                  <FaApple className="text-2xl" />
                  <div className="text-left leading-none">
                    <p className="text-[10px] uppercase font-medium opacity-60">Coming soon on</p>
                    <p className="text-sm">App Store</p>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                  <FaGooglePlay className="text-xl" />
                  <div className="text-left leading-none">
                    <p className="text-[10px] uppercase font-medium opacity-60">Coming soon on</p>
                    <p className="text-sm">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative h-[400px] w-full max-w-sm">
                <div className="absolute inset-0 bg-pink-500/20 blur-[80px] rounded-full animate-pulse" />
                <Image
                  src="/phone.png"
                  alt="Mobile App"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10"
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}