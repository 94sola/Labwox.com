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


  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => -prev);
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"],
        transition: { duration: 25, ease: "linear", repeat: Infinity },
      });
    }
  }, [direction, isPaused, controls]);

  return (
    <Wrapper>
      <div className="relative bg-neutral-200 text-[#153D63] overflow-hidden">
        <div className="px-10 md:py-14 relative z-10">

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
              <p className="mt-3 text-[#153D63] text-base md:text-2xl max-w-2xl mx-auto">
                We proudly collaborate with top organizations that value
                innovation, precision, and research excellence.
              </p>
            </div>

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

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center py-8 lg:py-10"
          >
            <h3 className="text-xl sm:text-2xl md:text-4xl max-w-5xl lg:text-5xl font-thin leading-snug px-6 sm:px-5 lg:px-10 mx-auto text-[#153D63]">
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
      </div>
    </Wrapper>
  );
};

export default Partner;
