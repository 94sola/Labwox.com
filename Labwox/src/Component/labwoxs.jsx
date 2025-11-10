import React from "react";
import Wrapper from "./wrapper";
import { Link } from 'react-router-dom';

const Chemdxpert = () => {
  return (
    <Wrapper>
      <section className="relative w-full bg-white overflow-hidden py-24 px-4 sm:px-8 lg:px-16">

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-6xl mx-auto space-y-8">
          <h1 className="text-[#153D63] font-thin text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight drop-shadow-md">
            What is <span className="text-amber-400">ChemXpert</span> ?
          </h1>

          <p className="text-[#153D63] text-base md:text-2xl leading-relaxed font-thin max-w-5xl">
            <span className="">
              ChemXpert is Labwox’s flagship collaborative research initiative
              designed to bridge the gap between academic institutions and modern
              analytical capabilities.
            </span>
            <br />
            <br />
            Through ChemXpert, selected samples are analyzed{" "}
            <span className="text-yellow-400 font-thin">free of charge</span> within
            Labwox’s network of partner laboratories. This pilot engagement lays the
            foundation for long-term partnerships in research, training, and
            capacity building.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Link to="/contact">
              <button className="px-8 py-3 bg-yellow-500 text-white rounded-full font-semibold shadow-md hover:bg-amber-500 hover:shadow-amber-500/40 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Chemdxpert;
