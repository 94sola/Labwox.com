import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import labsoft from "../assets/image/labsoft.jpg";
import labsofts from "../assets/image/labsoft-image.jfif";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Labwox = () => {
  return (
    <Wrapper>
      <div className="relative bg-white overflow-hidden min-h-[740px] py-12 px-4 sm:px-8 lg:px-20">
        {/* Particle Bubbles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 20 + 10;
            const color = ["#FFC0CB", "#B0E0E6", "#FFD700", "#D1C4E9", "#A5D6A7"][i % 5];
            return (
              <div
                key={i}
                className="absolute rounded-full animate-bubble transition-opacity duration-300 hover:opacity-0 hover:scale-75"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              ></div>
            );
          })}
        </div>

        {/* Yellow Content Container */}
        <div className="relative bg-blue-100 rounded-3xl shadow-xl p-8 lg:p-12 z-10">
          {/* Centered Rotating Icon at Top */}
          <div className="flex justify-start mb-8">
            <motion.img
              src={labsoft}
              alt="LabSoft Icon"
              className="w-32 h-32 lg:w-44 lg:h-44 object-cover rounded-full shadow-xl border-4 border-white sparkle-glow"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />
          </div>

          {/* Main Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20"
          >
            {/* Text Section */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#153D63] leading-tight drop-shadow-md">
                Welcome to <span className="text-white">LabSoft</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                LabSoft empowers labs and academic institutions with intuitive software solutions tailored for seamless research, data tracking, and lab operations.
              </p>
              <Link
                to="/labsoft"
                className="mt-8 inline-block bg-[#153D63] text-white px-6 py-3 rounded-xl hover:bg-[#102B4E] transition-all text-base font-semibold shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Image Section */}
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src={labsofts}
                  alt="LabSoft Illustration"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) scale(1.3);
            opacity: 0;
          }
        }

        .animate-bubble {
          animation: bubble 18s infinite ease-in-out;
        }

        .sparkle-glow {
          transition: box-shadow 0.4s ease;
        }

        .sparkle-glow:hover {
          box-shadow: 0 0 25px 5px rgba(255, 217, 0, 0.8),
                      0 0 15px 2px rgba(255, 255, 255, 0.5),
                      0 0 5px 3px rgba(255, 255, 255, 0.4) inset;
          transform: scale(1.05);
        }
      `}</style>
    </Wrapper>
  );
};

export default Labwox;
