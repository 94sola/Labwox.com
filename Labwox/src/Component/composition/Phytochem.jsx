import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, FlaskConical, Droplets, Apple, ArrowLeft } from "lucide-react";
import Wrapper from "../wrapper";

const samples = [
  {
    name: "Plant Extracts",
    icon: <Leaf className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Analysis of medicinal plants, herbs, and botanical extracts for bioactive phytochemicals.",
    link: "/phytochem/plant-extracts",
  },
  {
    name: "Food & Beverages",
    icon: <Apple className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Screening of tea, coffee, fruits, vegetables, and beverages for natural antioxidants and phytochemicals.",
    link: "/phytochem/food-beverages",
  },
  {
    name: "Pharmaceuticals",
    icon: <FlaskConical className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Evaluation of phytoconstituents in nutraceuticals, herbal formulations, and traditional medicines.",
    link: "/phytochem/pharmaceuticals",
  },
  {
    name: "Cosmetics & Personal Care",
    icon: <Droplets className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Testing of natural cosmetics, essential oils, and personal care products for phytochemical content.",
    link: "/phytochem/cosmetics",
  },
];

const compounds = [
  "Alkaloids",
  "Flavonoids",
  "Tannins",
  "Phenolic Compounds",
  "Terpenoids",
  "Saponins",
  "Glycosides",
  "Steroids",
  "Lignans",
  "Coumarins",
  "Anthocyanins",
  "Isoflavones",
  "Quinones",
  "Chlorophyll Derivatives",
  "Carotenoids",
];

const Phytochemical = () => {
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
            to="/composition"
            className="inline-flex items-center gap-2 italic text-[#153D63] hover:text-[#FFC000] transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            back to composition applications
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-12 px-4">
          <h1 className="text-5xl md:text-7xl font-light text-[#153D63] mb-6">
            Phytochemical Analysis
          </h1>
          <p className="text-base text-gray-700 leading-relaxed">
            <strong>Phytochemical Analysis</strong> is essential for identifying and quantifying
            bioactive compounds in plants, foods, herbal medicines, and natural products.
            At <span className="text-[#153D63] font-semibold">Chemxpert</span>, we provide
            advanced testing services to ensure quality, safety, and efficacy of phytochemicals
            across diverse industries.
          </p>

          {/* Compounds List */}
          <div className="mt-12">
            <h3 className="text-4xl font-normal text-[#153D63] mb-6 text-center">
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

export default Phytochemical;
