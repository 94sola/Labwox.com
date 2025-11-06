import React from "react";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  FlaskConical,
  Building2,
  Microscope,
  Beaker,
  Factory,
  UserRoundSearch,
} from "lucide-react";;

export default function LabwoxFeatures() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const benefitItems = [
    {
      icon: FlaskConical,
      desc: "Faculties of Science and Environmental Sciences",
    },
    {
      icon: Building2,
      desc: "Departments of Chemistry, Biology, and Engineering",
    },
    {
      icon: Microscope,
      desc: "Postgraduate Schools and Research Centers",
    },
    {
      icon: Beaker,
      desc: "University Research Offices seeking strong industry-academic partnerships",
    },
    {
      icon: Factory,
      desc: "Industrial R&D and Startups advancing innovations",
    },
    {
      icon: UserRoundSearch,
      desc: "Individual Researchers aiming for impactful publications",
    },
  ];
  return (
    <Wrapper>
      <section className="w-full bg-gradient-to-br from-[#0a3d62] via-[#1b4f72] to-[#6a0572] my-10 items-center justify-center px-4 py-20">
        {/* === Particle + Benefit Section === */}
        <div className="relative w-full py-14 px-16 mx-auto overflow-hidden ">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: { enable: false },
              background: { color: "transparent" },
              particles: {
                number: { value: 35, density: { enable: true, area: 800 } },
                color: { value: "#153D63" },
                shape: { type: "circle" },
                opacity: { value: 0.08 },
                size: { value: 2, random: true },
                links: {
                  enable: true,
                  distance: 150,
                  color: "#153D63",
                  opacity: 0.15,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 0.6,
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

          <div className="relative max-w-5xl mx-auto text-center z-10">
            {/* === Heading === */}
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white font-bold text-4xl md:text-5xl mt-4 tracking-tight"
            >
              Who Can Benefit?
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-4 h-1 w-28 mx-auto bg-yellow-400 rounded-full"
            />

            {/* === Benefit Cards === */}
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {benefitItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 30px rgba(21,61,99,0.25)",
                    }}
                    className="px-4 py-10 transition-all text-[#153D63]"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-lg font-medium leading-relaxed text-white">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* === CTA Section === */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-20 max-w-3xl mx-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-yellow-400/30 rounded-2xl p-8 shadow-2xl"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#153D63] mb-4">
                Take the First Step
              </h2>
              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
                ChemXpert is more than free testing — it’s the start of a
                transformative partnership. By combining institutional knowledge
                with Labwox’s scientific network, we produce research outputs
                that are impactful, publishable, and globally competitive.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-block px-8 py-3 bg-[#153D63] text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-[#1e4d7c] transition-all"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
