


import React, { useRef, useState } from "react";
import image from "../../assets/image/water.png";
import images from "../../assets/image/petroleum.jpg";
import image2 from "../../assets/image/waste.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Printer,
  ChevronDown,
  
} from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Pcb = () => {
  const compounds = [
    "PCB1",
    "PCB5",
    "PCB18",
    "PCB29",
    "PCB44",
    "PCB52",
    "PCB66",
    "PCB87",
    "PCB101",
    "PCB110",
    "PCB138",
    "PCB141",
    "PCB151",
    "PCB153",
    "PCB170",
    "PCB180",
    "PCB183",
    "PCB187",
    "PCB188",
  ];

  const samplingDetails = [
    {
      category: "Environmental Samples",
      img: image,
      color: "text-red-400",
      details: [
        "Water: Grab samples (1–2 L) in pre-baked amber glass bottles with Teflon-lined caps; keep at 4 °C and extract within 7 days.",
        "Soil & Sediment: Stainless steel scoop or corer; collect 200–500 g in amber glass jars with Teflon-lined lids; refrigerate at 4 °C or freeze, keep in the dark",
        "Dust: Vacuumed with clean filters or brushed into amber glass jars; store refrigerated, minimize holding time.",
      ],
    },
    {
      category: "Industrial and Waste Samples",
      img: images,
      details: [
        "Transformer/Capacitor Oils: Collected in pre-cleaned amber glass bottles with Teflon-lined caps; fill completely to reduce",
        "volatilization; store at 4 °C.",
        "Hydraulic fluids, lubricants, waste oils, sludge: Same handling as oils; avoid plastics to prevent adsorption.",
        "Building materials (caulks, sealants, paints): Chip or bulk.",
        "sampling using solvent-cleaned tools; store in amber glass jars, refrigerated.",
      ],
    },
    {
      category: "Food and Agricultural Samples",
      img: image2,
      details: [
        "Fish/Seafood: Whole fish or fillets (100–500 g), wrapped in solvent-rinsed aluminum foil or placed in amber glass; freeze at –20 °C.",
        "Meat, Poultry, Dairy, Eggs: 100–500 g homogenized sample in glass jars; store frozen at –20 °C until extraction.",
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

    // Temporarily hide "Back" and "Download" for PDF only
    const buttons = input.querySelectorAll(".no-pdf");
    buttons.forEach((el) => (el.style.display = "none"));

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
    });

    // Restore buttons after capture
    buttons.forEach((el) => (el.style.display = ""));

    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF("p", "mm", "a4", true);

    const imgWidth = 190;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 10;
    let page = 1;

    const footerText = `© ${new Date().getFullYear()} Labwox Limited, all rights reserved.`;

    const addHeaderFooter = (pageNum) => {
      // ✅ Header with logo instead of text
      const logoWidth = 30;
      const logoHeight = 12;
      pdf.addImage(logo, "PNG", 15, 8, logoWidth, logoHeight);

      // Footer
      pdf.setFontSize(11);
      pdf.setTextColor(60);
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

    // First page
    pdf.addImage(imgData, "JPEG", 10, position, imgWidth, imgHeight, null, "FAST");
    addHeaderFooter(page);
    heightLeft -= pageHeight;

    // Remaining pages
    while (heightLeft > 0) {
      position = heightLeft - imgHeight + 10;
      pdf.addPage();
      page++;
      pdf.addImage(imgData, "JPEG", 10, position, imgWidth, imgHeight, null, "FAST");
      addHeaderFooter(page);
      heightLeft -= pageHeight;
    }

    pdf.save("pcb.pdf");
  };

  return (
    <Wrapper hideHeader>
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-12 lg:py-20 mb-10"
      >
        {/* Back & Print Actions (not included in PDF) */}
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
            PAH Mix E
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>PCBs</strong> are toxic, persistent organic pollutants
              used in industrial applications. They bioaccumulate in food
              chains, pose serious risks to health, and contaminate the
              environment.
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
                      Water [surface water, groundwater, drinking water, wastewater effluents] <br />
                      Sediments – riverbeds, lakes, harbors (PCBs accumulate strongly in sediments)]<br />
                      Dust – indoor dust from schools, offices, homes with old electrical equipment or sealants<br />
                      Fish, meat, poultry, seafood – strong bioaccumulation in fatty tissues (major human exposure route) <br />
                      Paints, sealants, caulks, and building materials – especially pre-1980s <br />
                      Waste oils and sludge – refinery or industrial by-products <br />
                      Transformer oils – dielectric fluids historically containing PCBs <br />
                      Soil [contaminated sites, industrial areas, landfills]
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Instrument Used
                    </td>
                    <td className="p-4 border text-sm border-gray-300">Agilent 5977 GC-MSD or Thermo ISQ 7610</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border text-sm border-gray-300">
                        Always use amber glass containers with Teflon-lined caps (never plastic). <br />
                        Protect samples from light (PCBs degrade under UV). <br />
                        Cool (4 °C) or freeze (–20 °C or below) for storage. <br />
                        Minimize headspace in liquids to reduce volatilization.
                      </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


        {/* Sampling Details */}
        <div className="mt-12 max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-10 text-center">
            Select Sample Types
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplingDetails.map((sample, i) => (
              <div
                key={i}
                className="bg-white transition p-6"
              >
                {/* Always show image (UI + PDF) */}
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
                    openIndex === i ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
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

export default Pcb;


