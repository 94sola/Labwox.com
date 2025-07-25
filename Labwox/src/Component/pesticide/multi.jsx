import React from "react";
import Wrapper from "../wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Multi = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/grid-pattern.svg')] bg-repeat" />

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
              className="bg-neutral-900 border border-neutral-800 hover:border-[#FFC000] rounded-xl p-6 text-center text-white hover:shadow-lg hover:shadow-[#ffc00033] transition"
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
