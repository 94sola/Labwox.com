import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      "Assessment of edible oils, packaged foods, bottled water, and beverages for possible hydrocarbon residues from contact with petroleum products.",
    link: "/metal/food-beverages",
  },
  {
    name: "Environmental Samples",
    icon: (
      <Droplets className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Comprehensive testing of soil, sediments, wastewater, and groundwater to evaluate petroleum hydrocarbon contamination and persistence.",
    link: "/metal/environmental-samples",
  },
  {
    name: "Biological Samples",
    icon: (
      <Activity className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Biomonitoring of human blood, urine, and animal tissues to assess exposure and uptake of petroleum hydrocarbons.",
    link: "/metal/biological-samples",
  },
  {
    name: "Consumer Products",
    icon: (
      <Package className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Analysis of cosmetics, household goods, and plastics for the presence of petroleum hydrocarbon residues.",
    link: "/metal/consumer-products",
  },
];

const Tph = () => {
  const [loading, setLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setLoading(true);
    setFadeOut(true);
    setTimeout(() => {
      navigate(path);
      setFadeOut(false);
      setLoading(false);
    }, 500);
  };

  const compounds = [
    "n-Alkanes [C10–C40]",
  ];

  return (
    <Wrapper>
      <AnimatePresence>
        {!fadeOut && (
          <motion.section
            key="tph-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-white via-neutral-50 to-white py-16 lg:py-24 mb-10"
            style={{ cursor: loading ? "wait" : "default" }}
          >
            {/* Back Link */}
            <div className="max-w-5xl mx-auto px-4 mb-8">
              <Link
                to="/pollutantanaly"
                className="inline-flex items-center gap-2 text-[#153D63] hover:text-[#FFC000] transition-colors duration-200 font-medium"
              >
                <ArrowLeft className="w-5 h-5" /> Back to Pollutant
              </Link>
            </div>

            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12 px-4">
              <h1 className="text-5xl md:text-7xl font-light text-[#153D63] mb-6">
                Total Petroleum Hydrocarbons (TPH)
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong>TPH</strong> represents a broad family of hydrocarbons
                derived from crude oil. Monitoring TPH is essential for assessing
                environmental pollution, food safety, and public health risks
                associated with petroleum exposure.
              </p>

              {/* Compounds List */}
              <div className="mt-10 max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold text-[#FFC000] mb-6 text-center">
                  Available Compound
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {compounds.map((compound, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border border-gray-300 bg-white rounded-xl p-4 text-center text-gray-800 text-base font-medium shadow-sm hover:shadow-md hover:border-[#FFC000] transition-all duration-300"
                    >
                      {compound}
                    </motion.div>
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                  }}
                  onClick={() => handleClick(sample.link)}
                  style={{ cursor: loading ? "wait" : "pointer" }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#FFC000] transition-all duration-300 text-center flex flex-col items-center h-full group">
                    {sample.icon}
                    <h3 className="text-2xl font-normal text-gray-800 mt-4 mb-2 group-hover:text-[#FFC000] transition-colors duration-200">
                      {sample.name}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {sample.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Tph;
