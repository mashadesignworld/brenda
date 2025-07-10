import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#FFF8F9] text-[#2B2D42] px-6 py-20 md:py-32 font-sans space-y-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#C08497]">
          Brenda Keya | The Aligned Voice
        </h1>
        <p className="text-xl text-center text-[#7D8BA0] max-w-2xl mx-auto">
          Presence. Diplomacy. Sustainability. From soul to systems.
        </p>
      </div>

      {/* Section 1 */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="w-full h-[250px] md:h-[300px] overflow-hidden rounded-lg shadow-md">
          <Image
            src="/1.jpg"
            alt="Brenda Speaking"
            className="w-full h-full object-cover object-top"
            width={600}
            height={400}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/1.jpg"
          />
        </div>

        {/* Text Right */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong>Brenda N. Keya</strong> is a Presence & Expression Coach, Sustainability Branding Consultant,
            and Diplomat shaping the intersection of personal clarity and planetary impact. She is the Founder of
            <em> The Aligned Voice</em> and Country Director for the Africa Young Diplomats Forum – Kenya.
          </p>
          <p>
            Brenda brings together two worlds often seen as separate — inner mastery and global transformation. With a
            background in psychology, diplomacy, and sustainability innovation, she helps leaders speak from soul, lead
            with clarity, and design systems that serve people and planet.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div className="order-2 md:order-1 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-[#C08497]">🎤 Presence & Expression Work</h2>
          <p>
            As a Voice Coach and Clarity Mentor, Brenda helps women reclaim their rhythm, values, and voice. Through her
            platform <strong>Command Your Space</strong> and guide <strong>The Clarity Blueprint</strong>, she offers
            powerful tools for self-mastery, intentional communication, and embodied leadership.
          </p>
          <p>
            She believes voice isn’t something to find but something to remember. And presence is not volume, but
            alignment.
          </p>
        </div>

        {/* Image Right */}
        <div className="order-1 md:order-2 w-full h-[250px] md:h-[300px] overflow-hidden rounded-lg shadow-md">
          <Image
            src="/2.jpg"
            alt="Coaching Work"
            className="w-full h-full object-cover object-top"
            width={600}
            height={400}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/2.jpg"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="w-full h-[250px] md:h-[300px] overflow-hidden rounded-lg shadow-md">
          <Image
            src="/3.jpg"
            alt="Diplomacy Work"
            className="w-full h-full object-cover object-top"
            width={600}
            height={400}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/3.jpg"
          />
        </div>

        {/* Text Right */}
        <div className="space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-[#94B0DA]">🌍 Diplomacy & Sustainability Work</h2>
          <p>
            Brenda is an Executive Masters graduate in Multilateral Diplomacy & International Organizations (ASDIR Abuja),
            with a career spanning:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Carbon credit markets (Waka Gram, Carbon Forward Program)</li>
            <li>Green value chains and low-carbon cement (Green Build Think-Tank)</li>
            <li>Climate finance advocacy (Article 6, AfCFTA, biodiversity networks)</li>
            <li>Policy harmonization across the Pan-African Green Industrialization agenda</li>
          </ul>
          <p>
            She collaborates with UNEP, UNFCCC, and the UN Science-Policy-Business Forum, contributing to ESG alignment,
            climate diplomacy, and nature-based policies.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div className="order-2 md:order-1 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-[#C08497]">📣 Platforms & Impact</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>YouTube Channel:</strong> <em>Presence & Power Africa</em> – Clarity tools, voice coaching, and
              sustainability insights
            </li>
            <li>
              <strong>The Aligned Voice:</strong> Her personal brand uniting consulting and soul-led coaching
            </li>
            <li>
              <strong>Notes from the Field:</strong> Writings on sustainability in the built environment
            </li>
            <li>
              <strong>Command Your Space:</strong> Coaching platform for voice and graceful power
            </li>
          </ul>
          <p className="italic text-[#7D8BA0]">
            Brenda is a believer in quiet power, sacred clarity, and systems that center both the inner compass and the
            outer mandate.
          </p>
        </div>

        {/* Image Right */}
        <div className="order-1 md:order-2 w-full h-[250px] md:h-[300px] overflow-hidden rounded-lg shadow-md">
          <Image
            src="/4.jpg"
            alt="Brenda Coaching"
            className="w-full h-full object-cover object-top"
            width={600}
            height={400}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/4.jpg"
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-4xl mx-auto text-center mt-20">
        <blockquote className="text-2xl font-medium text-[#2B2D42] border-l-4 border-[#94B0DA] pl-4 italic">
          “From soul to systems, I help leaders become aligned voices — rooted, resonant, and ready.”
        </blockquote>
        <p className="mt-4 text-[#7D8BA0]">~ Brenda N. Keya</p>
      </section>
    </div>
  );
}
