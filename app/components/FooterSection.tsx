"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface FooterSectionProps {
  openBooking: () => void;
}
type FooterLink =
  | { name: string; href: string }
  | { name: string; action: "book" };

export default function FooterSection({ openBooking }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks : Record<string, FooterLink[]>  = {
    "Get Started": [
      { name: "Book A 1:1 Session", action: "book" },
      { name: "Clarity Blueprint", href: "/clarity-blueprint" },
      { name: "Corporate Workshops", action: "book" },
    ],
    "Thought Leadership": [
      { name: "Field Notes", href: "/notes" },
      { name: "Sustainability Strategy", href: "/#publications" },
      { name: "Presence Coaching", href: "/#aboutme" },
    ],
  };

  const socials = [
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Youtube size={20} />, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#050a12] text-gray-400 border-t border-white/5 pt-20 pb-10 px-6">
      {/* --- START MOTION WRAPPER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-white text-2xl font-serif italic tracking-tighter">Brenda Keya.</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Architect of sustainable value chains and broker of regenerative opportunities across Africa.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">{title}</h3>
              <ul className="space-y-4">
               
 {links.map((link) => (
  <li key={link.name}>
    {"action" in link ? (
      <button
        type="button"
        onClick={openBooking}
        className="group flex items-center gap-2 text-sm hover:text-pink-500 transition-colors"
      >
        {link.name}
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1"
        />
      </button>
    ) : (
      <Link
        href={link.href}
        className="group flex items-center gap-2 text-sm hover:text-pink-500 transition-colors"
      >
        {link.name}
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1"
        />
      </Link>
    )}
  </li>
))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Direct Contact</h3>
            <div className="space-y-6">
              <a href="tel:+254720975755" className="flex items-center gap-4 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20">
                  <Phone size={16} className="text-pink-500" />
                </div>
                <span className="text-sm">+254 720 975 755</span>
              </a>
              <a href="mailto:brendakeyacoaching@gmail.com" className="flex items-center gap-4 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20">
                  <Mail size={16} className="text-pink-500" />
                </div>
                <span className="text-sm truncate">brendakeyacoaching@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-gray-600">
            © {currentYear} Brenda Keya • All Rights Reserved
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-white">Available for Projects</span>
          </div>
        </div>
      </motion.div> 
      {/* --- END MOTION WRAPPER --- */}
    </footer>
  );
}