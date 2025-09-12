import React, { useRef, useState } from "react";
import image from "../../assets/image/water.png";
import image2 from "../../assets/image/food.jpg";
import images from "../../assets/image/waste.jpg";
import image1 from "../../assets/image/biological.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Organochlorines= () => {
  const compounds = [
    "Aldrin",
    "Dieldrin",
    "Endrin",
    "DDT",
    "Heptachlor",
    "Chlordane",
    "Endosulfan",
    "Hexachlorobenzene"
  ];

  const samplingDetails = [
    {
      category: "Food and Agricultural Products",
      img: image,
      details: [
        "Collect representative samples (composite of multiple units where applicable).",
        "Avoid contamination from hands, tools, or packaging materials.",
        "Store samples in clean, inert containers (glass jars, PTFE-lined caps preferred).",
        "Keep chilled (4 °C) and transport quickly to the lab.",
        "For high-moisture foods (e.g., fruits, vegetables), avoid prolonged storage to reduce degradation.",
        "Record product details: origin, variety, treatment history, harvest date",
      ],
    },
    {
      category: "Environmental Samples",
      img: image,
      details: [
        "Water (surface, ground, drinking, wastewater):",
        "Collect in amber glass bottles (pre-cleaned, solvent-rinsed).",
        "Fill without headspace (to minimize volatilization).",
        "Preserve with cooling (4 °C) and, where required, add preservatives (e.g., sodium thiosulfate if chlorination present).",
        "Analyze within recommended holding times (commonly 7–14 days",
        "Soil and Sediment:",
        "Use stainless steel or Teflon-coated tools for collection.",
        "Store in solvent-rinsed amber glass jars.",
        "Keep samples cool and in the dark to minimize breakdown.",
        "Collect enough material for replicate and QC analyses.",
        "Air:",
        "Collect using high-volume air samplers with glass fiber or polyurethane foam (PUF) cartridges.",
        "Store cartridges wrapped in solvent-rinsed aluminum foil.",
        "Keep frozen until analysis.",
      ],
    },
    {
      category: "Industrial and Waste Samples",
      img: images,
      details: [
        "For pesticide formulations: take samples directly from containers using glass or stainless-steel equipment.",
        "For runoff or wash water: collect as grab samples in amber glass bottles.",
        "Household dust: collect with vacuum-equipped dust samplers into clean, inert bags or jars.",
        "Store all at 4 °C or frozen, depending on matrix stability.",
      ],
    },
    {
      category: "Biological Samples",
      img: image1,
      details: [
        "Collect in appropriate sterile containers (blood tubes, urine containers, milk bottles).",
        "Store biological fluids (blood, urine, milk) at ≤ –20 °C.",
        "Tissues (fat, fish, organs) should be wrapped in solvent-rinsed aluminum foil and frozen.",
        "Avoid plastic where pesticides might adsorb or leach.",
        "Record species, age, sex, exposure history if known.",
      ],
    },
    {
      category: "Processed and Packaged Foods",
      img: image2,
      details: [
        "Use aseptic techniques to avoid cross-contamination.",
        "Take representative subsamples (e.g., blended portions from multiple units).",
        "Package in solvent-rinsed glass jars or sterile bags.",
        "Chill (4 °C) and transport promptly.",
        "Record full product details: brand, lot number, packaging type.",
      ],
    },
  ];

  const contentRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDownloadPDF = async () => {
    const input = contentRef.current;
    const pdf = new jsPDF("p", "mm", "a4", true);

    // Hide buttons temporarily
    const buttons = input.querySelectorAll(".no-pdf");
    buttons.forEach((el) => (el.style.display = "none"));

    const addHeaderFooter = (pageNum) => {
      const logoWidth = 30;
      const logoHeight = 12;
      pdf.addImage(logo, "PNG", 15, 8, logoWidth, logoHeight);

      pdf.setFontSize(11);
      pdf.setTextColor(60);
      const footerText = `© ${new Date().getFullYear()} Labwox Limited, all rights reserved.`;
      pdf.text(footerText, 105, 280, { align: "center" });
      pdf.text(`Page ${pageNum}`, 105, 290, { align: "center" });

      // Watermark
      pdf.saveGraphicsState();
      pdf.setGState(new pdf.GState({ opacity: 0.1 }));
      pdf.setFontSize(60);
      pdf.setTextColor(200, 200, 200);
      pdf.text("Labwox Confidential", 105, 150, {
        angle: 45,
        align: "center",
      });
      pdf.restoreGraphicsState();
    };

    const imgWidth = 190;

    // Page 1: main content
    const mainContent = input.querySelector(".main-content");
    const canvasMain = await html2canvas(mainContent, { scale: 2, useCORS: true });
    const imgDataMain = canvasMain.toDataURL("image/jpeg", 1.0);
    const imgHeightMain = (canvasMain.height * imgWidth) / canvasMain.width;
    pdf.addImage(imgDataMain, "JPEG", 10, 20, imgWidth, imgHeightMain, null, "FAST");
    addHeaderFooter(1);

    // Page 2: sample types
    pdf.addPage();
    const sampleContent = input.querySelector(".sample-types");
    const canvasSample = await html2canvas(sampleContent, { scale: 2, useCORS: true });
    const imgDataSample = canvasSample.toDataURL("image/jpeg", 1.0);
    const imgHeightSample = (canvasSample.height * imgWidth) / canvasSample.width;
    pdf.addImage(imgDataSample, "JPEG", 10, 20, imgWidth, imgHeightSample, null, "FAST");
    addHeaderFooter(2);

    // Restore buttons
    buttons.forEach((el) => (el.style.display = ""));

    pdf.save("Organochlorines.pdf");
  };

  return (
    <Wrapper hideHeader>
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white my-6 py-12 lg:py-20 mb-10"
      >
        {/* === MAIN CONTENT (Page 1) === */}
        <div className="main-content">
          {/* Back & Print Actions */}
          <div className="max-w-6xl mx-auto px-4 mt-2 flex justify-between items-center no-pdf">
            <Link
              to="/pesticide/single "
              className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium"
            >
              <ArrowLeft className="w-5 h-5" /> Back to single-residue pesticides
            </Link>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-[#153D63] text-white rounded-lg shadow hover:bg-[#112f4c]"
            >
              <Printer className="w-5 h-5" />
              Download PDF
            </button>
          </div>

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center my-12 px-4">
            <h1 className="text-5xl md:text-6xl font-thin text-[#153D63] mb-6">
              Single Residue Organochlorines
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Organochlorines are synthetic organic chemicals containing chlorine, 
            often studied due to their persistence in the environment and 
            potential biological effects. These tests support food safety, 
            environmental monitoring, and regulatory compliance.
            </p>
          </div>

          {/* Available Compounds */}
          <div className="mt-10 max-w-5xl mx-auto">
            <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
              Available Compounds
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {compounds.map((compound, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-xl p-5 text-center text-gray-800 text-base font-normal shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
                >
                  {compound}
                </div>
              ))}
            </div>
          </div>

          {/* Analytical Overview */}
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="mt-8 max-w-4xl mx-auto px-4">
              <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-6 text-center">
                Analytical Overview
              </h3>
              <div className="overflow-x-auto shadow-lg rounded-xl">
                <table className="w-full border-collapse">
                  <tbody className="text-gray-700 text-base md:text-lg">
                    <tr className="bg-gray-50 hover:bg-gray-100 transition">
                      <td className="p-4 font-semibold border border-gray-300 w-1/3">
                        Sample Types
                      </td>
                      <td className="p-4 border text-sm border-gray-300">
                        <span className="text-base font-medium">
                          Food and Agricultural Products
                        </span>
                        <br /> Fruits (apples, grapes, citrus, berries, bananas). <br />
                        Vegetables (leafy greens, tomatoes, peppers, cucumbers, root crops).<br />
                        Grains and cereals (rice, maize, wheat, barley)<br />
                        Tea, coffee, cocoa. <br />Animal products (milk, meat, eggs, honey, fish
                        feed).<br />
                        Legumes (beans, lentils, peas) <br /> Spices and herbs (chili, pepper,
                        coriander, basil). <br />
                        <span className="text-base font-medium">Environmental Samples</span> <br />
                        Surface water (rivers, lakes, reservoirs).<br />
                        Groundwater (wells, aquifers).<br />Drinking water.<br />
                        Wastewater (municipal and industrial effluents).<br />
                        Soil and sediments.<br />
                        <span className="text-base font-medium">Industrial & Domestic Sources</span>
                        <br />
                        Pesticide formulations and products (quality control, compliance testing)
                        <br />
                        Runoff from agricultural lands.<br />
                        <span className="text-base font-medium">Processed and Packaged Foods</span>{" "}
                        <br />
                        Infant food and baby formula.<br />
                        Juices and soft drinks.<br />
                        Cooking oils and fats.<br />
                        Packaged snacks and baked goods (possible migration from raw materials or
                        packaging).
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition">
                      <td className="p-4 font-semibold border border-gray-300">Instrument Used</td>
                      <td className="p-4 border text-sm border-gray-300">
                        Agilent 5977 GC-MSD or Thermo ISQ 7610
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition">
                      <td className="p-4 font-semibold border border-gray-300">
                        Sampling Information
                      </td>
                      <td className="p-4 border text-sm border-gray-300">
                        Use amber glass wherever possible (pesticides can adsorb to plastics or
                        degrade under light). <br />
                        Keep samples cool and in the dark. <br />
                        Avoid contamination during sampling, handling, and transport..
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* === SAMPLE TYPES (Page 2) === */}
        <div className="sample-types mt-12 max-w-6xl my-6 mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-10 text-center">
            Select Sample Types
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplingDetails.map((sample, i) => (
              <div key={i} className="bg-white transition p-6">
                <img
                  src={sample.img}
                  alt={`${sample.category} icon`}
                  className="w-48 h-32 mx-auto transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-lg"
                />

                <button
                  onClick={() => toggleDropdown(i)}
                  className="mt-4 flex items-center justify-center gap-2 text-xl font-thin text-[#153D63] w-full"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                  {sample.category}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul
                    className={`relative text-gray-700 text-sm md:text-base space-y-2 text-right px-2
                      before:absolute before:top-0 before:left-0 before:w-1 before:bg-pink-500
                      before:transition-all before:duration-500
                      ${openIndex === i ? "before:h-full" : "before:h-0"}
                    `}
                  >
                    {sample.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Organochlorines;








