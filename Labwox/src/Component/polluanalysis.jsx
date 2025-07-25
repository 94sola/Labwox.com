import React, { useState } from "react";
import Wrapper from "./wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const applications = [
  {
    name: "Phthalate Esters",
    link: "/esters",
    compounds: [
      "Dimethyl phthalate",
      "Diethyl phthalate",
      "Diiosobutyl phthalate",
      "Dibutyl phthalate",
      "Bis(2-methoxyethyl) phthalate",
      "bis(4-Methyl-2-pentyl)phthalate",
      "bis(2-Ethoxyethyl)phthalate",
      "Dipentyl phthalate",
      "Dihexyl phthalate",
      "Benzyl butyl phthalate",
      "Bis(2-butoxyethyl) phthalate",
      "Dicyclohexyl phthalate",
      "Bis(2-ethylhexyl) phthalate",
      "Di-n-octyl phthalate",
      "Dinonyl phthalate",
    ],
  },
  {
    name: "PAHs Mix E",
    link: "/pah",
    compounds: [
      "Naphthalene",
      "Acenaphthylene",
      "Acenaphthene",
      "Fluorene",
      "Phenanthrene",
      "Anthracene",
      "Fluoranthene",
      "Pyrene",
      "Benzo[c]phenanthrene",
      "Benzo[a]anthracene",
      "Chrysene",
      "Benzo[b]fluoranthene",
      "Benzo[j]fluoranthene",
      "Benzo[k]fluoranthene",
      "Benzo[a]pyrene",
      "Dibenz[a,h]anthracene",
      "3-Methylcholanthrene",
      "Indeno[1,2,3-cd]pyrene",
      "Benzo[g,h,i]perylene",
      "Dibenz(a,l)pyrene",
      "Dibenz(a,h)pyrene",
    ],
  },
  {
    name: "PAHs Mix F",
    link: "/mixf",
    compounds: [
      "Naphthalene",
      "Acenaphthylene",
      "Acenaphthene",
      "Fluorene",
      "Phenanthrene",
      "Anthracene",
      "Fluoranthene",
      "Pyrene",
      "Benz(a)anthracene",
      "Chrysene",
      "Benzo(j)fluoranthene",
      "Benzo(k)fluoranthene",
      "Benz(a)pyrene",
      "Indeno(1,2,3-cd)pyrene",
      "Dibenz(a,h)anthracene",
      "Benzo(g,h,i)perylene",
    ],
  },
  {
    name: "PAH and PCB Mix G",
    link: "/mixg",
    compounds: [
      "Isophorone",
      "Acenaphthylene",
      "Fluorene",
      "Hexachlorobenzene",
      "Phenanthrene",
      "Anthracene",
      "Benz[a]anthracene",
      "Chrysene",
      "Benzo[b]fluoranthene",
      "Benzo[k]fluoranthene",
      "Benzo[a]pyrene",
      "Indeno(1,2,3-cd)pyrene",
      "Dibenz[a,h]anthracene",
      "Benzo[ghi]perylene",
      "PCB 1",
      "PCB 3",
      "PCB 28",
      "PCB-52",
      "PCB 44",
      "PCB-70",
      "PCB 110",
      "PCB 143",
      "PCB 153",
      "PCB 204",
      "PCB 180",
    ],
  },
  { name: "TPH", link: "/tph", compounds: ["n-alkanes[C10-C40]"] },
  {
    name: "PCBs",
    link: "/pcb",
    compounds: [
      "PCB1",
      "PCB5",
      "PCB18",
      "PCB29",
      "PCB44",
      "PCB52",
      "PCB66",
      "PCB87",
      "PCB101",
      "PCB110",
      "PCB138",
      "PCB141",
      "PCB151",
      "PCB153",
      "PCB170",
      "PCB180",
      "PCB183",
      "PCB187",
      "PCB188",
    ],
  },
  {
    name: "VOCs",
    link: "/voc",
    compounds: [
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
      "Bromochloromethane",
      "Ethylbenzene",
      "Chlorobenzene",
      "m-Xylene+p-Xylene",
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
      "p-isopropyltoluene",
      "1,2-Dichlorobenzene",
      "Butylbenzene",
      "1,2-Dibromo-3-chloropropane",
      "1,2,4-Trichlorobenzene",
      "Hexachlorobutadiene",
      "Naphthalene",
      "1,2,3-Trichlorobenzene",
      "1,2,3-Trichloropropane",
    ],
  },
];

const Pollutant = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Wrapper>
      <section className="relative w-full py-16 my-10 lg:py-24 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
        {/* Navigation */}
        <div className="relative flex items-center justify-start mb-10 max-w-7xl mx-auto px-4">
          <Link
            to="/application"
            className="flex items-center gap-2 hover:text-white text-[#FFC000] transition"
          >
            <ArrowLeft size={20} /> Back to Application
          </Link>
        </div>

        {/* Header */}
        <div className="relative text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white">
            Explore <span className="text-[#FFC000]">Pollutant</span> Analysis Applications
          </h1>
          <p className="mt-4 text-lg text-gray-50 max-w-2xl mx-auto">
            Pollutant analysis focuses on detecting, identifying, and quantifying harmful
            chemical compounds in environmental and industrial samples.
          </p>
        </div>

        {/* Application List */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -6,
                boxShadow: "0px 8px 20px rgba(255, 192, 0, 0.25)",
              }}
              className="border border-gray-300 hover:border-[#FFC000] rounded-lg overflow-hidden cursor-pointer bg-neutral-900 transition-all duration-300"
            >
              {/* Title Row */}
              <div
                className="flex items-center justify-between px-4 py-4 bg-neutral-900 hover:bg-neutral-800 transition-colors"
                onClick={() => toggleDropdown(index)}
              >
                <span className="text-xl font-medium text-white">{app.name}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 rounded-full hover:bg-neutral-800 transition flex items-center justify-center"
                >
                  {openIndex === index ? (
                    <Minus size={20} className="text-[#FFC000]" />
                  ) : (
                    <Plus size={20} className="text-[#FFC000]" />
                  )}
                </motion.div>
              </div>

              {/* Dropdown List */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-3 bg-neutral-800 text-gray-300 list-disc list-inside space-y-1 text-lg"
                  >
                    {app.compounds.map((compound, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="last:border-0 pb-1"
                      >
                        {compound}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Pollutant;
