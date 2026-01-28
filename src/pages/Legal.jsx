import React from 'react';
import { Link } from 'react-router-dom';

const Legal = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111816] dark:text-white font-display">
            <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-xl pb-20">
                <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center p-4 justify-between">
                        <Link to="/about" className="text-[#111816] dark:text-white flex size-10 shrink-0 items-center justify-start cursor-pointer hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </Link>
                        <h2 className="text-[#111816] dark:text-white text-lg font-bold">Privacy & Terms</h2>
                        <div className="size-10"></div>
                    </div>
                </header>

                <main className="p-6">
                    <div className="flex flex-col gap-10">
                        {/* Last Updated */}
                        <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-2xl border border-gray-100 dark:border-white/5">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#63886f] mb-1">Last Revision</p>
                            <p className="text-sm font-bold">October 24, 2023</p>
                        </div>

                        <section className="space-y-6">
                            <h1 className="text-3xl font-black tracking-tight leading-tight">Data Integrity & Transparency</h1>
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                HealthFound is committed to maintaining the highest levels of data security and ethics within the African healthcare ecosystem.
                            </p>
                        </section>

                        {/* Policy Content */}
                        <div className="space-y-8">
                            {[
                                { title: '1. Information We Collect', items: ['Professional credentials and verification data.', 'Usage analytics on market intelligence reports.', 'Community interaction data within the Debate Circle.'] },
                                { title: '2. How We Use Data', items: ['Generating anonymized intelligence reports for stakeholders.', 'Improving diagnostic recommendation engines.', 'Verifying the legitimacy of innovation contributors.'] },
                                { title: '3. Data Security', items: ['AES-256 encryption for all sensitive health data.', 'Quarterly third-party security audits.', 'Zero local storage of private medical records.'] },
                            ].map((section, idx) => (
                                <section key={idx} className="space-y-4">
                                    <h3 className="text-xl font-bold dark:text-gray-100 border-l-4 border-primary pl-4">{section.title}</h3>
                                    <ul className="space-y-3 pl-4">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start text-sm text-gray-600 dark:text-gray-400 leading-relaxed group">
                                                <span className="text-primary font-black mt-px">•</span>
                                                <span className="group-hover:text-primary transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>

                        {/* Terms of Service Link */}
                        <div className="pt-10 border-t border-gray-100 dark:border-gray-800 text-center">
                            <p className="text-xs text-gray-400 mb-6 font-medium">Looking for our community guidelines?</p>
                            <button className="w-full h-14 bg-[#10221c] dark:bg-primary text-primary dark:text-[#10221c] rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl active:scale-[0.98] transition-transform">
                                Read Terms of Service
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Legal;
