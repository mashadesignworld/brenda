// Hero.tsx
import React from "react";

export default function Hero() {
  return (
    // The main section.
    // `relative` for positioning inner elements.
    // `w-full` for full width.
    // `overflow-hidden` to prevent content spilling out.
    // `min-h-[calc(100vh-80px)]` makes sure it takes at least the screen height minus navbar.
    // `pt-20` pushes the entire section's content down, creating space for a fixed navbar.
    // (Adjust '80px' and 'pt-20' if your navbar has a different fixed height)
   <section className="relative w-full overflow-hidden min-h-screen pt-28 md:pt-32 lg:pt-36">
      {/* Background Video with Overlay */}
      {/* `absolute inset-0` ensures it covers the entire section, including the new `pt-20` space. */}
      <div className="absolute inset-0">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover z-0"
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay - Gradient from bottom-left to top-right */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-pink-700/50 to-emerald-600/40 z-10"></div>
      </div>

      {/* Hero Content */}
      {/* `relative z-20` ensures content is above background. */}
      {/* `flex flex-col lg:flex-row` for responsive column layout. */}
      {/* `items-start` aligns content of each column to the top. */}
      {/* `justify-center` keeps the content block centered horizontally within max-w-7xl. */}
      {/* `max-w-7xl mx-auto px-6` for content width and horizontal padding. */}
      {/* `gap-8 lg:gap-16` for spacing between columns. */}
      {/* No `h-full` here; content will naturally expand or be pushed by its own padding. */}
      <div className="relative z-20 flex flex-col lg:flex-row items-start justify-center max-w-7xl mx-auto px-6 text-left gap-8 lg:gap-16 pb-12">
        {/* Left Column: Existing Hero Text */}
        {/* `w-full lg:w-1/2` for responsive width. */}
        {/* `flex flex-col items-start justify-center` aligns text content within its column. */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left">
          {/* Main Headline */}
          {/* Responsive font sizes and line height. */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-6xl font-extrabold leading-tight mb-6">
            The Aligned Voice |
            <br /> {/* This line break will ALWAYS be present */}
            Presence,  Diplomacy,  Sustainability. 
          </h1>

          {/* Sub-headline */}
          {/* Responsive font sizes. */}
          <p className="text-white text-3xl md:text-4xl lg:text-5xl font-light mb-10">
            From soul to systems
          </p>

          {/* Call to Action Button */}
          <a
            href="#purpose" // Link to a relevant section or external page
            className="inline-block bg-pink-600 text-black px-10 py-4 text-xl font-bold uppercase tracking-wider rounded-md shadow-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Start here
          </a>
        </div>

        {/* Right Column: New Form Section */}
        {/* `w-full lg:w-1/2` for responsive width. */}
        {/* `bg-white/90 backdrop-blur-sm` for semi-transparent, frosted look. */}
        {/* `p-8 md:p-12` for internal padding. */}
        {/* `rounded-lg shadow-xl` for appearance. */}
        {/* `flex flex-col items-center text-center` for form content alignment. */}
        {/* `self-start` explicitly aligns this item to the top of the flex container. */}
        <div className="w-full lg:w-1/2 bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl text-gray-900 flex flex-col items-center text-center self-start">
          {/* Form Headline */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Learn How to <span className="text-blue-600">Get Anything You Want</span>
          </h2>

          {/* Form Sub-headline */}
          <p className="text-md md:text-lg mb-6 text-gray-700">
            Listen to this FREE audio from Brenda Keya and learn the 3 steps that will change your life, fast.
          </p>

          {/* Form */}
          <form className="w-full">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-access-green text-white px-6 py-4 rounded-md font-bold uppercase text-lg shadow-md hover:bg-pink-600 transition-colors duration-300"
            >
              Get Instant Access
            </button>
          </form>

          {/* Disclaimer Text */}
          <p className="text-xs text-gray-600 mt-4">
            By entering your info, you will become an insider - with FREE access to exclusive insights, private Q&As, and inspiring episodes of Brenda's content, delivered with love to your inbox. (Unsubscribe anytime in a click). You also agree to our <a href="#" className="underline hover:text-blue-600">Terms of Use</a> and <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}