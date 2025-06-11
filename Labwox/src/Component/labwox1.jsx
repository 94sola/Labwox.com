import React, { useRef, useState } from "react";
import { FiGlobe, FiSmartphone, FiServer, FiPause, FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";
import lab from "../assets/image/background.jpg";
import exploreVideo from "../assets/image/vid1.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Chemxpert = () => {
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
      <section className="relative bg-neutral-200 py-20">
        {/* Background Image */}
        <img
          src={lab}
          alt="Laboratory Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />

        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
          {/* Intro Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16"
          >
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight max-w-3xl mx-auto lg:mx-0">
                ChemXpert
              </h1>
              <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                ChemXpert empowers labs with tailored training, consulting, and research support —
                accelerating innovation, compliance, and scientific excellence.
              </p>
            </div>

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

          {/* Services Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiGlobe className="w-8 h-8 text-neutral-700" />,
                title: "Application Training",
                desc: "Personalized training for academics or science professionals looking to upskill in specific applications relating to GC, HPLC, ICP-OES.",
                buttons: [{ label: "Contact Us", link: "/contact" }],
                bg: "bg-rose-100",
              },
              {
                icon: <FiSmartphone className="w-8 h-8 text-neutral-700" />,
                title: "Consulting",
                desc: "We provide specialized consulting services that enable laboratories to maximize the use of high-end equipment.",
                buttons: [{ label: "Explore Examples", link: "/consulting" }],
                bg: "bg-yellow-100",
              },
              {
                icon: <FiServer className="w-8 h-8 text-neutral-700" />,
                title: "Research",
                desc: "Collaborate with us through the ChemXpert service and drive impactful research outcomes.",
                buttons: [
                  { label: "Specify Research Interest", link: "/research-interest" },
                ],
                bg: "bg-green-50",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white/90 backdrop-blur-md rounded-3xl shadow-md flex flex-col justify-between transition duration-300 hover:shadow-xl min-h-[320px] overflow-hidden"
              >
                {/* Top Section */}
                <div className={`w-full ${card.bg} px-4 pt-5 pb-3`}>
                  <div className="flex flex-col items-start gap-2">
                    {card.icon}
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 px-4 py-4">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Buttons */}
                <div className="px-4 pb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {card.buttons.map((btn, i) => (
                    <Link key={i} to={btn.link} className="w-full sm:w-auto cursor-pointer">
                      <p className="inline-block text-center text-neutral-800 text-sm font-medium border border-neutral-700 rounded-md px-4 py-2 hover:bg-neutral-100 transition w-full">
                        {btn.label}
                      </p>
                    </Link>
                  ))}
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
