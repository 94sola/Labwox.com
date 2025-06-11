import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import exploreImage from "../assets/image/hero-imge.jpg"; // Ensure the image exists

const Labwox = () => {
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

        {/* Divider */}
        <div className="relative my-10">
          <hr className="border-t border-gray-300" />
          <div className="absolute inset-0 flex justify-center -top-4">
            <span className="bg-white px-5 text-[#153D63] font-semibold text-lg sm:text-xl uppercase tracking-wide shadow-sm rounded-full border border-gray-200">
              Precision <span className="text-[#FFC000]">in Practice</span>
            </span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="px-6 py-2 text-sm sm:text-base bg-[#FFC000] text-black font-medium rounded-md hover:bg-yellow-400 transition-all duration-200 shadow hover:shadow-md"
          >
            Previous
          </Link>
          <Link
            to="/explore"
            className="px-6 py-2 text-sm sm:text-base bg-[#153D63] text-white font-medium rounded-md hover:bg-[#102B4E] transition-all duration-200 shadow hover:shadow-md"
          >
            Next
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

export default Labwox;
