import React from 'react';
import { Link } from 'react-router-dom';

const MediaKit = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111816] dark:text-white font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark overflow-x-hidden shadow-2xl">
                {/* TopAppBar */}
                <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
                    <Link to="/advertise" className="text-[#111816] dark:text-white flex size-12 shrink-0 items-center justify-start transition-transform hover:scale-110">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h2 className="text-[#111816] dark:text-white text-lg font-black leading-tight tracking-[-0.015em] flex-1 text-center pr-12 font-display uppercase tracking-[0.2em]">Media Hub</h2>
                </div>

                <main className="p-6">
                    {/* Header Visual */}
                    <div className="relative h-64 w-full rounded-[40px] overflow-hidden mb-10 shadow-2xl">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbi-MSrOL9jk_RnrTy4ZQKVgzSbTsd5cRwKn6aoPiWELEGMnWD0ufajL86rXee3b_qwF-Pm_ZO4w2wcilOdQlaBbY0-1HAB4IaxbfJwB02NQOl1kRDVzzFpKAJ6Mzg_ic_lySSa1zcLso4AcSpUETYXamtij-N1CPbbRu3c56f83DeVfB53yJmfl0a44_GTeNwGHHGgh4h1L1xtxIgeCw9rmpiprNvObh0oeMzh74-SFg4P8ezfbldH-Qrhdo7zL926MwCfLsaKQ')` }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-8 right-8">
                            <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-black text-[#112116] uppercase tracking-[0.2em] mb-3 inline-block">2024 Media Kit</span>
                            <h1 className="text-white text-2xl font-black leading-tight tracking-tight">Partner with Africa's fastest-growing health hub</h1>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {/* Value Proposition Grid */}
                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#63886f] mb-6 border-l-4 border-primary pl-3">Impact Metrics</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm">
                                    <p className="text-3xl font-black mb-1">45k+</p>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Active Readers</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm">
                                    <p className="text-3xl font-black mb-1">22%</p>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Avg. Open Rate</p>
                                </div>
                            </div>
                        </section>

                        {/* Request Form */}
                        <section className="bg-gray-50 dark:bg-[#112116]/50 p-8 rounded-[48px] border border-gray-100 dark:border-white/5">
                            <h3 className="text-xl font-black mb-2 text-center">Get the full Media Kit</h3>
                            <p className="text-sm text-gray-500 text-center mb-8 font-medium">Includes deep audience demographics, ad specs, and sponsorship tiers.</p>

                            <form className="space-y-4">
                                <div className="space-y-1.5 focus-within:translate-x-2 transition-transform">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Full Name</label>
                                    <input className="w-full h-14 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 text-sm font-bold focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="Sarah Adebayo" type="text" />
                                </div>
                                <div className="space-y-1.5 focus-within:translate-x-2 transition-transform">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Work Email</label>
                                    <input className="w-full h-14 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 text-sm font-bold focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="sarah@company.com" type="email" />
                                </div>
                                <div className="space-y-1.5 focus-within:translate-x-2 transition-transform">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Organization</label>
                                    <input className="w-full h-14 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-5 text-sm font-bold focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="e.g. Novartis" type="text" />
                                </div>

                                <div className="h-4"></div>

                                <Link to="/success-media-kit" className="block w-full h-16 bg-primary text-[#112116] rounded-3xl font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                    Request Access
                                    <span className="material-symbols-outlined !text-xl">download_done</span>
                                </Link>
                            </form>
                        </section>
                    </div>

                    {/* Direct Support */}
                    <div className="py-12 text-center">
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Need custom solutions?</p>
                        <button className="mt-4 text-primary font-black uppercase tracking-widest text-sm flex items-center gap-2 mx-auto hover:scale-105 transition-all">
                            <span className="material-symbols-outlined !text-lg">contact_mail</span>
                            Email our Ad Team
                        </button>
                    </div>
                </main>

                {/* Decorative elements */}
                <div className="fixed top-0 right-0 size-80 bg-primary/20 rounded-full blur-[120px] -z-10 -translate-y-40 translate-x-40"></div>
                <div className="fixed bottom-0 left-0 size-80 bg-primary/10 rounded-full blur-[100px] -z-10 translate-y-40 -translate-x-40"></div>
            </div>
        </div>
    );
};

export default MediaKit;
