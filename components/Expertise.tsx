
import React from 'react';
import { motion } from 'framer-motion';

const EXPERTISE_DATA = [
  {
    title: 'Strength',
    icon: 'fitness_center',
    shortDesc: 'Build raw power with compound movements.',
    fullDesc: 'Our specialized strength programs focus on progressive overload techniques, mechanical tension, and explosive power to rebuild your physical foundations.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSGz3izzTvXVny7bsBk8m4t188PqYa1VFvaV_vjJ3Kz7RL1smiU73zr6i9Oj_iPHftg0btu5Gavbsu1BtLO3msuxr8aruawmV4M5Yiq-Xk5iZMu9ZVhCF8llguPaedWrDJvHyjnSrGvVY1v1sLm-hLCS8KeKmpQ7yGf_hzrRX8MZ0X8yRTj68xR1hAk2O4dYOzscdK4qkFycctxur4CZMhG3pxG8ihSrWpplcmvKrhqLuJD6BFj-kxKGTsCHgcwC85E_Bauua1YA'
  },
  {
    title: 'Cardio',
    icon: 'timer',
    shortDesc: 'Maximize endurance and VO2 max.',
    fullDesc: 'Utilizing high-intensity interval training (HIIT) and aerobic base building to push your metabolic threshold and improve oxygen utilization across all domains.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA6tVqSj2VYEiv2E4S1C5GOdCyKgsi-YIpNkAvQE0JesZUPIlH0Mvp9GDuTlGPwBDb78k1ba2i9bwWheSvBGUzPgoZMRRqB6MV_sYMf4THeTjTeuhBTnmCy6gHjp5t0LDqbKNwnCHIvJ0DR7QioCDnJgxxBPHglSAf79wCVgVhLpV74JFUXD-lIpVjrvbheMMt2STwuOril6n05zVRRMKg4xTFXONq3_ztkEADqJoafIvK-VHd_wMvwjTCPjfsamhsRXymLEDCSQ'
  },
  {
    title: 'Recovery',
    icon: 'self_improvement',
    shortDesc: 'Advanced techniques to heal faster.',
    fullDesc: 'Recovery is where the growth happens. We offer cryotherapy, sports massage, and targeted mobility work to ensure your body is ready for the next challenge.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL-hd75JtKG1gRHRLgHyiII_4SGfZv-BifRySs5vzUtnovRvCPPxXIvUXRX39WUhS_4bMZL4bfHKP6FHFOLLt6LAwWeus6Wtu6FdsPItD6-wI9ax0IWX--MhWwSdcmJGswmsu4F9dDYYBj95QzdthUQuJ-9CiTzh_GkgeSu-lFB7KFXo3MvJ0TTahVBMBsaEkQCCgYkI4LRkQ3CAwh-0uNYX7fNyhr0B6QVLBnQHGyqXWw1VRIZAvt242JF_cwBDPh_i-3YAnYcw'
  },
  {
    title: 'Mobility',
    icon: 'dynamic_form',
    shortDesc: 'Unlock your full range of motion.',
    fullDesc: 'Optimize your biomechanics with functional movement screening and joint-specific protocols designed to reduce injury risk and improve movement efficiency.',
    img: '/assets/mobility.png'
  }
];

const Expertise: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-background-dark border-t border-white/5" id="programs">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 gap-4 md:gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-2 md:mb-4">Our Expertise</h2>
            <p className="text-white/50 max-w-md text-base md:text-lg font-body italic">Precision-engineered programs for the high-performance life.</p>
          </div>
          <a className="text-primary font-display font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group" href="#">
            View All Programs
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {EXPERTISE_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative h-[200px] sm:h-[280px] md:h-[400px] lg:h-[480px] rounded-sm overflow-hidden border border-white/5 bg-background-accent hover:border-primary transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/10 to-background-dark/90 z-10 group-hover:via-background-dark/40 group-hover:to-background-dark transition-all duration-500"></div>
              <div
                className="absolute inset-0 bg-cover bg-center expertise-card-image"
                style={{ backgroundImage: `url("${item.img}")` }}
              ></div>

              <div className="absolute inset-0 p-3 sm:p-4 md:p-5 z-20 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-1 md:mb-2 transform md:group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                  <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl text-white/50 group-hover:text-primary transition-colors duration-300">
                    {item.icon}
                  </span>
                  <h3 className="text-sm sm:text-lg md:text-2xl font-display font-bold uppercase text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <p className="text-white/60 font-body text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-2">
                    {item.shortDesc}
                  </p>

                  {/* Full info revealed on hover - hidden on mobile */}
                  <div className="hidden md:block max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden">
                    <p className="text-white/40 font-body text-xs leading-relaxed mt-2 mb-3">
                      {item.fullDesc}
                    </p>
                    <div className="w-12 h-[2px] bg-primary"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
