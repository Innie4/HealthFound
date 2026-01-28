import React from 'react';
import { Link } from 'react-router-dom';

const ReportPreview = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111816] dark:text-white font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-xl overflow-x-hidden pb-32">
                {/* Header Section with Image */}
                <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbi-MSrOL9jk_RnrTy4ZQKVgzSbTsd5cRwKn6aoPiWELEGMnWD0ufajL86rXee3b_qwF-Pm_ZO4w2wcilOdQlaBbY0-1HAB4IaxbfJwB02NQOl1kRDVzzFpKAJ6Mzg_ic_lySSa1zcLso4AcSpUETYXamtij-N1CPbbRu3c56f83DeVfB53yJmfl0a44_GTeNwGHHGgh4h1L1xtxIgeCw9rmpiprNvObh0oeMzh74-SFg4P8ezfbldH-Qrhdo7zL926MwCfLsaKQ')` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/30 to-transparent"></div>
                    <Link to="/market-dashboard" className="absolute top-4 left-4 size-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex gap-2 mb-3">
                            <span className="bg-primary px-2 py-0.5 rounded text-[10px] font-black text-[#10221c] uppercase tracking-widest">Premium Report</span>
                            <span className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">2024 Edition</span>
                        </div>
                        <h1 className="text-white text-3xl font-extrabold leading-tight tracking-tight">African Healthcare Innovation Report</h1>
                        <div className="flex items-center gap-4 mt-4 text-white/70 text-xs font-bold uppercase tracking-widest">
                            <span>84 Pages</span>
                            <span className="size-1 bg-primary rounded-full"></span>
                            <span>12 Case Studies</span>
                        </div>
                    </div>
                </div>

                <main className="p-6">
                    <div className="flex flex-col gap-8">
                        {/* Executive Summary Teaser */}
                        <section>
                            <h2 className="text-xl font-extrabold tracking-tight mb-3">Executive Summary</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                Unlock the most comprehensive data on Africa's healthtech ecosystem. This report provides deep-dive analysis on venture capital flow, regulatory shifts across 15 key markets, and identifying the next 'soonicorns' in the diagnostic and supply-chain sectors.
                            </p>
                        </section>

                        {/* What's Inside Grid */}
                        <section>
                            <h2 className="text-xl font-extrabold tracking-tight mb-4 text-[#63886f]">What's Inside</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { icon: 'monitoring', title: 'Funding Landscape', desc: 'Breakdown of sub-seed to series C funding velocity.' },
                                    { icon: 'account_balance', title: 'Regulatory Tracker', desc: 'Current compliance mandates across ECOWAS and EAC.' },
                                    { icon: 'hub', title: 'Hub Performance', desc: 'Lagos, Nairobi, and Cairo ecosystem maturity scores.' },
                                    { icon: 'insights', title: 'Future Projections', desc: 'AI adoption rates and telemedicine penetration 2024-2030.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base dark:text-white leading-tight mb-1">{item.title}</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-normal">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Visual Analytics Preview */}
                        <section className="bg-background-dark rounded-3xl p-6 text-white overflow-hidden relative shadow-2xl">
                            <div className="flex justify-between items-center mb-6 relative z-10">
                                <h3 className="font-bold text-lg">Visual Analytics</h3>
                                <span className="text-primary text-[10px] font-black uppercase tracking-widest">Data Preview</span>
                            </div>
                            <div className="space-y-4 relative z-10">
                                <div className="h-4 w-3/4 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-2/3"></div>
                                </div>
                                <div className="h-4 w-1/2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-1/2"></div>
                                </div>
                                <div className="h-4 w-5/6 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-3/4"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-20 flex items-center justify-center pointer-events-none">
                                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest shadow-xl">
                                    Full Access Only
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                {/* Purchase Bottom CTA */}
                <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white/90 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 p-4 pb-10 z-50">
                    <div className="flex items-baseline justify-between mb-4 px-2">
                        <div>
                            <p className="text-[10px] font-bold text-[#63886f] uppercase tracking-widest">Full Digital Access</p>
                            <p className="text-2xl font-black text-primary">$299.00</p>
                        </div>
                        <p className="text-xs text-gray-500 line-through font-bold">$450.00</p>
                    </div>
                    <Link to="/checkout" className="flex items-center justify-center gap-3 w-full bg-[#10221c] dark:bg-primary text-primary dark:text-[#10221c] py-4 rounded-xl font-extrabold text-base shadow-xl transition-all active:scale-[0.98]">
                        <span className="material-symbols-outlined text-xl">shopping_cart</span>
                        Unlock Full Report
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReportPreview;
