
import React, { useRef,} from "react";
import image from "../../assets/image/water.png";
import logo from "../../assets/image/labwox..jpeg";
import images from "../../assets/image/sediment.jpg";
import image2 from "../../assets/image/food.jpg";
import image3 from "../../assets/image/biological.jpg";
import image4 from "../../assets/image/waste.jpg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/AvailableCompounds";
import AnalyticalOverview from "../ui/AnalyticalOverview";
import SamplingGuidelines from "../ui/sampling";


const Pbde = () => {
  const compounds = [
   "BDE-47",
    "BDE-99",
    "BDE-100",
    "BDE-153",
    "BDE-154",
    "BDE-183",
    "PBB-153",
  ];

  const overviewData = [
    {
      title: "Sample Types",
      content: (
        <>
          <span className="text-sm font-medium">Environmental Samples:</span>{" "}
          Surface water & groundwater near e-waste sites, landfills, and industrial discharges <br />
          Wastewater & sewage sludge PBDEs accumulate in biosolids.<br />
          Soil & sediments long-term sinks for PBDEs, especially near urban/industrial areas<br />
          Household & office dust one of the most significant non-dietary exposure pathways<br />
          <span className="text-sm font-medium">Food & Consumer Products:</span> {" "}
          Fish & seafood bioaccumulation in aquatic organisms.<br />
          Meat, dairy, and eggs accumulation in animal fat.<br />
          Packaged foods possible migration from materials treated with PBDEs.<br />
          Plastic products, electronics, textiles, and furniture foam  primary sources of PBDE release.<br />
          <span className="text-sm font-medium">Biological Samples:</span>{" "}
          Human breast milk  widely monitored as an indicator of infant exposure.<br />
          Blood serum & plasma biomonitoring of general and occupational exposure.<br />
          Hair and nails sometimes used as non-invasive biomarkers.<br />
          Adipose tissue long-term accumulation site in the body<br />
          <span className="text-sm font-medium">E-waste & Industrial Samples:</span>{" "}
          Recycling plant dust and residues hotspots of PBDE contamination.<br />
          Ash and combustion residues  from incineration of PBDE-treated materials.<br />
          Industrial effluents  discharges from manufacturing or dismantling electronics and plastics.
        </>
      ),
    },
    {
      title: "Instruments Used",
      content: "Agilent 5977 GC-MSD or Thermo ISQ 7610",
    },
    {
      title: "Sampling Information",
      content: (
        <>
          Use amber glass containers with solvent-rinsed Teflon-lined caps (never plastic).<br />
          Avoid contamination: PBDEs are ubiquitous in dust, plastics, and lab air.<br />
          Keep samples away from light to prevent degradation. <br />
          Store at ≤ 4 °C short term; freeze biologicals and sediments for long-term storage.
        </>
      ),
    },
  ];


  const samplingDetails = [
     {
      category: "Water Samples",
      img: image,
      details: [
        "Collect in 1 L amber glass bottles",
        "No preservatives needed, but cool to ≤ 4 °C immediately.",
        "Avoid plastics during sampling and filtration.",
      ],
    },
    {
      category: "Soil & Sediment Samples",
      img: images,
      details: [
        "Collect using stainless steel or solvent-rinsed tools.",
        "Place samples in amber glass jars with Teflon-lined lids.",
        "Fill jars completely to minimize headspace.",
        "Freeze if not analyzed quickly.",
      ],
    },
    {
      category: "Food Samples",
      img: image2,
      details: [
        "Wrap in solvent-rinsed aluminum foil, then place in amber glass jars",
        "Store at ≤ 4 °C; freeze fatty foods (fish, meat, dairy).",
        "Minimize handling to avoid cross-contamination.",
      ],
    },
    {
      category: "Biological Samples",
      img: image3,
      details: [
        "Blood/serum: Collect in glass tubes (no plastic vacutainers). Store frozen (−20 °C or lower).",
        "Breast milk & adipose tissue: Use amber glass jars with foil-lined lids; freeze immediately.",
        "Tissues: Wrap in foil, place in amber jars, freeze.",
      ],
    },
    {
      category: "E-waste / Industrial Samples",
      img: image4,
      details: [
        "Collect residues, ash, or dust with solvent-rinsed metal scoops.",
        "Store in amber glass jars, protected from light",
        "Handle under clean conditions to avoid cross-samplecontamination.",
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
    pdf.save("PBDEs.pdf");
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
            Polybrominated Diphenyl Ethers (PBDEs)
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <strong>PBDEs</strong> are brominated flame retardants widely used 
            in plastics, textiles, and electronics. These persistent organic pollutants 
            accumulate in the environment and living organisms, raising concerns 
            about human health and ecological safety. Our advanced analytical 
            services ensure accurate detection, monitoring, and regulatory compliance.
          </p>
        </div>

        {/* ✅ Reusable Components */}
        <AvailableCompounds compounds={compounds} />
        <AnalyticalOverview overview={overviewData} />
      </section>

      {/* ✅ Sampling Section */}
      <section ref={sampleRef} className="bg-white py-12 my-6 lg:py-20">
        <SamplingGuidelines samples={samplingDetails} />
      </section>
    </Wrapper>
  );
};

export default Pbde;





