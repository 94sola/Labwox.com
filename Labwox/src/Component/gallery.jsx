import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cre from "../assets/image/about-chem.jpg";
import pre from "../assets/image/labwox1.jpg";
import pri from "../assets/image/labwox2.jpg";
import nur from "../assets/image/son-4.jpg";
import crea from "../assets/image/labwox5.jpg";
import nurs from "../assets/image/labwox3.jpg";
import afters from "../assets/image/son-7.jpg";
import prise from "../assets/image/son-8.jpg";
import uni from "../assets/image/unilag-training.jpg";
import pics from "../assets/image/labsoft1.jpg";
import pic from "../assets/image/labwox4.jpg";
import Wrapper from "./wrapper";

const images = [
  { src: crea, label: "Standards Organization of Nigeria (SON)" },
  { src: nurs, label: "Standards Organization of Nigeria (SON)" },
  { src: afters, label: "Standards Organization of Nigeria (SON)" },
  { src: prise, label: "Standards Organization of Nigeria (SON)" },
  { src: cre, label: " Standards Organization of Nigeria (SON)" },
  { src: pri, label: "Standards Organization of Nigeria (SON)" },
  { src: nur, label: "tandards Organization of Nigeria (SON)" },
  { src: pre, label: "Standards Organization of Nigeria (SON)" },
  { src: pics, label: " Nigeria Institute of medical research(NIMR)" },
  { src: pic, label: "Nigeria Institute of medical research(NIMR)" },
  { src: uni, label: "University of Lagos (UNILAG)" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <div className="bg-[#153D63] py-16 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
        {/* Section Header */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 relative inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Media
        </motion.h1>

        {/* Sliding Images */}
        <div className="relative w-full max-w-full sm:max-w-md md:max-w-xl lg:max-w-4xl overflow-hidden">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={`Gallery Image ${currentIndex}`}
            className="w-full h-[300px] sm:h-[400px] md:h-[510px] object-cover rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            onClick={() => setSelectedImage(images[currentIndex].src)}
          />
          <div className="text-center mt-2">
            <p className="text-lg font-semibold text-gray-50">{images[currentIndex].label}</p>
          </div>
        </div>

        {/* Fullscreen Image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Fullscreen"
                className="w-auto max-w-full max-h-full object-contain"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Wrapper> 
  );
};

export default Gallery;
