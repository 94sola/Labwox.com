import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../../assets/image/labwox..png";
import image from "../../assets/image/water.png";
import image1 from "../../assets/image/soil.jpg";
import image2 from "../../assets/image/Aquatic animal  tissue.jpg";
import image3 from "../../assets/image/food.jpg";

import AvailableCompounds from "../ui/AvailableCompounds";
import SamplingGuidelines from "../ui/SamplingGuidelines";

const Pah = () => {
  const contentRef = useRef(null);
  const sampleRef = useRef(null);

  // Compounds
  const compounds = [
    "Isophorone", "Acenaphthylene", "Fluorene", "Hexachlorobenzene", "Phenanthrene", "Anthracene",
    "Benz[a]anthracene", "Chrysene", "Benzo[b]fluoranthene", "Benzo[k]fluoranthene", "Benzo[a]pyrene",
    "Indeno(1,2,3-cd)pyrene", "Dibenz[a,h]anthracene", "Benzo[ghi]perylene",
    "PCB 1", "PCB 3", "PCB 28", "PCB-52", "PCB 44", "PCB-70", "PCB 110", "PCB 143", "PCB 153",
    "PCB 204", "PCB 180"
  ];

  
  const samplingDetails = [
    {
      category: "Water (drinking, surface, groundwater)",
      img: image,
      details: [
        "Use amber glass bottles (1 L or larger) with Teflon-lined caps (no plastics).",
        "Collect without headspace; fill bottle completely.",
        "Protect from sunlight (wrap in foil or use amber bottles).",
        "Preserve: cool to ≤ 4 °C; no chemical preservatives normally added for PAHs/PCBs.",
        "Transport on ice; analyze within holding time (usually ≤ 7–14 days).",
        "Include field blanks and trip blanks.",
      ],
    },
    {
      category: "Soil and Sediment",
      img: image1,
      details: [
        "Collect with stainless steel or solvent-rinsed tools (scoop, trowel, corer).",
        "Place in amber glass jars with Teflon-lined lids.",
        "Fill the container fully to minimize headspace.",
        "Avoid contact with plastics or painted surfaces.",
        "Store at ≤ 4 °C; freeze for long-term storage.",
        "Composite sampling may be required for site assessments.",
        "Keep samples away from light and dust sources.",
      ],
    },
    {
      category: "Food (fish, meat, dairy, grains, oils, vegetables)",
      img: image3,
      details: [
        "Wrap solid samples in solvent-rinsed aluminum foil, then place in amber glass jars.",
        "For oils/liquids, collect directly into amber glass jars.",
        "Avoid plastic bags or containers (risk of contamination/adsorption).",
        "Keep at ≤ 4 °C; freeze high-fat foods and fish until extraction.",
        "Minimize handling to avoid cross-contamination.",
      ],
    },
    {
      category: "Biological Tissue (fish, mussels, animal tissues)",
      img: image2,
      details: [
        "Wrap tissues in solvent-rinsed foil, place in amber jars, and freeze immediately (−20 °C or lower).",
        "Protect all biologicals from light and contamination during collection.",
      ],
    },
  ];

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

    // Main section
    const canvasMain = await html2canvas(inputMain, { scale: 2, useCORS: true });
    const imgDataMain = canvasMain.toDataURL("image/jpeg", 1.0);
    const imgWidth = 190;
    const imgHeight = (canvasMain.height * imgWidth) / canvasMain.width;
    pdf.addImage(imgDataMain, "JPEG", 10, 10, imgWidth, imgHeight, null, "FAST");
    addHeaderFooter(1);

    // Sampling section
    pdf.addPage();
    const canvasSample = await html2canvas(inputSample, { scale: 2, useCORS: true });
    const imgDataSample = canvasSample.toDataURL("image/jpeg", 1.0);
    const imgHeightSample = (canvasSample.height * imgWidth) / canvasSample.width;
    pdf.addImage(imgDataSample, "JPEG", 10, 10, imgWidth, imgHeightSample, null, "FAST");
    addHeaderFooter(2);

    buttons.forEach((el) => (el.style.display = ""));
    pdf.save("PAH-pcb-Mix.pdf");
  };

  return (
    <Wrapper hideHeader>
      {/* Main Section */}
      <section ref={contentRef} className="bg-gradient-to-b from-white via-neutral-50 mb-10 to-white py-12 lg:py-20">
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
          <h1 className="text-4xl md:text-5xl font-thin text-[#153D63] mb-6">
            PAHs and PCBs by GC-MSD
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Analyse a mix of selected PAH and PCB compounds in various matrix types with our validated method based on EPA 525.03.
          </p>
        </div>

        {/* Reusable Components */}
        <AvailableCompounds compounds={compounds} />
      
        <div ref={sampleRef} className="py-10 lg:py-14">
          <SamplingGuidelines samples={samplingDetails} />
        </div>
      </section>
    </Wrapper>
  );
};

export default Pah;
