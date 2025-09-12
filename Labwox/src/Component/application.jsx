import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const applications = [
  { name: "Compositional Analysis", link: "/composition" },
  { name: "Pollutant Analysis", link: "/pollutantanaly" },
  { name: "Pesticide Residue Analysis", link: "/pesticide" },
  { name: "Food Analysis", link: "/composition/food" },
  { name: "Water Quality Analysis", link: "/waterqua" },
];

const Application = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/molecule-pattern.svg')] bg-repeat" />

        {/* Navigation */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-white text-[#FFC000] transition"
          >
            <ArrowLeft size={20} /> Back home
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Select Application
          </h1>
          <p className="mt-4 text-lg text-gray-50 max-w-2xl mx-auto">
            Choose the chemical application you want to explore. Each selection
            provides detailed insights, procedures, and resources to support your research journey.
          </p>
        </div>

        {/* Application Grid */}
        <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {applications.map((app, index) => (
            <Link
              key={index}
              to={app.link}
              className={`bg-neutral-900 border border-neutral-800 hover:border-[#FFC000] rounded-xl p-6 text-center text-white hover:shadow-lg hover:shadow-[#ffc00033] transition 
                ${index === applications.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}`}
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
