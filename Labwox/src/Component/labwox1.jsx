import React from "react";
import Wrapper from "./wrapper";


const Chemdxpert = () => {
  

  return (
    <Wrapper>
      <section className="w-full bg-gradient-to-tr from-[#153D63] via-white to-gray-400 my-10 items-center justify-center px-4 py-20">
        {/* === Main Intro === */}
        <div className="w-full flex items-center justify-center px-4 py-20">
          <div className="bg-white/90 backdrop-blur-sm text-[#153D63] p-6 sm:p-8 md:p-10 text-center border border-[#153D63]/10 shadow-2xl rounded-3xl max-w-7xl w-full transition-all hover:shadow-[#153D63]/30">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 tracking-wide">
              What is ChemXpert?
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto font-light leading-relaxed text-neutral-700">
              ChemXpert is Labwox’s flagship collaborative research initiative
              designed to bridge the gap between academic institutions and
              modern analytical capabilities.
              <br />
              <br />
              Through ChemXpert, selected samples are analyzed free of charge
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
