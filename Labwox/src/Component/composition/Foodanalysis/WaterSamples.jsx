import React from "react";
import { Link } from "react-router-dom";

const WaterSamples = () => {
  return (
      <div className="py-10 max-w-5xl mx-auto px-4">
        <Link
          to="/metal"
          className="text-orange-600 hover:underline text-lg font-medium"
        >
          ← Back to Dioxin Samples
        </Link>

        <h1 className="text-4xl font-thin text-[#153D63] mt-6 mb-4">
          Water Sample Dioxin Analysis
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Dioxins in water can originate from industrial discharges, leaching of
          contaminated soils, or atmospheric deposition. Regular testing is
          essential for maintaining water safety for both human consumption and
          ecological health.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We analyze both surface and groundwater using advanced sample
          preparation and ultra-sensitive HRGC/HRMS detection, ensuring results
          that meet global environmental standards.
        </p>
      </div>
  );
};

export default WaterSamples;
