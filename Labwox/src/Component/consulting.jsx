import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import exploreImage from "../assets/image/son-4.jpg";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const Labwox = () => {
  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
  return (
    <Wrapper>
      <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-20 max-w-screen-2xl mx-auto my-10 rounded-md shadow-sm">
        {/* Content Layout */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#153D63] leading-snug">
              Trusted Excellence in Scientific Applications
            </h2>
            <p className="text-black/70 text-sm sm:text-base md:text-lg leading-relaxed">
              Labwox partnered with the Standards Organisation of Nigeria during a recent A2LA accreditation exercise. We supported the development of analytical methods for detecting pesticide residues across a wide range of complex matrices.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={exploreImage}
              alt="Labwox Project"
              className="w-full h-auto rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>

        {/* Divider with No Line Behind Text */}
        <div className="my-12 flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 py-1 text-[#153D63] font-semibold text-base sm:text-lg md:text-xl border border-gray-200 rounded-full shadow-sm bg-white whitespace-nowrap">
            Precision <span className="text-[#FFC000]">in Practice</span>
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Navigation Buttons */}
        <div
          className="flex justify-center gap-6 flex-wrap"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/chemxpert"
            className="flex items-center gap-2 px-4 py-2 bg-[#FFC000] text-black font-medium text-sm sm:text-base rounded-md hover:bg-yellow-400 transition-all duration-200 shadow hover:shadow-md"
          >
            <FiArrowLeftCircle className="w-6 h-6" />
            <span className="hidden sm:inline"></span>
          </Link>
          <Link
            to="/explore"
            className="flex items-center gap-2 px-4 py-2 bg-[#153D63] text-white font-medium text-sm sm:text-base rounded-md hover:bg-[#102B4E] transition-all duration-200 shadow hover:shadow-md"
          >
            <span className="hidden sm:inline"></span>
            <FiArrowRightCircle className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

export default Labwox;
