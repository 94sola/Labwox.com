import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper";

const GoogleFormSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const form = document.getElementById("google-form-iframe");
      if (!form) return;

      const rect = form.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight && rect.bottom >= 0) {
        console.log("Google Form in view"); 
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20 font-manrope">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0f3253]">
              Research Application Form
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[#153D63]/80 text-sm sm:text-base">
              Please complete the form below. Our team will review your submission and get back to you.
            </p>
          </div>

          {isMobile && (
            <div className="flex justify-center mb-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_thcIyZcw0_8Rv6mZN2rK1ltaeGk2FqYtIoiQ_hVCkWcXGg/viewform?embedded=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition-all duration-300"
              >
                Open Form in New Tab
              </a>
            </div>
          )}

          <div
            className="relative w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xl"
          >
            <iframe
              id="google-form-iframe"
              src="https://docs.google.com/forms/d/e/1FAIpQLSe_thcIyZcw0_8Rv6mZN2rK1ltaeGk2FqYtIoiQ_hVCkWcXGg/viewform?embedded=true"
              title="Research Application Google Form"
              className="
                w-full border-0
                min-h-[900px]
                sm:min-h-[1000px]
                md:min-h-[1100px]
                lg:min-h-[1200px]
              "
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default GoogleFormSection;
