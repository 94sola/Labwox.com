import React, { useRef, } from "react";
import image from "../../assets/image/water.png";
import image1 from "../../assets/image/soil.jpg";
import image2 from "../../assets/image/beverages.jpg";
import image3 from "../../assets/image/waste.jpg";
import image5 from "../../assets/image/biological.jpg";
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo

import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import AvailableCompounds from "../ui/AvailableCompounds";
import AnalyticalOverview from "../ui/AnalyticalOverview";
import SamplingGuidelines from "../ui/sampling";

const Heavymetals = () => {
  const contentRef = useRef(null);
  const sampleRef = useRef(null);
  
  const compounds = [
     "Iron (Fe)",
    "Copper (Cu)",
    "Selenium (Se)",
    "Lead (Pb)",
    "Cadmium (Cd)",
    "Mercury (Hg)",
    "Barium (Ba)",
    "Aluminium (Al)",
    "Nickel (Ni)",
    "Arsenic (As)",
    "Silver (Ag)",
    "Zinc (Zn)",
    "Vanadium (V)",
    "Chromium (Cr)",
    "Cobalt (Co)",
    "Manganese (Mn)",
  ];

  const overviewData = [
    {
      title: "Sample Types",
      content: (
        <>
          <span className="text-sm font-medium">Environmental Samples:</span> {" "}
          Drinking water (tap, bottled, well water)<br />
          Surface water (rivers, lakes, reservoirs).<br />
          Groundwater (aquifers, wells)<br />
          Soil (contaminated sites, landfills, industrial zones)<br />
          Sediment (near industrial discharges or waste sites) <br />
          <span className="text-sm font-medium">Food and Agricultural Products:</span>{" "}
          Cereals and grains (rice, maize, wheat).<br />
          Vegetables and fruits.<br />
          Animal products (milk, meat, eggs, fish, seafood).<br />
          Oils and fats (edible oils, cooking fats).<br />
          Fertilizers and agricultural inputs.<br />
          <span className="text-sm font-medium">Industrial & Waste Samples:</span>{" "}
          Industrial effluents and process waters<br />
          Leachates from landfills.<br />
          Wastewater treatment plant influents/effluents.<br />
          Hazardous waste samples (sludges, tars, solvents).<br />Building materials (paints, adhesives, flooring, sealants)<br />                      <span className="text-base font-medium">E-waste & Industrial Samples</span> <br />Recycling plant dust and residues – hotspots of PBDE contamination.<br />
          Geological materials (rocks, ores, minerals <br />
          <span className="text-sm font-medium">Biological Material:</span>{" "}
          Animal Tissue<br />
          Plant materials (leaves, roots, medicinal herbs)
        </>
      ),
    },
    {
      title: "Instruments Used",
      content: "Agilent 720 ICP-OES",
    },
    {
      title: "Sampling Information",
      content: (
        <>
          Always use acid-washed, trace-metal-clean containers.<br />
          Wear powder-free gloves to avoid contamination.<br />
          Document time, location, storage conditions.<br />
          Minimize exposure to dust, metals, or contact with metallic surfaces.
        </>
      ),
    },
  ];

  const samplingDetails = [
    {
      category: "Water(surface, ground, drinking, wastewater)",
      img: image,
      details: [
        "Collect in acid-washed polyethylene (PE) or Teflon bottles (glass may leach or adsorb metals).",
        "Rinse bottles 3× with sample before collection.",
        "Store cooled (≤ 4 °C)until analysis.",
        "Acidify to pH < 2 with ultrapure HNO₃ immediately after sampling (preservation).",
        "Holding time: typically 6 months for most metals when properly preserved.",
      ],
    },
    {
      category: "Soil & Sediments",
      img: image1,
      details: [
        "Collect using stainless steel or Teflon tools.",
        "Store in clean, inert polyethylene or glass jars.",
        "Keep cool and dry; freeze if long-term storage is needed.",
        "Record sampling depth and site conditions.",
      ],
    },
    {
      category: "Industrial & Process Materials",
      img: image3,
      details: [
        "Use acid-cleaned plastic or glass containers depending on sample type.",
        "Sludges/leachates: store in polyethylene containers.",
        "Store at ambient or refrigerated conditions depending on matrix stability.",
      ],
    },
    {
      category: "Food and Agricultural Products",
      img: image2,
      details: [
        "Collect representative samples (composite if needed).",
        "Use clean, inert containers (polyethylene bags, glass jars).",
        "Avoid metallic implements that may contaminate samples.",
        "Store at 4 °C for fresh produce; freeze for long-term storage.",
        "Record product details: source, type, batch, harvest date",
      ],
    },
    {
      category: "Biological Samples",
      img: image5,
      details: [
        "Blood/serum/urine: collect in trace-metal-free tubes (avoid standard rubber stoppers).",
        "Store refrigerated (≤ 4 °C) short-term; freeze (–20 °C or lower) for long-term.",
        "Hair/nails: collect with stainless steel scissors/clippers, store in clean envelopes or bags.",
        "Tissues: store in plastic vials; freeze immediately.",
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
    pdf.save("Heavy-Metals.pdf");
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
          <h1 className="text-5xl md:text-6xl font-thin text-[#153D63] mb-6">
            Heavy Metals
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At <strong>ChemXpert</strong>, we provide accredited analytical
            services for the detection and quantification of <em>heavy metals</em>
            across food, biological, consumer, and environmental samples. 
            Using advanced techniques such as ICP-MS and AAS, we deliver accurate 
            insights that support food safety, toxicology, environmental monitoring, 
            and regulatory compliance.
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

export default Heavymetals;

