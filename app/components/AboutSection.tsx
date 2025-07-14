"use client";

import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="aboutme" className="relative w-full flex flex-col lg:flex-row">
      {/* Left: Image */}
      <div className="relative w-full h-[60vh] lg:h-auto lg:min-h-full lg:w-1/2">
        <Image
          src="/4.jpg"
          alt="Brenda Keya"
          layout="fill"
          objectFit="cover"
          priority
          className="pointer-events-none select-none"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100 text-gray-900 flex flex-col justify-center p-8 md:p-12 lg:p-16">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
          About
        </h2>

        {/* Paragraph */}
        <p className="text-lg leading-relaxed text-justify mb-6">
          <strong>Brenda N. Keya</strong> is a Presence & Expression Coach,
          Sustainability Branding Consultant, and Diplomat shaping the
          intersection of personal clarity and planetary impact. She is the
          Founder of <em>The Aligned Voice</em> and Country Director for the
          Africa Young Diplomats Forum – Kenya.
          <br />
          <br />
          Brenda bridges two worlds often seen as separate — inner mastery and
          global transformation. With a background in psychology, diplomacy,
          international organizations, and sustainability innovation, she
          empowers leaders to speak from soul, lead with clarity, and design
          systems that serve both people and planet.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Presence & Expression Work
        </h3>

        <p className="text-lg leading-relaxed text-justify mb-6">
          As a Voice Coach and Clarity Mentor, Brenda helps women reclaim their
          rhythm, values, and voice. Through her platform{" "}
          <strong>Command Your Space</strong> and her flagship guide{" "}
          <strong>The Clarity Blueprint</strong>, she offers powerful tools for
          self-mastery, intentional communication, and embodied leadership.
          <br />
          <br />
          She believes voice isn’t something to find — but something to
          remember. And presence is not volume, but alignment.
        </p>

        {/* Call to Action */}
        <div>
          <a
            href="/about"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
