
import React, { useRef, useState } from "react";
import image from "../../assets/image/water.png";
import image1 from "../../assets/image/soil.jpg";
import image2 from "../../assets/image/beverages.jpg";
import image3 from "../../assets/image/waste.jpg";
import image5 from "../../assets/image/biological.jpg";
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

const Heavymetals = () => {
  const compounds = [
    "Iron (Fe)",
    "Copper (Cu)",
    "Selenium (Se)",
    "Lead (Pb)",
    "Cadmium (Cd)",
    "Mercury (Hg)",
    "Barium (Ba)",
    "Aluminium (Al)",
    "Nickel (Ni)",
    "Arsenic (As)",
    "Silver (Ag)",
    "Zinc (Zn)",
    "Vanadium (V)",
    "Chromium (Cr)",
    "Cobalt (Co)",
    "Manganese (Mn)",
  ];

  const samplingDetails = [
    {
      category: "Water(surface, ground, drinking, wastewater)",
      img: image,
      details: [
        "Collect in acid-washed polyethylene (PE) or Teflon bottles (glass may leach or adsorb metals).",
        "Rinse bottles 3× with sample before collection.",
        "Store cooled (≤ 4 °C)until analysis.",
        "Acidify to pH < 2 with ultrapure HNO₃ immediately after sampling (preservation).",
        "Holding time: typically 6 months for most metals when properly preserved.",
      ],
    },
    {
      category: "Soil & Sediments",
      img: image1,
      details: [
        "Collect using stainless steel or Teflon tools.",
        "Store in clean, inert polyethylene or glass jars.",
        "Keep cool and dry; freeze if long-term storage is needed.",
        "Record sampling depth and site conditions.",
      ],
    },
    {
      category: "Industrial & Process Materials",
      img: image3,
      details: [
        "Use acid-cleaned plastic or glass containers depending on sample type.",
        "Sludges/leachates: store in polyethylene containers.",
        "Store at ambient or refrigerated conditions depending on matrix stability.",
      ],
    },
    {
      category: "Food and Agricultural Products",
      img: image2,
      details: [
        "Collect representative samples (composite if needed).",
        "Use clean, inert containers (polyethylene bags, glass jars).",
        "Avoid metallic implements that may contaminate samples.",
        "Store at 4 °C for fresh produce; freeze for long-term storage.",
        "Record product details: source, type, batch, harvest date",
      ],
    },
    {
      category: "Biological Samples",
      img: image5,
      details: [
        "Blood/serum/urine: collect in trace-metal-free tubes (avoid standard rubber stoppers).",
        "Store refrigerated (≤ 4 °C) short-term; freeze (–20 °C or lower) for long-term.",
        "Hair/nails: collect with stainless steel scissors/clippers, store in clean envelopes or bags.",
        "Tissues: store in plastic vials; freeze immediately.",
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

    pdf.save("pah-mix-e.pdf");
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
            Heavy Metals
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At <strong>ChemXpert</strong>, we provide accredited analytical
            services for the detection and quantification of <em>heavy metals</em>
            across food, biological, consumer, and environmental samples. 
            Using advanced techniques such as ICP-MS and AAS, we deliver accurate 
            insights that support food safety, toxicology, environmental monitoring, 
            and regulatory compliance.
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
                      <span className="text-base font-medium">Environmental Samples</span>Drinking water (tap, bottled, well water)<br />
                      Surface water (rivers, lakes, reservoirs).<br />
                      Groundwater (aquifers, wells)<br />
                      Soil (contaminated sites, landfills, industrial zones)<br />
                      Sediment (near industrial discharges or waste sites) <br />
                      <span className="text-base font-medium">Food and Agricultural Products</span> <br />Cereals and grains (rice, maize, wheat).<br />
                      Vegetables and fruits.<br />
                      Animal products (milk, meat, eggs, fish, seafood).<br />
                      Oils and fats (edible oils, cooking fats).<br />
                      Fertilizers and agricultural inputs.<br />
                      <span className="text-base font-medium">Industrial & Waste Samples</span>Industrial effluents and process waters<br />
                      Leachates from landfills.<br />
                      Wastewater treatment plant influents/effluents.<br />
                      Hazardous waste samples (sludges, tars, solvents).<br />Building materials (paints, adhesives, flooring, sealants)<br />                      <span className="text-base font-medium">E-waste & Industrial Samples</span> <br />Recycling plant dust and residues – hotspots of PBDE contamination.<br />
                      Geological materials (rocks, ores, minerals <br />
                      <span className="text-base font-medium">Biological Material</span><br />Animal Tissue<br />
                      Plant materials (leaves, roots, medicinal herbs)
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Instrument Used
                    </td>
                    <td className="p-4 border border-gray-300 text-sm">Agilent 720 ICP-OES</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border text-sm border-gray-300">
                        Always use acid-washed, trace-metal-clean containers.<br />
                        Wear powder-free gloves to avoid contamination.<br />
                        Document time, location, storage conditions.<br />
                        Minimize exposure to dust, metals, or contact with metallic surfaces.
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
            Select Sample Type
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

export default Heavymetals;
