import React from 'react';
import { Link } from 'react-router-dom';

const MarketDashboard = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111816] dark:text-white font-display">
            <div className="relative flex min-h-screen w-full flex-col max-w-7xl mx-auto bg-white dark:bg-background-dark shadow-xl pb-24 border-x border-gray-100 dark:border-white/5">
                {/* TopAppBar */}
                <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
                    <div className="flex items-center p-4 justify-between">
                        <Link to="/" className="text-[#111816] dark:text-white flex size-12 shrink-0 items-center justify-start">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </Link>
                        <h2 className="text-[#111816] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Market Intelligence</h2>
                        <div className="flex w-12 items-center justify-end">
                            <button className="flex items-center justify-center text-[#111816] dark:text-white">
                                <span className="material-symbols-outlined">settings</span>
                            </button>
                        </div>
                    </div>
                </header>

                <main className="p-4 space-y-6">
                    {/* Pro Insight Card */}
                    <div className="bg-gradient-to-br from-primary to-[#10221c] p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">Pro Insight</span>
                            </div>
                            <h3 className="text-2xl font-extrabold leading-tight mb-3">HealthTech Funding is up 24% YoY</h3>
                            <p className="text-sm opacity-90 leading-relaxed mb-4">West African startups leading the charge with significant seed round expansions.</p>
                            <button className="bg-white text-[#10221c] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg active:scale-95 transition-transform">
                                Read Analysis <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 size-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-4 rounded-xl shadow-sm">
                            <p className="text-[#63886f] text-xs font-bold uppercase tracking-wider mb-1">Total Market</p>
                            <div className="flex items-baseline gap-2">
                                <p className="text-2xl font-extrabold">$2.4B</p>
                                <p className="text-[#07882e] text-[10px] font-bold">+12%</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-4 rounded-xl shadow-sm">
                            <p className="text-[#63886f] text-xs font-bold uppercase tracking-wider mb-1">Active Hubs</p>
                            <div className="flex items-baseline gap-2">
                                <p className="text-2xl font-extrabold">142</p>
                                <p className="text-[#07882e] text-[10px] font-bold">New: 4</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Funding Trends Chart Mockup */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-bold tracking-tight">Funding Trends</h4>
                                <select className="bg-transparent text-primary text-xs font-bold border-none focus:ring-0 cursor-pointer">
                                    <option>Last 6 Months</option>
                                    <option>Last Year</option>
                                </select>
                            </div>
                            <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-4 rounded-2xl h-full">
                                <div className="h-48 w-full flex items-end gap-2 pb-6 relative">
                                    {[45, 60, 42, 85, 55, 75].map((h, i) => (
                                        <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-lg relative group cursor-pointer" style={{ height: `${h}%` }}>
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#10221c] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                                ${h}M
                                            </div>
                                        </div>
                                    ))}
                                    {/* Y-Axis Guideline */}
                                    <div className="absolute left-0 bottom-6 right-0 h-px bg-gray-100 dark:bg-white/5"></div>
                                </div>
                                <div className="flex justify-between px-2 text-[10px] text-[#63886f] font-bold uppercase">
                                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                                </div>
                            </div>
                        </section>

                        {/* Sector Allocation */}
                        <section>
                            <h4 className="text-lg font-bold tracking-tight mb-4">Top Invested Sectors</h4>
                            <div className="space-y-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-6 rounded-2xl h-full">
                                {[
                                    { name: 'Telemedicine', percent: 45, color: '#15A147' },
                                    { name: 'E-Pharmacy', percent: 28, color: '#63886f' },
                                    { name: 'Insurtech', percent: 18, color: '#2b4d44' },
                                    { name: 'Diagnostics', percent: 9, color: '#8fb7ab' },
                                ].map((sector, i) => (
                                    <div key={i} className="flex flex-col gap-1.5">
                                        <div className="flex justify-between items-center text-xs font-bold">
                                            <span>{sector.name}</span>
                                            <span className="text-[#63886f]">{sector.percent}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${sector.percent}%`, backgroundColor: sector.color }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Recent Major Rounds */}
                    <section className="pb-8">
                        <h4 className="text-lg font-bold tracking-tight mb-4">Major Recent Rounds</h4>
                        <div className="flex flex-col gap-4">
                            {[
                                { company: 'HealthNode', amount: '$15.2M', series: 'Series A', date: '2 days ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAXrPKiyunX0mwiktooJGlBFKpw1ctz_o2ivyZkii4J5EIBakcCKd3wzFDWL6KrZTlLgIrEyHy9Jdij0qbbnHdZZTQovcr1f2oedKV3Fvg7Qd98mzswbyd-JtIrhFLqY8ph_6EzdVMmYPoyOV4b0YZb29LketPXLAuLFitTEX0N18TwLoeQnkaZvpZmTwcARXJoQ_lC11lDva0aRFEdkkhNDGsjdyHrgTuQIbp6JG58xyVVRwwUrS26-rBRIDSXfkMuvIertzufQ' },
                                { company: 'PharmaLink', amount: '$4.8M', series: 'Seed', date: '1 week ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAXrPKiyunX0mwiktooJGlBFKpw1ctz_o2ivyZkii4J5EIBakcCKd3wzFDWL6KrZTlLgIrEyHy9Jdij0qbbnHdZZTQovcr1f2oedKV3Fvg7Qd98mzswbyd-JtIrhFLqY8ph_6EzdVMmYPoyOV4b0YZb29LketPXLAuLFitTEX0N18TwLoeQnkaZvpZmTwcARXJoQ_lC11lDva0aRFEdkkhNDGsjdyHrgTuQIbp6JG58xyVVRwwUrS26-rBRIDSXfkMuvIertzufQ' }
                            ].map((round, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:border-primary/30 transition-colors cursor-pointer">
                                    <div className="size-12 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${round.img})` }}></div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h5 className="font-bold text-sm tracking-tight">{round.company}</h5>
                                            <span className="text-primary font-black text-sm">{round.amount}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-[10px] bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-gray-500 font-bold uppercase tracking-wider">{round.series}</span>
                                            <span className="text-[10px] text-gray-400 capitalize">{round.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Navigation Bar */}
                <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 flex justify-around items-center px-6 pb-4 pt-3 z-50">
                    <Link to="/" className="flex flex-col items-center gap-1 text-gray-400">
                        <span className="material-symbols-outlined">menu_book</span>
                        <span className="text-[10px] font-medium">Read</span>
                    </Link>
                    <Link to="/search" className="flex flex-col items-center gap-1 text-gray-400">
                        <span className="material-symbols-outlined">explore</span>
                        <span className="text-[10px] font-medium">Explore</span>
                    </Link>
                    <div className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined">hub</span>
                        <span className="text-[10px] font-bold">Hub</span>
                    </div>
                    <Link to="/profile" className="flex flex-col items-center gap-1 text-gray-400">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-medium">Profile</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default MarketDashboard;
