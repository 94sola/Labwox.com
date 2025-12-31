import React from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";

const Labwox = () => {
  return (
    <Wrapper>
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-10 lg:px-18">
          <div className="grid md:grid-cols-2 gap-4 items-start">

            <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-left">
              <span
                className="bg-gradient-to-r from-[#c29bff] via-[#5a8bff] to-[#1d4ed8] bg-clip-text text-transparent"
              >
                Free Pilot 
              </span>
              {" "}
              <span className="text-gray-900">testing </span>

              <br />

              <span
                className="text-gray-900"
              >
                with 
              </span>
              {" "}
              <span className="bg-gradient-to-r from-[#5a8bff] to-[#1d4ed8] bg-clip-text text-transparent">Chemxpert</span>
            </h2>
            <div className="flex flex-col gap-6 text-left animate-fadeInSlow">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Chemxpert is Labwox’s research partnership program open to individual researchers, departments, and institutions.
                Labwox empowers enrollees with free pilot testing, advanced analytical support, 
                and access to research grade methods without the cost of owning the equipment.
              </p>

              <Link to="/chemxpert">
                <button
                  className="group relative inline-flex items-center gap-3 text-lg font-medium text-blue-400 hover:text-gray-900 transition-all duration-300"
                >
                  <span className="relative z-10">Discover chemxpert</span>
                  <span className="relative w-5 h-5 flex items-center justify-center">
                    <span className="absolute text-blue-400 group-hover:opacity-0 transition-opacity duration-300">
                      →
                    </span>
                    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1">
                      ↗
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeInSlow {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlow {
            animation: fadeInSlow 1.1s ease-out forwards;
          }
        `}</style>
      </section>
    </Wrapper>
  );
};

export default Labwox;
