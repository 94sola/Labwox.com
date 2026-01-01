import React from "react";
import Wrapper from "./wrapper";
import BannerImage from "../assets/image/sonpng.png";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Labwox() {
  return (
    <Wrapper>
      <section className="w-full bg-white text-gray-800 font-manrope overflow-hidden">

        {/* Top Navigation Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
          <Link
            to="/training"
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Training
          </Link>
        </div>

        {/* Banner */}
        <div
          className="relative w-full h-[36vh] sm:h-[50vh] md:h-[64vh] lg:h-[68vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="absolute inset-0 bg-[#013220]/40"></div>
        </div>

        {/* Content Card */}
        <div className="relative -mt-10 sm:-mt-14 md:-mt-20 z-20">
          <div className="bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 rounded-t-3xl md:rounded-t-[40px] shadow-lg">

            <h1 className="text-2xl sm:text-3xl lg:text-[30px] text-neutral-600 uppercase font-bold leading-snug mb-6">
              Working with SON to monitor pesticide residues in various food products in Nigeria
            </h1>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mt-4 mb-4">
              Overview
            </h3>

            <div className="space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
              <p>
                The Standards Organization of Nigeria is the federal agency tasked with ensuring conformity of products with Nigeria’s quality standards.
                Labwox engaged staff of SON’s laboratory department in the use of the GC-MSD in the detection and quantification of pesticide residues.
              </p>
            </div>

          </div>
        </div>

      </section>
    </Wrapper>
  );
}
