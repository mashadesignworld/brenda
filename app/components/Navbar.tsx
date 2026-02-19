"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BookMeModal from "./BookMeModal"; // ⬅️ Import the modal component

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false); // ⬅️ Modal state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/100 backdrop-blur-md shadow-lg"
            : "bg-white/100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Brenda Keya"
                width={140}
                height={100}
                priority
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#aboutme" className={`nav-link-underline-effect text-lg font-medium ${scrolled ? "text-gray-800" : "text-black"}`}>About</a></li>
           <Link 
    href="/clarity-blueprint" 
    className={`nav-link-underline-effect text-lg font-medium ${scrolled ? "text-gray-800" : "text-black"}`}
  >
    Clarity-BluePrint
  </Link>
            <li><a href="#podcast" className={`nav-link-underline-effect text-lg font-medium ${scrolled ? "text-gray-800" : "text-black"}`}>Podcast</a></li>
            <li><a href="#shows" className={`nav-link-underline-effect text-lg font-medium ${scrolled ? "text-gray-800" : "text-black"}`}>Shows</a></li>
            <li><a href="#publications" className={`nav-link-underline-effect text-lg font-medium ${scrolled ? "text-gray-800" : "text-black"}`}>Publications</a></li>
            <li>
              <button
                onClick={() => setShowBookModal(true)}
                className={`px-5 py-2 border-2 rounded-full text-lg font-semibold transition ${
                  scrolled
                    ? "border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
                    : "border-white text-black hover:bg-white hover:text-gray-800"
                }`}
              >
                Book Me
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              className={`focus:outline-none text-2xl ${scrolled ? "text-gray-800" : "text-white"}`}
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
              scrolled ? "bg-white/90" : "bg-gray-800/90"
            }`}
          >
            {["About", "Start Here", "Podcast", "Live Event", "Courses & Coaching"].map((text) => (
              <a
                key={text}
                href={`#${text.toLowerCase().replace(/ /g, "-")}`}
                onClick={toggleMenu}
                className={`mobile-nav-link-hover-color block text-lg py-2 transition ${scrolled ? "text-gray-800" : "text-white"}`}
              >
                {text}
              </a>
              
            ))}
            <button
              onClick={() => {
                toggleMenu();
                setShowBookModal(true);
              }}
              className={`block w-full px-5 py-2 border-2 rounded-full text-lg font-semibold text-center transition ${
                scrolled
                  ? "border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-gray-800"
              }`}
            >
              Book Me
            </button>
          </div>
        )}
      </nav>

      {/* Modal component */}
      {showBookModal && <BookMeModal onClose={() => setShowBookModal(false)} />}
    </>
  );
}
