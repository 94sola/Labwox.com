import React, { useRef,} from "react";
import image from "../../assets/image/water.png";
import images from "../../assets/image/sediment.jpg";
import image2 from "../../assets/image/waste.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/AvailableCompounds";
import SamplingGuidelines from "../ui/sampling";

const Voc = () => {
  const compounds = [
   "Benzene",
    "1,2-Dichloroethane",
    "Trichloroethene",
    "1,2-Dichloropropane",
    "Dibromomethane",
    "Bromochloromethane",
    "cis-1,3-Dichloropropene",
    "Toluene",
    "trans-1,3-Dichloropropane",
    "1,1,3-Trichloroethane",
    "Tetrachloroethene",
    "Dibromochloromethane",
    "Ethylbenzene",
    "Chlorobenzene",
    "m-Xylene + p-Xylene",
    "o-Xylene",
    "Bromoform",
    "Isopropylbenzene",
    "Bromobenzene",
    "1,1,2,2-Tetrachloroethane",
    "n-Propylbenzene",
    "2-Chlorotoluene",
    "1,3-Dichlorobenzene",
    "4-Chlorotoluene",
    "1,4-Dichlorobenzene",
    "p-Isopropyltoluene",
    "1,2-Dichlorobenzene",
    "Butylbenzene",
    "1,2-Dibromo-3-chloropropane",
    "1,2,4-Trichlorobenzene",
    "Hexachlorobutadiene",
    "Naphthalene",
    "1,2,3-Trichlorobenzene",
  ];

      
  const samplingDetails = [
     {
      category: "Drinking Water & Environmental Water",
      img: image,
      details: [
        "Collect in 40 mL pre-cleaned glass vials with Teflon-lined septa caps.",
        "Fill vials completely (no headspace) to minimize volatilization.",
        "Add preservatives (e.g., hydrochloric acid to pH < 2 for THMs and other VOCs).",
        "Store at ≤ 4 °C and analyze within holding times (typically 14 days).",
        "Avoid agitation and minimize opening/closing to prevent VOC loss.",
      ],
    },
    {
      category: "Soil and Sediment",
      img: images,
      details: [
        "Collect in airtight glass jars (with Teflon-lined caps).",
        "Minimize headspace, or use methanol preservation for field extraction.",
        "Keep samples chilled (≤ 4 °C) and in the dark.",
        "Transport promptly to the laboratory.",
        "Avoid plastic containers (VOCs may permeate or adsorb).",
      ],
    },
    {
      category: "Industrial & Waste Samples",
      img: image2,
      details: [
        "Use pre-cleaned amber glass bottles or vials with Teflon-lined septa.",
        "For liquid wastes, avoid headspace; preserve with acid if required.",
        "For sludge/solid wastes, minimize exposure to air; refrigerate immediately.",
        "Clearly label and record source, process type, and sample conditions.",
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
    pdf.save("Voc.pdf");
  };

  return (
    <Wrapper hideHeader>
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-12 mb-10 lg:py-20"
      >
        {/* Back & Print Actions (UI only) */}
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
            VOCs by Headspace GC-FID
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
           Detect and quantify over 30 VOCs in addition to the BTEX compounds with our Agilent 8860 GC-FID coupled with a headspace sampler.
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

export default Voc;





