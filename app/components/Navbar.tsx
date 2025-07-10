"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if window.scrollY is greater than 50px (or adjust as needed)
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg" // Semi-transparent white with blur and shadow on scroll
          : "bg-white/60" // Fully transparent initially
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Adjust width/height as needed for your logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png" // Ensure this path is correct relative to your public folder
            alt="Brenda Keya"
            width={140} // Adjust as needed
            height={100} // Adjust as needed
            priority
            // REMOVE THE FILTER CLASS IF YOUR LOGO IS ALREADY THE CORRECT COLOR
            // OR adjust conditionally based on your logo's final colors and desired effect
            // If your SVG already has colors, you likely won't need 'filter brightness-0 invert'
            className={scrolled ? "" : ""} // If your SVG has fixed colors, or you handle color change differently
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a
              href="#about"
              className={`nav-link-underline-effect text-lg font-medium ${
                scrolled ? "text-gray-800" : "text-black"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#start-here"
              className={`nav-link-underline-effect text-lg font-medium ${
                scrolled ? "text-gray-800" : "text-black"
              }`}
            >
              Start Here
            </a>
          </li>
          <li>
            <a
              href="#podcast"
              className={`nav-link-underline-effect text-lg font-medium ${
                scrolled ? "text-gray-800" : "text-black"
              }`}
            >
              Podcast
            </a>
          </li>
          <li>
            <a
              href="#live-event"
              className={`nav-link-underline-effect text-lg font-medium ${
                scrolled ? "text-gray-800" : "text-black"
              }`}
            >
              Live Event
            </a>
          </li>
          {/* Example of dropdown for "Courses & Coaching" - simplified for now */}
          <li>
            <a
              href="#courses-coaching"
              className={`nav-link-underline-effect text-lg font-medium ${
                scrolled ? "text-gray-800" : "black"
              }`}
            >
              Courses & Coaching
            </a>
          </li>
          <li>
            <a
              href="#book-me"
              className={`px-5 py-2 border-2 rounded-full text-lg font-semibold transition ${
                scrolled
                  ? "border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
                  : "border-white text-black hover:bg-white hover:text-gray-800"
              }`}
            >
              Book Me
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className={`focus:outline-none text-2xl ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Links */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 pb-4 space-y-4 shadow-inner transition-colors duration-300 ${
            scrolled ? "bg-white/90" : "bg-gray-800/90" // Slightly different background for mobile menu
          }`}
        >
          <a
            href="#about"
            onClick={toggleMenu}
            className={`mobile-nav-link-hover-color block text-lg py-2 transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            About
          </a>
          <a
            href="#start-here"
            onClick={toggleMenu}
            className={`mobile-nav-link-hover-color block text-lg py-2 transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Start Here
          </a>
          <a
            href="#podcast"
            onClick={toggleMenu}
            className={`mobile-nav-link-hover-color block text-lg py-2 transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Podcast
          </a>
          <a
            href="#live-event"
            onClick={toggleMenu}
            className={`mobile-nav-link-hover-color block text-lg py-2 transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Live Event
          </a>
          <a
            href="#courses-coaching"
            onClick={toggleMenu}
            className={`mobile-nav-link-hover-color block text-lg py-2 transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Courses & Coaching
          </a>
          <a
            href="#book-me"
            onClick={toggleMenu}
            className={`block px-5 py-2 border-2 rounded-full text-lg font-semibold text-center transition ${
              scrolled
                ? "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                : "border-white text-white hover:bg-white hover:text-gray-800"
            }`}
          >
            Book Me
          </a>
        </div>
      )}
    </nav>
  );
}