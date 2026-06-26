import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does Aether AI connect to my databases?',
      answer: 'Aether integrates securely using read-only roles, SSL encryption, and isolated cloud VPC tunnel connections. No database structural modifications or write privileges are required for simple monitoring, and all analytical interactions are sandboxed.'
    },
    {
      question: 'What language models does Aether use for reasoning?',
      answer: 'We utilize fine-tuned variants of Llama 3, Claude 3.5, and OpenAI GPT-4o, optimized for operations reasoning, intent classification, and formatting. Enterprise customers can connect their own endpoints or choose local deployments.'
    },
    {
      question: 'Is there a limit to how many integrations we can connect?',
      answer: 'No. Aether supports connecting unlimited SaaS platforms, database endpoints, custom APIs, and webhook links across all pricing tiers, including the Starter plan. Executions are only limited by your monthly volume cap.'
    },
    {
      question: 'How secure is our workflow data?',
      answer: 'Aether is SOC2 Type II certified, GDPR compliant, and HIPAA ready. All data is encrypted in transit using TLS 1.3 and at rest with AES-256. For teams with strict compliance needs, we offer virtual private clouds (VPC) and self-hosted instances.'
    }
  ];

  return (
    <section
      id="developers"
      className="py-24 md:py-32 bg-primary-bg relative overflow-hidden"
    >
      <div className="absolute top-[20%] left-[-15%] w-[40%] h-[40%] bg-gradient-primary opacity-5 blur-[125px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-space-grotesk font-bold tracking-tight text-white mb-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Frequently Asked Questions. <br />
            <span className="text-gradient-accent">Clear Answers.</span>
          </h2>
          <p className="text-secondary-text font-inter text-base md:text-lg">
            Have questions about integrations, billing, compliance, or model routing? We have compiled the answers.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4 select-none">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={`faq-${index}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#7B61FF]/40 bg-[#0D1224]' : 'border-border-card bg-surface-card'
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-white/5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-space-grotesk font-semibold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  {/* Chevron Icon */}
                  <svg
                    className={`w-5 h-5 text-secondary-text transform transition-transform duration-300 shrink-0 ml-4 ${
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

                {/* Animated Answer Body */}
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 border-t border-border-card/20">
                      <p className="font-inter text-sm sm:text-base text-[#A8B2D1] leading-relaxed">
                        {faq.answer}
                      </p>
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
