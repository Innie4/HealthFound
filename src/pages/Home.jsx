import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';

const Home = () => {
    const [activeTab, setActiveTab] = useState('All News');

    const categories = ['All News', 'Startups', 'Policy', 'Funding', 'MedTech', 'Diagnostics'];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 px-4 py-3">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl font-bold">pulse_alert</span>
                        <h1 className="text-xl font-extrabold tracking-tight">HealthFound</h1>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Link to="/search" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </Link>
                        <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined">person</span>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto pb-24">
                {/* Hero Section */}
                <section className="p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative overflow-hidden rounded-xl min-h-[420px] flex flex-col justify-end p-6 bg-cover bg-center shadow-xl transition-all duration-500 hover:shadow-2xl"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.85)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQ_0yb-vSeyySRBlwDtvJy5_hguT45GwafR3StZ6Y7CJO9M6jOCNH4cdcBaIdJaFn0I99S3NbsRDHqBRD7Cka6xO5u4HmNms3FDGk5UJVm3uafB8GgA_KPlKXnl6Ob9f-USo2dxZVEqZdqr6G2QXvQsn2sYxbYgNGvzbN5D-reuDzfEwgUhMhRzYEtiCmBVMrHXq4HAY4K0st3gBGGvFFsSHuysqV95WrECgCPMWGvVU29pakaFgr5ftL07aAWsCBljL8_4Z_Vwg")'
                        }}
                    >
                        <div className="space-y-4">
                            <span className="bg-primary text-[#112116] text-[10px] font-extrabold uppercase tracking-widest px-2 py-1 rounded w-fit">Intelligence Hub</span>
                            <h2 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-2xl">
                                Africa’s Healthcare Innovation Intelligence Hub
                            </h2>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                                Critical news, proprietary data, and deep insights for startups, founders, and professionals shaping African healthcare.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <Link
                                    to="/news"
                                    className="bg-primary text-[#112116] px-8 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 hover:bg-opacity-90"
                                >
                                    Read Latest News
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                                <Link
                                    to="/newsletters"
                                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm transition-all active:scale-95 hover:bg-white/20 text-center"
                                >
                                    Subscribe
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Categories / Chips */}
                <section className="py-2">
                    <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar py-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${activeTab === cat
                                    ? 'bg-primary text-[#112116] font-bold shadow-md'
                                    : 'bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-[#111813] dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/10'
                                    }`}
                            >
                                <p className="text-sm">{cat}</p>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Featured Story Section */}
                <section className="px-4 py-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-black tracking-tight">Latest News</h3>
                        <Link to="/news" className="text-primary text-xs font-bold flex items-center gap-1 group">
                            SEE ALL
                            <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">open_in_new</span>
                        </Link>
                    </div>

                    {/* Big Featured Card */}
                    <Link to="/article/1" className="group cursor-pointer block mb-8">
                        <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden mb-4 shadow-lg">
                            <img
                                alt="Telemedicine"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaN5TqfgHjbRUn9jgLCn8DnXm8DmhVSqb_1KxUKuho90baHxGPGlsK0W2NRKo8BIlOC3Naw1R8aPg79F4vPVc4t3eZUEQDaNRpD0EzrmFm2hnxKid7x-yaMTmZRtWQhlIR-DEu0ZFZ9fHBbK-Uxhypt_joCZBTgHCKVtDGTc4zdnHTqqa1G4I45vh0fNT0Q-AhMnlLJvYCfeQFAoOomVvgRooWlJJopVoPCjNFAmXfyGmqTnpjM0DvAP_u2hOF1lNhGtOFvPwVVA"
                            />
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="bg-primary text-[#112116] text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">FUNDING</span>
                                <span className="bg-black/60 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md">4 MIN READ</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-2xl md:text-3xl font-black leading-tight mb-3 group-hover:text-primary transition-colors">
                                Lagos-based HealthStack raises $5M to scale diagnostic network across West Africa
                            </h4>
                            <p className="text-base text-gray-500 dark:text-gray-400 line-clamp-2 max-w-3xl">
                                The seed round led by Pan-African ventures aims to digitize laboratory results for over 2 million patients by the end of 2024 through a revolutionary blockchain-enabled diagnostic infrastructure.
                            </p>
                            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400 font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                                    <span>Oct 24, 2023</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">person</span>
                                    <span>Sarah Adebayo</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* List Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Article Item 1 */}
                        <Link to="/article/2" className="flex flex-col gap-4 group cursor-pointer border-t border-gray-100 dark:border-white/5 pt-6">
                            <div className="relative h-48 w-full rounded-xl overflow-hidden shrink-0 shadow-sm">
                                <img
                                    alt="MedTech AI"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXVahMINPcfrKlRWRW-5iUdG_dFXPQESKg3C_YUczPNZEmAqUpzW8NDPX955ogxH9wkkaPpN8weKR7NWlaSdU0_QCw86jyQzuX0imBt7BFh4Rn7ikG-tRw3qtumjVt6FUwyYcE2Tuk5BfZ0ucs5PnRTAH9x7V-nZ6kJTfq_b29jUZvZhhoZiaBC9gYVWrpBy27nLx5LFhpC5-lCMzHFPLoouLpbSUFnVhasp8ShkxCjHqW2RByT3S7ntRxGiKNrKzvp4id0ad9mA"
                                />
                            </div>
                            <div className="space-y-2">
                                <span className="text-primary text-[10px] font-black uppercase tracking-widest">MedTech</span>
                                <h5 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                    How AI is streamlining maternal care in rural Kenya
                                </h5>
                                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold">
                                    <span>2 hours ago</span>
                                    <span className="text-primary">•</span>
                                    <span>3 min read</span>
                                </div>
                            </div>
                        </Link>

                        {/* Article Item 2 */}
                        <Link to="/article/3" className="flex flex-col gap-4 group cursor-pointer border-t border-gray-100 dark:border-white/5 pt-6">
                            <div className="relative h-48 w-full rounded-xl overflow-hidden shrink-0 shadow-sm">
                                <img
                                    alt="Pharmacy Policy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6TxYVstZqE3ATzaZKu7V7SUiRgOCpAJ67w5EDDEErfdvN6lcRKLS2aiG8kSJCycUzpHlXWQFJeW7ihvfFEcv3e-_aFV0qj7YMLTgqxlJcWItoEgPFiUfxETIiOHsCJxFtKJSZzLWQpLWWQs9gh0Q3BdtDtupIaI6r78iS8XN_Htcm--u5Ml0BfcRUUAK8iSSsjgiuttQymNW6mIjap1Rc1LaMeefvklbTxZYTcr8q4SvZ-5dnZh_dPd1Pp2D-78lO1m7vP6QXHA"
                                />
                            </div>
                            <div className="space-y-2">
                                <span className="text-primary text-[10px] font-black uppercase tracking-widest">Policy</span>
                                <h5 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                    New regulatory framework for digital pharmacies in Rwanda
                                </h5>
                                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold">
                                    <span>Yesterday</span>
                                    <span className="text-primary">•</span>
                                    <span>6 min read</span>
                                </div>
                            </div>
                        </Link>

                        {/* Article Item 3 */}
                        <Link to="/article/4" className="flex flex-col gap-4 group cursor-pointer border-t border-gray-100 dark:border-white/5 pt-6">
                            <div className="relative h-48 w-full rounded-xl overflow-hidden shrink-0 shadow-sm">
                                <img
                                    alt="Market Data"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV_Z4Y7GHwUzKmmpy5ZZ2noJrPkvh_-66aXS3HgxEf3QDjd_gQoWMfbtZKa5qBdF2lRY_P9JLldsj2914gjqLVlUFB0qvvYJswYUy4yGnhAfMYN1K829HLyK-CMQYv4JB9s4TDxUdR8K85tr2jH_Utch_JqS8RkUN_R-kILp5yGZOQaWJt4TEtvlRGbqp_8V-YTriRE9IEljNlmQvOS_o8IbdpntKD18sJr3zl2xLQtv3kc2BzqsmiPudBUKo6f9r9SuY8J6QqCw"
                                />
                            </div>
                            <div className="space-y-2">
                                <span className="text-primary text-[10px] font-black uppercase tracking-widest">Data</span>
                                <h5 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                    Report: HealthTech investment trends in Africa 2023
                                </h5>
                                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold">
                                    <span>Oct 20, 2023</span>
                                    <span className="text-primary">•</span>
                                    <span>12 min read</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Specialized Hubs / Sub-Brands */}
                    <div className="mt-16 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                            <div>
                                <h3 className="text-3xl font-black tracking-tight mb-2">Specialized Intelligence</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-medium">Curated destinations for specific healthcare career and business needs.</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="size-3 rounded-full bg-[#15A147]"></div>
                                <div className="size-3 rounded-full bg-[#639041]"></div>
                                <div className="size-3 rounded-full bg-[#B3D684]"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Workplace Corner */}
                            <Link to="/workplace-corner" className="group">
                                <div className="bg-[#15A147]/5 hover:bg-[#15A147]/10 border-2 border-[#15A147]/10 p-8 rounded-3xl transition-all hover:scale-[1.02] h-full flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="size-14 rounded-2xl bg-[#15A147] flex items-center justify-center text-white shadow-lg">
                                            <span className="material-symbols-outlined text-3xl font-bold">work</span>
                                        </div>
                                        <h4 className="text-2xl font-black">Workplace Corner</h4>
                                        <p className="text-sm font-medium opacity-60">Master the business of medicine.</p>
                                    </div>
                                    <span className="material-symbols-outlined mt-8 group-hover:translate-x-2 transition-transform text-[#15A147]">arrow_forward</span>
                                </div>
                            </Link>

                            {/* Startup Weekly */}
                            <Link to="/startup-weekly" className="group">
                                <div className="bg-[#639041]/5 hover:bg-[#639041]/10 border-2 border-[#639041]/10 p-8 rounded-3xl transition-all hover:scale-[1.02] h-full flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="size-14 rounded-2xl bg-[#639041] flex items-center justify-center text-white shadow-lg">
                                            <span className="material-symbols-outlined text-3xl font-bold">rocket_launch</span>
                                        </div>
                                        <h4 className="text-2xl font-black">Startup Weekly</h4>
                                        <p className="text-sm font-medium opacity-60">The founder's playbook.</p>
                                    </div>
                                    <span className="material-symbols-outlined mt-8 group-hover:translate-x-2 transition-transform text-[#639041]">arrow_forward</span>
                                </div>
                            </Link>

                            {/* Career Convo */}
                            <Link to="/career-convo" className="group">
                                <div className="bg-[#B3D684]/10 hover:bg-[#B3D684]/20 border-2 border-[#B3D684]/10 p-8 rounded-3xl transition-all hover:scale-[1.02] h-full flex flex-col justify-between text-[#2a3c1c] dark:text-[#B3D684]">
                                    <div className="space-y-4">
                                        <div className="size-14 rounded-2xl bg-[#B3D684] flex items-center justify-center text-[#2a3c1c] shadow-lg">
                                            <span className="material-symbols-outlined text-3xl font-bold">forum</span>
                                        </div>
                                        <h4 className="text-2xl font-black">Career Convo</h4>
                                        <p className="text-sm font-black opacity-60">Humanized health insights.</p>
                                    </div>
                                    <span className="material-symbols-outlined mt-8 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Newsletter Subscription Card */}
                <section className="px-4 py-12">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-primary/10 dark:bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-inner"
                    >
                        <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="material-symbols-outlined text-primary text-5xl">mail</span>
                        </div>
                        <h3 className="text-3xl font-black">Weekly Intelligence briefing</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                            Get the most important healthcare innovation news from across Africa delivered to your inbox every Monday.
                        </p>
                        <form className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="flex-1 px-6 py-4 rounded-xl border border-primary/20 bg-white dark:bg-background-dark/50 text-base focus:ring-2 focus:ring-primary outline-none transition-all"
                                placeholder="Your work email"
                                type="email"
                                required
                            />
                            <button className="bg-primary text-[#112116] font-extrabold px-10 py-4 rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                Join 10,000+ Professionals
                            </button>
                        </form>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">No spam. Only deep healthcare insights.</p>
                    </motion.div>
                </section>
            </main>

            {/* Footer Area (iOS Style Tab Bar Simulation) */}
            <div className="h-20 sm:hidden"></div> {/* Spacer */}
            <BottomNav />
        </div>
    );
};

export default Home;
