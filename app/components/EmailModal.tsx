"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmailModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000); // Show after 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/60 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg p-8 w-full max-w-lg shadow-xl"
          >
            <div className="text-right mb-2">
              <button onClick={() => setShow(false)} className="text-gray-600 hover:text-black text-xl">
                &times;
              </button>
            </div>

            <h2 className="text-2xl font-bold mb-2">Get the Clarity Blueprint</h2>
            <p className="text-gray-700 mb-4">Enter your email to receive a free download directly to your inbox.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("🎉 Email submitted! We'll send you the blueprint.");
                setShow(false);
              }}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                placeholder="Your Email"
                required
                className="border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition"
              >
                Send it to Me
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
