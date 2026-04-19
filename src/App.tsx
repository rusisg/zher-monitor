import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Report from './components/Report';
import About from './components/About';
import MakatSoilProfile from './components/MakatSoilProfile';

function App() {
  return (
    <Router>
      <div className="h-screen w-full flex flex-col font-sans overflow-hidden bg-white">
        <Navbar />
        
        <main className="flex-1 flex flex-col relative overflow-hidden">
          <Routes>
            <Route path="/" element={<About />} />
            
            <Route 
              path="/map" 
              element={
                <iframe 
                  src="https://isatai-atyrau.projects.earthengine.app/view/geomakat" 
                  className="w-full h-full border-none"
                  title="Earth Engine"
                />
              } 
            />

            <Route path="/report" element={<Report />} />
            
            <Route path="/soil" element={<MakatSoilProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;