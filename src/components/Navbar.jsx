import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 border-b ${
        isScrolled
          ? 'bg-[#050816]/80 backdrop-blur-md border-border-card py-4 shadow-lg'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Link */}
        <Link
          to="/"
          className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-primary-text/20 rounded-lg p-1"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0.5 bg-[#050816] rounded-md flex items-center justify-center">
              <span className="font-space-grotesk font-bold text-sm text-gradient-accent">Æ</span>
            </div>
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-hover pointer-events-none" />
          </div>
          <span className="font-space-grotesk font-bold text-xl tracking-tight text-white group-hover:text-gradient-accent transition-colors duration-hover">
            Aether AI
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`font-inter font-medium text-sm transition-colors duration-hover focus:outline-none focus:ring-1 focus:ring-white/20 rounded-md px-2 py-1 ${
                  isActive
                    ? 'text-white font-semibold relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-[#00D4FF]'
                    : 'text-secondary-text hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/demo"
            className="text-xs font-semibold font-inter text-[#00D4FF] hover:text-white border border-[#00D4FF]/30 hover:border-[#00D4FF]/80 rounded-xl px-4 py-2 transition-all duration-hover focus:outline-none"
          >
            Watch Demo
          </Link>
          <Link
            to="/pricing"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-xl group bg-gradient-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-800 transition-all duration-hover focus:outline-none"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-primary-bg rounded-[10px] group-hover:bg-opacity-0">
              Start Free
            </span>
          </Link>
        </div>

        {/* Hamburger Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="lg:hidden p-2 rounded-lg text-secondary-text hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-primary-bg/95 backdrop-blur-xl border-t border-border-card transition-all duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6 overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-space-grotesk font-semibold text-secondary-text hover:text-white transition-colors duration-hover border-b border-border-card/50 pb-2"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 pb-12 flex flex-col space-y-4">
            <Link
              to="/demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3.5 rounded-2xl border border-[#00D4FF]/30 text-[#00D4FF] font-inter font-bold hover:bg-[#00D4FF]/5 transition-all duration-hover"
            >
              Watch Demo
            </Link>
            <Link
              to="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-4 rounded-2xl bg-gradient-primary text-white font-inter font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-hover"
            >
              Start Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
