import React, { useRef } from "react";
import image from "../../assets/image/rock.jpg";
import image1 from "../../assets/image/cores.jpg";
import image2 from "../../assets/image/mine.jpg";
import logo from "../../assets/image/labwox..jpeg";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/elements";
import SamplingGuidelines from "../ui/sampling";

const Ore = () => {
  const contentRef = useRef(null);
  const sampleRef = useRef(null);

  // ✅ Full element names added beside symbols
  const compounds = [
    "Ce (Cerium)", "Dy (Dysprosium)", "Eu (Europium)", "Er (Erbium)",
    "Ho (Holmium)", "Gd (Gadolinium)", "La (Lanthanum)", "Lu (Lutetium)",
    "Nd (Neodymium)", "Pr (Praseodymium)", "Sm (Samarium)", "Sc (Scandium)",
    "Th (Thorium)", "Tb (Terbium)", "Tm (Thulium)", "U (Uranium)",
    "Yb (Ytterbium)", "Y (Yttrium)", "Ca (Calcium)", "Ir (Iridium)",
    "Pd (Palladium)", "Pt (Platinum)", "Rh (Rhodium)", "Ru (Ruthenium)",
    "Au (Gold)", "Te (Tellurium)", "Al (Aluminum)", "As (Arsenic)",
    "Ba (Barium)", "Be (Beryllium)", "Ga (Gallium)", "Li (Lithium)",
    "In (Indium)", "Mg (Magnesium)", "K (Potassium)", "Rb (Rubidium)",
    "Se (Selenium)", "Na (Sodium)", "Sr (Strontium)", "Bi (Bismuth)",
    "Sb (Antimony)", "B (Boron)", "Ge (Germanium)", "Hf (Hafnium)",
    "Mo (Molybdenum)", "Nb (Niobium)", "P (Phosphorus)", "Re (Rhenium)",
    "Si (Silicon)", "S (Sulfur)", "Ta (Tantalum)", "Sn (Tin)",
    "Ti (Titanium)", "W (Tungsten)", "Zr (Zirconium)", "Cd (Cadmium)",
    "Cr (Chromium)", "Co (Cobalt)", "Cu (Copper)", "Fe (Iron)",
    "Pb (Lead)", "Mn (Manganese)", "Hg (Mercury)", "Ni (Nickel)",
    "Ag (Silver)", "Tl (Thallium)", "V (Vanadium)", "Zn (Zinc)"
  ];




  const samplingDetails = [
    {
      category: "Rock & Ore Samples",
      img: image,
      details: [
        "Collect representative ore samples using a clean hammer and chisel.",
        "Avoid weathered surfaces – sample fresh rock whenever possible.",
        "Store in labeled kraft bags or sample envelopes.",
        "Record GPS coordinates, depth, and geological context.",
      ],
    },
    {
      category: "Drill Cores & Chips",
      img: image1,
      details: [
        "Cut cores with diamond saws to avoid contamination.",
        "Store in core boxes with proper labeling (depth, location).",
        "Wrap chips in clean bags to prevent cross-contamination.",
      ],
    },
    {
      category: "Mine Tailings & Sludge",
      img: image2,
      details: [
        "Collect grab samples from multiple points to ensure representativeness.",
        "Use stainless steel scoops or shovels.",
        "Store in airtight containers; prevent oxidation/moisture uptake.",
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
    pdf.save("Elemental-Analysis-Ores.pdf");
  };

  return (
    
    <Wrapper hideHeader>
          
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-5 lg:py-14 mb-10 "
      >
        {/* Back & Print Actions */}
        <div className="max-w-6xl mx-auto px-4 mt-2 flex justify-between items-center no-pdf">
          <Link
            to="/composition"
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to composition applications
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
            Elemental Analysis of Ores
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At <strong>ChemXpert</strong>, we specialize in <em>elemental analysis</em> of ores, concentrates, and mine tailings.
            Using ICP-OES, we quantify major, minor, and trace elements with high precision.
            Our results support mining exploration, ore beneficiation, and environmental monitoring.
          </p>
        </div>

        <AvailableCompounds compounds={compounds} />
        
        <div ref={sampleRef} className="pt-10 lg:pt-14">
          <SamplingGuidelines samples={samplingDetails} />
        </div>
      </section>
    </Wrapper>
  );
};

export default Ore;
