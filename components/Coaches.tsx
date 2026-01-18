
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Coach {
  name: string;
  role: string;
  bio: string;
  img: string;
  philosophy: string;
  experience: string;
  specialties: string[];
  certifications: string[];
  stats: { label: string; value: string }[];
}

const COACHES_DATA: Coach[] = [
  {
    name: 'Alex Morgan',
    role: 'Head of Strength',
    bio: 'Former Olympic weightlifter with 15 years of coaching experience. Alex has trained over 500 athletes, from beginners to professional competitors. His methodical approach combines classic powerlifting techniques with modern sports science.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXrBAUT1cT_PWEUKpnZRgzY8h63HdzRO9tVhUQjQKgq-g2oH4ZdDGEBwG0m0kRTcyRtK09_SzjsttxuWN84090H9TzeilAkpGjSCYk8C-G-CwzsBwt1lFjkApCLDjnW3TGcwZPwkH52gQFVaxwBzztbNSxzsQnNDhOPyXYAAnZdGRmw6OsE3cEAAOmfINP_fhE7C6Dd6GELeq8LTj4B41Aa3kwWqmgv56rHM1GgWoubKcEhZrrgz3tGqWLlVmH9gNeApQ3PUtTyw',
    philosophy: "Strength is the foundation of all athletic performance. Master the basics, then push the limits.",
    experience: '15+ years',
    specialties: ['Olympic Lifting', 'Powerlifting', 'Hypertrophy', 'Athlete Development'],
    certifications: ['CSCS', 'USAW Level 3', 'FMS Certified'],
    stats: [{ label: 'Athletes Trained', value: '500+' }, { label: 'Success Rate', value: '96%' }, { label: 'PRs Set', value: '2000+' }]
  },
  {
    name: 'Sarah Jenkins',
    role: 'CrossFit Specialist',
    bio: 'Level 3 CrossFit Coach dedicated to building elite functional fitness athletes. Sarah competed at the CrossFit Games and brings her competitive experience to help athletes reach their full potential.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV75enCpYMkoyXeVh4VuWJPXmZaBhNOs_RdVf4gP2j0MZGFUYsTWuQD8k4aB0RVq7dSUvHrWx8Y7h6kIYYjsWuoSUWmDbv7wDEwiW8kdZSTGOYaBEBvzIIodfO2ufvpUzyr1OD87_4HXty184ZwHJxaVSAFge0nIbFZtaZRxgwGGJ4Piz0tF9-K0auTPmvmU8Zr5niCGBWj2tIIEmoRiTu9HUZ2RjAUgipwKDVAjO3MMUxgh94oHNR2P3APPJ497w9cuD86UdORw',
    philosophy: "Functional fitness prepares you for the unknown. Embrace the challenge, become unstoppable.",
    experience: '10+ years',
    specialties: ['CrossFit', 'HIIT', 'Competition Prep', 'Nutrition Coaching'],
    certifications: ['CF-L3', 'Precision Nutrition L1', 'CPR/AED'],
    stats: [{ label: 'Games Athletes', value: '12' }, { label: 'Avg Improvement', value: '35%' }, { label: 'Classes Led', value: '5000+' }]
  },
  {
    name: 'Marcus Chen',
    role: 'Powerlifting Coach',
    bio: 'National record holder in the deadlift with a passion for helping athletes achieve unparalleled strength gains. Marcus combines technical precision with progressive overload strategies.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJgi6Y5XvurlpdZOP-C99SNRbZKMDFknvM9YVmM_H_-VrxeahnrMM9M9UswLzZVJpuGGf86lbpO6rmJ9Zyl8v6_-j6VXZe8cHnPhl1XIkJw4sqatUlnDka-fenNlOn_Zl0d-cdOP7zx_a2jxxbOAG3lgBQ8vVh2edbHlcBOUPyV5uCGP4_j673lWsE4PyqbxkKsvM00iSllmO7eg2DoisDWcoseZT796qa51mxEespqzVSEJCzehDHIa-Tb5WmXU6KL9orUY-wNQ',
    philosophy: "Maximum effort is a skill. Precision in every lift leads to greatness.",
    experience: '12+ years',
    specialties: ['Powerlifting', 'Strongman', 'Competition Prep', 'Peaking Programs'],
    certifications: ['USAPL Coach', 'NSCA-CPT', 'Westside Barbell Certified'],
    stats: [{ label: 'National Champs', value: '8' }, { label: 'Total Added (avg)', value: '+85kg' }, { label: 'Competitions', value: '200+' }]
  },
  {
    name: 'Elena Rodriguez',
    role: 'Mobility & Recovery',
    bio: 'Expert in biomechanics and movement optimization. Elena focuses on preventing injuries and enhancing athletic longevity through targeted mobility work and recovery protocols.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1WdorUDGsoRhjAejpWY9y_iPDV8pZTdJX-QpnQiDj8WymM1yRrlXGN6qSSCUfLlMOxBXbapoW5lPBjAEadPbgu13dAFgu7ByfrQfthiPD8p0PsLz99jf7sFtPE_8aD2Ydi8-lZjEUcU5HreJBru5KzPZKUGVColQhkqFzjaKSvheotT7eOBkYoUdE_7H2_pVuPTwq2kEpPIlE-nzp0D0EGGfYZ8vJFXuq5x_PM94xjMXyGXChbe1xdC5MJeY1ZirAZPTcDC13-A',
    philosophy: "Longevity is the key to consistent elite performance. Move better, perform better.",
    experience: '8+ years',
    specialties: ['Mobility', 'Injury Prevention', 'Recovery Protocols', 'Corrective Exercise'],
    certifications: ['DPT', 'FRC Certified', 'SFMA'],
    stats: [{ label: 'Injuries Prevented', value: '300+' }, { label: 'Recovery Time', value: '-40%' }, { label: 'ROM Improved', value: '+50%' }]
  }
];

