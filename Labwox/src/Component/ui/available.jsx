import React from "react";

const AvailableCompounds = ({ title = "Available Compounds", compounds = [] }) => {
  if (!compounds || compounds.length === 0) {
    return <p className="text-center text-gray-500">No compounds available</p>;
  }

  return (
    <div className="mt-10 max-w-3xl mx-auto">
      <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">{title}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {compounds.map((compound, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-2 text-center text-gray-800 shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
          >
            {compound}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCompounds;
