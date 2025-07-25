import React from "react";
import Wrapper from "./wrapper";
import lab from "../assets/image/labwox5.jpg";

const About = () => {
  return (
    <section className="relative bg-neutral-900 h-[600px] sm:h-[500px] xs:h-[400px] mb-10 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-transform duration-700 scale-100"
        style={{
          backgroundImage: `url(${lab})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-800/70 to-transparent transition duration-300"></div>

      {/* Content */}
      <div className="absolute bottom-0 right-0 z-10 text-right pr-24 py-8 sm:py-6 lg:py-14">
        <h1 className="text-neutral-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight tracking-tight drop-shadow-lg">
          About Labwox
        </h1>
      </div>
    </section>
  );
};

export default About;
