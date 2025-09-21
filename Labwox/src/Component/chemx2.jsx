import React from "react";
import Wrapper from "./wrapper";

const Chemdxpert = () => {
  return (
    <Wrapper>
      <section className="w-full flex items-center justify-center my-10 px-4 py-20">
        {/* === Text Content === */}
        <div className="bg-white p-6 sm:p-8 md:p-10 text-center border shadow-lg rounded-lg max-w-7xl w-full">
          {/* === Header Section === */}
          <div className="bg-[#0B3D2E] text-white p-6 sm:p-8 rounded-md">
            <h1 className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-6 leading-tight">
              What is Chemxpert?
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto font-light leading-relaxed">
              Chemxpert is Labwox’s flagship collaborative research initiative
              designed to bridge the gap between academic institutions and modern
              analytical capabilities. Many universities and research faculties
              face significant barriers—limited access to advanced instrumentation,
              training opportunities, and research infrastructure. Chemxpert was
              created to address this gap by offering institutions a no-cost entry
              point into world-class scientific testing and collaboration.
              <br />
              <br />
              Through Chemxpert, selected samples are analyzed free of charge
              within Labwox’s network of partner laboratories. This pilot
              engagement serves as a foundation for building long-term
              partnerships in research, training, and capacity-building.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Chemdxpert;
