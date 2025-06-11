import React from 'react';
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import labsoft from "../assets/image/labsoft.jpg";
import labsofts from "../assets/image/labsoft2.jpg";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-10">
          
          {/* Header Section */}
          <div className="space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-gray-900 leading-tight">
              Discover the Simplicity of Smart Lab Management with{' '}
              <span className="text-[#153D63] font-semibold">Labsoft</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Labsoft delivers intuitive digital tools tailored for labs and universities. Focus on innovation while we handle the complexity of data, documentation, and operations.
            </p>
          </div>

          {/* Mobile Slider */}
          <div className="sm:hidden">
            <Swiper spaceBetween={20} slidesPerView={1}>
              {LabsoftData.map((labsft, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-lg group min-h-[450px]"
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 transition-transform duration-700 scale-100 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${labsft.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-center items-center text-center h-full p-6 text-white space-y-6">
                      <h3 className="text-2xl font-bold drop-shadow-lg">{labsft.title}</h3>
                      <p className="text-base leading-relaxed drop-shadow max-w-md">
                        {labsft.description}
                      </p>
                      <Link
                        to={labsft.link}
                        className="inline-block bg-[#FFC000] text-[#153D63] px-6 py-3 text-sm rounded-lg font-semibold shadow hover:bg-[#e6ae00] transition"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-10">
            {LabsoftData.map((labsft, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group min-h-[500px]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 transition-transform duration-700 scale-100 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${labsft.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center h-full p-6 text-white space-y-6">
                  <h3 className="text-2xl font-bold drop-shadow-lg">{labsft.title}</h3>
                  <p className="text-base leading-relaxed drop-shadow max-w-md">
                    {labsft.description}
                  </p>
                  <Link
                    to={labsft.link}
                    className="inline-block bg-[#FFC000] text-[#153D63] px-6 py-3 text-sm rounded-lg font-semibold shadow hover:bg-[#e6ae00] transition"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Labwox;
