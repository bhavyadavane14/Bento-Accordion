import React, { useEffect, useRef, useState } from 'react';

function WorkflowStep({ step, index, activeStep, setActiveStep }) {
  const stepRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveStep(index);
        }
      },
      {
        rootMargin: '-30% 0px -40% 0px', // Trigger when step is near the vertical center
        threshold: 0.2
      }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [index, setActiveStep]);

  const isActive = activeStep === index;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={stepRef}
      className={`relative flex flex-col md:flex-row items-center justify-between w-full min-h-[220px] transition-all duration-500 pb-16 md:pb-24 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
      }`}
    >
      {/* Node Bullet (Visual Centerpoint) */}
      <div className="absolute left-[30px] md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
        <div
          className={`w-10 h-10 rounded-full bg-[#050816] border-2 transition-all duration-300 flex items-center justify-center ${
            isActive
              ? 'border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.6)] scale-110'
              : 'border-border-card scale-90'
          }`}
        >
          <span className={`font-space-grotesk font-bold text-sm ${isActive ? 'text-[#00D4FF]' : 'text-[#7B859E]'}`}>
            {index + 1}
          </span>
        </div>
      </div>

      {/* Left side Card (Desktop only, alternating) */}
      <div className={`hidden md:block w-[45%] ${isEven ? 'order-1' : 'order-3 invisible pointer-events-none'}`}>
        {isEven && (
          <div className={`p-6 rounded-[24px] border border-border-card glass-panel relative overflow-hidden transition-all duration-300 hover:border-[#7B61FF]/30 hover:shadow-xl ${
            isActive ? 'shadow-[0_0_30px_rgba(109,94,249,0.15)] border-[#7B61FF]/40' : ''
          }`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-5 blur-2xl rounded-full" />
            <span className="font-space-grotesk text-[10px] tracking-wider text-[#7B859E] font-bold uppercase">
              {step.subtitle}
            </span>
            <h3 className="font-space-grotesk font-bold text-xl text-white mt-1 mb-3">
              {step.title}
            </h3>
            <p className="font-inter text-[#A8B2D1] text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        )}
      </div>

      {/* Middle spacing spacer for desktop */}
      <div className="hidden md:block w-[5%] order-2" />

      {/* Right side Card (Desktop only, alternating) */}
      <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'order-3 md:invisible md:pointer-events-none' : 'order-1'}`}>
        {(!isEven || true) && (
          <div className={`p-6 rounded-[24px] border border-border-card glass-panel relative overflow-hidden transition-all duration-300 hover:border-[#00D4FF]/30 hover:shadow-xl ${
            isActive ? 'shadow-[0_0_30px_rgba(0,212,255,0.15)] border-[#00D4FF]/40' : ''
          }`}>
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-accent opacity-5 blur-2xl rounded-full" />
            <span className="font-space-grotesk text-[10px] tracking-wider text-[#7B859E] font-bold uppercase">
              {step.subtitle}
            </span>
            <h3 className="font-space-grotesk font-bold text-xl text-white mt-1 mb-3">
              {step.title}
            </h3>
            <p className="font-inter text-[#A8B2D1] text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WorkflowDemo() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Connect Apps',
      subtitle: 'STEP 1 // DATA INTAKE',
      description: 'Hook up your workspace apps in seconds. Authenticate Stripe, Slack, Salesforce, databases, and APIs without coding or private keys. Aether synchronizes schema formats and endpoints automatically.'
    },
    {
      title: 'Build Workflow',
      subtitle: 'STEP 2 // ORCHESTRATION',
      description: 'Define your conditional filters, parallel branches, and action delays on our drag-and-drop glassmorphic builder canvas. Add automated decision trees for handling exceptions dynamically.'
    },
    {
      title: 'AI Analysis',
      subtitle: 'STEP 3 // INTELLIGENT DEBATE',
      description: 'Our cognitive reasoning engines analyze raw input files, support ticket topics, database changes, and conversational intent, creating structured summaries and decisions.'
    },
    {
      title: 'Automation Executes',
      subtitle: 'STEP 4 // INSTANT RESPONSE',
      description: 'Watch tasks fire instantly. Aether notifies team members, pushes logs to cloud storages, processes invoices, opens Jira issues, and updates customer portals with complete audit logging.'
    },
    {
      title: 'Generate Insights',
      subtitle: 'STEP 5 // CONTINUOUS LEARNING',
      description: 'Retrieve real-time dashboards detailing computed cost savings, employee hours reclaimed, operations health, and automated summaries, compiled to PDF briefing packages.'
    }
  ];

  return (
    <section
      id="solutions"
      className="py-24 md:py-32 bg-primary-bg relative overflow-hidden"
    >
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-[-15%] w-[40%] h-[40%] rounded-full bg-gradient-primary opacity-[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-[-15%] w-[40%] h-[40%] rounded-full bg-gradient-accent opacity-[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="font-space-grotesk font-bold tracking-tight text-white mb-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
            How Aether Works. <br />
            <span className="text-gradient-accent">In Real Time.</span>
          </h2>
          <p className="text-secondary-text font-inter text-base md:text-lg">
            Follow the seamless path from connection setup to automated executive summary.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical connection track line */}
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-24 w-[2px] bg-border-card transform -translate-x-1/2 pointer-events-none z-0">
            {/* Scroll-animated indicator overlay */}
            <div
              className="absolute top-0 w-full bg-gradient-to-b from-[#00D4FF] via-[#7B61FF] to-[#4F46E5] rounded-full transition-all duration-500"
              style={{
                height: `${(activeStep / (steps.length - 1)) * 100}%`,
                boxShadow: '0 0 15px rgba(0, 212, 255, 0.8)'
              }}
            />
          </div>

          {/* Rendering individual steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <WorkflowStep
                key={`step-${index}`}
                step={step}
                index={index}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
