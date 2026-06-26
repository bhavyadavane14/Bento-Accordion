import React, { useState, useEffect, useRef } from 'react';

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0); // 0 to 30 seconds
  const [volume, setVolume] = useState(80);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const timerRef = useRef(null);

  const duration = 30; // 30 seconds total demo video

  // Ticker for progress playback
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            return 0; // loop
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const handleScrubberChange = (e) => {
    setCurrentTime(Number(e.target.value));
  };

  const formatTime = (seconds) => {
    const s = Math.floor(seconds % 60);
    return `0:${s < 10 ? '0' : ''}${s}`;
  };

  // Determine active scene based on time bounds
  const getActiveScene = () => {
    if (currentTime >= 0 && currentTime < 3) return 1;
    if (currentTime >= 3 && currentTime < 6) return 2;
    if (currentTime >= 6 && currentTime < 10) return 3;
    if (currentTime >= 10 && currentTime < 15) return 4;
    if (currentTime >= 15 && currentTime < 20) return 5;
    if (currentTime >= 20 && currentTime < 25) return 6;
    if (currentTime >= 25 && currentTime <= 30) return 7;
    return 1;
  };

  const activeScene = getActiveScene();

  // Navigation skip handlers
  const scenes = [
    { id: 1, name: 'Scene 1: Intro', start: 0 },
    { id: 2, name: 'Scene 2: Dashboard', start: 3 },
    { id: 3, name: 'Scene 3: Pipeline Flow', start: 6 },
    { id: 4, name: 'Scene 4: AI Brain Grid', start: 10 },
    { id: 5, name: 'Scene 5: Verification', start: 15 },
    { id: 6, name: 'Scene 6: Integrations', start: 20 },
    { id: 7, name: 'Scene 7: Outro CTA', start: 25 },
  ];

  return (
    <div className={`pt-28 pb-20 bg-primary-bg min-h-screen flex flex-col justify-center items-center px-6 relative select-none ${isFullscreen ? 'fixed inset-0 z-50 pt-4 pb-4 bg-[#050816] w-screen h-screen overflow-hidden' : ''}`}>
      {/* Background blurs */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#7B61FF] opacity-10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#00D4FF] opacity-10 blur-[130px] pointer-events-none" />

      <div className={`w-full max-w-6xl flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch ${isFullscreen ? 'h-full max-w-none' : ''}`}>
        
        {/* Left Side: Cinematic Video Screen Canvas Frame (8 cols) */}
        <div className={`lg:col-span-8 flex flex-col justify-between rounded-[24px] border border-border-card bg-[#0D1224]/85 backdrop-blur-md shadow-2xl overflow-hidden ${isFullscreen ? 'h-[calc(100vh-140px)]' : 'aspect-[16/9]'}`}>
          
          {/* Header Panel */}
          <div className="h-12 border-b border-border-card bg-white/5 flex items-center justify-between px-6 z-10 shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-error" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning" />
              <div className="w-2.5 h-2.5 rounded-full bg-success" />
            </div>
            <div className="text-[10px] font-space-grotesk tracking-widest text-[#7B859E] uppercase">
              AETHER AI // LAUNCH_TEASER_4K.MP4
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-success animate-ping" />
              <span className="text-[9px] font-mono text-success uppercase">1080P CINEMATIC</span>
            </div>
          </div>

          {/* Video Playback viewport */}
          <div className="flex-grow relative flex items-center justify-center p-6 bg-[#050816]/90 overflow-hidden">
            {/* Cinematic Scan lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.005)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,8,22,0.85)_100%)] pointer-events-none z-10" />

            {/* ====================================================
                SCENE 1: Intro Logo reveal (0-3s)
               ==================================================== */}
            {activeScene === 1 && (
              <div className="w-full h-full flex flex-col justify-center items-center text-center space-y-6 animate-fade-in relative">
                {/* Floating particle background glow */}
                <div className="absolute w-36 h-36 bg-[#7B61FF] opacity-35 blur-[50px] animate-pulse-slow" />
                
                {/* Scaling Logo Icon */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center overflow-hidden border border-white/20 animate-bounce" style={{ animationDuration: '4s' }}>
                  <span className="font-space-grotesk font-bold text-3xl text-gradient-accent">Æ</span>
                </div>
                
                {/* Fade text switcher */}
                <div className="h-10 flex items-center justify-center">
                  {currentTime < 2 ? (
                    <h2 className="font-space-grotesk font-bold text-3xl tracking-wide text-white animate-pulse">
                      Aether AI
                    </h2>
                  ) : (
                    <h2 className="font-space-grotesk font-semibold text-2xl tracking-widest text-[#5EEAD4] uppercase animate-pulse">
                      Automate Everything.
                    </h2>
                  )}
                </div>
              </div>
            )}

            {/* ====================================================
                SCENE 2: Dashboard Preview (3-6s)
               ==================================================== */}
            {activeScene === 2 && (
              <div className="w-full h-full flex flex-col justify-center items-center space-y-6 animate-fade-in relative">
                {/* Scanning line sweep to simulate camera movement */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-[#00D4FF]/40 blur-[1px] animate-pulse" style={{ transform: `translateY(${(currentTime - 3) * 60}px)` }} />
                
                <h3 className="font-space-grotesk text-xs tracking-widest text-[#7B859E] uppercase mb-2">
                  System Dashboard Overview
                </h3>

                {/* Dashboard grid panel */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                  <div className="p-4 rounded-xl border border-border-card bg-[#0D1224]/80 text-left space-y-2 relative overflow-hidden">
                    <span className="text-[9px] font-space-grotesk text-[#7B859E]">COMPUTE SAVINGS</span>
                    <div className="text-xl font-bold text-white font-space-grotesk">$4,820</div>
                    <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-success" />
                  </div>
                  <div className="p-4 rounded-xl border border-border-card bg-[#0D1224]/80 text-left space-y-2 relative overflow-hidden">
                    <span className="text-[9px] font-space-grotesk text-[#7B859E]">AI AGENTS STATUS</span>
                    <div className="text-xl font-bold text-[#7B61FF] font-space-grotesk">12 Active</div>
                    <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-success" />
                  </div>
                  <div className="p-4 rounded-xl border border-border-card bg-[#0D1224]/80 text-left space-y-2 relative overflow-hidden">
                    <span className="text-[9px] font-space-grotesk text-[#7B859E]">PIPELINE WORKFLOWS</span>
                    <div className="text-xl font-bold text-[#00D4FF] font-space-grotesk">99.9% Up</div>
                    <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-success" />
                  </div>
                  <div className="p-4 rounded-xl border border-border-card bg-[#0D1224]/80 text-left space-y-2 relative overflow-hidden">
                    <span className="text-[9px] font-space-grotesk text-[#7B859E]">AUTOMATED REPORTS</span>
                    <div className="text-xl font-bold text-[#5EEAD4] font-space-grotesk">24 Daily</div>
                    <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-success" />
                  </div>
                </div>
              </div>
            )}

            {/* ====================================================
                SCENE 3: Workflow Action Pipeline (6-10s)
               ==================================================== */}
            {activeScene === 3 && (
              <div className="w-full h-full flex flex-col justify-center items-center space-y-6 animate-fade-in relative">
                {/* Simulated Click Overlay */}
                {currentTime === 6 && (
                  <div className="absolute w-6 h-6 rounded-full border-2 border-[#00D4FF] bg-[#00D4FF]/20 animate-ping z-30" />
                )}
                
                <h3 className="font-space-grotesk text-xs tracking-widest text-[#7B859E] uppercase mb-1">
                  Executing Pipeline Graph
                </h3>

                {/* Architecture workflow topology map */}
                <div className="flex items-center space-x-3 md:space-x-5 scale-90 md:scale-100">
                  {/* Node 1: Upload */}
                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-9 h-9 rounded-xl border border-border-card bg-[#0D1224] flex items-center justify-center">
                      <svg className="w-4.5 h-4.5 text-[#A8B2D1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <span className="text-[8px] font-mono text-[#7B859E]">Upload</span>
                  </div>

                  <div className="w-6 h-0.5 bg-gradient-to-r from-border-card to-[#7B61FF] relative">
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-[#00D4FF] left-0 animate-pulse" />
                  </div>

                  {/* Node 2: AI Processor */}
                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-9 h-9 rounded-xl border border-[#7B61FF]/40 bg-gradient-primary/10 flex items-center justify-center">
                      <svg className="w-4.5 h-4.5 text-[#7B61FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      </svg>
                    </div>
                    <span className="text-[8px] font-mono text-[#7B61FF]">Reasoning</span>
                  </div>

                  <div className="w-6 h-0.5 bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] relative">
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-[#00D4FF] left-0 animate-pulse" />
                  </div>

                  {/* Node 3: Server Grid */}
                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-9 h-9 rounded-xl border border-border-card bg-[#0D1224] flex items-center justify-center">
                      <svg className="w-4.5 h-4.5 text-[#A8B2D1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <span className="text-[8px] font-mono text-[#7B859E]">Server</span>
                  </div>

                  <div className="w-6 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#5EEAD4] relative">
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-[#5EEAD4] left-0 animate-pulse" />
                  </div>

                  {/* Node 4: DB Database */}
                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-9 h-9 rounded-xl border border-[#5EEAD4]/40 bg-[#0D1224] flex items-center justify-center">
                      <svg className="w-4.5 h-4.5 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                    <span className="text-[8px] font-mono text-[#5EEAD4]">Database</span>
                  </div>
                </div>

                {/* Cloud & ML nodes diagram detail */}
                <div className="text-[10px] font-mono text-success bg-success/10 px-4 py-1.5 rounded-lg border border-success/30">
                  PIPELINE STATUS: BACKEND DATA SYNC SUCCESSFUL
                </div>
              </div>
            )}

            {/* ====================================================
                SCENE 4: AI Neural Network (10-15s)
               ==================================================== */}
            {activeScene === 4 && (
              <div className="w-full h-full flex flex-col justify-center items-center space-y-4 animate-fade-in relative">
                {/* Rotating Neural Net Canvas Graph */}
                <svg className="w-36 h-36 animate-spin overflow-visible" style={{ animationDuration: '40s' }} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(123, 97, 255, 0.15)" strokeWidth="1" strokeDasharray="3,3" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(0, 212, 255, 0.15)" strokeWidth="1" />
                  
                  {/* Central brain core node */}
                  <circle cx="50" cy="50" r="8" fill="#7B61FF" className="animate-pulse" />
                  
                  {/* Neural nodes mapping */}
                  {[
                    { x: 50, y: 10 }, { x: 85, y: 30 }, { x: 75, y: 75 },
                    { x: 25, y: 75 }, { x: 15, y: 30 }
                  ].map((pt, idx) => (
                    <g key={idx}>
                      <line x1="50" y1="50" x2={pt.x} y2={pt.y} stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1.5" />
                      <circle cx={pt.x} cy={pt.y} r="4" fill="#00D4FF" />
                    </g>
                  ))}
                </svg>

                <div className="space-y-1 text-center">
                  <h4 className="font-space-grotesk font-bold text-sm text-white uppercase tracking-wider">
                    GPU Cognition Matrix
                  </h4>
                  <p className="font-mono text-[10px] text-[#A8B2D1]">
                    Processing query token parameters ... [ML_CALCULATION_OK]
                  </p>
                </div>
              </div>
            )}

            {/* ====================================================
                SCENE 5: Dashboard Completion (15-20s)
               ==================================================== */}
            {activeScene === 5 && (
              <div className="w-full h-full flex flex-col justify-center items-center space-y-6 animate-fade-in relative">
                
                {/* Big green success status */}
                <div className="w-16 h-16 rounded-full bg-success/10 border-2 border-success flex items-center justify-center animate-bounce">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="text-center space-y-1">
                  <h4 className="font-space-grotesk font-bold text-lg text-white">
                    Workflow Completed Successfully
                  </h4>
                  <p className="font-inter text-xs text-[#A8B2D1] max-w-xs leading-relaxed">
                    Stripe invoicing checks generated. Data packet briefs delivered to Slack alerts.
                  </p>
                </div>

                {/* Simulated notifications overlay box */}
                <div className="w-full max-w-xs p-3 rounded-xl border border-border-card bg-[#0D1224] text-left text-[10px] text-white flex items-center justify-between">
                  <span>DISPATCHED PDF BRIEF TO AWS</span>
                  <span className="text-success font-bold font-mono">100% DONE</span>
                </div>
              </div>
            )}

            {/* ====================================================
                SCENE 6: Multiple Integrations Connected (20-25s)
               ==================================================== */}
            {activeScene === 6 && (
              <div className="w-full h-full flex flex-col justify-center items-center space-y-6 animate-fade-in relative">
                <h3 className="font-space-grotesk text-xs tracking-widest text-[#7B859E] uppercase">
                  Connected SaaS Modules
                </h3>

                {/* Central logo node connected to modules */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center font-bold font-space-grotesk text-white shadow-xl z-20">
                    Æ
                  </div>

                  {/* Radiating visual lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {[
                      { x: 30, y: 30 }, { x: 150, y: 30 },
                      { x: 30, y: 150 }, { x: 150, y: 150 }
                    ].map((pt, i) => (
                      <line key={i} x1="88" y1="88" x2={pt.x} y2={pt.y} stroke="rgba(94, 234, 212, 0.4)" strokeWidth="1.5" strokeDasharray="3,3" />
                    ))}
                  </svg>

                  {/* Connected boxes */}
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-[#0D1224] border border-border-card text-[9px] font-mono text-white">Stripe</div>
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded bg-[#0D1224] border border-border-card text-[9px] font-mono text-white">Slack</div>
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0D1224] border border-border-card text-[9px] font-mono text-white">AWS</div>
                  <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-[#0D1224] border border-border-card text-[9px] font-mono text-white">GitHub</div>
                </div>
              </div>
            )}

            {/* ====================================================
                SCENE 7: Outro & Call to Action (25-30s)
               ==================================================== */}
            {activeScene === 7 && (
              <div className="w-full h-full flex flex-col justify-center items-center text-center space-y-6 animate-fade-in relative">
                {/* Floating blur overlay background */}
                <div className="absolute w-44 h-44 bg-gradient-primary opacity-20 blur-[60px] pointer-events-none" />

                <div className="space-y-3">
                  <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-white tracking-tight leading-none">
                    Automate. Analyze. Scale.
                  </h2>
                  <p className="font-mono text-xs text-[#00D4FF] tracking-widest font-semibold uppercase">
                    AetherAI.com
                  </p>
                </div>

                <a
                  href="#pricing"
                  className="px-8 py-3.5 rounded-2xl bg-gradient-primary text-white font-inter font-bold text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-hover focus:outline-none"
                >
                  Start Free
                </a>
              </div>
            )}

          </div>

          {/* Video Control Bar Panel (Footer) */}
          <div className="p-4 border-t border-border-card bg-[#050816] flex flex-col space-y-3 z-10 shrink-0">
            {/* Scrubber progress slider */}
            <div className="flex items-center space-x-3 w-full">
              <span className="text-[10px] font-mono text-secondary-text">{formatTime(currentTime)}</span>
              <input
                aria-label="Seek video duration"
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleScrubberChange}
                className="flex-grow h-1 bg-border-card rounded-lg appearance-none cursor-pointer accent-[#00D4FF]"
              />
              <span className="text-[10px] font-mono text-[#7B859E]">{formatTime(duration)}</span>
            </div>

            {/* Panel Buttons */}
            <div className="flex items-center justify-between">
              {/* Play/Pause controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  type="button"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="w-10 h-10 rounded-full border border-border-card bg-surface-card hover:bg-white/10 text-white flex items-center justify-center focus:outline-none"
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>

                {/* Reset button */}
                <button
                  onClick={() => setCurrentTime(0)}
                  type="button"
                  aria-label="Restart video"
                  className="text-xs font-inter text-[#7B859E] hover:text-white transition-colors focus:outline-none"
                >
                  Restart
                </button>
              </div>

              {/* Volume & Fullscreen */}
              <div className="flex items-center space-x-6">
                {/* Volume slider */}
                <div className="hidden sm:flex items-center space-x-2">
                  <svg className="w-4 h-4 text-secondary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <input
                    aria-label="Change volume"
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-16 h-1 bg-border-card rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

                {/* Fullscreen control */}
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  type="button"
                  aria-label="Toggle Fullscreen"
                  className="w-8 h-8 rounded-lg border border-border-card bg-surface-card hover:bg-white/10 text-secondary-text hover:text-white flex items-center justify-center focus:outline-none"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Cinematic Timeline Step Skip (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6 text-left">
          
          {/* Chapter selections list */}
          <div className="p-6 rounded-[24px] border border-border-card bg-surface-card space-y-4">
            <h3 className="font-space-grotesk font-bold text-lg text-white">Cinematic Video Chapters</h3>
            <div className="space-y-3">
              {scenes.map((scene) => {
                const isActive = activeScene === scene.id;
                return (
                  <button
                    key={`scene-btn-${scene.id}`}
                    onClick={() => {
                      setCurrentTime(scene.start);
                      setIsPlaying(true);
                    }}
                    type="button"
                    className={`w-full p-3 rounded-xl border text-left transition-all duration-hover focus:outline-none ${
                      isActive
                        ? 'border-[#00D4FF]/40 bg-[#0D1224] shadow-md'
                        : 'border-border-card/50 hover:bg-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`font-space-grotesk font-semibold text-xs ${isActive ? 'text-[#00D4FF]' : 'text-white'}`}>
                        {scene.name}
                      </span>
                      <span className="font-mono text-[9px] text-[#7B859E]">{formatTime(scene.start)}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick trailer information description */}
          <div className="p-6 rounded-[24px] border border-border-card bg-surface-card flex-grow flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-space-grotesk font-bold text-base text-white uppercase tracking-wider">Trailer Specs</h3>
              <p className="font-inter text-xs text-secondary-text leading-relaxed">
                Experience Aether's complete AI ecosystem layout. Includes high-fidelity rendering, microservices mappings, data pipeline sync loops, and CRM Slack triggers.
              </p>
            </div>
            
            {/* Quick metrics indicators */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border-card/30">
              <div className="p-3 bg-[#050816] rounded-xl border border-border-card">
                <span className="text-[9px] font-space-grotesk text-[#7B859E]">SPECS</span>
                <div className="font-space-grotesk font-bold text-sm text-white mt-1">4K UHD Cinematic</div>
              </div>
              <div className="p-3 bg-[#050816] rounded-xl border border-border-card">
                <span className="text-[9px] font-space-grotesk text-[#7B859E]">THEME</span>
                <div className="font-space-grotesk font-bold text-sm text-[#5EEAD4] mt-1">Dark Glassmorphism</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
