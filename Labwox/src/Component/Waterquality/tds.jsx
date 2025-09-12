import React, { useRef, useState } from "react";
import image from "../../assets/image/waste.jpg";
import image2 from "../../assets/image/indus.jpg";
import image1 from "../../assets/image/faucet.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ConductivityTDS = () => {
  const parameters = [
    "Ionic Concentration",
    "Salinity",
    "Mineral Content",
    "Hardness Indicator",
    "Water Treatment Efficiency",
    "Industrial Process Control",
    "Environmental Monitoring",
    "Agricultural Water Quality",
    "Corrosivity Potential",
  ];

  const samplingDetails = [
    {
      category: "Surface & Ground Water",
      img: image,
      details: [
        "Collect river, lake, or groundwater samples in clean plastic bottles.",
        "Avoid contamination from metallic containers that may alter conductivity.",
        "Record site details such as GPS coordinates, weather, and pH values.",
        "Analyze as soon as possible; store at ≤ 6 °C if delayed.",
      ],
    },
    {
      category: "Drinking & Processed Water",
      img: image1,
      details: [
        "Collect samples from taps, bottled water, or treatment plants.",
        "Use clean, sterilized bottles to prevent ionic contamination.",
        "Note any treatment methods such as chlorination or filtration.",
        "Measure conductivity/TDS immediately for highest accuracy.",
      ],
    },
    {
      category: "Industrial Water",
      img: image2,
      details: [
        "Sample water used in beverages, food, and pharmaceutical production.",
        "Avoid prolonged storage as dissolved solids may precipitate or dissolve.",
        "Ensure proper labeling with batch, source, and plant location.",
        "If not analyzed within 24 hours, refrigerate at ≤ 6 °C.",
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
    pdf.save("Conductivity-TDS-Analysis.pdf");
  };

  return (
    <Wrapper hideHeader>
      {/* Main Section */}
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-12 lg:py-20"
      >
        {/* Back & Print Actions */}
        <div className="max-w-6xl mx-auto px-4 mt-2 flex justify-between items-center no-pdf">
          <Link
            to="/waterqua"
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to water quality applications
          </Link>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-[#153D63] text-white rounded-lg shadow hover:bg-[#112f4c]"
          >
            <Printer className="w-5 h-5" /> Download PDF
          </button>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center my-12 px-4">
          <h1 className="text-5xl md:text-6xl font-thin text-[#153D63] mb-6">
            Conductivity & TDS Analysis
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>Conductivity and Total Dissolved Solids (TDS) analysis</strong>{" "}
            provides critical insight into the ionic strength and salinity of water.
            At <strong>ChemXpert</strong>, we use advanced conductivity meters and
            TDS analyzers to ensure precise monitoring of drinking water,
            industrial effluents, and natural waters. Conductivity and TDS are
            vital indicators for <strong>WHO, EPA, and regulatory compliance</strong>,
            ensuring safe and high-quality water for consumption and industrial use.
          </p>
        </div>

        {/* Parameters */}
        <div className="mt-10 max-w-5xl mx-auto">
          <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
            Available Parameters
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {parameters.map((parameter, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-5 text-center text-gray-800 text-base font-normal shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
              >
                {parameter}
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
                    <td className="p-4 text-sm border border-gray-300">
                      <span className="text-base font-medium">Drinking Water:</span>{" "}
                      Assesses mineral content and ensures compliance with safety
                      standards. <br />
                      <span className="text-base font-medium">Surface & Groundwater:</span>{" "}
                      Used for salinity studies and environmental monitoring. <br />
                      <span className="text-base font-medium">Industrial Water:</span>{" "}
                      Ensures proper water quality in manufacturing and processing. <br />
                      <span className="text-base font-medium">Wastewater:</span>{" "}
                      Evaluates treatment efficiency and discharge compliance.
                    </td>
                  </tr>
                  
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border text-sm border-gray-300">
                      Collect samples in clean plastic bottles.<br /> Avoid metallic
                      containers that may interfere with conductivity readings.<br /> Store at
                      ≤ 6 °C if testing is delayed.<br /> Always record temperature since
                      conductivity is temperature dependent.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sampling Guidelines */}
      <section ref={sampleRef} className="bg-white my-6 py-12 lg:py-20">
        <div className="mt-12 max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-10 text-center">
            Sampling Guidelines
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
                    before:absolute before:top-0 before:left-0 before:w-1 before:bg-pink-500 before:transition-all before:duration-500
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

export default ConductivityTDS;
