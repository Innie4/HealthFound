import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111811] dark:text-white font-display">
            <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#0a0a0a] shadow-xl pb-20 overflow-x-hidden">
                {/* Top Header */}
                <header className="sticky top-0 z-50 bg-primary p-4 pb-6 rounded-b-[40px] shadow-lg shadow-primary/20">
                    <div className="flex items-center justify-between mb-8">
                        <Link to="/profile" className="text-[#0a0a0a] transition-transform hover:scale-110">
                            <span className="material-symbols-outlined !text-3xl">arrow_back</span>
                        </Link>
                        <h2 className="text-[#0a0a0a] text-lg font-black uppercase tracking-[0.2em]">Help Center</h2>
                        <div className="size-10"></div>
                    </div>
                    <div className="px-2">
                        <h1 className="text-[#0a0a0a] text-3xl font-black leading-tight tracking-tight mb-6">How can we help?</h1>
                        <div className="relative flex items-center bg-white rounded-2xl p-4 shadow-xl border border-black/5 group-within:ring-4 ring-black/5 transition-all">
                            <span className="material-symbols-outlined text-gray-400 mr-3">search</span>
                            <input className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold text-[#0a0a0a] placeholder:text-gray-400 uppercase tracking-widest" placeholder="Search for answers..." />
                        </div>
                    </div>
                </header>

                <main className="p-6 pt-10">
                    {/* Popular Categories */}
                    <section className="mb-12">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#63886f] mb-6 border-l-4 border-primary pl-3">Popular Categories</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: 'account_circle', title: 'Account', desc: 'Login, Profile, & Access' },
                                { icon: 'payments', title: 'Billing', desc: 'Invoices & Upgrades' },
                                { icon: 'hub', title: 'Intel Hub', desc: 'Reports & Dashboard' },
                                { icon: 'groups', title: 'Debate Circle', desc: 'Rules & Community' },
                            ].map((cat, idx) => (
                                <div key={idx} className="p-5 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary/20 transition-all cursor-pointer group shadow-sm">
                                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-[#0a0a0a] transition-all">
                                        <span className="material-symbols-outlined !text-xl">{cat.icon}</span>
                                    </div>
                                    <h4 className="text-sm font-black dark:text-gray-100 mb-1 leading-none">{cat.title}</h4>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter opacity-70">{cat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQs */}
                    <section className="mb-12">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#63886f] border-l-4 border-primary pl-3">General FAQs</h3>
                            <span className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline cursor-pointer">View All</span>
                        </div>
                        <div className="space-y-3">
                            {[
                                "How do I upgrade to the Institutional tier?",
                                "Where can I find my purchased reports?",
                                "How are Debate Circle moderators chosen?",
                                "Is my organizational data shared with anyone?",
                            ].map((q, idx) => (
                                <div key={idx} className="group p-4 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 flex gap-4 items-center hover:bg-gray-50 dark:hover:bg-primary/5 transition-all cursor-pointer">
                                    <span className="text-sm font-bold dark:text-gray-200 flex-1 leading-normal">{q}</span>
                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Support */}
                    <section className="bg-background-dark rounded-[40px] p-8 text-center text-white relative overflow-hidden shadow-2xl">
                        <span className="material-symbols-outlined text-[100px] text-white/5 absolute -bottom-8 -left-8 -rotate-12">support_agent</span>
                        <h3 className="text-2xl font-black mb-3 relative z-10 leading-tight">Can't find what you need?</h3>
                        <p className="text-white/60 text-sm font-medium mb-8 relative z-10 px-4">Our dedicated success team is available 24/7 to solve your intelligence hurdles.</p>
                        <button className="relative z-10 w-full bg-primary text-[#0a0a0a] py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                            Start Live Chat
                        </button>
                    </section>
                </main>

                <div className="h-10"></div>
            </div>
        </div>
    );
};

export default Support;
