"use client";

import Image from "next/image";
import { FaYoutube, FaSpotify } from "react-icons/fa";

export default function YoutubeSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-50 to-green-50 py-16 px-4 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
           <span className="text-red-600">Presence & Power Africa </span> Youtube Channel
        </h2>
        <p className="text-2xl font-medium text-gray-700 italic mb-4">
          <span className="text-black font-script">Getting </span>
          <span className="text-black underline decoration-wavy decoration-1">real</span>
          <span className="text-red-600"> about what it takes.</span>
        </p>
        <p className="text-gray-700 mb-4">
          A space where Brenda shares clarity tools, voice coaching, and sustainability insights{" "}<br/>
          <strong>Personal brand </strong> uniting her impact consultancy and soul-led leadership coaching.
        </p>
        <p className="text-gray-700 mb-6">
           From soul to systems, I help leaders become aligned voices, rooted, resonant and ready<br/> <strong>  Brenda N. Keya</strong>
        </p>

        {/* Listen Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="https://www.youtube.com/@BrendaKeya" target="_blank"
            className="flex items-center gap-3 bg-white text-red-800 px-6 py-3 rounded-full shadow hover:shadow-lg transition"
          >
            <FaYoutube className="text-2xl" />
           WATCH ON YOUTUBE
          </a>
          <a
            href="#"
            className="flex items-center gap-3 bg-white text-blue-800 px-6 py-3 rounded-full shadow hover:shadow-lg transition"
          >
            <FaSpotify className="text-2xl text-yellow-500" />
            LISTEN ON SPOTIFY
          </a>
        </div>

        
       
      </div>
{/* Right Image */}
<div className="w-full lg:w-1/3 flex justify-left">
  <Image
    src="/phone.png"
    alt="Podcast phone"
    width={400}
    height={800}
    className="object-contain max-w-full h-auto scale-125 md:scale-150"
  />
</div>


    </section>
  );
}
