import React from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from '../components/DesktopNav';
import BottomNav from '../components/BottomNav';
import logo from '../assets/HealthF.jpeg';

const Pricing = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111816] dark:text-white font-display">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 px-4 py-3">
                <div className="flex items-center justify-between max-w-4xl mx-auto">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="HealthFound" className="h-16 w-auto rounded-md" />
                        <h1 className="text-xl font-extrabold tracking-tight">HealthFound</h1>
                    </Link>
                    <DesktopNav />
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-12 pb-32">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Upgrade your experience</h2>
                    <p className="text-[#61897c] dark:text-gray-400 text-lg">Support independent healthcare journalism and get exclusive perks.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Free Plan */}
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col gap-6">
                        <div>
                            <span className="bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Free</span>
                            <h3 className="text-4xl font-black mt-4">$0 <span className="text-base font-normal text-gray-500">/ month</span></h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium">Access to daily news</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium">Basic newsletter</span>
                            </li>
                            <li className="flex items-center gap-3 opacity-50">
                                <span className="material-symbols-outlined text-gray-400">cancel</span>
                                <span className="font-medium">Ad-supported experience</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl border-2 border-gray-200 dark:border-white/10 font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            Current Plan
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-[#111816] dark:bg-primary/20 border border-primary/20 dark:border-primary/50 text-white rounded-3xl p-8 flex flex-col gap-6 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl">
                            Recommended
                        </div>
                        <div>
                            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Pro Member</span>
                            <h3 className="text-4xl font-black mt-4">$9 <span className="text-base font-normal text-gray-400">/ month</span></h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium">Ad-free experience</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium">Weekly trend reports</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium">Priority support</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium">Community badges</span>
                            </li>
                        </ul>
                        <Link to="/checkout" className="w-full py-4 rounded-xl bg-primary text-[#111816] font-bold hover:bg-primary/90 transition-colors text-center shadow-lg shadow-primary/20">
                            Go Pro
                        </Link>
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default Pricing;
