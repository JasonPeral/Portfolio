import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Resume from './components/Resume';  // assuming you have a Resume component
import PortfolioSection from './components/portfolio';
import Project1Detail from './components/ProjectDetail';
import CryptoNewsAppDetail from './components/CryptoNewsAppDetail';
import ReactTaskManagerDetail from './components/ReactTaskManagerDetail';
import ContactInfoPage from './components/ContactInfoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="bg-gray-100 h-screen w-screen p-0 m-0">
      <Router>
        <Navbar />
        <div className="flex justify-center items-center">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<PortfolioSection />} />
            <Route path="/Contact" element={<ContactInfoPage />} />
            <Route path="/project1" element={<Project1Detail />} />
            <Route path="/project2" element={<CryptoNewsAppDetail />} />
            <Route path="/project3" element={<ReactTaskManagerDetail />} />


          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
