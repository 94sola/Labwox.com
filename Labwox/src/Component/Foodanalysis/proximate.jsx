import React, { useRef} from "react";
import image from "../../assets/image/cereals.jpg";
import image1 from "../../assets/image/food.jpg";
import image3 from "../../assets/image/beverages.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/available";
import SamplingGuidelines from "../ui/sampling";

const Proximate = () => {
  const compounds = [
    "Moisture",
    "Ash",
    "Protein",
    "Carbohydrate",
    "Fat",
    "Crude Fiber",
  ];
  

  const samplingDetails = [
    {
      category: "Cereals & Grains",
      img: image,
      details: [
        "Collect representative samples of rice, maize, wheat, and other grains.",
        "Use clean polyethylene bags to avoid moisture absorption.",
        "Avoid mixing different grain types in one bag.",
        "Label with crop type, source, and date of collection.",
      ],
    },
    {
      category: "Processed Foods",
      img: image1,
      details: [
        "Include snacks, bakery products, dairy, and canned foods.",
        "Maintain original packaging until subsampling.",
        "Note product label details like brand, batch number, and expiry date.",
        "Store at 4 °C for perishable foods until analysis.",
      ],
    },
    {
      category: "Beverages & Liquid Foods",
      img: image3,
      details: [
        "Collect milk, juices, soups, and soft drinks in sterilized bottles.",
        "Mix liquids thoroughly before sampling to avoid phase separation.",
        "Keep refrigerated and protected from sunlight.",
        "Record production date, source, and brand for traceability.",
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

    pdf.save("Proximate-Analysis.pdf");
  };

  return (
    <Wrapper hideHeader>
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white mb-10 py-12 lg:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 mt-2 flex justify-between items-center no-pdf">
          <Link
            to="/food/foodananlysis"
            className="inline-flex items-center italic gap-2 text-[#153D63] hover:text-[#FFC000] font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Food Analysis applications
          </Link>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-[#153D63] text-white rounded-lg shadow hover:bg-[#112f4c]"
          >
            <Printer className="w-5 h-5" /> Download PDF
          </button>
        </div>

        <div className="max-w-4xl mx-auto text-center my-12 px-4">
          <h1 className="text-4xl md:text-5xl font-thin text-[#153D63] mb-6">
            Proximate Analysis of Foods
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>Proximate analysis</strong> measures the major nutritional
            components of food, including{" "}
            <em>moisture, ash, protein, fat, crude fiber, and carbohydrates</em>.
            This provides a quick overview of energy value and food quality. At{" "}
            <strong>ChemXpert</strong>, we follow AOAC-approved methods for
            accurate results in food research, quality assurance, and regulatory
            compliance.
          </p>
        </div>

        <AvailableCompounds compounds={compounds} />
      
        <div ref={sampleRef} className="py-10 lg:py-14">
          <SamplingGuidelines samples={samplingDetails} />
        </div>
      </section>
    </Wrapper>
  );
};

export default Proximate;
