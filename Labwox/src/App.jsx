import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/footer';
import Navs from './Component/navs';
import './index.css';

// Pages
import Labsoft from './Component/labsoft';
import Labwox from './Component/labwox';
import Xpert from './Component/chemx';
import Training from './Component/traning';
import Consulting  from './Component/consulting';
import Research from './Component/research';
import Universities  from './Component/Universities';
import Laboratory from './Component/labora';

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
            <Route path="/labsoft" element={<Labsoft />} />
            <Route path="/xpert" element={<Xpert />} />
            <Route path="/research" element={<Research />} />
            <Route path="/training" element={<Training />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/laboratory" element={<Laboratory />} />

          </Routes>
        </div>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
