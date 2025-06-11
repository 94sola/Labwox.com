import React, { useState } from "react";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";

// ✅ Importing local images
import consultingImg from "../assets/image/labwox.jpg";
import researchImg from "../assets/image/research.jpg";

// ✅ Specialties array with updated Collaboration content
const specialties = [
  {
    title: "Collaboration",
    subtitle: "Empowering joint scientific breakthroughs.",
    link: "/collaboration",
    details: [
      "Partnering with labs, universities, and industry leaders",
      "Co-authoring proposals and publications",
      "Joint seminars, training, and knowledge-sharing sessions",
    ],
    image: consultingImg,
  },
  {
    title: "Research",
    subtitle: "Partnering for cutting-edge discoveries.",
    link: "/research",
    details: [
      "Collaborative academic and industrial research",
      "Publishing support and peer review advice",
      "Custom experimental design",
    ],
    image: researchImg,
  },
];

// ✅ Accordion Card Component
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
          <span className="text-[#153D63] text-2xl font-bold transition-all duration-300">
            {isOpen ? "−" : "+"}
          </span>
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
