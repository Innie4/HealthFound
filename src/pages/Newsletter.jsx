import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Newsletter = () => {
    const newsletters = [
        {
            title: "Startup Weekly",
            icon: "rocket_launch",
            schedule: "Every Monday",
            description: "The pulse of African HealthTech. Deep dives into funding rounds, regulatory shifts, and emerging tech startups across the continent.",
        },
        {
            title: "Career Convos",
            icon: "work",
            schedule: "Bi-Weekly",
            description: "Navigate your healthcare career with expert mentorship, exclusive job listings, and professional development resources.",
        },
        {
            title: "Workplace Corner",
            icon: "corporate_fare",
            schedule: "Monthly",
            description: "Optimizing healthcare environments through operational excellence, team wellbeing, and modern facility management.",
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white">
            {/* TopAppBar */}
            <div className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
                <Link to="/" className="text-[#111813] dark:text-white flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </Link>
                <h2 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">HealthFound Newsletters</h2>
            </div>

            <div className="max-w-md mx-auto pb-12">
                {/* Hero / Headline */}
                <div className="px-4 pt-8 pb-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[#111813] dark:text-white tracking-tight text-[40px] font-black leading-tight text-left pb-4"
                    >
                        Intelligence for healthcare innovation
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#111813]/70 dark:text-gray-300 text-lg font-normal leading-normal"
                    >
                        Stay updated with the latest trends, deals, and career insights in the African HealthTech ecosystem.
                    </motion.p>
                </div>

                {/* Newsletter Sections */}
                {newsletters.map((nl, index) => (
                    <motion.div
                        key={nl.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="px-4 mt-6"
                    >
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 group">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>{nl.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-[#111813] dark:text-white text-2xl font-black leading-tight">{nl.title}</h3>
                                    <div className="flex mt-1">
                                        <div className="flex h-6 items-center justify-center rounded-full bg-primary/10 px-3 border border-primary/20">
                                            <p className="text-primary text-[10px] font-black uppercase tracking-wider">{nl.schedule}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-base mb-8 leading-relaxed">
                                {nl.description}
                            </p>
                            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative">
                                    <input
                                        className="w-full h-14 px-5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-base focus:ring-2 focus:ring-primary focus:border-primary dark:text-white transition-all outline-none"
                                        placeholder="Enter your email address"
                                        required
                                        type="email"
                                    />
                                </div>
                                <button className="w-full h-14 bg-primary hover:bg-opacity-90 active:scale-[0.98] text-[#112116] font-black rounded-xl transition-all shadow-lg hover:shadow-primary/20">
                                    Subscribe for Free
                                </button>
                            </form>
                            <a
                                className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-gray-500 hover:text-primary transition-colors"
                                href="#"
                            >
                                View Archive <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                            </a>
                        </div>
                    </motion.div>
                ))}

                {/* Footer */}
                <div className="px-4 py-12 text-center">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">© 2024 HealthFound. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-6">
                        <span className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-primary transition-colors">language</span>
                        <span className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-primary transition-colors">share</span>
                        <span className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-primary transition-colors">mail</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
