import React from "react";
import Wrapper from "./wrapper";
import {
  FlaskConical,
  FileBarChart2,
  Users2,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Collaborative Research Support",
    icon: <Users2 className="w-10 h-10 text-orange-600 mb-4" />,
    description:
      "Design, execution, and publishing of high-impact studies—backed by our technical and analytical infrastructure.",
  },
  {
    title: "Lab Productivity Solutions (Labsoft)",
    icon: <FileBarChart2 className="w-10 h-10 text-orange-600 mb-4" />,
    description:
      "A project and reporting platform tailored for laboratories to improve task tracking, documentation, and performance.",
  },
  {
    title: "Method Development & Analytical Support",
    icon: <FlaskConical className="w-10 h-10 text-orange-600 mb-4" />,
    description:
      "Access to a network of advanced laboratories and specialists in areas like environmental pollutants, water quality, and phytochemicals.",
  },
  {
    title: "Capacity Building",
    icon: <GraduationCap className="w-10 h-10 text-orange-600 mb-4" />,
    description:
      "Training and development services to improve lab operations, data integrity, and research outcomes.",
  },
];

const About = () => {
  return (
    <Wrapper>
      <section className="bg-neutral-100 py-20 px-4 my-10 w-full">
        <div className="mx-auto text-center mb-12">
          <h5 className="text-gray-900 font-light text-5xl">
            Our Core Offerings
          </h5>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2 text-2xl font-light">
            We provide cutting-edge services to advance scientific research and laboratory productivity across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto px-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="text-4xl font-normal text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default About;
