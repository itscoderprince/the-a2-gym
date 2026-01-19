import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = {
            firstName: (e.target as any).elements[0].value,
            lastName: (e.target as any).elements[1].value,
            email: (e.target as any).elements[2].value,
            interest: (e.target as any).elements[3].value,
            message: (e.target as any).elements[4].value,
        };

        try {
            const response = await fetch('https://the-a2-gym.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please check if the server is running.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-10 md:py-16 bg-black relative overflow-hidden" id="contact">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-6 md:mb-10"
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight mb-2">
                        Get In <span className="text-primary text-glow">Touch</span>
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-light">
                        Ready to transform your fitness journey? Reach out to us and let's build something extraordinary together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-sm p-4 md:p-6"
                    >
                        <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-wide mb-4">
                            Send us a message
                        </h3>
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center py-10 text-center"
                            >
                                <div className="size-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                                </div>
                                <h4 className="text-xl font-display font-bold uppercase mb-2">Message Sent!</h4>
                                <p className="text-neutral-400 text-sm">We'll get back to you within 24 hours.</p>
                            </motion.div>
                        ) : (
                            <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2 font-bold">First Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="John"
                                            className="w-full bg-black/50 border border-white/10 rounded-sm px-3 py-2 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2 font-bold">Last Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full bg-black/50 border border-white/10 rounded-sm px-3 py-2 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2 font-bold">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-black/50 border border-white/10 rounded-sm px-3 py-2 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-1 font-bold">Interest</label>
                                    <select required className="w-full bg-black/50 border border-white/10 rounded-sm px-3 py-2 text-white text-sm focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                                        <option value="">Select a program</option>
                                        <option value="strength">Strength Training</option>
                                        <option value="cardio">Cardio & Endurance</option>
                                        <option value="recovery">Recovery & Mobility</option>
                                        <option value="personal">Personal Training</option>
                                        <option value="membership">Membership Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-1 font-bold">Message</label>
                                    <textarea
                                        required
                                        rows={2}
                                        placeholder="Tell us about your fitness goals..."
                                        className="w-full bg-black/50 border border-white/10 rounded-sm px-3 py-2 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-display font-bold uppercase tracking-widest py-3 text-sm rounded-sm transition-all shadow-[0_0_20px_rgba(218,11,46,0.3)] hover:shadow-[0_0_30px_rgba(218,11,46,0.5)] flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        {/* Contact Cards - Compact Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-sm p-4 flex flex-col items-center text-center">
                                <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-xl">location_on</span>
                                </div>
                                <h4 className="text-sm font-display font-bold uppercase mb-1">Visit Us</h4>
                                <p className="text-neutral-400 text-[10px] leading-tight">Nagra Toli, Near Raam Pyaari Hospital, Ranchi</p>
                            </div>

                            <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-sm p-4 flex flex-col items-center text-center">
                                <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-xl">call</span>
                                </div>
                                <h4 className="text-sm font-display font-bold uppercase mb-1">Call Us</h4>
                                <p className="text-neutral-400 text-xs">6205449126</p>
                            </div>

                            <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-sm p-4 flex flex-col items-center text-center">
                                <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-xl">mail</span>
                                </div>
                                <h4 className="text-sm font-display font-bold uppercase mb-1">Email Us</h4>
                                <p className="text-neutral-400 text-xs">thea2gym.in@gmail.com</p>
                            </div>
                        </div>

                        {/* Operating Hours - Compact */}
                        <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-sm p-4 text-center">
                            <h4 className="text-sm font-display font-bold uppercase tracking-wide mb-3 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                                Operating Hours
                            </h4>
                            <div className="text-center">
                                <span className="text-neutral-400 block text-xs mb-1">Everyday</span>
                                <span className="text-white font-bold uppercase tracking-tighter text-lg">05:00 AM - 10:00 PM</span>
                            </div>
                        </div>

                        <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-sm p-4">
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-[10px] text-neutral-500 text-center uppercase tracking-widest leading-relaxed">
                                    Nagra Toli, Near Raam Pyaari Hospital,<br />SN Yadav Road, Ranchi
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
