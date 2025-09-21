import React, { useRef, useState } from "react"; 
import image from "../../assets/image/water.png";
import image1 from "../../assets/image/soil.jpg";
import image2 from "../../assets/image/discharge.jpg";
import image3 from "../../assets/image/pipewater.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from ".././wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Water = () => {
  const bodParameters = [
    "pH Measurement",
    "Turbidity Analysis",
    "Dissolved Oxygen (DO)",
    "Conductivity & TDS",
    "Chemical Oxygen Demand (COD)",
    "Biological Oxygen Demand (BOD)",
  ];

  // ✅ Changed bodDetails → waterQualityDetails
  const waterQualityDetails = [
    {
      category: "Surface & Ground Water",
      img: image,
      details: [
        "Collect in clean, sterile glass or plastic bottles (typically 300 mL).",
        "Avoid trapping air bubbles when filling bottles.",
        "Keep samples at ≤ 4 °C during transport to prevent microbial activity.",
        "Do not add preservatives – analysis must begin within 48 hours.",
        "Record sampling time, location, temperature, and source details.",
      ],
    },
    {
      category: "Municipal Wastewater & Effluents",
      img: image3,
      details: [
        "Use clean bottles, ensuring no headspace is present.",
        "Composite samples may be collected to represent variable discharges.",
        "Store samples in ice or refrigeration (≤ 4 °C).",
        "Analyze as soon as possible (≤ 48 hours).",
        "Record plant type, inflow conditions, and discharge information.",
      ],
    },
    {
      category: "Industrial Discharges",
      img: image2,
      details: [
        "Collect representative grab or composite samples depending on discharge patterns.",
        "Avoid exposure to sunlight or elevated temperatures.",
        "Store at ≤ 4 °C and transport immediately to the laboratory.",
        "Use standard bottles filled without bubbles to prevent oxygen interference.",
      ],
    },
    {
      category: "Soil Leachates & Agricultural Runoff",
      img: image1,
      details: [
        "Collect runoff or leachate samples in clean, inert containers.",
        "Filter only if specified in the analysis protocol.",
        "Keep samples cooled at ≤ 4 °C until laboratory testing.",
        "Analyze promptly for accurate nutrient, pesticide, or microbial assessment.",
      ],
    },
  ];

  const contentRef = useRef(null);
  const sampleRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDownloadPDF = async () => {
    const inputMain = contentRef.current;
    const inputSample = sampleRef.current;

    const buttons = document.querySelectorAll(".no-pdf");
    buttons.forEach((el) => (el.style.display = "none"));

    const pdf = new jsPDF("p", "mm", "a4", true);

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

    const canvasMain = await html2canvas(inputMain, { scale: 2, useCORS: true });
    const imgDataMain = canvasMain.toDataURL("image/jpeg", 1.0);
    const imgWidth = 190;
    const imgHeight = (canvasMain.height * imgWidth) / canvasMain.width;
    pdf.addImage(imgDataMain, "JPEG", 10, 10, imgWidth, imgHeight, null, "FAST");
    addHeaderFooter(1);

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

    buttons.forEach((el) => (el.style.display = ""));

    pdf.save("Water-Quality.pdf");
  };

  return (
    <Wrapper hideHeader>
      {/* Main Section */}
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-12 lg:py-20"
      >
        {/* Back & Print */}
        <div className="max-w-6xl mx-auto px-4 mt-2 flex justify-between items-center no-pdf">
          <Link
            to="/foodwater"
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Food and water analysis
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
            Water Quality Analysis
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At <strong>ChemXpert</strong>, we provide accurate and reliable water quality evaluation. We deliver high-precision testing of key parameters to ensure your water meets environmental regulations and health safety standards.
          </p>
        </div>

        {/* Parameters */}
        <div className="mt-10 max-w-5xl mx-auto">
          <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
            Key Parameters Measured
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {bodParameters.map((param, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-5 text-center text-gray-800 text-base font-normal shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
              >
                {param}
              </div>
            ))}
          </div>
        </div>

        {/* Water Quality Overview */}
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
                      <span className="text-base font-medium">Environmental Samples</span><br />
                      Drinking water (tap, bottled, well water).<br />
                      Surface water (rivers, lakes, reservoirs).<br />
                      Groundwater (aquifers, wells, boreholes).<br />
                      Soil leachates (runoff from agricultural or landfill sites).<br />
                      Sediment pore water for oxygen demand studies.<br /><br />

                      <span className="text-base font-medium">Municipal Wastewater</span><br />
                      Raw sewage (untreated wastewater).<br />
                      Treated effluents from wastewater treatment plants.<br />
                      Inflow and outflow monitoring for treatment efficiency.<br />
                      Sludge supernatants and return activated sludge.<br /><br />

                      <span className="text-base font-medium">Industrial & Process Wastewaters</span><br />
                      Effluents from food and beverage industries.<br />
                      Pulp and paper mill discharges.<br />
                      Textile and dye industry effluents.<br />
                      Chemical and pharmaceutical wastewater.<br />
                      Leachates from solid waste or hazardous waste facilities.<br /><br />

                      <span className="text-base font-medium">Agricultural Runoff</span><br />
                      Drainage water from irrigation fields.<br />
                      Livestock waste lagoons and slurry samples.<br />
                      Fertilizer and pesticide runoff impacting nearby rivers.
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border text-sm border-gray-300">
                      Collect samples in clean bottles without air bubbles. <br />
                      Do not add preservatives – analyze within 48 hours. <br />
                      Store and transport at ≤ 4 °C. <br />
                      Record source, time, and field conditions accurately.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Water Quality Details (new page in PDF) */}
      <section ref={sampleRef} className="bg-white my-6 py-12 lg:py-20">
        <div className="mt-12 max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-10 text-center">
           Select Sample Type
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {waterQualityDetails.map((sample, i) => (
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
                      before:absolute before:top-0 before:left-0 before:w-1 before:bg-blue-500
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

export default Water;
