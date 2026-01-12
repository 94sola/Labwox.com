import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  RotateCw,
  Maximize,
} from "lucide-react";

import nur from "../assets/image/son-4.jpg";
import afters from "../assets/image/son-7.jpg";
import prise from "../assets/image/son-8.jpg";
import uni from "../assets/image/unilag-training.jpg";
import nurs from "../assets/image/SON collage.png";
import after from "../assets/image/son6.jpg";
import pris from "../assets/image/son9.jpeg";
import unis from "../assets/image/son2.jpg";
import nurse from "../assets/image/son3.jpg";
import afterse from "../assets/image/son4.jpg";
import prises from "../assets/image/son5.jpg";
import unises from "../assets/image/son8.jpg";
import son from "../assets/image/son3.jpg";
import son1 from "../assets/image/son4.jpg";
import son2 from "../assets/image/son5.jpg";
import son3 from "../assets/image/son8.jpg";
import uni12 from "../assets/image/unilag1.jpg";
import uni1 from "../assets/image/unilag.jpg";
import uni2 from "../assets/image/unilag2.jpg";
import uni3 from "../assets/image/unilag7.jpg";
import uni8 from "../assets/image/unilag12.jpg";
import uni9 from "../assets/image/unilag22.jpg";
import uni10 from "../assets/image/unilag17.jpg";
import uni11 from "../assets/image/unilag13.jpg";
import uni4 from "../assets/image/unilag10.jpg";
import uni5 from "../assets/image/unilag8.jpg";
import uni6 from "../assets/image/unilag17.jpg";
import uni7 from "../assets/image/unilag19.jpg";

import lasepa from "../assets/image/lasepa-photo-collage.png";
import lasepa1 from "../assets/image/lasepa1.jpg";
import lasepa2 from "../assets/image/lasepa2.jpg";
import lasepa3 from "../assets/image/lasepa3.jpg";
import lasepa4 from "../assets/image/lasepa10.jpg";
import lasepa5 from "../assets/image/lasepa3.jpg";
import lasepa6 from "../assets/image/lasepa5.jpg";
import lasepa7 from "../assets/image/lasepa6.jpg";

import vid from "../assets/image/trainingvid.mp4";
import Wrapper from "./wrapper";

const images = [
  { src: after, label: "Standards Organization of Nigeria (SON)" },
  { src: pris, label: "Standards Organization of Nigeria (SON)" },
  { src: nurs, label: "Standards Organization of Nigeria (SON)" },
  { src: unis, label: "Standards Organization of Nigeria (SON)" },
  { src: afters, label: "Standards Organization of Nigeria (SON)" },
  { src: prise, label: "Standards Organization of Nigeria (SON)" },
  { src: nur, label: "Standards Organization of Nigeria (SON)" },
  { src: unises, label: "Standards Organization of Nigeria (SON)" },
  { src: afterse, label: "Standards Organization of Nigeria (SON)" },
  { src: prises, label: "Standards Organization of Nigeria (SON)" },
  { src: nurse, label: "Standards Organization of Nigeria (SON)" },
  { src: son, label: "Standards Organization of Nigeria (SON)" },
  { src: son2, label: "Standards Organization of Nigeria (SON)" },
  { src: son3, label: "Standards Organization of Nigeria (SON)" },
  { src: son1, label: "Standards Organization of Nigeria (SON)" },
  { src: uni, label: "University of Lagos (UNILAG)" },
  { src: lasepa, label: "Lagos State Environmental Protection Agency" },
  { src: lasepa1, label: "Lagos State Environmental Protection Agency" },
  { src: lasepa2, label: "Lagos State Environmental Protection Agency" },
  { src: lasepa3, label: "Lagos State Environmental Protection Agency" },
  { src: lasepa4, label: "Lagos State Environmental Protection Agency" },
  { src: lasepa5, label: "Lagos State Environmental Protection Agency" },
  { src: lasepa6, label: "Lagos State Environmental Protection Agency" },
  { src: lasepa7, label: "Lagos State Environmental Protection Agency" },
  { src: uni1, label: "University of Lagos (UNILAG)" },
  { src: uni2, label: "University of Lagos (UNILAG)" },
  { src: uni3, label: "University of Lagos (UNILAG)" },
  { src: uni4, label: "University of Lagos (UNILAG)" },
  { src: uni5, label: "University of Lagos (UNILAG)" },
  { src: uni6, label: "University of Lagos (UNILAG)" },
  { src: uni7, label: "University of Lagos (UNILAG)" },
  { src: uni8, label: "University of Lagos (UNILAG)" },
  { src: uni9, label: "University of Lagos (UNILAG)" },
  { src: uni10, label: "University of Lagos (UNILAG)" },
  { src: uni11, label: "University of Lagos (UNILAG)" },
  { src: uni12, label: "University of Lagos (UNILAG)" },
];


const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.7);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
    setPlaying(!v.paused);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const seek = (sec) => {
    const v = videoRef.current;
    if (v) v.currentTime += sec;
  };

  const fullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">

      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center gap-3">

          <button onClick={togglePlay} className="control-btn">
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>

          <button onClick={() => seek(-10)} className="control-btn">
            <RotateCcw size={18} />
          </button>

          <button onClick={() => seek(10)} className="control-btn">
            <RotateCw size={18} />
          </button>

          <button onClick={toggleMute} className="control-btn">
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => {
              videoRef.current.volume = e.target.value;
              setVolume(e.target.value);
            }}
            className="w-24 accent-yellow-400"
          />

          <div className="flex-1" />

          <button onClick={fullscreen} className="control-btn">
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setCurrentIndex((p) => (p + 1) % images.length),
      2000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <Wrapper>
      <div className="bg-[#153D63] py-16 px-6 flex flex-col items-center">

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-thin text-white text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Our Media
        </motion.h1>

        <div className="w-full max-w-4xl">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            className="w-full h-[460px] sm:h-[550px] object-cover rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(images[currentIndex].src)}
          />
          <p className="text-center text-white mt-3">
            {images[currentIndex].label}
          </p>
        </div>

        <div className="mt-16 w-full max-w-4xl">
          <h2 className="text-3xl text-white text-center mb-6">
            Watch Labwox in Action
          </h2>

          <VideoPlayer src={vid} />

          <p className="text-gray-200 text-center mt-4 max-w-2xl mx-auto">
            Discover how Labwox delivers hands-on training and expert-led
            analytical development across institutions.
          </p>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                className="max-w-full max-h-full rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .control-btn {
          background: #facc15;
          color: black;
          padding: 0.5rem;
          border-radius: 9999px;
          transition: all 0.2s;
        }
        .control-btn:hover {
          background: #eab308;
        }
      `}</style>
    </Wrapper>
  );
};

export default Gallery;
