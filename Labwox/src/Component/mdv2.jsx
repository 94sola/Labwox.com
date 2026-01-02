import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";

const Mdv = () => {
  return (
    <Wrapper>
      <section className="relative isolate font-manrope overflow-hidden py-12 sm:py-10 lg:py-14">

        <div className="absolute inset-0 bg-yellow-200 -z-10" />

        <div className="mx-auto max-w-4xl font-manrope text-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6 text-[#0f3253] sm:text-3xl">
            Optimised Instruments. Reliable Data.
          </h2>

          <p className="mt-6 text-base mx-auto font-manrope max-w-2xl leading-relaxed text-[#153D63]/90 sm:text-lg">
            Our expertise spans pesticide residues, environmental pollutants,
            elemental analysis, and chromatographic techniques, with a focus on
            reproducibility, validation, and real-world applicability.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#153D63] px-4 py-2 text-sm sm:text-base font-normal text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-600 hover:shadow-2xl"
            >
              View Applications
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Mdv;
