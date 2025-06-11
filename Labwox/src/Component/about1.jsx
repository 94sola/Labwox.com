import React from "react";
import Wrapper from "./wrapper";
import lab from "../assets/image/labwox2.jpg";

const About = () => {
  return (
    <Wrapper>
      <section className="relative bg-neutral-900 h-[700px]  lg:py-28 sm:py-20 overflow-hidden">
        {/* Background Image */}
       <div
        className="absolute inset-0 transition-transform duration-700 scale-100 group-hover:scale-110"
        style={{
          backgroundImage: `url(${lab})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 to-transparent transition duration-300"></div>
        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-2xl py-10 mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-medium "><span className="text-lime-50">About Labwox</span>
            </h1>
            
            
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;
