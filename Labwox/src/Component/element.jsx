import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Applications with their respective links
const applications = [
  { name: "Heavy Metal", link: "/metal" },
  { name: "Mineral in Food", link: "/mineral" },
  { name: "Elemental Composition in Ores", link: "/Ores" },
];

const Elemental = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-16 my-10 lg:py-24 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/molecule-pattern.svg')] bg-repeat" />

        {/* Navigation - Only Previous */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/chemxpert"
            className="flex items-center gap-2 text-[#153D63] hover:text-orange-500 transition"
          >
            <ArrowLeft size={20} /> Back 
          </Link>
        </div>
        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#153D63]">
            Explore <strong className="text-orange-400">Elemental Analysis</strong> Applications
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Elemental analysis enables precise detection and quantification of chemical elements
            in a wide range of materials — from food and ores to environmental samples. 
            Select a category below to access in-depth methods, standards, and tools for 
            accurate scientific assessment.
          </p>
        </div>

        {/* Application Grid */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
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
              className="border border-[#153D63] rounded-lg overflow-hidden cursor-pointer group backdrop-blur-sm"
            >
              <Link to={app.link}>
                <div className="h-20 flex items-center justify-center bg-white transition-colors duration-300 group-hover:bg-[#153D63]">
                  <p className="text-[#153D63] group-hover:text-white text-lg md:text-xl font-medium px-4 text-center">
                    {app.name}
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

export default Elemental;
