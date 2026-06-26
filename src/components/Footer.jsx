import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="resources"
      className="bg-[#050816] border-t border-border-card pt-20 pb-12 relative overflow-hidden"
    >
      {/* Background visual glows */}
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-gradient-primary opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-accent opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-border-card/30 select-none">
        {/* Left Side: Brand and Newsletter */}
        <div className="md:col-span-5 flex flex-col items-start space-y-6 text-left">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0.5 bg-[#050816] rounded-md flex items-center justify-center">
                <span className="font-space-grotesk font-bold text-sm text-gradient-accent">Æ</span>
              </div>
            </div>
            <span className="font-space-grotesk font-bold text-xl tracking-tight text-white group-hover:text-gradient-accent transition-colors duration-hover">
              Aether AI
            </span>
          </a>
          <p className="text-secondary-text font-inter text-sm max-w-sm leading-relaxed">
            Automate Everything. Scale Beyond Limits. <br />
            Enterprise-grade AI orchestration platforms that connect your apps and supercharge operations.
          </p>

          {/* Newsletter Form */}
          <div className="w-full max-w-sm pt-2">
            <h4 className="font-space-grotesk font-bold text-sm text-white mb-2 uppercase tracking-widest">
              Subscribe to Changelog
            </h4>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-xl border border-border-card bg-surface-card text-white text-xs font-inter focus:outline-none focus:border-[#00D4FF]/60 placeholder-muted-text"
                disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-gradient-primary text-white text-xs font-inter font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-hover focus:outline-none active:scale-95 shrink-0"
                disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              >
                {subscribeStatus === 'idle' && 'Subscribe'}
                {subscribeStatus === 'loading' && 'Syncing...'}
                {subscribeStatus === 'success' && 'Subscribed!'}
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="text-success font-inter text-[11px] mt-2 flex items-center">
                <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Changelog subscription active! Thank you.
              </p>
            )}
          </div>
        </div>

        {/* Right Side: Columns Links */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Column 1: Company */}
          <div className="flex flex-col space-y-4 text-left">
            <h4 className="font-space-grotesk font-bold text-xs text-white uppercase tracking-widest">
              Company
            </h4>
            <div className="flex flex-col space-y-2.5">
              {['About Us', 'Blog', 'Careers', 'Press Kit', 'Trust Center'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-inter text-xs text-secondary-text hover:text-white transition-colors duration-hover"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col space-y-4 text-left">
            <h4 className="font-space-grotesk font-bold text-xs text-white uppercase tracking-widest">
              Resources
            </h4>
            <div className="flex flex-col space-y-2.5">
              {['Documentation', 'Changelog', 'System Status', 'Community', 'Help Center'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-inter text-xs text-secondary-text hover:text-white transition-colors duration-hover"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col space-y-4 text-left col-span-2 sm:col-span-1">
            <h4 className="font-space-grotesk font-bold text-xs text-white uppercase tracking-widest">
              Legal
            </h4>
            <div className="flex flex-col space-y-2.5">
              {['Terms of Service', 'Privacy Policy', 'Security Settings', 'DPA Compliance'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-inter text-xs text-secondary-text hover:text-white transition-colors duration-hover"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Social Icons & Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
        <span className="font-inter text-xs text-muted-text">
          &copy; {currentYear} Aether AI Operations, Inc. All rights reserved.
        </span>

        {/* Social SVGs */}
        <div className="flex items-center space-x-6">
          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aether AI on Twitter"
            className="text-secondary-text hover:text-[#00D4FF] transition-colors duration-hover"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aether AI on GitHub"
            className="text-secondary-text hover:text-[#7B61FF] transition-colors duration-hover"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          {/* Discord */}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aether AI on Discord"
            className="text-secondary-text hover:text-[#5EEAD4] transition-colors duration-hover"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
