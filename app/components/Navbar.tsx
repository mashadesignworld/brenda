"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BookMeModal from "./BookMeModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#aboutme" },
    { name: "Clarity-Blueprint", href: "/clarity-blueprint" },
    { name: "Podcast", href: "#podcast" },
    { name: "Shows", href: "#shows" },
    { name: "Publications", href: "#publications" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled 
            ? "py-3 bg-[#050a12]/40 backdrop-blur-xl border-b border-white/10" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo with entrance animation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="relative group">
              <Image
                src="/logo.png"
                alt="Brenda Keya"
                width={130}
                height={80}
                priority
                className="brightness-0 invert transition-all duration-300 group-hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className="relative text-[13px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 group"
                  >
                    {link.name}
                    {/* Animated Underline */}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-pink-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Book Me Button - Matching the Premium Theme */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBookModal(true)}
              className="px-6 py-2.5 bg-white text-[#050a12] text-[12px] font-black uppercase tracking-widest rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
            >
              Book Me
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            >
              <span className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#050a12] border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-bold text-white tracking-tighter"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setShowBookModal(true);
                  }}
                  className="w-full py-4 bg-pink-600 text-white font-bold uppercase tracking-widest rounded-xl"
                >
                  Book Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Modal component */}
      {showBookModal && <BookMeModal onClose={() => setShowBookModal(false)} />}
    </>
  );
}