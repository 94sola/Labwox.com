import React from "react";
import Wrapper from "./wrapper";

const Activities = [
  "Familiarization of participants with instrument hardware and software",
  "Presentation sessions covering theoretical background of instrumentation as well as analytical workflows.",
  "Hands-on practice sessions giving participants opportunities for operation of instrumentation.",
  "Sample preparation workflows were established and documented."
];

const Results = [
  "Staff of the laboratory gained proficiency in the operation of the GC-FID, GC-MSD and MP-AES",
];

export default function About() {
  return (
    <Wrapper>
      <section className="bg-white py-10 font-manrope relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start gap-16">
          <div className="w-full lg:w-7/12">
            <h3 className="text-gray-900 text-3xl md:text-4xl font-semibold mb-10 tracking-tight">
              Activities
            </h3>
            <ul className="space-y-6">
              {Activities.map((text, index) => (
                <li
                  key={index}
                  className="relative pl-12 text-gray-800 text-base md:text-lg leading-relaxed group transition-all duration-300 hover:text-gray-900"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black shadow-lg transition-all duration-300 group-hover:scale-125"></span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-5/12 space-y-8">
            <h3 className="text-gray-900 text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Results
            </h3>

            <div>
              <p className="text-gray-700 text-base md:text-lg font-medium mb-4">Sector-wide intelligence on:</p>
              <ul className="space-y-4">
                {Results.map((text, index) => (
                  <li
                    key={index}
                    className="relative pl-10 text-gray-800 text-sm md:text-base leading-relaxed group hover:text-gray-900 transition-colors duration-300"
                  >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gray-900 shadow-sm"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
