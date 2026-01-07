import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper";
import lasepa from "../assets/image/lasepa-logo.png";
import son from "../assets/image/SON-logo.png";
import nirma from "../assets/image/NIRMA.png";
import scientific from "../assets/image/ls-scientific.png";
import ctx from "../assets/image/CTX-logo.png";
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
        <div className="md:pb-14 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white pb-14 mx-4 lg:mx-0"
          >
            <div className="text-center px-4">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-thin leading-relaxed text-gray-900">
                These great companies have chosen to trust{" "}
                <span className="text-[#09253f] font-normal">Labwox</span>.
              </h2>
              <p className="mt-3 text-[#153D63] text-lg md:text-2xl max-w-2xl mx-auto">
                We proudly collaborate with top organizations that value
                innovation, precision, and research excellence.
              </p>
            </div>

            <div className="mt-10 overflow-hidden">
              <motion.div
                className="flex items-center justify-start gap-6 md:gap-12 cursor-pointer"
                animate={controls}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="
                      w-24 sm:w-28 md:w-32
                      h-24 sm:h-28 md:h-32
                      flex items-center justify-center
                      rounded-xl
                      transition-all duration-300
                    "
                  >
                    <img
                      src={logo}
                      alt={`Partner logo ${index + 1}`}
                      className="
                        h-18 sm:h-20 md:h-16
                        w-auto
                        object-contain
                        will-change-transform
                        translate-z-0
                      "
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
            <h3 className="text-xl sm:text-2xl md:text-4xl max-w-5xl lg:text-5xl font-thin leading-snug px-6 sm:px-5 lg:px-10 mx-auto text-[#081c30]">
              Discover how partnering with{" "}
              <span className="text-[#ffbf00]">Labwox</span> can elevate your
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
