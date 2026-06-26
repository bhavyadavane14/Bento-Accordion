import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Aether AI completely restructured our operations pipeline. We automated 85% of our customer ticket routing and sync task triggers overnight. The Bento builder is incredibly intuitive.",
      name: 'Elena Rostova',
      role: 'VP of Platform Operations',
      company: 'Logix Cloud',
      rating: 5,
      avatarInitials: 'ER',
      glowColor: 'from-[#6D5EF9]/20 to-transparent'
    },
    {
      quote: "The state persistence between bento grid and mobile accordion layouts is pure frontend magic. But visual flair aside, the core AI agent logic saved our engineering team over 40 hours a week.",
      name: 'Marcus Chen',
      role: 'Director of Automation',
      company: 'Vortex Media',
      rating: 5,
      avatarInitials: 'MC',
      glowColor: 'from-[#00D4FF]/20 to-transparent'
    },
    {
      quote: "Deploying custom Python agents used to take weeks of infrastructure setup. With Aether, we configure endpoints, hook up databases, and generate automated PDF summaries in minutes.",
      name: 'Sophia Gallagher',
      role: 'Lead Devops Architect',
      company: 'Aura Fintech',
      rating: 5,
      avatarInitials: 'SG',
      glowColor: 'from-[#5EEAD4]/20 to-transparent'
    }
  ];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-primary-bg relative overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute top-[20%] right-[-15%] w-[40%] h-[40%] bg-gradient-primary opacity-5 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[20%] left-[-15%] w-[40%] h-[40%] bg-gradient-accent opacity-5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-space-grotesk font-bold tracking-tight text-white mb-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Approved by Creators. <br />
            <span className="text-gradient-primary">Trusted at Scale.</span>
          </h2>
          <p className="text-secondary-text font-inter text-base md:text-lg">
            Hear from operations directors, system architects, and platform managers driving business automation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 select-none">
          {testimonials.map((t, index) => (
            <div
              key={`testimonial-${index}`}
              className="relative rounded-[24px] border border-border-card bg-surface-card p-8 flex flex-col justify-between h-full transition-all duration-hover hover:scale-[1.02] hover:border-[#7B61FF]/30 hover:shadow-[0_15px_30px_-10px_rgba(109,94,249,0.2)] group"
            >
              {/* Inner ambient glow */}
              <div className={`absolute -inset-px rounded-[24px] bg-gradient-to-br ${t.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-hover blur pointer-events-none`} />

              <div>
                {/* SVG Rating Stars */}
                <div
                  className="flex items-center space-x-1 mb-6"
                  role="img"
                  aria-label={`Rated ${t.rating} out of 5 stars`}
                >
                  {[...Array(t.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-warning"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="font-inter text-secondary-text text-sm leading-relaxed mb-8 italic">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Reviewer Meta */}
              <div className="flex items-center space-x-4 border-t border-border-card/20 pt-6">
                {/* Avatar Icon */}
                <div
                  className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-space-grotesk font-bold text-xs text-white shadow-inner"
                  role="img"
                  aria-label={`${t.name} avatar`}
                  aria-hidden="true"
                >
                  {t.avatarInitials}
                </div>
                <div>
                  <cite className="not-italic font-space-grotesk font-bold text-sm text-white block">
                    {t.name}
                  </cite>
                  <span className="font-inter text-[11px] text-[#7B859E]">
                    {t.role}, <span className="text-[#00D4FF]">{t.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
