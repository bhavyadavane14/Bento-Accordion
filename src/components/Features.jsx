import React, { useState } from 'react';

export default function Features() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const features = [
    {
      title: 'Autonomous AI Agents',
      spanClass: 'md:col-span-8',
      description: 'Deploy self-learning AI agents that analyze logs, manage support queues, route messages, and execute operations with cognitive reasoning.',
      icon: (
        <svg className="w-6 h-6 text-[#7B61FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      illustration: (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center">
          <div className="absolute w-24 h-24 rounded-full border border-dashed border-[#7B61FF]/40 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute w-16 h-16 rounded-full border border-dashed border-[#00D4FF]/30 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />
          <div className="relative w-10 h-10 rounded-xl bg-[#0D1224] border border-border-card flex items-center justify-center shadow-lg">
            <span className="w-3 h-3 rounded-full bg-[#00D4FF] animate-ping" />
          </div>
          {/* Orbiting points */}
          <div className="absolute w-3 h-3 rounded-full bg-[#7B61FF] top-8 left-12 animate-pulse" />
          <div className="absolute w-2 h-2 rounded-full bg-[#5EEAD4] bottom-6 right-16 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )
    },
    {
      title: 'Workflow Builder',
      spanClass: 'md:col-span-4',
      description: 'Connect triggers and operations on a clean, visual glassmorphic canvas. Zero code, endless scalability.',
      icon: (
        <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      illustration: (
        <div className="relative w-full h-full min-h-[140px] flex flex-col justify-center items-center space-y-4">
          <div className="flex items-center space-x-6">
            <div className="px-3 py-1.5 rounded-lg border border-border-card bg-surface-card text-[10px] text-white">Trigger Event</div>
            <svg className="w-5 h-5 text-[#00D4FF] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="px-3 py-1.5 rounded-lg border border-[#7B61FF]/40 bg-gradient-primary/10 text-[10px] text-white">AI Automation</div>
          </div>
        </div>
      )
    },
    {
      title: 'Smart Analytics',
      spanClass: 'md:col-span-4',
      description: 'Understand every action. Get deep insight into workflow speeds, success rates, and compute savings.',
      icon: (
        <svg className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
        </svg>
      ),
      illustration: (
        <div className="relative w-full h-full min-h-[140px] flex items-end justify-center space-x-3 px-6">
          <div className="w-full bg-[#0D1224] border border-border-card rounded-t-lg h-12 relative overflow-hidden">
            <div className="absolute bottom-0 inset-x-0 bg-gradient-primary h-[40%] animate-pulse" />
          </div>
          <div className="w-full bg-[#0D1224] border border-border-card rounded-t-lg h-24 relative overflow-hidden">
            <div className="absolute bottom-0 inset-x-0 bg-gradient-accent h-[70%] animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
          <div className="w-full bg-[#0D1224] border border-[#10B981]/30 rounded-t-lg h-32 relative overflow-hidden">
            <div className="absolute bottom-0 inset-x-0 bg-success/20 h-[90%] animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
      )
    },
    {
      title: 'Voice Commands',
      spanClass: 'md:col-span-8',
      description: 'Control operations using advanced speech recognition. Simply say "build a daily sales summary reports workflow" to generate it.',
      icon: (
        <svg className="w-6 h-6 text-[#5EEAD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      illustration: (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center space-x-1.5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
            <div
              key={bar}
              className="w-1.5 rounded-full bg-gradient-accent animate-pulse-slow"
              style={{
                height: `${20 + Math.sin(bar + activeCardIndex) * 35}px`,
                animationDelay: `${bar * 0.15}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>
      )
    },
    {
      title: 'Real-Time Monitoring',
      spanClass: 'md:col-span-6',
      description: 'Inspect execution steps, view data payloads, check API return statuses, and debug nodes live.',
      icon: (
        <svg className="w-6 h-6 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      illustration: (
        <div className="relative w-full h-full min-h-[140px] flex flex-col justify-center px-6">
          <div className="rounded-xl border border-border-card bg-[#050816] p-3 font-mono text-[9px] text-[#A8B2D1] space-y-1 shadow-inner overflow-hidden max-h-[110px]">
            <div className="flex justify-between border-b border-white/5 pb-1 text-white">
              <span>NODE_ID: tri_09</span>
              <span className="text-success">SUCCESS</span>
            </div>
            <div className="text-white/60">&gt; Trigger received from Slack Webhook</div>
            <div className="text-[#00D4FF]">&gt; Extracted message: "Deploy production"</div>
            <div className="text-success">&gt; Invoking agent coordinator ... [DONE]</div>
          </div>
        </div>
      )
    },
    {
      title: 'API Integrations',
      spanClass: 'md:col-span-6',
      description: 'Connect seamlessly with Salesforce, HubSpot, Stripe, PostgreSQL, Slack, AWS, and 1,200+ other SaaS systems.',
      icon: (
        <svg className="w-6 h-6 text-[#FBBF24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v8a2 2 0 11-4 0V4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8a2 2 0 114 0v6a2 2 0 11-4 0V8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11a2 2 0 114 0v3a2 2 0 11-4 0v-3z" />
        </svg>
      ),
      illustration: (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center space-x-4">
          <div className="w-10 h-10 rounded-xl border border-border-card bg-[#0D1224] flex items-center justify-center font-bold text-xs text-white shadow">
            API
          </div>
          <div className="w-4 h-0.5 bg-gradient-accent animate-pulse" />
          <div className="w-10 h-10 rounded-xl border border-border-card bg-[#0D1224] flex items-center justify-center font-bold text-xs text-white shadow">
            SYS
          </div>
          <div className="w-4 h-0.5 bg-gradient-primary animate-pulse" />
          <div className="w-10 h-10 rounded-xl border border-border-card bg-[#0D1224] flex items-center justify-center font-bold text-xs text-white shadow">
            APP
          </div>
        </div>
      )
    },
    {
      title: 'Predictive Insights',
      spanClass: 'md:col-span-5',
      description: 'Harness forecasting algorithms to identify step failure risks and latency spikes before workflows bottleneck.',
      icon: (
        <svg className="w-6 h-6 text-[#7B61FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      illustration: (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center px-6">
          <svg className="w-full h-16 overflow-visible" viewBox="0 0 100 40">
            <path d="M 0,35 Q 25,25 50,15 T 100,5" fill="none" stroke="rgba(123, 97, 255, 0.2)" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M 0,35 Q 25,25 50,15 T 100,5" fill="none" stroke="#7B61FF" strokeWidth="2" className="animate-pulse" />
            <circle cx="50" cy="15" r="4" fill="#00D4FF" className="animate-ping" />
            <circle cx="50" cy="15" r="3" fill="#00D4FF" />
            <text x="56" y="18" fill="#A8B2D1" fontSize="6" fontFamily="monospace">PREDICTION: OK</text>
          </svg>
        </div>
      )
    },
    {
      title: 'Automated Reports',
      spanClass: 'md:col-span-7',
      description: 'Schedule customized operation briefings. Deliver beautiful data breakdowns to your email or Slack channel with PDF copies.',
      icon: (
        <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      illustration: (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center">
          <div className="w-32 h-20 rounded-xl border border-border-card bg-[#0D1224]/80 p-2.5 space-y-2 shadow-xl relative overflow-hidden">
            <div className="h-2 w-12 bg-white/20 rounded" />
            <div className="h-1.5 w-full bg-white/10 rounded" />
            <div className="h-1.5 w-[85%] bg-white/10 rounded" />
            <div className="flex justify-between items-center pt-2">
              <div className="h-3 w-8 bg-[#00D4FF]/20 rounded" />
              <div className="h-3 w-10 bg-success/20 rounded" />
            </div>
            {/* Pulsing indicator */}
            <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-success animate-ping" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-[#0D1224]/30 border-y border-border-card relative"
    >
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#7B61FF] opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#00D4FF] opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-space-grotesk font-bold tracking-tight text-white mb-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Built for Enterprise Scale. <br />
            <span className="text-gradient-primary">Crafted for Simplicity.</span>
          </h2>
          <p className="text-secondary-text font-inter text-base md:text-lg">
            Empower your team with a complete automation stack. Everything connects seamlessly, scales on demand, and operates safely.
          </p>
        </div>

        {/* ==========================================
            DESKTOP LAYOUT (Bento Grid)
            Visible on md: (768px) and above
           ========================================== */}
        <div className="hidden md:grid grid-cols-12 gap-6 select-none">
          {features.map((feature, index) => {
            const isActive = activeCardIndex === index;
            return (
              <div
                key={`bento-${index}`}
                onMouseEnter={() => setActiveCardIndex(index)}
                onClick={() => setActiveCardIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveCardIndex(index);
                  }
                }}
                className={`relative group cursor-pointer rounded-[24px] border ${
                  isActive ? 'border-[#7B61FF]/40 bg-[#0D1224]' : 'border-border-card bg-surface-card'
                } p-6 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-hover hover:scale-[1.01] ${feature.spanClass}`}
                role="button"
                tabIndex={0}
                aria-label={`Inspect feature: ${feature.title}`}
              >
                {/* Glow effect on hover/active */}
                <div className={`absolute -inset-px bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-hover blur-sm pointer-events-none rounded-[24px] ${isActive ? 'opacity-10' : ''}`} />

                {/* Interactive background vector */}
                <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-hover">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />
                </div>

                <div className="z-10 flex flex-col justify-between h-full">
                  {/* Top content */}
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#050816] flex items-center justify-center mb-6 border border-border-card shadow-inner">
                      {feature.icon}
                    </div>
                    <h3 className="font-space-grotesk font-bold text-xl text-white mb-2 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-[#A8B2D1] text-sm leading-relaxed max-w-xl">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom illustration content */}
                  <div className="mt-8 pt-4 border-t border-border-card/20 w-full">
                    {feature.illustration}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==========================================
            MOBILE LAYOUT (Accordion)
            Visible on mobile (< 768px)
           ========================================== */}
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
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => setActiveCardIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:bg-white/5"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${index}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#050816] flex items-center justify-center border border-border-card">
                      {feature.icon}
                    </div>
                    <span className="font-space-grotesk font-bold text-base text-white">
                      {feature.title}
                    </span>
                  </div>
                  {/* Rotating Chevron */}
                  <svg
                    className={`w-5 h-5 text-secondary-text transform transition-transform duration-accordion ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Animated Body Content */}
                <div
                  id={`accordion-content-${index}`}
                  className={`grid transition-all duration-accordion ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 border-t border-border-card/20 space-y-6">
                      <p className="font-inter text-sm text-[#A8B2D1] leading-relaxed">
                        {feature.description}
                      </p>
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
