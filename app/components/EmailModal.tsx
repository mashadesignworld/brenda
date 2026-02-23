"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import toast from 'react-hot-toast';

export default function EmailModal({ onClose }: { onClose: () => void }) {
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    
    const tid = toast.loading("Preparing your blueprint...");
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
    };

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("The blueprint is on its way to your inbox.", { 
          id: tid,
          icon: '🖋️',
          style: {
            borderRadius: '20px',
            background: '#0a121e',
            color: '#fff',
            border: '1px solid #d4a34a33',
          }
        });
        form.reset();
        setTimeout(onClose, 2500);
      } else {
        const err = await res.json();
        throw new Error(err.message);
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong";
      toast.error(errorMessage, { id: tid });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] bg-[#050a12]/90 backdrop-blur-xl flex items-center justify-center px-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-[#0a121e] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-lg w-full relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle Gold Glow Background */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#d4a34a]/10 rounded-full blur-[100px] pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="text-center mb-10">
            <span className="text-[#d4a34a] uppercase tracking-[0.4em] text-[10px] font-bold block mb-3">
              Direct Access
            </span>
            <h2 className="text-4xl font-serif italic text-white leading-tight">
              Get the <br /> Clarity Blueprint
            </h2>
            <p className="text-gray-400 mt-4 text-sm font-light leading-relaxed max-w-[280px] mx-auto">
              Instructions and your bonus audio are ready to be sent to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-white/5 border-b border-white/10 px-4 py-4 text-white placeholder:text-gray-600 outline-none transition-all focus:border-[#d4a34a] rounded-t-lg"
              />
            </div>
            
            <div className="relative">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-white/5 border-b border-white/10 px-4 py-4 text-white placeholder:text-gray-600 outline-none transition-all focus:border-[#d4a34a] rounded-t-lg"
              />
            </div>

            <div className="relative">
              <input
                name="whatsapp"
                type="tel"
                placeholder="WhatsApp Number (Optional)"
                className="w-full bg-white/5 border-b border-white/10 px-4 py-4 text-white placeholder:text-gray-600 outline-none transition-all focus:border-[#d4a34a] rounded-t-lg"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-[#d4a34a] hover:bg-white text-black py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] shadow-lg transition-all duration-500 flex items-center justify-center gap-3 group"
            >
              {isSending ? "Processing..." : "Receive the Blueprint"}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-white/20">
            <ShieldCheck size={14} />
            <p className="text-[10px] uppercase tracking-widest">
              Secure & Encrypted Delivery
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}