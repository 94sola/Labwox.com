import React from "react";
import Wrapper from "./wrapper";
import { Target, Flag, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Our Goal",
    icon: <Target className="w-10 h-10 text-orange-600 mb-4" />,
    description:
      "To be a leading force in our industry by driving innovation, ensuring excellence, and fostering meaningful growth that benefits our clients and community.",
  },
  {
    title: "Our Mission",
    icon: <Flag className="w-10 h-10 text-orange-600 mb-4" />,
    description:
      "We strive to deliver outstanding services with integrity and passion—empowering individuals and organizations to achieve their full potential.",
  },
  {
    title: "Our Value",
    icon: <HeartHandshake className="w-10 h-10 text-orange-600 mb-4" />,
    description:
      "We are guided by honesty, dedication, respect, and a commitment to quality in everything we do—ensuring trust and long-term impact.",
  },
];

const Aim = () => {
  return (
    <Wrapper>
      <section className="bg-neutral-100 py-20 px-4 my-10 w-full">
        <div className="max-w-8xl mx-auto text-center mb-12">
          <h5 className="text-gray-900 max-w-6xl mx-auto font-light text-3xl">
             Labwox acts as a research accelerator, connecting researchers with cutting-edge analytical laboratories, expert support, and project funding; removing barriers that slow down scientific discovery
          </h5>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="text-2xl font-medium text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Aim;
