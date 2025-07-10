// components/PodcastSection.tsx
"use client"; // This directive is necessary for using React Hooks like useRef and useState

import React, { useRef, useState } from 'react';

export default function PodcastSection() {
  const videoRef = useRef<HTMLVideoElement>(null); // Ref to control the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to manage play/pause

  // Function to toggle video play/pause
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
    <section id="podcast" className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 text-gray-900 text-center lg:text-left lg:pr-16">
          {/* Small uppercase header, mimicking "TIME GENIUS" */}
          <p className="text-sm uppercase font-bold text-gray-600 mb-4 tracking-wider">
            The Brenda Keya Podcast
          </p>

          {/* Main Headline, adapted to Brenda's theme from "Take Back Your Time. Get Back Your Life." */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Unlock Your Potential. <br className="hidden md:inline"/> Live Your Purpose.
          </h2>

          {/* Description of the podcast */}
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
            Dive into insightful conversations with Brenda Keya as she shares transformative strategies for personal growth, career advancement in demanding industries like cement, and achieving a life of true fulfillment beyond financial success.
          </p>

          {/* Call to Action Button */}
          <div>
            <a
              href="#listen-podcast" // Link this to your actual podcast listening platform
              className="inline-flex items-center bg-blue-600 text-white
                         px-10 py-4 text-xl font-bold rounded-md shadow-lg
                         hover:bg-blue-700 transition-colors duration-300"
            >
              Listen Now
            </a>
          </div>
        </div>

        {/* Right Column: Video Player Container */}
        {/* Clicking anywhere on this div will toggle play/pause */}
        <div className="w-full lg:w-1/2 relative rounded-lg overflow-hidden shadow-xl group cursor-pointer" onClick={togglePlay}>
          <video
            ref={videoRef}
            src="/video.mp4" // Path to your video file in the public folder
            poster="/podcast.jpg" // This image will be shown when the video is not playing
            className="w-full h-auto object-cover rounded-lg"
            controls={isPlaying} // Show default video controls only when playing
            onEnded={() => setIsPlaying(false)} // Reset play state when video finishes
          >
            Your browser does not support the video tag.
          </video>

          {/* Custom Play Button Overlay (visible only when video is not playing) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
              {/* Play icon SVG */}
              <svg
                className="w-24 h-24 text-white hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}

          {/* "Brenda Keya" Branding Overlay (top-right, similar to "time genius") */}
          <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
            Brenda Keya
          </div>
        </div>
      </div>
    </section>
  );
}
