import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/labwox..jpeg";
import image from "../../assets/image/water.png";
import images from "../../assets/image/sediment.jpg";
import image2 from "../../assets/image/waste.jpg";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// VOC compounds (fixed array)
const vocCompounds = [
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

// Sampling details
const samplingDetails = [
  {
    category: "Drinking Water & Environmental Water",
    img: image,
    color: "text-red-400",
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

const Voc = () => {
  const contentRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDownloadPDF = async () => {
    const input = contentRef.current;

    // Hide buttons for PDF export
    const buttons = input.querySelectorAll(".no-pdf");
    buttons.forEach((el) => (el.style.display = "none"));

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
    });

    // Restore buttons
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
      const logoWidth = 30;
      const logoHeight = 12;
      pdf.addImage(logo, "PNG", 15, 8, logoWidth, logoHeight);

      pdf.setFontSize(11);
      pdf.setTextColor(60);
      pdf.text(footerText, 105, 280, { align: "center" });
      pdf.text(`Page ${pageNum}`, 105, 290, { align: "center" });

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

    pdf.addImage(imgData, "JPEG", 10, position, imgWidth, imgHeight, null, "FAST");
    addHeaderFooter(page);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight + 10;
      pdf.addPage();
      page++;
      pdf.addImage(imgData, "JPEG", 10, position, imgWidth, imgHeight, null, "FAST");
      addHeaderFooter(page);
      heightLeft -= pageHeight;
    }

    pdf.save("voc-compounds.pdf");
  };

  return (
    <Wrapper>
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        <Link
          to="/pollutant"
          className="flex items-center text-blue-700 hover:text-blue-900"
        >
          <ArrowLeft className="mr-2" /> Back
        </Link>
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800"
        >
          <Printer /> Download PDF
        </button>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Volatile Organic Compounds (VOCs)
        </h1>
        <p className="text-lg text-gray-700">
          VOCs are a diverse group of carbon-based chemicals that easily evaporate at room temperature.
          They are found in petroleum products, solvents, paints, cleaning agents, and many industrial processes.
          Due to their volatility and toxicity, accurate sampling and analysis are critical for environmental and health monitoring.
        </p>

        {/* Compound Grid */}
        <h2 className="text-2xl font-semibold text-gray-900">Available Compounds</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {vocCompounds.map((compound, index) => (
            <div
              key={index}
              className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg shadow text-lg font-medium text-gray-800 text-center"
            >
              {compound}
            </div>
          ))}
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
                    <td className="p-4 border border-gray-300 space-y-2">
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
                    <td className="p-4 border border-gray-300">Agilent 8860 Headspace GC-FID</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border border-gray-300">
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

        {/* Sampling Details */}
        <div className="mt-16 max-w-7xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-10 text-center">
            Select Samples type
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
                    openIndex === i ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul
                    className={`relative text-gray-700 text-sm md:text-lg space-y-2 text-right px-2
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
      </div>
    </Wrapper>
  );
};

export default Voc;
