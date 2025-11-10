import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Wrapper from "./wrapper";

const faqs = [
  {
    question: "Who Is Labwox?",
    answer:
      "Labwox is a science consulting company that helps laboratories and researchers achieve more with less.",
  },
  {
    question: "Is Labwox a laboratory?",
    answer:
      "No, Labwox is not a laboratory but it partners with several laboratories and aggregates their services on its online platform.",
  },
  {
    question: "What is Chemxpert?",
    answer:
      " Chemxpert is a collaborative research initiative by Labwox that connects universities and research institutions to advanced analytical laboratories. It provides free testing for selected research projects, hands-on training, and expert technical guidance.",
  },
  {
    question: "Who can participate in Chemxpert?",
    answer:
      "Chemxpert is open to academic researchers, postgraduate students, and faculty members from accredited institutions who are engaged in research aligned with our core analytical areas.",
  },
  {
    question: "What is Chemxpert?",
    answer:
      " Chemxpert is a collaborative research initiative by Labwox that connects universities and research institutions to advanced analytical laboratories. It provides free testing for selected research projects, hands-on training, and expert technical guidance.",
  },
  {
    question: "Is Chemxpert a paid service?",
    answer:
      "No. Chemxpert is a promotional and collaborative initiative by Labwox. Selected research projects receive testing and analytical support at no cost, fostering long-term institutional partnerships.",
  },
  {
    question: "What areas of research does Chemxpert cover?",
    answer:
      "Our core areas of competence include food and water analysis, environmental pollutant analysis, compositional analysis, and pesticide residue analysis.",
  },
  {
    question: " How does Labwox select projects for Chemxpert?",
    answer:
      " Projects are evaluated based on their scientific merit, alignment with our analytical capabilities, and potential for publication or institutional collaboration.",
  },

  {
    question: " How can my institution partner with Labwox?",
    answer:
      "Institutions can submit an expression of interest through the website. Once contact is established, Labwox formalizes the collaboration through a Memorandum of Understanding (MoU) defining roles, benefits, and the scope of engagement.",
  },
  {
    question: "What are the benefits of partnering with Labwox",
    answer:
      " Partner institutions gain access to laboratory facilities, collaborative research opportunities, technical training for staff and students, and enhanced institutional visibility through co-authored publications.",
  },
  {
    question: " Does Labwox offer training programs?",
    answer:
      "Yes. In addition to collaborative research, Labwox provides training and workshops in analytical instrumentation and laboratory best practices — both online and in-person.",
  },
  {
    question: "Who owns the data and results from Chemxpert projects?",
    answer:
      "Results from Chemxpert-supported projects are shared between Labwox and the collaborating institution, with co-authorship opportunities clearly outlined in the MoU.",
  },
  {
    question: "Can Chemxpert help with publication support?",
    answer:
      "Yes. Labwox supports data interpretation, results validation, and collaborative publication of Chemxpert research outcomes.",
  },
  {
    question: "What analytical techniques are available through Labwox?",
    answer:
      " Our network of laboratories supports ICP-OES, GC-FID, GC-MS, UV-Vis, and other advanced techniques for elemental, compositional, and contaminant analyses.",
  },

  {
    question: "How do I apply for Chemxpert?",
    answer:
      "Simply fill out the Expression of Interest form on our website, stating your institution, research area, and project overview. Our team will review your submission and reach out to discuss next steps.",
  },
  {
    question: "How long does it take to begin a Chemxpert project?",
    answer:
      "Timelines vary depending on project scope and sample type, but selected researchers are typically onboarded within 2–3 weeks of approval.",
  },

  {
    question: "Can international researchers apply?",
    answer:
      " Currently, Chemxpert focuses on Nigerian institutions, but partnerships with regional and international universities are being explored.",
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
                className="w-full flex items-center justify-between text-left px-6 py-4 font-medium text-lg text-gray-800 hover:bg-gray-50"
                >
                <span>{faq.question}</span>
                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                <div
                className={`px-6 pb-4 text-gray-600 text-base transition-all duration-300 ease-in-out ${
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
