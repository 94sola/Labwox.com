import React from "react";
import Wrapper from "./wrapper";
import hero from "../assets/image/heroImg.png";
import { Link } from "react-router-dom";

// Floating metal label
const HeavyMetalLabel = ({ symbol, label, className, color, delay = 0 }) => (
  <div
    className={`absolute z-0 opacity-30 ${color} ${className} animate-float-slow`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="text-3xl font-extrabold font-mono tracking-tight">{symbol}</div>
    <div className="text-sm text-center">{label}</div>
  </div>
);

const Labwox = () => {
  const bannerTexts = [
    "PAHs",
    "ICP-OES",
    "PCBs",
    "Organochlorine Pesticides",
    "VOCs",
    "Headspace",
    "Organophosphate pesticides",
    "Water Quality",
    "Physicochemical Properties",
    "TPHs",
    "Pyrethroid Pesticides",
    "GC-FID",
    "Heavy Metals",
    "Soil Pollution",
    "GC-MS",
    "QUECHERS",
    "Nitrates",
    "Dissolved Oxygen",
    "PBDEs",
    "Phthalate Esters", 
  ];

  return (
    <Wrapper>
      {/* Desktop Layout */}
      <div className="relative bg-white px-8 py-10 lg:pb-40 lg:pt-28 lg:rounded-t-[40px] shadow-xl flex flex-col justify-center overflow-hidden hidden lg:block">
        {/* Decorative SVGs */}
        <div className="absolute top-10 left-10 opacity-60 z-0 animate-spinSlow">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#b8149d" strokeWidth="1.5">
            <circle cx="12" cy="12" r="2" />
            <path d="M12 2a10 10 0 0 1 0 20" />
            <path d="M2 12a10 10 0 0 1 20 0" />
          </svg>
        </div>

        {/* Atom style */}
        <div className="absolute top-24 right-[55%] opacity-30 z-0 animate-spinSlow">
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

        {/* Main Content */}
        <div className="w-full max-w-8xl mx-4 lg:mx-10 space-y-16 z-10 relative pt-8 lg:pt-10">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="space-y-6 text-gray-800">
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium text-neutral-900 leading-tight">
                Classic Research, Modern Tools
              </h1>
              <p className="text-base md:text-2xl font-light text-gray-700 leading-relaxed">
                Labwox offers a unique solution to support researchers <br /> in executing high-quality scientific work. 
              </p>
              <Link
                to="/application"
                className="inline-block bg-[#153D63] text-white px-6 py-3 rounded-lg hover:bg-[#102B4E] transition-all text-sm font-medium shadow-md"
              >
                Get started
              </Link>
            </div>
            <div className="flex justify-end px-8 items-center">
              <img
                src={hero}
                alt="Labwox Hero"
                className="w-full max-w-3xl object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scrolling Banner Desktop */}
        <div className="w-full mt-20 bg-neutral-100 py-2 overflow-hidden">
          <div className="inline-flex gap-8 animate-scroll whitespace-nowrap text-[#153D63] text-xl font-thin px-4">
            {bannerTexts.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </div>
        </div>

        {/* Floating Heavy Metals */}
        <HeavyMetalLabel symbol="Pb" label="Lead" className="bottom-[5%] left-[25%]" color="text-red-500" delay={1.2} />
        <HeavyMetalLabel symbol="Hg" label="Mercury" className="bottom-[3%] right-[5%]" color="text-yellow-400" delay={1.4} />
        <HeavyMetalLabel symbol="Cd" label="Cadmium" className="bottom-[6%] left-[50%]" color="text-pink-500" delay={1.6} />
        <HeavyMetalLabel symbol="As" label="Arsenic" className="bottom-[3%] right-[27%]" color="text-lime-500" delay={1.8} />
        <HeavyMetalLabel symbol="Sb" label="Antimony" className="bottom-[4%] left-[5%]" color="text-teal-500" delay={2.0} />
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden bg-white px-4 py-12 space-y-12">
        <div className="space-y-6 text-gray-800">
          <h1 className="text-4xl font-medium text-neutral-900 leading-snug">
            Classic Research, Modern Tools
          </h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Labwox helps researchers and academics with high-quality scientific work through streamlined collaboration and access.
          </p>
          <Link
            to="/labsoft"
            className="inline-block bg-[#153D63] text-white px-5 py-3 rounded-md text-sm font-medium shadow-md"
          >
            Get started
          </Link>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={hero}
            alt="Labwox Mobile Hero"
            className="w-full max-w-sm rounded-lg object-contain"
          />
        </div>

        {/* Scrolling Banner Mobile */}
        <div className="w-full bg-neutral-100 py-3 overflow-hidden">
          <div className="inline-flex gap-4 animate-scroll whitespace-nowrap text-[#153D63] text-lg font-thin px-4">
            {bannerTexts.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Labwox;
