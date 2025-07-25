import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Analyses under Water Quality
const analyses = [
  { name: "pH Measurement", link: "/ph-measurement" },
  { name: "Turbidity Analysis", link: "/turbidity" },
  { name: "Dissolved Oxygen (DO)", link: "/dissolved-oxygen" },
  { name: "Conductivity & TDS", link: "/conductivity-tds" },
  { name: "Chemical Oxygen Demand (COD)", link: "/cod" },
  { name: "Biological Oxygen Demand (BOD)", link: "/bod" },
];

const WaterQuality = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-16 mb-10 lg:py-24 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/molecule-pattern.svg')] bg-repeat" />
        
        {/* Navigation */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/application"
            className="flex items-center gap-2 hover:text-[#153D63] text-orange-500 transition"
          >
            <ArrowLeft size={20} /> Back to Application
          </Link>
        </div>
        
        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#FFC000] tracking-wide">
            Water Quality Analysis
          </h1>
          <p className="mt-4 text-lg text-gray-50 max-w-3xl mx-auto leading-relaxed">
            Accurate and reliable testing to evaluate water safety and purity. 
            Our comprehensive methods cover physical, chemical, and biological parameters 
            to ensure compliance with environmental and health standards.
          </p>
        </div>

        {/* Analysis Grid */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {analyses.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(21, 61, 99, 0.15)",
              }}
              className="border border-[#FFC000] rounded-lg overflow-hidden cursor-pointer group backdrop-blur-sm"
            >
              <Link to={test.link}>
                <div className="h-20 flex items-center justify-center bg-white transition-colors duration-300 group-hover:bg-[#153D63]">
                  <p className="text-[#153D63] group-hover:text-white text-lg md:text-xl font-medium px-4 text-center">
                    {test.name}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default WaterQuality;
