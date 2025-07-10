"use client";

import { useState, useEffect, useRef } from "react";
import FolderCard from "./FolderCard";

export default function CourseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const folders = [
    {
      index: "01",
      title: "The Content Lab",
      description: "LEVEL UP YOUR CONTENT GAME",
      tabColor: "#F97316",
      textColor: "#F97316",
    },
    {
      index: "02",
      title: "The Pinterest Lab",
      description: "MAKE PINTEREST YOUR SECRET WEAPON",
      tabColor: "#6366F1",
      textColor: "#6366F1",
    },
    {
      index: "03",
      title: "The Email Lab",
      description: "BUILD YOUR EMAIL EMPIRE",
      tabColor: "#10B981",
      textColor: "#10B981",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const cards = Array.from(
        sectionRef.current.querySelectorAll(".folder-wrapper")
      );
      const scrollY = window.scrollY;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const offsetTop = card.offsetTop;
        const offsetBottom = offsetTop + card.offsetHeight;

        if (scrollY + 150 >= offsetTop && scrollY < offsetBottom) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f9fafb] py-32 px-4 md:px-12 min-h-[300vh]"
    >
      {/* Optional Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/bg-texture.png')] bg-cover bg-fixed opacity-10 z-0" />

      {/* Cards container */}
      <div className="relative z-10">
        {folders.map((folder, index) => (
          <div
            key={index}
            className={`folder-wrapper sticky top-20 w-full transition-transform duration-500 ${
              activeIndex === index ? "scale-105" : "scale-100"
            }`}
            style={{
              zIndex: 100 + index,
            }}
          >
            <div className="w-full max-w-4xl mx-auto">
              <FolderCard {...folder} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
