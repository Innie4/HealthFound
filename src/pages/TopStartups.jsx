import React from 'react';
import { Link } from 'react-router-dom';

const TopStartups = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111811] dark:text-white font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-2xl overflow-x-hidden pb-32">
                {/* Header Hero */}
                <section className="relative h-[300px] w-full flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbi-MSrOL9jk_RnrTy4ZQKVgzSbTsd5cRwKn6aoPiWELEGMnWD0ufajL86rXee3b_qwF-Pm_ZO4w2wcilOdQlaBbY0-1HAB4IaxbfJwB02NQOl1kRDVzzFpKAJ6Mzg_ic_lySSa1zcLso4AcSpUETYXamtij-N1CPbbRu3c56f83DeVfB53yJmfl0a44_GTeNwGHHGgh4h1L1xtxIgeCw9rmpiprNvObh0oeMzh74-SFg4P8ezfbldH-Qrhdo7zL926MwCfLsaKQ')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                    <Link to="/" className="absolute top-4 left-4 size-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-full px-4 py-1.5 mb-4">
                            <span className="material-symbols-outlined text-primary text-sm">workspace_premium</span>
                            <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Annual Rankings</span>
                        </div>
                        <h1 className="text-white text-4xl font-black leading-tight tracking-tight mb-2">Top 10 Health Startups</h1>
                        <p className="text-white/70 text-sm font-bold opacity-90">Mapping the disruptive forces in African healthcare (2024 Edition)</p>
                    </div>
                </section>

                {/* Content Tabs */}
                <div className="flex gap-4 p-4 sticky top-0 bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10 z-20">
                    {['Top 10 List', 'Sub-Sectors', 'Methodology'].map((tab, i) => (
                        <button key={tab} className={`flex-1 flex h-10 items-center justify-center rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary text-[#011b10] shadow-lg' : 'text-gray-500 dark:text-white hover:bg-white/5'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                <main className="p-4 space-y-8">
                    {/* Rank #1 - Featured Style */}
                    <div className="group/card @container transform perspective-1000">
                        <div className="flex flex-col items-stretch justify-start rounded-[32px] overflow-hidden shadow-2xl bg-white dark:bg-[#112111] border border-primary/20 transition-all duration-500 hover:scale-[1.02]">
                            <div className="relative w-full aspect-[16/9] bg-center bg-cover" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4CO59ZMMHoGrzjQk9INxRGUxIGR3hEu6YsBaCBnmNZNgh_OwN5h1v6Ax21Q3cIS9ncOevNCOoE9wZ5dwJonGkNBOe8oQ51R7iRRHky247mkuwBq1HbBTazJIi-AXhUmLi5BEcpC7boGLYKPF5HXBC58ewNyw1eb75joUw8T1-TSZnAUdObc8I0P3JJVEVht4dO0KsVas0syFqHAdBhMZ92H5TfLLFc7ZVgTnZ17bJK0CdS51s8nP-iHfuXp2gctSN66WcnXVbug')` }}>
                                <div className="absolute top-4 left-4 flex items-center justify-center size-14 bg-primary text-[#011b10] rounded-2xl shadow-2xl rotate-[-4deg] group-hover/card:rotate-0 transition-transform">
                                    <span className="text-2xl font-black">#1</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#112111] via-transparent to-transparent"></div>
                            </div>
                            <div className="flex w-full flex-col gap-6 p-6 border-t border-primary/10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-[#111811] dark:text-white text-3xl font-black tracking-tight leading-none mb-2">mPharma</h3>
                                        <p className="text-primary text-xs font-black uppercase tracking-widest">HQ: Accra, Ghana</p>
                                    </div>
                                    <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover/card:bg-primary transition-colors">
                                        <span className="material-symbols-outlined text-primary group-hover/card:text-[#011b10] !text-4xl">medical_services</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">The Impact Case</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                                        mPharma continues to scale its 'QualityRx' program, reducing drug stockouts by 40%. Their data-driven approach is stabilizing supply chains for millions across the continent.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 shadow-sm">
                                        <p className="text-[#63886f] text-[9px] font-black uppercase tracking-widest mb-1">Funding to Date</p>
                                        <p className="text-[#111811] dark:text-white text-xl font-black">$90M+</p>
                                    </div>
                                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 shadow-sm">
                                        <p className="text-[#63886f] text-[9px] font-black uppercase tracking-widest mb-1">Impact Score</p>
                                        <div className="flex items-baseline gap-1">
                                            <p className="text-[#111811] dark:text-white text-xl font-black">98</p>
                                            <span className="text-gray-500 text-[10px] font-bold">/100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ranking List Item #2-10 */}
                    <div className="space-y-4">
                        {[
                            { rank: '2', name: 'Zipline', sector: 'Logistics', hub: 'Rwanda' },
                            { rank: '3', name: '54gene', sector: 'Genomics', hub: 'Nigeria' },
                            { rank: '4', name: 'Vezeeta', sector: 'SaaS', hub: 'Egypt' },
                            { rank: '5', name: 'LifeBank', sector: 'Supply Chain', hub: 'Nigeria' },
                        ].map((co) => (
                            <div key={co.rank} className="group p-5 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex gap-5 items-center hover:bg-white dark:hover:bg-primary/5 transition-all shadow-sm">
                                <span className="text-lg font-black text-gray-400 group-hover:text-primary transition-colors w-6">#{co.rank}</span>
                                <div className="flex-1">
                                    <h4 className="text-[#111811] dark:text-white font-black text-base">{co.name}</h4>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{co.sector} • {co.hub}</p>
                                </div>
                                <button className="size-10 rounded-full bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-[#011b10] group-hover:border-primary transition-all">
                                    <span className="material-symbols-outlined !text-sm">arrow_forward_ios</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Floating Action CTA */}
                <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 max-w-[480px] mx-auto bg-gradient-to-t from-white dark:from-background-dark via-white dark:via-background-dark to-transparent z-50">
                    <button className="w-full h-16 bg-[#011b10] dark:bg-primary text-primary dark:text-[#011b10] rounded-2xl flex items-center justify-center gap-4 font-black uppercase tracking-[0.2em] text-xs shadow-2xl active:scale-[0.98] transition-all">
                        <span className="material-symbols-outlined animate-bounce">download</span>
                        Download Full Report
                        <span className="bg-primary/20 dark:bg-black/10 px-2 py-0.5 rounded text-[8px] font-black">PRO</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopStartups;
