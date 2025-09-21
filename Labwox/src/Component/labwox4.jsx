import React from "react";
import Wrapper from "./wrapper"
import {
  FlaskConical,
  Microscope,
  Droplets,
  Leaf,
  Factory,
  Scale,
} from "lucide-react";

export default function LabwoxFeatures() {
  const features = [
    {
      title: "Advanced Research",
      desc: "Empowering scientific discoveries with innovative laboratory technologies and modern analytical methods.",
      icon: <FlaskConical className="w-12 h-12 text-purple-600" />,
      bg: "bg-purple-100",
    },
    {
      title: "Precision Testing",
      desc: "Delivering accurate and reliable test results through validated protocols and state-of-the-art equipment.",
      icon: <Microscope className="w-12 h-12 text-pink-600" />,
      bg: "bg-pink-100",
    },
    {
      title: "Water & Environmental Analysis",
      desc: "Comprehensive testing for water, soil, and environmental samples to ensure safety and sustainability.",
      icon: <Droplets className="w-12 h-12 text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      title: "Food & Agriculture",
      desc: "Ensuring quality and safety in food, beverages, and agricultural products through specialized lab solutions.",
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      bg: "bg-green-100",
    },
    {
      title: "Industrial Solutions",
      desc: "Supporting industries with chemical analysis, material testing, and process optimization strategies.",
      icon: <Factory className="w-12 h-12 text-orange-600" />,
      bg: "bg-orange-100",
      wide: true, // makes this card span 2 columns
    },
    {
      title: "Standards & Compliance",
      desc: "Helping organizations meet regulatory requirements with internationally recognized laboratory practices.",
      icon: <Scale className="w-12 h-12 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
  ];

  return (
    <Wrapper>
      <section className="bg-white px-6 py-16 flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose <span className="text-purple-700">Labwox?</span>
          </h1>
          <div className="bg-slate-100 mx-auto p-8 rounded-2xl max-w-6xl grid md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className={`${f.bg} p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between ${
                  f.wide ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {f.title}
                  </h2>
                  {f.icon}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
