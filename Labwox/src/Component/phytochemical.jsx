import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Applications with their respective links (under Phytochemical Analysis)
const applications = [
  { name: "Alkaloids", link: "/alkaloids" },
  { name: "Flavonoids", link: "/flavonoids" },
  { name: "Phenolic Compounds", link: "/phenolics" },
  { name: "Tannins", link: "/tannins" },
  { name: "Saponins", link: "/saponins" },
  { name: "Other Secondary Metabolites", link: "/others" },
];

const PhytochemicalAnalysis = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-16 mb-10 lg:py-24 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/molecule-pattern.svg')] bg-repeat" />

        {/* Navigation - Back */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/composition"
            className="flex items-center gap-2 hover:text-white text-[#FFC000] transition"
          >
          <ArrowLeft size={20} /> Back to Composition
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-wide">
            Phytochemical Analysis
          </h1>
          <p className="mt-4 text-lg text-gray-50 max-w-5xl mx-auto leading-relaxed">
            Advanced analytical techniques to identify, quantify, and characterize
            bioactive plant compounds. From alkaloids and flavonoids to tannins,
            saponins, and other secondary metabolites, our methods ensure precise
            and reproducible results that support research, nutraceuticals,
            pharmaceuticals, and food industries.
          </p>
        </div>

        {/* Application Grid */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(21, 61, 99, 0.15)",
              }}
              className="bg-neutral-900 border border-neutral-200 hover:border-[#FFC000] rounded-xl p-6 text-center text-white hover:shadow-lg hover:shadow-[#ffc00033] transition"
            >
              <Link to={app.link}>
                <p className="text-white text-lg md:text-xl font-medium px-4 text-center">
                  {app.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default PhytochemicalAnalysis;
