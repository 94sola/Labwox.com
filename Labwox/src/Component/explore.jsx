import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import exploreImage from "../assets/image/unilag-training.jpg"; 
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Labwox = () => {
  return (
    <Wrapper>
      <section className="relative overflow-hidden w-full bg-white py-6 px-4 sm:px-6 lg:px-10 max-w-screen-2xl mx-auto my-6 shadow-sm rounded-md">
        {/* Floating SVG Decorations */}
        <div className="absolute top-4 left-4 opacity-10 w-10 h-10 rotate-12 z-0">
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="#153D63" strokeWidth="4" />
            <circle cx="32" cy="32" r="10" fill="#FFC000" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-6 opacity-10 w-12 h-12 rotate-45 z-0">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M32 4v56M4 32h56" stroke="#153D63" strokeWidth="4" />
            <circle cx="32" cy="32" r="8" fill="#FFC000" />
          </svg>
        </div>

        {/* Image Section */}
        <motion.div
          className="relative flex justify-center w-full mb-6 z-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-1/2">
            <img
              src={exploreImage}
              alt="Labwox Project"
              className="w-full h-96 rounded-2xl object-cover shadow-md"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#153D63] leading-tight">
            Scientific Collaboration in Action
          </h2>
          <p className="text-black/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
            Labwox conducted a successful training for staff at the DK Olukoya Central Reference
            Laboratory, University of Lagos, on the operation and application of the Microwave
            Plasma–Optical Emission Spectrometer (MP-OES).
          </p>
        </motion.div>

        {/* Divider with No Line Behind Text */}
        <div className="my-12 flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 py-1 text-[#153D63] font-semibold text-base sm:text-lg md:text-xl border border-gray-200 rounded-full shadow-sm bg-white whitespace-nowrap">
            Empowering <span className="text-[#FFC000]">Analytical</span> Excellence
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-[#FFC000] text-black font-medium text-sm sm:text-base rounded-md hover:bg-yellow-400 transition-all duration-200 shadow hover:shadow-md"
          >
            <FiArrowLeftCircle className="w-6 h-6" />
            <span className="hidden sm:inline"></span>
          </Link>
          <Link
            to="/consulting"
            className="flex items-center gap-2 px-4 py-2 bg-[#153D63] text-white font-medium text-sm sm:text-base rounded-md hover:bg-[#102B4E] transition-all duration-200 shadow hover:shadow-md"
          >
            <span className="hidden sm:inline"></span>
            <FiArrowRightCircle className="w-6 h-6" />
          </Link>
        </motion.div>
      </section>
    </Wrapper>
  );
};

export default Labwox;
