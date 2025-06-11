import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlaskConical, Atom, ServerCog } from 'lucide-react';

import labwoxImg from '../assets/image/labwox.jpg';
import chemxpertImg from '../assets/image/about-chem.jpg';
import labsoftImg from '../assets/image/labsoft.jpg';

const Tooltip = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded shadow-lg z-40"
  >
    {text}
  </motion.div>
);

const cards = [
  {
    title: 'Labwox',
    icon: <FlaskConical className="w-8 h-8" />,
    image: labwoxImg,
    link: '/',
    description: 'Home',
    tooltip: 'Explore Labwox',
  },
  {
    title: 'ChemXpert',
    icon: <Atom className="w-8 h-8" />,
    image: chemxpertImg,
    link: '/chemxpert',
    description: 'Bring your research ideas to life.',
    tooltip: 'Discover ChemXpert',
  },
  {
    title: 'Labsoft',
    icon: <ServerCog className="w-8 h-8" />,
    image: labsoftImg,
    link: '/labsoft',
    description: 'Science Productivity Solutions.',
    tooltip: 'View Labsoft',
  },
];

const NavTop = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const isDesktop = () => window.innerWidth > 768;

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

    window.addEventListener('resize', handleResize);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isHovered]);

  return (
    <motion.div
      ref={containerRef}
      className="sticky top-0 z-50 bg-black shadow-md overflow-hidden"
      onMouseEnter={() => isDesktop() && setIsHovered(true)}
      onMouseLeave={() => {
        if (isDesktop()) {
          setIsHovered(false);
          setHoveredIndex(null);
        }
      }}
      animate={{ height: isDesktop() && isHovered ? 'auto' : '3.5rem' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div
        className={`max-w-7xl mx-auto px-4 transition-all duration-200 ${
          isDesktop() && isHovered
            ? 'py-6 grid grid-cols-3 gap-4'
            : 'h-14 flex items-center justify-between'
        }`}
      >
        {cards.map((card, index) => {
          const isCardHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => isDesktop() && setHoveredIndex(index)}
              onMouseLeave={() => isDesktop() && setHoveredIndex(null)}
              className={`relative group rounded-xl overflow-hidden transition-all duration-150
                ${
                  isDesktop() && isHovered
                    ? isCardHovered
                      ? 'bg-white text-gray-950 shadow-2xl border'
                      : 'bg-neutral-800 text-white border'
                    : 'bg-transparent text-white'
                }
              `}
            >
              {/* MOBILE ONLY VIEW: Just title with link */}
              <Link
                to={card.link}
                className="block md:hidden h-full w-full p-3"
              >
                <div className="flex items-center justify-center">
                  <h3 className="text-lg font-normal text-center w-full">
                    {card.title}
                  </h3>
                </div>
              </Link>

              {/* DESKTOP/TABLET VIEW */}
              <Link
                to={card.link}
                className="hidden md:block h-full w-full p-6 sm:p-4"
              >
                <AnimatePresence>
                  {isHovered && isDesktop() ? (
                    <>
                      {/* Image & Icon */}
                      <motion.div
                        className="relative w-full h-36 md:h-40 lg:h-44 mt-1 rounded overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-md">
                            {card.icon}
                          </div>
                        </div>
                      </motion.div>

                      {/* Title below image */}
                      <h3 className="text-lg md:text-xl lg:text-2xl font-light text-center mt-3">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <motion.p
                        className="mt-1 px-2 text-base text-center text-neutral-400"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.05, duration: 0.15 }}
                      >
                        {card.description}
                      </motion.p>

                      {/* Tooltip */}
                      {isCardHovered && <Tooltip text={card.tooltip} />}
                    </>
                  ) : (
                    // Collapsed view: show only title
                    <div className="flex items-center justify-center">
                      <h3 className="text-gl md:text-xl font-light text-center w-full">
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
