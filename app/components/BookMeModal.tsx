"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookMeModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const res = await fetch("/api/bookme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setIsSending(false);

    if (res.ok) {
      alert("Message sent successfully!");
      onClose();
    } else {
      alert("Failed to send. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 30 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-pink-100 via-white to-blue-100 p-8 rounded-xl shadow-xl w-full max-w-lg text-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-pink-600">Book Brenda</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition"
            >
              {isSending ? "Sending..." : "Send Booking Email"}
            </button>
          </form>

          <button
            onClick={onClose}
            className="mt-4 text-sm text-gray-500 hover:text-gray-700 text-center w-full"
          >
            Cancel
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
