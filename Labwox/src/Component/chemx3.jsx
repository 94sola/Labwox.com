import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import { motion } from "framer-motion";

import pollutant from "../assets/image/pollution.jpg";
import pesticide from "../assets/image/pesticide.jpg";
import foodwater from "../assets/image/foodwater.jpeg";
import compositional from "../assets/image/compositional.png";

const items = [
  {
    title: " Environmental Pollutants",
    image: pollutant,
    description:
      "Identify and quantify pollutants in soil, air, and water. Our capabilities cover hydrocarbons, volatile and semi-volatile compounds, and persistent organic pollutants for comprehensive environmental assessment.",
    link: "/pollutantanaly",
    linkLabel: "Explore",
  },
  {
    title: "Pesticide Residues",
    image: pesticide,
    description:
      "Detect pesticide residues across diverse matrices with high sensitivity. Our validated methods ensure compliance with international standards and support food safety research.",
    link: "/pesticide",
    linkLabel: "Explore",
  },
  {
    title: "Food and Water Quality",
    image: foodwater,
    description:
      "Ensure safety and quality with advanced testing of food and water samples. From essential minerals to heavy metals, we deliver reliable results that support nutrition, safety, and regulatory compliance.",
    link: "/foodwater",
    linkLabel: "Explore",
  },
  {
    title: "Compositional Analyses",
    image: compositional,
    description:
      "Understand what your samples are made of. We provide detailed profiling of chemical composition, enabling insights into product quality, authenticity, and research innovation.",
    link: "/composition",
    linkLabel: "Explore",
  },
];

const Chemx = () => {
  return (
    <Wrapper>
      <section className="py-14 px-4 bg-white w-full mb-8 rounded-sm">
        {/* === Section Header === */}
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-[#0B3D2E] font-semibold text-4xl md:text-5xl mt-4">
            Areas of Competence
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Explore our specialized areas of expertise supporting advanced
            research and analysis.
          </p>
        </div>

        {/* === Cards Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-8 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* === Image === */}
              <div className="relative w-full h-40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* === Text Content === */}
              <div className="flex-1 p-6 flex flex-col">
                <h3
                  className={`${
                    item.title === "Food and Water Quality" ||
                    item.title === "Compositional Analyses"
                      ? "text-2xl"
                      : "text-2xl"
                  } font-semibold text-[#0B3D2E]`}
                >
                  {item.title}
                </h3>

                {/* Decorative Line */}
                <div className="w-16 h-1 bg-green-300 rounded-full mt-3 mb-4"></div>

                <p className="text-gray-700 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* CTA Button */}
                <div className="flex justify-center mt-6">
                  <Link
                    to={item.link}
                    className="inline-block px-12 py-1.5 rounded-md bg-[#0B3D2E] text-white text-sm font-medium hover:bg-[#0d4e3c] transition-colors duration-300"
                  >
                    {item.linkLabel}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Chemx;
