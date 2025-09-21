import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import pollu from "../assets/image/pollution.jpg";

const applications = [
  { name: "Phthalate Esters", link: "/pollutant/phthalate" },
  { name: "PAHs Mix E", link: "/pollutant/pah" },
  { name: "PAHs Mix F", link: "/pollutant/pahmixf" },
  { name: "PAH and PCB Mix", link: "/pollutant/pahmix" },
  { name: "TPH", link: "/pollutant/tph" },
  { name: "PCBs", link: "/pollutant/pcb" },
  { name: "VOCs", link: "/pollutant/voc" },
  { name: "Heavy Metals", link: "/pollutant/Heavymetals" },
  { name: "PBDEs", link: "/pollutant/pbde" },
];

const Pollutant = () => {
  return (
    <Wrapper>
      <section
        className="relative w-full py-24 sm:py-28 lg:py-36 overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${pollu})` }}
      >
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        {/* Back Navigation */}
        <div className="relative flex items-center justify-start mb-6 sm:mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/application"
            className="flex items-center gap-2 text-[#FFC000] hover:text-white transition-colors text-sm sm:text-base font-medium"
          >
            <ArrowLeft size={18} className="sm:size-5" />
            Back to Applications
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-10 sm:mb-14 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Explore Pollutant Applications
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Our advanced pollutant analysis provides precise detection and
            quantification of harmful substances across soil, water, air, and
            food samples. We combine cutting-edge technology with global
            quality standards to ensure safe environments and healthier
            communities.
          </p>
        </div>

        {/* Application List */}
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 px-4 sm:px-6 lg:px-8">
          {applications.map((app, index) => (
            <Link
              key={index}
              to={app.link}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 sm:p-7 text-center text-white hover:bg-[#FFC000]/20 hover:border-[#FFC000] hover:shadow-lg hover:shadow-[#ffc00055] transition duration-300"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                {app.name}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Pollutant;
