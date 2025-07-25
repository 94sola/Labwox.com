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
      "Evaluation of PAH migration into packaged foods, bottled water, dairy products, edible oils, and beverages exposed to processing or storage materials.",
    link: "/metal/food-beverages",
  },
  {
    name: "Environmental Samples",
    icon: (
      <Droplets className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Testing of soil, sediments, air particulates, wastewater, and drinking water to detect PAH contamination.",
    link: "/metal/environmental-samples",
  },
  {
    name: "Biological Samples",
    icon: (
      <Activity className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Biomonitoring of human urine, blood, and breast milk, along with animal tissues, to assess internal exposure to PAHs.",
    link: "/metal/biological-samples",
  },
  {
    name: "Consumer Products",
    icon: (
      <Package className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Analysis of plastics, cosmetics, pharmaceuticals, and household products for PAH presence and migration risks.",
    link: "/metal/consumer-products",
  },
];

const PahMixE = () => {
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
    "Naphthalene",
    "Acenaphthylene",
    "Acenaphthene",
    "Fluorene",
    "Phenanthrene",
    "Anthracene",
    "Fluoranthene",
    "Pyrene",
    "Benzo[c]phenanthrene",
    "Benz[a]anthracene",
    "Chrysene",
    "Benzo[b]fluoranthene",
    "Benzo[j]fluoranthene",
    "Benz[a]pyrene",
    "Benzo[k]fluoranthene",
    "3-Methylcholanthrene",
    "Indeno(1,2,3-cd)pyrene",
    "Dibenz[a,h]anthracene",
    "Benzo[ghi]perylene",
    "Dibenz[a,l]pyrene",
    "Dibenz[a,h]pyrene",
  ];

  return (
    <Wrapper>
      <AnimatePresence>
        {!fadeOut && (
          <motion.section
            key="pah-mix-e-page"
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
            <div className="max-w-5xl mx-auto text-center mb-12 px-4">
              <h1 className="text-5xl md:text-7xl font-light text-[#153D63] mb-6">
                PAH Mix E
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong>PAH Mix E</strong> includes a set of polycyclic aromatic hydrocarbons 
                commonly analyzed for environmental and toxicological studies.
              </p>

              {/* Compounds List */}
              <div className="mt-10 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-[#FFC000] mb-6 text-center">
                  Available Compounds
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {compounds.map((compound, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 rounded-xl p-4 text-center text-gray-800 text-base font-medium shadow-sm hover:shadow-md hover:border-[#FFC000] transition-all duration-300"
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

export default PahMixE;
