import React from 'react';
import { Link } from 'react-router-dom';

const SuccessMediaKit = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
            <div className="relative flex h-full min-h-screen w-full flex-col bg-white dark:bg-background-dark max-w-[430px] mx-auto overflow-x-hidden shadow-2xl">
                {/* Top Navigation */}
                <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-end sticky top-0 z-10">
                    <Link to="/" className="flex items-center justify-center p-2 rounded-xl transition-all hover:bg-gray-100 dark:hover:bg-white/10 group">
                        <span className="material-symbols-outlined !text-3xl text-gray-400 group-hover:text-primary transition-colors">close</span>
                    </Link>
                </div>

                <main className="flex-1 flex flex-col pt-4">
                    {/* Success Visual */}
                    <div className="flex flex-col items-center justify-center pt-8 pb-4">
                        <div className="relative">
                            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-8 animate-in zoom-in-50 duration-500">
                                <span className="material-symbols-outlined text-primary !text-6xl font-black">check_circle</span>
                            </div>
                            <div className="absolute top-0 right-0 p-1">
                                <div className="size-4 bg-primary rounded-full animate-ping"></div>
                            </div>
                        </div>
                        <h1 className="text-[#111813] dark:text-white tracking-tight text-3xl font-black leading-tight px-10 text-center mb-4">
                            Your Media Kit is on its Way!
                        </h1>
                        <p className="text-[#111813]/60 dark:text-gray-400 text-base font-bold leading-relaxed text-center px-12 transition-colors">
                            Check your inbox. We've sent a download link and a summary of our ad specs to your registered email.
                        </p>
                    </div>

                    <div className="h-4"></div>

                    {/* Value Proposition Section */}
                    <div className="px-6">
                        <div className="bg-gray-50 dark:bg-white/5 rounded-[40px] p-8 border border-gray-100 dark:border-white/10 shadow-sm">
                            <h3 className="text-[#111813] dark:text-white text-xs font-black uppercase tracking-[0.3em] pb-8 border-b border-gray-100 dark:border-white/10 mb-8 text-center">
                                Why Partner With Us?
                            </h3>
                            <ul className="space-y-8">
                                {[
                                    { icon: 'verified_user', title: 'Audience Quality', desc: 'Access to verified health enthusiasts and industry professionals.' },
                                    { icon: 'analytics', title: 'High Engagement', desc: '4.5% average CTR on sponsored content within our ecosystem.' },
                                    { icon: 'handyman', title: 'Custom Solutions', desc: 'Tailored advertising packages to meet your specific brand KPIs.' },
                                ].map((item, id) => (
                                    <li key={id} className="flex items-start gap-4 group">
                                        <div className="flex-shrink-0 mt-0.5 text-primary transition-transform group-hover:scale-125">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-[#111813] dark:text-white font-black text-sm uppercase tracking-widest leading-none mb-1">{item.title}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-[11px] font-bold leading-normal">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Spacing for bottom actions */}
                    <div className="flex-grow min-h-[40px]"></div>

                    {/* Action Buttons */}
                    <div className="p-6 flex flex-col gap-4 mb-6">
                        <Link to="/" className="w-full h-16 bg-primary text-[#112116] font-black uppercase tracking-[0.2em] text-sm rounded-2xl flex items-center justify-center transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20">
                            Return to Homepage
                        </Link>
                        <button className="w-full h-16 bg-transparent border-2 border-primary/30 text-[#111813] dark:text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl flex items-center justify-center transition-all hover:bg-primary/5 active:scale-[0.98]">
                            Schedule a Call with Ads Team
                        </button>
                    </div>
                </main>

                {/* Safe area padding for iOS */}
                <div className="h-6"></div>

                {/* Background Gradiet */}
                <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent -z-10 pointer-events-none"></div>
            </div>
        </div>
    );
};

export default SuccessMediaKit;
