"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, 
  ChevronRight, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Target, 
  HelpCircle,
  Calendar,
  LogOut,
  Eye,
  EyeOff
} from "lucide-react";
import { getLeads } from "./actions";
import type { Lead } from "@prisma/client"; 

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Using trim() to handle accidental spaces
    if (password.trim() === "brenda2026") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid Private Key. Please try again.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      getLeads().then((data) => {
        setLeads(data);
        setLoading(false);
      });
    }
  }, [isAuthenticated]);

  // --- LOGIN VIEW ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050a12] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0a121e] p-10 rounded-[2.5rem] border border-[#d4a34a]/20 w-full max-w-md text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Background Blur */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4a34a]/10 blur-3xl rounded-full" />
          
          <div className="w-16 h-16 bg-[#d4a34a]/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <Lock className="text-[#d4a34a]" size={24} />
          </div>
          
          <h2 className="text-2xl font-serif italic text-white mb-2">Brenda Keya</h2>
          <p className="text-[#d4a34a] text-[10px] uppercase tracking-[0.3em] mb-8 font-bold">Admin Intelligence</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter Private Key" 
                autoFocus
                className="w-full bg-transparent border-b border-white/10 py-4 px-4 text-center text-white outline-none focus:border-[#d4a34a] transition-all placeholder:text-white/10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#d4a34a] transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <button type="submit" className="w-full py-4 bg-[#d4a34a] text-black font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4a34a]/10">
              Access Dashboard <ChevronRight size={14} />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- DASHBOARD VIEW ---
  return (
    <div className="min-h-screen bg-[#050a12] text-white selection:bg-[#d4a34a]/30">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-[#d4a34a]/10 pb-12">
          <div>
            <span className="text-[#d4a34a] uppercase tracking-[0.5em] text-[10px] font-black block mb-2">
              Intensive Portal
            </span>
            <h1 className="text-5xl font-serif italic text-white">Strategy Leads</h1>
          </div>
          <button 
            onClick={() => {
                setIsAuthenticated(false);
                setPassword("");
            }}
            className="flex items-center gap-2 text-white/40 hover:text-[#d4a34a] transition-colors text-xs uppercase tracking-widest font-bold"
          >
            <LogOut size={14} /> Terminate Session
          </button>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
             <div className="w-12 h-12 border-2 border-[#d4a34a]/20 border-t-[#d4a34a] rounded-full animate-spin" />
             <p className="italic text-gray-500 font-serif">Decrypting lead data...</p>
          </div>
        ) : (
          <div className="grid gap-8">
            <AnimatePresence>
              {leads.map((lead, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={lead.id} 
                  className="bg-[#0a121e] border border-white/5 p-8 rounded-[2.5rem] hover:border-[#d4a34a]/30 transition-all shadow-xl group"
                >
                  {/* Identity Row */}
                  <div className="flex flex-wrap justify-between items-start gap-6 mb-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#d4a34a]/10 flex items-center justify-center border border-[#d4a34a]/20 group-hover:scale-110 transition-transform">
                          <User size={20} className="text-[#d4a34a]" />
                        </div>
                        <h3 className="text-2xl font-serif text-white">{lead.name}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mt-2">
                        <span className="flex items-center gap-2"><Mail size={14} className="text-[#d4a34a]/50"/> {lead.email}</span>
                        <span className="flex items-center gap-2"><Phone size={14} className="text-[#d4a34a]/50"/> {lead.whatsapp}</span>
                        <span className="flex items-center gap-2 text-[10px] uppercase tracking-tighter opacity-50"><Calendar size={12}/> {new Date(lead.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#d4a34a]/5 px-4 py-2 rounded-full border border-[#d4a34a]/20">
                      <span className="text-[#d4a34a] text-[10px] font-black uppercase tracking-[0.2em]">
                        {lead.serviceType}
                      </span>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
                    <div className="bg-white/5 p-4 rounded-2xl">
                      <h4 className="flex items-center gap-2 text-[10px] uppercase text-[#d4a34a] mb-3 font-black tracking-widest">
                        <Briefcase size={12}/> Leadership Context
                      </h4>
                      <p className="text-gray-300 italic text-lg leading-relaxed line-clamp-3 hover:line-clamp-none transition-all">{lead.role}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl">
                      <h4 className="flex items-center gap-2 text-[10px] uppercase text-[#d4a34a] mb-3 font-black tracking-widest">
                        <HelpCircle size={12}/> The Core Challenge
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{lead.challenge}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-transparent hover:border-[#d4a34a]/20 transition-colors">
                      <h4 className="flex items-center gap-2 text-[10px] uppercase text-[#d4a34a] mb-3 font-black tracking-widest">
                        <Target size={12}/> Strategic Goal
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed font-medium">{lead.goal}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {leads.length === 0 && (
              <div className="text-center py-32 border border-dashed border-white/10 rounded-[3rem]">
                <p className="text-gray-600 font-serif italic text-xl">Waiting for the first strategic alignment...</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}