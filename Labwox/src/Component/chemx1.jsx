import React from "react";
import Wrapper from "./wrapper";
import { Microscope, FlaskConical, Award } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Who We Are",
    icon: <Microscope className="w-10 h-10 text-[#FFC000] mb-4" />,
    description:
      "Chemxpert is a research accelerator dedicated to supporting scientists and innovators. We connect researchers with advanced analytical laboratories, technical expertise, and resources to turn groundbreaking ideas into reality.",
  },
  {
    title: "What We Do",
    icon: <FlaskConical className="w-10 h-10 text-[#FFC000] mb-4" />,
    description:
      "We provide seamless access to cutting-edge analytical equipment, expert consultation, and hands-on training—ensuring researchers can confidently operate instruments and fully utilize the technology to achieve their goals.",
  },
  {
    title: "Our Values",
    icon: <Award className="w-10 h-10 text-[#FFC000] mb-4" />,
    description:
      "We believe in scientific integrity, collaboration, and innovation. Our commitment to transparency, quality, and long-term partnerships ensures meaningful impact in every project we support.",
  },
];

const Chemx = () => {
  return (
    <Wrapper>
      <section className="bg-[#faf3ed] text-black py-20 px-4 my-10 w-full rounded-lg">
        <div className="max-w-8xl mx-auto text-center mb-12">
          <h5 className="text-gray-900 max-w-6xl mx-auto font-light text-3xl">
            Chemxpert accelerates research by connecting scientists with
            high-performance analytical laboratories, expert guidance, training
            opportunities, and funding—removing obstacles that slow down
            scientific progress.
          </h5>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {item.icon}
              <div className="relative group">
                <h3 className="text-2xl font-medium text-gray-100 mb-2">
                  {item.title}
                </h3>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 bg-[#FFC000] rounded-full group-hover:shadow-[0_0_8px_#f97316] transition-all duration-300"
                ></motion.span>
              </div>
              <p className="text-gray-100 text-lg mt-4">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Chemx;
