"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, ShieldCheck, Crown } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "The Clarity Blueprint",
    category: "Entry Level",
    price: "KSh 1,000",
    format: "Digital Guide",
    description: "For individuals ready to reconnect with clarity, expression, and presence. A structured foundation for your alignment journey.",
    features: ["Self-paced framework", "Expression Audit", "Presence Mapping"],
    cta: "Get the Blueprint",
    href: "/clarity-blueprint",
    icon: <Sparkles className="w-5 h-5" />,
    style: "bg-white/[0.02] border-white/5"
  },
  {
    number: "02",
    title: "The Alignment Session",
    category: "1:1 Private Intensive",
    price: "KSh 6,500",
    format: "90-Minute Strategy",
    description: "A high-level clarity and expression intensive for leaders ready to refine how they think, communicate, and show up.",
    features: [
      "Structured clarity assessment",
      "Expression audit",
      "Alignment mapping",
      "Action roadmap"
    ],
    cta: "Book the Intensive",
    href: "/",
    icon: <ShieldCheck className="w-5 h-5" />,
    style: "bg-[#d4a34a]/5 border-[#d4a34a]/20", // Highlighted because it's the "Middle Ground"
    featured: true
  },
  {
    number: "03",
    title: "Command Your Space",
    category: "4-Week Private Mentorship",
    price: "KSh 32,000",
    format: "Deep Integration",
    description: "For individuals ready to move from reflection to embodied leadership. A month of deep calibration and positioning.",
    features: [
      "4 weekly private sessions",
      "Personalized alignment framework",
      "Expression positioning work",
      "Presence calibration",
      "Strategic roadmap document"
    ],
    cta: "Apply for Mentorship",
    href: "/apply",
    icon: <Crown className="w-5 h-5" />,
    style: "bg-white/[0.02] border-white/5"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#050a12] text-white min-h-screen pb-32">
      {/* Header Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#d4a34a] uppercase tracking-[0.5em] text-[10px] font-black mb-4 block"
        >
          Service Menu — Version 1.0
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif italic mb-6"
        >
          The Aligned Voice <span className="text-white/20">Africa</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
          Select the level of proximity and depth required for your current season of leadership.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] border flex flex-col h-full transition-all duration-500 group hover:shadow-2xl hover:shadow-[#d4a34a]/5 ${service.style}`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-serif text-white/10 group-hover:text-[#d4a34a]/20 transition-colors">
                  {service.number}
                </span>
                <div className="p-3 bg-white/5 rounded-2xl text-[#d4a34a]">
                  {service.icon}
                </div>
              </div>

              <div className="mb-2">
                <span className="text-[#d4a34a] text-[10px] uppercase tracking-widest font-bold">
                  {service.category}
                </span>
                <h3 className="text-3xl font-serif mt-2 mb-4 leading-tight">
                  {service.title}
                </h3>
              </div>

              <div className="mb-6 pb-6 border-b border-white/5">
                <span className="text-2xl font-light text-white">{service.price}</span>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-tighter italic">{service.format}</p>
              </div>

              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-4 mb-12 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#d4a34a] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={service.href} className="mt-auto">
                <button className={`w-full py-5 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all duration-300 ${
                  service.featured 
                  ? "bg-[#d4a34a] text-black hover:bg-white" 
                  : "bg-white/5 text-white border border-white/10 hover:border-[#d4a34a] hover:text-[#d4a34a]"
                }`}>
                  {service.cta}
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </Link>

              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full">
                  Recommended
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="mt-40 text-center px-6">
        <div className="max-w-4xl mx-auto p-12 border-t border-white/5">
          <p className="text-2xl md:text-3xl font-serif italic text-gray-300">
            &quot;True authority is not the volume of your voice, but the depth of your alignment.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}