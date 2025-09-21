import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import foodwater from "../assets/image/foodwater.jpeg";

const pesticides = [
  { name: "Food  Analysis", link: "/food/foodananlysis" },
  { name: "Water Quality Analysis", link: "/food/waterqua" },
];

const Pesticide = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-24 sm:py-28 lg:py-36 overflow-hidden bg-fixed bg-center bg-cover mb-10"
              style={{ backgroundImage: `url(${foodwater})` }}
            >
              {/* Dark Overlay for Contrast */}
              <div className="absolute inset-0 bg-neutral-800/70 backdrop-blur-[2px]" />

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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Food and Water Quality Analysis
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-50 max-w-2xl mx-auto leading-relaxed">
            Comprehensive testing solutions for assessing the safety and quality of food and water. 
            Our laboratory applies advanced analytical techniques to detect contaminants, monitor 
            nutrient composition, and ensure compliance with international health and safety standards.
          </p>

        </div>

        {/* Pesticide Options */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
          {pesticides.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-5 sm:p-7 text-center text-white hover:bg-[#FFC000]/20 hover:border-[#FFC000] hover:shadow-lg hover:shadow-[#ffc00055] transition duration-300"
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
