import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 pt-12 md:pt-16 overflow-hidden">

      {/* Background Gradient Spot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-12 md:mb-16">

          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-black font-bold text-lg">bolt</span>
              </div>
              <h2 className="text-2xl font-display font-bold tracking-tighter text-white uppercase">The A2 Gym</h2>
            </div>
            <p className="text-neutral-400 text-base md:text-lg max-w-md leading-relaxed font-light">
              We architect high-performance human machines. The premier destination for athletes who demand scientific precision in every rep.
            </p>

            {/* UPDATED: Social Icons (SVGs) */}
            <div className="flex gap-4 mt-4">

              {/* Instagram */}
              <a href="#" className="group relative h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="#" className="group relative h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:scale-110 transition-transform">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="group relative h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="group relative h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>

            </div>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col justify-center">
            <h3 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-4 md:mb-6">Join the Inner Circle</h3>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center sm:border-b sm:border-white/20 focus-within:border-primary transition-colors sm:pb-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-white placeholder:text-white/30 text-base md:text-lg focus:outline-none py-3 sm:py-2 font-light border-b border-white/20 sm:border-0"
                />
                <button className="w-full sm:w-auto text-sm font-bold uppercase tracking-widest bg-primary sm:bg-transparent text-white sm:text-primary hover:text-white transition-colors flex items-center justify-center gap-2 py-3 sm:py-0 rounded-sm sm:rounded-none">
                  Subscribe
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
              <p className="text-white/20 text-xs mt-3 md:mt-4">By subscribing you agree to our Privacy Policy.</p>
            </form>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-12 border-t border-white/5 pt-8 md:pt-10">

          {/* Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              {['Hypertrophy', 'Strength', 'Athletic Performance', 'Recovery'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 text-primary">•</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              {['About Us', 'Careers', 'The Lab', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 text-primary">•</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              {['Privacy Policy', 'Terms of Service', 'Cookies', 'Disclaimer'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Back to Top */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="hidden md:block"></div> {/* Spacer */}
            <button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-2 text-white/40 hover:text-primary transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">Back to Top</span>
              <div className="h-12 w-12 border border-white/10 rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <span className="material-symbols-outlined transform group-hover:-translate-y-1 transition-transform">arrow_upward</span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Section: Giant Typography */}
        <div className="border-t border-white/10 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">© {currentYear}The A2 Gym Inc.</p>
          <div className="flex gap-6">
            <span className="text-neutral-600 text-xs uppercase tracking-widest">Designed for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;