import React from "react"; 
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import heroImg from "../assets/image/trainner.jpg";

const Labwox = () => {
  const benefitItems = [
    { desc: "Practical, hands-on guidance" },
    { desc: "Covers both theory and real-world practice" },
    { desc: "Delivered onsite or online" },
    { desc: "Certification included" },
  ];

  return (
    <Wrapper>
      <section className="w-full bg-white py-10 mb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-heading tracking-tight text-black max-w-4xl">
            <span className="text-yellow-500">Application</span> Training for Professionals
            and <span className="text-yellow-500">Academics</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 my-6 font-body max-w-3xl">
            Build capability with expert-led training on essential analytical instruments. 
            Labwox equips science professionals and academic teams with the skills needed 
            to confidently operate, troubleshoot, and optimize laboratory workflows.
          </p>
          <div className="relative w-full mt-12">

            <div className="absolute -top-16 right-6 md:right-20 z-20">
              <Link to="/contact">
                <div
                  className="
                    w-32 h-32 md:w-40 md:h-40 
                    rounded-full bg-[#153D63] text-white 
                    flex flex-col justify-center items-center text-center
                    shadow-2xl font-heading font-semibold
                    text-lg md:text-[22px] leading-snug
                  "
                >
                  Send an<br />application
                </div>
              </Link>
            </div>

            <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden relative">
              <img
                src={heroImg}
                alt="Labwox Research Hero"
                className="w-full h-full object-cover object-center scale-[1.05] opacity-[0.92]"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#efebe7]/50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefitItems.map((item, index) => (
                <div
                key={index}
                className="
                    group
                    backdrop-blur-lg 
                    border border-yellow-500/70 
                    rounded-2xl 
                    shadow-sm 
                    px-8 py-6 
                    transition-all duration-300 
                    hover:shadow-xl 
                    hover:-translate-y-2
                "
                >
                <p className="text-xl font-semibold text-[#153D63] leading-relaxed">
                    {item.desc}
                </p>
                </div>
            ))}
            </div>

        </div>
      </section>
    </Wrapper>
  );
};

export default Labwox;
