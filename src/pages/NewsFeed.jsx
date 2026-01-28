import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const NewsFeed = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Funding', 'Policy', 'Technology', 'Startups', 'Pharma'];

    const articles = [
        {
            id: 1,
            category: 'Funding',
            title: 'How African Startups Raised $2B in Healthtech in 2023',
            excerpt: 'A comprehensive breakdown of the venture capital landscape across Nigeria, Kenya, and Egypt, highlighting the rise of telemedicine and diagnostic infrastructure.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_3LZQw_2564FgaoWhwGVXpZv6KYsaG13kMWsC9tXiLJJdKc9MK-MjhqSbCCX46ng4-FnS4AiIKsopwwnp0WKOor9YgZ1x1Ua6y2zngEqu1N8J9Tub4ozGQ6j6xCHSthtWMqg9uSNDHZGj8m4xo10nlbqspb4tBZ_yt24SGHi34ZErTKrqmz39-JGe4Nm1JwaQSkcDnn4HL4PC79XpRF2N0RbdUhAOqLfprYOWT1lqn_FMLnLY9d7eQf23IVHhbcdp8HzEq-I14Q',
            readTime: '4 min read',
            date: 'Jan 24, 2024'
        },
        {
            id: 2,
            category: 'Policy',
            title: 'New Healthcare Policy Framework for East Africa',
            excerpt: 'The East African Community (EAC) has unveiled a unified policy roadmap to streamline cross-border digital health services and pharmaceutical standards.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpsWMVei54FuxdtVJrwu8BvCgqVWTPl8FK8e7SfweTauZjMzuu98nzYs1G3e9GdthE9o19upetSbDeQGwhdohzyzqHSO5R8Lap4GRR1SxyqbcjrjCa65XqUWaFyRWeVIa_N5xKr1yYeQHeBW1FR6p1uBoH3mWXlZPSamf4SZDSziHfNkTv4h3QbU6CZP3jKoICFm325bN2IUTiiTne40KSOJDSaF8hXvBcN29eVV4rRItG9An26A4thXt37zkkHQqH9iVNGjGI9g',
            readTime: '6 min read',
            date: 'Jan 22, 2024'
        },
        {
            id: 3,
            category: 'Pharma',
            title: 'The Future of mRNA Vaccine Manufacturing in Lagos',
            excerpt: 'Bio-manufacturing hubs are emerging as Nigeria secures partnerships for domestic vaccine production to combat endemic diseases and strengthen health security.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvLMDH9Sr3Ac_gY8BwLxIMkxhC0a6MIRH1XA5GiP3i5ruCH6OJOYtKGDPh1YFVHPtFs_nkzVaz-j0DZO1gzClNgxcLDLCm7HY7x8ewn8fzUlIPMOUON-O39LiS_KBlaL4pMI5T_k2faIUXumn8ideOt94fYc444ahHM0mWykJaULVde10YrnvqDqqtWgDhjZIUk0Qefy8pkPBf6OP0b-6qekWajjtR1FksvCb6bDuQxLuaHKnzzfwMmPgZCw7tStL6DVF_OHOHuQ',
            readTime: '8 min read',
            date: 'Jan 20, 2024'
        }
    ];

    const filteredArticles = activeCategory === 'All'
        ? articles
        : articles.filter(a => a.category === activeCategory);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white">
            {/* Top Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
                <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-[#112116] text-xl font-black">health_metrics</span>
                        </div>
                        <h1 className="text-[#111813] dark:text-white text-xl font-black leading-tight tracking-tight">HealthFound</h1>
                    </Link>
                    <div className="flex gap-2">
                        <Link to="/notifications" className="flex items-center justify-center rounded-full h-11 w-11 bg-gray-50 dark:bg-white/5 text-[#111813] dark:text-white hover:bg-primary transition-colors hover:text-[#112116]">
                            <span className="material-symbols-outlined">notifications</span>
                        </Link>
                        <Link to="/profile" className="flex items-center justify-center rounded-full h-11 w-11 bg-gray-50 dark:bg-white/5 text-[#111813] dark:text-white hover:bg-primary transition-colors hover:text-[#112116]">
                            <span className="material-symbols-outlined">account_circle</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto pb-32">
                {/* Page Title & Intro */}
                <div className="px-5 pt-10 pb-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-black tracking-tight"
                    >
                        Intelligence Hub
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 dark:text-gray-400 text-lg font-medium mt-1"
                    >
                        African healthcare innovation news & archives.
                    </motion.p>
                </div>

                {/* Search Bar Component */}
                <Link to="/search" className="px-5 py-4 block">
                    <div className="flex flex-col min-w-40 h-14 w-full group">
                        <div className="flex w-full flex-1 items-stretch rounded-2xl h-full shadow-sm group-focus-within:shadow-xl transition-all border border-gray-100 dark:border-white/5 overflow-hidden">
                            <div className="text-gray-400 flex bg-white dark:bg-white/5 items-center justify-center pl-5" data-icon="search">
                                <span className="material-symbols-outlined text-xl">search</span>
                            </div>
                            <div className="flex w-full min-w-0 flex-1 resize-none bg-white dark:bg-white/5 text-gray-400 outline-none border-none h-full items-center px-4 text-base font-medium">
                                Search healthtech intelligence...
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Chips / Filter Section */}
                <div className="flex gap-2 px-5 py-3 overflow-x-auto hide-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-all duration-300 border-2 ${activeCategory === cat
                                ? 'bg-primary border-primary text-[#112116] font-black shadow-lg shadow-primary/20 scale-105'
                                : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 font-bold hover:border-primary/50'
                                }`}
                        >
                            <p className="text-sm">{cat}</p>
                            {['Funding', 'Policy', 'Technology', 'Startups'].includes(cat) && <span className="material-symbols-outlined text-sm">expand_more</span>}
                        </button>
                    ))}
                </div>

                {/* News Archive Grid */}
                <div className="mt-8 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredArticles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <Link to={`/article/${article.id}`} className="block">
                                    <div className="flex flex-col items-stretch justify-start rounded-[2rem] overflow-hidden bg-white dark:bg-white/5 shadow-sm border border-gray-50 dark:border-white/5 transition-all hover:shadow-2xl hover:-translate-y-1">
                                        <div className="relative w-full aspect-video overflow-hidden">
                                            <div
                                                className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-700"
                                                style={{ backgroundImage: `url("${article.image}")` }}
                                            ></div>
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-primary text-[#112116] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex w-full grow flex-col items-stretch justify-center gap-4 p-8">
                                            <h3 className="text-[#111813] dark:text-white text-2xl font-black leading-tight tracking-tight group-hover:text-primary transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-500 dark:text-white/50 text-base font-medium line-clamp-2 leading-relaxed">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-4 pt-6 border-t border-gray-50 dark:border-white/5">
                                                <div className="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-widest">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="material-symbols-outlined text-lg">schedule</span>
                                                        <span>{article.readTime}</span>
                                                    </div>
                                                    <span className="text-primary">•</span>
                                                    <span>{article.date}</span>
                                                </div>
                                                <button className="flex items-center justify-center rounded-2xl h-11 px-6 bg-primary/10 text-primary hover:bg-primary hover:text-[#112116] transition-all text-sm font-black shadow-inner">
                                                    <span>Read</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Load More Button */}
                    <div className="py-12 flex justify-center">
                        <button className="flex items-center gap-3 px-10 py-5 rounded-full border-2 border-primary text-primary font-black hover:bg-primary hover:text-[#112116] transition-all active:scale-95 shadow-lg hover:shadow-primary/30">
                            <span>Load More Intelligence</span>
                            <span className="material-symbols-outlined font-black">refresh</span>
                        </button>
                    </div>
                </div>
            </main>

            {/* Bottom Tab Bar (iOS style) */}
            <BottomNav />
        </div>
    );
};

export default NewsFeed;
