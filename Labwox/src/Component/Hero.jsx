import React from "react";
import Wrapper from "./wrapper";
import hero from "../assets/image/heroImg.png";
import { Link } from "react-router-dom";


const HeavyMetalLabel = ({ symbol, label, className, color, delay = 0 }) => (
  <div
    className={`absolute z-0 opacity-30 ${color} ${className} animate-float-slow`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="text-3xl font-extrabold font-mono tracking-tight">{symbol}</div>
    <div className="text-sm text-center">{label}</div>
  </div>
);

const styles = `
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes scroll-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}
.animate-scroll-right {
  animation: scroll-right 30s linear infinite;
}
.group:hover .animate-scroll-left,
.group:hover .animate-scroll-right {
  animation-play-state: paused;
}
`;

const Labwox = () => {
  const bannerTexts = [
    "PAHs",
    "ICP-OES",
    "PCBs",
    "Organochlorine Pesticides",
    "VOCs",
    "Headspace",
    "Organophosphate Pesticides",
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
      
      <style>{styles}</style>

      <div className="relative bg-white px-8 py-10 lg:pb-40 lg:pt-8 lg:rounded-t-[40px] flex flex-col justify-center overflow-hidden hidden lg:block font-manrope">
        <div className="absolute top-10 left-10 opacity-60 z-0 animate-spinSlow">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#b8149d" strokeWidth="1.5">
            <circle cx="12" cy="12" r="2" />
            <path d="M12 2a10 10 0 0 1 0 20" />
            <path d="M2 12a10 10 0 0 1 20 0" />
          </svg>
        </div>
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
        <div className="w-full max-w-8xl mx-4 lg:mx-10 space-y-16 z-10 relative pt-8 lg:pt-10">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div className="space-y-6 text-gray-800">
              <h1 className="text-6xl max-w-2xl md:text-7xl lg:text-8xl font-extrabold text-neutral-900 leading-tight">
                Classic Research, Modern Tools
              </h1>
              <p className="text-base md:text-2xl max-w-3xl font-light text-[#153D63] leading-relaxed">
              We connect institutions and researchers with the resources,
              expertise, and infrastructure needed to conduct high-quality,
              publishable research.
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
        <div className="group w-full mt-20 bg-neutral-100 py-3 overflow-hidden relative border-t border-gray-200">
          <div className="flex whitespace-nowrap animate-scroll-left text-[#153D63] text-xl font-light tracking-wide px-6 gap-10">
            {[...bannerTexts, ...bannerTexts].map((text, index) => (
              <span
                key={index}
                className="hover:text-[#b8149d] transition-colors duration-300"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        <HeavyMetalLabel symbol="Pb" label="Lead" className="bottom-[5%] left-[25%]" color="text-red-500" delay={1.2} />
        <HeavyMetalLabel symbol="Hg" label="Mercury" className="bottom-[3%] right-[5%]" color="text-yellow-400" delay={1.4} />
        <HeavyMetalLabel symbol="Cd" label="Cadmium" className="bottom-[6%] left-[50%]" color="text-pink-500" delay={1.6} />
        <HeavyMetalLabel symbol="As" label="Arsenic" className="bottom-[3%] right-[27%]" color="text-lime-500" delay={1.8} />
        <HeavyMetalLabel symbol="Sb" label="Antimony" className="bottom-[4%] left-[5%]" color="text-teal-500" delay={2.0} />
      </div>


      <div className="block lg:hidden bg-white px-4 pt-12 max-w-7xl space-y-12">
        <div className="space-y-6 text-gray-800">
          <h1 className="text-4xl font-bold text-neutral-900 leading-snug">
            Classic Research, Modern Tools
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
            We connect institutions and researchers with the resources,
            expertise, and infrastructure needed to conduct high-quality,
            publishable research.
          </p>
          <Link
            to="/application"
            className="inline-block bg-[#153D63] text-white px-5 py-3 rounded-md text-sm font-bold shadow-md"
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

        <div className="group w-full bg-neutral-100 py-3 overflow-hidden relative border-t border-gray-200">
          <div className="flex whitespace-nowrap animate-scroll-right text-[#153D63] text-lg font-light tracking-wide px-4 gap-8">
            {[...bannerTexts, ...bannerTexts].map((text, index) => (
              <span
                key={index}
                className="hover:text-[#b8149d] transition-colors duration-300"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Labwox;
