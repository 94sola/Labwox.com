import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Wrapper from "../wrapper";

const Pbde = () => {
  // Common PBDE congeners
  const compounds = [
    "BDE-47",
    "BDE-99",
    "BDE-100",
    "BDE-153",
    "BDE-154",
    "BDE-183",
    "PBB-153"
  ];

  return (
    <Wrapper>
      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 lg:py-24 mb-10">
        {/* Back Link */}
        <div className="max-w-5xl mx-auto px-4 mb-8">
          <Link
            to="/pollutantanaly"
            className="inline-flex items-center gap-2 text-[#153D63] italic hover:text-[#FFC000] transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Pollutant Applications
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 px-4">
          <h1 className="text-5xl md:text-6xl font-light text-[#153D63] mb-6">
            Polybrominated Diphenyl Ethers (PBDEs)
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            <strong>PBDEs</strong> are brominated flame retardants widely used 
            in plastics, textiles, and electronics. These persistent organic pollutants 
            accumulate in the environment and living organisms, raising concerns 
            about human health and ecological safety. Our advanced analytical 
            services ensure accurate detection, monitoring, and regulatory compliance.
          </p>

          {/* Compounds List */}
          <div className="mt-12 max-w-6xl mx-auto">
            <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
              Common PBDE Congeners Analyzed
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {compounds.map((compound, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white rounded-xl px-4 py-3 text-center text-gray-800 text-sm md:text-base font-medium shadow-sm hover:shadow-md hover:border-[#FFC000] transition-all duration-300 break-words"
                >
                  {compound}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Pbde;
