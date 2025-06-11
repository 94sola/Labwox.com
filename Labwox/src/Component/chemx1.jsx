import React, { useState } from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// ✅ Importing local images
import consultingImg from "../assets/image/labwox.jpg";
import researchImg from "../assets/image/research.jpg";
import trainingImg from "../assets/image/son-8.jpg";

// ✅ Specialties array with imported images
const specialties = [
  {
    title: "Consulting",
    subtitle: "Expert insights to optimize lab efficiency.",
    link: "/consulting",
    details: [
      "Instrumentation setup and troubleshooting",
      "Lab process optimization",
      "Regulatory compliance guidance",
      "SOP development and validation",
    ],
    image: consultingImg,
  },
  {
    title: "Research",
    subtitle: "Partnering for cutting-edge discoveries.",
    link: "/research",
    details: [
      "Collaborative academic-industrial research",
      "Sample analysis and method development",
      "Publishing support and peer review advice",
      "Custom experimental design",
    ],
    image: researchImg,
  },
  {
    title: "Training",
    subtitle: "Upskill with tailored lab training programs.",
    link: "/training",
    details: [
      "HPLC/GC/ICP-OES operation and theory",
      "Analytical troubleshooting techniques",
      "Good Laboratory Practices (GLP)",
      "Hands-on equipment training sessions",
    ],
    image: trainingImg,
  },
];

// ✅ Accordion Card
const Accordion = ({ title, subtitle, details, link, isOpen, onClick, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all">
      <div
        className="cursor-pointer px-6 py-6 hover:bg-gray-50 transition flex flex-col gap-4"
        onClick={onClick}
      >
        <div className="flex flex-col items-start text-left group">
          <Link
            to={link}
            className="md:text-3xl text-2xl font-semibold text-[#153D63] hover:underline block"
          >
            {title}
          </Link>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        {/* Show image only if accordion is closed */}
        {!isOpen && (
          <img
            src={image}
            alt={`${title} visual`}
            className="mt-4 rounded-lg shadow-md w-full h-44 object-cover transition-opacity duration-500"
          />
        )}

        <div className="flex justify-end w-full">
          <ChevronDown
            className={`text-[#FFC000] transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            size={24}
          />
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-4 pt-2 text-base text-gray-700 space-y-2">
          {details.map((item, idx) => (
            <li key={idx} className="list-disc ml-4">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ✅ Main Component
const ChemxSpecialties = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <Wrapper>
      <section className="w-full py-16 px-4 sm:px-8 lg:px-16 xl:px-24 bg-neutral-100">
        <div className="max-w-screen-2xl mx-auto grid gap-8 md:grid-cols-3">
          {specialties.map((item, index) => (
            <Accordion
              key={index}
              {...item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default ChemxSpecialties;
