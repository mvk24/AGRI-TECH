import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CropRecommend from './CropRecommend';
import Fertilizer from './Fertilizer';
import Contact from './Contact';
import '../styles/index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crop-recommend" element={<CropRecommend />} />
          <Route path="/fertilizer" element={<Fertilizer />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
