import React from "react";
import { Link } from "react-router-dom";

const IndustrialWaste = () => {
  return (
      <div className="py-10 max-w-5xl mx-auto px-4">
        <Link
          to="/metal"
          className="text-orange-600 hover:underline text-lg font-medium"
        >
          ← Back to Dioxin Samples
        </Link>

        <h1 className="text-4xl font-thin text-[#153D63] mt-6 mb-4">
          Industrial Waste Dioxin Analysis
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Industrial waste, including ash, sludge, and chemical residues, can
          contain harmful levels of dioxins. Monitoring these materials helps
          prevent environmental contamination and ensures regulatory compliance.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our testing covers a wide range of industrial by-products using
          precise and validated analytical techniques, providing detailed reports
          for environmental management.
        </p>
      </div>
  );
};

export default IndustrialWaste;
