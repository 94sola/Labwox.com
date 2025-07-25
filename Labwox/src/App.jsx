import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/footer';
import Navs from './Component/navs';
import './index.css';

// Pages
import Labsoft from './Component/labsoft';
import Labwox from './Component/labwox';
import Xpert from './Component/chemxpert';
import Training from './Component/traning';
import Consulting from './Component/consulting';
import Research from './Component/research';
import Universities from './Component/Universities';
import Laboratory from './Component/labora';
import Explore from './Component/explore';
import About from './Component/about';
import Gallery from './Component/gallery';
import Aim from './Component/aim';
import Chemical from './Component/phytochemical';
import Application from './Component/application';
import Faq from './Component/faq';
import Foodcompo from './Component/foodcomp';
import Waterqua from './Component/waterquality';
import Pollutantanaly from './Component/polluanalysis';
import Pesticide from './Component/pest';
import Composition from './Component/composition';
import Metal from './Component/heavymetal';

// ✅ Fixed casing here
import SoilSediment from './Component/composition/Foodanalysis/SoilSediment';
import WaterSamples from './Component/composition/Foodanalysis/WaterSamples';
import FoodProducts from './Component/composition/Foodanalysis/FoodProducts';
import IndustrialWaste from './Component/composition/Foodanalysis/IndustrialWaste';
import Pthalate from './Component/pollutant/Ester';
import Pah from './Component/pollutant/pah';
import Mixf from './Component/pollutant/pahmixf';
import Tph from './Component/pollutant/tph';
import Mixg from './Component/pollutant/mixg';
import Pcb from './Component/pollutant/pcb';
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

function App() {
  return (
    <Router>
      <div className="relative bg-[#efebe7] min-h-screen">
        {/* Sticky or Fixed Navigation */}
        <Navs />
        <Navbar />

        {/* Main Content Area */}
        <div className="pt-[5rem]"> {/* Pushes page content below sticky nav */}
          <Routes>
            <Route path="/" element={<Labwox />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/application" element={<Application />} />
            <Route path="/aim" element={<Aim />} />
            <Route path="/metal" element={<Metal />} />
            <Route path="/labsoft" element={<Labsoft />} />
            <Route path="/chemxpert" element={<Xpert />} />
            <Route path="/research" element={<Research />} />
            <Route path="/training" element={<Training />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/foodcompo" element={<Foodcompo />} />
            <Route path="/waterqua" element={<Waterqua />} />
            <Route path="/pollutantanaly" element={<Pollutantanaly />} />
            <Route path="/pesticide" element={<Pesticide />} />
            <Route path="/phytochemical" element={<Chemical />} />
            <Route path="/composition" element={<Composition />} />
            
            {/* Food Sample Pages */}
            <Route path="/food/soil-sediment" element={<SoilSediment />} />
            <Route path="/food/water-samples" element={<WaterSamples />} />
            <Route path="/food/food-products" element={<FoodProducts />} />
            <Route path="/food/industrial-waste" element={<IndustrialWaste />} />
            <Route path="/pollutant/phthalate" element={<Pthalate />} />
            <Route path="/pollutant/pah" element={<Pah />} />
            <Route path="/pollutant/pahmix" element={<Mixf />} />
            <Route path="/pollutant/tph" element={<Tph />} />
            <Route path="/pollutant/pahmixg" element={<Mixg />} />
            <Route path="/pollutant/pcb" element={<Pcb />} />
            <Route path="/pollutant/voc" element={<Voc />} />
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
          </Routes>
        </div>

        {/* Footer stays at the botto3 */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
