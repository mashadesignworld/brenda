"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, CheckCircle2, Globe, Leaf } from 'lucide-react';
import BookMeModal from '../components/BookMeModal';
import { useState } from 'react';

export default function NotesPage() {
      const [showBookModal, setShowBookModal] = useState(false);
  return (
    <div className="min-h-screen bg-[#050a12] text-gray-200 selection:bg-pink-500/30">
      
      {/* Editorial Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <Image
          src="/images/cement-factory.jpg" 
          alt="Notes from the Field"
          fill
          priority
          className="object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-transparent to-[#050a12]" />
        
        <div className="relative z-10 px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center gap-2 mb-6">
    <Globe className="w-3 h-3 text-pink-500 animate-pulse" />
    <span className="inline-block px-4 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-[10px] font-bold uppercase tracking-[0.3em]">
      Dispatch — Issue 01
    </span>
  </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight mb-8 text-white tracking-tighter">
              The Silent Gold in <br />
              <span className="italic text-pink-500">Africa&apos;s Climate Economy</span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-400 font-medium tracking-widest uppercase text-xs">
              <span className="w-8 h-[1px] bg-gray-700" />
              By Brenda Keya
              <span className="w-8 h-[1px] bg-gray-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-24">
        
        {/* Intro with Drop Cap */}
        <p className="mb-12 text-xl md:text-2xl leading-relaxed font-light text-gray-300 first-letter:text-7xl first-letter:font-serif first-letter:text-pink-500 first-letter:mr-3 first-letter:float-left">
          When I walk through the factory fields at East African Portland Cement, I don&apos;t just see a production plant. I see a canvas for a new kind of story. A story not of machines and dust, but of climate, carbon, and radical possibility.
        </p>

        {/* High-End Image Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group my-16"
        >
          <div className="absolute -inset-2 border border-white/5 rounded-2xl group-hover:border-pink-500/20 transition-all duration-500" />
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/cement-factory.jpg"
              alt="East African Portland Cement Factory"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-gray-500 italic text-right">
            01. Field observations at East African Portland Cement.
          </p>
        </motion.div>

        <div className="space-y-8 text-lg leading-relaxed font-light text-gray-400">
          <p>
            In the silence of those kilns and the smell of raw material, I keep asking:
          </p>
          
          <motion.p 
            whileInView={{ x: [0, 10, 0] }}
            className="text-3xl md:text-4xl font-serif italic text-white leading-snug py-8 border-y border-white/5"
          >
            &quot;What if this cement could tell a different story? One that <span className="text-pink-500">heals the planet</span> instead of just building it?&quot;
          </motion.p>

          <p>
            For months, I have been working with passionate teams—WakaGram researchers, field experts, and bold thinkers—to draft a methodology for low-carbon cement. A product not just of calcium and clay, but of <strong>climate accountability</strong>.
          </p>
        </div>

        {/* Biochar Section with unique background */}
        <section className="my-20 p-10 bg-white/[0.02] border border-white/5 rounded-[2rem] relative overflow-hidden">
            <Leaf className="absolute -right-10 -bottom-10 w-40 h-40 text-pink-500/5 rotate-12" />
            
            <div className="relative z-10">
                <h3 className="text-2xl font-serif text-white mb-6">The Power of Biochar</h3>
                <p className="mb-8">
                  Then comes biochar, the hidden power in our agricultural waste. From coffee husks in Central to sugarcane stalks in Nyanza, I see a network of carbon wealth lying in our soil, our dust, our waste.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-pink-500 font-bold block mb-1">Raw Waste</span>
                        <span className="text-xs text-gray-500">Coffee husks, sugarcane, avocado prunings.</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-pink-500 font-bold block mb-1">Carbon Wealth</span>
                        <span className="text-xs text-gray-500">Transformed into climate currency.</span>
                    </div>
                </div>
            </div>
        </section>

        {/* The "Deal" Quote */}
        <div className="my-16 flex gap-6 items-start">
            <Quote className="w-12 h-12 text-pink-500 shrink-0 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-serif text-gray-200 italic leading-tight">
              “Enrich cement with biochar. Cut emissions. Capture carbon. Turn cement into climate currency.”
            </blockquote>
        </div>

        {/* Red Tape & Pivot Section */}
        <div className="space-y-6 mb-20">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white">The Hard Truth</h3>
            <p className="text-gray-400 font-light italic">
              Many African institutions are not ready for the innovation they desperately need. The red tape is real. But here is how we respond:
            </p>
            <div className="flex flex-wrap gap-4">
                {["We Pivot.", "We Partner Better.", "We Structure Smarter Deals."].map((text, i) => (
                    <span key={i} className="px-6 py-3 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-full text-sm font-bold">
                        {text}
                    </span>
                ))}
            </div>
        </div>

        {/* Final Declaration */}
        <div className="border-t border-white/10 pt-16 mt-16">
            <h3 className="text-3xl font-serif text-white mb-10 text-center">A Declaration</h3>
            <div className="space-y-6">
                {[
                    "Africa has what the world needs: land, biomass, brilliance.",
                    "Climate deals are not a favor — they are investments with returns.",
                    "I am an architect of sustainable value chains and a broker of regenerative opportunities."
                ].map((item, i) => (
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        key={i} 
                        className="flex items-start gap-4"
                    >
                        <CheckCircle2 className="w-6 h-6 text-pink-500 shrink-0 mt-1" />
                        <p className="text-lg text-gray-300 font-light">{item}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* CTA Section */}
       <motion.div 
  whileHover={{ scale: 1.02 }}
  className="mt-24 p-12 bg-gradient-to-br from-pink-600/20 to-blue-600/20 border border-white/10 rounded-[3rem] text-center"
>
  <h4 className="text-2xl md:text-3xl font-serif text-white mb-6">Let’s Build Bold Things</h4>
  <p className="text-gray-400 mb-10 max-w-md mx-auto">
    If you&apos;re a developer, investor, or visionary looking to build in Africa&apos;s green space—let&apos;s talk.
  </p>
  <button onClick={()=>{
    setShowBookModal(true)
  }} className="group bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
    Start the Conversation
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </button>
</motion.div>

      </article>

      {/* Subtle Footer-like note */}
      <footer className="pb-24 text-center">
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.5em]">Next Dispatch: coming soon</p>
      </footer>
      {/* Modal */}
            {showBookModal && <BookMeModal onClose={() => setShowBookModal(false)} />}
    </div>
  );
}