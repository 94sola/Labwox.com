import React from "react";
import Wrapper from "./wrapper";
import BannerImage from "../assets/image/trainner.jpg";
import uni from "../assets/image/unilag-training.jpg";

export default function Labwox() {
  return (
    <Wrapper>
      <section className="w-full bg-white text-gray-800 font-manrope overflow-hidden">
        <div
          className="relative w-full h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          
        <div className="absolute inset-0 bg-[#013220]/40"></div>
        </div>

        
        <div className="relative -mt-20 z-20">
          <div className="bg-white max-w-7xl mx-auto px-8 py-16 rounded-t-[40px]">

            {/* Heading at the top */}
            <h1 className="text-[30px] text-neutral-600 uppercase font-bold mb-6">
              MP-AES Application Training for heavy metals analysis at UNILAG 
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              <div className="lg:col-span-2 space-y-6 text-[18px] leading-relaxed">
                <p>
                  The University of Lagos sought to optimize the use of their recently acquired Agilent 4200 MP-AES. Several technical staff in the central reference laboratory were trained for this purpose.
                </p>
              </div>

              <div className="bg-neutral-300 rounded-2xl shadow-lg p-3 space-y-6 h-max border border-gray-100">
                <img src={uni} alt="lasepa training section" className="w-52 h-52 object-fill" />
              </div>

            </div>
          </div>
        </div>

      </section>
    </Wrapper>
  );
}
