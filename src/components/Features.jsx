import React, { useState, useEffect } from 'react';

/* ── Official SVG assets inlined as components ── */
const IconCog = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
    <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
  </svg>
);
const IconArrowPath = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);
const IconChartPie = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
    <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
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
const IconLinkSolid = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
  </svg>
);
const IconChevronUp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);
const IconChevronDown = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

/* ── Animated Illustrations ── */

// 1. AI Agent — animated orbital rings with palette-colored nodes
const AgentIllustration = ({ active }) => (
  <div className="relative w-full h-full min-h-[140px] flex items-center justify-center">
    <div className="absolute w-28 h-28 rounded-full border border-dashed border-[#7B61FF]/40" style={{ animation: 'spin 20s linear infinite' }} />
    <div className="absolute w-18 h-18 rounded-full border border-dashed border-[#FFC801]/30" style={{ width: 72, height: 72, animation: 'spin 12s linear infinite reverse' }} />
    <div className="relative w-12 h-12 rounded-xl bg-[#0D1224] border border-border-card flex items-center justify-center shadow-lg">
      <IconCog className="w-6 h-6 text-[#7B61FF]" />
      <div className={`absolute inset-0 rounded-xl bg-[#7B61FF]/20 transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`} />
    </div>
    {/* Orbiting palette-colored dots */}
    {[{ color: '#7B61FF', top: 8, left: 12 }, { color: '#FFC801', bottom: 6, right: 16 }, { color: '#5EEAD4', top: 20, right: 8 }].map((d, i) => (
      <div
        key={i}
        className="absolute w-2.5 h-2.5 rounded-full animate-pulse"
        style={{ background: d.color, top: d.top, bottom: d.bottom, left: d.left, right: d.right, animationDelay: `${i * 0.6}s` }}
      />
    ))}
  </div>
);

// 2. Workflow Builder — animated pipeline with official link & arrow icons
const WorkflowIllustration = () => (
  <div className="relative w-full h-full min-h-[140px] flex flex-col justify-center items-center space-y-3">
    <div className="flex items-center space-x-3">
      <div className="px-3 py-1.5 rounded-lg border border-border-card bg-surface-card text-[10px] text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Trigger</div>
      <div className="flex items-center space-x-1">
        <div className="w-6 h-0.5 bg-[#FFC801]/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#FFC801] animate-pulse" />
        <div className="w-6 h-0.5 bg-[#FFC801]/60" />
      </div>
      <div className="px-3 py-1.5 rounded-lg border border-[#7B61FF]/40 bg-[#7B61FF]/10 text-[10px] text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>AI Logic</div>
      <div className="flex items-center space-x-1">
        <div className="w-6 h-0.5 bg-[#FF9932]/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#FF9932] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="w-6 h-0.5 bg-[#FF9932]/60" />
      </div>
      <div className="px-3 py-1.5 rounded-lg border border-[#5EEAD4]/40 bg-[#5EEAD4]/10 text-[10px] text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Output</div>
    </div>
    <div className="badge-saffron px-2 py-0.5 rounded-full">WORKFLOW ACTIVE</div>
  </div>
);

// 3. Smart Analytics — animated bar chart with palette colors
const AnalyticsIllustration = ({ tick }) => {
  const bars = [
    { color: '#7B61FF', height: 40 + (tick % 3) * 12 },
    { color: '#FFC801', height: 65 + (tick % 4) * 8 },
    { color: '#FF9932', height: 80 + (tick % 2) * 15 },
    { color: '#5EEAD4', height: 55 + (tick % 5) * 10 },
  ];
  return (
    <div className="relative w-full h-full min-h-[140px] flex items-end justify-center space-x-3 px-4 pb-2">
      {bars.map((bar, i) => (
        <div key={i} className="flex flex-col items-center space-y-1 flex-1">
          <div
            className="w-full rounded-t-lg relative overflow-hidden transition-all duration-700"
            style={{ height: `${bar.height}px`, background: `${bar.color}20`, border: `1px solid ${bar.color}30` }}
          >
            <div
              className="absolute bottom-0 inset-x-0 rounded-t-lg transition-all duration-700"
              style={{ height: `${60 + i * 10}%`, background: `linear-gradient(to top, ${bar.color}80, ${bar.color}20)` }}
            />
          </div>
          <div className="w-1 h-1 rounded-full" style={{ background: bar.color }} />
        </div>
      ))}
      {/* Y-axis label */}
      <div className="absolute left-1 top-2" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#7B859E' }}>ops/s</div>
    </div>
  );
};

// 4. Voice Commands — animated waveform with Mystic Mint accent
const VoiceIllustration = ({ activeIndex }) => (
  <div className="relative w-full h-full min-h-[140px] flex flex-col items-center justify-center space-y-3">
    <div className="flex items-center justify-center space-x-1.5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((bar) => (
        <div
          key={bar}
          className="rounded-full waveform-bar"
          style={{
            width: 4,
            height: `${16 + Math.abs(Math.sin((bar + activeIndex) * 0.8)) * 40}px`,
            background: bar % 3 === 0 ? '#D9E8E2' : bar % 2 === 0 ? '#5EEAD4' : '#00D4FF',
            '--delay': `${bar * 0.1}s`,
            animationDelay: `${bar * 0.1}s`,
            animationDuration: `${0.8 + (bar % 3) * 0.3}s`,
          }}
        />
      ))}
    </div>
    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#D9E8E2', letterSpacing: '0.08em' }}>
      LISTENING...
    </div>
  </div>
);

