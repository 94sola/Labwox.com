import React from "react";
import heroImage from "../assets/image/labwox1.jpg";
import Wrapper from "./wrapper";

export default function LabwoxHero() {
  
  return (
    <Wrapper>
        <section className="relative w-full font-manrope bg-white overflow-hidden">
        
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
                <p className="text-gray-500 text-lg">Method Development</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                Connecting Digital Landscapes: <br /> Your Trusted Agency
                </h1>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                <button className="bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-xl text-gray-900 font-medium hover:shadow-md transition">
                    Reach out
                </button>

                <div className="flex items-center space-x-3">
                    <div className="text-yellow-400 text-3xl">★</div>
                    <div>
                    <p className="text-gray-900 font-semibold">Rated 5/5</p>
                    <p className="text-gray-500 text-sm">from over 100 customers</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-xl">
                <img src={heroImage} alt="Labwox Hero" className="w-full h-full object-cover" />
                </div>
            </div>
            </div>
        
        </section>
    </Wrapper>
  );
}
