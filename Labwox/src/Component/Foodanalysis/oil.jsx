import React, { useRef } from "react";    
import image from "../../assets/image/beverages.jpg";
import image1 from "../../assets/image/food.jpg";
import image3 from "../../assets/image/oil.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/available";
import SamplingGuidelines from "../ui/sampling";

const Oil = () => { 
  const compounds = [
    "Free fatty acids (FFA) content",
    "Acid value",
    "Peroxide value",
    "Saponification value",
    "Iodine value",
  ];

  const samplingDetails = [
    {
      category: "Plant-based Oils",
      img: image,
      details: [
        "Collect crude or refined vegetable oils such as palm, soybean, sunflower, and olive oil in clean, dry containers.",
        "Avoid exposure to sunlight and high temperatures during sampling.",
        "Seal tightly to prevent oxidation or hydrolysis before analysis.",
        "Record oil source, processing stage, and region of production.",
      ],
    },
    {
      category: "Processed & Packaged Oils",
      img: image1,
      details: [
        "Collect samples from sealed bottles, cans, or sachets ensuring packaging integrity is intact.",
        "Note brand, batch number, and expiry date for traceability.",
        "Protect samples from heat and light to maintain oil stability.",
        "Store at ≤ 25 °C until analysis.",
      ],
    },
    {
      category: "Fats & Oil Blends",
      img: image3,
      details: [
        "Collect samples of margarines, shortenings, butter, and blended oils in sterilized containers.",
        "Prevent contamination with moisture or foreign materials.",
        "Document fat type, blending ratio (if known), and manufacturer details.",
        "Refrigerate if product is prone to spoilage or rancidity.",
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
    pdf.save("Oil-Quality-Parameters.pdf"); 
  };

  return (
    <Wrapper hideHeader>
      {/* Main Section */}
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-12 lg:py-20"
      >
        {/* Back & Print Actions */}
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
            <Printer className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center my-12 px-4">
          <h1 className="text-4xl md:text-5xl font-thin text-[#153D63] mb-6">
            Oil Quality 
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Obtain physicochemical data regarding oil quality using chemical methods.
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

export default Oil;
