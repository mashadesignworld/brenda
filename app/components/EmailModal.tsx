"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmailModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] bg-black/60 flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-pink-200 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl font-bold"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold text-pink-600 mb-2">
            Get the Clarity Blueprint
          </h2>
          <p className="text-gray-600 mb-6">
            Enter your email and name to receive payment instructions and a bonus audio.
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = form.name?.value || "Guest";
              const email = form.email.value;
              const whatsapp = form.whatsapp?.value || "";

              try {
                const res = await fetch("/api/sendMail", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, email, whatsapp }),
                });

                if (res.ok) {
                  alert("🎉 Email sent! Check your inbox.");
                  form.reset();
                  onClose(); // Close modal
                } else {
                  const err = await res.json();
                  alert("❌ Error: " + err.message);
                }
              } catch (err) {
                console.error(err);
                alert("❌ Server error. Please try again.");
              }
            }}
            className="flex flex-col gap-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Full Name"
              required
              className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email Address"
              required
              className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="whatsapp"
              type="tel"
              placeholder="WhatsApp Number (Optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition"
            >
              Send Instructions
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Your info is safe & secure. You agree to our{" "}
            <a href="#" className="underline hover:text-pink-600">
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
