import React from "react";
import { Link } from "react-router-dom";
import chemxpic from "../assets/image/hero2.jpg";
import Wrapper from "./wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <section
        className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px] text-center lg:text-left  overflow-hidden"
        style={{
          backgroundImage: `url(${chemxpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Decorative Atom SVG */}
        <div className="absolute top-6 left-6 w-10 h-10 sm:w-14 sm:h-14 animate-pulse">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="50" cy="50" r="30" stroke="#ff9100" strokeWidth="4" />
            <circle cx="50" cy="20" r="5" fill="#FFC000" />
            <circle cx="80" cy="50" r="5" fill="#FFC000" />
            <circle cx="50" cy="80" r="5" fill="#FFC000" />
            <circle cx="20" cy="50" r="5" fill="#FFC000" />
          </svg>
        </div>

        {/* Decorative Molecule */}
        <div className="absolute bottom-6 right-6 w-10 h-10 sm:w-14 sm:h-14 animate-bounce">
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

        {/* Banner Content */}
        <div className="container relative z-10 px-6 mx-auto lg:px-12 flex flex-col items-center justify-center h-full lg:items-start">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-white max-w-xl mx-auto lg:mx-0 drop-shadow-lg">
            ChemXpert
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-tight text-white max-w-xl mx-auto lg:mx-0 drop-shadow-lg py-4">
            Empowering Scientific Discovery
          </h2>

          {/* CTA Button */}
          <Link
            to="/application"
            className="mt-6 inline-block px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase text-[#153D63] bg-[#FFC000] hover:bg-yellow-400 transition duration-300 shadow"
          >
            Get Started
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;
