import React from "react";
import chemxpertImage from "../assets/image/SPECTRO.jpeg";
import Wrapper from "./wrapper";

export default function ChemXpertSection() {
  return (
    <Wrapper>
      <section className="w-full bg-white font-manrope text-black py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Built for Academic & Research Institutions
            </h2>

            <p className="text-lg text-gray-700 mb-12 max-w-xl">
              Give your faculty and students the tools they need to carry out impactful, publishable
               research across food, water, environment, and pollutant analysis.
            </p>

            <div className="space-y-6">
              {[
                "Free pilot testing for selected studies",
                "Access to ICP-OES, GC-MS, GC-FID, HPLC & more",
                "Expert technical support and collaborative research",
                "Training opportunities for students and staff",
                "Enhanced publication output and research capacity",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center py-3 border-b border-gray-200"
                >
                  <span className="text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div
              className="
                w-full max-w-md md:max-w-lg lg:max-w-xl 
                bg-gradient-to-br from-[#2460b9] via-[#25cc1f] to-[#ffffff]
                pt-20 px-20 rounded-2xl border border-gray-200 shadow-md
                flex justify-center items-center
              "
            >
              <img
                src={chemxpertImage}
                alt="ChemXpert Interface"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

        </div>
      </section>
    </Wrapper>
  );
}
