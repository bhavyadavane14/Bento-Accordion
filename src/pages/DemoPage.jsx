import React, { useState, useEffect, useRef } from 'react';

// Pipeline steps — full-stack AI workflow
const PIPELINE_STEPS = [
  { id: 1, label: 'User Upload', icon: '⬆', color: '#D9E8E2', desc: 'File ingested via HTTPS endpoint', start: 0, end: 2 },
  { id: 2, label: 'API Gateway', icon: '⚡', color: '#FFC801', desc: 'Rate limiting + JWT validation', start: 2, end: 4 },
  { id: 3, label: 'Authentication', icon: '🔐', color: '#FF9932', desc: 'OAuth 2.0 token verified', start: 4, end: 6 },
  { id: 4, label: 'AI Reasoning Engine', icon: '🧠', color: '#7B61FF', desc: 'LLM processes intent → plan', start: 6, end: 9 },
  { id: 5, label: 'Backend Server', icon: '🖥', color: '#5EEAD4', desc: 'Node.js orchestration layer', start: 9, end: 11 },
  { id: 6, label: 'Database', icon: '🗄', color: '#00D4FF', desc: 'PostgreSQL: read/write ops', start: 11, end: 13 },
  { id: 7, label: 'Vector Database', icon: '🔷', color: '#6D5EF9', desc: 'Pinecone: semantic retrieval', start: 13, end: 15 },
  { id: 8, label: 'Inference Engine', icon: '⚙', color: '#FFC801', desc: 'GPU cluster: model inference', start: 15, end: 18 },
  { id: 9, label: 'Workflow Automation', icon: '🔄', color: '#FF9932', desc: 'n8n orchestrating sub-agents', start: 18, end: 20 },
  { id: 10, label: 'Analytics Dashboard', icon: '📊', color: '#5EEAD4', desc: 'Real-time metrics aggregated', start: 20, end: 22 },
  { id: 11, label: 'Slack Notification', icon: '💬', color: '#D9E8E2', desc: 'Message dispatched to channel', start: 22, end: 24 },
  { id: 12, label: 'Email Sent', icon: '✉', color: '#FFC801', desc: 'SendGrid delivery confirmed', start: 24, end: 26 },
  { id: 13, label: 'Completed', icon: '✅', color: '#10B981', desc: 'Pipeline finished in 2.4s', start: 26, end: 30 },
];

const DURATION = 30;

const scenes = [
  { id: 1, name: 'Logo Reveal', start: 0 },
  { id: 2, name: 'Upload → Gateway', start: 2 },
  { id: 3, name: 'Auth → AI Engine', start: 4 },
  { id: 4, name: 'AI → Backend → DB', start: 6 },
  { id: 5, name: 'Vector DB → Inference', start: 13 },
  { id: 6, name: 'Automation → Analytics', start: 18 },
  { id: 7, name: 'Notify → Complete', start: 22 },
];

function formatTime(s) {
  return `0:${Math.floor(s) < 10 ? '0' : ''}${Math.floor(s)}`;
}

