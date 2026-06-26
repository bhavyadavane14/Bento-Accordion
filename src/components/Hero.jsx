import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [pulseCount, setPulseCount] = useState(0);
  const [activeNode, setActiveNode] = useState(null);

  // Periodic triggers for visual interest on nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 'agent', label: 'AI Agent Coordinator', x: 200, y: 180, type: 'core', desc: 'Central orchestrator' },
    { id: 'db', label: 'PostgreSQL DB', x: 80, y: 70, type: 'connector', desc: 'Real-time sync' },
    { id: 'nlp', label: 'Llama 3 NLP Engine', x: 320, y: 70, type: 'nlp', desc: 'Intelligent intent detection' },
    { id: 'slack', label: 'Slack & API integrations', x: 70, y: 280, type: 'action', desc: 'Automated messaging' },
    { id: 'report', label: 'Dynamic Reports PDF', x: 330, y: 280, type: 'analytics', desc: 'Automatic summarization' },
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-primary-bg"
    >
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-primary opacity-15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-accent opacity-10 blur-[150px] pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-30">
        <div className="absolute w-2 h-2 rounded-full bg-[#00D4FF] left-[15%] top-[25%] animate-pulse-slow" />
        <div className="absolute w-3 h-3 rounded-full bg-[#6D5EF9] right-[25%] top-[15%] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#5EEAD4] left-[35%] bottom-[20%] animate-pulse-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute w-2 h-2 rounded-full bg-[#7B61FF] right-[10%] bottom-[35%] animate-pulse-slow" style={{ animationDelay: '0.7s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">

          {/* Heading */}
          <h1 className="font-space-grotesk font-bold tracking-tight text-white mb-6 leading-[1.08] select-none text-[36px] sm:text-[48px] lg:text-[72px]">
            Automate Work. <br />
            <span className="text-gradient-primary">Think Bigger.</span> <br />
            <span className="text-gradient-accent">Grow Faster.</span>
          </h1>

          {/* Description */}
          <p className="text-secondary-text font-inter text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            Create AI-powered workflows that automate repetitive work, manage teams, connect data, and help your business scale intelligently.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-primary text-white font-inter font-bold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-hover"
            >
              Start Free
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-border-card bg-surface-card hover:bg-white/10 hover:border-white/20 text-white font-inter font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-hover"
            >
              <svg className="w-5 h-5 mr-2 text-[#00D4FF]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </Link>
          </div>

          {/* Fast features badge */}
          <div className="mt-8 flex flex-wrap gap-y-2 gap-x-6 text-[#7B859E] font-inter text-sm border-t border-border-card/30 pt-6 w-full">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              No credit card
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              Self-service setup
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              SOC2 Certified
            </span>
          </div>
        </div>

        {/* Right Side Futuristic Dashboard */}
        <div className="lg:col-span-6 flex justify-center items-center relative select-none">
          {/* Card outer glow wrapper */}
          <div className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-[4/3] rounded-[24px] overflow-hidden glass-panel shadow-2xl animate-float-slow">
            {/* Ambient background blur inside card */}
            <div className="absolute top-[-20%] right-[-20%] w-[70%] h-[70%] bg-gradient-primary opacity-30 blur-[60px] pointer-events-none" />
            <div className="absolute bottom-[-15%] left-[-15%] w-[60%] h-[60%] bg-gradient-accent opacity-20 blur-[50px] pointer-events-none" />

            {/* Dashboard Header Bar */}
            <div className="h-12 border-b border-border-card bg-white/5 flex items-center justify-between px-6 z-10 relative">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-error opacity-60" />
                <div className="w-3 h-3 rounded-full bg-warning opacity-60" />
                <div className="w-3 h-3 rounded-full bg-success opacity-60" />
              </div>
              <div className="text-[11px] font-space-grotesk tracking-widest text-[#7B859E]">
                AETHER // ORCHESTRATION_CORE
              </div>
              <div className="w-3 h-3 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-ping" />
              </div>
            </div>

            {/* Content: Interactive Node Graph */}
            <div className="relative w-full h-[calc(100%-48px)] p-6 flex flex-col justify-between">
              {/* SVG connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines from main agent node */}
                <path d="M 200,180 L 80,70" stroke="rgba(123, 97, 255, 0.2)" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 200,180 L 320,70" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 200,180 L 70,280" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 200,180 L 330,280" stroke="rgba(123, 97, 255, 0.2)" strokeWidth="2" strokeDasharray="5,5" />

                {/* Animated trace signals */}
                <circle r="4" fill="#00D4FF">
                  <animateMotion
                    path="M 200,180 L 80,70"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="4" fill="#6D5EF9">
                  <animateMotion
                    path="M 200,180 L 320,70"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="4" fill="#6D5EF9">
                  <animateMotion
                    path="M 200,180 L 70,280"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="4" fill="#00D4FF">
                  <animateMotion
                    path="M 200,180 L 330,280"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>

              {/* Rendering Floating Node Components */}
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                const isCore = node.type === 'core';
                return (
                  <div
                    key={node.id}
                    className="absolute cursor-pointer group z-10 transition-transform duration-hover hover:scale-105"
                    style={{ left: `${node.x}px`, top: `${node.y}px`, transform: 'translate(-50%, -50%)' }}
                    onClick={() => setActiveNode(isActive ? null : node.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveNode(isActive ? null : node.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Inspect ${node.label}`}
                  >
                    {/* Node Visual Orb */}
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all duration-hover ${
                        isCore
                          ? 'w-16 h-16 bg-gradient-primary shadow-[0_0_20px_rgba(109,94,249,0.4)]'
                          : 'w-10 h-10 border border-border-card bg-[#0D1224]/80'
                      } ${isActive ? 'ring-2 ring-[#00D4FF] border-transparent' : ''}`}
                    >
                      {/* Internal Icons/Initials */}
                      <span className={`font-space-grotesk font-bold ${isCore ? 'text-lg text-white' : 'text-xs text-secondary-text group-hover:text-white'}`}>
                        {isCore ? 'AI' : node.label.substring(0, 2)}
                      </span>

                      {/* Small ambient glow behind node */}
                      <div className={`absolute -inset-1 rounded-full opacity-30 group-hover:opacity-75 transition-opacity duration-hover blur-[4px] pointer-events-none ${
                        isCore ? 'bg-gradient-primary' : 'bg-gradient-accent'
                      }`} />
                    </div>

                    {/* Popover Card */}
                    <div
                      className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 w-48 p-3 rounded-xl border border-border-card bg-[#0D1224]/95 backdrop-blur-md shadow-2xl transition-all duration-300 pointer-events-none ${
                        isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
                      }`}
                    >
                      <h4 className="font-space-grotesk font-semibold text-xs text-white">
                        {node.label}
                      </h4>
                      <p className="font-inter text-[10px] text-[#A8B2D1] mt-1">
                        {node.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Side Floating Metric Card (Smart Analytics Overlay) */}
              <div className="absolute right-4 top-4 w-36 p-3 rounded-2xl border border-border-card bg-[#050816]/75 backdrop-blur-md shadow-lg pointer-events-none">
                <div className="flex justify-between items-center text-[9px] text-[#7B859E] font-space-grotesk">
                  <span>THROUGHPUT</span>
                  <span className="text-success">ACTIVE</span>
                </div>
                <div className="text-lg font-space-grotesk font-bold text-white mt-1">
                  1,482<span className="text-xs text-secondary-text font-normal">/s</span>
                </div>
                <div className="w-full bg-[#0D1224] h-1.5 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-gradient-accent transition-all duration-1000"
                    style={{ width: `${(pulseCount % 5) * 15 + 40}%` }}
                  />
                </div>
              </div>

              {/* Live Status Chart (Bottom Left Overlay) */}
              <div className="absolute left-4 bottom-4 w-44 p-3 rounded-2xl border border-border-card bg-[#050816]/75 backdrop-blur-md shadow-lg pointer-events-none">
                <div className="flex justify-between items-center text-[9px] text-[#7B859E] font-space-grotesk mb-1.5">
                  <span>REAL-TIME COGNITION</span>
                  <span className="text-[#00D4FF]">99.8%</span>
                </div>
                {/* SVG Mini Area Chart */}
                <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`M 0,25 Q 15,${20 - (pulseCount % 3) * 3} 30,${15 + (pulseCount % 2) * 5} T 60,${10 + (pulseCount % 4) * 2} T 80,${18 - (pulseCount % 2) * 4} T 100,5 L 100,30 L 0,30 Z`}
                    fill="url(#chartGlow)"
                    className="transition-all duration-1000"
                  />
                  <path
                    d={`M 0,25 Q 15,${20 - (pulseCount % 3) * 3} 30,${15 + (pulseCount % 2) * 5} T 60,${10 + (pulseCount % 4) * 2} T 80,${18 - (pulseCount % 2) * 4} T 100,5`}
                    fill="none"
                    stroke="#00D4FF"
                    strokeWidth="1.5"
                    className="transition-all duration-1000"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Underlay glow behind dashboard card */}
          <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-[40px] pointer-events-none rounded-[28px]" />
        </div>
      </div>
    </section>
  );
}
