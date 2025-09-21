import React, { useRef, useState } from "react";
import image from "../../assets/image/plant.jpg";
import image1 from "../../assets/image/herbs.jpg";
import image2 from "../../assets/image/oil.jpg"
import logo from "../../assets/image/labwox..jpeg";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Phytochemical = () => {
  const compounds = [
    "Terpenoids",
    "Phytosterols",
    "Volatile alkaloids",
    "Volatile plant esters",
    "Aldehydes",
    "Ketones",
  ];

  const firstThree = compounds.slice(0, 3);
  const remaining = compounds.slice(3);

  const samplingDetails = [
    {
      category: "Fresh Plant Materials",
      img: image,
      details: [
        "Collect leaves, stems, roots, or flowers using clean stainless-steel scissors or knives.",
        "Avoid plastic bags—use paper bags or foil for temporary storage.",
        "Shade-dry samples immediately if not analyzed fresh.",
        "Label with species, part used, and date of collection.",
      ],
    },
    {
      category: "Dried Herbal Samples",
      img: image1,
      details: [
        "Store dried herbs in airtight glass jars or kraft paper bags.",
        "Keep away from moisture, direct sunlight, and pests.",
        "Ensure proper grinding or milling before extraction.",
      ],
    },
    {
      category: "Essential Oils",
      img: image2,
      details: [
        "Store essential oils in tightly sealed amber glass bottles to avoid light degradation.",
        "Keep at temperatures below 25°C and away from heat or direct sunlight.",
        "Avoid contamination—use sterile droppers or pipettes during handling.",
        "Label each bottle clearly with plant source, extraction method, and date of distillation.",
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
    const imgHeightSample =
      (canvasSample.height * imgWidth) / canvasSample.width;
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
    pdf.save("Phytochemical-Analysis.pdf");
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
            to="/composition"
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to composition applications
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
            Phytochemical Analysis
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
            <strong>Phytochemical Analysis</strong> plays a vital role in
            identifying, isolating, and quantifying bioactive compounds from
            plants, herbs, foods, and natural products.
          </p>
        </div>

        {/* Available Compounds */}
        <div className="mt-10 max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
            Available Compounds
          </h3>

          {/* First 3 compounds */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {firstThree.map((compound, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl px-6 py-3 text-center text-gray-800 text-base font-normal shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
              >
                {compound}
              </div>
            ))}
          </div>

          {/* Remaining compounds */}
          <div className="flex flex-wrap justify-center gap-4">
            {remaining.map((compound, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl px-6 py-3 text-center text-gray-800 text-base font-normal shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
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
                    <td className="p-4 text-sm border border-gray-300">
                      <span className="text-base font-normal">
                        Plant material (fresh or dried)
                      </span>
                      <br />
                      <span className="text-base font-normal">
                        Essential Oils, Plant Extracts
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Instruments Used
                    </td>
                    <td className="p-4 border border-gray-300 text-sm">
                      HPLC, LC-MS/MS, GC-MS, UV-Vis Spectrophotometer, FTIR
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border text-sm border-gray-300">
                      Collect plant materials in clean containers, avoid plastic
                      contact. Dry in shade if required. Store ≤ 4 °C for fresh
                      samples, freeze extracts for long-term storage. Document
                      species, part used, and collection conditions.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sampling Details */}
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

export default Phytochemical;
