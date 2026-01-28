import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Advertise = () => {
    const stats = [
        { label: "Monthly Reach", value: "50k+" },
        { label: "Subscribers", value: "15k+" },
        { label: "Avg. Open Rate", value: "40%" },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white transition-colors duration-300 min-h-screen">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-[#dce5df] dark:border-gray-800">
                <Link to="/" className="text-[#111813] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors pl-2">
                    <span className="material-symbols-outlined font-black">arrow_back_ios</span>
                </Link>
                <h2 className="text-[#111813] dark:text-white text-lg font-black leading-tight tracking-[-0.015em] flex-1 text-center">Advertise</h2>
                <div className="flex w-12 items-center justify-end">
                    <button className="flex items-center justify-center rounded-full size-10 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                </div>
            </div>

            <main className="flex flex-col pb-32 max-w-5xl mx-auto w-full">
                {/* Hero Section */}
                <div className="p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex min-h-[500px] flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-3xl items-start justify-end px-8 pb-12 shadow-2xl relative overflow-hidden"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdSCT2Z8IUhwMrxYCfXAvwiFDZCXHLVBOwyLwXOmjVFmDrNRlj-5J11S8CKTn2OW5V2mVDzzjT22uj6exGV2Am3xkZo1qaHvdK-W6IWllKOAjLEW7geDhqIXr6_WQUsMyf9WfGzHhImc5kWSeAe5no6Sx0musvZWJZ6wL_iNOU5t56n_vXJ-5V63ZDLZN_YLDA-KY1Pvk8Rq0HVCA2HFNNLZIO3eganU4cXkAONPQ_UVQkjxf0I_wbaLrFlK0O3-2F_rzVXvw9OQ")'
                        }}
                    >
                        <div className="flex flex-col gap-4 text-left max-w-2xl relative z-10">
                            <span className="bg-primary text-[#112116] text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full w-fit shadow-lg">Intelligence Hub</span>
                            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                Reach Africa’s Healthcare Innovation Community
                            </h1>
                            <h2 className="text-white/80 text-lg md:text-xl font-medium leading-relaxed">
                                Partner with HealthFound to connect with the leaders shaping the future of African health. Gain high-value visibility among decision-makers, founders, and investors.
                            </h2>
                        </div>
                        <div className="flex gap-4 w-full sm:w-auto relative z-10 pt-4">
                            <Link to="/contact" className="flex-1 sm:flex-none flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-primary text-[#111813] text-base font-black leading-normal tracking-wide shadow-xl hover:scale-105 active:scale-95 transition-all text-center">
                                <span className="truncate">Get Started Now</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Audience Reach Section Header */}
                <div className="px-6 pt-12">
                    <h2 className="text-[#111813] dark:text-white text-3xl font-black leading-tight tracking-tight">Who You'll Reach</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg mt-2 font-medium">Our network consists of high-intent healthcare stakeholders across the continent.</p>
                </div>

                {/* Demographics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    {[
                        { icon: "stethoscope", title: "Healthcare Professionals", desc: "Doctors, Specialists & Clinicians" },
                        { icon: "rocket_launch", title: "HealthTech Founders", desc: "Innovative startup leaders" },
                        { icon: "payments", title: "Investors", desc: "VCs & Institutional Partners" },
                        { icon: "account_balance", title: "Policy Makers", desc: "Government & NGO Leaders" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="flex flex-col gap-4 rounded-3xl border border-[#dce5df] dark:border-gray-800 bg-white dark:bg-[#1a2e21] p-6 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="text-primary p-3 bg-primary/10 rounded-2xl w-fit shadow-inner">
                                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-[#111813] dark:text-white text-lg font-black leading-tight">{item.title}</h2>
                                <p className="text-gray-500 dark:text-white/40 text-sm font-bold uppercase tracking-widest">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Proof Stats Row */}
                <div className="mx-4 my-12 flex flex-col md:flex-row items-center justify-around rounded-[2rem] bg-background-dark text-white p-10 dark:bg-primary dark:text-[#112116] shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
                    {stats.map((stat, idx) => (
                        <div key={idx} className={`text-center py-6 md:py-0 w-full md:w-1/3 ${idx < stats.length - 1 ? 'md:border-r border-white/20 dark:border-black/10' : ''}`}>
                            <p className="text-5xl font-black mb-2">{stat.value}</p>
                            <p className="text-xs uppercase font-black tracking-[0.3em] opacity-80">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Advertising Options Header */}
                <div className="px-6 pt-12">
                    <h2 className="text-[#111813] dark:text-white text-3xl font-black leading-tight tracking-tight">Advertising Options</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg mt-2 font-medium">Multi-channel opportunities to suit your campaign goals.</p>
                </div>

                {/* Ad Options Cards */}
                <div className="flex flex-col gap-4 p-4">
                    {[
                        { icon: "language", title: "Website Display Ads", desc: "Targeted banners on our high-traffic intelligence hub." },
                        { icon: "mail", title: "Newsletter Sponsorships", desc: "Direct inbox access to 15k+ highly active weekly subscribers." },
                        { icon: "auto_awesome", title: "Custom Intelligence Packages", desc: "Tailored events, joint reports, and content strategy." }
                    ].map((option, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-6 rounded-3xl border border-[#dce5df] dark:border-gray-800 bg-white dark:bg-[#1a2e21] p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                        >
                            <div className="bg-primary/10 text-primary p-4 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-[#111813] transition-all">
                                <span className="material-symbols-outlined text-3xl">{option.icon}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[#111813] dark:text-white font-black text-xl mb-1">{option.title}</h3>
                                <p className="text-gray-500 dark:text-white/40 text-base font-medium">{option.desc}</p>
                            </div>
                            <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors text-3xl">chevron_right</span>
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* Bottom Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl p-6 pb-10 border-t border-[#dce5df] dark:border-white/10 z-[60]">
                <div className="max-w-xl mx-auto">
                    <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 bg-primary text-[#111813] gap-3 text-lg font-black leading-normal tracking-wide shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95">
                        <span className="material-symbols-outlined font-black">picture_as_pdf</span>
                        <span>Download Media Kit (PDF)</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Advertise;