const Coaches: React.FC = () => {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setSelectedCoach(null);
  };

  return (
    <section className="py-16 md:py-32 bg-background-dark" id="trainers">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 md:px-6 mb-10 md:mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-2 md:mb-4 text-white">World Class Coaches</h2>
        <p className="text-white/50 max-w-2xl font-body text-base md:text-lg italic">The industry's most respected minds, now in one facility.</p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {COACHES_DATA.map((coach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedCoach(coach)}
              className="relative group rounded-sm overflow-hidden h-[220px] sm:h-[300px] lg:h-[450px] border border-white/5 cursor-pointer bg-background-accent"
            >
              <img
                alt={coach.name}
                className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                src={coach.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent flex flex-col justify-end p-3 md:p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg md:text-2xl font-display font-bold text-white uppercase mb-0.5 md:mb-1">{coach.name}</h3>
                  <p className="text-primary text-[10px] md:text-sm font-display font-bold uppercase tracking-widest">{coach.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCoach && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCoach(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 overflow-hidden flex flex-col lg:flex-row rounded-sm max-h-[90vh]"
            >
              <button onClick={() => setSelectedCoach(null)} className="absolute top-4 right-4 z-50 text-white/60 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>

              {/* Image Section */}
              <div className="lg:w-2/5 h-[250px] lg:h-auto relative">
                <img src={selectedCoach.img} className="w-full h-full object-cover" alt={selectedCoach.name} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900 to-transparent h-20 lg:hidden"></div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-5 md:p-8 overflow-y-auto">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase mb-1">{selectedCoach.name}</h3>
                  <p className="text-primary text-sm font-display font-bold uppercase tracking-widest">{selectedCoach.role}</p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-white/10">
                  {selectedCoach.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-xl md:text-2xl font-display font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Philosophy */}
                <div className="mb-5">
                  <p className="text-white/80 font-body text-sm md:text-base italic border-l-2 border-primary pl-4">"{selectedCoach.philosophy}"</p>
                </div>

                {/* Bio */}
                <div className="mb-5">
                  <h4 className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-2">About</h4>
                  <p className="text-white/70 font-body text-sm leading-relaxed">{selectedCoach.bio}</p>
                </div>

                {/* Specialties & Certifications */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <h4 className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCoach.specialties.map((spec, idx) => (
                        <span key={idx} className="text-[10px] md:text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-sm text-white/70">{spec}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-bold uppercase tracking-widest text-white/40 mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCoach.certifications.map((cert, idx) => (
                        <span key={idx} className="text-[10px] md:text-xs bg-primary/10 border border-primary/20 px-2 py-1 rounded-sm text-primary">{cert}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="flex items-center gap-2 mb-5 text-sm">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="text-white/70">{selectedCoach.experience} Experience</span>
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-display font-bold uppercase tracking-widest py-3 rounded-sm text-sm transition-all shadow-[0_0_20px_rgba(218,11,46,0.3)] hover:shadow-[0_0_30px_rgba(218,11,46,0.5)]"
                >
                  Book a Session
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Coaches;
