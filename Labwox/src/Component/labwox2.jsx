import React from 'react';
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import labsoft from "../assets/image/labsoft.jpg";
import labsofts from "../assets/image/lab2.png";

const LabsoftData = [
  {
    title: 'Labsoft for Academics',
    image: labsoft,
    description:
      'Empowering institutions to streamline academic research, foster student collaboration, and manage data more efficiently.',
    link: '/universities',
  },
  {
    title: 'Labsoft for Laboratories',
    image: labsofts,
    description:
      'Simplifying laboratory workflows with intelligent tracking, automation, and compliance tools—built for scientific teams.',
    link: '/laboratory',
  },
];

const Labwox = () => {
  return (
    <Wrapper>
      <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
          
          {/* Text Section */}
          <div className="space-y-5">
            <h1 className="text-3xl max-w-3xl sm:text-4xl md:text-5xl font-extrathin text-gray-900 leading-tight">
              Discover the Simplicity of Smart Lab Management with{' '}
              <span className="text-[#153D63]">Labsoft</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Labsoft delivers intuitive digital tools tailored for labs and universities. Focus on innovation while we handle the complexity of data, documentation, and operations.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {LabsoftData.map((labsft, index) => (
              <div
                key={index}
                className="bg-[#F9FAFB] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 text-center p-4"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={labsft.image}
                    alt={labsft.title}
                    className="w-32 h-32 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {labsft.title}
                </h3>
                <p className="text-xs sm:text-sm  text-center justify-center text-gray-600 mt-2 mb-3 px-2 leading-relaxed">
                  {labsft.description}
                </p>
                <Link
                  to={labsft.link}
                  className="text-[#153D63] text-sm font-medium hover:underline transition"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Labwox;
