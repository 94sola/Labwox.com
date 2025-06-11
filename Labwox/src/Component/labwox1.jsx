import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import lab from "../assets/image/chemxpert-hero.jpg";

const Chemxpert = () => {
  return (
    <Wrapper>
      <section className="relative bg-neutral-900 lg:py-36 sm:py-24 overflow-hidden">
        {/* Background Image */}
       <div
        className="absolute inset-0 transition-transform duration-700 scale-100 group-hover:scale-110"
        style={{
          backgroundImage: `url(${lab})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 to-transparent transition duration-300"></div>
        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-2xl py-10 mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-medium "><span className="text-[#FFC000]">ChemXpert</span>
            </h1>
            <h3 className="text-3xl sm:text-2xl md:text-4xl font-normal text-yellow-50 pt-8">Advance Your Research, Collaborate with Experts</h3>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white leading-relaxed drop-shadow max-w-3xl">
              Apply to  Chemxpert, selected research projects receive free technical support and partial funding.
            </p>
            <div className="mt-10">
              <Link
                to="/chemxpert"
                className="inline-block px-8 py-4 bg-[#FFC000] text-[#153D63] font-semibold text-lg rounded-xl hover:bg-[#e6ae00] transition duration-300 shadow-lg hover:shadow-2xl"
              >
                Get Started with ChemXpert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Chemxpert;
