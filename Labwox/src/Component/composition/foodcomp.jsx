import Wrapper from "../wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Applications with their respective links
const applications = [
  { name: "Fatty Acid Methyl Esters (FAMEs)", link: "/composition/food/fame" },
  { name: "Minerals in Food", link: "/composition/food/mineral" },
  { name: "Others", link: "/composition/other" },
];

const FoodComposition = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-16 mb-10 lg:py-24 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/molecule-pattern.svg')] bg-repeat" />

        {/* Navigation - Only Previous */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/composition"
            className="flex items-center gap-2 italic hover:text-white text-[#FFC000] transition"
          >
            <ArrowLeft size={20} /> Back to composition applications 
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-wide">
            Food Composition Analysis
          </h1>
          <p className="mt-4 text-lg text-gray-50 max-w-5xl mx-auto leading-relaxed">
            Comprehensive analytical methods to determine the composition of 
            food and related products. From Fatty Acid Methyl Esters (FAMEs)
            to Minerals and other components, our techniques ensure accurate, 
            reliable, and reproducible results for research, industry, and 
            regulatory applications.
          </p>
        </div>

        {/* Application Grid */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-200 hover:border-[#FFC000] rounded-xl p-6 text-center text-white hover:shadow-lg hover:shadow-[#ffc00033] transition"
            >
              <Link to={app.link}>
                <p className="text-white text-lg md:text-xl font-medium px-4 text-center">
                  {app.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Wrapper> 
  );
};

export default FoodComposition;