// Animated connection between pipeline nodes
function ConnectionLine({ active, color }) {
  return (
    <div className="flex items-center justify-center py-0.5">
      <div className="relative h-5 flex flex-col items-center justify-center" style={{ width: 2 }}>
        <div className="absolute inset-0 rounded-full opacity-20" style={{ background: color }} />
        <div
          className="w-0.5 rounded-full transition-all duration-500"
          style={{
            height: active ? '100%' : '30%',
            background: active ? color : 'rgba(255,255,255,0.1)',
            boxShadow: active ? `0 0 6px ${color}` : 'none',
          }}
        />
        {active && (
          <div
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ background: color, animation: 'data-flow-dot 0.8s ease-in-out infinite', boxShadow: `0 0 8px ${color}` }}
          />
        )}
      </div>
    </div>
  );
}

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= DURATION) return 0;
          return prev + 0.5;
        });
      }, 500);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const activeStepIndex = PIPELINE_STEPS.findIndex(
    (s) => currentTime >= s.start && currentTime < s.end
  );
  const activeStep = PIPELINE_STEPS[activeStepIndex] || PIPELINE_STEPS[PIPELINE_STEPS.length - 1];
  const completedSteps = PIPELINE_STEPS.filter((s) => currentTime >= s.end);

  // Determine the global scene for background animations
  const getSceneId = () => {
    for (let i = scenes.length - 1; i >= 0; i--) {
      if (currentTime >= scenes[i].start) return scenes[i].id;
    }
    return 1;
  };
  const sceneId = getSceneId();

  return (
    <div className={`pt-28 pb-20 bg-primary-bg min-h-screen flex flex-col justify-center items-center px-6 relative select-none ${isFullscreen ? 'fixed inset-0 z-50 pt-4 pb-4' : ''}`}>
      {/* Background ambient blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#7B61FF] opacity-10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#FFC801] opacity-6 blur-[120px] pointer-events-none" />

      <div className={`w-full max-w-6xl flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch ${isFullscreen ? 'h-full max-w-none' : ''}`}>

        {/* ── Left: Cinematic Player ── */}
        <div className={`lg:col-span-8 flex flex-col justify-between rounded-[24px] border border-border-card bg-[#0D1224]/85 backdrop-blur-md shadow-2xl overflow-hidden ${isFullscreen ? 'h-[calc(100vh-140px)]' : 'aspect-[16/9]'}`}>

          {/* Player Header */}
          <div className="h-12 border-b border-border-card bg-white/5 flex items-center justify-between px-6 z-10 shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-error" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning" />
              <div className="w-2.5 h-2.5 rounded-full bg-success" />
            </div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: '#7B859E' }}>
              AETHER AI // PIPELINE_DEMO_4K.MP4
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#FFC801] animate-ping" />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#FFC801', letterSpacing: '0.08em' }}>
                LIVE RENDER
              </span>
            </div>
          </div>

          {/* Cinematic Viewport */}
          <div className="flex-grow relative flex items-center justify-center bg-[#050816]/90 overflow-hidden">
            {/* Scan-line overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.004)_50%,rgba(0,0,0,0.12)_50%)] bg-[size:100%_4px] pointer-events-none z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,8,22,0.85)_100%)] pointer-events-none z-10" />

            {/* ── SCENE 1: Logo Reveal (0–2s) ── */}
            {sceneId === 1 && (
              <div className="w-full h-full flex flex-col justify-center items-center text-center space-y-6 z-30">
                <div className="absolute w-40 h-40 rounded-full opacity-20 blur-[60px] animate-pulse" style={{ background: 'radial-gradient(#7B61FF, #FFC801)' }} />
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center border border-white/20">
                  <span className="font-space-grotesk font-bold text-3xl text-white">Æ</span>
                  <div className="absolute inset-0 rounded-2xl border border-[#FFC801]/30 animate-ping" style={{ animationDuration: '2s' }} />
                </div>
                <div>
                  <h2 className="font-space-grotesk font-bold text-3xl text-white tracking-wide">Aether AI</h2>
                  <p className="font-inter text-[#FFC801] text-sm tracking-widest mt-1">AUTOMATE EVERYTHING · SCALE BEYOND LIMITS</p>
                </div>
              </div>
            )}

            {/* ── SCENES 2–7: Full-Stack Pipeline Visualization ── */}
            {sceneId >= 2 && (
              <div className="w-full h-full flex z-30 relative p-4">
                {/* Left column: pipeline steps */}
                <div className="flex-1 flex flex-col justify-center space-y-0 pr-4 overflow-y-auto max-h-full">
                  {PIPELINE_STEPS.map((step, i) => {
                    const isActive = activeStepIndex === i;
                    const isDone = currentTime >= step.end;
                    const isPending = currentTime < step.start;
                    return (
                      <div key={step.id}>
                        <div
                          className={`flex items-center space-x-3 px-3 py-2 rounded-xl border transition-all duration-300 ${
                            isActive
                              ? 'border-opacity-60 bg-[#0D1224]'
                              : isDone
                              ? 'border-opacity-20 bg-transparent'
                              : 'border-transparent bg-transparent'
                          }`}
                          style={{
                            borderColor: isActive ? step.color : isDone ? step.color : 'transparent',
                            boxShadow: isActive ? `0 0 16px ${step.color}20` : 'none',
                          }}
                        >
                          {/* Icon */}
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0 transition-all duration-300"
                            style={{
                              background: isDone
                                ? 'rgba(16,185,129,0.15)'
                                : isActive
                                ? `${step.color}20`
                                : 'rgba(255,255,255,0.04)',
                              border: `1px solid ${isDone ? '#10B98140' : isActive ? `${step.color}40` : 'rgba(255,255,255,0.06)'}`,
                            }}
                          >
                            {isDone ? '✓' : step.icon}
                          </div>

                          {/* Label */}
                          <div className="flex-1 min-w-0">
                            <div
                              className="font-space-grotesk font-semibold text-xs truncate transition-colors duration-300"
                              style={{ color: isActive ? step.color : isDone ? '#10B981' : '#7B859E' }}
                            >
                              {step.label}
                            </div>
                            {isActive && (
                              <div className="text-[9px] text-[#A8B2D1] mt-0.5 truncate" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                                {step.desc}
                              </div>
                            )}
                          </div>

                          {/* Status badge */}
                          <div
                            className="text-[8px] shrink-0 px-1.5 py-0.5 rounded"
                            style={{
                              fontFamily: 'JetBrains Mono, monospace',
                              color: isDone ? '#10B981' : isActive ? step.color : '#7B859E',
                              background: isDone ? 'rgba(16,185,129,0.1)' : isActive ? `${step.color}10` : 'transparent',
                            }}
                          >
                            {isDone ? 'DONE' : isActive ? 'ACTIVE' : 'WAIT'}
                          </div>
                        </div>

                        {/* Connector line */}
                        {i < PIPELINE_STEPS.length - 1 && (
                          <ConnectionLine active={currentTime >= step.end} color={PIPELINE_STEPS[i + 1].color} />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Right panel: live metrics */}
                <div className="w-48 flex flex-col space-y-3 shrink-0">
                  {/* Active step card */}
                  <div
                    className="p-3 rounded-xl border"
                    style={{
                      background: `${activeStep.color}08`,
                      borderColor: `${activeStep.color}30`,
                    }}
                  >
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: activeStep.color, letterSpacing: '0.1em' }}>
                      CURRENT STEP
                    </div>
                    <div className="font-space-grotesk font-bold text-sm text-white mt-1">{activeStep.label}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#A8B2D1', marginTop: 4 }}>
                      {activeStep.desc}
                    </div>
                    {/* Progress within step */}
                    <div className="mt-2 h-1 rounded-full bg-[#050816] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(100, ((currentTime - activeStep.start) / (activeStep.end - activeStep.start)) * 100)}%`,
                          background: activeStep.color,
                        }}
                      />
                    </div>
                  </div>

                  {/* Pipeline metrics */}
                  <div className="p-3 rounded-xl border border-border-card bg-[#0D1224]/50 space-y-2">
                    {[
                      { label: 'STEPS DONE', value: `${completedSteps.length}/${PIPELINE_STEPS.length}`, color: '#10B981' },
                      { label: 'LATENCY', value: `${(currentTime * 80 + 200).toFixed(0)}ms`, color: '#FFC801' },
                      { label: 'UPTIME', value: '99.9%', color: '#00D4FF' },
                    ].map((m) => (
                      <div key={m.label} className="flex justify-between items-center">
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#7B859E' }}>{m.label}</span>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: m.color, fontWeight: 600 }}>{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Palette-colored glow strip */}
                  <div className="h-1 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-700"
                      style={{
                        width: `${(currentTime / DURATION) * 100}%`,
                        background: 'linear-gradient(90deg, #7B61FF, #FFC801, #FF9932, #5EEAD4)',
                      }}
                    />
                  </div>

                  {/* Completion state */}
                  {currentTime >= 26 && (
                    <div className="p-3 rounded-xl border border-[#10B981]/30 bg-[#10B981]/10 text-center">
                      <div className="text-2xl mb-1">✅</div>
                      <div className="font-space-grotesk font-bold text-xs text-[#10B981]">Pipeline Complete</div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#A8B2D1', marginTop: 4 }}>
                        Completed in 2.4s
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Player Controls */}
          <div className="p-4 border-t border-border-card bg-[#050816] flex flex-col space-y-3 z-10 shrink-0">
            {/* Scrubber with saffron accent */}
            <div className="flex items-center space-x-3 w-full">
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#7B859E' }}>{formatTime(currentTime)}</span>
              <div className="flex-grow relative h-1.5 bg-border-card rounded-lg overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full rounded-lg transition-all duration-200"
                  style={{ width: `${(currentTime / DURATION) * 100}%`, background: 'linear-gradient(90deg, #7B61FF, #FFC801)' }}
                />
                <input
                  aria-label="Seek video duration"
                  type="range"
                  min="0"
                  max={DURATION}
                  step="0.5"
                  value={currentTime}
                  onChange={(e) => setCurrentTime(Number(e.target.value))}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer"
                />
              </div>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#7B859E' }}>{formatTime(DURATION)}</span>
            </div>

            {/* Buttons row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  type="button"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="w-10 h-10 rounded-full border border-border-card bg-surface-card hover:bg-white/10 text-white flex items-center justify-center focus:outline-none transition-all hover:border-[#FFC801]/30"
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  ) : (
                    <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  )}
                </button>
                <button
                  onClick={() => setCurrentTime(0)}
                  type="button"
                  aria-label="Restart"
                  className="text-xs font-inter text-[#7B859E] hover:text-[#FFC801] transition-colors focus:outline-none"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  RESTART
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2">
                  <svg className="w-4 h-4 text-secondary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <input
                    aria-label="Volume"
                    type="range" min="0" max="100" value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-16 h-1 bg-border-card rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: '#FFC801' }}
                  />
                </div>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  type="button"
                  aria-label="Toggle Fullscreen"
                  className="w-8 h-8 rounded-lg border border-border-card bg-surface-card hover:bg-white/10 text-secondary-text hover:text-white flex items-center justify-center focus:outline-none hover:border-[#FFC801]/30 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Chapter Selector + Specs ── */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4 text-left">

          {/* Chapter list */}
          <div className="p-5 rounded-[24px] border border-border-card bg-surface-card space-y-3">
            <h3 className="font-space-grotesk font-bold text-base text-white">Pipeline Chapters</h3>
            <div className="space-y-2">
              {scenes.map((scene) => {
                const isActive = getSceneId() === scene.id;
                return (
                  <button
                    key={`scene-btn-${scene.id}`}
                    onClick={() => { setCurrentTime(scene.start); setIsPlaying(true); }}
                    type="button"
                    className={`w-full p-3 rounded-xl border text-left transition-all duration-hover focus:outline-none ${
                      isActive ? 'border-[#FFC801]/40 bg-[#0D1224]' : 'border-border-card/50 hover:bg-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-space-grotesk font-semibold text-xs" style={{ color: isActive ? '#FFC801' : '#FFFFFF' }}>
                        {scene.name}
                      </span>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#7B859E' }}>
                        {formatTime(scene.start)}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Trailer specs */}
          <div className="p-5 rounded-[24px] border border-border-card bg-surface-card flex-grow flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="font-space-grotesk font-bold text-sm text-white uppercase tracking-wider">Platform Architecture</h3>
              <p className="font-inter text-xs text-secondary-text leading-relaxed">
                A complete end-to-end AI pipeline from data ingestion through reasoning, execution, and delivery — including vector search, inference, and Slack/email dispatch.
              </p>
            </div>

            {/* Palette accent swatches */}
            <div className="mt-4 flex items-center space-x-1.5">
              {['#7B61FF', '#FFC801', '#FF9932', '#5EEAD4', '#D9E8E2'].map((c) => (
                <div key={c} className="w-4 h-4 rounded-full border border-white/10" style={{ background: c }} />
              ))}
              <span className="font-inter text-[10px] text-[#7B859E] ml-2">Official palette</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-border-card/30">
              {[
                { label: 'RESOLUTION', value: '4K Cinematic', color: 'white' },
                { label: 'THEME', value: 'Dark Glassmorphism', color: '#5EEAD4' },
                { label: 'STEPS', value: '13 Pipeline Nodes', color: '#FFC801' },
                { label: 'LATENCY', value: '< 2.5s avg', color: '#FF9932' },
              ].map((m) => (
                <div key={m.label} className="p-2.5 bg-[#050816] rounded-xl border border-border-card">
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#7B859E', letterSpacing: '0.08em' }}>{m.label}</span>
                  <div className="font-space-grotesk font-bold text-xs mt-0.5" style={{ color: m.color }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
