import React from "react";
import Wrapper from "./wrapper";
import BannerImage from "../assets/image/lasepa-photo-collage.png";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Labwox() {
  return (
    <Wrapper>
      <section className="w-full bg-white text-gray-800 font-manrope overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
          <Link
            to="/training"
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Training
          </Link>
        </div>

        <div
          className="relative w-full h-[38vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="absolute inset-0 bg-[#013220]/45"></div>
        </div>

        <div className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 z-20">
          <div className="bg-white max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10 md:py-12 rounded-t-3xl shadow-xl">

            <h1 className="text-2xl sm:text-3xl md:text-4xl text-neutral-700 uppercase font-bold mb-6 leading-snug">
              Boosting Lagos capacity for detection of environmental pollutants
            </h1>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 my-6">
              Overview
            </h3>

            <div className="space-y-5 text-[15px] sm:text-base md:text-[17px] leading-relaxed text-gray-700">
              <p>
                The Lagos State Environmental Protection agency has a mandate to safeguard
                environmental quality and it seeks to do this using modern analytical techniques.
              </p>
              <p>
                Labwox engaged staff of LASEPA’s sensitive laboratory in the application
                of their GC-FID, GC-MS, and MP-AES. This was done with the aim of boosting
                in-house capacity to accurately measure pollutants in the environment.
              </p>
            </div>

          </div>
        </div>

      </section>
    </Wrapper>
  );
}
