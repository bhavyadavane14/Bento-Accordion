import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Official SVG icon paths from provided assets
const IconCog = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
    <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
  </svg>
);

const IconArrowTrending = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

const IconLink = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);

const IconCube = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
  </svg>
);

export default function Hero() {
  const [pulseCount, setPulseCount] = useState(0);
  const [activeNode, setActiveNode] = useState(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const p = setInterval(() => setPulseCount((c) => c + 1), 4000);
    const t = setInterval(() => setTick((c) => c + 1), 1200);
    return () => { clearInterval(p); clearInterval(t); };
  }, []);

  const throughput = 1400 + ((tick * 37) % 200);

  const nodes = [
    { id: 'agent', label: 'AI Orchestration Core', x: 200, y: 175, type: 'core', desc: 'Central AI coordinator' },
    { id: 'db', label: 'Vector DB', x: 75, y: 65, type: 'connector', desc: 'Real-time embedding sync', Icon: IconCube, color: '#5EEAD4' },
    { id: 'nlp', label: 'LLM Reasoning', x: 325, y: 65, type: 'nlp', desc: 'Intelligent intent parsing', Icon: IconCog, color: '#7B61FF' },
    { id: 'slack', label: 'API Gateway', x: 65, y: 275, type: 'action', desc: 'Automated dispatch', Icon: IconLink, color: '#FFC801' },
    { id: 'report', label: 'Analytics Engine', x: 335, y: 275, type: 'analytics', desc: 'Predictive reporting', Icon: IconArrowTrending, color: '#FF9932' },
  ];

  const connections = [
    { x1: 200, y1: 175, x2: 75, y2: 65, color: 'rgba(94, 234, 212, 0.25)', dot: '#5EEAD4', dur: '3s' },
    { x1: 200, y1: 175, x2: 325, y2: 65, color: 'rgba(123, 97, 255, 0.25)', dot: '#7B61FF', dur: '2.4s' },
    { x1: 200, y1: 175, x2: 65, y2: 275, color: 'rgba(255, 200, 1, 0.25)', dot: '#FFC801', dur: '3.6s' },
    { x1: 200, y1: 175, x2: 335, y2: 275, color: 'rgba(255, 153, 50, 0.25)', dot: '#FF9932', dur: '4.2s' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-primary-bg">
      {/* Background gradient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-primary opacity-15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-accent opacity-10 blur-[150px] pointer-events-none" />
      {/* Saffron ambient glow - new palette accent */}
      <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full opacity-5 blur-[100px] pointer-events-none" style={{ background: '#FFC801' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-30">
        <div className="absolute w-2 h-2 rounded-full bg-[#00D4FF] left-[15%] top-[25%] animate-pulse-slow" />
        <div className="absolute w-3 h-3 rounded-full bg-[#6D5EF9] right-[25%] top-[15%] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#5EEAD4] left-[35%] bottom-[20%] animate-pulse-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute w-2 h-2 rounded-full bg-[#FFC801] right-[10%] bottom-[35%] animate-pulse-slow" style={{ animationDelay: '0.7s' }} />
        <div className="absolute w-1 h-1 rounded-full bg-[#FF9932] left-[60%] top-[45%] animate-pulse-slow" style={{ animationDelay: '2.1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* ── Left Content ── */}
        <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">

          {/* Status badge with Forsythia accent */}
          <div className="badge-saffron inline-flex items-center space-x-2 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC801] animate-ping" />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em' }}>
              AI PLATFORM — LIVE
            </span>
          </div>

          {/* Heading — unchanged layout */}
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
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-border-card bg-surface-card hover:bg-white/10 hover:border-[#FFC801]/30 text-white font-inter font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-hover group"
            >
              <svg className="w-5 h-5 mr-2 text-[#FFC801] group-hover:scale-110 transition-transform duration-hover" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-y-2 gap-x-6 text-[#7B859E] font-inter text-sm border-t border-border-card/30 pt-6 w-full">
            {['No credit card', 'Self-service setup', 'SOC2 Certified'].map((item) => (
              <span key={item} className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Orchestration Engine Dashboard ── */}
        <div className="lg:col-span-6 flex justify-center items-center relative select-none">
          <div className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-[4/3] rounded-[24px] overflow-hidden glass-panel shadow-2xl animate-float-slow">

            {/* Ambient blurs */}
            <div className="absolute top-[-20%] right-[-20%] w-[70%] h-[70%] bg-gradient-primary opacity-30 blur-[60px] pointer-events-none" />
            <div className="absolute bottom-[-15%] left-[-15%] w-[60%] h-[60%] bg-gradient-accent opacity-20 blur-[50px] pointer-events-none" />

            {/* Dashboard header bar */}
            <div className="h-12 border-b border-border-card bg-white/5 flex items-center justify-between px-6 z-10 relative">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-error opacity-60" />
                <div className="w-3 h-3 rounded-full bg-warning opacity-60" />
                <div className="w-3 h-3 rounded-full bg-success opacity-60" />
              </div>
              {/* JetBrains Mono label */}
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: '#7B859E' }}>
                AETHER // ORCHESTRATION_CORE
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFC801] animate-ping" />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#FFC801', letterSpacing: '0.08em' }}>LIVE</span>
              </div>
            </div>

            {/* Node graph content */}
            <div className="relative w-full h-[calc(100%-48px)] p-6 flex flex-col justify-between">
              {/* SVG connections with animated dots */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                {connections.map((c, i) => (
                  <g key={i}>
                    <path
                      d={`M ${c.x1},${c.y1} L ${c.x2},${c.y2}`}
                      stroke={c.color}
                      strokeWidth="1.5"
                      strokeDasharray="5,5"
                      fill="none"
                    />
                    <circle r="3.5" fill={c.dot} opacity="0.9">
                      <animateMotion
                        path={`M ${c.x1},${c.y1} L ${c.x2},${c.y2}`}
                        dur={c.dur}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                ))}
              </svg>

              {/* Nodes */}
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                const isCore = node.type === 'core';
                return (
                  <div
                    key={node.id}
                    className="absolute cursor-pointer group z-10 transition-transform duration-hover hover:scale-110"
                    style={{ left: `${node.x}px`, top: `${node.y}px`, transform: 'translate(-50%, -50%)' }}
                    onClick={() => setActiveNode(isActive ? null : node.id)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveNode(isActive ? null : node.id); }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Inspect ${node.label}`}
                  >
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all duration-hover ${
                        isCore
                          ? 'w-16 h-16 bg-gradient-primary shadow-[0_0_24px_rgba(109,94,249,0.5)]'
                          : 'w-10 h-10 border bg-[#0D1224]/80'
                      } ${isActive ? 'ring-2 ring-[#FFC801]/60' : ''}`}
                      style={!isCore ? { borderColor: node.color ? `${node.color}40` : 'rgba(255,255,255,0.08)' } : {}}
                    >
                      {isCore ? (
                        <span className="font-space-grotesk font-bold text-lg text-white">AI</span>
                      ) : (
                        node.Icon && <node.Icon className="w-4 h-4" style={{ color: node.color }} />
                      )}
                      <div
                        className="absolute -inset-1 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-hover blur-[4px] pointer-events-none"
                        style={{ background: isCore ? 'linear-gradient(135deg,#6D5EF9,#7B61FF)' : node.color }}
                      />
                    </div>

                    {/* Popover */}
                    <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 w-44 p-3 rounded-xl border border-border-card bg-[#0D1224]/95 backdrop-blur-md shadow-2xl transition-all duration-300 pointer-events-none ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}>
                      <h4 className="font-space-grotesk font-semibold text-xs text-white">{node.label}</h4>
                      <p className="font-inter text-[10px] text-[#A8B2D1] mt-1">{node.desc}</p>
                      {node.color && (
                        <div className="mt-1.5 h-0.5 rounded-full" style={{ background: node.color, width: '40%', opacity: 0.6 }} />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Throughput metric card — JetBrains Mono for numbers */}
              <div className="absolute right-4 top-4 w-36 p-3 rounded-2xl border border-border-card bg-[#050816]/75 backdrop-blur-md shadow-lg pointer-events-none">
                <div className="flex justify-between items-center mb-1" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#7B859E' }}>
                  <span>THROUGHPUT</span>
                  <span style={{ color: '#10B981' }}>ACTIVE</span>
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '18px', fontWeight: 700, color: '#FFFFFF' }}>
                  {throughput.toLocaleString()}<span style={{ fontSize: '11px', color: '#A8B2D1', fontWeight: 400 }}>/s</span>
                </div>
                <div className="w-full bg-[#0D1224] h-1.5 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${(pulseCount % 5) * 15 + 40}%`,
                      background: 'linear-gradient(90deg, #FFC801, #FF9932)'
                    }}
                  />
                </div>
              </div>

              {/* Real-time cognition mini chart */}
              <div className="absolute left-4 bottom-4 w-44 p-3 rounded-2xl border border-border-card bg-[#050816]/75 backdrop-blur-md shadow-lg pointer-events-none">
                <div className="flex justify-between items-center mb-1.5" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#7B859E' }}>
                  <span>COGNITION</span>
                  <span style={{ color: '#00D4FF' }}>99.8%</span>
                </div>
                <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGlowHero" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`M 0,25 Q 15,${20 - (pulseCount % 3) * 3} 30,${15 + (pulseCount % 2) * 5} T 60,${10 + (pulseCount % 4) * 2} T 80,${18 - (pulseCount % 2) * 4} T 100,5 L 100,30 L 0,30 Z`}
                    fill="url(#chartGlowHero)"
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

          {/* Underlay glow */}
          <div className="absolute -inset-4 bg-gradient-primary opacity-10 blur-[40px] pointer-events-none rounded-[28px]" />
        </div>
      </div>
    </section>
  );
}
