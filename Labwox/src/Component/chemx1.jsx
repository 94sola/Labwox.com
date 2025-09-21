import React from "react";
import Wrapper from "./wrapper";
import { Lightbulb, FlaskConical, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Engage",
    icon: <Lightbulb className="w-10 h-10 text-[#FFC000]   mb-4" />,
    description:
      "Institutions submit project ideas or sample requests aligned with Labwox’s areas of expertise.",
  },
  {
    title: "Analyze",
    icon: <FlaskConical className="w-10 h-10 text-[#FFC000] mb-4" />,
    description:
      "Labwox conducts a defined number of free pilot tests within our areas of competence.",
  },
  {
    title: "Collaborate",
    icon: <Users className="w-10 h-10 text-[#FFC000] mb-4" />,
    description:
      "Results are shared openly with faculty and researchers, providing a basis for joint publications, proposals, or expanded research.",
  },
  {
    title: "Grow",
    icon: <TrendingUp className="w-10 h-10 text-[#FFC000] mb-4" />,
    description:
      "Successful pilots evolve into structured paid collaborations, including full research projects, training programs, and institutional capacity development.",
  },
];

const Chemx = () => {
  return (
    <Wrapper>
      <section className="bg-white text-black py-20 px-4 my-10 w-full rounded-lg">
        {/* === Section Header === */}
        <div className="max-w-8xl mx-auto text-center mb-12">
          <h2 className="text-[#0B3D2E] font-semibold text-4xl md:text-5xl mt-4">
            How Chemxpert Works
          </h2>
          <h6 className="text-gray-900 max-w-6xl mx-auto py-2 font-light text-2xl">
            Engage – Institutions submit project ideas or sample requests aligned
            with Labwox’s areas of expertise
          </h6>
        </div>

        {/* === Steps Grid === */}
        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-[#0B3D2E] p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {item.icon}

              <div className="relative group">
                <h3 className="text-xl font-medium text-gray-100 mb-2">
                  {item.title}
                </h3>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 bg-[#FFC000] rounded-full group-hover:shadow-[0_0_8px_#f97316] transition-all duration-300"
                ></motion.span>
              </div>

              <p className="text-gray-100 text-lg mt-4">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Chemx;
