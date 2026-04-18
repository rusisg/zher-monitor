import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Map from './components/Map';
import Report from './components/Report';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="h-screen w-full flex flex-col font-sans overflow-hidden bg-white">
        <Navbar />
        
        <main className="flex-1 flex flex-col relative overflow-hidden">
          <Routes>
            <Route path="/" element={<About />} />
            
            {/* Define the iframe directly here */}
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;