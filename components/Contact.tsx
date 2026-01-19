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
                {/* Header with Logo Left and Text Right */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-8 mb-10">
                    <div className="flex items-center gap-4">
                        <img
                            src="/logo.png"
                            alt="A2 Gym Logo"
                            className="h-16 md:h-20 object-contain"
                        />
                        <div className="h-10 w-px bg-primary/30 hidden sm:block"></div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight">
                                A2 <span className="text-primary">Fitness</span>
                            </h2>
                        </div>
                    </div>
                    <div className="text-right hidden sm:block">
                        <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-1">High Performance Center</p>
                        <p className="text-neutral-500 text-[9px] uppercase tracking-[0.2em] font-medium">Powerlifting • Bodybuilding • Fitness</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <p className="text-neutral-400 text-sm md:text-base max-w-3xl font-light leading-relaxed">
                        Step into the arena of champions. Located in Nagra Toli, Ranchi, we provide the iron and the expertise to help you forge your strongest self. Connect with our team of experts today.
                    </p>

                    {/* Contact Cards - Single Row on Desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-sm p-6 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500">
                            <div className="size-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-2xl">location_on</span>
                            </div>
                            <h4 className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Location</h4>
                            <p className="text-white text-sm font-medium leading-relaxed">
                                S.N. Yadav Road, Nagra Toli,<br />Near Raam Pyaari Hospital, Ranchi
                            </p>
                        </div>

                        <div className="bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-sm p-6 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500">
                            <div className="size-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-2xl">call</span>
                            </div>
                            <h4 className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Contact</h4>
                            <p className="text-white text-lg font-bold tracking-tighter">6205449126</p>
                            <p className="text-neutral-500 text-[10px] uppercase font-bold mt-1 tracking-widest">Call / WhatsApp</p>
                        </div>

                        <div className="bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-sm p-6 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500">
                            <div className="size-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-2xl">mail</span>
                            </div>
                            <h4 className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">Inquiries</h4>
                            <p className="text-white text-sm font-medium">thea2gym.in@gmail.com</p>
                            <p className="text-neutral-500 text-[10px] uppercase font-bold mt-1 tracking-widest">@the_a2_gym (Instagram)</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Form - 2/5 width */}
                        <div className="lg:col-span-2 bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-sm p-6">
                            <h3 className="text-xl font-display font-bold uppercase tracking-wide mb-6">
                                Send a message
                            </h3>
                            {isSubmitted ? (
                                <div className="h-full flex flex-col items-center justify-center py-10 text-center">
                                    <div className="size-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                                        <span className="material-symbols-outlined text-4xl">check_circle</span>
                                    </div>
                                    <h4 className="text-xl font-display font-bold uppercase mb-2">Submission Received</h4>
                                    <p className="text-neutral-400 text-sm">Our trainers will contact you shortly.</p>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-bold">First Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Enter"
                                                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-2.5 text-white text-sm placeholder:text-white/10 focus:outline-none focus:border-primary transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-bold">Last Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Name"
                                                className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-2.5 text-white text-sm placeholder:text-white/10 focus:outline-none focus:border-primary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-bold">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-2.5 text-white text-sm placeholder:text-white/10 focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-bold">Training Interest</label>
                                        <select required className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                                            <option value="">Choose your path</option>
                                            <option value="strength">Strength Training</option>
                                            <option value="powerlifting">Powerlifting</option>
                                            <option value="bodybuilding">Bodybuilding</option>
                                            <option value="fitness">General Fitness</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1 font-bold">Message</label>
                                        <textarea
                                            required
                                            rows={3}
                                            placeholder="Write your goals..."
                                            className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-2.5 text-white text-sm placeholder:text-white/10 focus:outline-none focus:border-primary transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-display font-bold uppercase tracking-widest py-4 text-xs rounded-sm transition-all shadow-[0_0_20px_rgba(218,11,46,0.3)] hover:shadow-[0_0_30px_rgba(218,11,46,0.5)] flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : 'Secure Membership'}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Map - 3/5 width */}
                        <div className="lg:col-span-3 h-[450px] bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-sm overflow-hidden p-1">
                            <iframe
                                title="A2 Gym Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.9546059286466!2d85.3283!3d23.3768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1329177a499%3A0x6a100653fbca3b6!2sNagra%20Toli%2C%20Ranchi%2C%20Jharkhand%20834001!5e0!3m2!1sen!2sin!4v1705660000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
