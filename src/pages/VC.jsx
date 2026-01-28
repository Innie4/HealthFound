import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VC = () => {
    const [userType, setUserType] = useState('Founder');

    return (
        <div className="bg-background-dark min-h-screen text-white font-display overflow-x-hidden">
            {/* Top App Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-white/5">
                <Link to="/" className="text-primary-alt flex size-10 shrink-0 items-center justify-center hover:bg-white/5 rounded-full transition-colors">
                    <span className="material-symbols-outlined font-black">arrow_back_ios_new</span>
                </Link>
                <h2 className="text-white text-lg font-black leading-tight tracking-[-0.015em] flex-1 text-center pr-10">HealthFound VC</h2>
                <div className="flex w-10 items-center justify-end">
                    <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-white hover:text-primary-alt">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                </div>
            </div>

            <main className="pt-24 pb-12 px-6 max-w-2xl mx-auto gradient-bg min-h-screen flex flex-col justify-center">
                {/* Hero Section */}
                <div className="pt-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary-alt/10 border border-primary-alt/20 mb-8 shadow-inner"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-alt opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-alt"></span>
                        </span>
                        <span className="text-primary-alt text-[10px] font-black uppercase tracking-[0.3em]">Upcoming Launch</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white tracking-tight text-4xl md:text-6xl font-black leading-[1.05] pb-6"
                    >
                        Fueling the Future of African Healthtech
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl font-medium leading-relaxed pb-12 max-w-lg"
                    >
                        Investing in early-stage startups to empower the next generation of African healthcare disruptors through strategic capital and market intelligence.
                    </motion.p>
                </div>

                {/* Progress Indicator */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12 px-8 py-8 rounded-[2rem] glass-card shadow-2xl"
                >
                    <div className="flex justify-between items-end mb-4">
                        <span className="text-sm font-bold text-white/40 uppercase tracking-widest">Launch Progress</span>
                        <span className="text-primary-alt text-2xl font-black">75%</span>
                    </div>
                    <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '75%' }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            className="bg-primary-alt h-full rounded-full shadow-[0_0_25px_rgba(43,238,173,0.6)]"
                        ></motion.div>
                    </div>
                    <p className="text-[10px] text-white/30 mt-5 uppercase font-black tracking-[0.4em] text-center">Deploying Strategic Capital Framework</p>
                </motion.div>

                {/* Waitlist Section */}
                <div className="mb-16">
                    <h3 className="text-white text-2xl font-black mb-6 px-1 tracking-tight">Join the Strategic Waitlist</h3>
                    {/* Segmented Buttons */}
                    <div className="flex mb-6">
                        <div className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-white/5 p-1.5 border border-white/10 shadow-inner">
                            <button
                                onClick={() => setUserType('Founder')}
                                className={`flex h-full grow items-center justify-center rounded-xl px-4 text-sm font-black transition-all ${userType === 'Founder' ? 'bg-primary-alt text-[#10221c] shadow-lg scale-[1.02]' : 'text-white/40 hover:text-white/60'}`}
                            >
                                I am a Founder
                            </button>
                            <button
                                onClick={() => setUserType('Investor')}
                                className={`flex h-full grow items-center justify-center rounded-xl px-4 text-sm font-black transition-all ${userType === 'Investor' ? 'bg-primary-alt text-[#10221c] shadow-lg scale-[1.02]' : 'text-white/40 hover:text-white/60'}`}
                            >
                                I am an Investor
                            </button>
                        </div>
                    </div>
                    {/* TextField & CTA */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col">
                            <input
                                className="w-full rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary-alt/50 border border-white/10 bg-white/5 placeholder:text-white/20 h-16 p-6 text-base font-medium transition-all"
                                placeholder="Enter your email address"
                                type="email"
                                required
                            />
                        </div>
                        <button className="w-full bg-primary-alt text-[#10221c] font-black text-lg h-16 rounded-2xl shadow-2xl shadow-primary-alt/20 active:scale-[0.98] transition-all hover:brightness-110">
                            Get Early Access
                        </button>
                    </form>
                </div>

                {/* Criteria Section */}
                <div className="mb-16">
                    <h3 className="text-white text-2xl font-black mb-8 px-1 tracking-tight">Our Investment Focus</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: 'trending_up', title: 'Scalability', desc: 'Solutions designed to scale across the Pan-African continent with digital-first DNA.' },
                            { icon: 'favorite', title: 'Impact', desc: 'Measurable improvements in regional health outcomes and infrastructure equity.' },
                            { icon: 'lightbulb', title: 'Innovation', desc: 'Novel proprietary technology or disruptive care delivery models.' },
                            { icon: 'groups', title: 'Resilience', desc: 'Local teams with deep institutional understanding of African market complexities.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5, backgroundColor: 'rgba(43, 238, 173, 0.08)' }}
                                className="p-6 rounded-3xl glass-card flex flex-col items-start gap-4 transition-all"
                            >
                                <div className="bg-primary-alt/20 p-3 rounded-2xl text-primary-alt shadow-inner">
                                    <span className="material-symbols-outlined font-black text-2xl">{item.icon}</span>
                                </div>
                                <div>
                                    <h4 className="font-black text-white text-lg mb-2">{item.title}</h4>
                                    <p className="text-white/40 text-sm leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual Asset */}
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
                    <img
                        alt="Healthcare technology in Africa"
                        className="w-full h-full object-cover grayscale opacity-40 transition-transform duration-[10s] hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYi3tHAsP9PD0SKAjF65TFPZPfAWRLv1DkMnT6F46_MqLKvCIn_jaLA2DqiW81llgS3hly_t9h79oNem_nBT91LgGHcSiZQctz9KypZEAr0ZS-DN6FMe12FAHk70L4zNASV-KffWPjE9eKEkANx5QHvd2o3kRhIPrQU7TJtTu1MMFLGN_D5pWGDESwn9lXe4pLM249DBh9jAq-4qmMqu-sqxxr6tTKLM2PBFxS_czyYCSG1lWvybVCTAyjRhaLhHtOv3HUGJTkLw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-8 px-8 flex justify-between items-center bg-black/50 backdrop-blur-md py-4 mx-8 rounded-2xl border border-white/5">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Portfolio Alpha</span>
                        <span className="text-primary-alt font-black italic tracking-tighter">HEALTHFOUND_VC</span>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center px-4 py-12 border-t border-white/5 mt-auto">
                    <p className="text-white/20 text-xs font-black uppercase tracking-[0.5em] mb-3">© 2024 HealthFound VC Hub</p>
                    <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Transforming African Healthcare Intelligence through Capital</p>
                </footer>
            </main>
        </div>
    );
};

export default VC;
