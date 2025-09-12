import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const pesticides = [
  { name: "Single residue applications", link: "/pesticide/single" },
  { name: "Multi residue applications", link: "/pesticide/multi" },
];

const Pesticide = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-24 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/molecule-pattern.svg')] bg-repeat" />

        {/* Back Navigation */}
        <div className="relative flex items-center justify-start mb-6 sm:mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/application"
            className="flex items-center gap-2 hover:text-white text-[#FFC000] transition text-sm sm:text-base"
          >
            <ArrowLeft size={8} className="sm:size-14" />back to applications
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-8 sm:mb-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Pesticide Residue Analysis
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-50 max-w-2xl mx-auto leading-relaxed">
            High-precision techniques for detecting and quantifying pesticide 
            residues in food and agricultural products. Our methods ensure 
            accuracy, reliability, and compliance with global standards.
          </p>
        </div>

        {/* Pesticide Options */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
          {pesticides.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-neutral-900 border border-neutral-800 hover:border-[#FFC000] rounded-xl p-4 sm:p-6 text-center text-white hover:shadow-lg hover:shadow-[#ffc00033] transition"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Pesticide;
