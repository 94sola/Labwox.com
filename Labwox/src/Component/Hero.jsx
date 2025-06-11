import Wrapper from "./wrapper";
import hero from "../assets/image/heroImg.png";
import { Link } from "react-router-dom";
import lasepa from '../assets/image/LASEPA.jpg';
import son from '../assets/image/SON-logo.jpg';
import nirma from '../assets/image/nirma-logo.jpg';
import scientific from '../assets/image/ls-scientific.png';
import ctx from '../assets/image/ctx-ion.png';
import { motion } from "framer-motion";

const Labwox = () => {
  return (
    <Wrapper>
      {/* 🌐 Tablet & Desktop Layout */}
      <div className="hidden lg:block relative overflow-visible bg-white flex items-center justify-center px-4 py-12 lg:px-0 lg:rounded-t-[40px] shadow-xl min-h-[600px]">
        {/* 🎈 Floating SVGs: Atom / Molecule / Bubble */}
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

        <div
          className="absolute bottom-28 right-28 opacity-50 z-0 animate-spinSlow"
          style={{ animationDelay: '1s' }}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.5">
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

        <div
          className="absolute bottom-32 left-[20%] opacity-30 z-0  animate-spinSlow"
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
          className="absolute top-[74%] left-[70%] opacity-20  animate-spinSlow"
          style={{ animationDelay: '1.5s' }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#423904" strokeWidth="1.2">
            <circle cx="30" cy="30" r="12" />
            <circle cx="50" cy="50" r="8" />
            <circle cx="70" cy="30" r="6" />
          </svg>
        </div>

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

        {/* Main Content (Tablet/Desktop Only) */}
        <div className="w-full max-w-9xl space-y-16 z-10 relative">
          {/* Collaborate Section */}
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 px-10 lg:px-20 items-center">
            <h3 className="text-base font-light text-gray-800 whitespace-nowrap lg:text-right flex items-center">
              <span className="text-red-700 text-3xl mr-2">.</span>COLLABORATE
            </h3>
            <div className="bg-[#153D63] text-slate-100 w-full max-w-sm p-6 rounded-2xl shadow-md">
              <h5 className="font-semibold mb-2 text-lg">Who is Labwox</h5>
              <p className="text-sm leading-relaxed">
                Labwox supports academic and industrial research by providing reliable analytical services, expert insights, and custom project collaboration.
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 items-center pl-4 lg:pl-20 gap-12">
            <div className="space-y-6 text-gray-800">
              <h1 className="text-3xl md:text-5xl lg:text-8xl font-medium text-neutral-900 leading-normal">
                Classic Research, Modern Tools, No Shortcuts
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-light text-gray-700 py-10 leading-relaxed">
                Labwox offers a unique solution to support researchers and academics in planning, executing, and delivering high-quality scientific work through streamlined lab access and collaboration.
              </p>
              <Link
                to="/labsoft"
                className="inline-block bg-[#153D63] text-slate-100 px-6 py-3 rounded-lg hover:bg-[#152d42] transition-all text-sm font-medium shadow-md"
              >
                Get started
              </Link>
            </div>
            <div className="flex justify-end items-center">
              <img
                src={hero}
                alt="Labwox Hero"
                className="w-full max-w-xl rounded-l-2xl lg:max-w-2xl xl:max-w-3xl object-contain"
              />
            </div>
          </div>

          {/* Trusted Partners */}
          <div className="text-center space-y-8">
            <h4 className="nav text-base font-light md:text-lg text-gray-800">
              TRUSTED BY INDUSTRY LEADERS
            </h4>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center px-6">
              {[lasepa, son, nirma, scientific, ctx].map((logo, index) => (
                <div
                  key={index}
                  className="bg-transparent rounded-lg p-2 flex justify-center items-center"
                >
                  <img
                    src={logo}
                    alt={`Company ${index + 1}`}
                    className="w-20 h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Layout */}
      <div className="block lg:hidden bg-white px-4 py-12 space-y-12">
        {/* Hero Content (Mobile) */}
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

        {/* Hero Image */}
        <div className="w-full flex justify-center">
          <img
            src={hero}
            alt="Labwox Mobile Hero"
            className="w-full max-w-sm rounded-lg object-contain"
          />
        </div>

        {/* Trusted Partners (Mobile) */}
        <div className="text-center space-y-4">
          <h4 className="text-base font-light text-gray-800">
            TRUSTED BY INDUSTRY LEADERS
          </h4>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            {[lasepa, son, nirma, scientific, ctx].map((logo, index) => (
              <div
                key={index}
                className="bg-transparent p-2 flex justify-center items-center"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-16 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Labwox;
