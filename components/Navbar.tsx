
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Programs', href: 'programs' },
    { label: 'Trainers', href: 'trainers' },
    { label: 'About', href: 'about' },
    { label: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const scrollToStart = () => {
    const element = document.getElementById('start-training');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass-panel h-16 py-0' : 'h-20 py-4 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt="The A2 Gym" className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-display font-bold uppercase tracking-widest text-white/70 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToStart}
              className="hidden md:block bg-primary hover:bg-red-700 transition-all btn-glow text-white text-xs font-display font-bold uppercase tracking-widest px-6 py-2.5 rounded-sm"
            >
              Start Training
            </button>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] md:hidden h-[100dvh]"
          >
            {/* Background Layers */}
            <div className="absolute inset-0 bg-black z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-rose-950/20 to-black z-0"></div>
            <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-0 flex flex-col p-5 sm:p-6 z-10 overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6 flex-shrink-0">
                <div className="flex items-center gap-2" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}>
                  <img src="/logo.png" alt="The A2 Gym" className="h-8 w-auto object-contain" />
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="size-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white">
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-2.5 mb-6">
                <p className="text-[9px] font-display font-bold uppercase tracking-widest text-white/20 mb-1">Navigation</p>
                {navLinks.map((item, idx) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    className="text-2xl font-display font-bold uppercase tracking-tight text-white/90 hover:text-primary transition-colors text-left flex items-center justify-between group py-1"
                  >
                    <span>{item.label}</span>
                    <span className="material-symbols-outlined text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xl">arrow_outward</span>
                  </motion.button>
                ))}
              </nav>

              {/* Contact Section */}
              <div className="mt-auto pt-5 border-t border-white/5 space-y-5 flex-shrink-0">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-[9px] font-display font-bold uppercase tracking-widest text-white/20 mb-1">Visit Us</p>
                    <p className="text-[11px] text-white/50 leading-relaxed font-light line-clamp-2">The A2 Gym (Nagra Toli)</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-[9px] font-display font-bold uppercase tracking-widest text-white/20 mb-1">Contact</p>
                    <p className="text-sm text-white/80 font-medium tracking-wide">6205449126</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <p className="text-[9px] font-display font-bold uppercase tracking-widest text-white/20 mb-1">Email</p>
                  <p className="text-sm text-white/80 font-medium tracking-wide">thea2gym.in@gmail.com</p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={scrollToStart}
                  className="w-full bg-primary hover:bg-red-700 transition-all btn-glow text-white text-xs font-display font-bold uppercase tracking-widest py-3.5 rounded-sm"
                >
                  Start Training
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
