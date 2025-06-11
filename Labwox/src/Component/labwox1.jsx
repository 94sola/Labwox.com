import React from "react";
import { FiGlobe, FiSmartphone, FiServer } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";
import lab from "../assets/image/background.jpg";
import chemx from "../assets/image/hero2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Chemxpert = () => {
  return (
    <Wrapper>
      <section className="relative bg-neutral-200 px-0 py-20 overflow-hidden">
        {/* Background Image */}
        <img
          src={lab}
          alt="Laboratory Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />

        <div className="relative z-10 max-w-8xl 2xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800">
                ChemXpert
              </h1>
              <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                ChemXpert empowers labs with tailored training, consulting, and research support — accelerating innovation, compliance, and scientific excellence.
              </p>
            </div>

            <div className="flex-1 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
              <img
                src={chemx}
                alt="chemxpert image"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FiGlobe className="w-8 h-8 text-neutral-700" />,
                title: "Training",
                desc: "Our training programs offer in-depth, hands-on instruction in regulatory compliance, analytical instrumentation, data integrity best practices, and lab automation. Empower your team with up-to-date skills that enhance accuracy, reliability, and scientific output in the lab.",
                link: "/training",
                bg: "bg-rose-100",
              },
              {
                icon: <FiSmartphone className="w-8 h-8 text-neutral-700" />,
                title: "Consulting",
                desc: "We provide specialized consulting services to help laboratories streamline operations, maintain regulatory compliance, and adopt digital lab solutions. Our consultants work closely with your team to implement sustainable frameworks for quality, productivity, and innovation.",
                link: "/consulting",
                bg: "bg-yellow-100",
              },
              {
                icon: <FiServer className="w-8 h-8 text-neutral-700" />,
                title: "Research",
                desc: "From custom method development to digital transformation of R&D workflows, we collaborate with your lab on impactful scientific research. Our solutions are designed to accelerate discoveries and enhance data management in both academic and industrial settings.",
                link: "/research",
                bg: "bg-green-50",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg flex flex-col justify-between transition duration-300 hover:shadow-2xl min-h-[420px] overflow-hidden"
              >
                {/* Top Icon + Title in colored background */}
                <div className={`w-full ${card.bg} px-6 pt-6 pb-4`}>
                  <div className="flex flex-col items-start gap-2">
                    {card.icon}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 px-7 py-6">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Button */}
                <div className="px-6 pb-20">
                  <Link to={card.link}>
                    <p className="inline-block text-neutral-800 text-sm font-medium border border-neutral-700 rounded-lg px-4 py-2 hover:bg-neutral-100 transition">
                      Learn More →
                    </p>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Chemxpert;
