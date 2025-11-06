import React, { useRef, } from "react"
import logo from "../../assets/image/labwox..jpeg";
import image from "../../assets/image/water.png";
import images from "../../assets/image/petroleum.jpg";
import image2 from "../../assets/image/waste.jpg"; 

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/AvailableCompounds";
import SamplingGuidelines from "../ui/sampling";


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
    pdf.save("PCBs.pdf");
  };

  return (
    <Wrapper hideHeader>
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white mb-10 py-12 lg:py-20"
      >
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

        <div className="max-w-4xl mx-auto text-center my-12 px-4">
          <h1 className="text-4xl md:text-5xl font-thin text-[#153D63] mb-6">
            PCBs by GC-MSD
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Analyse a mix of 19 PCB compounds in various matrix types by GC-MSD
          </p>
        </div>

        <AvailableCompounds compounds={compounds} />
      
        <div ref={sampleRef} className="py-12 lg:py-20">
          <SamplingGuidelines samples={samplingDetails} />
        </div>
      </section>
    </Wrapper>
  );
};

export default Pcb;






