import Image from "next/image";
import { Anchor, Mic2, Zap, Heart, Calendar } from "lucide-react";

export default function ClarityBlueprint() {
  return (
    <div className="bg-[#0f1a2c] text-white">

      {/* HERO SECTION */}
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
            <hr className="border-t-2 border-[#d4a34a] my-4 mx-auto w-1/3" />
          </h1>
          <p className="text-xl md:text-2xl italic mb-4">Lead with Clarity. Thrive with Grace.</p>
          <hr className="border-t-2 border-[#d4a34a] my-4 mx-auto w-1/3" />
          <button className="bg-[#d4a34a] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg shadow-[#d4a34a]/20">
            Download the Blueprint
          </button>
        </div>

        {/* GOLD WAVE DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1440 320" className="relative block w-full h-[120px]" preserveAspectRatio="none">
            <defs>
              <clipPath id="clipAbove">
                <rect x="0" y="0" width="1440" height="320" />
                <path d="M0,160C120,192,240,224,360,224C480,224,600,192,720,176C840,160,960,160,1080,176C1200,192,1320,224,1440,224L1440,0L0,0Z" />
              </clipPath>
              <filter id="goldGlow" x="-20%" y="-100%" width="140%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
              </filter>
            </defs>
            <path d="M0,160C120,192,240,224,360,224C480,224,600,192,720,176C840,160,960,160,1080,176C1200,192,1320,224,1440,224L1440,320L0,320Z" fill="#16243a" />
            <g clipPath="url(#clipAbove)">
              <path d="M0,160C120,192,240,224,360,224C480,224,600,192,720,176C840,160,960,160,1080,176C1200,192,1320,224,1440,224" fill="none" stroke="#d4a34a" strokeWidth="10" opacity="0.4" filter="url(#goldGlow)" />
            </g>
            <path d="M0,160C120,192,240,224,360,224C480,224,600,192,720,176C840,160,960,160,1080,176C1200,192,1320,224,1440,224" fill="none" stroke="#f6e0b5" strokeWidth="1.5" opacity="0.9" />
          </svg>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="py-24 px-6 text-center bg-[#16243a] relative shadow-[inset_0_20px_40px_rgba(0,0,0,0.3)]">
        <h2 className="text-4xl md:text-5xl font-serif italic leading-relaxed max-w-4xl mx-auto">
          You do not need to be louder. <br />
          <span className="text-[#d4a34a]">You need to be aligned.</span>
        </h2>
      </section>

      {/* BENEFITS - Glass Cards applied here too */}
      <section className="py-20 px-6 bg-[#0f1a2c] text-center">
        <h3 className="text-3xl font-serif mb-12">With This Blueprint You Will</h3>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {[
            "Reconnect with your core values",
            "Define your authentic expression",
            "Strengthen your presence",
            "Lead with structured grace",
            "Build daily alignment discipline",
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-lg hover:border-[#d4a34a]/40 transition-colors duration-500">
              <p className="text-sm opacity-90 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-[#d4a34a] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#f6e0b5] transition-colors">
          Get Instant Access
        </button>
      </section>

      {/* SNEAK PEEK - Glassmorphism Version */}
      <section className="py-24 px-6 bg-[#16243a] text-center relative">
        <h3 className="text-3xl font-serif mb-12 relative z-10">A Sneak Peek Inside...</h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto relative z-10">
          {[
            { title: "Step One", desc: "Reconnect With Your Values", icon: <Anchor className="w-8 h-8 mx-auto mb-4 text-[#d4a34a]" /> },
            { title: "Step Two", desc: "Define Your Expression", icon: <Mic2 className="w-8 h-8 mx-auto mb-4 text-[#d4a34a]" /> },
            { title: "Step Three", desc: "Activate Your Presence", icon: <Zap className="w-8 h-8 mx-auto mb-4 text-[#d4a34a]" /> },
            { title: "Step Four", desc: "The Grace Practice", icon: <Heart className="w-8 h-8 mx-auto mb-4 text-[#d4a34a]" /> },
            { title: "Step Five", desc: "The Daily Presence Planner", icon: <Calendar className="w-8 h-8 mx-auto mb-4 text-[#d4a34a]" /> },
          ].map((step, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-3 
                         bg-white/[0.04] backdrop-blur-md border border-white/[0.1] 
                         hover:bg-[#1e2d4d] hover:border-[#d4a34a]/60 shadow-2xl"
            >
              <div className="group-hover:drop-shadow-[0_0_8px_rgba(212,163,74,0.5)] transition-all">
                {step.icon}
              </div>
              
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4a34a] mb-3 font-bold">
                {step.title}
              </p>
              <h4 className="font-serif text-lg leading-snug">{step.desc}</h4>
            </div>
          ))}
        </div>

        <button className="mt-16 bg-[#d4a34a] text-[#0f1a2c] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#f6e0b5] hover:scale-105 transition-all shadow-xl">
          Unlock the Full Blueprint
        </button>
      </section>

      {/* ABOUT THE AUTHOR */}
      <section className="py-24 px-6 bg-[#0f1a2c] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/brendapp2.jpeg"
              alt="Brenda N. Keya"
              className="rounded-2xl shadow-2xl border border-white/5"
              width={600}
              height={400}
            />
          </div>

          <div>
            <p className="uppercase tracking-widest text-[#d4a34a] mb-4 text-sm font-semibold">
              About The Author
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
              Brenda N. Keya
            </h2>
            <p className="italic mb-6 text-lg text-[#f6e0b5]">
              Alignment & Expression Strategist <br />
              Founder, The Aligned Voice Africa
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              Brenda N. Keya is an Alignment & Expression Strategist working at the intersection of personal clarity and leadership presence.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              With a background in psychology, diplomacy, and sustainability, she helps individuals and leaders align their internal conviction with their external communication.
            </p>

            <div className="mt-8 border-l-4 border-[#d4a34a] pl-6 italic text-xl leading-relaxed bg-white/[0.02] py-4 pr-4">
              <p>Your voice is not something to find.</p>
              <p>It is something to remember.</p>
              <p className="mt-2 text-[#d4a34a]">And true power begins with alignment.</p>
            </div>

            <button className="mt-10 bg-[#d4a34a] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg">
              Download Your Blueprint Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}