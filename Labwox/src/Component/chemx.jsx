import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper";
import { ChevronDown } from "lucide-react";

const rotatingQuotes = [
  "Science is the poetry of reality.",
  "Great research begins with great curiosity.",
  "In labs, we build tomorrow’s breakthroughs today.",
  "Precision and passion ignite discovery."
];

const ChemxHero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <section className="relative w-full pt-16 pb-10 text-center lg:pt-24 lg:pb-32 lg:text-left bg-black overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Floating animated SVGs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Atom */}
          <div className="absolute top-10 left-8 animate-float-slow">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="30" stroke="#FFC000" strokeWidth="4" />
              <circle cx="50" cy="20" r="5" fill="#FFC000" />
              <circle cx="80" cy="50" r="5" fill="#FFC000" />
              <circle cx="50" cy="80" r="5" fill="#FFC000" />
              <circle cx="20" cy="50" r="5" fill="#FFC000" />
            </svg>
          </div>

          {/* Molecule */}
          <div className="absolute bottom-10 right-10 animate-float-fast">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
              <circle cx="30" cy="30" r="8" fill="#ffffff" />
              <circle cx="70" cy="30" r="8" fill="#FFC000" />
              <circle cx="50" cy="70" r="8" fill="#ffffff" />
              <line x1="30" y1="30" x2="70" y2="30" stroke="#FFC000" strokeWidth="2" />
              <line x1="30" y1="30" x2="50" y2="70" stroke="#ffffff" strokeWidth="2" />
              <line x1="70" y1="30" x2="50" y2="70" stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>

          {/* Floating service texts */}
          <p className="absolute top-8 right-6 text-white text-xs sm:text-sm font-semibold animate-float-fast">
            CONSULTING
          </p>
          <p className="absolute top-1/2 left-1/2 text-white text-xs sm:text-sm font-semibold animate-float-slow transform -translate-x-1/2 -translate-y-1/2">
            TRAINING
          </p>
          <p className="absolute bottom-6 left-4 text-white text-xs sm:text-sm font-semibold animate-float-fast">
            RESEARCH
          </p>

          {/* Dot animation - simple bonding look */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-ping" />
          <div className="absolute top-1/4 left-[36%] w-3 h-3 bg-[#FFC000] rounded-full animate-pulse" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-10 items-center px-4 sm:px-8 xl:pr-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-bold text-white text-4xl md:text-5xl xl:text-6xl leading-tight drop-shadow-xl">
              Empowering Scientific Discovery
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-200 leading-relaxed">
              ChemXpert delivers expert-led training, consulting, and research partnerships to
              advance chemical analysis in modern laboratories.
            </p>
            <div className="mt-6 p-4 bg-white/10 backdrop-blur rounded-lg shadow text-[#FFC000] font-medium text-sm sm:text-base min-h-[60px] flex items-center justify-center">
              <span className="transition-opacity duration-500 ease-in-out">
                {rotatingQuotes[quoteIndex]}
              </span>
            </div>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-block px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase text-[#153D63] bg-[#FFC000] hover:bg-yellow-400 transition duration-300 shadow"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        
      </section>
    </Wrapper>
  );
};

export default ChemxHero;
