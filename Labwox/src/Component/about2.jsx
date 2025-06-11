import React from "react";
import Wrapper from "./wrapper";
import aboutDesktop from "../assets/image/about-chem.jpg";
import aboutTablet from "../assets/image/labsoft1.jpg";
import aboutMobile from "../assets/image/method.jpg";

const About = () => {
  return (
    <Wrapper>
    <section className="bg-transparent w-full flex items-center justify-center px-4 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <picture>
            <source media="(min-width:1024px)" srcSet={aboutDesktop} />
            <source media="(min-width:640px)" srcSet={aboutTablet} />
            <img
              src={aboutMobile}
              alt="Labwox About"
              className="w-full rounded-xl shadow-md"
              loading="lazy"
            />
          </picture>
        </div>
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left ">
          <h1 className="text-4xl md:text-7xl font-normal text-gray-600">
         <span className="text-[#153D63]"> Who is Labwox</span>
          </h1>
          <p className="text-base max-w-2xl text-gray-700 leading-relaxed">
            Labwox is a science consulting company that helps laboratories and
            researchers achieve more with less. We specialize in collaborative
            research, laboratory productivity, and technical capacity-building,
            serving academic institutions, government agencies, and private labs
            across Nigeria.
            <p className="text-base max-w-2xl text-gray-700 leading-relaxed">Through our flagship programs like Chemxpert and our proprietary Labsoft application, Labwox acts as a research accelerator, connecting researchers with cutting-edge analytical laboratories, expert support, and project funding; removing barriers that slow down scientific discovery.</p>
          </p>
        </div>
      </div>
    </section>
    </Wrapper>
  );
};

export default About;
