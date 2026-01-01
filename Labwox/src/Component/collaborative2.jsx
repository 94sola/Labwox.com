import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Wrapper from "./wrapper";

const Chemxpert = () => {
  return (
    <Wrapper>
        <section className="relative isolate font-manrope overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F7F7B] via-[#2A736F] to-[#2F7F7B]" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
                Take the First Step Toward
                <span className="mt-2 block font-medium text-yellow-200">
                Impact‑Driven Scientific Excellence
                </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-neutral-50/90 sm:text-lg">
                ChemXpert isn’t just free testing. It’s a strategic entry point into
                collaborative research. We align institutional capacity with
                Labwox’s scientific network to deliver research that is credible,
                publishable, and globally competitive.
            </p>

            <div className="mt-10 flex items-center justify-center">
                <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-yellow-500 px-8 py-3 text-sm font-semibold text-black shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-600 hover:shadow-2xl sm:text-base"
                >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
            </div>
        </div>
        </section>
    </Wrapper>
  );
};

export default Chemxpert;
