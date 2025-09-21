import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const SamplingGuidelines = ({ samples = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!samples || samples.length === 0) {
    return <p className="text-center text-gray-500">No sampling details available</p>;
  }

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12 max-w-6xl mx-auto px-4">
      <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-10 text-center">
        Select Sample Type
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {samples.map((sample, i) => (
          <div key={i} className="bg-white transition p-6">
            {sample.img && (
              <img
                src={sample.img}
                alt={`${sample.category} icon`}
                className="w-48 h-32 mx-auto transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-lg"
              />
            )}
            <button
              onClick={() => toggleDropdown(i)}
              className="mt-4 flex items-center justify-center gap-2 text-xl font-thin text-[#153D63] w-full"
            >
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
              {sample.category}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === i ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <ul
                className={`relative text-gray-700 text-sm md:text-base space-y-2 text-right px-2
                  before:absolute before:top-0 before:left-0 before:w-1 before:bg-pink-500
                  before:transition-all before:duration-500
                  ${openIndex === i ? "before:h-full" : "before:h-0"}`}
              >
                {sample.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SamplingGuidelines;
