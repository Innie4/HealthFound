import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Membership = () => {
    const [billing, setBilling] = useState('monthly');

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111811] dark:text-white font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col max-w-7xl mx-auto bg-white dark:bg-[#0a0a0a] shadow-xl overflow-x-hidden pb-10 border-x border-gray-100 dark:border-white/5">
                {/* Top Header */}
                <div className="flex items-center p-4 pt-6 justify-between bg-white dark:bg-[#0a0a0a]">
                    <Link to="/profile" className="text-[#111811] dark:text-white transition-opacity hover:opacity-70">
                        <span className="material-symbols-outlined">close</span>
                    </Link>
                    <div className="flex gap-1 items-center">
                        <div className="bg-primary size-6 rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#0a0a0a] !text-sm font-black">bolt</span>
                        </div>
                        <h1 className="text-sm font-black uppercase tracking-[0.2em]">Upgrade Pro</h1>
                    </div>
                    <div className="size-6"></div>
                </div>

                <main className="px-5 pt-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black tracking-tight leading-tight mb-2">Power your healthcare investments</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium px-4">Join 2,000+ professionals accessing Africa's deepest healthcare data hub.</p>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex justify-center mb-10">
                        <div className="bg-gray-100 dark:bg-white/5 p-1.5 rounded-2xl flex gap-1 border border-gray-200 dark:border-white/10">
                            <button
                                onClick={() => setBilling('monthly')}
                                className={`flex items-center justify-center h-10 px-6 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${billing === 'monthly' ? 'bg-primary text-[#0a0a0a]' : 'text-gray-500 dark:text-white/40 hover:bg-white/5'}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBilling('annual')}
                                className={`flex items-center justify-center h-10 px-6 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${billing === 'annual' ? 'bg-primary text-[#0a0a0a]' : 'text-gray-500 dark:text-white/40 hover:bg-white/5'}`}
                            >
                                Annual <span className="ml-2 bg-black/10 dark:bg-white/10 px-1.5 py-0.5 rounded text-[8px]">-20%</span>
                            </button>
                        </div>
                    </div>

                    {/* Tiers Scroll/Stack */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {/* Tier 1: Pro Individal */}
                        <div className="relative p-6 rounded-3xl border-2 border-primary/20 bg-white dark:bg-white/5 shadow-lg group hover:border-primary transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-black text-primary uppercase tracking-widest leading-none mb-1">Individual</h3>
                                    <p className="text-xs text-[#63886f] font-bold">Best for independent researchers</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-black">{billing === 'monthly' ? '$29' : '$230'}</p>
                                    <p className="text-[10px] text-gray-400 uppercase font-bold">{billing === 'monthly' ? '/ month' : '/ year'}</p>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Unlimited insight articles",
                                    "Debate Circle active voting",
                                    "Saved articles & bookmarks",
                                    "Monthly newsletter summary",
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 items-center">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <span className="text-sm font-semibold dark:text-gray-200">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full h-14 bg-primary text-[#0a0a0a] font-black uppercase tracking-widest text-sm rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                Choose Plan
                            </button>
                        </div>

                        {/* Tier 2: Institutional (Recommended) */}
                        <div className="relative p-7 rounded-3xl bg-[#0a0a0a] border-2 border-primary text-white shadow-2xl overflow-hidden active:scale-[0.99] transition-transform">
                            {/* Badge */}
                            <div className="absolute top-0 right-0 bg-primary text-[#0a0a0a] px-5 py-1 text-[10px] font-black uppercase tracking-[0.2em] rounded-bl-2xl">
                                Popular
                            </div>

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-black text-primary uppercase tracking-widest leading-none mb-1">Institutional</h3>
                                    <p className="text-xs text-primary font-bold opacity-80">For investment teams & startups</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-black">{billing === 'monthly' ? '$149' : '$1,200'}</p>
                                    <p className="text-[10px] opacity-50 uppercase font-bold">{billing === 'monthly' ? '/ month' : '/ year'}</p>
                                </div>
                            </div>

                            <ul className="space-y-5 mb-8">
                                {[
                                    "Access to full report archives",
                                    "Interactive trends map data",
                                    "Regional comparison tool",
                                    "Custom research discounts",
                                    "Up to 5 team members",
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 items-center">
                                        <span className="material-symbols-outlined text-primary text-xl">verified</span>
                                        <span className="text-sm font-bold opacity-90">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full h-14 bg-white text-[#0a0a0a] font-black uppercase tracking-widest text-sm rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                                Upgrade to Institutional
                            </button>

                            {/* Background pattern */}
                            <div className="absolute -bottom-10 -right-10 size-40 bg-primary/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                    <div className="mt-12 text-center pb-12">
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Enterprise needs?</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 text-primary text-sm font-black hover:underline uppercase tracking-widest">
                            Contact our sales team <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Membership;
