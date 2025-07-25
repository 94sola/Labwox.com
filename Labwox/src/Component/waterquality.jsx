import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WaterQuality = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/molecule-pattern.svg')] bg-repeat" />

        {/* Navigation - Back */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/application"
            className="flex items-center gap-2 hover:text-white text-[#FFC000] transition"
          >
            <ArrowLeft size={20} />back to applications
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Water Quality Analysis
          </h1>
          <p className="mt-4 text-lg text-gray-50 max-w-2xl mx-auto">
            Reliable methods to evaluate water safety and purity. We provide
            high-precision testing for essential parameters, ensuring compliance
            with environmental and health standards.
          </p>
        </div>

        {/* Analysis Options */}
        <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {[
            { name: "pH Measurement", link: "/ph-measurement" },
            { name: "Turbidity Analysis", link: "/turbidity" },
            { name: "Dissolved Oxygen (DO)", link: "/dissolved-oxygen" },
            { name: "Conductivity & TDS", link: "/conductivity-tds" },
            { name: "Chemical Oxygen Demand (COD)", link: "/cod" },
            { name: "Biological Oxygen Demand (BOD)", link: "/bod" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-neutral-900 border border-neutral-800 hover:border-[#FFC000] rounded-xl p-6 text-center text-white hover:shadow-lg hover:shadow-[#ffc00033] transition"
            >
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default WaterQuality;
