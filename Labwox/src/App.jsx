import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/footer';
import Navs from './Component/navs';
import './index.css';
import { useAnalytics } from "./Component/hooks/useAnalytics";


import Labwox from './Component/labwox';
import Training from './Component/traning';
import Consulting from './Component/consulting';
import Son from './Component/son';
import Lasepa from './Component/lasepa';
import Uni from './Component/unilag';
import Chemxpert from './Component/chemxpert';
import Explore from './Component/explore';
import Gallery from './Component/gallery';
import Aim from './Component/aim';
import Chemical from './Component/phytochemical';
import Application from './Component/application';
import Contact from './Component/Contact';
import Faq from './Component/faq';
import Food from './Component/Foodanalysis/foodcomp';
import Waterqua from './Component/Foodanalysis/waterquality';
import Pollutantanaly from './Component/polluanalysis';
import Pesticide from './Component/pest';
import Composition from './Component/composition';
import Metal from './Component/composition/Ore';
import Foodwater from './Component/foodwater';
import Mdv from './Component/mdv';;


import Pthalate from './Component/pollutant/Ester';
import Pah from './Component/pollutant/Mix';
import Mixf from './Component/pollutant/Mixf';
import Tph from './Component/pollutant/tph';
import Mixg from './Component/pollutant/pah and pcb';
import Pcb from './Component/pollutant/pcb';
import Pbde from './Component/pollutant/PBDEs';
import Voc from './Component/pollutant/voc';
import Single from './Component/pesticide/single';
import Multi from './Component/pesticide/multi';
import Mixa from './Component/pesticide/mixa';
import Mixb from './Component/pesticide/mixb';
import Mixc from './Component/pesticide/mixc';
import Mixd from './Component/pesticide/mixd';
import Chlorine from './Component/pesticide/chlorine';
import Other from './Component/pesticide/others';
import Pyrethroids from './Component/pesticide/Pyrethroids';
import Phosphate from './Component/pesticide/phosphate';
import Phytochemical from './Component/composition/Phytochem';
import Fames from './Component/Foodanalysis/fames';
import Mineral from './Component/Foodanalysis/minerals';
import Oil from './Component/Foodanalysis/oil';
import Proximate from './Component/Foodanalysis/proximate';
import Heavymetals from './Component/pollutant/HeavyMetals';

function App() {
  useAnalytics()
  return (
      <div className="relative bg-[#efebe7] min-h-screen">
        {/* Sticky Navigation */}
        <Navs />
        <Navbar />

        {/* Main Page Content */}
        <div className="">
          <Routes>
            <Route path="/" element={<Labwox />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/son" element={<Son />} />
            <Route path="/lasepa" element={<Lasepa />} />
            <Route path="/unilag" element={<Uni />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/mdv" element={<Mdv />} />
            <Route path="/application" element={<Application />} />
            <Route path="/aim" element={<Aim />} />
            <Route path="/chemxpert" element={<Chemxpert />} />
            <Route path="/training" element={<Training />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/food/waterqua" element={<Waterqua />} />
            <Route path="/foodwater" element={<Foodwater />} />
            <Route path="/pollutantanaly" element={<Pollutantanaly />} />
            <Route path="/pesticide" element={<Pesticide />} />
            <Route path="/phytochemical" element={<Chemical />} />
            <Route path="/composition" element={<Composition />} />

            {/* Pollutant Pages */}
            <Route path="/pollutant/phthalate" element={<Pthalate />} />
            <Route path="/pollutant/pah" element={<Pah />} />
            <Route path="/pollutant/pahmixf" element={<Mixf />} />
            <Route path="/pollutant/tph" element={<Tph />} />
            <Route path="/pollutant/pahmix" element={<Mixg />} />
            <Route path="/pollutant/pcb" element={<Pcb />} />
            <Route path="/pollutant/voc" element={<Voc />} />
            <Route path="/pollutant/pbde" element={<Pbde />} />
            <Route path="/pollutant/Heavymetals" element={<Heavymetals />} />

            {/* Pesticide Pages */}
            <Route path="/pesticide/single" element={<Single />} />
            <Route path="/pesticide/multi" element={<Multi />} />
            <Route path="/pesticide/mixa" element={<Mixa />} />
            <Route path="/pesticide/mixb" element={<Mixb />} />
            <Route path="/pesticide/mixc" element={<Mixc />} />
            <Route path="/pesticide/mixd" element={<Mixd />} />
            <Route path="/pesticide/others" element={<Other />} />
            <Route path="/pesticide/phosphate" element={<Phosphate />} />
            <Route path="/pesticide/pyrethroids" element={<Pyrethroids />} />
            <Route path="/pesticide/chlorine" element={<Chlorine />} />

            {/* Food Analysis Pages */}
            <Route path="/food/foodananlysis" element={<Food />} />
            <Route path="/food/foodananlysis/fame" element={<Fames />} />
            <Route path="/food/foodananlysis/mineral" element={<Mineral />} />
            <Route path="/food/foodananlysis/oil" element={<Oil />} />
            <Route path="/food/foodananlysis/proximate" element={<Proximate />} />

            {/* Composition Pages */}
            <Route path="/composition/metal" element={<Metal />} />
            <Route path="/composition/Phytochemical" element={<Phytochemical />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
  );
}

export default App;