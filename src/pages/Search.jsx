import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex gap-4 items-center">
                <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <div className="flex-1 relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">search</span>
                    <input
                        autoFocus
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 h-14 rounded-2xl pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary transition-all font-medium"
                        placeholder="Search Intelligence Hub..."
                    />
                </div>
            </header>

            <main className="max-w-xl mx-auto p-5 pb-24">
                {!query && (
                    <div className="space-y-8">
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Trending Intelligence</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Funding', 'Nigeria', 'Diagnostics', 'Policy Change', 'Telemedicine', 'MedTech 2024'].map(tag => (
                                    <button key={tag} onClick={() => setQuery(tag)} className="bg-white dark:bg-white/5 px-5 py-2 rounded-full border border-gray-100 dark:border-white/10 text-sm font-bold hover:border-primary transition-all">
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Recent Searches</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-gray-300">history</span>
                                        <p className="font-bold">West African Pharmacy Regulation</p>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 group-hover:text-red-500 transition-colors">close</span>
                                </div>
                                <div className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-gray-300">history</span>
                                        <p className="font-bold">HealthStack Seed Round</p>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-300 group-hover:text-red-500 transition-colors">close</span>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {query && (
                    <div className="space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Search Results for "{query}"</h3>
                        {[1, 2, 3].map(i => (
                            <Link key={i} to="/article/1" className="block p-5 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-primary transition-all group">
                                <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Intelligence</span>
                                <h4 className="font-black text-lg mt-2 group-hover:text-primary transition-colors">The impact of {query} on regional healthcare...</h4>
                                <p className="text-sm text-gray-500 mt-2 line-clamp-2">Latest market data suggests that {query} is becoming a key driver for investment in emerging African markets...</p>
                            </Link>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Search;
