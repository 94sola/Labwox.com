import React, { useRef, useState } from "react";
import image from "../../assets/image/water.png";
import image1 from "../../assets/image/soil.jpg";
import image2 from "../../assets/image/food.jpg";
import image3 from "../../assets/image/dust.jpg";
import image4 from "../../assets/image/petroleum.jpg";
import image5 from "../../assets/image/fish.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Printer,
  ChevronDown,
  Droplets,
  Mountain,
  Wind,
  Flame,
  UtensilsCrossed,
  Fish,
} from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Pah = () => {
  const compounds = [
    "Naphthalene",
    "Acenaphthylene",
    "Acenaphthene",
    "Fluorene",
    "Phenanthrene",
    "Anthracene",
    "Fluoranthene",
    "Pyrene",
    "Benzo[c]phenanthrene",
    "Benz[a]anthracene",
    "Chrysene",
    "Benzo[b]fluoranthene",
    "Benzo[j]fluoranthene",
    "Benz[a]pyrene",
    "Benzo[k]fluoranthene",
    "3-Methylcholanthrene",
    "Indeno(1,2,3-cd)pyrene",
    "Dibenz[a,h]anthracene",
    "Benzo[ghi]perylene",
    "Dibenz[a,l]pyrene",
    "Dibenz[a,h]pyrene",
  ];

  const samplingDetails = [
    {
      category: "Water",
      icon: Droplets,
      img: image,
      color: "text-blue-500",
      details: [
        "Volume: 1–2 L grab samples",
        "Container: Amber glass bottles with Teflon caps",
        "Preservation: Store at 4 °C, extract within 7 days",
        "Precaution: Minimize headspace to reduce volatilization",
      ],
    },
    {
      category: "Soil & Sediments",
      icon: Mountain,
      img: image1,
      color: "text-yellow-600",
      details: [
        "Method: Collect with stainless scoop/corer",
        "Amount: 50 g (depending on heterogeneity)",
        "Container: Amber glass jars with Teflon lids",
        "Preservation: Refrigerate at 4 °C, extract within 14 days",
        "Precaution: Avoid plastics, prevent light exposure",
      ],
    },
    {
      category: "Dust",
      icon: Wind,
      img: image3,
      color: "text-gray-500",
      details: [
        "Method: Vacuum sampling with clean filter or sweep/brush",
        "Amount: 10–50 g typical",
        "Container: Amber glass jars",
        "Storage: 4 °C, dark, minimize holding time",
      ],
    },
    {
      category: "Petroleum Products",
      icon: Flame,
      img: image4,
      color: "text-red-600",
      details: [
        "Method: Grab samples with glass or stainless steel sampler.",
        "Volume: 100–500 mL.",
        "Container: Amber glass bottles, Teflon-lined caps.",
        "Storage: 4 °C, no headspace for volatile-rich samples.",
      ],
    },
    {
      category: "Food",
      icon: UtensilsCrossed,
      img: image2,
      color: "text-green-600",
      details: [
        "Amount: 100–500 g or mL, homogenized.",
        "Container: Pre-baked amber glass jars or solvent-rinsed containers.",
        "Storage: Freeze at –20 °C until extraction.",
        "Precaution: Avoid contamination from smoke/dust during sampling.",
      ],
    },
    {
      category: "Biota",
      icon: Fish,
      img: image5,
      color: "text-purple-600",
      details: [
        "Method: Whole tissue or specific organ (liver, muscle, fat).",
        "Amount: 20–100 g depending on species.",
        "Container: Solvent-rinsed amber glass jars.",
        "Storage: Freeze at –20 °C or lower until extraction.",
        "Precaution: Minimize degradation by light and heat.",
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
        <div className="max-w-6xl mx-auto text-center mb-12 px-4">
          <h1 className="text-5xl md:text-7xl font-light text-[#153D63] mb-6">
            PAH Mix E
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>PAH Mix E</strong> is a collection of polycyclic aromatic hydrocarbons (PAHs).
            These compounds are persistent in nature and are linked to ecological and health risks.
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
                className="border border-gray-300 rounded-xl p-5 text-center text-gray-800 text-lg font-semibold shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
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
                    <td className="p-4 border border-gray-300">
                      Water [surface water, groundwater, drinking water, wastewater effluents] <br />
                      Soil & Sediments [especially near industrial, urban, and oil-polluted areas] <br />
                      Dust [household dust, street dust, road-deposited sediments] <br />
                      Crude oil & refined petroleum products [gasoline, diesel, kerosene, lubricating oils] <br />
                      Industrial effluents & sludges [coking plants, petroleum refineries, creosote waste] <br />
                      Edible oils [especially recycled frying oils] <br />
                      Smoked and grilled foods – fish, meat <br />
                      Cereals and grains [contamination during drying, processing, or packaging]
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Instrument Used
                    </td>
                    <td className="p-4 border border-gray-300">
                      Agilent 5977 GC-MSD or Thermo ISQ 7610
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="p-4 font-semibold border border-gray-300">
                      Sampling Information
                    </td>
                    <td className="p-4 border border-gray-300">
                      Amber glass + Teflon-lined lids prevent contamination and photodegradation.
                      Cooling (4 °C) or freezing extends holding times. Light protection is critical.
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

      </section>
    </Wrapper>
  );
};

export default Pah;
