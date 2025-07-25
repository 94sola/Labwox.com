import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Apple, Droplets, Activity, Package, ArrowLeft } from "lucide-react";
import Wrapper from "../wrapper";

const samples = [
  {
    name: "Food & Beverages",
    icon: (
      <Apple className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Analysis of bottled water, packaged foods, beverages, and edible oils for possible VOC residues from processing or packaging materials.",
    link: "/metal/food-beverages",
  },
  {
    name: "Environmental Samples",
    icon: (
      <Droplets className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Comprehensive monitoring of soil, air, groundwater, and wastewater to detect volatile organic compound contamination and persistence.",
    link: "/metal/environmental-samples",
  },
  {
    name: "Biological Samples",
    icon: (
      <Activity className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Biomonitoring of human blood, urine, and animal tissues to evaluate internal exposure to VOCs and related health risks.",
    link: "/metal/biological-samples",
  },
  {
    name: "Consumer Products",
    icon: (
      <Package className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Testing of cosmetics, plastics, cleaning products, and pharmaceuticals for volatile organic compounds.",
    link: "/metal/consumer-products",
  },
];

const compounds = [
  "Benzene",
  "1,2-Dichloroethane",
  "Trichloroethene",
  "1,2-Dichloropropane",
  "Dibromomethane",
  "Bromochloromethane",
  "cis-1,3-Dichloropropene",
  "Toluene",
  "trans-1,3-Dichloropropane",
  "1,1,3-Trichloroethane",
  "Tetrachloroethene",
  "Dibromochloromethane",
  "Ethylbenzene",
  "Chlorobenzene",
  "m-Xylene + p-Xylene",
  "o-Xylene",
  "Bromoform",
  "Isopropylbenzene",
  "Bromobenzene",
  "1,1,2,2-Tetrachloroethane",
  "n-Propylbenzene",
  "2-Chlorotoluene",
  "1,3-Dichlorobenzene",
  "4-Chlorotoluene",
  "1,4-Dichlorobenzene",
  "p-Isopropyltoluene",
  "1,2-Dichlorobenzene",
  "Butylbenzene",
  "1,2-Dibromo-3-chloropropane",
  "1,2,4-Trichlorobenzene",
  "Hexachlorobutadiene",
  "Naphthalene",
  "1,2,3-Trichlorobenzene",
  "1,2,3-Trichloropropane",
];

const Voc = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 300);
  };

  return (
    <Wrapper>
      <section
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-16 lg:py-24 mb-10"
        style={{ cursor: loading ? "wait" : "default" }}
      >
        {/* Back Link */}
        <div className="max-w-5xl mx-auto px-4 mb-8">
          <Link
            to="/pollutantanaly"
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to pollutant applications
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-12 px-4">
          <h1 className="text-4xl md:text-6xl font-light text-[#153D63] mb-6">
            Volatile Organic Compounds (VOCs)
          </h1>
          <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
            Volatile Organic Compounds (VOCs) are a broad group of carbon-based chemicals 
            that easily evaporate at room temperature. VOC analysis helps identify and 
            quantify these compounds in air, water, soil, food, and consumer products to 
            assess contamination levels and potential health risks.
          </p>

          {/* Compounds List */}
          <div className="mt-10 max-w-7xl mx-auto">
            <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
              Available Compounds
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {compounds.map((compound, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white rounded-xl p-2
             text-center text-gray-800 text-sm md:text-base font-normal 
             shadow-sm hover:shadow-md hover:border-[#FFC000] 
             transition-all duration-300"
                >
                  {compound}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sample Types */}
        <h2 className="text-4xl font-normal text-[#153D63] text-center mb-8">
          Select Sample Type
        </h2>
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {samples.map((sample, index) => (
            <div
              key={index}
              onClick={() => handleClick(sample.link)}
              style={{ cursor: loading ? "wait" : "pointer" }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#FFC000] transition-all duration-300 text-center flex flex-col items-center h-full group"
            >
              {sample.icon}
              <h3 className="text-2xl font-normal text-gray-800 mt-4 mb-2 group-hover:text-[#FFC000] transition-colors duration-200">
                {sample.name}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {sample.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Voc;
