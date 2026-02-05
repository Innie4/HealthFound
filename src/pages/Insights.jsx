import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import AdBanner from '../components/AdBanner';

const Insights = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
                {/* TopAppBar */}
                <div className="flex items-center bg-white/90 dark:bg-background-dark/95 backdrop-blur-md p-4 justify-between sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
                    <Link to="/" className="text-[#111813] dark:text-white flex size-12 shrink-0 items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined font-bold">arrow_back</span>
                    </Link>
                    <h2 className="text-[#111813] dark:text-white text-lg font-black leading-tight tracking-[-0.015em] flex-1 text-center">Data & Insights Hub</h2>
                    <div className="flex w-12 items-center justify-end">
                        <Link to="/profile" className="flex items-center justify-center rounded-full size-10 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined">account_circle</span>
                        </Link>
                    </div>
                </div>

                <main className="max-w-4xl mx-auto w-full pb-24">
                    {/* HeaderImage Section */}
                    <div className="p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-background-dark rounded-3xl min-h-[300px] relative shadow-2xl"
                            style={{
                                backgroundImage: 'linear-gradient(180deg, rgba(17, 33, 22, 0.2) 0%, rgba(17, 33, 22, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCRgwHdPjggLi4F24iVr-LhWCHZHLyMsFVCfSu5lkAMTuIMhBSddNgK9eSyDorrmUbHcXjDbzNDo0PoPon64MAcfKMvZz-dx8BPGDh0E10PfccyQE4hrIIZZujBQ86bF4XjysGBc4t_Iw9wXPkIRwGk86z5N754VjfNNPekia8QgYQ8ZT2cdWBq0Izp--WoZ3_1IEtq4-YAhCXadbxOrUgXh4cLr0dcewEWcxICWvkm8Dt84Y9Bfhk7O0-juFpYA3ZpfzsbQh-QA")'
                            }}
                        >
                            <div className="flex flex-col p-8">
                                <span className="text-primary text-xs font-black tracking-[0.2em] uppercase mb-3 drop-shadow-md">HealthFound Intelligence</span>
                                <p className="text-white tracking-tight text-4xl md:text-5xl font-black leading-tight">African Healthcare Intelligence & Data</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Ad Banner */}
                    <AdBanner />

                    {/* Latest Market Report Section */}
                    <div className="px-4 py-8">
                        <h2 className="text-[#111813] dark:text-white text-2xl font-black leading-tight tracking-[-0.015em] mb-6">Latest Market Report</h2>
                        {/* Card: Featured Report */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex flex-col md:flex-row items-stretch justify-start rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1c2e22] overflow-hidden transition-all hover:shadow-2xl"
                        >
                            <div
                                className="w-full md:w-2/5 md:min-h-full bg-center bg-no-repeat aspect-[4/3] bg-cover"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHBPyhukl6SWYJYwXVgrwfUJslUqGhj2GPg0cA5rnxh6qfslLASxj3bsXbZ403KVescs1ejlXs6cjR8q9PhF974idiJIOft4J_ktCJeDDBqZq2QGIjazGsHnC3BZBhscRLmTFqCc7iY_zMKh32pVCh6yCdEITclnsPzASdlTSxljmhKOYdqOGj9I5OEcc7chwqNJLxpZYSAzFFGvebeNb_g9KG9KdG9_PWLrzUoCkytJw9r7D3_uDsGYCXZepcwGfbDqPCoujUhA")' }}
                            >
                            </div>
                            <div className="flex flex-1 flex-col items-stretch justify-center gap-1 py-8 px-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-primary text-[#112116] text-[10px] font-black leading-normal px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">Out Now</span>
                                    <span className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest">Q3 2023 Edition</span>
                                </div>
                                <p className="text-[#111813] dark:text-white text-2xl font-black leading-tight tracking-[-0.015em]">State of Health-Tech in Africa</p>
                                <p className="text-gray-500 dark:text-white/60 text-base font-medium leading-relaxed mt-3">
                                    Comprehensive analysis of investment, regulatory changes, and innovation trends across 54 African nations.
                                </p>
                                <div className="flex flex-wrap items-center gap-4 justify-between mt-8">
                                    <div className="flex -space-x-3">
                                        <div className="h-10 w-10 rounded-full border-2 border-white dark:border-[#1c2e22] bg-gray-200 flex items-center justify-center overflow-hidden">
                                            <span className="material-symbols-outlined text-sm">person</span>
                                        </div>
                                        <div className="h-10 w-10 rounded-full border-2 border-white dark:border-[#1c2e22] bg-gray-200 flex items-center justify-center overflow-hidden">
                                            <span className="material-symbols-outlined text-sm">person</span>
                                        </div>
                                        <div className="h-10 w-10 rounded-full border-2 border-white dark:border-[#1c2e22] bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                                            <span className="text-[12px] font-black text-primary">+3</span>
                                        </div>
                                    </div>
                                    <button className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-14 px-8 bg-primary text-[#112116] text-sm font-black leading-normal transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                                        <span className="truncate">Download Report</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Premium Services Section */}
                    <div className="px-4 py-8">
                        <h2 className="text-[#111813] dark:text-white text-2xl font-black leading-tight tracking-[-0.015em] mb-6">Premium Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Service 1 */}
                            <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-[#1c2e22] p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-4">
                                <div className="bg-primary/20 w-12 h-12 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                                    <span className="material-symbols-outlined text-2xl">search_insights</span>
                                </div>
                                <div>
                                    <h3 className="text-[#111813] dark:text-white font-black text-xl mb-1">Market Research</h3>
                                    <p className="text-gray-500 dark:text-white/50 text-sm font-medium leading-relaxed">Deep dives into regional healthcare sectors with proprietary data and local insights.</p>
                                </div>
                            </motion.div>
                            {/* Service 2 */}
                            <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-[#1c2e22] p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-4">
                                <div className="bg-primary/20 w-12 h-12 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                                    <span className="material-symbols-outlined text-2xl">analytics</span>
                                </div>
                                <div>
                                    <h3 className="text-[#111813] dark:text-white font-black text-xl mb-1">Custom Analysis</h3>
                                    <p className="text-gray-500 dark:text-white/50 text-sm font-medium leading-relaxed">Tailored data projects for your specific strategic needs and investment decisions.</p>
                                </div>
                            </motion.div>
                            {/* Service 3 */}
                            <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-[#1c2e22] p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-4 md:col-span-2">
                                <div className="flex items-center gap-6">
                                    <div className="bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-inner">
                                        <span className="material-symbols-outlined text-3xl">trending_up</span>
                                    </div>
                                    <div>
                                        <h3 className="text-[#111813] dark:text-white font-black text-xl mb-1">Trend Forecasting</h3>
                                        <p className="text-gray-500 dark:text-white/50 text-sm font-medium leading-relaxed">Predictive models for healthcare investment landscapes across Emerging Africa.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Coming Soon Section */}
                    <div className="px-4 py-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl bg-[#112116] p-8 md:p-12 shadow-2xl border border-primary/10"
                        >
                            {/* Decorative background elements for dashboard feel */}
                            <div className="absolute right-0 top-0 opacity-20 pointer-events-none -translate-y-4 translate-x-4">
                                <svg fill="none" height="200" viewbox="0 0 200 150" width="250" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 140L50 100L90 120L140 40L190 60" stroke="#15A147" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
                                    <circle cx="10" cy="140" fill="#15A147" r="4"></circle>
                                    <circle cx="50" cy="100" fill="#15A147" r="4"></circle>
                                    <circle cx="90" cy="120" fill="#15A147" r="4"></circle>
                                    <circle cx="140" cy="40" fill="#15A147" r="4"></circle>
                                    <circle cx="190" cy="60" fill="#15A147" r="4"></circle>
                                </svg>
                            </div>
                            <div className="relative z-10 space-y-4">
                                <span className="inline-block bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded-full border border-primary/30 uppercase tracking-[0.2em]">Coming Q4 2024</span>
                                <h3 className="text-white text-3xl md:text-4xl font-black mb-2">Interactive Intelligence Dashboard</h3>
                                <p className="text-white/60 text-lg font-medium leading-relaxed max-w-md">Real-time healthcare metrics and live data visualizations at your fingertips. Built for decision makers.</p>
                                <button className="text-primary text-base font-black flex items-center gap-3 group mt-6">
                                    Get Early Access <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </main>

                {/* Global Bottom Nav */}
                <BottomNav />
            </div>
        </div>
    );
};

export default Insights;