// 5. Real-Time Monitoring — scrolling live terminal logs with JetBrains Mono
const MonitoringIllustration = ({ tick }) => {
  const logs = [
    { text: '> NODE_ID: tri_09 — SUCCESS', color: '#10B981' },
    { text: '> Trigger: Slack Webhook received', color: '#A8B2D1' },
    { text: '> Extracted: "Deploy production"', color: '#00D4FF' },
    { text: '> Agent coordinator: DONE', color: '#10B981' },
    { text: '> API call: Stripe → 200 OK', color: '#FFC801' },
    { text: '> Report dispatched to S3', color: '#5EEAD4' },
    { text: '> Next trigger: in 4.2s', color: '#A8B2D1' },
  ];
  const offset = tick % logs.length;
  return (
    <div className="relative w-full h-full min-h-[140px] flex flex-col justify-center px-2">
      <div className="rounded-xl border border-border-card bg-[#050816] p-3 overflow-hidden max-h-[110px]">
        <div className="transition-transform duration-500" style={{ transform: `translateY(-${offset * 16}px)` }}>
          {[...logs, ...logs].map((log, i) => (
            <div key={i} className="flex items-center space-x-1 py-0.5" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: log.color }}>
              <span>{log.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 6. API Integrations — animated connection nodes with official link icon
const APIIllustration = () => (
  <div className="relative w-full h-full min-h-[140px] flex items-center justify-center">
    <div className="relative flex items-center justify-center">
      {/* Center hub */}
      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg z-10">
        <IconLink className="w-5 h-5 text-white" />
      </div>
      {/* Radial API badges */}
      {[
        { label: 'Stripe', color: '#5EEAD4', angle: 0 },
        { label: 'Slack', color: '#FFC801', angle: 90 },
        { label: 'AWS', color: '#FF9932', angle: 180 },
        { label: 'HubSpot', color: '#7B61FF', angle: 270 },
      ].map((api, i) => {
        const rad = (api.angle * Math.PI) / 180;
        const x = Math.cos(rad) * 60;
        const y = Math.sin(rad) * 60;
        return (
          <div key={i} style={{ position: 'absolute', left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}>
            <div
              className="px-2 py-0.5 rounded-md border text-[8px] animate-pulse"
              style={{ borderColor: `${api.color}40`, color: api.color, background: `${api.color}10`, fontFamily: 'JetBrains Mono, monospace', animationDelay: `${i * 0.4}s` }}
            >
              {api.label}
            </div>
          </div>
        );
      })}
      {/* Connection lines */}
      <svg className="absolute inset-0 pointer-events-none" style={{ width: 160, height: 140, left: -64, top: -56 }}>
        {[0, 90, 180, 270].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 80 + Math.cos(rad) * 60;
          const y2 = 70 + Math.sin(rad) * 60;
          return (
            <line key={i} x1="80" y1="70" x2={x2} y2={y2}
              stroke={['#5EEAD4', '#FFC801', '#FF9932', '#7B61FF'][i]}
              strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3,3"
            />
          );
        })}
      </svg>
    </div>
  </div>
);

// 7. Predictive Insights — animated line chart with chart-pie icon + saffron accent
const PredictiveIllustration = ({ pulseCount }) => (
  <div className="relative w-full h-full min-h-[140px] flex items-center justify-center px-4">
    <svg className="w-full h-20 overflow-visible" viewBox="0 0 100 40">
      <defs>
        <linearGradient id="predictGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7B61FF" />
          <stop offset="100%" stopColor="#FFC801" />
        </linearGradient>
      </defs>
      {/* Historical (solid) */}
      <path d="M 0,35 Q 20,28 40,22 T 60,12" fill="none" stroke="url(#predictGrad)" strokeWidth="2" className="chart-line-draw" />
      {/* Forecast (dashed with saffron) */}
      <path d="M 60,12 Q 75,8 100,5" fill="none" stroke="#FFC801" strokeWidth="1.5" strokeDasharray="3,3" />
      {/* Inflection point */}
      <circle cx="60" cy="12" r="4" fill="#FFC801" className="animate-ping" style={{ animationDuration: '1.5s' }} />
      <circle cx="60" cy="12" r="3" fill="#FF9932" />
      <text x="64" y="10" fill="#FFC801" fontSize="6" fontFamily="'JetBrains Mono', monospace">FORECAST</text>
      {/* Grid lines */}
      {[10, 20, 30].map(y => (
        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
      ))}
    </svg>
  </div>
);

// 8. Automated Reports — animated PDF doc with progress fill
const ReportsIllustration = ({ pulseCount }) => (
  <div className="relative w-full h-full min-h-[140px] flex items-center justify-center">
    <div className="w-36 h-24 rounded-xl border border-border-card bg-[#0D1224]/80 p-3 space-y-2 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="h-2 w-12 bg-white/20 rounded" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
      </div>
      {/* Animated progress bars with palette colors */}
      {[
        { color: '#FFC801', w: 90 },
        { color: '#5EEAD4', w: 75 },
        { color: '#FF9932', w: 85 },
      ].map((bar, i) => (
        <div key={i} className="w-full h-1.5 rounded-full bg-[#050816] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${bar.w - ((pulseCount % 3) * 5)}%`,
              background: bar.color,
              opacity: 0.7,
            }}
          />
        </div>
      ))}
      <div className="flex justify-between items-center pt-1">
        <div className="badge-saffron px-1.5 py-0.5 rounded">PDF READY</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#10B981' }}>SENT ✓</div>
      </div>
    </div>
  </div>
);

export default function Features() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((c) => c + 1), 800);
    const p = setInterval(() => setPulseCount((c) => c + 1), 3000);
    return () => { clearInterval(t); clearInterval(p); };
  }, []);

  const features = [
    {
      title: 'Autonomous AI Agents',
      spanClass: 'md:col-span-8',
      description: 'Deploy self-learning AI agents that analyze logs, manage support queues, route messages, and execute operations with cognitive reasoning.',
      Icon: IconCog,
      iconColor: '#7B61FF',
      illustration: <AgentIllustration active={activeCardIndex === 0} />,
    },
    {
      title: 'Workflow Builder',
      spanClass: 'md:col-span-4',
      description: 'Connect triggers and operations on a clean, visual glassmorphic canvas. Zero code, endless scalability.',
      Icon: IconArrowPath,
      iconColor: '#FFC801',
      illustration: <WorkflowIllustration />,
    },
    {
      title: 'Smart Analytics',
      spanClass: 'md:col-span-4',
      description: 'Understand every action. Get deep insight into workflow speeds, success rates, and compute savings.',
      Icon: IconChartPie,
      iconColor: '#FF9932',
      illustration: <AnalyticsIllustration tick={tick} />,
    },
    {
      title: 'Voice Commands',
      spanClass: 'md:col-span-8',
      description: 'Control operations using advanced speech recognition. Simply say "build a daily sales summary reports workflow" to generate it.',
      Icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      iconColor: '#D9E8E2',
      illustration: <VoiceIllustration activeIndex={tick} />,
    },
    {
      title: 'Real-Time Monitoring',
      spanClass: 'md:col-span-6',
      description: 'Inspect execution steps, view data payloads, check API return statuses, and debug nodes live.',
      Icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      iconColor: '#EF4444',
      illustration: <MonitoringIllustration tick={tick} />,
    },
    {
      title: 'API Integrations',
      spanClass: 'md:col-span-6',
      description: 'Connect seamlessly with Salesforce, HubSpot, Stripe, PostgreSQL, Slack, AWS, and 1,200+ other SaaS systems.',
      Icon: IconLink,
      iconColor: '#FFC801',
      illustration: <APIIllustration />,
    },
    {
      title: 'Predictive Insights',
      spanClass: 'md:col-span-5',
      description: 'Harness forecasting algorithms to identify step failure risks and latency spikes before workflows bottleneck.',
      Icon: IconArrowTrending,
      iconColor: '#FF9932',
      illustration: <PredictiveIllustration pulseCount={pulseCount} />,
    },
    {
      title: 'Automated Reports',
      spanClass: 'md:col-span-7',
      description: 'Schedule customized operation briefings. Deliver beautiful data breakdowns to your email or Slack channel with PDF copies.',
      Icon: ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      iconColor: '#00D4FF',
      illustration: <ReportsIllustration pulseCount={pulseCount} />,
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-[#0D1224]/30 border-y border-border-card relative">
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#7B61FF] opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#FFC801] opacity-4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="badge-saffron inline-flex items-center space-x-2 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC801] animate-ping" />
            <span>PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="font-space-grotesk font-bold tracking-tight text-white mb-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Built for Enterprise Scale. <br />
            <span className="text-gradient-primary">Crafted for Simplicity.</span>
          </h2>
          <p className="text-secondary-text font-inter text-base md:text-lg">
            Empower your team with a complete automation stack. Everything connects seamlessly, scales on demand, and operates safely.
          </p>
        </div>

        {/* DESKTOP — Bento Grid */}
        <div className="hidden md:grid grid-cols-12 gap-6 select-none">
          {features.map((feature, index) => {
            const isActive = activeCardIndex === index;
            return (
              <div
                key={`bento-${index}`}
                onMouseEnter={() => setActiveCardIndex(index)}
                onClick={() => setActiveCardIndex(index)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveCardIndex(index); }}
                className={`relative group cursor-pointer rounded-[24px] border ${
                  isActive ? 'border-[#7B61FF]/40 bg-[#0D1224]' : 'border-border-card bg-surface-card'
                } p-6 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-hover hover:scale-[1.01] ${feature.spanClass}`}
                role="button"
                tabIndex={0}
                aria-label={`Inspect feature: ${feature.title}`}
              >
                {/* Hover glow overlay */}
                <div className={`absolute -inset-px bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-hover blur-sm pointer-events-none rounded-[24px] ${isActive ? 'opacity-10' : ''}`} />
                {/* Saffron glow on active */}
                {isActive && (
                  <div className="absolute -inset-px rounded-[24px] pointer-events-none" style={{ boxShadow: `0 0 30px rgba(255,200,1,0.06)` }} />
                )}
                {/* Dot grid texture */}
                <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-hover">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />
                </div>

                <div className="z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#050816] flex items-center justify-center mb-5 border border-border-card shadow-inner transition-all duration-hover group-hover:border-opacity-60" style={{ borderColor: isActive ? `${feature.iconColor}30` : undefined }}>
                      <feature.Icon className="w-6 h-6" style={{ color: feature.iconColor }} />
                    </div>
                    <h3 className="font-space-grotesk font-bold text-xl text-white mb-2 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-[#A8B2D1] text-sm leading-relaxed max-w-xl">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border-card/20 w-full">
                    {feature.illustration}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE — Accordion */}
        <div className="block md:hidden space-y-4">
          {features.map((feature, index) => {
            const isOpen = activeCardIndex === index;
            return (
              <div
                key={`accordion-${index}`}
                className={`border rounded-2xl overflow-hidden bg-surface-card transition-all duration-300 ${
                  isOpen ? 'border-[#7B61FF]/40 shadow-lg' : 'border-border-card'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveCardIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:bg-white/5"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${index}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#050816] flex items-center justify-center border border-border-card">
                      <feature.Icon className="w-4 h-4" style={{ color: feature.iconColor }} />
                    </div>
                    <span className="font-space-grotesk font-bold text-base text-white">{feature.title}</span>
                  </div>
                  {/* Official chevron SVG from provided assets */}
                  {isOpen
                    ? <IconChevronUp className="w-5 h-5 text-white" />
                    : <IconChevronDown className="w-5 h-5 text-secondary-text" />
                  }
                </button>

                <div
                  id={`accordion-content-${index}`}
                  className={`grid transition-all duration-accordion ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 border-t border-border-card/20 space-y-6">
                      <p className="font-inter text-sm text-[#A8B2D1] leading-relaxed">{feature.description}</p>
                      <div className="rounded-xl bg-[#050816]/50 p-4 flex items-center justify-center border border-border-card/50">
                        {feature.illustration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
