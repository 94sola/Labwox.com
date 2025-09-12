
import React, { useRef, useState } from "react";
import image from "../../assets/image/water.png";
import logo from "../../assets/image/labwox..jpeg";
import images from "../../assets/image/sediment.jpg";
import image2 from "../../assets/image/food.jpg";
import image3 from "../../assets/image/biological.jpg";
import image4 from "../../assets/image/waste.jpg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Pbde = () => {
  const compounds = [
   "BDE-47",
    "BDE-99",
    "BDE-100",
    "BDE-153",
    "BDE-154",
    "BDE-183",
    "PBB-153",
  ];

  const samplingDetails = [
     {
      category: "Water Samples",
      img: image,
      details: [
        "Collect in 1 L amber glass bottles",
        "No preservatives needed, but cool to ≤ 4 °C immediately.",
        "Avoid plastics during sampling and filtration.",
      ],
    },
    {
      category: "Soil & Sediment Samples",
      img: images,
      details: [
        "Collect using stainless steel or solvent-rinsed tools.",
        "Place samples in amber glass jars with Teflon-lined lids.",
        "Fill jars completely to minimize headspace.",
        "Freeze if not analyzed quickly.",
      ],
    },
    {
      category: "Food Samples",
      img: image2,
      details: [
        "Wrap in solvent-rinsed aluminum foil, then place in amber glass jars",
        "Store at ≤ 4 °C; freeze fatty foods (fish, meat, dairy).",
        "Minimize handling to avoid cross-contamination.",
      ],
    },
    {
      category: "Biological Samples",
      img: image3,
      details: [
        "Blood/serum: Collect in glass tubes (no plastic vacutainers). Store frozen (−20 °C or lower).",
        "Breast milk & adipose tissue: Use amber glass jars with foil-lined lids; freeze immediately.",
        "Tissues: Wrap in foil, place in amber jars, freeze.",
      ],
    },
    {
      category: "E-waste / Industrial Samples",
      img: image4,
      details: [
        "Collect residues, ash, or dust with solvent-rinsed metal scoops.",
        "Store in amber glass jars, protected from light",
        "Handle under clean conditions to avoid cross-samplecontamination.",
      ],
    },
  ];

  const contentRef = useRef(null);
  const sampleRef = useRef(null); // ✅ New ref for sample type section
  const [openIndex, setOpenIndex] = useState(null);

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

    pdf.save("PBDEs.pdf");
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
            Polybrominated Diphenyl Ethers (PBDEs)
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>PBDEs</strong> are brominated flame retardants widely used 
            in plastics, textiles, and electronics. These persistent organic pollutants 
            accumulate in the environment and living organisms, raising concerns 
            about human health and ecological safety. Our advanced analytical 
            services ensure accurate detection, monitoring, and regulatory compliance.
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
                      <span className="text-base font-medium">Environmental Samples</span> Surface water & groundwater – near e-waste sites, landfills, and industrial discharges <br />
                      Wastewater & sewage sludge – PBDEs accumulate in biosolids.<br />
                      Soil & sediments – long-term sinks for PBDEs, especially near urban/industrial areas<br />
                      Household & office dust – one of the most significant non-dietary exposure pathways<br />
                      <span className="text-base font-medium">Food & Consumer Products</span> <br />Fish & seafood – bioaccumulation in aquatic organisms.<br />
                      Meat, dairy, and eggs – accumulation in animal fat.<br />
                      Packaged foods – possible migration from materials treated with PBDEs.<br />
                      Plastic products, electronics, textiles, and furniture foam – primary sources of PBDE release.<br />
                      <span className="text-base font-medium">Biological Samples</span>Human breast milk – widely monitored as an indicator of infant exposure.<br />
                      Blood serum & plasma – biomonitoring of general and occupational exposure.<br />
                      Hair and nails – sometimes used as non-invasive biomarkers.<br />
                      Adipose tissue – long-term accumulation site in the body<br />
                      <span className="text-base font-medium">E-waste & Industrial Samples</span> <br />Recycling plant dust and residues – hotspots of PBDE contamination.<br />
                      Ash and combustion residues – from incineration of PBDE-treated materials.<br />
                      Industrial effluents – discharges from manufacturing or dismantling electronics and plastics.
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Instrument Used
                    </td>
                    <td className="p-4 border border-gray-300 text-sm">Agilent 5977 GC-MSD or Thermo ISQ 7610</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border text-sm border-gray-300">
                        Use amber glass containers with solvent-rinsed Teflon-lined caps (never plastic).<br />
                        Avoid contamination: PBDEs are ubiquitous in dust, plastics, and lab air.<br />
                        Keep samples away from light to prevent degradation. <br />
                        Store at ≤ 4 °C short term; freeze biologicals and sediments for long-term storage.
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

export default Pbde;





