import React, { useRef, useState } from "react";
import image from "../../assets/image/water.png";
import image1 from "../../assets/image/soil.jpg";
import image2 from "../../assets/image/food.jpg";
import image3 from "../../assets/image/fish.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Pah = () => {
  const compounds = [
   "Isophorone",
    "Acenaphthylene",
    "Fluorene",
    "Hexachlorobenzene",
    "Phenanthrene",
    "Anthracene",
    "Benz[a]anthracene",
    "Chrysene",
    "Benzo[b]fluoranthene",
    "Benzo[k]fluoranthene",
    "Benzo[a]pyrene",
    "Indeno(1,2,3-cd)pyrene",
    "Dibenz[a,h]anthracene",
    "Benzo[ghi]perylene",
    "PCB 1",
    "PCB 3",
    "PCB 28",
    "PCB-52",
    "PCB 44",
    "PCB-70",
    "PCB 110",
    "PCB 143",
    "PCB 153",
    "PCB 204",
    "PCB 180",
    "PCB 204",
    "PCB 180",
  ];


  const firstSix = compounds.slice(0, 6);
  const remaining = compounds.slice(6); 


  const samplingDetails = [
     {
      category: "Water (drinking, surface, groundwater)",
      img: image,
      details: [
        "Use amber glass bottles (1 L or larger) with Teflon-lined caps (no plastics).",
        "Collect without headspace; fill bottle completely.",
        "Protect from sunlight (wrap in foil or use amber bottles).",
        "Preserve: cool to ≤ 4 °C; no chemical preservatives normally added for PAHs/PCBs.",
        "Transport on ice; analyze within holding time (usually ≤ 7–14 days).",
        "Include field blanks and trip blanks.",
      ],
    },
    {
      category: "Soil and Sediment",
      img: image1,
      details: [
        "Collect with stainless steel or solvent-rinsed tools (scoop, trowel, corer).",
        "Place in amber glass jars with Teflon-lined lids.",
        "Fill the container fully to minimize headspace.",
        "Avoid contact with plastics or painted surfaces.",
        "Store at ≤ 4 °C; freeze for long-term storage.",
        "Composite sampling may be required for site assessments.",
        "Keep samples away from light and dust sources.",
      ],
    },
    {
      category: "Food (fish, meat, dairy, grains, oils, vegetables)",
      img: image3,
      details: [
        "Wrap solid samples in solvent-rinsed aluminum foil, then place in amber glass jars.",
        "For oils/liquids, collect directly into amber glass jars",
        "Avoid plastic bags or containers (risk of contamination/adsorption).",
        "Keep at ≤ 4 °C; freeze high-fat foods and fish until extraction.",
        "Minimize handling to avoid cross-contamination.",
      ],
    },
    {
      category: "Biological Tissue (fish, mussels, animal tissues)",
      img: image2,
      details: [
        "Tissues: Wrap in solvent-rinsed foil, place in amber glass jars, and freeze immediately (−20 °C or lower)",
        "Protect all biologicals from light and contamination during collection.",
      ],
    },
   
  ];

  const contentRef = useRef(null);
  const sampleRef = useRef(null); // ✅ New ref for sample type section
  const [openIndex, setOpenIndex] = useState(null);

  const [showMore, setShowMore] = useState(false);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDownloadPDF = async () => {
    const inputMain = contentRef.current;
    const inputSample = sampleRef.current;

    // Temporarily hide UI-only buttons
    const buttons = document.querySelectorAll(".no-pdf");
    buttons.forEach((el) => (el.style.display = "none"));

    const pdf = new jsPDF("p", "mm", "a4", true);

    // Helper for header/footer/watermark
    const addHeaderFooter = (pageNum) => {
      const logoWidth = 30;
      const logoHeight = 12;
      pdf.addImage(logo, "PNG", 15, 8, logoWidth, logoHeight);
      pdf.setFontSize(11);
      pdf.setTextColor(60);
      pdf.text(
        `© ${new Date().getFullYear()} Labwox Limited, all rights reserved.`,
        105,
        280,
        { align: "center" }
      );
      pdf.text(`Page ${pageNum}`, 105, 290, { align: "center" });
      pdf.saveGraphicsState();
      pdf.setGState(new pdf.GState({ opacity: 0.1 }));
      pdf.setFontSize(60);
      pdf.setTextColor(200, 200, 200);
      pdf.text("Labwox Confidential", 105, 150, { angle: 45, align: "center" });
      pdf.restoreGraphicsState();
    };

    // Capture main section
    const canvasMain = await html2canvas(inputMain, { scale: 2, useCORS: true });
    const imgDataMain = canvasMain.toDataURL("image/jpeg", 1.0);
    const imgWidth = 190;
    const imgHeight = (canvasMain.height * imgWidth) / canvasMain.width;
    pdf.addImage(imgDataMain, "JPEG", 10, 10, imgWidth, imgHeight, null, "FAST");
    addHeaderFooter(1);

    // Capture sample type section separately
    pdf.addPage();
    const canvasSample = await html2canvas(inputSample, {
      scale: 2,
      useCORS: true,
    });
    const imgDataSample = canvasSample.toDataURL("image/jpeg", 1.0);
    const imgHeightSample = (canvasSample.height * imgWidth) / canvasSample.width;
    pdf.addImage(
      imgDataSample,
      "JPEG",
      10,
      10,
      imgWidth,
      imgHeightSample,
      null,
      "FAST"
    );
    addHeaderFooter(2);

    // Restore UI buttons
    buttons.forEach((el) => (el.style.display = ""));

    pdf.save("PAH-pcb-Mix.pdf");
  };

  return (
    <Wrapper hideHeader>
      {/* Main Section */}
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-12 lg:py-20"
      >
        {/* Back & Print Actions (UI only) */}
        <div className="max-w-6xl mx-auto px-4 mt-2 flex justify-between items-center no-pdf">
          <Link
            to="/pollutantanaly"
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Pollutant Applications
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
            PAH and PCB Mix
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            PAH and PCB mix contains a mixture of polycyclic aromatic hydrocarbons and polychlorinated biphenyl compounds. Two categories of toxic environmental pollutants that are a common focus of research.
          </p>
        </div>

         {/* Available Compounds */}
          <div className="mt-10 max-w-5xl mx-auto">
            <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
              Available Compounds
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {firstSix.map((compound, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-xl p-4 text-center text-gray-800 text-base font-normal shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
                >
                  {compound}
                </div>
              ))}
            </div>
  
            {/* Dropdown for Remaining */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 px-4 py-3 bg-[#153D63] text-white rounded-xl shadow hover:bg-[#112f4c] transition"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
                {showMore ? "Show Less" : "Show More Compounds"}
              </button>
  
              {showMore && (
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-fadeIn">
                  {remaining.map((compound, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 rounded-xl p-4 text-center text-gray-800 text-base font-normal shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
                    >
                      {compound}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        {/* Analytical Overview Table */}
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
                    <td className="p-4 text-sm border border-gray-300">
                      <span className="text-base font-medium">Water Samples:</span>{" "}
                      Drinking water (tap, bottled, treated supplies).<br />
                      Groundwater (especially near landfills, industrial zones, and agricultural sites).<br />
                      Surface water (rivers, lakes, reservoirs, catchments for drinking water).<br />
                      Wastewater effluents.  
                      <br />
                      <span className="text-base font-medium">Soil & Sediment Samples:</span>{" "}
                      Soils near industrial or urban areas (especially near combustion sources, spills, or pesticide use).<br />
                      River/lake sediments (long-term sinks for PAHs and PCBs).  
                      <br />
                      <span className="text-base font-medium">
                        Food & Animal Tissue
                      </span>{" "}
                      IFish and aquatic organisms (bioaccumulation in fatty tissues). <br />
                      Dairy, meat, and crops irrigated with contaminated water.  
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Instruments Used
                    </td>
                    <td className="p-4 border border-gray-300 text-sm">
                      Agilent 5977 GC-MSD or Thermo ISQ 7610
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border text-sm border-gray-300">
                      Always use glass, not plastic (PCBs and PAHs adsorb to plastics).<br />
                      Protect from light to prevent degradation.<br / >Cool or freeze as soon as possible.<br />
                      Document source, matrix type, and collection date to ensure<br />Maintain strict chain of custody.<br />Include appropriate blanks (field, trip, method).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Sampling Details (new page in PDF) */}
      <section ref={sampleRef} className="bg-white py-12 my-6 lg:py-20">
        <div className="mt-12 max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-10 text-center">
            Select Sample Type
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
                {/* Dropdown stays collapsed in UI unless clicked, and captured as-is in PDF */}
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
                      ${openIndex === i ? "before:h-full" : "before:h-0"}`}
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

export default Pah;




