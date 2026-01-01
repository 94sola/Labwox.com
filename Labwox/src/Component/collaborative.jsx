import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import heroImg from "../assets/image/collabarative.jpg";

const Labwox = () => {
  const styles = `
    @keyframes scroll-horizontal {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .scroll-banner {
      animation: scroll-horizontal 25s linear infinite;
    }

    .group:hover .scroll-banner {
      animation-play-state: paused;
    }
  `;

  const bannerTexts = [
    "PAHs",
    "PAH and PCB Mix",
    "PCBs",
    "Organochlorine",
    "VOCs",
    "Fungicides",
    "Organophosphate",
    "Water Quality",
    "Single residue",
    "TPHs",
    "Pyrethroid ",
    "Herbicides",
    "Heavy Metals",
    "Multi residue",
    "COD",
    "BOD",
    "Proximate Analysis of Foods",
    "Dissolved Oxygen",
    "PBDEs",
    "Phthalate Esters",
    "Oil Quality Parameters",
    "Minerals in Food",
    "Phthalate Esters",
  ];

  return (
    <Wrapper>
      <style>{styles}</style>

      <section className="font-manrope w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-10">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black max-w-4xl">
            <span className="text-[#2F7F7B]">Free Pilot Testing</span>  with Chemxpert
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 my-6 max-w-3xl">
            Chemxpert is Labwox’s research partnership program open to individual researchers, 
            departments, and institutions. Labwox empowers enrollees with free 
            pilot testing, advanced analytical support, and access to research grade methods without the cost of owning the equipment.
          </p>
          <div className="relative w-full mt-12">
            <div className="absolute -top-14 right-4 md:right-20 z-20">
              <Link to="/contact">
                <div
                  className="
                    w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 
                    rounded-full bg-yellow-500 text-white 
                    flex flex-col justify-center items-center text-center
                    font-semibold shadow-xl
                    text-sm sm:text-base md:text-[22px] leading-snug
                  "
                >
                  Apply for <br />Pilot Testing
                </div>
              </Link>
            </div>

            <div className="w-full h-[260px] sm:h-[330px] md:h-[450px] rounded-2xl overflow-hidden relative">
              <img
                src={heroImg}
                alt="Labwox Research Hero"
                className="w-full h-full object-cover object-center scale-[1.03] opacity-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#efebe7]/50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="group w-full mt-20 bg-neutral-100 py-3 overflow-hidden border-t border-gray-200 relative">
            <div className="flex whitespace-nowrap scroll-banner text-[#153D63] text-xl font-light tracking-wide gap-10">
              {[...bannerTexts, ...bannerTexts].map((text, index) => (
                <span key={index} className="hover:text-[#b8149d] transition-colors duration-300">
                  {text}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Wrapper>
  );
};

export default Labwox;
