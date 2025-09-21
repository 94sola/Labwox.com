import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import compo from "../assets/image/Combustion.jpg";

const Composition = () => {
  const analysisOptions = [
    { name: "Phytochemical Analysis", link: "/composition/Phytochemical" },
    { name: "Elemental Analysis of Ores", link: "/composition/metal" },
    { name: "Ash Content", link: "/composition/ash" },
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
        <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {analysisOptions.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-7 text-center text-white hover:bg-[#FFC000]/20 hover:border-[#FFC000] hover:shadow-lg hover:shadow-[#ffc00055] transition
                ${index === analysisOptions.length - 1 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}`}
            >
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Composition;
