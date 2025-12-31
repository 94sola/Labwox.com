import React, { useEffect, useRef } from "react";
import Wrapper from "./wrapper";
import son from "../assets/image/SON collage.png";

const Activities = [
  "Theoretical background of pesticide residue analysis using GC-MS was established during a presentation.",
  "QUECHERS sample preparation was demonstrated and practiced by participants.",
  "Introduction to GC-MS instrumentation and software.",
  "Demonstration of sample analysis of real grains for pesticides using QUECHERS and GC-MSD.",
  "Result confirmation protocols were explained, demonstrated, and practiced on real datasets.",
  "A mini study using over 40 real-life samples was carried to obtain real data and to create more opportunities for trainees to practice."
];

const Results = [
  "Staff of the laboratory gained proficiency in the operation of the GC-MSD and its application in the analysis of pesticide residues.",
  "Real data regarding the concentrations of various pesticide residues in grains was obtained to assist SON in its regulatory duties."
];

export default function About() {

  const sectionRef = useRef(null);

  useEffect(() => {
    const blocks = sectionRef.current.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.25 }
    );
    blocks.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper>
      <section
        ref={sectionRef}
        className="relative bg-[#153D63] py-10 md:py-14 font-manrope overflow-hidden"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-[#153D63] via-[#133e66] to-[#153D63] pointer-events-none" />

        <div className="absolute inset-0 ring-1 ring-[#153D63]/5 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="fade-in opacity-0 translate-y-6 transition-all duration-700">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-50 mb-6">
                Activities
              </h3>

              <ul className="space-y-6">
                {Activities.map((text, index) => (
                  <li
                    key={index}
                    className="relative pl-12 text-gray-50 text-base md:text-lg leading-relaxed"
                  >
                    <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gray-50 shadow-sm"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-50 mb-4">
                Results
              </h3>

              <ul className="space-y-4">
                {Results.map((text, index) => (
                  <li
                    key={index}
                    className="relative pl-10 text-gray-50 text-base md:text-lg leading-relaxed"
                  >
                    <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#153D63]"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
            <div className="relative max-w-lg mx-auto">

              <div className="absolute inset-0 blur-xl bg-[#153D63]/80 rounded-3xl"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/90">
                <img
                  src={son}
                  alt="Training program collage"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </Wrapper>
  );
}
