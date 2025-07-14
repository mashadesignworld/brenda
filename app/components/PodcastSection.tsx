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
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-6">
            "From soul to systems, I help leaders become aligned voices —
            rooted, resonant, and ready."
            <footer className="mt-2 text-sm font-semibold text-gray-800">
              – Brenda N. Keya
            </footer>
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap mt-6 justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 15l6-3-6-3v6z" />
                <path d="M24 0v24H0V0h24z" fill="none" />
              </svg>
              Watch on YouTube
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.82 12.29c-1.42-1.37-2.37-2.52-2.73-3.08-.15-.23-.24-.43-.27-.61-.06-.29.04-.55.3-.78.28-.25.57-.28.9-.09.12.07.3.22.54.47.26.26.67.68 1.2 1.22l1.3 1.3-1.24 1.24zm-.88 5.54c-.34.2-.66.29-.96.25-.28-.03-.48-.13-.62-.3-.17-.2-.34-.49-.51-.87-.22-.46-.58-1.14-1.09-2.04-.55-.97-.97-1.63-1.24-1.98-.29-.39-.45-.7-.48-.94-.02-.24.03-.45.16-.62.14-.18.37-.28.7-.29.21 0 .44.08.67.24.29.21.66.55 1.1 1.02.46.5 1.04 1.19 1.74 2.08.68.86 1.13 1.55 1.34 2.04.21.48.16.86-.09 1.14zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              Listen on Spotify
            </a>
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
