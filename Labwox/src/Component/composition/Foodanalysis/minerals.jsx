import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Apple, FlaskConical, Microscope, Leaf, ArrowLeft } from "lucide-react";
import Wrapper from "../../wrapper";

// Mineral sample categories
const samples = [
  {
    name: "Fruits & Vegetables",
    icon: <Apple className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Mineral profiling in fresh produce to determine nutrient density, quality, and dietary contributions.",
    link: "/minerals/fruits-vegetables",
  },
  {
    name: "Processed Foods",
    icon: <FlaskConical className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Analysis of snacks, cereals, and beverages for essential and trace minerals to ensure compliance with nutritional standards.",
    link: "/minerals/processed-foods",
  },
  {
    name: "Biological Samples",
    icon: <Microscope className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Measurement of mineral content in blood, tissue, and biological fluids for health, nutrition, and clinical studies.",
    link: "/minerals/biological",
  },
  {
    name: "Environmental Sources",
    icon: <Leaf className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Determination of mineral residues in soil and water that influence food chain quality and agricultural productivity.",
    link: "/minerals/environmental",
  },
];

// Minerals commonly detected in food analysis
const compounds = [
  "Phosphorus (P)",
  "Iron (Fe)",
  "Sodium (Na)",
  "Magnesium (Mg)",
  "Calcium (Ca)",
  "Potassium (K)",
];

const Mineral = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 500);
  };

  return (
    <Wrapper>
      <section
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-16 lg:py-24 my-16"
        style={{ cursor: loading ? "wait" : "default" }}
      >
        {/* Back Link */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <Link
            to="/composition/food"
            className="inline-flex items-center gap-2 text-[#153D63] italic hover:text-[#FFC000] transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to food compositions application
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-light text-[#153D63] mb-6">
            Minerals in Food
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            At <em>ChemXpert</em>, we specialize in the accurate detection and 
            quantification of essential and trace <em>minerals</em> in foods. 
            Using advanced analytical techniques such as ICP-MS and AAS, 
            we ensure reliable profiling of nutrients like calcium, iron, magnesium, 
            and trace elements critical for health, safety, and regulatory compliance..
          </p>

          {/* Compounds List */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[#FFC000] mb-6 text-center">
              Common Minerals Analyzed
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {compounds.map((compound, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white rounded-xl shadow-sm p-4 text-center text-gray-700 hover:border-[#FFC000] hover:shadow-lg transition-all duration-300"
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

export default Mineral;
