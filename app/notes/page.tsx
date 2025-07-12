// app/notes/page.tsx
import Image from 'next/image'; // Make sure to import Image from next/image

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section with Title and Author */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center text-white text-center">
        {/* Background Image for the hero */}
        <Image
          src="/images/notes-hero.jpg" // Placeholder: Image of African landscape/industry/climate
          alt="Notes from the Field"
          fill
          sizes="100vw"
          className="object-cover brightness-50" // Darken image for text readability
        />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">Notes from the Field – Issue 01</h1>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">The Silent Gold in Africa’s Climate Economy</h2>
          <p className="text-lg md:text-xl font-medium">By Brenda Keya</p>
        </div>
      </section>

      {/* Article Content Section */}
      <article className="max-w-3xl mx-auto px-4 py-16 md:py-24">

        {/* Paragraph 1 */}
        <p className="mb-6 text-lg leading-relaxed">
          When I walk through the factory fields at East African Portland Cement, I wasn&apos;t just looking at a production plant, I see a canvas for a new kind of story. A story not of machines and dust, but of climate, carbon and possibility.
        </p>

        {/* Image 1 (Factory/Industrial) */}
        <div className="w-full h-80 relative my-10 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/cement-factory.jpg" // Placeholder: Image of cement factory/industrial site
            alt="East African Portland Cement Factory"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
            Observing the fields at East African Portland Cement.
          </figcaption>
        </div>

        {/* Paragraph 2 & 3 */}
        <p className="mb-6 text-lg leading-relaxed">
          In the silence of those kilns and the smell of raw material, I keep asking:
        </p>
        <p className="mb-6 text-xl font-semibold italic text-blue-700">
          What if this cement could tell a different story? One that heals the planet instead of just building it.
        </p>

        {/* Paragraph 4 */}
        <p className="mb-6 text-lg leading-relaxed">
          For months, I have been working with passionate teams; WakaGram researchers, field experts, WakaAfrica and bold thinkers, to draft a methodology for low-carbon cement, a product not just of calcium and clay, but of climate accountability.
        </p>

        {/* Image 2 (Biochar/Agriculture) */}
        <div className="w-full h-80 relative my-10 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/biochar-process.jpg" // Placeholder: Image of biochar or agricultural waste
            alt="Biochar production"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
            Transforming agricultural waste into valuable resources.
          </figcaption>
        </div>

        {/* Paragraph 5 & 6 */}
        <p className="mb-6 text-lg leading-relaxed">
          Then comes biochar, the hidden power in our agricultural waste. The kind of innovation you stumble upon and then wonder why the world hasn’t moved faster to adopt it.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          From coffee husks in Central, to sugarcane stalks in Nyanza, to avocado prunings in Tigoni, I begin to see a network of carbon wealth lying in our soil, our dust, our waste.
        </p>

        {/* Image 3 (Collaboration/Deal) */}
        <div className="w-full h-80 relative my-10 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/planet2050-deal.jpg" // Placeholder: Image of people collaborating, handshake, or environmental diagram
            alt="Planet2050 deal"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
            Forging new partnerships for a greener future.
          </figcaption>
        </div>

        {/* Paragraph 7 & 8 */}
        <p className="mb-6 text-lg leading-relaxed">
          This is where Planet2050 enters the scene.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          A deal on the table. An idea brewing:
        </p>
        <blockquote className="mb-6 px-4 py-3 bg-blue-50 border-l-4 border-blue-600 text-blue-800 italic">
          “Enrich cement with biochar. Cut emissions. Capture carbon. Turn cement into climate currency.”
        </blockquote>

        {/* Bulleted List */}
        <p className="mb-4 text-lg font-semibold">Suddenly, the dots begin to connect:</p>
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
          <li className="mb-2">Cement + Biochar = Triple the carbon offset</li>
          <li className="mb-2">Communities benefit. Companies profit. The planet breathes easier.</li>
        </ul>

        {/* Paragraph 9 & 10 */}
        <p className="mb-6 text-lg leading-relaxed">
          But here’s the hard truth:
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Many African institutions are not ready for the innovation they desperately need. The red tape is real. The slowness can kill dreams. And yet…
        </p>
        <p className="mb-6 text-lg leading-relaxed font-bold">
          We pivot.
        </p>
        <p className="mb-6 text-lg leading-relaxed font-bold">
          We partner better.
        </p>
        <p className="mb-6 text-lg leading-relaxed font-bold">
          We structure smarter deals.
        </p>
        <p className="mb-6 text-lg leading-relaxed font-bold">
          And we keep moving forward.
        </p>

        {/* Paragraph 11 */}
        <p className="mb-8 text-lg leading-relaxed">
          So I write this dispatch not just as a report — but as a declaration:
        </p>

        {/* Green Checkmark List */}
        <ul className="mb-10 text-lg leading-relaxed">
          <li className="flex items-center mb-3">
            <span className="inline-block w-6 h-6 mr-3 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</span>
            Africa has what the world needs: land, biomass, brilliance.
          </li>
          <li className="flex items-center mb-3">
            <span className="inline-block w-6 h-6 mr-3 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</span>
            Climate deals are not a favor — they are investments with returns.
          </li>
          <li className="flex items-center mb-3">
            <span className="inline-block w-6 h-6 mr-3 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</span>
            I am not just a strategist or consultant. I am an architect of sustainable value chains and a broker of regenerative opportunities.
          </li>
        </ul>

        {/* Call to Action */}
        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            If you&apos;re a developer, investor, or visionary looking to build bold things in Africa&apos;s green space — let&apos;s talk.
          </p>
          <p className="text-lg text-gray-600">
            You’ll be reading more of these Dispatches soon.
          </p>
        </div>

      </article>
    </div>
  );
}