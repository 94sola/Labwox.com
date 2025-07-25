import React, { useState } from "react";
import Wrapper from "./wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Beaker, Droplets, Trees, Fish, ArrowLeft } from "lucide-react";

const samples = [
  {
    name: "Soil & Sediment",
    icon: <Trees className="w-10 h-10 text-orange-600" />,
    description: "Testing soil and sediment for dioxin contamination.",
    link: "/metal/soil-sediment",
  },
  {
    name: "Water Samples",
    icon: <Droplets className="w-10 h-10 text-orange-600" />,
    description: "Analyzing water for dioxins to monitor pollution.",
    link: "/metal/water-samples",
  },
  {
    name: "Food Products",
    icon: <Fish className="w-10 h-10 text-orange-600" />,
    description: "Detecting dioxin levels in foods like fish and dairy.",
    link: "/metal/food-products",
  },
  {
    name: "Industrial Waste",
    icon: <Beaker className="w-10 h-10 text-orange-600" />,
    description: "Testing waste materials for dioxin emissions.",
    link: "/metal/industrial-waste",
  },
];

const Metal = () => {
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
    }, 500); // matches fade-out duration
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {!fadeOut && (
          <motion.section
            key="dioxin-page"
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
                to="/application"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors duration-200 font-medium"
              >
                <ArrowLeft className="w-5 h-5" /> Back to Applications
              </Link>
            </div>

            {/* Header */}
            <div className="max-w-5xl mx-auto text-center mb-12 px-4">
              <h1 className="text-5xl md:text-7xl font-light text-[#153D63] mb-6">
                Dioxin Analysis
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong>Dioxins</strong> are highly toxic chemical compounds that persist in the environment and accumulate in living organisms.
                Chemxpert offers precise and accredited testing for detecting dioxins in environmental and biological samples.
              </p>
            </div>

            {/* Sample Types */}
            <h2 className="text-4xl font-normal text-[#153D63] text-center mb-8">
              Sample Types
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
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  onClick={() => handleClick(sample.link)}
                  style={{ cursor: loading ? "wait" : "pointer" }}
                >
                  <div className="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-orange-500 transition-all duration-300 text-center flex flex-col items-center h-full group">
                    {sample.icon}
                    <h3 className="text-2xl font-normal text-gray-800 mt-4 mb-2 group-hover:text-orange-600 transition-colors duration-200">
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

export default Metal;
