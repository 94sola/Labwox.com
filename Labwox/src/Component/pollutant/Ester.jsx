import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Apple, Droplets, Activity, Package, ArrowLeft } from "lucide-react";
import Wrapper from "../wrapper";

const samples = [
  {
    name: "Food & Beverages",
    icon: <Apple className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Assessment of phthalate migration into packaged foods, bottled water, dairy products, edible oils, and other beverages commonly exposed to plastic contact materials.",
    link: "/metal/food-beverages",
  },
  {
    name: "Environmental Samples",
    icon: <Droplets className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Comprehensive testing of soil, sediments, air particulates, wastewater, and drinking water to monitor environmental contamination by phthalate esters.",
    link: "/metal/environmental-samples",
  },
  {
    name: "Biological Samples",
    icon: <Activity className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Biomonitoring of human urine, blood, and breast milk, along with animal tissues, to evaluate internal exposure to phthalate esters.",
    link: "/metal/biological-samples",
  },
  {
    name: "Consumer Products",
    icon: <Package className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Testing of plastics, PVC materials, cosmetics, personal care products, and pharmaceuticals for phthalate ester content and potential leaching.",
    link: "/metal/consumer-products",
  },
];

const compounds = [
  "Dimethyl phthalate (DMP)",
  "Diethyl phthalate (DEP)",
  "Diisobutyl phthalate (DIBP)",
  "Dibutyl phthalate (DBP)",
  "Bis(2-methoxyethyl) phthalate",
  "Bis(4-methyl-2-pentyl) phthalate",
  "Bis(2-ethoxyethyl) phthalate",
  "Dipentyl phthalate",
  "Dihexyl phthalate",
  "Benzyl butyl phthalate (BBP)",
  "Bis(2-butoxyethyl) phthalate",
  "Dicyclohexyl phthalate",
  "Bis(2-ethylhexyl) phthalate (DEHP)",
  "Di-n-octyl phthalate (DNOP)",
  "Dinonyl phthalate (DINP)",
];

const Ester = () => {
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
            className="inline-flex items-center gap-2 italic text-[#153D63] hover:text-[#FFC000] transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Pollutant applications
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-12 px-4">
          <h1 className="text-5xl md:text-7xl font-light text-[#153D63] mb-6">
            Phthalate Esters
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            <strong>Phthalate esters</strong> are synthetic plasticizers widely
            used in consumer and industrial products. At Chemxpert, we offer
            accredited services to detect and measure phthalates in
            environmental, food, biological, and product samples.
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

export default Ester;
 