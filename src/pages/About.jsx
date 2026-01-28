import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
    const pillars = [
        { icon: 'article', title: 'Content', desc: 'Curating mission-critical intelligence across Africa\'s burgeoning health ecosystems.' },
        { icon: 'bar_chart', title: 'Data & Insights', desc: 'Enabling evidence-based decision making for sustainable health system transformations.' },
        { icon: 'volunteer_activism', title: 'Impact', desc: 'Driving measurable health outcomes and equity through collaborative innovation.' },
        { icon: 'payments', title: 'Venture Capital', desc: 'Fueling the next generation of high-growth African health technology startups.' }
    ];

    const culture = [
        { icon: 'forum', title: 'Communication', desc: 'Open, transparent, and direct dialogue across all levels of the intelligence hub.' },
        { icon: 'verified_user', title: 'Commitment', desc: 'Unwavering dedication to our mission of democratizing healthcare access and quality.' },
        { icon: 'trending_up', title: 'Persistence', desc: 'Unyielding resolve in solving Africa\'s toughest and most complex medical challenges.' },
        { icon: 'eco', title: 'Growth', desc: 'Continuous learning and exponential professional evolution of our team and partners.' },
        { icon: 'sync', title: 'Iteration', desc: 'Refining our models through rapid feedback loops and evidence-based improvements.' }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-2xl overflow-x-hidden">
                {/* TopAppBar */}
                <div className="flex items-center bg-white/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between sticky top-0 z-50 border-b border-[#dce5df] dark:border-[#2a3d31]">
                    <Link to="/" className="text-[#111813] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors pl-2">
                        <span className="material-symbols-outlined font-black">arrow_back_ios</span>
                    </Link>
                    <h2 className="text-[#111813] dark:text-white text-lg font-black leading-tight tracking-[-0.015em] flex-1 text-center pr-12">About HealthFound</h2>
                </div>

                {/* HeaderImage / Mission Hero */}
                <div className="p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white rounded-3xl min-h-[300px] relative shadow-xl"
                        style={{
                            backgroundImage: 'linear-gradient(0deg, rgba(17, 33, 22, 0.9) 0%, rgba(17, 33, 22, 0.2) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9IMrv4dC4sDWzB0chKaxDmPqiP5d0PBVynzUNs4vD43OlrAfaJil4If1yNE_MgSL3x6y5HMiJJghtrteFLkSOZHCR2Ms-iGe0ALD3fbSRaGDnsRH5zxIzwuwr0aUs3fIv0gk3ZW-Jz7PBv7ouGF5k6rP1hfIuTgEPNH63VK4dtt8rVZOaai6YDlqyjRDIUJwk33I1GSWothd6RvU__5SpN58y8biojWgXX4BCTDvxSh5v54F8bizMSEf6VOUzAb3YWqIAQbBmrw")'
                        }}
                    >
                        <div className="flex flex-col p-8">
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-2 shadow-sm">Our Mission</span>
                            <p className="text-white tracking-tight text-4xl font-black leading-none drop-shadow-md">Driving African Health Innovation</p>
                        </div>
                    </motion.div>
                </div>

                {/* BodyText Description */}
                <div className="px-6 pt-8 pb-4">
                    <p className="text-[#111813]/80 dark:text-white/60 text-lg font-medium leading-relaxed">
                        HealthFound is Africa's definitive healthcare innovation intelligence hub, dedicated to transforming the continent's medical landscape through a multi-faceted approach. We bridge the critical gap between intelligence, investment, and impact.
                    </p>
                </div>

                {/* SectionHeader: Pillars */}
                <div className="px-6 pb-2 pt-8">
                    <h3 className="text-[#111813] dark:text-white text-2xl font-black leading-tight tracking-tight">The Four Pillars</h3>
                    <div className="h-1.5 w-16 bg-primary mt-2 rounded-full shadow-lg shadow-primary/30"></div>
                </div>

                {/* TextGrid: Pillars */}
                <div className="grid grid-cols-1 gap-4 p-4">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.title}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-5 rounded-3xl border border-[#dce5df] dark:border-[#2a3d31] bg-white dark:bg-[#1a2e21] p-6 transition-all shadow-sm hover:shadow-xl group"
                        >
                            <div className="text-primary bg-primary/10 p-4 rounded-2xl group-hover:bg-primary group-hover:text-[#112116] transition-all">
                                <span className="material-symbols-outlined text-4xl">{pillar.icon}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-[#111813] dark:text-white text-xl font-black leading-tight">{pillar.title}</h2>
                                <p className="text-[#63886f] dark:text-white/40 text-sm font-medium leading-relaxed">{pillar.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* SectionHeader: Work Culture */}
                <div className="px-6 pt-12">
                    <h3 className="text-[#111813] dark:text-white text-2xl font-black leading-tight tracking-tight">Our Work Culture</h3>
                    <p className="text-[#63886f] dark:text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mt-1">Foundational Principles</p>
                </div>

                {/* Culture Framework Section */}
                <div className="p-4 flex flex-col gap-4 mb-12">
                    {culture.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-5 p-6 rounded-3xl bg-primary/5 dark:bg-white/5 border border-primary/10 hover:border-primary/40 transition-all group"
                        >
                            <div className="bg-primary/20 text-primary p-3 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-2xl font-black">{item.icon}</span>
                            </div>
                            <div>
                                <h4 className="font-black text-[#111813] dark:text-white text-lg mb-1">{item.title}</h4>
                                <p className="text-sm text-[#4e6a57] dark:text-white/40 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Button */}
                <div className="p-6 mt-4 pb-16">
                    <button className="w-full bg-primary text-[#112116] font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
                        Join our Journey
                        <span className="material-symbols-outlined font-black">chevron_right</span>
                    </button>
                    <p className="text-center text-[#63886f] dark:text-white/20 text-[10px] mt-12 mb-8 uppercase tracking-[0.4em] font-black">HealthFound Intelligence Hub © 2024</p>
                </div>
            </div>
        </div>
    );
};

export default About;
