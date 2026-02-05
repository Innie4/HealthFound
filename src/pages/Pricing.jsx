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

            <main className="max-w-6xl mx-auto px-4 py-12 pb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Upgrade your experience</h2>
                    <p className="text-[#61897c] dark:text-gray-400 text-lg">Support independent healthcare journalism and get exclusive perks.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-12">
                    {/* Free Plan */}
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col gap-6">
                        <div>
                            <span className="bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Free</span>
                            <h3 className="text-4xl font-black mt-4">₦0 <span className="text-base font-normal text-gray-500">/ month</span></h3>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Access to daily news</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Basic newsletter</span>
                            </li>
                            <li className="flex items-center gap-3 opacity-50">
                                <span className="material-symbols-outlined text-gray-400">cancel</span>
                                <span className="font-medium text-sm">Ad-supported experience</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl border-2 border-gray-200 dark:border-white/10 font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm">
                            Current Plan
                        </button>
                    </div>

                    {/* Starter Plan */}
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col gap-6">
                        <div>
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Starter</span>
                            <h3 className="text-4xl font-black mt-4">₦7,735 <span className="text-base font-normal text-gray-500">/ month</span></h3>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Reduced ads</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Weekly digest</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Bookmark articles</span>
                            </li>
                            <li className="flex items-center gap-3 opacity-50">
                                <span className="material-symbols-outlined text-gray-400">cancel</span>
                                <span className="font-medium text-sm">Premium reports</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors text-sm">
                            Choose Plan
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-[#111816] dark:bg-primary/20 border border-primary/20 dark:border-primary/50 text-white rounded-3xl p-8 flex flex-col gap-6 shadow-xl relative overflow-hidden md:col-span-2 lg:col-span-1">
                        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl">
                            Recommended
                        </div>
                        <div>
                            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Pro Member</span>
                            <h3 className="text-4xl font-black mt-4">₦15,485 <span className="text-base font-normal text-gray-400">/ month</span></h3>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Ad-free experience</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Weekly trend reports</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Priority support</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Community badges</span>
                            </li>
                        </ul>
                        <Link to="/checkout" className="w-full py-4 rounded-xl bg-primary text-[#111816] font-bold hover:bg-primary/90 transition-colors text-center shadow-lg shadow-primary/20 text-sm">
                            Go Pro
                        </Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col gap-6">
                        <div>
                            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Enterprise</span>
                            <h3 className="text-3xl font-black mt-4">Custom <span className="text-base font-normal text-gray-500">pricing</span></h3>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Everything in Pro</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">API access</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Custom reports</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm">Dedicated account manager</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl border-2 border-purple-200 dark:border-purple-500/30 font-bold hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-colors text-sm">
                            Contact Sales
                        </button>
                    </div>
                </div>

                {/* Custom Option Section */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border-2 border-dashed border-primary/30 dark:border-primary/50 rounded-3xl p-8 md:p-12 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-block bg-primary/20 px-4 py-2 rounded-full mb-4">
                            <span className="text-primary font-black text-xs uppercase tracking-widest">Custom Solutions</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black mb-3">Need Something Different?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            We offer flexible custom plans tailored to your organization's unique needs. Whether you're a team, organization, or media partner, we can build the perfect package for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-primary text-[#111816] font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                                Talk to Our Team
                            </button>
                            <button className="border-2 border-primary text-primary font-bold px-8 py-4 rounded-xl hover:bg-primary/5 transition-colors text-sm">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default Pricing;
