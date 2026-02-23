"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  // Replace with Brenda's actual WhatsApp number
  const phoneNumber = "254720975755"; 
  const message = encodeURIComponent("Hi Brenda, I'm currently looking at the Clarity Blueprint and would love to learn more.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors"
    >
      <MessageCircle size={24} />
      <span className="font-bold text-sm uppercase tracking-wider">Chat with Brenda</span>
    </motion.a>
  );
}