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
  ArrowLeft,
} from "lucide-react";
import Wrapper from "../wrapper";

const samples = [
  {
    name: "Fruits & Vegetables",
    icon: (
      <Apple className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors" />
    ),
    description:
      "Testing of fresh fruits and vegetables for single residue Pyrethroids to ensure consumer safety and compliance.",
    link: "/pesticide/food-beverages",
  },
  {
    name: "Cereals & Grains",
    icon: (
      <Wheat className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors" />
    ),
    description:
      "Residue analysis in wheat, rice, corn, and barley for Pyrethroids supporting food safety and trade compliance.",
    link: "/pesticide/cereals-grains",
  },
  {
    name: "Animal Feed",
    icon: (
      <Drumstick className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors" />
    ),
    description:
      "Testing of livestock and poultry feed to detect single residues of Pyrethroids and prevent contamination.",
    link: "/pesticide/animal-feed",
  },
  {
    name: "Dairy & Milk Products",
    icon: (
      <Milk className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors" />
    ),
    description:
      "Analysis of raw milk, cheese, and dairy products for residues of Pyrethroids to ensure international compliance.",
    link: "/pesticide/dairy-products",
  },
  {
    name: "Herbs & Spices",
    icon: (
      <Leaf className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors" />
    ),
    description:
      "Targeted screening of spices such as turmeric, coriander, and basil for residues of Pyrethroid compounds.",
    link: "/pesticide/herbs-spices",
  },
  {
    name: "Processed Foods",
    icon: (
      <UtensilsCrossed className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors" />
    ),
    description:
      "Monitoring packaged and processed foods like snacks and baked goods for contamination from Pyrethroid residues.",
    link: "/pesticide/processed-foods",
  },
  {
    name: "Water & Beverages",
    icon: (
      <Droplets className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors" />
    ),
    description:
      "Analysis of water, juices, and bottled drinks for trace levels of single residue Pyrethroids.",
    link: "/pesticide/water-beverages",
  },
  {
    name: "Soil & Environmental Samples",
    icon: (
      <Mountain className="w-10 h-10 text-[#153D63] group-hover:text-[#FFC000] transition-colors" />
    ),
    description:
      "Testing of soil and environmental samples for persistence and accumulation of Pyrethroids.",
    link: "/pesticide/environmental-samples",
  },
];

const Pyrethroids = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 300);
  };

  // ✅ Updated list of single residue Pyrethroid compounds
  const compounds = [
    "L-Cyhalothrin",
    "Cypermethrin",
    "Cyfluthrin",
    "Deltamethrin",
    "Imiprothrin",
    "Permethrin",                     
  ];

  return (
    <Wrapper>
      <section
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-16 lg:py-24 mb-10"
        style={{ cursor: loading ? "wait" : "default" }}
      >
        {/* Back Link */}
        <div className="max-w-5xl mx-auto px-4 mb-8">
          <Link
            to="/pesticide/single"
            className="inline-flex items-center gap-2 text-[#153D63] italic hover:text-[#FFC000] transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to single-residue pesticides
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 px-4">
          <h1 className="text-4xl md:text-6xl font-light text-[#153D63] mb-6">
            Single Residue Pyrethroids
          </h1>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Pyrethroids are synthetic chemical insecticides modeled after
            natural pyrethrins. These tests support food safety, environmental
            monitoring, and regulatory compliance by detecting residues in
            diverse matrices.
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
                  className="border border-gray-300 bg-white rounded-xl p-4 text-center text-gray-800 text-base font-medium shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
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
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#FFC000] transition text-center flex flex-col items-center h-full group"
            >
              {sample.icon}
              <h3 className="text-2xl font-normal text-gray-800 mt-4 mb-2 group-hover:text-[#FFC000] transition-colors">
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

export default Pyrethroids;
