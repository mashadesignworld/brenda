"use client";

import React from "react";

export default function Hero() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const nameInput = form.elements.namedItem("name") as HTMLInputElement | null;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
    const whatsappInput = form.elements.namedItem("whatsapp") as HTMLInputElement | null;

    if (!nameInput || !emailInput || !whatsappInput) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      whatsapp: whatsappInput.value.trim(),
    };

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("🎉 Thank you! Please check your email for payment instructions.");
        form.reset();
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("❌ Something went wrong. Please try again later.");
    }
  }

  return (
    <section className="relative w-full overflow-hidden min-h-screen pt-28 md:pt-32 lg:pt-36">
      {/* Background Video */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 via-pink-700/50 to-emerald-600/40 z-10" />
      </div>

      <div className="relative z-20 flex flex-col lg:flex-row items-start justify-center max-w-7xl mx-auto px-6 text-left gap-8 lg:gap-16 pb-12">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left">
          <h1 className="text-white text-1xl md:text-2xl lg:text-2xl font-light leading-tight mb-2">
            | The Aligned Voice |
          </h1>
          <h2 className="text-white text-5xl md:text-7xl lg:text-6xl font-extrabold leading-tight mb-6">
            Presence, Diplomacy, Sustainability.
          </h2>
          <p className="text-white text-3xl md:text-4xl lg:text-5xl font-light mb-10">
            From soul to systems
          </p>
          <a
            href="#purpose"
            className="inline-block bg-pink-600 text-black px-10 py-4 text-xl font-bold uppercase tracking-wider rounded-md shadow-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Start here
          </a>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-1/2 bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl text-gray-900 flex flex-col items-center text-center self-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Download <span className="text-blue-600">The Clarity Blueprint</span>
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-700">
            A practical guide by Brenda Keya | The Aligned Voice to help you get clear, aligned, and take confident action. 
            Launch price: <strong>Ksh 1,000</strong> (≈ $7 USD).
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            <input
              name="name"
              type="text"
              placeholder="Your Full Name"
              required
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email Address"
              required
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              name="whatsapp"
              type="tel"
              placeholder="WhatsApp Number (Optional for Discovery Call)"
              className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-md font-bold uppercase text-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Buy & Download Now
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4">
            Once you submit your info and payment, you’ll receive an instant download of <strong>The Clarity Blueprint</strong> PDF, and we’ll reach out via WhatsApp if you opt in for the discovery call.
            You agree to our <a href="#" className="underline hover:text-blue-600">Terms of Use</a> and <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
