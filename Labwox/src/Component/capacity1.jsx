import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";

// Import images
import img1 from "../assets/image/SON collage.png";
import img2 from "../assets/image/training.jpg";
import img3 from "../assets/image/unilag-training.jpg";

const cards = [
  {
    title: "GC-MSD/Pesticide Residue Training at SON",
    image: img1,
    link: "/son",
    linkLabel: "View project",
  },
  {
    title: "MP-AES/Elemental Analysis Training at UNILAG",
    image: img2,
    link: "/lasepa",
    linkLabel: "View project",
  },
  {
    title: "GC-FID/GC-MSD/MP-AES Training at LASEPA",
    image: img3,
    link: "/unilag",
    linkLabel: "View project",
  },
];

const About = () => {
  return (
    <Wrapper>
      <section className="relative bg-gradient-to-b from-white via-neutral-100 font-manrope to-white py-10 text-[#153D63] overflow-hidden">
        <div className="max-w-8xl mx-auto px-10 sm:px-14 lg:px-18 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-600 font-semibold my-10 leading-snug">
           LOOK AT SOME OF OUR PROJECTS
          </h2>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="relative rounded-md overflow-hidden cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>

                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 text-left text-white">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                      {card.title}
                    </h3>
                    <Link
                    to={card.link}
                    className="inline-block px-2 py-2.5 w-fit rounded bg-white text-[#153D63] text-sm font-medium shadow-sm transition-all duration-300"
                  >
                    {card.linkLabel}
                  </Link>

                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;
