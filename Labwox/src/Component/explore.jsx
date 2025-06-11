import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";
import exploreVideo from "../assets/image/vid1.mp4";
import { FiPause, FiPlay, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Labwox = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggle = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Wrapper>
      <section className="relative overflow-hidden w-full bg-white py-6 px-4 sm:px-6 lg:px-14 max-w-screen-2xl mx-auto my-6 shadow-sm">

        {/* Floating SVG Decorations */}
        <div className="absolute top-4 left-4 opacity-10 w-10 h-10 rotate-12 z-0">
          <svg viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="#153D63" strokeWidth="4" />
            <circle cx="32" cy="32" r="10" fill="#FFC000" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-6 opacity-10 w-12 h-12 rotate-45 z-0">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M32 4v56M4 32h56" stroke="#153D63" strokeWidth="4" />
            <circle cx="32" cy="32" r="8" fill="#FFC000" />
          </svg>
        </div>

        {/* Video Section */}
        <motion.div
          className="relative flex justify-center w-full mb-6 z-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-md">
            <video
              ref={videoRef}
              src={exploreVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[340px] xl:h-[360px] object-cover"
            />
            <button
              onClick={handleToggle}
              className="absolute bottom-3 right-3 bg-white/80 hover:bg-white text-[#153D63] p-2 rounded-full shadow transition"
              aria-label="Toggle video playback"
            >
              {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#153D63] leading-tight">
            Scientific Collaboration in Action
          </h2>
          <p className="text-black/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
            Labwox conducted a successful training for staff at the DK Olukoya Central Reference Laboratory, University of Lagos, on the operation and application of the Microwave Plasma–Optical Emission Spectrometer (MP-OES).
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="relative my-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <hr className="border-t border-gray-300" />
          <div className="absolute inset-0 flex justify-center -top-4">
            <span className="bg-white px-5 text-[#153D63] font-semibold text-sm sm:text-base uppercase tracking-wider shadow-sm rounded-full border border-gray-200">
              Empowering <span className="text-[#FFC000]">Analytical</span> Excellence
            </span>
          </div>
        </motion.div>

        {/* Navigation Buttons with Original Background Colors */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/consulting"
            className="flex items-center gap-2 px-4 py-2 bg-[#FFC000] text-black font-medium text-sm sm:text-base rounded-md hover:bg-yellow-400 transition-all duration-200 shadow hover:shadow-md"
          >
            <FiArrowLeftCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Previous</span>
          </Link>
          <Link
            to="/next-page"
            className="flex items-center gap-2 px-4 py-2 bg-[#153D63] text-white font-medium text-sm sm:text-base rounded-md hover:bg-[#102B4E] transition-all duration-200 shadow hover:shadow-md"
          >
            <span className="hidden sm:inline">Next</span>
            <FiArrowRightCircle className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </Wrapper>
  );
};

export default Labwox;
