import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Apple, Droplets, Activity, Package, ArrowLeft } from "lucide-react";
import Wrapper from "../wrapper";

const Heavymetals = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 300);
  };

  // Clean, structured list of heavy metals
  const compounds = [
    "Iron (Fe)",
    "Copper (Cu)",
    "Selenium (Se)",
    "Lead (Pb)",
    "Cadmium (Cd)",
    "Mercury (Hg)",
    "Barium (Ba)",
    "Aluminium (Al)",
    "Nickel (Ni)",
    "Arsenic (As)",
    "Silver (Ag)",
    "Zinc (Zn)",
    "Vanadium (V)",
    "Chromium (Cr)",
    "Cobalt (Co)",
    "Manganese (Mn)",
  ];

  return (
    <Wrapper>
      <section
        className="bg-gradient-to-b from-white via-gray-50 to-white py-16 lg:py-24 mb-10"
        style={{ cursor: loading ? "wait" : "default" }}
      >
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
            Heavy Metals
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            At <strong>ChemXpert</strong>, we provide accredited analytical
            services for the detection and quantification of <em>heavy metals</em>
            across food, biological, consumer, and environmental samples. 
            Using advanced techniques such as ICP-MS and AAS, we deliver accurate 
            insights that support food safety, toxicology, environmental monitoring, 
            and regulatory compliance.
          </p>

          {/* Compounds List */}
          <div className="mt-10 max-w-6xl mx-auto">
            <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
               Available Compounds
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {compounds.map((compound, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white rounded-lg px-4 py-3 
                             text-center text-gray-800 text-sm md:text-base font-medium 
                             shadow-sm hover:shadow-md hover:border-[#FFC000] 
                             transition-all duration-300 break-words"
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

export default Heavymetals;
