// components/InfoList.jsx
import React from "react";
import video from "../assets/image/vid1.mp4";
import Wrapper from "./wrapper";

const Labwox = [
  "Free pilot testing for selected studies",
  "Access to ICP-OES, GC-MS, GC-FID, HPLC & more",
  "Expert technical support and collaborative research",
  "Training opportunities for students and staff",
  "Enhanced publication output and research capacity",
];

export default function About() {
  return (
    <Wrapper>
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-stretch gap-10">
          
          {/* Video */}
          <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden rounded-xl shadow-xl">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>

         
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-gray-800 text-2xl px-10 font-medium leading-relaxed mb-6">What You Gain</h3>
            <ul className="space-y-6">
              {Labwox.map((text, index) => (
                <li
                  key={index}
                  className="relative pl-10 text-gray-800 text-lg font-normal leading-relaxed group"
                >
                  
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-yellow-500 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:animate-pulse"></span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </Wrapper>
  );
}
