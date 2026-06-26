import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import SolutionsPage from './pages/SolutionsPage';
import PricingPage from './pages/PricingPage';
import TestimonialsPage from './pages/TestimonialsPage';
import DemoPage from './pages/DemoPage';

// Per-route SEO: update document title + meta description dynamically
const PAGE_META = {
  '/':             { title: 'Aether AI | Automate Work. Scale Beyond Limits.',       desc: 'Enterprise-grade AI Automation Platform. Automate workflows, connect agents, and scale intelligently.' },
  '/features':     { title: 'Features | Aether AI',                                  desc: 'Explore AI Agents, Workflow Builder, Smart Analytics, Voice Commands and more in Aether AI.' },
  '/solutions':    { title: 'Solutions | Aether AI',                                 desc: 'See how Aether AI automates your full business pipeline — from connection to delivery.' },
  '/pricing':      { title: 'Pricing | Aether AI',                                   desc: 'Flexible Starter, Pro and Enterprise plans with monthly or annual billing. Start free today.' },
  '/testimonials': { title: 'Testimonials | Aether AI',                              desc: 'Hear from operations directors and architects who rely on Aether AI every day.' },
  '/demo':         { title: 'Watch Demo | Aether AI',                                desc: 'See a live cinematic walkthrough of the full Aether AI pipeline from ingestion to completion.' },
};

function PageMetaUpdater() {
  const location = useLocation();
  useEffect(() => {
    const meta = PAGE_META[location.pathname] || PAGE_META['/'];
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.desc);
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);
  return null;
}

// Loading fallback for Suspense
function PageLoader() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-primary-bg"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center animate-pulse">
          <span className="font-space-grotesk font-bold text-lg text-white">Æ</span>
        </div>
        <div className="flex space-x-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#7B61FF] animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 404 page
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-bg text-center px-6">
      <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-gradient-primary opacity-10 blur-[120px] pointer-events-none" aria-hidden="true" />
      <h1 className="font-space-grotesk font-bold text-6xl text-white mb-4">404</h1>
      <p className="font-space-grotesk text-xl text-gradient-primary font-bold mb-2">Page Not Found</p>
      <p className="font-inter text-secondary-text text-sm mb-8 max-w-md">
        This route doesn't exist in the Aether AI orchestration graph. Navigate back to continue.
      </p>
      <a
        href="/"
        className="px-8 py-4 rounded-2xl bg-gradient-primary text-white font-inter font-bold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-hover"
      >
        Back to Home
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <PageMetaUpdater />
      <div className="bg-[#050816] text-white min-h-screen flex flex-col font-inter selection:bg-[#7B61FF]/30 selection:text-white">
        {/* Sticky Glassmorphic Navbar */}
        <Navbar />

        {/* role="main" + id="main-content" for skip-nav accessibility */}
        <main id="main-content" role="main" className="flex-grow" tabIndex="-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"             element={<HomePage />} />
              <Route path="/features"     element={<FeaturesPage />} />
              <Route path="/solutions"    element={<SolutionsPage />} />
              <Route path="/pricing"      element={<PricingPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/demo"         element={<DemoPage />} />
              <Route path="*"             element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
