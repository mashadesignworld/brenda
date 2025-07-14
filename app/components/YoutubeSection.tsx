"use client";

import Image from "next/image";
import { FaYoutube, FaSpotify } from "react-icons/fa";

export default function YoutubeSection() {
  return (
    <section
      id="shows"
      className="bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100 py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6 tracking-tight">
            <span className="text-pink-600">Presence & Power Africa</span>{" "}
            <span className="text-gray-800">YouTube Channel</span>
          </h2>

          <p className="text-2xl font-medium text-gray-800 italic mb-4">
            <span className="font-serif">Getting </span>
            <span className="underline decoration-wavy decoration-2 decoration-blue-400">
              real
            </span>
            <span className="text-pink-600"> about what it takes.</span>
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            A space where Brenda shares clarity tools, voice coaching, and
            sustainability insights. <br />
            <strong>Personal brand</strong> uniting her impact consultancy and
            soul-led leadership coaching.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            <em>
              "From soul to systems, I help leaders become aligned voices,
              rooted, resonant and ready."
            </em>
            <br />
            <strong>– Brenda N. Keya</strong>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://www.youtube.com/@BrendaKeya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition"
            >
              <FaYoutube className="text-2xl" />
              WATCH ON YOUTUBE
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
            >
              <FaSpotify className="text-2xl text-green-400" />
              LISTEN ON SPOTIFY
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <Image
            src="/phone.png"
            alt="Brenda YouTube on Phone"
            width={400}
            height={800}
            className="object-contain max-w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
