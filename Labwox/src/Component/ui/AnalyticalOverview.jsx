import React from "react";

const AnalyticalOverview = ({ overview = [] }) => {
  if (!overview || overview.length === 0) {
    return <p className="text-center text-gray-500">No analytical data available</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mt-8 max-w-4xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-6 text-center">
          Analytical Overview
        </h3>
        <div className="overflow-x-auto shadow-lg rounded-xl">
          <table className="w-full border-collapse">
            <tbody className="text-gray-700 text-base md:text-lg">
              {overview.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100 transition" : "bg-white hover:bg-gray-50 transition"}
                >
                  <td className="p-4 font-semibold border border-gray-300 w-1/3">{row.title}</td>
                  <td className="p-4 border border-gray-300 text-sm">{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticalOverview;
