import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Multi residue applications
const multi = [
  { name: "Mix A [Pyrethroids and Organophosphates]", link: "/phos" },
  { name: "Mix B [Herbicides, Fungicides, Organochlorines]", link: "/Herbicides" },
  { name: "Mix C [Organochlorine Pesticides]", link: "/orgnophos" },
  { name: "Mix D [Fungicides, Organophosphates, Pyrethroids] ", link: "/Herb" },
];

// Single residue applications
const single = [
  { name: "Glyphosate & AMPA Analysis", link: "/glyphosate" },
  { name: "Paraquat & Diquat Testing", link: "/paraquat" },
  { name: "2,4-D Herbicide Determination", link: "/24d" },
  { name: "Atrazine Quantification", link: "/atrazine" },
  { name: "Targeted Compound Method", link: "/multi" },
];

const Pesticide = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-16 lg:py-24 mb-10 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/molecule-pattern.svg')] bg-repeat" />

        {/* Back Navigation */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/application"
            className="flex items-center gap-2 hover:text-white text-[#FFC000] transition"
          >
            <ArrowLeft size={20} /> Back to application 
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FFC000] tracking-wide">
            Pesticide Residue Analysis
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            High-precision analytical techniques for detecting and quantifying 
            pesticide residues in food and agricultural products. Our methods 
            ensure <span className="text-[#FFC000] font-medium">accuracy</span>, 
            <span className="text-[#FFC000] font-medium"> reliability</span>, 
            and <span className="text-[#FFC000] font-medium">regulatory compliance</span> 
            across both single and multi-residue testing.
          </p>
        </div>

        {/* Single Residue Section */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-8 text-white border-b border-[#FFC000] inline-block pb-2">
            Single Residue Analysis
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {single.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 30px rgba(255, 192, 0, 0.2)",
                }}
                className="border border-[#FFC000] rounded-xl overflow-hidden cursor-pointer group bg-white/5 backdrop-blur-md"
              >
                <Link to={app.link}>
                  <div className="h-24 flex items-center justify-center bg-white transition-colors duration-300 group-hover:bg-[#FFC000]">
                    <p className="text-[#153D63] group-hover:text-black text-lg md:text-xl font-medium px-6 text-center">
                      {app.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Multi Residue Section */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-white border-b border-[#FFC000] inline-block text-center pb-2">
            Multi Residue Analysis
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {multi.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 30px rgba(255, 192, 0, 0.2)",
                }}
                className="border border-[#FFC000] rounded-xl overflow-hidden cursor-pointer group bg-white/5 backdrop-blur-md"
              >
                <Link to={app.link}>
                  <div className="h-24 flex items-center justify-center  bg-white transition-colors duration-300 group-hover:bg-[#FFC000]">
                    <p className="text-[#153D63] group-hover:text-black text-lg md:text-xl font-medium px-4 text-center">
                      {app.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Pesticide;
