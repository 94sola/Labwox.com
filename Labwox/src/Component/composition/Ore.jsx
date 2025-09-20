import React, { useRef, useState } from "react";  
import image from "../../assets/image/rock.jpg";  
import image1 from "../../assets/image/cores.jpg";  
import image2 from "../../assets/image/mine.jpg";   
import logo from "../../assets/image/labwox..jpeg"; // ✅ Your logo  

import { Link } from "react-router-dom";  
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";  
import Wrapper from "../wrapper";  
import jsPDF from "jspdf";  
import html2canvas from "html2canvas";  

const Ore = () => {  
  const compounds = [  
    "Iron (Fe)",  
    "Aluminium (Al)",  
    "Silicon (Si)",  
    "Calcium (Ca)",  
    "Magnesium (Mg)",  
    "Titanium (Ti)",  
    "Manganese (Mn)",  
    "Sulfur (S)",  
    "Phosphorus (P)",  
    "Copper (Cu)",  
    "Cobalt (Co)",  
    "Nickel (Ni)",  
    "Zinc (Zn)",  
    "Lead (Pb)",  
    "Rare Earth Elements (REEs)",  
  ];  


   const firstEight = compounds.slice(0, 8);
   const remaining = compounds.slice(8); 

  const samplingDetails = [  
    {  
      category: "Rock & Ore Samples",  
      img: image,  
      details: [  
        "Collect representative ore samples using a clean hammer and chisel.",  
        "Avoid weathered surfaces – sample fresh rock whenever possible.",  
        "Store in labeled kraft bags or sample envelopes.",  
        "Record GPS coordinates, depth, and geological context.",  
      ],  
    },  
    {  
      category: "Drill Cores & Chips",  
      img: image1,  
      details: [  
        "Cut cores with diamond saws to avoid contamination.",  
        "Store in core boxes with proper labeling (depth, location).",  
        "Wrap chips in clean bags to prevent cross-contamination.",  
      ],  
    },  
    {  
      category: "Mine Tailings & Sludge",  
      img: image2,  
      details: [  
        "Collect grab samples from multiple points to ensure representativeness.",  
        "Use stainless steel scoops or shovels.",  
        "Store in airtight containers; prevent oxidation/moisture uptake.",  
      ],  
    },  
     
  ];  

  const contentRef = useRef(null);  
  const sampleRef = useRef(null);  
  const [openIndex, setOpenIndex] = useState(null);  

   const [showMore, setShowMore] = useState(false);

  const toggleDropdown = (index) => {  
    setOpenIndex(openIndex === index ? null : index);  
  };  

  const handleDownloadPDF = async () => {  
    const inputMain = contentRef.current;  
    const inputSample = sampleRef.current;  
    const buttons = document.querySelectorAll(".no-pdf");  
    buttons.forEach((el) => (el.style.display = "none"));  

    const pdf = new jsPDF("p", "mm", "a4", true);  

    const addHeaderFooter = (pageNum) => {  
      const logoWidth = 30;  
      const logoHeight = 12;  
      pdf.addImage(logo, "PNG", 15, 8, logoWidth, logoHeight);  
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
      pdf.text("Labwox Confidential", 105, 150, { angle: 45, align: "center" });  
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
    pdf.save("Elemental-Analysis-Ores.pdf");  
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
            Elemental Analysis of Ores  
          </h1>  
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">  
            At <strong>ChemXpert</strong>, we specialize in <em>elemental analysis</em> of ores, concentrates, and mine tailings.  
            Using ICP-OES, we quantify major, minor, and trace elements with high precision.  
            Our results support mining exploration, ore beneficiation, and environmental monitoring.  
          </p>  
        </div>  

        {/* Available Compounds */}
        <div className="mt-10 max-w-5xl mx-auto">
          <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
            Available Compounds
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {firstEight.map((compound, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-4 text-center text-gray-800 text-base font-normal shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
              >
                {compound}
              </div>
            ))}
          </div>

          {/* Dropdown for Remaining */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2 px-4 py-3 bg-[#153D63] text-white rounded-xl shadow hover:bg-[#112f4c] transition"
            >
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  showMore ? "rotate-180" : ""
                }`}
              />
              {showMore ? "Show Less" : "Show More Compounds"}
            </button>

            {showMore && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-fadeIn">
                {remaining.map((compound, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-xl p-4 text-center text-gray-800 text-base font-normal shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
                  >
                    {compound}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Analytical Overview */}  
        <div className="max-w-5xl mx-auto px-4 py-10">  
          <div className="mt-8 max-w-4xl mx-auto px-4">  
            <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-6 text-center">  
              Analytical Overview  
            </h3>  
            <div className="overflow-x-auto shadow-lg rounded-xl">  
              <table className="w-full border-collapse">  
                <tbody className="text-gray-700 text-base md:text-lg">  
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">  
                    <td className="p-4 font-semibold border border-gray-300 w-1/3">  
                      Sample Types  
                    </td>  
                    <td className="p-4 text-sm border border-gray-300">  
                      <span className="text-base font-medium">Ore Samples</span> – Iron ore, bauxite, copper ore, gold ore, laterites.  
                      <br />  
                      <span className="text-base font-medium">Mine Tailings & Sludge</span> – Waste streams from extraction and beneficiation.  
                      <br />  
                      <span className="text-base font-medium">Drill Cores & Rock Chips</span> – Exploration and geological surveys.  
                      <br />  
                      <span className="text-base font-medium">Concentrates & Alloys</span> – Smelting, refining, and metallurgical processes.  
                    </td>  
                  </tr>  
                  <tr className="bg-white hover:bg-gray-50 transition">  
                    <td className="p-4 font-semibold border border-gray-300">  
                      Instruments Used  
                    </td>  
                    <td className="p-4 border border-gray-300 text-sm">  
                      Agilent 720 ICP-OES.  
                    </td>  
                  </tr>  
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">  
                    <td className="p-4 font-semibold border border-gray-300">  
                      Sampling Information  
                    </td>  
                    <td className="p-4 border text-sm border-gray-300">  
                      Collect ore samples using clean, non-contaminating tools. Store in kraft bags or airtight containers.  
                      Label with location, depth, and sample type. Pulverize or homogenize before analysis for accuracy.  
                    </td>  
                  </tr>  
                </tbody>  
              </table>  
            </div>  
          </div>  
        </div>  
      </section>  

      {/* Sampling Guidelines */}  
      <section ref={sampleRef} className="bg-white my-6 py-12 lg:py-20">  
        <div className="mt-12 max-w-6xl mx-auto px-4">  
          <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-10 text-center">  
            Sampling Guidelines  
          </h3>  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">  
            {samplingDetails.map((sample, i) => (  
              <div key={i} className="bg-white transition p-6">  
                <img  
                  src={sample.img}  
                  alt={`${sample.category} icon`}  
                  className="w-48 h-32 mx-auto transition-transform duration-300 hover:scale-110 hover:rotate-6 rounded-lg"  
                />  
                <button  
                  onClick={() => toggleDropdown(i)}  
                  className="mt-4 flex items-center justify-center gap-2 text-xl font-thin text-[#153D63] w-full"  
                >  
                  <ChevronDown  
                    className={`w-5 h-5 transition-transform ${openIndex === i ? "rotate-180" : ""}`}  
                  />  
                  {sample.category}  
                </button>  
                <div  
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${  
                    openIndex === i ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"  
                  }`}  
                >  
                  <ul  
                    className={`relative text-gray-700 text-sm md:text-base space-y-2 text-right px-2  
                      before:absolute before:top-0 before:left-0 before:w-1 before:bg-pink-500  
                      before:transition-all before:duration-500  
                      ${openIndex === i ? "before:h-full" : "before:h-0"}`}  
                  >  
                    {sample.details.map((d, j) => (  
                      <li key={j}>{d}</li>  
                    ))}  
                  </ul>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  
    </Wrapper>  
  );  
};  

export default Ore;  
