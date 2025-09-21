import React from "react";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";

// Import your vector images
import classroom from "../assets/image/lab1.jpg";
import tools from "../assets/image/labwox1.jpg";
import train from "../assets/image/labwox2.jpg";

export default function LabwoxFeatures() {
  const features = [
    {
      title: "Modern Tools, Zero Capital Investment",
      desc: "Access advanced instrumentation without the cost burden.",
      img: tools,
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
      border: "bg-gradient-to-br from-purple-400 via-purple-300 to-purple-200",
    },
    {
      title: "Train the Next Generation",
      desc: "Build student proficiency through blended training and supervised lab work.",
      img: train,
      bg: "bg-gradient-to-br from-pink-50 to-pink-100",
      border: "bg-gradient-to-br from-pink-400 via-pink-300 to-pink-200",
    },
    {
      title: "From Classroom to Publication",
      desc: "Transform ideas into high-quality, publishable research with expert support.",
      img: classroom,
      bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      border: "bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200",
    },
  ];

  return (
    <Wrapper>
      <section className="relative bg-white px-6 py-10 overflow-hidden my-10">
        {/* ===== Decorative Background ===== */}
        <div className="absolute top-0 left-0 w-72 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-80 bg-pink-200 rounded-full blur-3xl opacity-20 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          {/* ===== Heading ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-thin text-gray-800 leading-tight">
              Empowering Research. <br /> Building Capacity.
            </h1>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              We go beyond testing services — Labwox equips institutions with
              the tools, training, and partnerships to drive modern research
              and student success.
            </p>
          </motion.div>

          {/* ===== Cards ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* ===== Top Two Cards ===== */}
            {features.slice(0, 2).map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative rounded-3xl p-[2px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 min-h-[350px]"
              >
                {/* Gradient Border */}
                <div
                  className={`${f.border} absolute inset-0 rounded-3xl opacity-80`}
                ></div>

                {/* Inner Content */}
                <div
                  className={`${f.bg} relative rounded-3xl p-10 flex flex-col items-center text-center`}
                >
                  <div className="flex justify-center mb-6 w-72 h-40 overflow-hidden rounded-2xl">
                    <motion.img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-full object-cover drop-shadow-md hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.08 }}
                    />
                  </div>
                  <h2 className="text-2xl font-normal text-gray-800 mb-3">
                    {f.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* ===== Bottom Full-Width Card ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative rounded-3xl p-[2px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 max-w-sm mx-auto md:col-span-2"
            >
              {/* Gradient Border */}
              <div
                className={`${features[2].border} absolute inset-0 rounded-3xl opacity-80`}
              ></div>

              {/* Inner Content */}
              <div
                className={`${features[2].bg} relative rounded-3xl p-8 flex flex-col items-center text-center`}
              >
                <div className="flex justify-center mb-6 w-72 h-40 overflow-hidden rounded-2xl">
                  <motion.img
                    src={features[2].img}
                    alt={features[2].title}
                    className="w-full h-full object-cover drop-shadow-md hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.08 }}
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-3">
                  {features[2].title}
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xs mx-auto">
                  {features[2].desc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
