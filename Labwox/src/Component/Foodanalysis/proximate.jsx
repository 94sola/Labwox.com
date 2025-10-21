import React, { useRef, useState } from "react";
import image from "../../assets/image/plant.jpg";
import image1 from "../../assets/image/food.jpg";
import image3 from "../../assets/image/beverages.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Proximate = () => {
  const compounds = [
    "Moisture",
    "Ash",
    "Protein",
    "Carbohydrate",
    "Fat",
    "Crude Fiber",
  ];

  const samplingDetails = [
    {
      category: "Cereals & Grains",
      img: image,
      details: [
        "Collect representative samples of rice, maize, wheat, and other grains.",
        "Use clean polyethylene bags to avoid moisture absorption.",
        "Avoid mixing different grain types in one bag.",
        "Label with crop type, source, and date of collection.",
      ],
    },
    {
      category: "Processed Foods",
      img: image1,
      details: [
        "Include snacks, bakery products, dairy, and canned foods.",
        "Maintain original packaging until subsampling.",
        "Note product label details like brand, batch number, and expiry date.",
        "Store at 4 °C for perishable foods until analysis.",
      ],
    },
    {
      category: "Beverages & Liquid Foods",
      img: image3,
      details: [
        "Collect milk, juices, soups, and soft drinks in sterilized bottles.",
        "Mix liquids thoroughly before sampling to avoid phase separation.",
        "Keep refrigerated and protected from sunlight.",
        "Record production date, source, and brand for traceability.",
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

    // Hide buttons while exporting
    const buttons = document.querySelectorAll(".no-pdf");
    buttons.forEach((el) => (el.style.display = "none"));

    const pdf = new jsPDF("p", "mm", "a4", true);

    const addHeaderFooter = (pageNum) => {
      const logoWidth = 30;
      const logoHeight = 12;

      // Header logo
      pdf.addImage(logo, "PNG", 15, 8, logoWidth, logoHeight);

      // Footer text
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

    // Main content
    const canvasMain = await html2canvas(inputMain, { scale: 2, useCORS: true });
    const imgDataMain = canvasMain.toDataURL("image/jpeg", 1.0);
    const imgWidth = 190;
    const imgHeight = (canvasMain.height * imgWidth) / canvasMain.width;
    pdf.addImage(imgDataMain, "JPEG", 10, 10, imgWidth, imgHeight, null, "FAST");
    addHeaderFooter(1);

    // Sample content
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

    // Restore buttons
    buttons.forEach((el) => (el.style.display = ""));

    pdf.save("Proximate-Analysis.pdf");
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
            to="/food/foodananlysis"
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Food Analysis applications
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
            Proximate Analysis of Foods
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>Proximate analysis</strong> measures the major nutritional
            components of food, including{" "}
            <em>moisture, ash, protein, fat, crude fiber, and carbohydrates</em>.
            This provides a quick overview of energy value and food quality. At{" "}
            <strong>ChemXpert</strong>, we follow AOAC-approved methods for
            accurate results in food research, quality assurance, and regulatory
            compliance.
          </p>
        </div>

        {/* Available Compounds */}
        <div className="mt-10 max-w-3xl mx-auto">
          <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
           Available Compounds
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {compounds.map((compound, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-3 text-center text-gray-800 text-base font-normal shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
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
                      <span className="text-base font-medium">
                        Cereals & Grains:
                      </span>{" "}
                      Used to determine energy content and shelf-life stability.
                      <br />
                      <span className="text-base font-medium">
                        Processed Foods:
                      </span>{" "}
                      Used for quality assurance, labeling, and regulatory
                      compliance.
                      <br />
                      <span className="text-base font-medium">Beverages:</span>{" "}
                      Assessed for total solids and nutrient contribution.
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Instruments / Methods
                    </td>
                    <td className="p-4 border border-gray-300 text-sm">
                      Oven drying for Moisture, Muffle furnace for Ash,
                      Kjeldahl/Dumas for Protein, Soxhlet for Fat, Gravimetric
                      for Fiber, and difference calculation for Carbohydrates.
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Energy Calculation (Atwater Factors)
                    </td>
                    <td className="p-4 border text-sm border-gray-300">
                      Energy (kcal/100g) = (Protein × 4) + (Fat × 9) +
                      (Carbohydrate × 4) <br />
                      Example: A food with 10 g protein, 5 g fat, and 20 g
                      carbohydrate provides: (10×4) + (5×9) + (20×4) = 40 + 45 +
                      80 = 165 kcal/100g
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border text-sm border-gray-300">
                      Collect representative portions in airtight containers.
                      Avoid contamination or moisture absorption. Refrigerate
                      perishables at ≤ 4 °C until analysis. Label with batch
                      number, source, and collection date.
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
          {/* ✅ Updated heading */}
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
                      before:transition-all before:duration-500 ${
                        openIndex === i ? "before:h-full" : "before:h-0"
                      }`}
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

export default Proximate;
