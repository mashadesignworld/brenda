"use client";

import React, { useRef, useState } from "react";

export default function PodcastSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="podcast"
      className="w-full bg-gradient-to-br from-[#fffefc] via-[#f9fafb] to-[#f0f4f8] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 text-gray-900 text-center lg:text-left lg:pl-10">
          <p className="text-sm uppercase font-bold text-gray-500 mb-3 tracking-wider">
            Podcast
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 mb-6">
            In Session with{" "}
            <span className="text-blue-700">Brenda Keya</span>
          </h2>

          <p className="text-lg text-gray-700 max-w-prose mb-4">
            <em>
              “Conversations at the intersection of soul, systems, and
              sustainability.”
            </em>
          </p>

          <p className="text-base text-gray-700 mb-6">
            A space for deep, honest, and transformative conversations. Each
            session explores how our inner world (soul), the structures we
            navigate (systems), and the planet we call home (sustainability)
            shape our lives, choices, and collective future.
          </p>

          {/* Quote Block */}
 <blockquote className="relative pl-10 border-l-4 border-blue-500 italic text-gray-700 mb-6 leading-relaxed">
  <span className="absolute left-2 top-0 text-4xl text-blue-300 leading-none">“</span>
  <p className="relative z-10 inline">
    From soul to systems, I help leaders become aligned voices — rooted, resonant, and ready.
    <span className="text-4xl text-blue-300 align-text-top">”</span>
  </p>
  <footer className="mt-2 text-sm font-semibold text-gray-800">
    – <span className="italic">Brenda N. Keya</span>
  </footer>
</blockquote>





          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
  {/* YouTube Button */}
  <a
    href="#"
    className="inline-flex items-center gap-2 px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-full shadow-lg transition-all duration-200"
  >
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M10 15l6-3-6-3v6z" />
      <path d="M24 0v24H0V0h24z" fill="none" />
    </svg>
    <span className="font-semibold">Watch on YouTube</span>
  </a>

  {/* Spotify Button */}
  
</div>

        </div>

        {/* Right Column: Video Preview */}
        <div
          className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-transform duration-500 cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/video.mp4"
            poster="/2.jpg"
            className="w-full h-auto object-cover rounded-3xl"
            controls={isPlaying}
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition duration-300">
              <div className="animate-ping absolute w-24 h-24 rounded-full bg-white/40"></div>
              <svg
                className="w-20 h-20 text-white z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}

          <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-md">
            Brenda Keya
          </div>
        </div>
      </div>
    </section>
  );
}
