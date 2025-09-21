import React from "react";
import Wrapper from "../wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import multi from "../../assets/image/pesticide.jpg";

const Multi = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-24 sm:py-28 lg:py-36 overflow-hidden bg-fixed bg-center bg-cover mb-10"
          style={{ backgroundImage: `url(${multi})` }}
        >
          {/* Dark Overlay for Contrast */}
          <div className="absolute inset-0 bg-neutral-800/70 backdrop-blur-[2px]" />
     
        {/* Navigation */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/pesticide"
            className="flex items-center gap-2 italic hover:text-white text-[#FFC000] transition"
          >
            <ArrowLeft size={20} /> Back to Pesticide applications
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Multi Residue Analysis
          </h1>
          <p className="mt-4 text-lg text-gray-50 max-w-2xl mx-auto">
            Multi residue methods allow the simultaneous detection of hundreds
            of pesticide residues in a single run. These techniques are widely
            applied in food safety, environmental monitoring, and regulatory
            compliance to deliver efficient and comprehensive results.
          </p>
        </div>

        {/* Analysis Groups */}
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4">
          {[
            { name: "Mix A", link: "/pesticide/mixa" },
            { name: "Mix B [Herbicides,Fungicides,Organochlorines,Pyrethroids]", link: "/pesticide/mixb" },
            { name: "Mix C [Organochlorine Pesticides]", link: "/pesticide/mixc" },
            { name: "Mix D [Fungicides,Organochlorines,Organophosphates, Pyrethroids]", link: "/pesticide/mixd" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bbg-neutral-700/60 backdrop-blur-sm border border-white/20 rounded-xl p-5 sm:p-7 text-center text-white hover:bg-[#FFC000]/20 hover:border-[#FFC000] hover:shadow-lg hover:shadow-[#ffc00055] transition duration-300"
            >
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Multi;
