"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const blueprintFaqs = [
  {
    question: "How is the Clarity Blueprint delivered?",
    answer: "Immediately after your M-Pesa payment is confirmed, you will receive an automated email containing a high-resolution PDF guide and a link to the bonus 'Alignment' audio session."
  },
  {
    question: "Is this a one-time purchase or a subscription?",
    answer: "This is a one-time investment. Once you download the Blueprint, you have lifetime access to the frameworks, planners, and audio materials."
  },
  {
    question: "Does this include 1-on-1 coaching with Brenda?",
    answer: "The Blueprint is a self-guided experience designed to prepare you for deeper work. However, inside the guide, you'll find a priority link to book a discovery call if you feel ready for private strategy."
  },
  {
    question: "I'm not in leadership yet; is this still for me?",
    answer: "Absolutely. Clarity is the first step of leadership. Whether you are leading a team or simply navigating a personal career pivot, these tools help you find your voice before you step onto the stage."
  }
];

export default function FAQSection() {
  // Track which question is open. null means all are closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-[#050a12]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#d4a34a] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">
            Assurance
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1px] bg-[#d4a34a]/30 mx-auto mt-8" />
        </div>

        {/* Accordion Container */}
        <div className="space-y-2">
          {blueprintFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`transition-all duration-500 rounded-3xl border ${
                  isOpen ? "bg-white/[0.03] border-[#d4a34a]/30" : "border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-7 flex justify-between items-center text-left"
                >
                  <span className={`text-lg font-light transition-colors duration-300 ${
                    isOpen ? "text-[#d4a34a]" : "text-gray-300"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDown size={20} className={isOpen ? "text-[#d4a34a]" : "text-gray-600"} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 text-gray-400 font-light leading-relaxed max-w-2xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm mb-6 font-light">
            Still have questions? Reach out via WhatsApp for a direct chat.
          </p>
        </div>
      </div>
    </section>
  );
}