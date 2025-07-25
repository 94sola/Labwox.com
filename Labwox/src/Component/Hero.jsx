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
      {/* 🌐 Desktop Layout */}
      <div className="hidden lg:block relative bg-white px-4 py-10 lg:px-0 lg:rounded-t-[40px] shadow-xl min-h-screen flex flex-col justify-center">
        {/* Decorative SVGs */}
        <div
          className="absolute hidden lg:block top-10 left-10 opacity-60 z-0 animate-spinSlow"
          style={{ animationDelay: '0s' }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#b8149d" strokeWidth="1.5">
            <circle cx="12" cy="12" r="2" />
            <path d="M12 2a10 10 0 0 1 0 20" />
            <path d="M2 12a10 10 0 0 1 20 0" />
          </svg>
        </div>

        

       

        {/* ⚛️ Molecule-style Atom */}
        <div
          className="absolute top-24 right-[55%] opacity-30 z-0  animate-spinSlow"
          style={{ animationDelay: '0s' }}
        >
          <svg width="64" height="64" viewBox="0 0 100 100" fill="none" stroke="#252301" strokeWidth="2">
            <circle cx="50" cy="50" r="8" />
            <circle cx="30" cy="30" r="3" />
            <circle cx="70" cy="30" r="3" />
            <circle cx="30" cy="70" r="3" />
            <circle cx="70" cy="70" r="3" />
            <line x1="50" y1="50" x2="30" y2="30" />
            <line x1="50" y1="50" x2="70" y2="30" />
            <line x1="50" y1="50" x2="30" y2="70" />
            <line x1="50" y1="50" x2="70" y2="70" />
          </svg>
        </div>

        

        {/* 🫧 Bubble Group */}
        

        <div
          className="absolute bottom-[74%] right-[40%] opacity-20  animate-spinSlow"
          style={{ animationDelay: '1.5s' }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#423904" strokeWidth="1.2">
            <circle cx="30" cy="30" r="12" />
            <circle cx="50" cy="50" r="8" />
            <circle cx="70" cy="30" r="6" />
          </svg>
        </div>
       
          {/* Floating Heavy Metals */}
        <HeavyMetalLabel symbol="Sb" label="Antimony" className="bottom-[20%] left-[5%]" color="text-green-500" delay={0.2} />
        <HeavyMetalLabel symbol="Bi" label="Bismuth" className="top-[30%] right-[15%]" color="text-blue-500" delay={0.4} />
        <HeavyMetalLabel symbol="Tl" label="Thallium" className="bottom-[30%] right-[10%]" color="text-yellow-500" delay={0.6} />
        <HeavyMetalLabel symbol="Cr" label="Chromium" className="top-[10%] right-[20%]" color="text-purple-500" delay={0.8} />
        <HeavyMetalLabel symbol="Ni" label="Nickel" className="bottom-[10%] left-[25%]" color="text-pink-500" delay={1.0} />
        <HeavyMetalLabel symbol="U" label="Uranium" className="top-[60%] right-[30%]" color="text-emerald-500" delay={1.2} />
        <HeavyMetalLabel symbol="Th" label="Thorium" className="top-[15%] left-[30%]" color="text-indigo-500" delay={1.4} />
        <HeavyMetalLabel symbol="Co" label="Cobalt" className="bottom-[15%] right-[5%]" color="text-orange-500" delay={1.6} />
        <HeavyMetalLabel symbol="V" label="Vanadium" className="top-[5%] right-[5%]" color="text-cyan-500" delay={1.8} />

       
        {/* 🔬 Additional Floating Circle Pattern */}
        <div
          className="absolute bottom-32 right-32 opacity-40 z-0  animate-spinSlow"
          style={{ animationDelay: '0.5s' }}
        >
          <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#b81479" strokeWidth="3">
            <circle cx="50" cy="50" r="10" />
            <circle cx="35" cy="50" r="5" />
            <circle cx="65" cy="50" r="5" />
          </svg>
        </div>
        <div
          className="absolute top-[3%] left-[20%] opacity-40 z-0 animate-spinSlow"
          style={{ animationDelay: '0.5s' }}
        >
          <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="#ce0000" strokeWidth="3">
            <circle cx="50" cy="50" r="10" />
            <circle cx="35" cy="50" r="5" />
            <circle cx="65" cy="50" r="5" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto space-y-16 z-10 relative lg:pt-36 px-4 lg:px-8">
          

          {/* Hero */}
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="space-y-6 text-gray-800">
              <h1 className="text-4xl md:text-7xl font-medium text-neutral-900 leading-tight">
                Classic Research, Modern Tools
              </h1>
              <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
                Labwox offers a unique solution to support researchers and academics in planning, executing, and delivering high-quality scientific work through streamlined lab access and collaboration.
              </p>
              <Link
                to="/labsoft"
                className="inline-block bg-[#153D63] text-white px-6 py-3 rounded-lg hover:bg-[#102B4E] transition-all text-sm font-medium shadow-md"
              >
                Get started
              </Link>
            </div>
            <div className="flex justify-end items-center">
              <img
                src={hero}
                alt="Labwox Hero"
                className="w-full max-w-2xl object-contain rounded-l-2xl"
              />
            </div>
          </div>

          {/* Trusted Partners */}
          <div className="text-center space-y-8">
            <h4 className="text-base font-light text-gray-800">TRUSTED BY INDUSTRY LEADERS</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 justify-center">
              {[lasepa, son, nirma, scientific, ctx].map((logo, index) => (
                <div key={index} className="p-2 flex justify-center items-center">
                  <img src={logo} alt={`Logo ${index}`} className="w-20 h-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Layout */}
      <div className="block lg:hidden bg-white px-4 py-12 space-y-12">
        {/* Mobile Hero */}
        <div className="space-y-6 text-gray-800">
          <h1 className="text-3xl font-semibold text-neutral-900 leading-snug">
            Classic Research, Modern Tools, No Shortcuts
          </h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Labwox offers a unique solution to support researchers and academics in planning, executing, and delivering high-quality scientific work.
          </p>
          <Link
            to="/labsoft"
            className="inline-block bg-[#153D63] text-white px-5 py-3 rounded-md text-sm font-medium shadow-md"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Hero Image */}
        <div className="w-full flex justify-center">
          <img
            src={hero}
            alt="Labwox Mobile Hero"
            className="w-full max-w-sm rounded-lg object-contain"
          />
        </div>

        {/* Mobile Trusted Partners */}
        <div className="text-center space-y-4">
          <h4 className="text-base font-light text-gray-800">TRUSTED BY INDUSTRY LEADERS</h4>
          <div className="grid grid-cols-2 gap-4">
            {[lasepa, son, nirma, scientific, ctx].map((logo, index) => (
              <div key={index} className="p-2 flex justify-center items-center">
                <img src={logo} alt={`Partner ${index}`} className="w-16 h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Labwox;
