// components/AboutSection.tsx
import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row">

      {/* Left Column: Image of Brenda */}
      <div className="relative w-full h-[60vh] lg:h-auto lg:min-h-full lg:w-1/2">
        <Image
          src="/4.jpg" // Path to your image of Brenda in the public folder
          alt="Brenda Keya"
          layout="fill"
          objectFit="cover"
          priority
          className="pointer-events-none select-none"
        />
      </div>

      {/* Right Column: Content with Pink Background */}
      {/* Changed background to brand-pink and text to white for contrast */}
      <div className="w-full lg:w-1/2 bg-brand-pink text-white flex flex-col justify-center p-8 md:p-12 lg:p-16">
        
        {/* "ALL ABOUT BRENDA" - mimicking the small, uppercase header */}
      

        {/* Main Headline/Statement */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          About
        </h2>

        {/* Detailed Description */}
        <p className="text-lg text-white text-justify">
       Brenda N. Keya is a  Presence & Expression Coach, Sustainability Branding Consultant and Diplomat shaping the intersection of personal clarity and planetary impact. She is the Founder of The Aligned Voice and Country Director for the Africa Young Diplomats Forum – Kenya.

Brenda brings together two worlds often seen as separate, inner mastery and global transformation. With a background in psychology, multilateral diplomacy, International Organizations, sustainability innovation, she empowers leaders to speak from soul, lead with clarity, and design systems that serve both people and planet.
</p>
<br />
 <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight '>Presence & Expression Work</h1>

 <p className='text-lg text-white text-justify'>
As a Voice Coach and Clarity Mentor, Brenda helps women reclaim their rhythm, values, and voice. Through her platform Command Your Space and her flagship guide The Clarity Blueprint, she offers powerful tools for self-mastery, intentional communication, and embodied leadership.
She believes voice isn’t something to find but something to remember. And presence is not volume, but alignment.



        </p>

        {/* Call to Action Button - Adjusted colors for pink background */}
        <div className="mt-4">
          <a
            href="/about"
            className="inline-block bg-white text-brand-pink border-2 border-white
                       px-8 py-3 font-bold uppercase text-lg tracking-wider
                       hover:bg-blue-600 hover:text-white hover:border-brand-light-pink transition-colors duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}