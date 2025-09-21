import React from "react";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Chemdxpert = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Wrapper>
      <section className="relative w-full py-14 px-6 sm:px-10 lg:px-20 overflow-hidden bg-white mb-10">
        {/* === Subtle Animated Particles === */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            particles: {
              number: { value: 40, density: { enable: true, area: 800 } },
              color: { value: "#0B3D2E" },
              shape: { type: "circle" },
              opacity: { value: 0.1 },
              size: { value: 2, random: true },
              links: {
                enable: true,
                distance: 150,
                color: "#0B3D2E",
                opacity: 0.15,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                outModes: { default: "bounce" },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.3 } },
              },
            },
            retina_detect: true,
          }}
          className="absolute inset-0 z-0"
        />

        {/* === Decorative Blobs (very subtle) === */}
        <div className="absolute top-24 left-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute bottom-24 right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl z-0 animate-pulse delay-700" />

        {/* === Main Content === */}
        <div className="relative max-w-6xl mx-auto text-center z-10">
          {/* === Heading === */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#0B3D2E] font-semibold text-4xl md:text-5xl mt-4"
          >
            Who Can Benefit?
          </motion.h1>

          {/* === Decorative underline === */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-4 h-1 w-28 mx-auto bg-yellow-400 rounded-full"
          />

          {/* === Benefit Cards === */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { desc: "Faculties of Science and Environmental Sciences" },
              { desc: "Departments of Chemistry, Biology, and Engineering" },
              { desc: "Postgraduate Schools and Research Centers" },
              { desc: "University Research Offices seeking strong industry-academic partnerships" },
              { desc: "Industrial R&D and Startups advancing innovations" },
              { desc: "Individual Researchers aiming for impactful publications" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-yellow-400/30 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* === CTA Section === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 max-w-3xl mx-auto bg-white border border-yellow-400/30 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3D2E] mb-4">
              Take the First Step
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              ChemXpert is more than free testing — it’s the start of a
              transformative partnership. By combining institutional knowledge
              with Labwox’s scientific network, we produce research outputs that
              are impactful, publishable, and globally competitive.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block px-8 py-3 bg-yellow-400 text-[#0B3D2E] font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-300 transition-all"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Chemdxpert;
