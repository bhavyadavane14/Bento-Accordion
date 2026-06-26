import React from 'react';

export default function Trust() {
  const logos = [
    {
      name: 'Google',
      svg: (
        <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-hover text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.102 15.428 1 12.24 1 6.02 1 1 6.02 1 12s5.02 11 11.24 11c6.5 0 10.82-4.57 10.82-11 0-.74-.08-1.305-.18-1.715H12.24z"/>
        </svg>
      )
    },
    {
      name: 'Microsoft',
      svg: (
        <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-hover text-white fill-current" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
        </svg>
      )
    },
    {
      name: 'Amazon',
      svg: (
        <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-hover text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.418 13.914c-1.385.805-3.327 1.258-4.786 1.258-2.28 0-3.666-.995-3.666-2.58 0-2.348 2.29-3.23 6.13-3.23.633 0 1.58.057 2.322.124v1.074c-.035 1.83-1.077 2.92-2.88 2.92-1.042 0-1.897-.47-2.072-1.04H8.745c.19 1.242 1.39 2.057 3.326 2.057 2.28 0 3.992-1.282 3.992-3.792v-3.79c0-1.83-1.267-2.6-3.843-2.6-3.042 0-4.887 1.514-4.887 3.86 0 1.242.69 2.012 1.535 2.012.632 0 1.058-.396 1.163-1.006h1.724c-.16 1.34-1.285 2.242-2.887 2.242-1.83 0-3.255-1.34-3.255-3.418 0-3.328 2.766-5.006 6.643-5.006 3.978 0 5.626 1.39 5.626 4.125v4.326zm8.17 6.47c-2.324 1.815-5.918 2.87-8.91 2.87-4.52 0-8.6-2.128-11.455-5.594l1.39-1.085c2.474 3.018 6.002 4.886 9.99 4.886 2.63 0 5.707-.883 7.747-2.436l1.238 1.36zm-1.847-.79L20.66 18.24c-.3.333-.746.103-.54-.266l2.126-3.805c.184-.33.565-.25.598.136l.24 3.12c.033.43-.377.585-.644.298l-.698-.124z" />
        </svg>
      )
    },
    {
      name: 'Spotify',
      svg: (
        <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-hover text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.67-.138-.746-.473-.075-.335.137-.67.472-.745 3.856-.88 7.15-.5 9.82 1.133.294.18.387.563.207.86zm1.225-2.72c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.078-1.182-.413.125-.848-.107-.973-.52-.125-.413.107-.847.52-.973 3.67-1.114 8.24-.57 11.345 1.34.368.228.488.708.26 1.075zm.105-2.82c-3.26-1.937-8.643-2.12-11.758-1.173-.5.152-1.025-.133-1.177-.633-.15-.5.133-1.025.633-1.177 3.616-1.098 9.544-.888 13.3 1.343.45.267.6.845.333 1.3-.266.452-.844.6-1.298.336z"/>
        </svg>
      )
    },
    {
      name: 'Netflix',
      svg: (
        <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-hover text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.597 24L4.7 23.95V0L5.75.05L18.15 23.85V0h1.15v24h-.95L6.05.2v23.8z" />
        </svg>
      )
    },
    {
      name: 'Adobe',
      svg: (
        <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity duration-hover text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.516 3H1v20h4.508v-5.275h5.056L14.733 23H23V3h-8.484zm-.316 10.669H5.508V8.636h3.692zM18.492 18.2l-3.32-6.529h3.32z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 border-y border-border-card bg-[#050816] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Caption */}
        <p className="font-inter text-xs font-semibold uppercase tracking-widest text-[#7B859E] mb-8">
          Trusted by 25,000+ companies worldwide.
        </p>

        {/* Logo Slider Track */}
        <div className="relative w-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {/* Double scrolling marquee for continuous animation */}
          <div className="flex w-max animate-marquee space-x-16 md:space-x-24 pr-16 md:pr-24 py-2">
            {/* First Set */}
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex items-center space-x-2 grayscale brightness-200">
                {logo.svg}
                <span className="font-space-grotesk font-semibold text-lg text-white/50 tracking-tight select-none">
                  {logo.name}
                </span>
              </div>
            ))}

            {/* Duplicate Set for smooth infinite loop */}
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex items-center space-x-2 grayscale brightness-200">
                {logo.svg}
                <span className="font-space-grotesk font-semibold text-lg text-white/50 tracking-tight select-none">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
