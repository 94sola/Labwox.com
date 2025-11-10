import React from "react";
import Wrapper from "./wrapper";
import BannerImage from "../assets/image/trainner.jpg";

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
            <h1 className="text-[30px] text-neutral-600 font-bold mb-6">
              APPLICATION TRAINING FOR PROFESSIONALS AND ACADEMICS
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              <div className="lg:col-span-2 space-y-6 text-[18px] leading-relaxed">
                <p>
                  Build capability with expert-led training on essential analytical
                  instruments. Labwox equips science professionals and academic teams
                  with the skills needed to confidently operate, troubleshoot, and
                  optimize laboratory workflows.
                </p>

                <p>
                  Through a combination of on-site engagements, virtual coaching, and
                  comprehensive product development, Labwox equips teams with modern
                  market analysis methodologies, data interpretation skills, and
                  actionable intelligence tools tailored to their operating environment.
                </p>

                <p>
                  This initiative strengthens the internal capabilities of partner
                  organizations—empowering them to independently manage MI functions,
                  identify new opportunities, and make informed strategic decisions.
                </p>
              </div>

              <div className="bg-neutral-300 rounded-2xl shadow-lg p-8 space-y-6 h-max border border-gray-100">
                <div>
                  <h3 className="text-lg text-[#153D63] font-medium tracking-wide">Year</h3>
                  <p className="text-base font-normal">2024 – 2025</p>
                </div>

                <div>
                  <h3 className="text-lg text-[#153D63] font-medium  tracking-wide">Country</h3>
                  <p className="text-base font-normal">Nigeria</p>
                </div>

                <div>
                  <h3 className="text-lg text-[#153D63] font-medium tracking-wide">
                    Type of Activity
                  </h3>
                  <ul className="list-disc pl-5 text-base font-normal space-y-1">
                    <li>Market Intelligence</li>
                    <li>Data Analysis</li>
                    <li>Strategic Insights</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </Wrapper>
  );
}
