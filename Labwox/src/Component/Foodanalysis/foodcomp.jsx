import Wrapper from "../wrapper";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import food from "../../assets/image/oil.jpg";


// Applications with their respective links
const applications = [
  { name: "Fatty Acid Methyl Esters (FAMEs)", link: "/food/foodananlysis/fame" },
  { name: "Minerals in Food", link: "/food/foodananlysis/mineral" },
  { name: "Proximate Analysis of Foods", link: "/food/foodananlysis/proximate" },
  { name: "Oil Quality Parameters", link: "/food/foodananlysis/oil" },
];

const Food = () => {
  return (
    <Wrapper>
      <section className="relative w-full py-24 sm:py-28 lg:py-36 overflow-hidden bg-fixed bg-center bg-cover mb-10"
          style={{ backgroundImage: `url(${food})` }}
        >
          {/* Dark Overlay for Contrast */}
          <div className="absolute inset-0 bg-neutral-800/70 backdrop-blur-[2px]" />

          
        {/* Navigation - Only Previous */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/foodwater"
            className="flex items-center gap-2 italic hover:text-white text-[#FFC000] transition"
          >
            <ArrowLeft size={20} /> Back to Food and water analysis 
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-wide">
            Food Composition Analysis
          </h1>
          <p className="mt-4 text-lg text-gray-50 max-w-3xl mx-auto leading-relaxed">
            Comprehensive analytical methods to determine the composition of 
            food and related products. From Fatty Acid Methyl Esters (FAMEs)
            to Minerals and other components, our techniques ensure accurate, 
            reliable, and reproducible results for research, industry, and 
            regulatory applications.
          </p>
        </div>

        {/* Application Grid */}
        <div className="relative max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-neutral-700/60 backdrop-blur-sm border border-white/20 rounded-xl p-5 sm:p-7 text-center text-white hover:bg-[#FFC000]/20 hover:border-[#FFC000] hover:shadow-lg hover:shadow-[#ffc00055] transition duration-300"
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

export default Food;