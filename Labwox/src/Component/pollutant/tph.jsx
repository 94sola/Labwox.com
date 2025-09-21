import React, { useRef, } from "react";
import image from "../../assets/image/water.png";
import images from "../../assets/image/sediment.jpg";
import image2 from "../../assets/image/fishh.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/available";
import AnalyticalOverview from "../ui/AnalyticalOverview";
import SamplingGuidelines from "../ui/sampling";

const Tph = () => {
  const compounds = [
   "n-Alkanes [C10–C40]",
  ];


  const overviewData = [
    {
      title: "Sample Types",
      content: (
        <>
          <span className="text-sm font-medium">Environmental Samples:</span>{" "} 
          Soil primary matrix in contaminated site assessments (leaks, spills, gas stations, oil fields)<br />
          Sediment accumulation in aquatic environments near industrial discharges or spills.<br />
          Surface water rivers, lakes, and marine waters impacted by oil spills or runoff.<br />
          Groundwater monitoring of underground storage tanks (USTs), refineries, and landfills.<br />
          Wastewater & effluents petroleum refineries, petrochemical industries, and stormwater runoff.<br />
          <span className="text-sm font-medium">Biological Samples:</span>{" "}
          Tissues of aquatic organisms fish, mussels, and benthic organisms exposed to oil pollution.
        </>
      ),
    },
    {
      title: "Instruments Used",
      content: "Agilent 8860 GC-FID",
    },
    {
      title: "Sampling Information",
      content: (
        <>
          Glass only (no plastics). <br />
          Avoid light & heat (hydrocarbons degrade/volatilize easily). <br />
          Cool or freeze as quickly as possible.
        </>
      ),
    },
  ]; 

  const samplingDetails = [
     {
      category: "Water (surface water, groundwater, wastewater)",
      img: image,
      details: [
        "Use glass bottles (1 L or larger) with Teflon-lined caps (no plastic).",
        "Fill vials completely (no headspace) to minimize volatilization.",
        "Preserve: add HCl to pH < 2 (for VOC fractions of TPH).",
        "Cool to ≤ 4 °C immediately after collection.",
        "Transport in dark conditions to minimize degradation.",
        "Analyze within recommended holding times (typically ≤ 7–14 days depending on method).",
      ],
    },
    {
      category: "Soil and Sediment",
      img: images,
      details: [
        "Collect with stainless steel or solvent-rinsed tools (scoops, augers, corers).",
        "Place in amber glass jars with Teflon-lined lids",
        "Fill jars fully to minimize headspace.",
        "Store at ≤ 4 °C; freeze if analysis will be delayed.",
        "Avoid plastics or painted tools (possible contamination).",
      ],
    },
    {
      category: "Biological Tissue (fish, mussels, animal tissues)",
      img: image2,
      details: [
        "Collect using solvent-rinsed stainless steel instruments.",
        "Wrap tissues in solvent-rinsed aluminum foil; place in amber glass jars.s",
        "Store frozen at −20 °C or lower until analysis.",
        "Minimize exposure to air and light to prevent hydrocarbon loss.",
        "Clearly label with species, tissue type, and date/location of collection.",
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
    pdf.save("Tph.pdf");
  };

  return (
    <Wrapper hideHeader>
      {/* Main Section */}
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-12 lg:py-20"
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
            Total Petroleum Hydrocarbons (TPH)
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>TPH</strong>(total petroleum hydrocarbons) represents a group of n-alkanes from C10-C40 often analysed in environmental media as indicators of petroleum contamination.
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

export default Tph;






