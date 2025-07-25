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
      "Comprehensive evaluation of PAH Mix G transfer into packaged foods, bottled water, dairy products, edible oils, and beverages exposed to packaging or processing materials.",
    link: "/metal/food-beverages",
  },
  {
    name: "Environmental Samples",
    icon: (
      <Droplets className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "In-depth testing of soil, sediments, air particulates, wastewater, and drinking water to monitor contamination and persistence of PAH Mix G compounds.",
    link: "/metal/environmental-samples",
  },
  {
    name: "Biological Samples",
    icon: (
      <Activity className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Biomonitoring of human urine, blood, breast milk, and animal tissues to assess internal exposure to PAH Mix G compounds.",
    link: "/metal/biological-samples",
  },
  {
    name: "Consumer Products",
    icon: (
      <Package className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Advanced analysis of plastics, cosmetics, pharmaceuticals, and household products for PAH Mix G presence and leaching potential.",
    link: "/metal/consumer-products",
  },
];

const PahMixG = () => {
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
    "Isophorone",
    "Acenaphthylene",
    "Fluorene",
    "Hexachlorobenzene",
    "Phenanthrene",
    "Anthracene",
    "Benz[a]anthracene",
    "Chrysene",
    "Benzo[b]fluoranthene",
    "Benzo[k]fluoranthene",
    "Benzo[a]pyrene",
    "Indeno(1,2,3-cd)pyrene",
    "Dibenz[a,h]anthracene",
    "Benzo[ghi]perylene",
    "PCB 1",
    "PCB 3",
    "PCB 28",
    "PCB-52",
    "PCB 44",
    "PCB-70",
    "PCB 110",
    "PCB 143",
    "PCB 153",
    "PCB 204",
    "PCB 180",
    "PCB 204",
    "PCB 180",
  ];

  return (
    <Wrapper>
      <AnimatePresence>
        {!fadeOut && (
          <motion.section
            key="pah-mix-g-page"
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
                <ArrowLeft className="w-5 h-5" />back to Pollutant applications
              </Link>
            </div>

            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12 px-4">
              <h1 className="text-5xl md:text-7xl font-light text-[#153D63] mb-6">
                PAH Mix G Compounds
              </h1>
              <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
                PAH Mix E contains selected Polycyclic Aromatic Hydrocarbons commonly used 
                as reference standards. This mix supports reliable detection and monitoring 
                in food safety, environmental, and toxicological studies.</p>


              {/* Compounds List */}
              <div className="mt-10 max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold text-[#FFC000] mb-6 text-center">
                  Available Compounds
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

export default PahMixG;
