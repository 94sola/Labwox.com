import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import pesti from "../assets/image/pesticide.jpg";

const pesticides = [
  { name: "Single residue applications", link: "/pesticide/single" },
  { name: "Multi residue applications", link: "/pesticide/multi" },
];

const Pesticide = () => {
  return (
    <Wrapper>
      <section
        className="relative w-full py-24 sm:py-28 lg:py-36 overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${pesti})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        {/* Back Navigation */}
        <div className="relative flex items-center justify-start mb-6 sm:mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/application"
            className="flex items-center gap-2 text-[#FFC000] hover:text-white transition-colors text-sm sm:text-base font-medium"
          >
            <ArrowLeft size={18} className="sm:size-5" />
            Back to Applications
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-10 sm:mb-14 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Pesticide Residue Analysis
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Our advanced pesticide residue analysis delivers precise detection
            and quantification of chemical residues in food and agricultural
            products. We combine state-of-the-art technology with strict
            quality standards to ensure reliable results that support
            compliance, consumer safety, and environmental protection.
          </p>
        </div>

        {/* Pesticide Options */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 px-4 sm:px-6 lg:px-8">
          {pesticides.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 sm:p-7 text-center text-white hover:bg-[#FFC000]/20 hover:border-[#FFC000] hover:shadow-lg hover:shadow-[#ffc00055] transition duration-300"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
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
