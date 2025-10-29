import React from "react";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";

const Chemx = () => {
  const sections = [
    {
      title: "Access Without Barriers",
      content:
        "Institutions gain exposure to cutting-edge instrumentation at no upfront cost.",
    },
    {
      title: "Capacity Building",
      content:
        "Students and researchers benefit from real-world data and hands-on engagement.",
    },
    {
      title: "Pathway to Partnership",
      content:
        "Pilot studies pave the way for funded projects, training programs, and long-term collaboration.",
    },
    {
      title: "Shared Visibility",
      content:
        "Joint publications and research outputs enhance the profile of both Labwox and the institution.",
    },
  ];

  return (
    <Wrapper>
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-green-50 py-24 px-6 overflow-hidden mb-10">
        {/* ===== Floating Glow Circles ===== */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-200/20 rounded-full blur-2xl animate-ping" />

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center mb-16"
        >
          <h1 className="text-[#0B3D2E] font-medium text-5xl sm:text-4xl md:text-5xl tracking-wide drop-shadow-lg">
            Why Chemxpert ?
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Discover the core values that make Chemxpert a trusted research partner.
          </p>
        </motion.div>

        {/* ===== Feature Blocks ===== */}
        <div className="relative z-10 max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/70 backdrop-blur-lg border border-yellow-200 rounded-3xl shadow-xl hover:shadow-2xl p-8 text-center group overflow-hidden"
            >
              {/* Glow hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/0 via-transparent to-green-200/0 opacity-0 group-hover:opacity-30 transition duration-500 rounded-3xl" />

              {/* Animated Icon Circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.4, type: "spring" }}
                className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-300 to-green-300 flex items-center justify-center text-4xl text-white shadow-lg"
              >
                {index + 1}
              </motion.div>

              <h2 className="text-lg font-medium text-[#0B3D2E] mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Chemx;
