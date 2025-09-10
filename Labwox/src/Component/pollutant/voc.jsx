
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Printer,
  Droplet,
  Mountain,
  Wind,
  Flame,
  UtensilsCrossed,
  Fish,
  Package,
} from "lucide-react";
import Wrapper from "../wrapper";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
  "1,2,3-Trichloropropane",
  ];

  // sampling details with icons
  const samplingDetails = [
    {
      category: "Water",
      icon: <Droplet className="w-10 h-10 text-[#153D63]" />,
      details: [
        "Volume: 1–2 L grab samples",
        "Amber glass bottles with Teflon caps",
        "Store at 4 °C, extract within 7 days",
        "Minimize headspace to reduce volatilization",
      ],
    },
    {
      category: "Soil & Sediments",
      icon: <Mountain className="w-10 h-10 text-[#153D63]" />,
      details: [
        "Collect with stainless scoop/corer",
        "Amount: 50 g (depending on heterogeneity)",
        "Amber glass jars with Teflon lids",
        "Refrigerate at 4 °C, extract within 14 days",
        "Avoid plastics, prevent light exposure",
      ],
    },
    {
      category: "Dust",
      icon: <Wind className="w-10 h-10 text-[#153D63]" />,
      details: [
        "Vacuum sampling or brush method",
        "Amount: 10–50 g",
        "Amber glass jars",
        "Store at 4 °C, dark, minimize holding time",
      ],
    },
    {
      category: "Petroleum Products",
      icon: <Flame className="w-10 h-10 text-[#153D63]" />,
      details: [
        "Grab samples with glass/stainless sampler",
        "Volume: 100–500 mL",
        "Amber glass bottles, Teflon caps",
        "Store at 4 °C, no headspace for volatile-rich samples",
      ],
    },
    {
      category: "Food",
      icon: <UtensilsCrossed className="w-10 h-10 text-[#153D63]" />,
      details: [
        "100–500 g/mL homogenized",
        "Pre-baked amber jars or solvent-rinsed containers",
        "Freeze at –20 °C until extraction",
        "Avoid contamination from smoke/dust",
      ],
    },
    {
      category: "Biota",
      icon: <Fish className="w-10 h-10 text-[#153D63]" />,
      details: [
        "Whole tissue or specific organ",
        "20–100 g depending on species",
        "Solvent-rinsed amber glass jars",
        "Freeze at –20 °C or lower",
      ],
    },
    
    
  ];

  const contentRef = useRef(null);

  const handleDownloadPDF = async () => {
    const input = contentRef.current;
    const canvas = await html2canvas(input, {
      scale: 0.8,
      useCORS: true,
      ignoreElements: (el) => el.classList.contains("no-pdf"),
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.5);
    const pdf = new jsPDF("p", "mm", "a4", true);
    const imgWidth = 160;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 20;
    let page = 1;

    const footerText = `© ${new Date().getFullYear()} Labwox Limited, all rights reserved.`;

    const addHeaderFooter = (pageNum) => {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(18);
      pdf.setTextColor(21, 61, 99);
      pdf.text("labwox", 15, 15);
      pdf.setTextColor(255, 192, 0);
      pdf.text(".", 43, 15);

      pdf.setFontSize(9);
      pdf.setTextColor(60);
      pdf.text(footerText, 105, 280, { align: "center" });
      pdf.text(`Page ${pageNum}`, 105, 290, { align: "center" });
    };

    pdf.addImage(imgData, "JPEG", 25, position, imgWidth, imgHeight, null, "FAST");
    addHeaderFooter(page);
    heightLeft -= (pageHeight - 20);

    while (heightLeft > 0) {
      position = heightLeft - imgHeight + 20;
      pdf.addPage();
      page++;
      pdf.addImage(imgData, "JPEG", 25, position, imgWidth, imgHeight, null, "FAST");
      addHeaderFooter(page);
      heightLeft -= pageHeight;
    }

    pdf.save("pah-mix-e.pdf");
  };

  return (
    <Wrapper hideHeader >
      <section
        ref={contentRef}
        className="bg-gradient-to-b from-white via-neutral-50 to-white py-12 lg:py-20 mb-10"
      >
        {/* Back & Print Actions */}
        <div className="max-w-5xl mx-auto px-4 mt-2 flex justify-between items-center no-pdf">
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
        <div className="max-w-5xl mx-auto text-center my-12 px-4">
          <h1 className="text-3xl md:text-5xl font-light text-[#153D63] mb-6">
            Volatile Organic Compounds (VOCs)
          </h1>
          <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
            Volatile Organic Compounds (VOCs) are a broad group of carbon-based chemicals 
            that easily evaporate at room temperature. VOC analysis helps identify and 
            quantify these compounds in air, water, soil, food, and consumer products to 
            assess contamination levels and potential health risks.
          </p>
        </div>

        {/* Compounds */}
        <div className="mt-10 max-w-4xl mx-auto">
          <h3 className="text-4xl font-thin text-[#153D63] mb-6 text-center">
            Available Compounds
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {compounds.map((compound, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-4 text-center text-gray-800 text-base font-medium shadow-sm hover:shadow-md hover:border-[#FFC000] transition"
              >
                {compound}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 max-w-4xl mx-auto px-4"> <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-6 text-center"> Analytical Overview </h3> 
          <div className="overflow-x-auto shadow-lg rounded-xl"> <table className="w-full border-collapse"> <tbody className="text-gray-700 text-sm md:text-base"> 
            <tr className="bg-gray-50 hover:bg-gray-100"> 
              <td className="p-4 font-semibold border border-gray-300 w-1/3"> Sample Types </td>
               <td className="p-4 border border-gray-300"> Water, Soil & Sediments, Dust, Petroleum Products, Industrial Effluents, Edible Oils, Smoked/Grilled Foods, Cereals & Grains </td>
                </tr> <tr className="hover:bg-gray-50"> <td className="p-4 font-semibold border border-gray-300"> Instrument Used </td>
                 <td className="p-4 border border-gray-300"> Agilent 5977 GC-MSD or Thermo ISQ 7610 </td> </tr> <tr className="bg-gray-50 hover:bg-gray-100"> 
                  <td className="p-4 font-semibold border border-gray-300"> Sampling Information </td> <td className="p-4 border border-gray-300"> Amber glass + Teflon-lined lids prevent contamination and photodegradation. Cooling (4 °C) or freezing extends holding times. Light protection is critical. </td> </tr> </tbody> </table> </div> 
        </div>

        {/* Sampling Details as Cards */}
        <div className="mt-16 max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-thin text-[#153D63] mb-10 text-center">
            Sampling Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplingDetails.map((sample, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
              >
                {sample.icon}
                <h4 className="mt-4 text-xl font-semibold text-[#153D63]">
                  {sample.category}
                </h4>
                <ul className="mt-3 list-disc list-inside text-gray-700 text-sm md:text-base space-y-1 text-left">
                  {sample.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Voc;

