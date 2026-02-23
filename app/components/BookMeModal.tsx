"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';
import toast from 'react-hot-toast';
import { X, Send } from 'lucide-react';

export default function BookMeModal({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const isGold = pathname === '/clarity-blueprint';
  
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  // Dynamic Theme Colors
  const accentColor = isGold ? "text-[#d4a34a]" : "text-pink-500";
  const accentBg = isGold ? "bg-[#d4a34a]" : "bg-pink-500";
  const accentBorder = isGold ? "border-[#d4a34a]/30 focus:border-[#d4a34a]" : "border-pink-500/30 focus:border-pink-500";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    const tid = toast.loading("Sending Message...");

    try {
      const res = await fetch("/api/bookme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message Sent Successfully ✨", { id: tid, icon: isGold ? '🏺' : '🌸' });
        setTimeout(() => {
          onClose();
          setIsSending(false);
        }, 2000);
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      console.error("Booking Error Detail:", error); // Now the variable is "used"!
      setIsSending(false);
      toast.error("Signal lost. Try again?", { id: tid });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050a12]/90 backdrop-blur-xl p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-[#0a121e] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Background Decorative Glow */}
          <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[100px] opacity-20 ${accentBg}`} />

          <button onClick={onClose} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors">
            <X size={24} />
          </button>

          <div className="text-center mb-10">
            <span className={`uppercase tracking-[0.4em] text-[10px] font-bold ${accentColor}`}>
              Secure Your Space
            </span>
            <h2 className="text-4xl font-serif text-white mt-2 italic">Book a Session</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group relative">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className={`w-full bg-white/5 border-b ${accentBorder} px-4 py-4 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:bg-white/[0.08] rounded-t-lg`}
              />
            </div>

            <div className="group relative">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className={`w-full bg-white/5 border-b ${accentBorder} px-4 py-4 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:bg-white/[0.08] rounded-t-lg`}
              />
            </div>

            <div className="group relative">
              <textarea
                name="message"
                placeholder="How can we align your vision?"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className={`w-full bg-white/5 border-b ${accentBorder} px-4 py-4 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:bg-white/[0.08] rounded-t-lg resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full relative overflow-hidden group py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-500 ${isSending ? 'bg-gray-800' : accentBg} text-white`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSending ? "Transmitting..." : "Initialize Contact"}
                {!isSending && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </span>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}