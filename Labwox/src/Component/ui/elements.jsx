import React, { useState } from "react";

const AvailableCompounds = ({ title = "Available Elements", compounds = [] }) => {
  const [showMore, setShowMore] = useState(false);

  if (!compounds || compounds.length === 0) {
    return <p className="text-center text-gray-500">No compounds available</p>;
  }

  const firstSix = compounds.slice(0, 8);
  const remaining = compounds.slice(8);

  return (
    <div className="my-10 max-w-4xl mx-auto">
      <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">{title}</h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4">
        {firstSix.map((compound, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-2 text-center text-gray-800 shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
          >
            {compound}
          </div>
        ))}
      </div>

      {remaining.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 p-2 bg-[#153D63] text-white rounded-xl shadow hover:bg-[#112f4c] transition"
          >
            {showMore ? "Show Less" : "Show More Compounds"}
          </button>

          {showMore && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fadeIn">
              {remaining.map((compound, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-xl p-2 text-center text-gray-800 shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
                >
                  {compound}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AvailableCompounds;
