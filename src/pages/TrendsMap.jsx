import React from 'react';
import { Link } from 'react-router-dom';

const TrendsMap = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111811] dark:text-white min-h-screen font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col bg-white dark:bg-background-dark max-w-[480px] mx-auto shadow-2xl overflow-x-hidden">
                {/* Top App Bar */}
                <div className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
                    <div className="flex items-center p-4 pb-2 justify-between">
                        <Link to="/market-dashboard" className="text-[#111811] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">arrow_back_ios</span>
                        </Link>
                        <div className="flex flex-col items-center">
                            <h2 className="text-[#111811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">African Healthtech</h2>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Global Perspective</p>
                        </div>
                        <div className="flex w-10 items-center justify-end">
                            <button className="flex cursor-pointer items-center justify-center rounded-lg size-10 bg-transparent text-[#111811] dark:text-white hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">share</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filters / Chips */}
                <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar scroll-smooth bg-white dark:bg-background-dark">
                    {[
                        { label: 'Funding', active: true },
                        { label: 'Startup Density', active: false },
                        { label: 'Top Sectors', active: false },
                        { label: 'Growth YoY', active: false }
                    ].map((filter, i) => (
                        <button key={i} className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-bold shadow-sm transition-all ${filter.active ? 'bg-primary text-[#0a0a0a]' : 'bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-500 dark:text-white'}`}>
                            <span className="truncate">{filter.label}</span>
                            <span className="material-symbols-outlined !text-sm">keyboard_arrow_down</span>
                        </button>
                    ))}
                </div>

                <main className="flex-1 flex flex-col">
                    {/* Map Container */}
                    <div className="relative flex-1 min-h-[400px] w-full px-4 mb-4">
                        <div className="relative h-full w-full rounded-[40px] overflow-hidden bg-gray-50 dark:bg-black/20 shadow-2xl border-4 border-white dark:border-white/5">
                            {/* Mock Map Image */}
                            <div className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply dark:mix-blend-normal" style={{ backgroundImage: `linear-gradient(rgba(25, 230, 94, 0.05), rgba(25, 230, 94, 0.05)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6-bnLsFBtxW_fqTccDhFfrVkEi3Z-L0jjp_kEoikoW6krIO8RsS-JdvObqT5CipNzywSrQN4HujBuw6JXH5pJDTrvo2Di77_0RRQTTzsbDZ0nJkoRFDslINdCCtLiHQg6mwKougb4I3aiU83Al0LEcJy3JwyMwCNWXIbs5aTUyAlfhbYk7frYpdRtSmAk2YZdir7ROdN3RzdJmRM1bhx1kY1-duvZ28fjSNK6QjBlhoyp4kDzVXsk4ssvSVnbU_PZtX5sZdKcHg")` }}></div>

                            {/* Search Overlay */}
                            <div className="absolute top-6 left-6 right-6 z-10">
                                <div className="flex items-center h-14 bg-white/95 dark:bg-[#112111]/95 backdrop-blur-md rounded-2xl shadow-xl px-5 border border-white/20 group focus-within:ring-4 ring-primary/10 transition-all">
                                    <span className="material-symbols-outlined text-primary mr-3 !text-2xl">search</span>
                                    <input className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold uppercase tracking-widest placeholder:text-gray-400" placeholder="Search countries or hubs" />
                                </div>
                            </div>

                            {/* Map Hotspots */}
                            <div className="absolute top-1/2 left-1/3 group cursor-pointer">
                                <div className="absolute -inset-4 bg-primary/30 rounded-full animate-ping"></div>
                                <div className="size-5 bg-primary rounded-full border-2 border-white shadow-xl relative z-10 group-hover:scale-125 transition-transform"></div>
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0a0a0a] text-white px-3 py-1.5 rounded-xl shadow-2xl border border-white/10 whitespace-nowrap scale-0 group-hover:scale-100 transition-transform origin-top">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Nigeria Hub</span>
                                </div>
                            </div>

                            <div className="absolute top-2/3 right-1/4 group cursor-pointer">
                                <div className="size-4 bg-primary/50 rounded-full border-2 border-white shadow-lg relative z-10 group-hover:scale-125 transition-transform"></div>
                            </div>

                            {/* Zoom Controls */}
                            <div className="absolute bottom-6 right-6 flex flex-col gap-3">
                                <div className="flex flex-col bg-white/95 dark:bg-[#112111]/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20">
                                    <button className="size-12 flex items-center justify-center border-b border-gray-100 dark:border-white/10 active:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                    <button className="size-12 flex items-center justify-center active:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined">remove</span>
                                    </button>
                                </div>
                                <button className="size-12 flex items-center justify-center bg-primary text-[#0a0a0a] rounded-2xl shadow-xl active:scale-90 transition-all">
                                    <span className="material-symbols-outlined !text-2xl fill-1">near_me</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Selected Region Card */}
                    <div className="px-4 mb-8">
                        <div className="bg-gradient-to-br from-background-dark to-[#0a150a] rounded-[40px] p-8 shadow-2xl relative overflow-hidden border border-primary/20 group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform group-hover:scale-150 duration-1000">
                                <span className="material-symbols-outlined !text-9xl text-white">analytics</span>
                            </div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">Detailed Insight</p>
                                        <h3 className="text-white text-4xl font-black leading-none">Nigeria</h3>
                                    </div>
                                    <button className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20 text-white hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {[
                                        { label: 'Active Startups', val: '150+' },
                                        { label: 'YTD Funding', val: '$450M' },
                                        { label: 'Top Sector', val: 'Telemedicine', full: true, icon: 'medical_services' },
                                    ].map((stat, i) => (
                                        <div key={i} className={`bg-white/5 rounded-3xl p-5 border border-white/10 flex flex-col justify-between ${stat.full ? 'col-span-2' : ''}`}>
                                            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2 opacity-60 leading-none">{stat.label}</p>
                                            <div className="flex justify-between items-end">
                                                <p className="text-white text-2xl font-black leading-none">{stat.val}</p>
                                                {stat.icon && <span className="material-symbols-outlined text-primary !text-2xl">{stat.icon}</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full bg-primary hover:bg-white text-[#0a0a0a] font-black uppercase tracking-[0.15em] text-xs py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl">
                                    Full Ecosystem Report
                                    <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Navigation Bar */}
                <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 px-8 py-4 flex justify-between items-center z-50">
                    <Link to="/" className="flex flex-col items-center gap-1 text-gray-400">
                        <span className="material-symbols-outlined">home</span>
                        <span className="text-[10px] font-black uppercase tracking-tighter">Home</span>
                    </Link>
                    <div className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined fill-1">public</span>
                        <span className="text-[10px] font-black uppercase tracking-tighter">Trends</span>
                    </div>
                    <Link to="/search" className="flex flex-col items-center gap-1 text-gray-400">
                        <span className="material-symbols-outlined">explore</span>
                        <span className="text-[10px] font-black uppercase tracking-tighter">Explore</span>
                    </Link>
                    <Link to="/profile" className="flex flex-col items-center gap-1 text-gray-400">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-black uppercase tracking-tighter">Profile</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default TrendsMap;
