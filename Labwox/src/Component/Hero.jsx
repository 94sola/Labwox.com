import Wrapper from "./wrapper";
import hero from "../assets/image/heroImg.png";
import { Link } from "react-router-dom";
import lasepa from '../assets/image/LASEPA.jpg';
import son from '../assets/image/SON-logo.jpg';
import nirma from '../assets/image/nirma-logo.jpg';
import scientific from '../assets/image/ls-scientific.png';
import ctx from '../assets/image/ctx-ion.png';
import { motion } from "framer-motion";

// Floating metal label
const HeavyMetalLabel = ({ symbol, label, className, color, delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 8, delay }}
    className={`absolute z-0 opacity-30 ${color} ${className}`}
  >
    <div className="text-3xl font-extrabold font-mono tracking-tight">{symbol}</div>
    <div className="text-xs text-center">{label}</div>
  </motion.div>
);

const Labwox = () => {
  return (
    <Wrapper>
      {/* Desktop View */}
      <div className="hidden lg:block relative bg-white px-4 py-10 lg:px-0 lg:rounded-t-[40px] shadow-xl min-h-screen flex flex-col justify-center">
        {/* Floating Heavy Metals */}
        <HeavyMetalLabel symbol="As" label="Arsenic" className="top-1/4 left-[10%]" color="text-red-500" />
        <HeavyMetalLabel symbol="Sb" label="Antimony" className="bottom-[20%] left-[5%]" color="text-green-500" delay={0.2} />
        <HeavyMetalLabel symbol="Bi" label="Bismuth" className="top-[30%] right-[15%]" color="text-blue-500" delay={0.4} />
        <HeavyMetalLabel symbol="Tl" label="Thallium" className="bottom-[30%] right-[10%]" color="text-yellow-500" delay={0.6} />
        <HeavyMetalLabel symbol="Cr" label="Chromium" className="top-[10%] right-[20%]" color="text-purple-500" delay={0.8} />
        <HeavyMetalLabel symbol="Ni" label="Nickel" className="bottom-[10%] left-[25%]" color="text-pink-500" delay={1.0} />
        <HeavyMetalLabel symbol="U" label="Uranium" className="top-[60%] right-[30%]" color="text-emerald-500" delay={1.2} />
        <HeavyMetalLabel symbol="Th" label="Thorium" className="top-[15%] left-[30%]" color="text-indigo-500" delay={1.4} />
        <HeavyMetalLabel symbol="Co" label="Cobalt" className="bottom-[15%] right-[5%]" color="text-orange-500" delay={1.6} />
        <HeavyMetalLabel symbol="V" label="Vanadium" className="top-[5%] right-[5%]" color="text-cyan-500" delay={1.8} />

        {/* Main Section */}
        <div className="relative z-10 grid grid-cols-2 gap-6 items-center justify-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="relative">
            <img src={hero} alt="Labwox Hero" className="rounded-3xl shadow-lg" />
          </div>

          {/* Text Section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">Who is Labwox?</h1>
            <p className="text-lg text-gray-600">
              Labwox Analytical Chemistry Laboratory is a distinguished research laboratory specializing in heavy metal analysis,
              sample testing, instrumentation training, and consulting.
            </p>
            <Link to="/about" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Learn More
            </Link>
          </div>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center items-center gap-10 mt-16 flex-wrap">
          <img src={lasepa} alt="LASEPA" className="h-12 object-contain" />
          <img src={son} alt="SON" className="h-12 object-contain" />
          <img src={nirma} alt="NIRMA" className="h-12 object-contain" />
          <img src={scientific} alt="LS Scientific" className="h-12 object-contain" />
          <img src={ctx} alt="CTX" className="h-12 object-contain" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden bg-white px-4 py-10 min-h-screen flex flex-col items-center justify-center">
        <img src={hero} alt="Labwox Hero" className="rounded-3xl shadow-lg mb-6 w-full max-w-md" />
        <h1 className="text-3xl font-bold text-gray-800 text-center">Who is Labwox?</h1>
        <p className="text-base text-gray-600 text-center mt-4">
          Labwox Analytical Chemistry Laboratory is a distinguished research laboratory specializing in heavy metal analysis,
          sample testing, instrumentation training, and consulting.
        </p>
        <Link to="/about" className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Learn More
        </Link>

        {/* Logos */}
        <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
          <img src={lasepa} alt="LASEPA" className="h-10 object-contain" />
          <img src={son} alt="SON" className="h-10 object-contain" />
          <img src={nirma} alt="NIRMA" className="h-10 object-contain" />
          <img src={scientific} alt="LS Scientific" className="h-10 object-contain" />
          <img src={ctx} alt="CTX" className="h-10 object-contain" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Labwox;
