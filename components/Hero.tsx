import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  // Parallax effect for the background image
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center pt-24 md:pt-28 pb-16 px-4 md:px-8 overflow-hidden bg-black">

      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1518]/70 via-black to-black z-10"></div>

        {/* Parallax Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop")',
            y: backgroundY
          }}
          className="w-full h-full bg-cover bg-center mix-blend-overlay"
        ></motion.div>
      </div>

      {/* Radial Glow Top Right */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent opacity-60 z-0"></div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-[1200px] w-full z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-8 mt-4">

        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left flex flex-col gap-5 lg:items-start items-center"
        >
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white">
            RUN <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-300">FASTER.</span><br />
            GO FARTHER.
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-white/60 max-w-lg leading-relaxed font-light">
            Experience the pinnacle of fitness in an environment designed for the elite. Where raw power meets refined luxury.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto items-stretch">
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-red-700 transition-all btn-glow text-white text-sm font-display font-bold uppercase tracking-widest h-14 px-10 rounded-sm hover:-translate-y-1">
              <span>Start Free Trial</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>

            <button className="flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white hover:bg-white/5 font-display font-bold uppercase tracking-widest h-14 px-10 rounded-sm transition-all group text-sm hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Social Proof / Mini Stats */}
          <div className="mt-4 flex items-center gap-6 opacity-80">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  alt="Member Avatar"
                  className="h-10 w-10 rounded-full border-2 border-black object-cover grayscale"
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                />
              ))}
              <div className="h-10 w-10 rounded-full border-2 border-black bg-rose-900 flex items-center justify-center text-xs font-bold text-white">
                +2k
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex text-rose-500 text-sm">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <span className="text-[10px] text-white/60 uppercase tracking-widest">5.0 Rating from our elite members</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: VISUAL CONTENT */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-4 lg:mt-0">

          {/* Decorative Back Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-rose-500/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

          {/* Main Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 w-full max-w-[480px] h-[550px] rounded-sm overflow-hidden group border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 z-20"></div>

            <img
              alt="Muscular trainer lifting dumbbells"
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi9tcYlMo3V7br6IIHfQ5J0tQqvgx48d06FSrCawWATqww7aa667RREPWeIPw1LzARgqA_Ur8v12HSP4hIYdfK7BbDsNuztGqZJ_VPfKa-kPFucn-WOz9cDJwrPTyalFVQ5KDtT6uCdO3hUa40OLOylKeRBlVsRB2aQmzRbWuNYt6bqS8D3MlQCYDaDjyhiXICVMKMgemYH4ky3xYmyEIqm-2ss7n5NI7PN12LdQV5WjFzBhdHUUb4L0uJjkM3BjsAVlfqB545Og"
            />

            {/* Floating Stats - Heart Rate (Top Left) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-6 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3 z-30"
            >
              <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <div>
                <p className="text-[10px] text-white/60 uppercase tracking-widest leading-none mb-1">Heart Rate</p>
                <p className="text-base font-bold text-white leading-none">145 <span className="text-[10px] font-normal text-white/60">bpm</span></p>
              </div>
            </motion.div>

            {/* Floating Stats - Goals (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-6 bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-2 z-30 w-44 shadow-xl"
            >
              <div className="flex justify-between items-end">
                <span className="text-[10px] text-white/60 font-medium tracking-widest uppercase">Daily Goal</span>
                <span className="text-xs text-rose-500 font-bold">85%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-rose-500 rounded-full"
                />
              </div>
              <div className="mt-1 flex items-center justify-between text-white">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                  <span className="text-sm font-bold">450</span>
                </div>
                <span className="text-[10px] text-white/40 font-bold">CAL</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;