import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MEMBERSHIP_PLANS = [
    {
        name: 'Starter',
        price: '49',
        period: '/month',
        description: 'Perfect for beginners starting their fitness journey',
        features: ['Access to gym floor', 'Basic equipment usage', '2 group classes/week', 'Locker room access'],
        popular: false,
    },
    {
        name: 'Elite',
        price: '99',
        period: '/month',
        description: 'Our most popular plan for serious athletes',
        features: ['24/7 gym access', 'All premium equipment', 'Unlimited group classes', 'Personal training session/month', 'Nutrition consultation', 'Recovery zone access'],
        popular: true,
    },
    {
        name: 'Pro',
        price: '199',
        period: '/month',
        description: 'For those who demand the absolute best',
        features: ['Everything in Elite', 'Dedicated personal trainer', 'Custom meal planning', 'Priority booking', 'Guest passes (2/month)', 'Exclusive workshops'],
        popular: false,
    },
];

const StartTraining: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<string>('Elite');

    return (
        <section className="py-10 md:py-16 bg-background-dark relative overflow-hidden" id="start-training">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight mb-2">
                        Start Your <span className="text-primary text-glow">Journey</span>
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-light">
                        Choose your path to elite performance. Every plan includes access to our world-class facilities.
                    </p>
                </motion.div>

                {/* Membership Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
                    {MEMBERSHIP_PLANS.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            onClick={() => setSelectedPlan(plan.name)}
                            className={`relative cursor-pointer rounded-sm p-5 md:p-6 transition-all duration-300 ${selectedPlan === plan.name
                                ? 'bg-primary/10 border-2 border-primary shadow-[0_0_30px_rgba(218,11,46,0.2)]'
                                : 'bg-neutral-900/50 border border-white/5 hover:border-white/20'
                                } ${plan.popular ? 'md:-mt-2 md:mb-2' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-4">
                                <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-wide mb-1">{plan.name}</h3>
                                <p className="text-neutral-400 text-xs">{plan.description}</p>
                            </div>

                            <div className="mb-4">
                                <span className="text-3xl md:text-4xl font-display font-bold text-white">${plan.price}</span>
                                <span className="text-neutral-400 text-sm">{plan.period}</span>
                            </div>

                            <ul className="space-y-2 mb-5">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
                                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-2.5 rounded-sm font-display font-bold uppercase tracking-widest text-xs transition-all ${selectedPlan === plan.name
                                    ? 'bg-primary text-white shadow-[0_0_20px_rgba(218,11,46,0.3)]'
                                    : 'bg-white/5 text-white hover:bg-white/10'
                                    }`}
                            >
                                {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Onboarding Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-sm p-5 md:p-8"
                >
                    <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-wide mb-6 text-center">
                        How It Works
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { icon: 'person_add', title: 'Sign Up', desc: 'Create your account' },
                            { icon: 'event', title: 'Book Intro', desc: 'Schedule your first session' },
                            { icon: 'fitness_center', title: 'Get Assessed', desc: 'Meet your trainer' },
                            { icon: 'trending_up', title: 'Start Training', desc: 'Begin your transformation' },
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="relative mb-3">
                                    <div className="size-12 md:size-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-xl md:text-2xl">{step.icon}</span>
                                    </div>
                                    <div className="absolute -top-1 -right-1 size-5 bg-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                                        {idx + 1}
                                    </div>
                                </div>
                                <h4 className="text-sm font-display font-bold uppercase mb-0.5">{step.title}</h4>
                                <p className="text-neutral-400 text-xs">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 text-center">
                        <button className="bg-primary hover:bg-primary/90 text-white font-display font-bold uppercase tracking-widest px-8 py-3 rounded-sm text-sm transition-all shadow-[0_0_20px_rgba(218,11,46,0.3)] hover:shadow-[0_0_30px_rgba(218,11,46,0.5)]">
                            Get Started Now
                        </button>
                        <p className="text-neutral-500 text-xs mt-3">No commitment. Cancel anytime.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StartTraining;
