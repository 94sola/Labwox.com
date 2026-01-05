import React from "react";
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
    "Pyrethroid",
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
  ];

  const handlePilotFormClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "open_google_form", {
        event_category: "Chemxpert",
        event_label: "Pilot Testing Application",
        value: 1,
      });
    }
  };

  return (
    <Wrapper>
      <style>{styles}</style>

      <section className="font-manrope w-full bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black max-w-4xl">
            <span className="text-[#2F7F7B]">Free Pilot Testing</span> with Chemxpert
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 my-6 max-w-3xl">
            Chemxpert is Labwox’s research partnership program open to individual
            researchers, departments, and institutions. We empower enrollees
            with free pilot testing, advanced analytical support, and access to
            research-grade methods—without the cost of owning the equipment.
          </p>

          <div className="relative w-full mt-12">

            <div className="absolute -top-12 right-4 sm:right-8 md:right-16 z-20">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_thcIyZcw0_8Rv6mZN2rK1ltaeGk2FqYtIoiQ_hVCkWcXGg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePilotFormClick}
                className="
                  w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40
                  rounded-full bg-yellow-500 text-white
                  flex flex-col justify-center items-center text-center
                  font-semibold shadow-xl
                  text-sm sm:text-base md:text-[22px] leading-snug
                  hover:scale-105 hover:bg-yellow-600
                  transition-all duration-300
                "
              >
                Apply for <br /> Pilot Testing
              </a>
            </div>

            <div className="w-full h-[260px] sm:h-[330px] md:h-[450px] rounded-2xl overflow-hidden relative">
              <img
                src={heroImg}
                alt="Labwox Research Collaboration"
                className="w-full h-full object-cover object-center scale-[1.03] opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#efebe7]/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
            </div>
          </div>
          <div className="group w-full mt-20 bg-neutral-100 py-3 overflow-hidden border-t border-gray-200 relative">
            <div className="flex whitespace-nowrap scroll-banner text-[#153D63] text-lg sm:text-xl font-light tracking-wide gap-10">
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
      </section>
    </Wrapper>
  );
};

export default Labwox;
