import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import chemxpic from "../assets/image/hero2.jpg";

// Rotating inspirational quotes
const rotatingQuotes = [
  "Accurate science. Reliable results. Trusted Chemxpert.",
  "Turning complex chemistry into clear solutions.",
  "Where precision meets innovation in every analysis.",
  "Your partner in trusted analytical excellence.",
  "From samples to certainty — Chemxpert delivers.",
  "Empowering industries through accurate chemistry insights.",
  "Data you can trust, results you can act on.",
  "Chemxpert: advancing science, safeguarding lives."
];


const Hero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full pt-20 pb-16 text-center sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-40 lg:text-left rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${chemxpic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Atom SVG */}
      <div className="absolute top-10 left-8 animate-float-slow w-12 h-12 sm:w-16 sm:h-16">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="50" cy="50" r="30" stroke="#ff9100" strokeWidth="4" />
          <circle cx="50" cy="20" r="5" fill="#FFC000" />
          <circle cx="80" cy="50" r="5" fill="#FFC000" />
          <circle cx="50" cy="80" r="5" fill="#FFC000" />
          <circle cx="20" cy="50" r="5" fill="#FFC000" />
        </svg>
      </div>

      {/* Decorative Molecule */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 animate-float-fast w-12 h-12 sm:w-16 sm:h-16">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="30" cy="30" r="8" fill="#ffffff" />
          <circle cx="70" cy="30" r="8" fill="#FFC000" />
          <circle cx="50" cy="70" r="8" fill="#ffffff" />
          <line
            x1="30"
            y1="30"
            x2="70"
            y2="30"
            stroke="#FFC000"
            strokeWidth="2"
          />
          <line
            x1="30"
            y1="30"
            x2="50"
            y2="70"
            stroke="#ffffff"
            strokeWidth="2"
          />
          <line
            x1="70"
            y1="30"
            x2="50"
            y2="70"
            stroke="#ffffff"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Floating Tags */}
      <Link
        to="/consulting"
        className="absolute top-6 right-4 text-xs sm:text-sm md:text-base font-semibold text-white animate-float-fast hover:underline"
      >
        CONSULTING
      </Link>
      <Link
        to="/training"
        className="absolute top-1/2 left-1/2 text-xs sm:text-sm md:text-base font-semibold text-white animate-float-slow transform -translate-x-1/2 -translate-y-1/2 hover:underline"
      >
        TRAINING
      </Link>
      <Link
        to="/research"
        className="absolute bottom-6 left-4 text-xs sm:text-sm md:text-base font-semibold text-white animate-float-fast hover:underline"
      >
        RESEARCH
      </Link>

      {/* Hero Content */}
      <div className="container relative z-10 px-6 mx-auto lg:px-12">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin leading-tight text-white max-w-3xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Scientific Discovery
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white lg:mx-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          ChemXpert delivers expert-led training, consulting, and research
          partnerships to advance chemical analysis in modern laboratories.
        </motion.p>

        {/* Rotating Quotes + CTA */} 
        <motion.div
          className="flex flex-col items-center justify-center gap-6 mt-10 lg:items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Rotating Quote */}
          <div className="p-4 bg-slate-700/40 backdrop-blur rounded-lg shadow text-[#FFC000] font-medium text-sm sm:text-base min-h-[60px] flex items-center justify-center animate-pulse max-w-xl text-center">
            <span className="transition-opacity duration-500 ease-in-out">
              {rotatingQuotes[quoteIndex]}
            </span>
          </div>

          {/* CTA Button (moved below) */}
          <Link
            to="/application"
            className="inline-block px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase text-[#153D63] bg-[#FFC000] hover:bg-yellow-400 transition duration-300 shadow"
          >
            Get Started
          </Link>
        </motion.div>

      </div>

      {/* Floating Decorative SVGs */}
      <motion.svg
        className="absolute w-10 h-10 sm:w-14 sm:h-14 text-yellow-400 opacity-50 top-10 left-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <circle cx="12" cy="12" r="10" />
      </motion.svg>

      <motion.svg
        className="absolute w-12 h-12 sm:w-20 sm:h-20 text-white opacity-40 bottom-12 right-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <rect x="4" y="4" width="16" height="16" rx="4" />
      </motion.svg>
    </section>
  );
};

export default Hero;
