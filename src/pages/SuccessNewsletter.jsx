import React from 'react';
import { Link } from 'react-router-dom';

const SuccessNewsletter = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
            <div className="relative flex h-full min-h-screen w-full flex-col bg-white dark:bg-background-dark max-w-[430px] mx-auto overflow-x-hidden shadow-2xl">
                {/* Top Navigation */}
                <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-end sticky top-0 z-10 transition-colors">
                    <Link to="/" className="text-gray-400 hover:text-primary transition-colors p-2">
                        <span className="material-symbols-outlined !text-4xl text-gray-400">close</span>
                    </Link>
                </div>

                <main className="flex-1 flex flex-col pt-8">
                    {/* Success Visual */}
                    <div className="flex flex-col items-center justify-center pt-8 pb-4">
                        <div className="relative">
                            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500">
                                <span className="material-symbols-outlined text-primary !text-6xl font-black">mark_email_read</span>
                            </div>
                            <div className="absolute top-0 right-0 p-1">
                                <div className="size-4 bg-primary rounded-full animate-ping"></div>
                            </div>
                        </div>

                        <h1 className="text-[#111813] dark:text-white tracking-tight text-4xl font-black leading-tight px-10 text-center mb-4 transition-colors">
                            You're on the list!
                        </h1>
                        <p className="text-[#111813]/60 dark:text-gray-400 text-base font-bold leading-relaxed text-center px-12 transition-colors">
                            The next briefing will land in your inbox on Monday morning. Welcome to the hub.
                        </p>
                    </div>

                    <div className="h-6"></div>

                    {/* Value Proposition Grid - Expectations */}
                    <div className="px-6">
                        <div className="bg-gray-50 dark:bg-white/5 rounded-[40px] p-8 border border-gray-100 dark:border-white/10 shadow-sm">
                            <h3 className="text-[#111813] dark:text-white text-[10px] font-black uppercase tracking-[0.3em] pb-8 border-b border-gray-100 dark:border-white/10 mb-8 text-center opacity-70">
                                What to expect
                            </h3>
                            <ul className="space-y-8">
                                {[
                                    { icon: 'trending_up', title: 'Weekly Deals', desc: 'Summary of every health startup funding round in Africa.' },
                                    { icon: 'gavel', title: 'Policy Alerts', desc: 'Real-time updates on regional healthcare regulations.' },
                                    { icon: 'biotech', title: 'Innovation Spotlight', desc: 'Exclusive interviews with the founders building the future.' },
                                ].map((item, id) => (
                                    <li key={id} className="flex items-start gap-5 group">
                                        <div className="flex-shrink-0 mt-0.5 text-primary transition-transform group-hover:scale-125">
                                            <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-[#111813] dark:text-white font-black text-sm uppercase tracking-widest leading-none mb-1 transition-colors">{item.title}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-[11px] font-bold leading-normal transition-colors">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex-grow min-h-[40px]"></div>

                    {/* Final Action Buttons */}
                    <div className="p-6 flex flex-col gap-4 mb-10">
                        <Link to="/" className="w-full h-16 bg-primary text-[#112116] font-black uppercase tracking-[0.2em] text-sm rounded-2xl flex items-center justify-center transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20">
                            Go to Homepage
                        </Link>
                        <Link to="/market-dashboard" className="w-full h-16 bg-white dark:bg-white/10 border-2 border-primary/30 text-[#111813] dark:text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl flex items-center justify-center transition-all hover:bg-primary/5 active:scale-[0.98]">
                            Explore the Intel Hub
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SuccessNewsletter;
