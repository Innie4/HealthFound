import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const StartupWeekly = () => {
    return (
        <div className="bg-[#f2f5f1] dark:bg-[#0a0f08] min-h-screen text-[#111813] dark:text-white font-display">
            <header className="sticky top-0 z-50 bg-[#639041] px-4 py-4 text-white shadow-xl">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-white text-3xl font-black">rocket</span>
                        <h1 className="text-xl font-black uppercase tracking-tighter">Startup Weekly</h1>
                    </Link>
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                        Vol. 42 • Jan 2024
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto pb-24 px-4 pt-12">
                <section className="text-center space-y-4 mb-16">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-[#639041] dark:text-[#8abe66]">Funding & Scale</h2>
                    <p className="text-xl font-medium text-gray-500 max-w-2xl mx-auto uppercase tracking-extra-wide">Your weekly deep dive into African HealthTech ventures.</p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-12">
                        <article className="bg-white dark:bg-white/5 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all group">
                            <div className="h-[400px] overflow-hidden">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_3LZQw_2564FgaoWhwGVXpZv6KYsaG13kMWsC9tXiLJJdKc9MK-MjhqSbCCX46ng4-FnS4AiIKsopwwnp0WKOor9YgZ1x1Ua6y2zngEqu1N8J9Tub4ozGQ6j6xCHSthtWMqg9uSNDHZGj8m4xo10nlbqspb4tBZ_yt24SGHi34ZErTKrqmz39-JGe4Nm1JwaQSkcDnn4HL4PC79XpRF2N0RbdUhAOqLfprYOWT1lqn_FMLnLY9d7eQf23IVHhbcdp8HzEq-I14Q"
                                    alt="Startup Scale"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                            <div className="p-10 space-y-6">
                                <div className="flex gap-4">
                                    <span className="bg-[#639041] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase">Series B</span>
                                    <span className="text-[#639041] text-[10px] font-black uppercase tracking-widest self-center">12 min read</span>
                                </div>
                                <h3 className="text-4xl font-black leading-tight">The mPharma Strategy: Consolidating the fragmented African pharmacy market</h3>
                                <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                    A detailed analysis of how digital inventory management is securing supply chains across Ghana, Nigeria, and Zambia.
                                </p>
                                <button className="text-[#639041] font-black flex items-center gap-2 group-hover:gap-4 transition-all">
                                    READ FULL ANALYSIS
                                    <span className="material-symbols-outlined">east</span>
                                </button>
                            </div>
                        </article>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Financing Diagnostics", cat: "Market Analysis", color: "#639041" },
                                { title: "Telehealth Sustainability", cat: "Op-Ed", color: "#639041" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-[#639041]/30 transition-all cursor-pointer">
                                    <span className="text-[10px] font-black text-[#639041] uppercase tracking-widest mb-4 block">{item.cat}</span>
                                    <h4 className="text-2xl font-black leading-tight">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-[#639041] text-white p-8 rounded-[2rem] shadow-xl">
                            <h4 className="text-2xl font-black mb-6">Weekly Dashboard</h4>
                            <div className="space-y-6">
                                <div className="flex justify-between border-b border-white/20 pb-4">
                                    <span className="font-bold opacity-80 uppercase text-xs tracking-widest">Total Funding</span>
                                    <span className="font-black">$124.5M</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-4">
                                    <span className="font-bold opacity-80 uppercase text-xs tracking-widest">New Ventures</span>
                                    <span className="font-black">12</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-4">
                                    <span className="font-bold opacity-80 uppercase text-xs tracking-widest">M&A Activity</span>
                                    <span className="font-black">3 Deals</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
                            <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#639041]">notifications_active</span>
                                Subscribe to Weekly
                            </h4>
                            <input
                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-4 mb-4"
                                placeholder="name@company.com"
                            />
                            <button className="w-full bg-[#639041] text-white font-black py-4 rounded-xl shadow-lg shadow-[#639041]/20">
                                JOIN 8,000+ FOUNDERS
                            </button>
                        </div>
                    </aside>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default StartupWeekly;
