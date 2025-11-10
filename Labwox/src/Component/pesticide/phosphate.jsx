import React, { useRef,} from "react";;
import image from "../../assets/image/vegetable.jpg";
import image3 from "../../assets/image/sediment.jpg";
import image2 from "../../assets/image/food.jpg";
import images from "../../assets/image/waste.jpg";
import image1 from "../../assets/image/biological.jpg";
import logo from "../../assets/image/labwox..png";

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/availables";
import SamplingGuidelines from "../ui/sampling";

const Organophosphate = () => {
  const compounds = [
    "Chlorpyrifos",
    "Dichlorvos (DDVP)",
    "Profenofos",
    "Malathion",
    "Parathion-methyl",
    "Phorate",
    "Acephate",
    "Diazinon",
  ];

 

  const samplingDetails = [
    {
      category: "Food and Agricultural Products",
      img: image,
      details: [
        "Collect representative samples (composite of multiple units where applicable).",
        "Avoid contamination from hands, tools, or packaging materials.",
        "Store samples in clean, inert containers (glass jars, PTFE-lined caps preferred).",
        "Keep chilled (4 °C) and transport quickly to the lab.",
        "For high-moisture foods (e.g., fruits, vegetables), avoid prolonged storage to reduce degradation.",
        "Record product details: origin, variety, treatment history, harvest date",
      ],
    },
    {
      category: "Environmental Samples",
      img: image3,
      details: [
        "Water (surface, ground, drinking, wastewater):",
        "Collect in amber glass bottles (pre-cleaned, solvent-rinsed).",
        "Fill without headspace (to minimize volatilization).",
        "Preserve with cooling (4 °C) and, where required, add preservatives (e.g., sodium thiosulfate if chlorination present).",
        "Analyze within recommended holding times (commonly 7–14 days",
        "Soil and Sediment:",
        "Use stainless steel or Teflon-coated tools for collection.",
        "Store in solvent-rinsed amber glass jars.",
        "Keep samples cool and in the dark to minimize breakdown.",
        "Collect enough material for replicate and QC analyses.",
        "Air:",
        "Collect using high-volume air samplers with glass fiber or polyurethane foam (PUF) cartridges.",
        "Store cartridges wrapped in solvent-rinsed aluminum foil.",
        "Keep frozen until analysis.",
      ],
    },
    {
      category: "Industrial and Waste Samples",
      img: images,
      details: [
        "For pesticide formulations: take samples directly from containers using glass or stainless-steel equipment.",
        "For runoff or wash water: collect as grab samples in amber glass bottles.",
        "Household dust: collect with vacuum-equipped dust samplers into clean, inert bags or jars.",
        "Store all at 4 °C or frozen, depending on matrix stability.",
      ],
    },
    {
      category: "Biological Samples",
      img: image1,
      details: [
        "Collect in appropriate sterile containers (blood tubes, urine containers, milk bottles).",
        "Store biological fluids (blood, urine, milk) at ≤ –20 °C.",
        "Tissues (fat, fish, organs) should be wrapped in solvent-rinsed aluminum foil and frozen.",
        "Avoid plastic where pesticides might adsorb or leach.",
        "Record species, age, sex, exposure history if known.",
      ],
    },
    {
      category: "Processed and Packaged Foods",
      img: image2,
      details: [
        "Use aseptic techniques to avoid cross-contamination.",
        "Take representative subsamples (e.g., blended portions from multiple units).",
        "Package in solvent-rinsed glass jars or sterile bags.",
        "Chill (4 °C) and transport promptly.",
        "Record full product details: brand, lot number, packaging type.",
      ],
    },
  ];

  const contentRef = useRef(null);
  const sampleRef = useRef(null); // ✅ New ref for sample type section
  const handleDownloadPDF = async () => {
    const inputMain = contentRef.current;
    const inputSample = sampleRef.current;

    const buttons = document.querySelectorAll(".no-pdf");
    buttons.forEach((el) => (el.style.display = "none"));

    const pdf = new jsPDF("p", "mm", "a4", true);

    const addHeaderFooter = (pageNum) => {
      pdf.addImage(logo, "PNG", 15, 8, 30, 12);
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
    const canvasSample = await html2canvas(inputSample, { scale: 2, useCORS: true });
    const imgDataSample = canvasSample.toDataURL("image/jpeg", 1.0);
    const imgHeightSample = (canvasSample.height * imgWidth) / canvasSample.width;
    pdf.addImage(imgDataSample, "JPEG", 10, 10, imgWidth, imgHeightSample, null, "FAST");
    addHeaderFooter(2);

    buttons.forEach((el) => (el.style.display = ""));

    pdf.save("Organophosphate.pdf");
  };

  return (
    <Wrapper hideHeader>
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-12 lg:py-20 mb-10"
      >
      
        <div className="max-w-6xl mx-auto px-4 mt-2 flex justify-between items-center no-pdf">
          <Link
            to="/pesticide/single "
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to single-residue pesticides
          </Link>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-[#153D63] text-white rounded-lg shadow hover:bg-[#112f4c]"
          >
            <Printer className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        <div className="max-w-4xl mx-auto text-center my-12 px-4">
          <h1 className="text-4xl md:text-5xl font-thin text-[#153D63] mb-6">
            Single Residue Organophosphate
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Organophosphates are widely used insecticides that act by disrupting 
          the nervous system of pests. Single-residue analysis ensures precise 
          detection of individual compounds across food, feed, and environmental 
          samples for regulatory compliance and public safety.
          </p>
        </div>

        <AvailableCompounds compounds={compounds} />
      

        <div ref={sampleRef} className="bg-white py-12 my-6 lg:py-20">
          <SamplingGuidelines samples={samplingDetails} />
        </div>
      </section>
    </Wrapper>
  );
};

export default Organophosphate;
