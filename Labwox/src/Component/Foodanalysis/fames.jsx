import React, { useRef } from "react";  
import image from "../../assets/image/oil.jpg";
import image1 from "../../assets/image/food.jpg";
import image2 from "../../assets/image/petroleum.jpg";
import logo from "../../assets/image/labwox..png";

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/AvailableCompounds";
import SamplingGuidelines from "../ui/sampling";

const Fame = () => {
  const compounds = [
    "Butyric acid methyl ester",
    "Caproic acid methyl ester",
    "Caprylic acid methyl ester",
    "Capric acid methyl ester",
    "Undecanoic acid methyl ester",
    "Lauric acid methyl ester",
    "Tridecanoic acid methyl ester",
    "Myristic acid methyl ester",
    "Myristoleic acid methyl ester",
    "Pentadecanoic acid methyl ester",
    "cis-10-Pentadecenoic acid methyl ester",
    "Palmitic acid methyl ester",
    "Palmitoleic acid methyl ester",
    "Heptadecanoic acid methyl ester",
    "cis-10-Heptadecenoic acid methyl ester",
    "Stearic acid methyl ester",
    "Elaidic acid methyl ester",
    "Oleic acid methyl ester",
    "Linolelaidic acid methyl ester",
    "Linoleic acid methyl ester",
    "Arachidic acid methyl ester",
    "g-Linolenic acid methyl ester",
    "cis-11-Eicosenoic acid methyl ester",
    "Linolenic acid methyl ester",
    "Heneicosanoic acid methyl ester",
    "cis-11,14-Eicosadienoic acid methyl ester",
    "Behenic acid methyl ester",
    "Methyl cis-8,11,14-eicosatrienoate",
    "Erucic acid methyl ester",
    "cis-11-14-17-Eicosatrienoic acid methyl ester",
    "Arachidonic acid methyl ester",
    "Tricosanoic acid methyl ester",
    "cis-13,16-Docosadienoic acid methyl ester",
    "Lignoceric acid methyl ester",
    "cis-5,8,11,14,17-Eicosapentaenoic acid methyl ester",
    "Nervonic acid methyl ester",
    "cis-4,7,10,13,16,19-Docosahexaenoic acid methyl ester",
  ];

  

  const samplingDetails = [
    {
      category: "Food Oils & Edible Fats",
      img: image,
      details: [
        "Collect oil samples (vegetable, seed, or animal fats) in amber glass bottles.",
        "Avoid plastic containers to prevent contamination of fatty acids.",
        "Store in cool, dark conditions (≤ 4 °C).",
        "Record oil source, processing method, and date of collection.",
      ],
    },
    {
      category: "Processed Foods",
      img: image1,
      details: [
        "Collect samples of butter, margarine, spreads, and snacks containing fats.",
        "Ensure packaging integrity is maintained before sampling.",
        "Freeze at –20 °C for long-term storage.",
      ],
    },
    {
      category: "Biodiesel",
      img: image2,
      details: [
        "Collect biodiesel in sterilized, airtight amber vials.",
        "Protect samples from heat and light exposure.",
        "Store refrigerated at ≤ 4 °C until analysis.",
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
    pdf.save("FAMEs-Analysis.pdf");
  };

  return (
    <Wrapper hideHeader>
      {/* Main Section */}
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 mb-10 to-white py-12 lg:py-20"
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
            FAMEs Analysis by  GC-FID
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We quantify the percentage composition of  37 fatty acids found in foods. We also categorise them into SFA, TFA, MUFA and PUFA. following the WHO protocol.
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

export default Fame;
