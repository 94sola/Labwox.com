import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";

import img1 from "../assets/image/statistics.jpg";
import img2 from "../assets/image/collabarative.jpg";
import img3 from "../assets/image/trainner.jpg";

const cards = [
  {
    title: "Collaborative Research",
    description:
      "Partner with Labwox to bring your research ideas to life. Through our Chemxpert initiative, we provide free testing for selected studies—empowering researchers to achieve impactful results.",
    image: img1,
    link: "/chemxpert",
    linkLabel: "👉 Get Started",
  },
  {
    title: "Method Development",
    description:
      "From concept to validation, Labwox helps you design and refine analytical methods that meet international standards. Our specialists provide end-to-end support to ensure accuracy, reproducibility, and regulatory compliance.",
    image: img2,
    link: "/mdv",
    linkLabel: "👉 Learn More",
  },
  {
    title: "Training & Capacity Building",
    description:
      "Gain hands-on experience with modern analytical techniques. Labwox offers structured training programs for students, researchers, and laboratory professionals — combining theory, practical instrumentation sessions, and data interpretation to build lasting competence.",
    image: img3,
    link: "/training",
    linkLabel: "👉 Explore Programs",
  },
];

const About = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Wrapper>
      <section className="relative bg-gradient-to-b from-white via-neutral-100 to-white py-10 text-[#153D63] overflow-hidden">
        <div className="max-w-8xl mx-auto px-10 sm:px-14 lg:px-18 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto font-semibold mb-16 leading-snug"
          >
            Partnering with Researchers to Unlock Scientific Potential
          </motion.h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => {
              const isMiddle = index === 1;
              const isHovered = hoverIndex === index;

              return (
                <Link
                  key={index}
                  to={card.link}
                  className="block"
                  aria-label={card.title}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    whileHover={{ scale: isMiddle ? 1.05 : 1.03 }}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 group ${
                      isMiddle
                        ? "h-[42rem] md:h-[46rem]"
                        : "h-[34rem] md:h-[38rem]"
                    }`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-[1px]" />

                    <div className="absolute bottom-0 p-8 md:p-10 w-full text-left text-white pointer-events-none">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                          {card.title}
                        </h3>

                        <motion.div
                          layout
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-white text-2xl font-bold shadow-md"
                        >
                          <AnimatePresence mode="wait">
                            {!isHovered ? (
                              <motion.span
                                key="plus"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                              >
                                +
                              </motion.span>
                            ) : (
                              <motion.span
                                key="minus"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                              >
                                −
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: 15 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: 15 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="overflow-hidden mt-5"
                          >
                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                              className="text-sm md:text-base text-white mb-6 leading-relaxed"
                            >
                              {card.description}
                            </motion.p>

                            <span className="inline-block px-8 py-2 rounded-lg bg-[#153D63] text-yellow-400 text-sm font-medium shadow-md">
                              {card.linkLabel}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;
