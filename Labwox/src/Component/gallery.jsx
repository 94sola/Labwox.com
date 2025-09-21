import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nur from "../assets/image/son-4.jpg";
import afters from "../assets/image/son-7.jpg";
import prise from "../assets/image/son-8.jpg";
import uni from "../assets/image/unilag-training.jpg";
import vid from "../assets/image/vid1.mp4";
import Wrapper from "./wrapper";

const images = [
  { src: afters, label: "Standards Organization of Nigeria (SON)" },
  { src: prise, label: "Standards Organization of Nigeria (SON)" },
  { src: nur, label: "Standards Organization of Nigeria (SON)" },
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
        {/* ===== Section Header ===== */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white text-center mb-12 relative inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Media
        </motion.h1>

        {/* ===== Sliding Images ===== */}
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
          <div className="text-center mt-3">
            <p className="text-lg font-normal text-gray-50">
              {images[currentIndex].label}
            </p>
          </div>
        </div>

        {/* ===== Video Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 w-full max-w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white text-center mb-6">
            Watch Labwox in Action
          </h2>

          <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
            <video
              src={vid}
              autoPlay
              muted
              loop
              controls
              preload="metadata"
              className="w-full h-[260px] sm:h-[380px] md:h-[480px] object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-gray-200 text-center mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover how Labwox empowers institutions with advanced training,
            expert-led workshops, and hands-on learning experiences that drive
            innovation and skill development.
          </p>
        </motion.div>

        {/* ===== Fullscreen Image View ===== */}
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
                className="w-auto max-w-full max-h-full object-contain rounded-lg"
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
