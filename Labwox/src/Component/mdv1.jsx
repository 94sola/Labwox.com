import React from "react";
import heroImage from "../assets/image/SONs1.jpeg";
import Wrapper from "./wrapper";

export default function LabwoxHero() {
  const handlePilotFormClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "open_google_form", {
        event_category: "Chemxpert",
        event_label: "Pilot Testing Application",
        value: 1,
      });
    }
  };

  return (
    <Wrapper>
      <section className="relative w-full font-manrope bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">

            <div className="space-y-5 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Robust Methods for Real-World Samples
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-[#153D63]/90 max-w-xl mx-auto lg:mx-0">
                Labwox develops and optimises analytical methods for food, water,
                and environmental samples, supporting researchers and
                laboratories with reliable, standards-aligned workflows.
              </p>

              <div className="flex justify-center lg:justify-start pt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe_thcIyZcw0_8Rv6mZN2rK1ltaeGk2FqYtIoiQ_hVCkWcXGg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handlePilotFormClick}
                  className="
                    inline-flex items-center justify-center
                    bg-[#153D63]
                    text-white font-medium
                    px-6 py-3
                    rounded-xl
                    shadow-md
                    hover:shadow-lg hover:bg-[#0f2b46]
                    transition
                  "
                >
                  Request Method Support
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="
                w-full
                max-w-sm sm:max-w-md lg:max-w-lg
                aspect-square
                rounded-2xl
                bg-gray-100
                overflow-hidden
                shadow-xl
              ">
                <img
                  src={heroImage}
                  alt="Labwox Hero"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </Wrapper>
  );
}
