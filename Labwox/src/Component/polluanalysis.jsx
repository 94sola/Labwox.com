import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


const applications = [
  { name: "Phthalate Esters", link: "/pollutant/phthalate" },
  { name: "PAHs Mix E", link: "/pollutant/pah" },
  { name: "PAHs Mix F", link: "/pollutant/pahmixf" },
  { name: "PAH and PCB Mix", link: "/pollutant/pahmix" },
  { name: "TPH", link: "/pollutant/tph" },
  { name: "PCBs", link: "/pollutant/pcb" },
  { name: "VOCs", link: "/pollutant/voc" },
  { name: "Heavy Metals", link: "/pollutant/Heavymetals"},
  { name: "PBDEs", link: "/pollutant/pbde" },
];

const Pollutant = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
        
        {/* Navigation - Back Button */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/application"
            className="flex items-center gap-2 hover:text-white text-[#FFC000] transition"
          >
            <ArrowLeft size={20} />back to applications
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-normal text-white">
            Explore <span className="text-[#FFC000]">Pollutant</span> Applications
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Detect and quantify harmful pollutants across different sample types.
          </p>
        </div>

        {/* Application List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {applications.map((app, index) => (
            <Link
              key={index}
              to={app.link}
              className="rounded-xl border  border-neutral-700 bg-neutral-900 hover:border-[#FFC000] transition-all duration-300 p-8 flex flex-col justify-center items-center text-center cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-white hover:text-[#FFC000] transition">
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
