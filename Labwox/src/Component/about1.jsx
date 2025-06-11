import React from "react";
import Wrapper from "./wrapper";
import aboutDesktop from "../assets/image/labwox2.jpg";
import aboutTablet from "../assets/image/labsoft1.jpg";
import aboutMobile from "../assets/image/method.jpg";

const About = () => {
  return (
    <Wrapper>
    <section className="bg-transparent w-full flex items-center justify-center px-4 pb-14">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left ">
          <h1 className="text-4xl md:text-7xl font-normal text-gray-600">
           Learn More <br /> <span className="text-[#153D63]"> About Labwox</span>
          </h1>
          <p className="text-lg sm:text-3xl max-w-2xl text-gray-700 leading-relaxed">
            Labwox is a science consulting company that helps laboratories and
            researchers achieve more with less. <br /> <p className="py-10">We specialize in collaborative
            research, laboratory productivity, and technical capacity-building,
            serving academic institutions, government agencies, and private labs
            across Nigeria.</p>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <picture>
            <source media="(min-width:1024px)" srcSet={aboutDesktop} />
            <source media="(min-width:640px)" srcSet={aboutTablet} />
            <img
              src={aboutMobile}
              alt="Labwox About"
              className="w-full rounded-lg shadow-md"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
    </Wrapper>
  );
};

export default About;

