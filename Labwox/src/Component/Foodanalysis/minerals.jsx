import React, { useRef,} from "react";   
import image from "../../assets/image/plant.jpg";
import image1 from "../../assets/image/food.jpg";
import image3 from "../../assets/image/beverages.jpg";
import logo from "../../assets/image/labwox..png";

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/elements";
import SamplingGuidelines from "../ui/sampling";

const Mineral = () => {
  const compounds = [
  "Ca (Calcium)",
  "Fe (Iron)",
  "K (Potassium)",
  "Mg (Magnesium)",
  "Na (Sodium)",
  "Zn (Zinc)",
  "Cu (Copper)",
  "Mn (Manganese)",
  "P (Phosphorus)",
  "Se (Selenium)",
];

  const samplingDetails = [
    {
      category: "Plant-based Foods",
      img: image,
      details: [
        "Collect samples of cereals, vegetables, legumes, and fruits in clean, dry containers.",
        "Avoid contamination with soil particles or dust during sampling.",
        "Dry samples (if required) at controlled temperatures to prevent loss of volatile minerals.",
        "Document crop type, growth stage, and source region for traceability.",
      ],
    },
    {
      category: "Processed & Packaged Foods",
      img: image1,
      details: [
        "Collect samples of fortified cereals, canned goods, snacks, and dairy-based products.",
        "Ensure packaging integrity is maintained before sampling.",
        "Record product brand, batch number, and expiry date.",
        "Refrigerate perishable samples at ≤ 4 °C until analysis.",
      ],
    },
    {
      category: "Water & Beverages",
      img: image3,
      details: [
        "Collect drinking water, mineral water, juices, or milk in sterilized plastic bottles.",
        "Add nitric acid (HNO₃) to preserve dissolved metals if long-term storage is required.",
        "Store refrigerated and away from direct sunlight.",
        "Document source, packaging, and production facility details.",
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
    pdf.save("Minerals-in-Food.pdf");
  };

  return (
    <Wrapper hideHeader>
      {/* Main Section */}
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white mb-10 py-12 lg:py-20"
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
            Minerals by ICP-OES
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We apply ICP-OES to quantify major and trace minerals in food, beverages, supplements, and biological samples.
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

export default Mineral;
