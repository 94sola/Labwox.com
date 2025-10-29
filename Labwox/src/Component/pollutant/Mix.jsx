import React, { useRef,} from "react";
import image from "../../assets/image/water.png";
import image1 from "../../assets/image/soil.jpg";
import image2 from "../../assets/image/fishh.jpg";
import image3 from "../../assets/image/dust.jpg";
import image4 from "../../assets/image/petroleum.jpg";
import image6 from "../../assets/image/Combustion.jpg";
import image5 from "../../assets/image/Aquatic animal  tissue.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


import AvailableCompounds from "../ui/AvailableCompounds";
import SamplingGuidelines from "../ui/sampling";

const Pah = () => {
  const contentRef = useRef(null);
  const sampleRef = useRef(null);

  const compounds = [
    "Naphthalene",
    "Acenaphthylene",
    "Acenaphthene",
    "Fluorene",
    "Phenanthrene",
    "Anthracene",
    "Fluoranthene",
    "Pyrene",
    "Benzo[c]phenanthrene",
    "Benz[a]anthracene",
    "Chrysene",
    "Benzo[b]fluoranthene",
    "Benzo[j]fluoranthene",
    "Benz[a]pyrene",
    "Benzo[k]fluoranthene",
    "3-Methylcholanthrene",
    "Indeno(1,2,3-cd)pyrene",
    "Dibenz[a,h]anthracene",
    "Benzo[ghi]perylene",
    "Dibenz[a,l]pyrene",
    "Dibenz[a,h]pyrene",
  ];

  const samplingDetails = [
     {
      category: "Water",
      img: image,
      details: [
        "Volume: 1–2 L grab samples",
        "Container: Amber glass bottles with Teflon caps",
        "Preservation: Store at 4 °C, extract within 7 days",
        "Precaution: Minimize headspace to reduce volatilization",
      ],
    },
    {
      category: "Soil and Sediments",
      img: image1,
      details: [
        "Method: Collect with stainless scoop/corer",
        "Amount: 50 g (depending on heterogeneity)",
        "Container: Amber glass jars with Teflon lids",
        "Preservation: Refrigerate at 4 °C, extract within 14 days",
        "Precaution: Avoid plastics, prevent light exposure",
      ],
    },
    {
      category: "Dust",
      img: image3,
      details: [
        "Method: Vacuum sampling with clean filter or sweep/brush",
        "Amount: 10–50 g typical",
        "Container: Amber glass jars",
        "Storage: 4 °C, dark, minimize holding time",
      ],
    },
    {
      category: "Petroleum Products",
      img: image4,
      details: [
        "Method: Grab samples with glass or stainless steel sampler.",
        "Volume: 100–500 mL.",
        "Container: Amber glass bottles, Teflon-lined caps.",
        "Storage: 4 °C, no headspace for volatile-rich samples.",
      ],
    },
    {
      category: "Food (smoked/grilled meat, fish, oils, grains)",
      img: image2,
      details: [
        "Amount: 100–500 g or mL, homogenized.",
        "Container: Pre-baked amber glass jars or solvent-rinsed containers.",
        "Storage: Freeze at –20 °C until extraction.",
        "Precaution: Avoid contamination from smoke/dust during sampling.",
      ],
    },
    {
      category: "Aquatic animal  tissue",
      img: image5,
      details: [
        "Method: Whole tissue or specific organ (liver, muscle, fat).",
        "Amount: 20–100 g depending on species.",
        "Container: Solvent-rinsed amber glass jars.",
        "Storage: Freeze at –20 °C or lower until extraction.",
        "Precaution: Minimize degradation by light and heat.",
      ],
    }, 
    {
      category: "Combustion Residues (ash, soot, coal, char)",
      img: image6,
      details: [
        "Amount: 50–200 g.",
        "Container: Amber glass jars.",
        "Storage: 4 °C or freeze, dark conditions.",
        "Precaution: Avoid cross-contamination with ambient dust.",
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

    pdf.save("PAH-Mix-E.pdf");
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
            PAH Mix E
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>PAH</strong> are widespread environmental contaminants found in air, soil, and water, and can also be ingested through contaminated food, such as grilled meats. Some PAHs are considered carcinogenic,
          </p>
        </div>

        <AvailableCompounds compounds={compounds} />
        <div ref={sampleRef} className="py-10 lg:py-20">
          <SamplingGuidelines samples={samplingDetails} />
        </div>
      </section>
    </Wrapper>
  );
};

export default Pah;

