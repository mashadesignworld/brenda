// components/PublicationsSection.tsx
import React from 'react';
import Image from 'next/image'; // Make sure to import Image from next/image

export default function PublicationsSection() {
  // Sample data for your publications
  // You would typically fetch this data from an API or CMS
  const publications = [
    {
      id: 1,
      type: "Book",
      title: "CEMENT CARBON CREDITS",
      author: "BY BRENDA",
      year: "2025",
      description: "The cement industry accounts for approximately 8% of global CO2 emissions, making it a critical focus for decarbonization under the Paris Climate Agreement’s net-zero target by 2050",
      link: "#", // Replace with actual book link
      coverImage: "/images/book-cover.jpg", // Placeholder: Add your image in /public/images
      buttonText: "READ MORE"
    },
    {
      id: 2,
      type: "Podcast",
      title: "GREEN STRATEGY PROPOSAL",
      author: "BY BRENDA",
      year: "2025",
      description: "Informed by current market dynamics and recent industry events, this proposal details a strategy for a company to achieve leadership in sustainable practices. ",
      link: "#", // Replace with actual podcast link
      coverImage: "/images/book-cover1.jpg", // Placeholder: Add your image in /public/images
      buttonText: "LISTEN NOW"
    },
    {
      id: 3,
      type: "Article",
      title: "WAKA GRAM PORTFOLIO",
      author: "BY BRENDA",
      year: "2025",
      description: "Our Carbon Forward program aligns corporate sustainability goals with measurable environmental and social outcomes",
      link: "https://gram.wakaafrica.org/", // Replace with actual article link
      coverImage: "/images/book-cover2.jpg", // Placeholder: Add your image in /public/images
      buttonText: "READ MORE"
    },
    // Add more publication objects as needed
  ];

  return (
    <section id="publications" className="py-16 md:py-24 bg-white"> {/* White background and vertical padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">My Publications</h2>
          <p className="mt-4 text-xl lg:text-2xl text-gray-600">
            A selection of my published works and articles.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden
                         transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Publication Image/Cover */}
              <div className="relative w-full h-56 md:h-64 lg:h-72"> {/* Fixed height for cover image */}
                <Image
                  src={pub.coverImage}
                  alt={pub.title}
                  fill // Image fills the parent div
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
                  className="object-cover" // Ensures image covers the area, possibly cropping
                />
              </div>

              {/* Publication Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {pub.title.toUpperCase()} {/* Text to uppercase as in screenshot */}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {pub.author.toUpperCase()} | {pub.year} {/* Text to uppercase */}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {pub.description}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg
                             uppercase tracking-wide transition-colors duration-200 text-sm"
                >
                  {pub.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}