import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import app from "../assets/image/application.png";

const applications = [
  { name: "Compositional Analysis", link: "/composition" },
  { name: "Pollutant Analysis", link: "/pollutantanaly" },
  { name: "Pesticide Residue Analysis", link: "/pesticide" },
  { name: "Food and Water Quality Analysis", link: "/foodwater" },
];

const Application = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-24 sm:py-28 lg:py-36 overflow-hidden bg-fixed bg-center bg-cover mb-10"
        style={{ backgroundImage: `url(${app})` }}
      >
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-neutral-800/70 backdrop-blur-[2px]" />

        {/* Back Navigation */}
        <div className="relative flex items-center justify-start mb-6 sm:mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/chemxpert"
            className="flex items-center gap-2 text-[#FFC000] hover:text-white transition-colors text-sm sm:text-base font-medium"
          >
            <ArrowLeft size={18} className="sm:size-5" />
            Back to Chemxpert
          </Link>
        </div>

        {/* === Header === */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Select Application
          </h1>
          <p className="mt-4 text-lg text-gray-50 max-w-2xl mx-auto">
            Choose the chemical application you want to explore. Each selection
            provides detailed insights, procedures, and resources to support
            your research journey.
          </p>
        </div>

        {/* === Application Grid === */}
        <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {applications.map((app, index) => (
            <Link
              key={index}
              to={app.link}
              className="bg-neutral-700/60 backdrop-blur-sm border border-white/20 rounded-xl p-5 sm:p-7 text-center text-white hover:bg-[#FFC000]/20 hover:border-[#FFC000] hover:shadow-lg hover:shadow-[#ffc00055] transition duration-300"
            >
              <h2 className="text-xl font-semibold">{app.name}</h2>
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Application;
