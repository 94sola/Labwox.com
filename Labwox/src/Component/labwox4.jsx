import React from "react";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { FlaskConical, Atom } from "lucide-react";

// Test Tube SVG Icon
const TestTube = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M14 2L8 8v9a4 4 0 0 0 8 0V8l-2-6z" />
    <line x1="12" y1="13" x2="12" y2="17" />
  </svg>
);

// Reusable Heavy Metal Element Icon
const MetalIcon = ({ symbol, label, position, delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 9, delay }}
    className={`absolute text-gray-400 opacity-20 z-0 ${position}`}
  >
    <div className="text-5xl font-extrabold font-mono tracking-tight">{symbol}</div>
    <div className="text-xs text-center">{label}</div>
  </motion.div>
);

const Labwox = () => {
  return (
    <Wrapper>
      <section className="relative w-full bg-neutral-200 flex justify-center items-center px-16 py-28 overflow-hidden">
        {/* Floating Decorative Icons */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-12 left-10 text-sky-500 opacity-30"
        >
          <FlaskConical size={50} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
          className="absolute bottom-10 right-14 text-violet-900 opacity-30"
        >
          <Atom size={60} />
        </motion.div>
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 9 }}
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-blue-300 opacity-25"
        >
          <TestTube width={40} height={40} />
        </motion.div>

        {/* Heavy Metal Icons */}
        <MetalIcon symbol="Fe" label="Iron" position="right-24 top-[55%]" />
        <MetalIcon symbol="Zn" label="Zinc" position="left-16 top-1/3" delay={0.2} />
        <MetalIcon symbol="Pb" label="Lead" position="right-16 bottom-28" delay={0.4} />
        <MetalIcon symbol="Hg" label="Mercury" position="left-20 bottom-1/4" delay={0.6} />
        <MetalIcon symbol="Cu" label="Copper" position="right-1/4 top-[15%]" delay={0.8} />
        <MetalIcon symbol="Cd" label="Cadmium" position="left-[10%] bottom-[10%]" delay={1.0} />

        {/* Main Content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center sm:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:max-w-4xl w-full z-10">
          {/* About Card (Moved to the Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 16px rgba(0,0,0,0.2)",
            }}
            className="bg-white text-gray-800 shadow-2xl rounded-3xl p-10 sm:p-14 w-full max-w-lg 
                      lg:mr-[-3rem] lg:relative lg:top-1/2 lg:-translate-y-1/2 z-10 mt-10 lg:mt-0"
          >
            <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
              About Labwox
            </h1>
            <p className="text-md sm:text-lg text-gray-700 leading-relaxed text-center">
              Labwox is a science consulting company that helps laboratories and researchers
              achieve more with less. We specialize in collaborative research, laboratory
              productivity, and technical capacity-building, serving academic institutions,
              government agencies, and private labs across Nigeria.
            </p>
            <div className="flex justify-center mt-10">
              <Link
                to="/about"
                className="inline-block px-4 py-2 bg-[#FFC000] text-[#153D63] font-semibold text-lg rounded-xl hover:bg-[#e6ae00] transition duration-300 shadow-lg hover:shadow-2xl"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Blue Content Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-[#153D63] text-white shadow-xl rounded-3xl py-16 sm:py-20 px-8 sm:px-14 max-w-xl h-auto lg:h-[620px] flex flex-col justify-center items-center relative z-0 mt-10 lg:mt-0"
          >
            <h2 className="text-xl sm:text-3xl font-semibold mb-4 text-center">
              Consulting
            </h2>
            <p className="text-sm sm:text-lg leading-relaxed text-center">
              We guide laboratories, institutions, and scientists in solving analytical challenges through custom advisory services, audits, and performance optimization.
            </p>
            <div className="flex justify-center mt-8">
              <Link
                to="/consulting"
                className="inline-block px-4 py-2 bg-[#FFC000] text-[#153D63] font-semibold text-base rounded-xl hover:bg-[#e6ae00] transition duration-300 shadow-md hover:shadow-xl"
              >
                Learn more
              </Link>
            </div>
            <div className="mt-6 border-t border-blue-400 pt-6">
              <h2 className="text-xl sm:text-3xl font-semibold mb-4 text-center">
                Application Training
              </h2>
              <p className="text-sm sm:text-lg leading-relaxed text-center">
                Practical, hands-on training for laboratory professionals, focused on instrumentation, data interpretation, and real-world application of advanced analytical methods.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                to="/training"
                className="inline-block px-4 py-2 bg-[#FFC000] text-[#153D63] font-semibold text-base rounded-xl hover:bg-[#e6ae00] transition duration-300 shadow-md hover:shadow-xl"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Labwox;
