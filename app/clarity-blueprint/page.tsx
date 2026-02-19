import Image from "next/image";

export default function ClarityBlueprint() {
  return (
  
    <div className="bg-[#0f1a2c] text-white">

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            THE CLARITY BLUEPRINT
          </h1>

          <p className="text-xl md:text-2xl italic mb-4">
            Lead with Clarity. Thrive with Grace.
          </p>

          <p className="mb-8 text-lg opacity-90">
            A 5-Step Framework to Align Your Voice, Strengthen Your Presence,
            and Command Your Space.
          </p>

          <button className="bg-[#d4a34a] text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition">
            Download the Blueprint
          </button>

          <p className="mt-4 underline cursor-pointer">
            Or Book a Clarity Session
          </p>
        </div>
        {/* ULTRA PREMIUM WAVE DIVIDER */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 320"
    className="relative block w-full h-[170px]"
    preserveAspectRatio="none"
  >
    <defs>
      {/* Deep Blue Body Gradient */}
      <linearGradient id="waveBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e3a5f" />
        <stop offset="100%" stopColor="#0f1a2c" />
      </linearGradient>

      {/* Clean Blur Filter (No offset, no shadow) */}
      <filter id="cleanGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* 1. THE GLOW AURA (Thick & Soft) */}
    <path
      d="M0,160C120,192,240,224,360,224C480,224,600,192,720,176C840,160,960,160,1080,176C1200,192,1320,224,1440,224"
      fill="none"
      stroke="#d4a34a"
      strokeWidth="12"
      opacity="0.3"
      filter="url(#cleanGlow)"
    />

    {/* 2. THE SHARP HIGHLIGHT (The bright "string" on top) */}
    <path
      d="M0,160C120,192,240,224,360,224C480,224,600,192,720,176C840,160,960,160,1080,176C1200,192,1320,224,1440,224"
      fill="none"
      stroke="#f6e0b5"
      strokeWidth="1.5"
      opacity="0.9"
    />

    {/* 3. THE WAVE BODY */}
    <path
      d="M0,160C120,192,240,224,360,224C480,224,600,192,720,176C840,160,960,160,1080,176C1200,192,1320,224,1440,224L1440,320L0,320Z"
      fill="url(#waveBody)"
    />
  </svg>
</div>
         </section>
               {/* STATEMENT */}
      <section className="py-20 px-6 text-center bg-[#16243a]">
        <h2 className="text-4xl md:text-5xl font-serif italic leading-relaxed">
          You do not need to be louder. <br />
          You need to be aligned.
        </h2>
      </section>
      {/* BENEFITS */}
      <section className="py-20 px-6 bg-[#0f1a2c] text-center">
        <h3 className="text-3xl font-serif mb-12">
          With This Blueprint You Will
        </h3>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {[
            "Reconnect with your core values",
            "Define your authentic expression",
            "Strengthen your presence",
            "Lead with structured grace",
            "Build daily alignment discipline",
          ].map((item, index) => (
            <div key={index} className="p-6 border border-[#d4a34a]/30 rounded-lg">
              <p>{item}</p>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-[#d4a34a] text-black px-8 py-4 rounded-lg font-semibold">
          Get Instant Access
        </button>
      </section>
      {/* SNEAK PEEK */}
      <section className="py-20 px-6 bg-[#16243a] text-center">
        <h3 className="text-3xl font-serif mb-12">
          A Sneak Peek Inside...
        </h3>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Step One", desc: "Reconnect With Your Values" },
            { title: "Step Two", desc: "Define Your Expression" },
            { title: "Step Three", desc: "Activate Your Presence" },
            { title: "Step Four", desc: "The Grace Practice" },
            { title: "Step Five", desc: "The Daily Presence Planner" },
          ].map((step, index) => (
            <div key={index} className="border border-[#d4a34a]/40 p-6 rounded-lg">
              <p className="text-sm uppercase text-[#d4a34a] mb-2">
                {step.title}
              </p>
              <h4 className="font-serif text-lg">{step.desc}</h4>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-[#d4a34a] text-black px-8 py-4 rounded-lg font-semibold">
          Unlock the Full Blueprint
        </button>
      </section>
     {/* ABOUT THE AUTHOR */}
<section className="py-24 px-6 bg-[#0f1a2c] text-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* Image */}
    <div>
      <Image
        src="/4.jpg"
        alt="Brenda N. Keya"
        className="rounded-2xl shadow-2xl"
        width={600}
        height={400}
      />
    </div>

    {/* Content */}
    <div>
      <p className="uppercase tracking-widest text-[#d4a34a] mb-4 text-sm">
        About The Author
      </p>

      <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
        Brenda N. Keya
      </h2>

      <p className="italic mb-6 text-lg">
        Alignment & Expression Strategist <br />
        Founder, The Aligned Voice Africa
      </p>

      <p className="mb-6 text-lg leading-relaxed text-gray-300">
        Brenda N. Keya is an Alignment & Expression Strategist working at the intersection of personal clarity and leadership presence.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-gray-300">
        With a background in psychology, diplomacy, and sustainability, she helps individuals and leaders align their internal conviction with their external communication — cultivating authority that is both grounded and intentional.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-gray-300">
        Through her signature framework, <span className="text-white font-medium">Command Your Space</span>, and her thought leadership platform, <span className="text-white font-medium">Presence & Power Africa</span>, Brenda equips emerging and established leaders to think clearly, speak intentionally, and lead from alignment instead of noise.
      </p>

      <div className="mt-8 border-l-4 border-[#d4a34a] pl-6 italic text-xl leading-relaxed">
        <p>Your voice is not something to find.</p>
        <p>It is something to remember.</p>
        <p className="mt-2">And true power begins with alignment.</p>
      </div>

      <button className="mt-10 bg-[#d4a34a] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
        Download Your Blueprint Now
      </button>
    </div>
  </div>
</section>


        </div>
  )}
