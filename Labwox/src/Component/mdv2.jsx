import React from "react";
import Wrapper from "./wrapper";
import { FlaskConical, TestTube2, LineChart } from "lucide-react";

const Mdv = () => {
  const cards = [
    {
      icon: FlaskConical,
      title: "Method Development",
      text: "We create fit-for-purpose analytical methods tailored for accuracy, and compliance with global standards.",
    },
    {
      icon: TestTube2,
      title: "Method Optimization",
      text: "Our team refines existing laboratory methods to improve sensitivity, detection limits, and overall analytical performance.",
    },
    {
      icon: LineChart,
      title: "Data Interpretation & Reporting",
      text: "Labwox provides clear, structured analysis reporting to support impactful decision-making across research and industry projects.",
    },
  ];

  return (
    <Wrapper>
      <div className="bg-white mx-auto py-16 px-6 font-manrope sm:px-12 lg:px-24">

        {/* Header Section */}
        <div className="space-y-4 mb-14">
          <p className="text-gray-500 text-lg mb-8">Labwox Services</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            What We Do
          </h1>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white  transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center  group-hover:scale-105 transition">
                    <Icon className="w-10 h-10 text-[#153D63]" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition">
                  {card.title}
                </h2>

                {/* Text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Mdv;
