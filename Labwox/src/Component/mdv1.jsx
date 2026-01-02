import React from "react";
import heroImage from "../assets/image/SONs1.jpeg";
import Wrapper from "./wrapper";

export default function LabwoxHero() {
  
  return (
    <Wrapper>
        <section className="relative w-full font-manrope bg-white overflow-hidden">
        
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Robust Methods for Real-World Samples
                </h1>
                <p className="mt-6 text-base text-left leading-relaxed text-[#153D63]/90 sm:text-lg">
                    Labwox develops and optimises analytical methods for food, 
                    water, and environmental samples, supporting researchers 
                    and laboratories with reliable, standards-aligned workflows.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-4">
                    <button className="bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-xl text-gray-900 font-medium hover:shadow-md transition">
                    Request Method Support
                    </button>
                </div>
            </div>

            <div className="flex justify-center ">
                <div className="w-96 h-96 md:w-[440px] md:h-[440px] rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden shadow-xl">
                <img src={heroImage} alt="Labwox Hero" className="w-full h-full object-cover" />
                </div>
            </div>
            </div>
        
        </section>
    </Wrapper>
  );
}
