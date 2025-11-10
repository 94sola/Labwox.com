import React from "react";
import Wrapper from "./wrapper";
import BannerImage from "../assets/image/trainner.jpg";
import lasepa from "../assets/image/training.jpg";

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
          <div className="bg-white max-w-6xl mx-auto px-8 py-10 rounded-t-[40px]">

            <h1 className="text-[30px] text-neutral-600 uppercase font-bold mb-6">
              Boosting Lagos capacity for detection of environmental pollutants 
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              <div className="lg:col-span-2 space-y-6 text-[18px] leading-relaxed">
                <p>
                  The Lagos State Environmental Protection agency has a mandate to safeguard
                  environmental quality and it seeks to do this using modern analytical techniques.
                  Labwox engaged staff of LASEPA’s sensitive laboratory in the application of their GC-FID, GC-MS, and MP-AES. This was done with the aim of boosting in-house capacity to accurately measure pollutants in the environment.
                </p>
              </div>

              <div className="bg-neutral-300 rounded-2xl mx-auto shadow-lg p-3 space-y-6 h-max border border-gray-100">
                
               <img src={lasepa} alt="lasepa training section" className="w-52 h-52 object-fill" />
              </div>

            </div>
          </div>
        </div>

      </section>
    </Wrapper>
  );
}
