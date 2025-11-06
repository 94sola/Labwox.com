import React from "react";
import Wrapper from "./wrapper";
import lab from "../assets/image/grdient 2.jpg";

const Chemdxpert = () => {
  return (
    <Wrapper>
      <section className="relative w-full overflow-hidden py-24 my-10 px-4 sm:px-8 lg:px-16">
        {/* Background Image */}
        <img
          src={lab}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay (to boost text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000099] via-[#00000055] to-[#000000cc] z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-8">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight drop-shadow-md">
            What is <span className="text-amber-400">ChemXpert</span>?
          </h1>

          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-3xl">
            <span className="text-white">
              ChemXpert is Labwox’s flagship collaborative research initiative
              designed to bridge the gap between academic institutions and modern
              analytical capabilities.
            </span>
            <br />
            <br />
            Through ChemXpert, selected samples are analyzed{" "}
            <span className="text-amber-400 font-medium">free of charge</span> within
            Labwox’s network of partner laboratories. This pilot engagement lays the
            foundation for long-term partnerships in research, training, and
            capacity building.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <button className="px-8 py-3 bg-amber-500 text-white rounded-full font-semibold shadow-md hover:bg-amber-400 hover:shadow-amber-500/40 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Chemdxpert;
