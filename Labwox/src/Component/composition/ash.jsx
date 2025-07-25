import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Apple, Flame, Mountain, Package, ArrowLeft } from "lucide-react";
import Wrapper from "../wrapper";

const samples = [
  {
    name: "Food & Beverages",
    icon: <Apple className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Determination of total ash in cereals, spices, milk products, beverages, and packaged food to ensure compliance with nutritional and safety standards.",
    link: "/ash/food-beverages",
  },
  {
    name: "Fuels & Energy",
    icon: <Flame className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Measurement of ash in coal, biomass, petroleum coke, and alternative fuels to evaluate quality, efficiency, and combustion behavior.",
    link: "/ash/fuels-energy",
  },
  {
    name: "Minerals & Ores",
    icon: <Mountain className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Quantification of ash content in ores, clays, cements, and raw minerals to assess purity, industrial usability, and processing value.",
    link: "/ash/minerals-ores",
  },
  {
    name: "Consumer Products",
    icon: <Package className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Testing of ash content in pharmaceuticals, cosmetics, textiles, and polymers to ensure product quality and regulatory compliance.",
    link: "/ash/consumer-products",
  },
];

const compounds = [
  "Silica (SiO₂)",
  "Alumina (Al₂O₃)",
  "Ferric Oxide (Fe₂O₃)",
  "Calcium Oxide (CaO)",
  "Magnesium Oxide (MgO)",
  "Sodium Oxide (Na₂O)",
  "Potassium Oxide (K₂O)",
  "Titanium Dioxide (TiO₂)",
  "Manganese Oxide (MnO)",
  "Phosphorus Pentoxide (P₂O₅)",
  "Sulphur Trioxide (SO₃)",
  "Chloride (Cl⁻)",
  "Carbonates (CO₃²⁻)",
  "Trace Heavy Metals",
];

const Ash = () => {
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
        className="bg-gradient-to-b from-white via-gray-50 to-white py-16 lg:py-24 mb-10"
        style={{ cursor: loading ? "wait" : "default" }}
      >
        {/* Back Link */}
        <div className="max-w-5xl mx-auto px-4 mb-8">
          <Link
            to="/composition"
            className="inline-flex items-center gap-2 text-[#153D63] italic hover:text-[#FFC000] transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to composition applications
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-12 px-4">
          <h1 className="text-5xl md:text-7xl font-light text-[#153D63] mb-6">
            Ash Content Analysis
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            <strong>Ash content</strong> represents the inorganic mineral residue
            left after complete combustion of a sample. At Chemxpert, we provide
            accredited ash analysis across food, fuels, ores, and consumer
            products, delivering insights into quality, safety, and compliance.
          </p>

          {/* Compounds List */}
          <div className="mt-12">
            <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
              Available Compounds
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

export default Ash;
