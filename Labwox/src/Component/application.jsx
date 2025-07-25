import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Applications with their respective links
const applications = [
  { name: "Food Composition Analysis", link: "/foodcompo" },
  { name: "Pollutant Analysis", link: "/pollutantanaly" },
  { name: "Water Quality Analysis", link: "/waterqua" },
  { name: "Pesticide Residue Analysis", link: "/pesticide" },
  { name: "Compositional Analysis", link: "/composition" },
];

const Application = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-16 lg:py-24 bg-neutral-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/molecule-pattern.svg')] bg-repeat" />


        {/* Navigation - Only Previous */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/chemxpert"
            className="flex items-center gap-2 hover:text-white text-orange-500 transition"
          >
            <ArrowLeft size={20} /> Back to ChemXpert
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#153D63]">
            Select Application
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Choose the chemical application you want to explore. Each selection
            provides detailed insights, procedures, and resources to support your research journey.
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

export default Application;