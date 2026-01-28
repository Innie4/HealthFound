import React from 'react';
import { Link } from 'react-router-dom';

const Partnerships = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111811] dark:text-white font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#0a0a0a] shadow-xl overflow-x-hidden">
                {/* TopAppBar */}
                <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center p-4 justify-between">
                        <Link to="/" className="text-[#111811] dark:text-white flex size-10 shrink-0 items-center justify-start cursor-pointer hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </Link>
                        <h2 className="text-[#111811] dark:text-white text-lg font-bold">Institutional Hub</h2>
                        <div className="flex w-10 items-center justify-end">
                            <button className="flex items-center justify-center text-[#111811] dark:text-white hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">help_outline</span>
                            </button>
                        </div>
                    </div>
                </header>

                <main className="pb-10">
                    {/* Institutional Hero */}
                    <section className="relative h-[280px] w-full overflow-hidden flex items-end">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAXrPKiyunX0mwiktooJGlBFKpw1ctz_o2ivyZkii4J5EIBakcCKd3wzFDWL6KrZTlLgIrEyHy9Jdij0qbbnHdZZTQovcr1f2oedKV3Fvg7Qd98mzswbyd-JtIrhFLqY8ph_6EzdVMmYPoyOV4b0YZb29LketPXLAuLFitTEX0N18TwLoeQnkaZvpZmTwcARXJoQ_lC11lDva0aRFEdkkhNDGsjdyHrgTuQIbp6JG58xyVVRwwUrS26-rBRIDSXfkMuvIertzufQ')` }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
                        <div className="relative z-10 p-6 w-full">
                            <div className="inline-block bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3">
                                Strategic Partnerships
                            </div>
                            <h1 className="text-white text-2xl font-black leading-tight mb-2">Empowering Organizations through Intelligence</h1>
                            <p className="text-white/70 text-sm leading-relaxed max-w-[320px]">Custom research, ecosystem mapping, and strategic advisory for institutional stakeholders.</p>
                        </div>
                    </section>

                    {/* Service Categories */}
                    <section className="p-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">Our Capabilities</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: 'Custom Research', desc: 'Bespoke intelligence tailored to your specific regional and sector focus.', icon: 'biotech', route: '/custom-research' },
                                { title: 'Ecosystem Mapping', desc: 'Comprehensive data-driven maps of startup clusters and regulatory environments.', icon: 'hub', route: '#' },
                                { title: 'Advisory Hub', desc: 'Strategic consulting for investors and government agencies entering the market.', icon: 'query_stats', route: '#' },
                            ].map((service, idx) => (
                                <Link to={service.route} key={idx} className="group flex items-start gap-4 p-5 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary/30 hover:bg-white dark:hover:bg-primary/5 transition-all shadow-sm">
                                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined !text-3xl">{service.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{service.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-normal">{service.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Trusted By Grid */}
                    <section className="px-6 py-10 bg-gray-50 dark:bg-[#112111]/30">
                        <h3 className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Trusted By Industry Leaders</h3>
                        <div className="grid grid-cols-2 gap-8 opacity-40 grayscale dark:invert transition-all hover:opacity-100 hover:grayscale-0">
                            <div className="h-12 flex items-center justify-center bg-transparent">
                                <span className="material-symbols-outlined !text-4xl text-gray-800">assured_workload</span>
                            </div>
                            <div className="h-12 flex items-center justify-center bg-transparent">
                                <span className="material-symbols-outlined !text-4xl text-gray-800">account_balance</span>
                            </div>
                            <div className="h-12 flex items-center justify-center bg-transparent">
                                <span className="material-symbols-outlined !text-4xl text-gray-800">foundation</span>
                            </div>
                            <div className="h-12 flex items-center justify-center bg-transparent">
                                <span className="material-symbols-outlined !text-4xl text-gray-800">partner_exchange</span>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="p-6">
                        <div className="bg-primary p-8 rounded-[40px] text-center shadow-2xl shadow-primary/30 relative overflow-hidden group">
                            <span className="material-symbols-outlined text-[60px] text-[#0a0a0a]/10 absolute -top-4 -right-4 rotate-12">handshake</span>
                            <h3 className="text-[#0a0a0a] text-2xl font-black mb-4 relative z-10">Scale Your Impact</h3>
                            <p className="text-[#0a0a0a]/70 text-sm font-bold leading-relaxed mb-6 relative z-10">Schedule a strategic briefing with our institutional regional analysts today.</p>
                            <button className="relative z-10 w-full bg-[#0a0a0a] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                                Book a Briefing
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Partnerships;
