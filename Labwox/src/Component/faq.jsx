import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Wrapper from "./wrapper";

const faqs = [
  {
    question: "Is Labwox a laboratory?",
    answer:
      "No, Labwox is not a laboratory but it partners with several laboratories and aggregates their services on its online platform.",
  },
  {
    question: "How long does it take to obtain test results?",
    answer:
      "This depends on factors specific to each order, but typical turnaround times fall between 2 - 4 weeks.",
  },
  {
    question: "What services does Chemxpert provide?",
    answer:
      "Chemxpert provides advanced analytical chemistry consulting, instrument rental, and expert training services.",
  },
  {
    question: "Can I access Labsoft without a subscription?",
    answer:
      "Some features may be available for demo, but full access to Labsoft requires a valid subscription.",
  },
  {
    question: "Are your platforms suitable for academic research?",
    answer:
      "Yes. Labwox, Chemxpert, and Labsoft are all designed to support academic and industrial research.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Wrapper>
        <div className="bg-gray-100 py-12 px-6 sm:px-8 lg:px-32">
        <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold font-aeon text-gray-800 leading-tight">
            Frequently Asked <span className="text-orange-500 italic font-fair">Questions</span>
            </h1>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-10 space-y-6">
            {faqs.map((faq, index) => (
            <div
                key={index}
                className="bg-white border border-gray-200 rounded-md overflow-hidden"
            >
                <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left px-6 py-4 font-semibold text-gray-800 hover:bg-gray-50"
                >
                <span>{faq.question}</span>
                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                <div
                className={`px-6 pb-4 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "block" : "hidden"
                }`}
                >
                {faq.answer}
                </div>
            </div>
            ))}
        </div>
        </div>
    </Wrapper>
  );
};

export default Faq;
