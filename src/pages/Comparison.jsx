import React from 'react';
import { Link } from 'react-router-dom';

const Comparison = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-xl pb-24">
                {/* TopAppBar */}
                <div className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
                    <div className="flex items-center p-4 pb-2 justify-between">
                        <Link to="/market-dashboard" className="text-[#111813] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">arrow_back_ios</span>
                        </Link>
                        <h2 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Regional Comparison</h2>
                        <div className="flex w-12 items-center justify-end">
                            <button className="flex items-center justify-center text-[#111813] dark:text-white">
                                <span className="material-symbols-outlined">info</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Selection Area */}
                <div className="px-4 py-3">
                    <div className="flex flex-wrap items-end gap-3">
                        <label className="flex flex-col min-w-[140px] flex-1">
                            <p className="text-[#111813] dark:text-white/80 text-[10px] font-bold leading-normal pb-1 uppercase tracking-widest">Region A</p>
                            <div className="relative">
                                <select className="form-select flex w-full min-w-0 flex-1 appearance-none rounded-lg text-[#111813] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-[#dce5df] dark:border-white/10 bg-white dark:bg-white/5 h-12 p-[12px] text-sm font-bold leading-normal">
                                    <option>West Africa</option>
                                    <option>East Africa</option>
                                    <option>North Africa</option>
                                    <option>Southern Africa</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#111813] dark:text-white">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </label>
                        <div className="pb-3 text-[#111813] dark:text-white/40">
                            <span className="material-symbols-outlined">compare_arrows</span>
                        </div>
                        <label className="flex flex-col min-w-[140px] flex-1">
                            <p className="text-[#111813] dark:text-white/80 text-[10px] font-bold leading-normal pb-1 uppercase tracking-widest">Region B</p>
                            <div className="relative">
                                <select className="form-select flex w-full min-w-0 flex-1 appearance-none rounded-lg text-[#111813] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-[#dce5df] dark:border-white/10 bg-white dark:bg-white/5 h-12 p-[12px] text-sm font-bold leading-normal">
                                    <option>East Africa</option>
                                    <option>West Africa</option>
                                    <option>North Africa</option>
                                    <option>Southern Africa</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#111813] dark:text-white">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Charts Section: Funding Growth */}
                <div className="mt-4 px-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Funding Growth (USD)</h3>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full uppercase tracking-tighter">Live Data</span>
                    </div>
                    <div className="p-4 rounded-xl border border-[#dce5df] dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">
                        <div className="flex justify-between items-baseline mb-6">
                            <div className="flex flex-col">
                                <p className="text-[10px] font-bold text-[#63886f] dark:text-white/40 uppercase tracking-widest">Total Combined</p>
                                <p className="text-2xl font-extrabold text-[#111813] dark:text-white">$830M</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center gap-1.5">
                                    <div className="size-2 rounded-full bg-primary"></div>
                                    <span className="text-[10px] text-[#111813] dark:text-white font-bold uppercase">West</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="size-2 rounded-full bg-[#63886f]"></div>
                                    <span className="text-[10px] text-[#111813] dark:text-white font-bold uppercase">East</span>
                                </div>
                            </div>
                        </div>
                        {/* Chart SVG Mockup */}
                        <div className="relative min-h-[120px] w-full">
                            <svg fill="none" height="120" preserveAspectRatio="none" viewBox="0 0 400 120" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 100 Q 50 80, 100 90 T 200 40 T 300 60 T 400 20" fill="none" stroke="#19e65e" strokeWidth="3" className="drop-shadow-sm"></path>
                                <path d="M0 110 Q 50 100, 100 95 T 200 80 T 300 70 T 400 50" fill="none" stroke="#63886f" strokeDasharray="4 2" strokeWidth="2"></path>
                            </svg>
                        </div>
                        <div className="flex justify-between mt-4">
                            {['2020', '2021', '2022', '2023', '2024'].map(year => (
                                <p key={year} className="text-[#63886f] text-[10px] font-black">{year}</p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sub-sector Maturity Section */}
                <div className="mt-8 px-4">
                    <h3 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Sub-sector Maturity</h3>
                    <div className="flex flex-col gap-6">
                        {[
                            { name: 'Telemedicine', a: 8.5, b: 7.2 },
                            { name: 'E-Pharmacy', a: 6.0, b: 7.8 },
                            { name: 'Health Insurtech', a: 4.5, b: 4.0 },
                        ].map((sector, i) => (
                            <div key={i} className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-[#111813] dark:text-white tracking-tight">{sector.name}</span>
                                    <span className="text-[10px] text-[#63886f] dark:text-white/40 font-bold uppercase tracking-widest">Score 1-10</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${sector.a * 10}%` }}></div>
                                        </div>
                                        <span className="text-xs font-black w-6 text-right leading-none">{sector.a}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#63886f] rounded-full transition-all duration-1000" style={{ width: `${sector.b * 10}%` }}></div>
                                        </div>
                                        <span className="text-xs font-black w-6 text-right leading-none opacity-60">{sector.b}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Metrics Table */}
                <div className="mt-10 px-4">
                    <h3 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Core Metrics</h3>
                    <div className="overflow-hidden rounded-xl border border-[#dce5df] dark:border-white/10 shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-white/5">
                                    <th className="p-3 text-[10px] font-black text-[#63886f] uppercase tracking-widest">Metric</th>
                                    <th className="p-3 text-[10px] font-black text-primary uppercase text-center tracking-widest">West</th>
                                    <th className="p-3 text-[10px] font-black text-[#63886f] uppercase text-center tracking-widest">East</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#dce5df] dark:divide-white/10">
                                {[
                                    { m: 'Regulatory Ease', a: '7.8', b: '6.5' },
                                    { m: 'Internet Pen.', a: '42%', b: '38%' },
                                    { m: 'Mobile Money', a: '65%', b: '82%' },
                                    { m: 'Avg. Seed Size', a: '$1.2M', b: '$0.9M' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                                        <td className="p-3 text-xs font-bold text-[#111813] dark:text-white/80">{row.m}</td>
                                        <td className="p-3 text-xs font-extrabold text-center text-[#111813] dark:text-white">{row.a}</td>
                                        <td className="p-3 text-xs font-extrabold text-center text-[#63886f] dark:text-white">{row.b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Sticky Bottom CTA */}
                <div className="fixed bottom-0 left-0 right-0 p-4 max-w-[480px] mx-auto bg-gradient-to-t from-white dark:from-background-dark via-white dark:via-background-dark to-transparent z-40">
                    <button className="w-full bg-primary text-[#10221c] flex items-center justify-center gap-3 h-14 rounded-xl font-extrabold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        <span className="material-symbols-outlined">picture_as_pdf</span>
                        Download Comparison PDF
                        <span className="bg-[#10221c] text-primary text-[10px] px-1.5 py-0.5 rounded font-black ml-1">PRO</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comparison;
