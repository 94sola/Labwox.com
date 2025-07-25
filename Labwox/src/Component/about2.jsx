import React from "react";
import Wrapper from "./wrapper";

const About = () => {
  return (
    <Wrapper>
    <section className="bg-neutral-200 w-full flex items-center justify-center px-4 py-20">
        {/* Text Content */}
        <div className=" text-center">
          <h1 className="text-gray-900 font-light text-6xl py-8">
            Who we are
          </h1>
          <p className="text-2xl max-w-6xl font-light text-gray-700 leading-relaxed">
            Labwox is a science consulting company that helps laboratories and researchers achieve more with less. We specialize in collaborative research, laboratory productivity, and technical capacity-building, serving academic institutions, government agencies, and private labs across Nigeria. Through our flagship programs like Chemxpert and our proprietary Labsoft application, Labwox acts as a research accelerator, connecting researchers with cutting-edge analytical laboratories, expert support, and project funding; removing barriers that slow down scientific discovery.
          </p>
        </div>
    </section>
    </Wrapper>
  );
};

export default About;
