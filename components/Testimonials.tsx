
import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "Elite Fitness architected a completely new engine for my marathon threshold.",
    author: "Jessica M.",
    role: "Marathon Runner",
    rating: 5,
    img: "https://images.unsplash.com/photo-1548690312-e3b507d17a12?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    quote: "The only place that treats average Joes like elite pros with high-end tech.",
    author: "Mark T.",
    role: "Powerlifter",
    rating: 5,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    quote: "24/7 access to pro-grade gear changed my entire training routine.",
    author: "Elena R.",
    role: "Athlete",
    rating: 5,
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    quote: "Scientific approach to hypertrophy that actually delivers results fast.",
    author: "David K.",
    role: "Bodybuilder",
    rating: 5,
    img: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    quote: "The recovery suite is worth the membership alone. Cryotherapy is a game changer.",
    author: "Sarah L.",
    role: "Triathlete",
    rating: 5,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-[#0c0c0c]">
      <div className="max-w-[100vw] relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-5xl font-display font-black uppercase tracking-tighter mb-1 md:mb-2">
              Athlete <span className="text-primary text-glow">Debrief</span>
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-white/40 font-body text-xs uppercase tracking-[0.2em]">Verified Results</span>
              <div className="h-px w-12 bg-primary/30"></div>
            </div>
          </motion.div>
        </div>

        {/* Marquee Slider */}
        <div className="relative flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-4 items-stretch whitespace-nowrap py-4 group-hover:[animation-play-state:paused]"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div
                key={idx}
                className="w-[260px] sm:w-[300px] flex-shrink-0 glass-panel border border-white/5 p-4 sm:p-6 rounded-sm bg-background-accent/10 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-primary text-[12px] fill-current">star</span>
                  ))}
                </div>

                <p className="text-sm font-body text-white/80 mb-6 whitespace-normal leading-relaxed italic line-clamp-3">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="size-8 rounded-full bg-cover bg-center ring-1 ring-white/10"
                    style={{ backgroundImage: `url("${t.img}")` }}
                  ></div>
                  <div>
                    <h4 className="text-white font-display font-bold uppercase text-[11px] tracking-widest flex items-center gap-1.5">
                      {t.author}
                      <span className="material-symbols-outlined text-primary text-[10px]">verified</span>
                    </h4>
                    <p className="text-white/30 text-[9px] font-display font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0c0c0c] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0c0c0c] to-transparent z-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
