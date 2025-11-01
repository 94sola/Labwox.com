
import React, { useRef,} from "react";
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

import AvailableCompounds from "../ui/AvailableCompounds";
import SamplingGuidelines from "../ui/sampling";


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
    pdf.save("PBDEs.pdf");
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

        <AvailableCompounds compounds={compounds} />
      
        <div ref={sampleRef} className="py-12 lg:py-20">
          <SamplingGuidelines samples={samplingDetails} />
        </div>
      </section>
    </Wrapper>
  );
};

export default Pbde;





