import React from "react";
import Wrapper from "./wrapper";

const Labwox = () => {
  return (
    <Wrapper>
      <section className="relative w-full bg-white py-6">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Fade-in animation wrapper */}
          <div className="max-w-2xl mx-auto text-start animate-fadeIn opacity-0">
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-neutral-900">
              We are a science consulting company dedicated to improving research
              productivity, training, and laboratory excellence across Nigeria and
              beyond. We connect institutions and researchers with the resources,
              expertise, and infrastructure needed to conduct high-quality,
              publishable research.
            </p>
          </div>

        </div>
      </section>

      {/* Smooth fade-in utility */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.9s ease-out forwards;
        }
      `}</style>
    </Wrapper>
  );
};

export default Labwox;
