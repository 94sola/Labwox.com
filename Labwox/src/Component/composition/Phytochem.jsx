import React, { useRef,} from "react";
import image from "../../assets/image/plant.jpg";
import image1 from "../../assets/image/herbs.jpg";
import image2 from "../../assets/image/oil.jpg"
import logo from "../../assets/image/labwox..jpeg";
import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/available";
import SamplingGuidelines from "../ui/sampling";


const Phytochemical = () => {
  const compounds = [
    "Terpenoids",
    "Phytosterols",
    "Volatile alkaloids",
    "Volatile plant esters",
    "Aldehydes",
    "Ketones",
  ];

  const samplingDetails = [
    {
      category: "Fresh Plant Materials",
      img: image,
      details: [
        "Collect leaves, stems, roots, or flowers using clean stainless-steel scissors or knives.",
        "Avoid plastic bags—use paper bags or foil for temporary storage.",
        "Shade-dry samples immediately if not analyzed fresh.",
        "Label with species, part used, and date of collection.",
      ],
    },
    {
      category: "Dried Herbal Samples",
      img: image1,
      details: [
        "Store dried herbs in airtight glass jars or kraft paper bags.",
        "Keep away from moisture, direct sunlight, and pests.",
        "Ensure proper grinding or milling before extraction.",
      ],
    },
    {
      category: "Essential Oils",
      img: image2,
      details: [
        "Store essential oils in tightly sealed amber glass bottles to avoid light degradation.",
        "Keep at temperatures below 25°C and away from heat or direct sunlight.",
        "Avoid contamination—use sterile droppers or pipettes during handling.",
        "Label each bottle clearly with plant source, extraction method, and date of distillation.",
      ],
    },
  ];

  const contentRef = useRef(null);
  const sampleRef = useRef(null);
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
    pdf.save("Phytochemical-Analysis.pdf");
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
            Phytochemical Analysis by Gc - Ms
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
            <strong>Phytochemical Analysis</strong> plays a vital role in
            identifying, isolating, and quantifying bioactive compounds from
            plants, herbs, foods, and natural products.
          </p>
        </div>

        <AvailableCompounds compounds={compounds} />
     

    
        <div ref={sampleRef} className="py-10  lg:py-14">
          <SamplingGuidelines samples={samplingDetails} />
        </div>
      </section>
    </Wrapper>
  );
};

export default Phytochemical;
