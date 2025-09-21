import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import compo from "../assets/image/Combustion.jpg";

const Composition = () => {
  const Analysis = [
    { name: "Phytochemical Analysis", link: "/composition/Phytochemical" },
    { name: "Elemental Analysis of Ores", link: "/composition/metal" },
  ];

  return (
    <Wrapper>
      <section className="relative w-full py-24 sm:py-28 lg:py-36 overflow-hidden bg-fixed bg-center bg-cover mb-10"
        style={{ backgroundImage: `url(${compo})` }}
      >
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-neutral-800/70 backdrop-blur-[2px]" />

        {/* Navigation - Only Previous */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/application"
            className="flex items-center gap-2 hover:text-white text-[#FFC000] transition"
          >
            <ArrowLeft size={20} /> back to applications
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Compositional Analysis
          </h1>
          <p className="mt-4 text-lg text-gray-50 max-w-2xl mx-auto">
            Explore detailed studies on the composition of various materials.
            From identifying key components to measuring concentrations, our
            methods deliver precise insights into chemical makeup.
          </p>
        </div>

        {/* Analysis Options */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 px-4 sm:px-6 lg:px-8">
          {Analysis.map((item, index) => (
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

export default Composition;
