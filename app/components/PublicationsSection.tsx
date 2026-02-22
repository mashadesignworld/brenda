"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function PublicationsSection() {
  const publications = [
    {
      id: 1,
      type: "Book",
      title: "CEMENT CARBON CREDITS",
      author: "BY BRENDA",
      year: "2025",
      description: "The cement industry accounts for approximately 8% of global CO2 emissions, making it a critical focus for decarbonization under the Paris Climate Agreement’s net-zero target by 2050.",
      link: "/notes",
      coverImage: "/images/book-cover.jpg",
      buttonText: "READ MORE"
    },
    {
      id: 2,
      type: "Podcast",
      title: "NOTES FROM THE FIELD",
      author: "BY BRENDA",
      year: "2025",
      description: "From coffee husks in Central, to sugarcane stalks in Nyanza, to avocado prunings in Tigoni, I begin to see a network of carbon wealth lying in our soil.",
      link: "/notes",
      coverImage: "/images/book-cover1.jpg",
      buttonText: "LISTEN NOW"
    },
    {
      id: 3,
      type: "Article",
      title: "WAKA GRAM PORTFOLIO",
      author: "BY BRENDA",
      year: "2025",
      description: "Our Carbon Forward program aligns corporate sustainability goals with measurable environmental and social outcomes.",
      link: "/notes",
      coverImage: "/images/book-cover2.jpg",
      buttonText: "VIEW PORTFOLIO"
    },
  ];

  return (
    <section id="publications" className="py-24 bg-[#050a12] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="h-[1px] w-12 bg-pink-500" />
            <span className="text-pink-500 uppercase tracking-[0.3em] text-xs font-bold">Archives</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter"
          >
            Latest Works<span className="text-pink-500">.</span>
          </motion.h2>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-500"
            >
              {/* Image Wrapper */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={pub.coverImage}
                  alt={pub.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Type Tag */}
                <div className="absolute top-4 left-4 bg-[#050a12]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/10">
                  {pub.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-pink-400 transition-colors duration-300">
                    {pub.title}
                  </h3>
                  <span className="text-gray-500 font-mono text-xs">{pub.year}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {pub.description}
                </p>

                {/* Refined CTA */}
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group/link"
                >
                  <span className="border-b border-pink-500/50 pb-1 group-hover/link:border-pink-500 transition-all">
                    {pub.buttonText}
                  </span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}