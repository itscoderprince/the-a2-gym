
import React from 'react';
import { motion } from 'framer-motion';

const WhyElite: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-background-accent relative" id="about">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-10 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-4 md:mb-8">
                Why <span className="text-primary text-glow">The A2 Gym ?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 font-body font-light leading-relaxed">
                We combine data-driven science, state-of-the-art facilities, and 24/7 access to build better athletes.
              </p>
            </motion.div>

            <div className="space-y-6 md:space-y-10">
              {[
                { icon: 'science', title: 'Science-Based', desc: 'Our programs are backed by the latest sports science research to ensure every rep counts.' },
                { icon: 'domain', title: 'Elite Facility', desc: 'Train with the same premium equipment used by professional sports organizations.' },
                { icon: 'schedule', title: '24/7 Access', desc: "Elite performance shouldn't be limited by hours. Get secure, total access anytime." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  className="flex gap-4 md:gap-8 items-start group"
                >
                  <div className="size-12 md:size-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl md:text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-display font-bold uppercase mb-1 md:mb-2 tracking-wide">{item.title}</h4>
                    <p className="text-white/50 font-body leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-2 md:gap-4 h-[300px] md:h-[500px] lg:h-[650px]"
          >
            <div className="col-span-2 row-span-1 rounded-sm overflow-hidden relative group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-700"
                style={{ backgroundImage: 'url("/Image-12.jpg")' }}
              ></div>
            </div>
            <div className="col-span-1 row-span-2 rounded-sm overflow-hidden relative group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-700"
                style={{ backgroundImage: 'url("/Image-5.jpg")' }}
              ></div>
            </div>
            <div className="col-span-1 row-span-2 rounded-sm overflow-hidden relative group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-700"
                style={{ backgroundImage: 'url("/Image-2.jpg")' }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyElite;
