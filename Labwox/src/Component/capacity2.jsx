import React from "react";
import Wrapper from "./wrapper";

const Labwox = [
  "ICP-OES – Elemental analysis for food, water, soil, cosmetics & industrial samples",
  "GC-MS – Pesticides, pollutants, PAHs, VOCs & environmental contaminants",
  "Headspace GC-FID – VOCs, residual solvents, petroleum volatiles",
  "GC-FID – FAMEs, petrochemicals, QC compounds, routine GC applications",
];

export default function About() {
  return (
    <Wrapper>
      <section className="bg-[#153D63] py-20 font-manrope relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
            <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-6">
              Professional Training in Analytical Instrumentation
            </h3>
            <ul className="space-y-6">
              {Labwox.map((text, index) => (
                <li
                  key={index}
                  className="relative pl-6 text-white/90 text-base leading-relaxed"
                >
                  <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-white shadow-md"></span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
