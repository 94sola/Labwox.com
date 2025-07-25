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
    icon: <FlaskConical className="w-6 h-6 md:w-8 md:h-8" />,
    image: labwoxImg,
    link: '/',
    description: 'Home',
    tooltip: 'Explore Labwox',
  },
  {
    title: 'ChemXpert',
    icon: <Atom className="w-6 h-6 md:w-8 md:h-8" />,
    image: chemxpertImg,
    link: '/chemxpert',
    description: 'Bring your research ideas to life.',
    tooltip: 'Discover ChemXpert',
  },
  {
    title: 'Labsoft',
    icon: <ServerCog className="w-6 h-6 md:w-8 md:h-8" />,
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
      animate={{
        height: isDesktop() && isHovered ? 'auto' : '3rem', // only desktop collapse height
      }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div
        className={`max-w-[1280px] w-full mx-auto transition-all duration-200 ${
          isDesktop() && isHovered
            ? 'py-6 grid grid-cols-3 gap-4'
            : 'h-12 flex items-center justify-between gap-2'
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
                      : 'bg-[#b92b7e] text-white border'
                    : 'bg-transparent text-white'
                }
              `}
            >
              {/* MOBILE view: title only */}
              <Link
                to={card.link}
                className="block md:hidden h-full w-full px-3 py-2"
              >
                <div className="flex items-center justify-center">
                  <h3 className="text-sm font-medium">{card.title}</h3>
                </div>
              </Link>

              {/* DESKTOP expanded or collapsed */}
              <Link
                to={card.link}
                className="hidden md:block h-full w-full px-4 py-2"
              >
                <AnimatePresence>
                  {isHovered && isDesktop() ? (
                    <>
                      {/* Full View on Hover */}
                      <motion.div
                        className="relative w-full h-28 md:h-32 rounded overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.10 }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-md">
                            {card.icon}
                          </div>
                        </div>
                      </motion.div>

                      <h3 className="text-base md:text-lg font-light text-center mt-2">
                        {card.title}
                      </h3>

                      <motion.p
                        className="mt-1 text-sm px-1 text-center text-neutral-700"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.05, duration: 0.15 }}
                      >
                        {card.description}
                      </motion.p>

                      {isCardHovered && <Tooltip text={card.tooltip} />}
                    </>
                  ) : (
                    // Collapsed View on Desktop
                    <div className="flex items-center justify-center h-full">
                      <h3 className="text-base font-medium text-center w-full">
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
