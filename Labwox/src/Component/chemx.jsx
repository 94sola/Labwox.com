import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa"; // <-- Chevron icon
import chemxpic from "../assets/image/hero2.jpg";

const Chemxpert = () => {
  return (
    <section className="relative w-full">
      {/* === Background Image === */}
      <picture className="block">
        <source srcSet={chemxpic} media="(min-width: 520px)" />
        <img
          src={chemxpic}
          alt="Laboratory Hero Banner"
          className="w-full h-[500px] md:h-[600px] object-cover"
        />
      </picture>

      {/* === Floating White Content Box === */}
      <div className="absolute inset-0 flex items-end justify-start pb-12">
        <div className="container max-w-7xl mx-auto flex justify-start px-4 sm:px-6 lg:px-8">
          <div className="bg-white max-w-xl w-full rounded-md shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
            
            {/* === Green Heading Bar === */}
            <div className="bg-[#0B3D2E] py-2 px-10 sm:px-8">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold text-white leading-tight tracking-wide drop-shadow-md">
               Chemxpert
              </h1>
            </div>

            {/* === Text & Action Links === */}
            <div className="p-6 sm:p-8 text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Access free pilot testing, modern analytical tools, and joint research opportunities through Labwox’s network of laboratories.
              </p>

              {/* === Action Buttons === */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                
                {/* === Get Started Link with Chevron === */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm md:text-base font-medium tracking-wide text-[#0B3D2E] border border-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  
                  Get Started
                  <FaChevronRight className="text-[#0B3D2E] text-sm" />
                </Link>

                {/* === Second Link (e.g. Learn More) === */}
                <Link
                  to="/application"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm md:text-base font-medium tracking-wide text-[#0B3D2E] border border-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                >
                 View applications
                  <FaChevronRight className="text-current text-sm" />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Chemxpert;
