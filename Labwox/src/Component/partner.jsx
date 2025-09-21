import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper";
import lasepa from "../assets/image/lasepa-logo.png";
import son from "../assets/image/SON-logo.png";
import nirma from "../assets/image/NIRMA.png";
import scientific from "../assets/image/ls-scientific.png";
import ctx from "../assets/image/ctx.png";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const Partner = () => {
  const logos = [lasepa, son, nirma, scientific, ctx];
  const [direction, setDirection] = useState(1);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  // Alternate slide direction every 25 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => -prev);
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  // Handle pause/resume when hovering
  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: direction === 1 ? "-100%" : "100%",
        transition: { duration: 25, ease: "linear", repeat: Infinity },
      });
    }
  }, [direction, isPaused, controls]);

  return (
    <Wrapper>
      <div className="relative bg-white text-gray-900 overflow-hidden my-8">
      
        <div className="py-8 md:py-14 relative z-10">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#f9f9f9] py-14 drop-shadow-2xl rounded-2xl mx-4 lg:mx-0 border border-gray-100"
            >
              <div className="text-center px-4">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-thin leading-relaxed text-gray-800">
                  These great companies have chosen to trust{" "}
                  <span className="text-[#153D63] font-normal">Labwox</span>.
                </h2>
                <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  We proudly collaborate with top organizations that value
                  innovation, precision, and research excellence.
                </p>
              </div>

              {/* Sliding Logos Section */}
              <div className="mt-12 overflow-hidden">
                <motion.div
                  className="flex items-center justify-start gap-10 md:gap-16 cursor-pointer"
                  animate={controls}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {[...logos, ...logos].map((logo, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl hover:scale-105 transition-transform duration-300 shadow-md w-20 sm:w-28 md:w-32 flex justify-center items-center p-3 md:p-5 border border-gray-200"
                    >
                      <img
                        src={logo}
                        alt={`Partner logo ${index + 1}`}
                        className="w-full h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center py-8 lg:py-10"
            >
              <h3 className="text-xl sm:text-2xl md:text-4xl max-w-6xl lg:text-5xl font-light leading-snug px-6 sm:px-5 lg:px-10 mx-auto text-gray-800">
                Discover how partnering with{" "}
                <span className="text-[#FFC000]">Labwox</span> can elevate your
                research and training capabilities.
              </h3>

              <div className="mt-8 px-5">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FFC000] hover:bg-[#ffca2c] text-black font-semibold text-base md:text-lg lg:text-xl py-3 px-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

        {/* Soft Background Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-24 bg-[#153D63]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-24 bg-[#FFC000]/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Partner;
