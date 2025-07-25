import React from "react";
import { Link } from "react-router-dom";
import {
  FlaskRound,
  MapPin,
  Microscope,
  ShieldCheck,
  AlertTriangle,
  FileText,
} from "lucide-react";

const SoilSediment = () => {
  return (
      <div className="py-12 px-4 my-10">
        {/* Back link */}
        <Link
          to="/metal"
          className="text-orange-600 hover:underline text-lg font-medium flex items-center gap-1 mb-6"
        >
          ← Back to Dioxin Samples
        </Link>

        {/* Main Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          {/* Header */}
          <h1 className="text-4xl font-bold text-[#153D63] mb-4">
            Soil & Sediment Dioxin Analysis
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Comprehensive testing of soil and sediment to detect and quantify
            dioxins for environmental safety and compliance.
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {/* About the Sample */}
            <div>
              <h2 className="text-2xl font-semibold text-[#153D63] flex items-center gap-2">
                <FlaskRound className="text-orange-500" /> About the Sample
              </h2>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Soil and sediment samples can accumulate dioxins through
                industrial emissions, waste incineration, pesticide usage, and
                accidental chemical releases. Analyzing these materials is
                critical for assessing contamination levels, tracking pollution
                sources, and ensuring environmental safety.
              </p>
            </div>

            {/* Where to Collect Samples */}
            <div>
              <h2 className="text-2xl font-semibold text-[#153D63] flex items-center gap-2">
                <MapPin className="text-orange-500" /> Where to Collect Samples
              </h2>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Near industrial zones or chemical plants</li>
                <li>Downstream of waste discharge points</li>
                <li>Floodplains near urban or agricultural areas</li>
                <li>Areas with suspected contamination from past activities</li>
              </ul>
            </div>

            {/* Health & Environmental Impact */}
            <div>
              <h2 className="text-2xl font-semibold text-[#153D63] flex items-center gap-2">
                <AlertTriangle className="text-orange-500" /> Health & Environmental Impact
              </h2>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Dioxin-contaminated soils can harm ecosystems, bioaccumulate in
                the food chain, and cause long-term environmental degradation.
                Exposure to contaminated dust or water runoff can lead to
                reproductive, immune, and hormonal health issues in both humans
                and wildlife.
              </p>
            </div>

            {/* How We Analyze */}
            <div>
              <h2 className="text-2xl font-semibold text-[#153D63] flex items-center gap-2">
                <Microscope className="text-orange-500" /> How We Analyze
              </h2>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Sample drying, sieving, and homogenization</li>
                <li>Soxhlet extraction or pressurized liquid extraction</li>
                <li>Cleanup using silica gel, alumina, and activated carbon columns</li>
                <li>Detection & quantification via High-Resolution GC/HRMS</li>
              </ul>
            </div>

            {/* Regulatory Standards */}
            <div>
              <h2 className="text-2xl font-semibold text-[#153D63] flex items-center gap-2">
                <ShieldCheck className="text-orange-500" /> Regulatory Standards
              </h2>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Testing is conducted according to WHO, US EPA, and EU soil
                quality guidelines to ensure compliance with global safety
                limits.
              </p>
            </div>

            {/* Digestion Process */}
            <div>
              <h2 className="text-2xl font-semibold text-[#153D63] flex items-center gap-2">
                <FlaskRound className="text-orange-500" /> Sample Digestion Process
              </h2>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Digestion involves breaking down the soil or sediment matrix to
                release dioxins for extraction. A mixture of organic solvents
                (such as toluene) is used, followed by concentration and
                purification before instrumental analysis. This ensures high
                recovery and precise measurement.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center bg-[#153D63] p-6 rounded-xl shadow-lg">
            <h3 className="text-white text-2xl font-semibold mb-3">
              Ready to Test Your Soil or Sediment Samples?
            </h3>
            <p className="text-gray-200 mb-6">
              Submit your samples today and receive a detailed report with
              regulatory compliance comparison.
            </p>
            <Link
              to="/sample-submission-form"
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <FileText size={18} /> Submit a Sample for Analysis
            </Link>
          </div>
        </div>
      </div>
  );
};

export default SoilSediment;
