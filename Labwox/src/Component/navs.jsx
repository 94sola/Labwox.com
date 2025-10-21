import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FlaskConical, Atom, ServerCog } from "lucide-react";

import labwoxImg from "../assets/image/labwox.jpg";
import chemxpertImg from "../assets/image/labwox4.jpg";
import labsoftImg from "../assets/image/labsoft.jpg";

const Tooltip = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.18, ease: "easeOut" }} // faster tooltip animation
    className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-xl border border-white/10 backdrop-blur-md z-50"
  >
    {text}
  </motion.div>
);

const cards = [
  {
    title: "Labwox",
    icon: <FlaskConical className="w-7 h-7 md:w-9 md:h-9 text-[#153D63]" />,
    image: labwoxImg,
    link: "/",
    description: "Home",
    tooltip: "Explore Labwox",
  },
  {
    title: "ChemXpert",
    icon: <Atom className="w-7 h-7 md:w-9 md:h-9 text-[#0B3D2E]" />,
    image: chemxpertImg,
    link: "/chemxpert",
    description: "Bring your research ideas to life.",
    tooltip: "Discover ChemXpert",
  },
  {
    title: "Labsoft",
    icon: <ServerCog className="w-7 h-7 md:w-9 md:h-9 text-blue-600" />,
    image: labsoftImg,
    link: "/labsoft",
    description: "Science Productivity Solutions.",
    tooltip: "View Labsoft",
  },
];

const NavTop = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const isDesktop = () => window.innerWidth >= 768;

  useEffect(() => {
    const handleResize = () => {
      if (!isDesktop()) {
        setIsHovered(false);
        setHoveredIndex(null);
      }
    };

    const handleClickOutside = (e) => {
      if (
        isHovered &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setIsHovered(false);
        setHoveredIndex(null);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isHovered]);

  return (
    <motion.div
      ref={containerRef}
      className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800 shadow-[0_3px_20px_rgba(0,0,0,0.5)] overflow-hidden"
      onMouseEnter={() => {
        if (isDesktop()) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (isDesktop()) {
          setIsHovered(false);
          setHoveredIndex(null);
        }
      }}
      animate={{
        height: isDesktop() && isHovered ? "auto" : "3.5rem",
      }}
      transition={{
        duration: isHovered ? 0.15 : 0.05, // ⚡ faster open, instant close
        ease: "easeOut",
      }}
    >
      <div
        className={`max-w-[1280px] w-full mx-auto transition-all duration-200 ${
          isDesktop() && isHovered
            ? "py-6 grid grid-cols-3 gap-6"
            : "h-14 flex items-center justify-between px-4"
        }`}
      >
        {cards.map((card, index) => {
          const isCardHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => isDesktop() && setHoveredIndex(index)}
              onMouseLeave={() => isDesktop() && setHoveredIndex(null)}
              className={`nav relative group rounded-2xl overflow-hidden transition-all duration-200 border border-transparent
                ${
                  isDesktop() && isHovered
                    ? isCardHovered
                      ? "bg-white text-gray-900 shadow-2xl border-gray-200 scale-[1.02]"
                      : "bg-[#bb059d] text-white hover:scale-[1.01]"
                    : "bg-transparent text-white"
                }
              `}
            >
              {/* MOBILE VIEW */}
              <Link
                to={card.link}
                className="block md:hidden h-full w-full px-3 py-2"
              >
                <div className="flex items-center justify-center">
                  <h3 className="text-sm font-semibold tracking-wide">
                    {card.title}
                  </h3>
                </div>
              </Link>

              {/* DESKTOP VIEW */}
              <Link
                to={card.link}
                className="hidden md:block h-full w-full px-4 py-3"
              >
                <AnimatePresence>
                  {isHovered && isDesktop() ? (
                    <>
                      {/* Image with Icon */}
                      <motion.div
                        className="relative w-full h-24 md:h-28 rounded-lg overflow-hidden shadow-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.1 }} 
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transform transition-transform duration-400 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.3 }} 
                            className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/30 shadow-md"
                          >
                            {card.icon}
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Texts */}
                      <h3 className="text-base md:text-lg font-semibold text-center mt-2 tracking-wide">
                        {card.title}
                      </h3>

                      <motion.p
                        className="mt-1 text-sm text-center text-neutral-900 px-2 leading-snug"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.02, duration: 0.12 }}
                      >
                        {card.description}
                      </motion.p>

                      {isCardHovered && <Tooltip text={card.tooltip} />}
                    </>
                  ) : (
                    // Collapsed view
                    <div className="flex items-center justify-center h-full hover:text-pink-600 transition-colors">
                      <h3 className="text-base font-semibold text-center w-full tracking-wide">
                        {card.title}
                      </h3>
                    </div>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default NavTop;
