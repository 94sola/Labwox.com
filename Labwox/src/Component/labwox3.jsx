import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import { FaStar } from "react-icons/fa";
import labsofts from "../assets/image/review.jpg";
import lab from "../assets/image/background.jpg";

const testimonials = [
  {
    name: "Habeebat Abdullahi",
    company: "Lagos State Environmental Protection Agency",
    text: "Labwox helped in upskilling key technical staff in GCMS and MPAES analyses and have continued to be of immense help in the development of key methodologies. They have been an absolutely reliable technical partner.",
  },
  {
    name: "Prof. T.A. Adedosu",
    company: "Ladoke Akintola University of Technology Ogbomoso, Oyo State",
    text: "Labwox has shown very strong competence in aspects of GCMS relating to petroleum geochemistry. They have been instrumental in the analytical method development process necessary to execute modern research strategies.",
  },
  {
    name: "David Ikenebome",
    company: "Standards Organization of Nigeria",
    text: "Labwox played a key role in helping us achieve international accreditation for pesticide residue analysis. The Labwox team has also been instrumental in developing several methodologies in the aspects of food contaminant testing.",
  },
];

const Labwox = () => {
  return (
    <Wrapper>
      <div className="relative bg-neutral-300 overflow-hidden py-16 px-4 sm:px-8 lg:px-20">
        {/* 🧪 Background */}
        <img
          src={lab}
          alt="Labwox Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />

        {/* 💬 Testimonial Intro Section */}
        <div className="relative bg-[#153D63] rounded-3xl shadow-xl p-6 sm:p-10 lg:p-16 z-10 max-w-screen-2xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* 📝 Text Section */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight drop-shadow-md">
                Hear What Experts Say <br />
                About <span className="text-[#2a8fee] font-semibold">Labwox</span>
              </h1>
              <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-50 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                “Labwox has revolutionized the way our institution approaches research and data analysis. With its seamless integration, powerful tools, and reliable performance, our team is more productive and confident in delivering accurate results.”
              </p>
              <Link
                to="/labwox"
                className="mt-8 inline-block bg-[#2a8fee] text-white px-6 py-3 rounded-xl hover:bg-[#102B4E] transition-all text-sm font-medium shadow-md"
              >
                Explore Labwox
              </Link>
            </div>

            {/* 🖼️ Image Section */}
            <div className="flex-1 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={labsofts}
                  alt="Labwox Testimonial Visual"
                  className="w-full h-full object-contain aspect-video"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ⭐ Testimonial Cards */}
        <div className="mt-16 sm:mt-20 px-2 sm:px-4 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 space-y-4 text-center border"
              >
                <div className="flex justify-center text-[#FFC000]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-sm text-neutral-900 italic leading-relaxed">
                  “{review.text}”
                </p>
                <div className="text-base sm:text-lg text-[#153D63] font-semibold">
                  {review.name}
                </div>
                <div className="text-sm text-gray-600">{review.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Labwox;
