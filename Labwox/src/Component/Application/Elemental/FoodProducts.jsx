import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaFish, FaDrumstickBite, FaIndustry, FaFlask, FaClipboardCheck, FaRegHospital, FaShieldAlt } from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdScience } from "react-icons/md";
import { GiMilkCarton } from "react-icons/gi";

const FoodProducts = () => {
  return (
      <div className="bg-white py-12 px-6 md:px-12 shadow-lg rounded-lg mb-20">
        {/* Back link */}
        <Link
          to="/metal"
          className="inline-flex items-center text-orange-600 hover:underline text-lg font-medium mb-4"
        >
          <FaArrowLeft className="mr-2" /> Back to metal Samples
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#153D63] mb-6 leading-tight">
          Food Product Dioxin Analysis
        </h1>

        {/* Intro paragraph */}
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Food safety is a critical concern in protecting public health, and dioxins are among the most harmful contaminants that can be present in food products.
          These persistent organic pollutants tend to accumulate in the fatty tissues of animals, making animal-derived products such as meat, fish, dairy, and eggs particularly vulnerable.
          Regular testing ensures compliance with international safety standards (WHO/EU) and protects consumers from long-term exposure risks.
        </p>

        {/* Sources */}
        <h2 className="text-2xl font-semibold text-[#153D63] mb-3 flex items-center">
          <FaIndustry className="mr-2 text-orange-500" /> Common Sources of Dioxin Contamination
        </h2>
        <ul className="list-none text-gray-700 leading-relaxed mb-6 space-y-2">
          <li className="flex items-center"><FaDrumstickBite className="mr-2 text-orange-500" /> Animal feed contaminated with industrial or agricultural waste</li>
          <li className="flex items-center"><FaFish className="mr-2 text-orange-500" /> Fish and seafood from polluted rivers, lakes, or coastal areas</li>
          <li className="flex items-center"><GiMilkCarton className="mr-2 text-orange-500" /> Meat and dairy products from animals grazing near industrial zones</li>
          <li className="flex items-center"><FaIndustry className="mr-2 text-orange-500" /> Processing equipment or packaging materials releasing pollutants</li>
        </ul>

        {/* Health Impact */}
        <h2 className="text-2xl font-semibold text-[#153D63] mb-3 flex items-center">
          <MdOutlineHealthAndSafety className="mr-2 text-orange-500" /> Health Implications of Dioxin Exposure
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Long-term exposure to dioxins has been linked to reproductive and developmental issues, immune system damage, hormonal imbalances, and certain cancers.
          Even at low levels, chronic exposure can pose serious risks, making early detection through food testing vital for public safety.
        </p>

        {/* Collection process */}
        <h2 className="text-2xl font-semibold text-[#153D63] mb-3 flex items-center">
          <FaClipboardCheck className="mr-2 text-orange-500" /> How to Collect and Prepare Samples
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Proper sample collection is essential to avoid contamination and ensure accurate results.
          For meat and dairy, refrigerate samples immediately in clean, chemical-free containers.
          For fish and seafood, send whole specimens or fillets with minimal handling. Use contaminant-free packaging materials.
        </p>

        {/* Analysis process */}
        <h2 className="text-2xl font-semibold text-[#153D63] mb-3 flex items-center">
          <MdScience className="mr-2 text-orange-500" /> Our Analysis Method
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We use advanced extraction techniques followed by High-Resolution Gas Chromatography/High-Resolution Mass Spectrometry (HRGC/HRMS) for precise quantification:
        </p>
        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Sample homogenization and lipid extraction</li>
          <li>Chemical clean-up to remove interfering compounds</li>
          <li>High-sensitivity HRGC/HRMS detection</li>
          <li>Detailed report with regulatory compliance comparison</li>
        </ol>

        {/* Regulatory compliance */}
        <h2 className="text-2xl font-semibold text-[#153D63] mb-3 flex items-center">
          <FaShieldAlt className="mr-2 text-orange-500" /> Regulatory Standards We Follow
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our testing meets international regulatory requirements including:
          WHO guidelines, EU Commission Regulation (EC) No 1881/2006, and local food safety standards.
        </p>

        {/* Digestion process */}
        <h2 className="text-2xl font-semibold text-[#153D63] mb-3 flex items-center">
          <FaFlask className="mr-2 text-orange-500" /> Sample Digestion for Dioxin Testing
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Digestion involves breaking down the organic matrix to release dioxins for accurate analysis.
          We use acid-assisted or solvent-assisted digestion under controlled temperatures to prevent analyte degradation, ensuring highly reliable results.
        </p>

        {/* Call to action */}
        <div className="bg-[#153D63] p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl text-white font-semibold mb-4">
            Ready to Submit Your Food Sample?
          </h3>
          <p className="text-gray-200 mb-6">
            Click below to fill out the submission form and start your dioxin testing process today.
          </p>
          <Link
            to="/sample-submission-form"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-300 cursor-pointer"
          >
            Submit Your Sample
          </Link>
        </div>
      </div>
  );
};

export default FoodProducts;
