import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Droplets, FlaskConical, Microscope, Leaf, ArrowLeft } from "lucide-react";
import Wrapper from "../../wrapper"; 

// FAME sample categories
const samples = [
  {
    name: "Food Oils & Fats",
    icon: <Droplets className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Analysis of edible oils, dairy fats, and processed foods to determine fatty acid methyl ester composition and nutritional quality.",
    link: "/fame/food-oils",
  },
  {
    name: "Biodiesel Samples",
    icon: <FlaskConical className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Characterization of biodiesel fuel feedstocks and final products to evaluate FAME profiles, efficiency, and compliance with standards.",
    link: "/fame/biodiesel",
  },
  {
    name: "Biological Samples",
    icon: <Microscope className="w-10 h-10 text-[#FFC000]" />,
    description:
      "Fatty acid profiling in blood, tissue, and microbial samples to support biomedical, nutritional, and metabolic research.",
    link: "/fame/biological",
  },
  {
    name: "Environmental Samples",
    icon: <Leaf className="w-10 h-10 text-[#FFC000]" />,
    description:
      "FAME analysis in soils, sediments, and water extracts to assess pollution sources, biomarkers, and ecological studies.",
    link: "/fame/environmental",
  },
];

// Fatty acids commonly detected in FAME analysis
const compounds = [
  "Caprylic acid",
  "Capric acid",
  "Undecanoic acid",
  "Lauric acid",
  "Tridecanoic acid",
  "Myristoleic acid",
  "Myristic acid",
  "Palmitoleic acid",
  "Palmitic acid",
  "Linoleic acid",
  "Oleic acid",
  "Stearic acid",
  "cis-11-Eicosanoic acid",
  "cis-5,8,11,14,17-Eicosanoic acid",
  "Heneicosanoic acid",
  "cis-13,16-Docosadienoic acid",
  "Behenic acid",
  "Tricosanoic acid",
];

const Fame = () => {
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
            Fatty Acid Methyl Esters (FAMEs)
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            At <strong>ChemXpert</strong>, we specialize in the identification and quantification
            of <em>Fatty Acid Methyl Esters</em>. Using advanced chromatographic techniques (GC-FID, GC-MS),
            we provide accurate profiling of fatty acids across food, biodiesel, biological, and environmental
            matrices—ensuring reliability, compliance, and scientific excellence.
          </p>

          {/* Compounds List */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[#FFC000] mb-6 text-center">
              Common FAME Compounds Analyzed
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

export default Fame;
