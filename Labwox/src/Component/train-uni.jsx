import React from "react";
import Wrapper from "./wrapper";
import BannerImage from "../assets/image/unilag-training.jpg";
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
          className="relative w-full h-[40vh] sm:h-[48vh] md:h-[60vh] lg:h-[68vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="absolute inset-0 bg-[#013220]/40" />
        </div>

        
        <div className="relative -mt-10 sm:-mt-14 md:-mt-20 z-20">
          <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 md:py-16 rounded-t-3xl md:rounded-t-[40px] shadow-lg">

            <h1 className="text-2xl sm:text-3xl lg:text-[30px] text-neutral-600 uppercase font-bold leading-snug mb-6">
              MP-AES Application Training for Elemental Analysis at UNILAG’s Dr. D.K Olukoya Central Research and Reference Laboratories.
            </h1>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mt-4 mb-4">
              Overview
            </h3>

            <div className="space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
              <p>
                The University of Lagos sought to optimize the use of their recently acquired Agilent 4200 MP-AES.
                Three technical staff in the Dr. D.K Olukoya Central Research and Reference Laboratories were trained
                for this purpose.
              </p>
            </div>

          </div>
        </div>

      </section>
    </Wrapper>
  );
}
