"use client";

import Image from "next/image";
import { FaYoutube, FaSpotify, FaBell, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function YoutubeSection() {
  return (
    <section
      id="shows"
      className="relative bg-gradient-to-br from-pink-50 via-white to-blue-50 py-16 px-6 md:px-8 lg:px-12"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              Presence & Power Africa
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soul-led leadership coaching through digital platforms
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* YouTube Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 bg-gradient-to-br from-red-100 to-red-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <FaYoutube className="text-red-600 text-6xl" />
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md">
                <FaBell className="text-red-600" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">YouTube Channel</h3>
              <p className="text-gray-600 mb-4">
                Clarity tools, voice coaching, and sustainability insights from Brenda
              </p>
              <a
                href="https://www.youtube.com/@BrendaKeya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition"
              >
                <FaYoutube className="mr-2" />
                Watch Videos
              </a>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-pink-600 to-blue-600 rounded-2xl shadow-lg overflow-hidden text-white"
          >
            <div className="p-8 h-full flex flex-col">
              <FaQuoteLeft className="text-4xl opacity-20 mb-4" />
              <blockquote className="text-xl italic mb-6 flex-grow">
                &quot;From soul to systems, I help leaders become aligned voices, rooted, resonant and ready.&quot;
              </blockquote>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1 mr-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-blue-400"></div>
                </div>
                <div>
                  <p className="font-bold">Brenda N. Keya</p>
                  <p className="text-pink-100 text-sm">Leadership Coach</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Spotify Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24 bg-black rounded-full flex items-center justify-center">
                  <div className="absolute w-6 h-6 bg-green-400 rounded-full"></div>
                  <div className="absolute w-12 h-12 bg-green-400 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Podcast</h3>
              <p className="text-gray-600 mb-4">
                Listen to Brenda&apos;s insights on leadership and personal growth
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition"
              >
                <FaSpotify className="mr-2" />
                Listen on Spotify
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mobile App CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get the Mobile App</h3>
              <p className="text-gray-600 mb-6">
                Access Brenda&apos;s coaching content on the go with our mobile application
              </p>
              <div className="flex gap-3">
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.8 1.01.03 2.06.33 2.99 1.19-2.73 1.65-2.04 5.98.45 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01.01zm-3.95-14.4c.78-1.16 1.24-2.82 1.03-4.48-1.11.04-2.35.72-3.18 1.56-.76.78-1.36 2.04-1.15 3.36 1.19.09 2.38-.58 3.3-1.44z"></path>
                  </svg>
                  App Store
                </button>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                  </svg>
                  Play Store
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center p-4">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="/phone.png"
                  alt="Mobile App"
                  layout="fill"
                  objectFit="contain"
                  className="drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}