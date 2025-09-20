import React, { useRef, useState } from "react";
import image from "../../assets/image/water.png";
import images from "../../assets/image/sediment.jpg";
import image2 from "../../assets/image/waste.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Voc = () => {
  const compounds = [
   "Benzene",
    "1,2-Dichloroethane",
    "Trichloroethene",
    "1,2-Dichloropropane",
    "Dibromomethane",
    "Bromochloromethane",
    "cis-1,3-Dichloropropene",
    "Toluene",
    "trans-1,3-Dichloropropane",
    "1,1,3-Trichloroethane",
    "Tetrachloroethene",
    "Dibromochloromethane",
    "Ethylbenzene",
    "Chlorobenzene",
    "m-Xylene + p-Xylene",
    "o-Xylene",
    "Bromoform",
    "Isopropylbenzene",
    "Bromobenzene",
    "1,1,2,2-Tetrachloroethane",
    "n-Propylbenzene",
    "2-Chlorotoluene",
    "1,3-Dichlorobenzene",
    "4-Chlorotoluene",
    "1,4-Dichlorobenzene",
    "p-Isopropyltoluene",
    "1,2-Dichlorobenzene",
    "Butylbenzene",
    "1,2-Dibromo-3-chloropropane",
    "1,2,4-Trichlorobenzene",
    "Hexachlorobutadiene",
    "Naphthalene",
    "1,2,3-Trichlorobenzene",
  ];

  const firstSix = compounds.slice(0, 6);
  const remaining = compounds.slice(6); 
  
  const samplingDetails = [
     {
      category: "Drinking Water & Environmental Water",
      img: image,
      details: [
        "Collect in 40 mL pre-cleaned glass vials with Teflon-lined septa caps.",
        "Fill vials completely (no headspace) to minimize volatilization.",
        "Add preservatives (e.g., hydrochloric acid to pH < 2 for THMs and other VOCs).",
        "Store at ≤ 4 °C and analyze within holding times (typically 14 days).",
        "Avoid agitation and minimize opening/closing to prevent VOC loss.",
      ],
    },
    {
      category: "Soil and Sediment",
      img: images,
      details: [
        "Collect in airtight glass jars (with Teflon-lined caps).",
        "Minimize headspace, or use methanol preservation for field extraction.",
        "Keep samples chilled (≤ 4 °C) and in the dark.",
        "Transport promptly to the laboratory.",
        "Avoid plastic containers (VOCs may permeate or adsorb).",
      ],
    },
    {
      category: "Industrial & Waste Samples",
      img: image2,
      details: [
        "Use pre-cleaned amber glass bottles or vials with Teflon-lined septa.",
        "For liquid wastes, avoid headspace; preserve with acid if required.",
        "For sludge/solid wastes, minimize exposure to air; refrigerate immediately.",
        "Clearly label and record source, process type, and sample conditions.",
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

    pdf.save("Voc.pdf");
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
            Volatile Organic Compounds (VOCs)
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            VOCs are a diverse group of carbon-based chemicals that easily evaporate at room temperature.
            They are found in petroleum products, solvents, paints, cleaning agents, and many industrial processes.
            Due to their volatility and toxicity, accurate sampling and analysis are critical for environmental and health monitoring.
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
                    <td className="p-4 border text-sm border-gray-300 space-y-2">
                      <p>
                        <span className="font-semibold">Environmental Samples:</span> Air (indoor, outdoor, workplace air), drinking water (tap,
                        bottled, well water), surface water (rivers, lakes, reservoirs), groundwater (aquifers, wells), soil (contaminated sites,
                        landfills, industrial zones), sediment (near industrial discharges or waste sites).
                      </p>
                      <p>
                        <span className="font-semibold">Food & Beverages:</span> Bottled water (regulated for VOCs like benzene, toluene,
                        chloroform), alcoholic beverages (beer, wine, spirits), juices and soft drinks (packaging-related VOCs), oils and fats
                        (volatile residues), packaged foods (migration of VOCs from packaging materials).
                      </p>
                      <p>
                        <span className="font-semibold">Industrial & Waste Samples:</span> Industrial effluents, landfill leachates, wastewater
                        plant influents/effluents, hazardous waste (sludges, tars, solvents), building materials (paints, adhesives, flooring).
                      </p>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Instrument Used
                    </td>
                    <td className="p-4 border text-sm border-gray-300">Agilent 8860 Headspace GC-FID</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border text-sm border-gray-300">
                      Use glass, not plastic (unless specialized bags/canisters are required). <br />
                      No headspace whenever possible. <br />
                      Keep samples cool (≤ 4 °C) and out of light. <br />
                      Avoid sources of contamination (fuels, solvents, adhesives).
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
      </div>
    </Wrapper>
  );
};

export default Voc;





