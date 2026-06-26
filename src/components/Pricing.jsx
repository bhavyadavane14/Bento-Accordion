import React, { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'
  const [currency, setCurrency] = useState('USD'); // 'USD' | 'EUR' | 'GBP' | 'JPY'

  // Currencies metadata
  const currencies = {
    USD: { symbol: '$', rate: 1.0, precision: 0 },
    EUR: { symbol: '€', rate: 0.92, precision: 0 },
    GBP: { symbol: '£', rate: 0.78, precision: 0 },
    JPY: { symbol: '¥', rate: 155.0, precision: 0 }
  };

  // Base pricing values (USD monthly base rates)
  const plans = [
    {
      name: 'Starter',
      basePrice: 19,
      description: 'Ideal for early-stage startups and automated operations experiments.',
      features: [
        '3 Autonomous AI Agents',
        '10,000 monthly executions',
        'Standard integrations (Slack, Sheets)',
        'Email Support (24h response)',
        'Basic reporting dashboards'
      ],
      cta: 'Start Free Trial',
      popular: false,
      glowColor: 'rgba(0, 212, 255, 0.4)'
    },
    {
      name: 'Pro',
      basePrice: 79,
      description: 'Perfect for growing businesses scale-testing workflow operations.',
      features: [
        '15 Autonomous AI Agents',
        '100,000 monthly executions',
        'Premium integrations (Salesforce, Stripe)',
        'Priority Slack & Support (2h response)',
        'Advanced Analytics & Cognition graphs',
        'API & Custom webhook access'
      ],
      cta: 'Upgrade to Pro',
      popular: true,
      glowColor: 'rgba(123, 97, 255, 0.4)'
    },
    {
      name: 'Enterprise',
      basePrice: 299,
      description: 'Engineered for high-volume enterprise pipelines demanding safety.',
      features: [
        'Unlimited AI Agents',
        'Unlimited monthly executions',
        'Custom enterprise connections',
        'Dedicated Solutions Architect support',
        'SOC2 compliance reporting',
        '99.99% execution uptime SLA',
        'Self-hosted / Private cloud deployment'
      ],
      cta: 'Contact Sales',
      popular: false,
      glowColor: 'rgba(94, 234, 212, 0.4)'
    }
  ];

  // Dynamic cost calculator
  const calculatePrice = (basePrice) => {
    const isAnnual = billingCycle === 'annual';
    const discountFactor = isAnnual ? 0.8 : 1.0; // 20% discount for annual
    const rate = currencies[currency].rate;
    const rawCost = basePrice * rate * discountFactor;
    return Math.round(rawCost);
  };

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 bg-[#0D1224]/30 border-y border-border-card relative"
    >
      {/* Background blurs */}
      <div className="absolute top-[30%] left-[-15%] w-[50%] h-[50%] bg-[#7B61FF] opacity-5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] bg-[#00D4FF] opacity-5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-space-grotesk font-bold tracking-tight text-white mb-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Flexible Plans for <br />
            <span className="text-gradient-primary">Every Stage of Growth.</span>
          </h2>
          <p className="text-secondary-text font-inter text-base md:text-lg">
            Choose the computing capability that suits your business. Toggle currencies or save with annual billing.
          </p>
        </div>

        {/* Controls: Billing cycle toggle and currency selector */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          {/* Monthly/Annual billing switcher */}
          <div className="inline-flex items-center p-1.5 rounded-2xl border border-border-card bg-[#050816] relative select-none">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs font-semibold font-inter transition-all duration-hover focus:outline-none ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-primary text-white shadow-md'
                  : 'text-secondary-text hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-xl text-xs font-semibold font-inter transition-all duration-hover focus:outline-none flex items-center space-x-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-primary text-white shadow-md'
                  : 'text-secondary-text hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded-md bg-[#5EEAD4] text-[#050816] text-[8px] font-bold tracking-wider">
                -20%
              </span>
            </button>
          </div>

          {/* Currency selection dropdown */}
          <div className="flex items-center space-x-3">
            <span className="text-xs font-inter text-[#7B859E] uppercase tracking-wider font-semibold">
              Currency:
            </span>
            <div className="relative inline-block text-left">
              <select
                aria-label="Select pricing currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="block w-28 px-4 py-2 text-xs font-semibold font-inter text-white bg-[#050816] border border-border-card rounded-xl appearance-none focus:outline-none focus:border-[#7B61FF]/60 cursor-pointer"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
              {/* Custom SVG dropdown chevron */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-secondary-text">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch select-none">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            const currencyMeta = currencies[currency];
            const displayPrice = calculatePrice(plan.basePrice);

            return (
              <div
                key={`plan-${index}`}
                className={`relative rounded-[24px] border glass-panel p-8 flex flex-col justify-between transition-all duration-hover hover:scale-[1.02] ${
                  isPopular
                    ? 'border-[#7B61FF]/50 bg-[#0D1224] shadow-[0_0_40px_rgba(123,97,255,0.15)]'
                    : 'border-border-card bg-surface-card'
                }`}
              >
                {/* Visual Glow Layer */}
                <div
                  className="absolute -inset-px rounded-[24px] pointer-events-none opacity-0 hover:opacity-10 transition-opacity duration-hover blur"
                  style={{ background: `radial-gradient(circle at center, ${plan.glowColor} 0%, transparent 70%)` }}
                />

                {isPopular && (
                  <div className="absolute top-0 right-8 transform -translate-y-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-primary text-white text-[10px] font-space-grotesk font-bold uppercase tracking-widest shadow-md">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-space-grotesk font-bold text-2xl text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-inter text-[#A8B2D1] text-xs leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline space-x-1 mb-8">
                    <span className="font-space-grotesk text-4xl sm:text-5xl font-bold text-white">
                      {currencyMeta.symbol}
                      {displayPrice.toLocaleString()}
                    </span>
                    <span className="font-inter text-xs text-[#7B859E]">
                      / month
                    </span>
                  </div>

                  <hr className="border-border-card/30 mb-8" />

                  {/* Feature Checklists */}
                  <ul className="space-y-4 mb-10 text-left">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-3 text-sm font-inter text-[#A8B2D1]">
                        <svg className="w-5 h-5 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <a
                  href="#pricing"
                  className={`w-full py-4 rounded-xl font-inter font-bold text-sm text-center tracking-wide transition-all duration-hover focus:outline-none ${
                    isPopular
                      ? 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98]'
                      : 'border border-border-card bg-surface-card hover:bg-white/10 hover:border-white/20 text-white active:scale-[0.98]'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Enterprise Notice */}
        <p className="mt-12 text-[#7B859E] font-inter text-xs text-center">
          * Prices shown in selected currencies are based on real-time conversions and include annual billing discounts. Need an on-premise SLA deployment plan?{' '}
          <a href="#contact" className="text-[#00D4FF] hover:underline">
            Contact Aether Solutions
          </a>
        </p>
      </div>
    </section>
  );
}
