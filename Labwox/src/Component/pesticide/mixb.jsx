import React, { useState } from "react";  
import { Link, useNavigate } from "react-router-dom";
import { 
  Apple, 
  Wheat, 
  Drumstick, 
  Milk, 
  Leaf, 
  UtensilsCrossed, 
  Droplets, 
  Mountain, 
  ArrowLeft 
} from "lucide-react";
import Wrapper from "../wrapper";

const samples = [
  {
    name: "Fruits & Vegetables",
    icon: (
      <Apple className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Screening of fresh fruits and vegetables for residues of Mix B pesticides to ensure consumer safety and meet export regulations.",
    link: "/pesticide/food-beverages",
  },
  {
    name: "Cereals & Grains",
    icon: (
      <Wheat className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Comprehensive testing of wheat, rice, corn, and barley for Mix B pesticide residues, supporting food safety and trade compliance.",
    link: "/pesticide/cereals-grains",
  },
  {
    name: "Animal Feed",
    icon: (
      <Drumstick className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Analysis of livestock and poultry feed to prevent Mix B pesticide residues from entering the animal-derived food chain.",
    link: "/pesticide/animal-feed",
  },
  {
    name: "Dairy & Milk Products", 
    icon: (
      <Milk className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Testing of raw milk, cheese, butter, and yogurt for Mix B pesticide residues to ensure international compliance.",
    link: "/pesticide/dairy-products",
  },
  {
    name: "Herbs & Spices",
    icon: (
      <Leaf className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Targeted analysis of herbs and spices such as basil, coriander, and turmeric for pesticide contamination risks from Mix B compounds.",
    link: "/pesticide/herbs-spices",
  },
  {
    name: "Processed Foods",
    icon: (
      <UtensilsCrossed className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Monitoring of packaged and processed foods including snacks, baked goods, and ready-to-eat meals for Mix B residues.",
    link: "/pesticide/processed-foods",
  },
  {
    name: "Water & Beverages", 
    icon: (
      <Droplets className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Analysis of surface water, groundwater, juices, and bottled beverages for trace levels of Mix B pesticides.",
    link: "/pesticide/water-beverages",
  },
  {
    name: "Soil & Environmental Samples", 
    icon: (
      <Mountain className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors duration-200" />
    ),
    description:
      "Testing of agricultural soil and environmental matrices to evaluate Mix B pesticide accumulation and persistence.",
    link: "/pesticide/environmental-samples",
  },
];

const MixB = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 300);
  };

  const compounds = [
    "Eptam",
    "Pebulate",
    "Chloroneb",
    "Molinate",
    "Propachlor",
    "Cycloate",
    "delta-Lindane",
    "Lindane/Atrazine",
    "Propazine",
    "Chlorothalonil",
    "Simetryn",
    "Metolachlor",
    "DCPA",
    "Diphenamid",
    "g-Chlordane",
    "a-Chlordane",
    "p,p'-DDE",
    "p,p'-DDD",
    "p,p'-DDT",
    "Methoxychlor",
    "Permethrin",
  ];

  return (
    <Wrapper>
      <section className="bg-gradient-to-b from-white via-neutral-50 to-white py-16 lg:py-24 mb-10" style={{ cursor: loading ? "wait" : "default" }}>
        
        {/* Back Link */}
        <div className="max-w-5xl mx-auto px-4 mb-8">
          <Link
            to="/pesticide/multi"
            className="inline-flex items-center gap-2 italic text-[#153D63] hover:text-[#FFC000] transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to multi-residue pesticides 
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 px-4">
          <h1 className="text-5xl md:text-6xl font-light text-[#153D63] mb-6">
            Pesticide Multi Residue Mix B
          </h1>
          <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
            Mix B consists of selected herbicides, fungicides, and organochlorines 
            commonly targeted in regulatory monitoring. Designed for multi-residue 
            analysis, it provides accurate detection across diverse food and 
            environmental matrices.
          </p>

          {/* Compounds List */}
          <div className="mt-10 max-w-5xl mx-auto">
            <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
              Available Compounds
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {compounds.map((compound, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white rounded-xl p-4 text-center text-gray-800 text-base font-medium shadow-sm hover:shadow-md hover:border-[#FFC000] transition-all duration-300"
                >
                  {compound}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sample Types */}
        <h2 className="text-4xl font-normal text-[#153D63] text-center mb-8">
          Select Sample Type
        </h2>
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {samples.map((sample, index) => (
            <div
              key={index}
              onClick={() => handleClick(sample.link)}
              style={{ cursor: loading ? "wait" : "pointer" }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#FFC000] transition-all duration-300 text-center flex flex-col items-center h-full group"
            >
              {sample.icon}
              <h3 className="text-2xl font-normal text-gray-800 mt-4 mb-2 group-hover:text-[#FFC000] transition-colors duration-200">
                {sample.name}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {sample.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default MixB;
