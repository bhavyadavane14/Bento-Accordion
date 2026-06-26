import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import SolutionsPage from './pages/SolutionsPage';
import PricingPage from './pages/PricingPage';
import TestimonialsPage from './pages/TestimonialsPage';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    <Router>
      <div className="bg-[#050816] text-white min-h-screen flex flex-col font-inter selection:bg-[#7B61FF]/30 selection:text-white">
        {/* Sticky Glassmorphic Navbar */}
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/demo" element={<DemoPage />} />
          </Routes>
        </main>

        {/* Spacious Footer & Newsletter */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
