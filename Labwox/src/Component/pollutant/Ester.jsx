import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import logo from "../../assets/image/labwox..jpeg";

// Sample Images
import image from "../../assets/image/water.png";
import image1 from "../../assets/image/soil.jpg";
import image2 from "../../assets/image/beverages.jpg";
import image3 from "../../assets/image/waste.jpg";
import image4 from "../../assets/image/product.jpg";
import image5 from "../../assets/image/fishh.jpg";

// Reusable UI Components
import AvailableCompounds from "../ui/AvailableCompounds";
import AnalyticalOverview from "../ui/AnalyticalOverview";
import SamplingGuidelines from "../ui/sampling";

const Ester = () => {
  const contentRef = useRef(null);
  const sampleRef = useRef(null);

  // ✅ Compound List
  const compounds = [
    "Dimethyl phthalate (DMP)",
    "Diethyl phthalate (DEP)",
    "Diisobutyl phthalate (DIBP)",
    "Dibutyl phthalate (DBP)",
    "Bis(2-methoxyethyl) phthalate",
    "Bis(4-methyl-2-pentyl) phthalate",
    "Bis(2-ethoxyethyl) phthalate",
    "Dipentyl phthalate",
    "Dihexyl phthalate",
    "Benzyl butyl phthalate (BBP)",
    "Bis(2-butoxyethyl) phthalate",
    "Dicyclohexyl phthalate",
    "Bis(2-ethylhexyl) phthalate (DEHP)",
    "Di-n-octyl phthalate (DNOP)",
    "Dinonyl phthalate (DINP)",
  ];

 
  const overviewData = [
    {
      title: "Sample Types",
      content: (
        <>
          <span className="text-sm font-medium">Environmental Samples:</span>{" "}
          Drinking water, surface water, groundwater, soil, sediment.<br />
          <span className="text-sm font-medium">
            Food and Agricultural Products:
          </span>{" "}
          Oils, packaged foods, infant formula, dairy, meat, fish, beverages.<br />
          <span className="text-sm font-medium">
            Consumer & Industrial Products:
          </span>{" "}
          Plastics, cosmetics, pharmaceuticals, toys, medical devices.<br />
          <span className="text-sm font-medium">
            E-waste & Industrial Samples:
          </span>{" "}
          Recycling residues, incinerator ash, industrial effluents.<br />
          <span className="text-sm font-medium">Waste & Indoor Sources:</span>{" "}
          Household/office dust, runoff, incinerator residues.
        </>
      ),
    },
    {
      title: "Instruments Used",
      content: "Agilent 5977 GC-MS",
    },
    {
      title: "Sampling Information",
      content: (
        <>
          Avoid plastic containers – may leach phthalates.<br />
          Use amber glass jars with Teflon caps.<br />
          Store ≤ 4 °C or freeze long-term.<br />
          Protect from light and document storage conditions.
        </>
      ),
    },
  ];

  const samplingDetails = [
    {
      category: "Water (surface, ground, drinking, wastewater)",
      img: image,
      details: [
        "Collect in amber glass bottles, pre-rinsed with solvent.",
        "Fill completely, leaving minimal headspace.",
        "Store cooled (≤ 4 °C).",
        "Analyze within recommended holding time (7–14 days).",
      ],
    },
    {
      category: "Soil & Sediments",
      img: image1,
      details: [
        "Collect with stainless steel or Teflon tools (no plastic scoops).",
        "Store in solvent-rinsed glass jars.",
        "Keep refrigerated until extraction.",
      ],
    },
    {
      category: "Waste & Industrial Sources",
      img: image3,
      details: [
        "Leachates/sludges: glass containers with Teflon-lined caps.",
        "Runoff samples: grab into amber glass bottles.",
      ],
    },
    {
      category: "Consumer & Industrial Products",
      img: image4,
      details: [
        "For plastics, toys, or medical devices: cut or subsample into glass vials.",
        "For cosmetics/pharmaceuticals: sample in original packaging.",
        "Subsample into glass containers if needed.",
        "Record product batch, brand, and packaging material.",
      ],
    },
    {
      category: "Food & Beverages",
      img: image2,
      details: [
        "Collect in amber glass jars with Teflon caps.",
        "Avoid cling films, plastic bags, or plastic utensils during handling.",
        "Refrigerate (≤ 4 °C) fresh produce, dairy, meat, fish.",
        "Freeze oily/fat-rich foods (oils, butter, cheese, infant food).",
      ],
    },
    {
      category: "Aquatic Animal Tissue",
      img: image5,
      details: [
        "Wrap in solvent-rinsed aluminum foil.",
        "Place in glass jars and freeze.",
        "Ensure only metallic or glass tools are used.",
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
    pdf.save("Phthalate-Esters.pdf");
  };

  return (
    <Wrapper hideHeader>
      {/* ✅ Main Section */}
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-12 lg:py-20"
      >
        {/* Navigation + Print */}
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
            Phthalate Esters
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>Phthalate esters</strong> are synthetic plasticizers widely used
            in consumer and industrial products. They are known endocrine disruptors,
            interfering with the body’s hormonal balance.
          </p>
        </div>
        
        <AvailableCompounds compounds={compounds} />
        <AnalyticalOverview overview={overviewData} />
      </section>

    
      <section ref={sampleRef} className="bg-white py-12 my-6 lg:py-20">
        <SamplingGuidelines samples={samplingDetails} />
      </section>
    </Wrapper>
  );
};

export default Ester;
