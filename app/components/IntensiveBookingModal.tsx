"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Target, User, Briefcase, HelpCircle, Phone } from "lucide-react";
import toast from 'react-hot-toast';
// 1. Import your confetti utility
import { triggerSuccessConfetti } from "@/lib/confetti"; 

export default function IntensiveBookingModal({ onClose }: { onClose: () => void }) {
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
    challenge: "",
    goal: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    const tid = toast.loading("Submitting Intake Strategy...");

    try {
      const res = await fetch("/api/bookmeintensive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        // 2. TRIGGER THE GOLD CONFETTI HERE
        triggerSuccessConfetti();
        
        toast.success("Alignment Request Sent ✨", { id: tid });
        
        setTimeout(() => {
          onClose();
          setIsSending(false);
        }, 2500); // Slightly increased to let users enjoy the effect
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Intensive Booking Error Detail:", error);
      toast.error("Network error. Please try again.", { id: tid });
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050a12]/95 backdrop-blur-2xl p-4 md:p-8"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative bg-[#0a121e] border border-[#d4a34a]/20 p-8 md:p-12 rounded-[3rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto selection:bg-[#d4a34a]/30"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ... all your existing JSX code ... */}
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a34a]/5 blur-[60px] rounded-full pointer-events-none" />
          
          <button 
            onClick={onClose} 
            className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="mb-12 text-center">
            <span className="text-[#d4a34a] uppercase tracking-[0.5em] text-[10px] font-black block mb-4">
              Private 1:1 Intensive
            </span>
            <h2 className="text-4xl font-serif italic text-white">The Alignment Session</h2>
            <div className="w-12 h-[1px] bg-[#d4a34a]/30 mx-auto mt-6" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold flex items-center gap-2">
                  <User size={12} className="text-[#d4a34a]" /> Full Name
                </label>
                <input 
                  name="name" 
                  required 
                  value={form.name} 
                  onChange={handleChange} 
                  placeholder="Brenda Keya"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4a34a] outline-none transition-all placeholder:text-white/5" 
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold flex items-center gap-2">
                  <Phone size={12} className="text-[#d4a34a]" /> WhatsApp
                </label>
                <input 
                  name="whatsapp" 
                  required 
                  value={form.whatsapp} 
                  onChange={handleChange} 
                  placeholder="07..." 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4a34a] outline-none transition-all placeholder:text-white/5" 
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                Professional Email
              </label>
              <input 
                name="email" 
                type="email" 
                required 
                value={form.email} 
                onChange={handleChange} 
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4a34a] outline-none transition-all" 
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold flex items-center gap-2">
                <Briefcase size={12} className="text-[#d4a34a]" /> Leadership Context
              </label>
              <input 
                name="role" 
                required 
                value={form.role} 
                onChange={handleChange} 
                placeholder="e.g. Founder, Executive, or Industry Leader" 
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4a34a] outline-none transition-all placeholder:text-white/10" 
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold flex items-center gap-2">
                <HelpCircle size={12} className="text-[#d4a34a]" /> The Core Challenge
              </label>
              <textarea 
                name="challenge" 
                required 
                value={form.challenge} 
                onChange={handleChange} 
                rows={2} 
                placeholder="What is currently unaligned in your expression?" 
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4a34a] outline-none transition-all resize-none placeholder:text-white/10" 
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold flex items-center gap-2">
                <Target size={12} className="text-[#d4a34a]" /> Strategic Goal
              </label>
              <input 
                name="goal" 
                required 
                value={form.goal} 
                onChange={handleChange} 
                placeholder="What must we achieve in our 90 minutes?" 
                className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-[#d4a34a] outline-none transition-all placeholder:text-white/10" 
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-6 rounded-2xl bg-[#d4a34a] text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all flex items-center justify-center gap-4 mt-8 shadow-xl shadow-[#d4a34a]/10"
            >
              {isSending ? "Processing Strategy..." : "Request Alignment Session"}
              {!isSending && <Send size={14} />}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}