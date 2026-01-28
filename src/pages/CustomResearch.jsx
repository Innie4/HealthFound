import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CustomResearch = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111811] dark:text-white font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col bg-white dark:bg-background-dark max-w-[430px] mx-auto shadow-2xl overflow-x-hidden">
                {/* TopAppBar */}
                <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
                    <Link to="/partnerships" className="text-[#111811] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </Link>
                    <h2 className="text-[#111811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Custom Research</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button className="flex items-center justify-center text-[#111811] dark:text-white">
                            <span className="material-symbols-outlined">info</span>
                        </button>
                    </div>
                </div>

                <main className="flex-1 pb-24">
                    {/* Progress Bar */}
                    <div className="flex flex-col gap-3 p-4 bg-white dark:bg-background-dark">
                        <div className="flex gap-6 justify-between items-center">
                            <p className="text-[#111811] dark:text-white text-xs font-black uppercase tracking-widest">Organization Details</p>
                            <p className="text-[#111811] dark:text-white text-[10px] font-bold opacity-50 uppercase tracking-widest">Step {step} of 4</p>
                        </div>
                        <div className="rounded-full bg-[#dbe6db] dark:bg-gray-700 overflow-hidden">
                            <div className="h-1.5 rounded-full bg-primary transition-all duration-500" style={{ width: `${step * 25}%` }}></div>
                        </div>
                    </div>

                    {/* Headline & Body */}
                    <div className="px-5">
                        <h3 className="text-[#111811] dark:text-white tracking-tight text-3xl font-black leading-tight pb-2 pt-6">Tailored Intelligence</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed pb-6">Provide your organization's details to begin the bespoke research process with our expert analysts.</p>
                    </div>

                    {/* Form Content */}
                    <div className="flex flex-col gap-8 px-5 pb-8">
                        {/* Section 1: Organization Details */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                                <span className="size-6 bg-primary text-[#0a0a0a] rounded flex items-center justify-center text-[10px] font-black">01</span>
                                <h3 className="text-[#111811] dark:text-white text-sm font-black uppercase tracking-[0.1em]">Organization Details</h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black text-[#111811] dark:text-white uppercase tracking-widest opacity-60">Organization Name</label>
                                <input className="w-full p-4 rounded-xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-bold text-sm" placeholder="e.g., Global Health Partners" type="text" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black text-[#111811] dark:text-white uppercase tracking-widest opacity-60">Industry Sector</label>
                                <div className="relative">
                                    <select className="w-full p-4 appearance-none rounded-xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-bold text-sm">
                                        <option>Pharmaceuticals</option>
                                        <option>Medical Devices</option>
                                        <option>Public Health / NGO</option>
                                        <option>HealthTech Startup</option>
                                        <option>Governmental Agency</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">expand_more</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-[10px] font-black text-[#111811] dark:text-white uppercase tracking-widest opacity-60">Primary Region of Interest</label>
                                <div className="flex flex-wrap gap-2">
                                    {['East Africa', 'West Africa', 'Southern Africa', 'North Africa', 'Pan-African'].map((region, id) => (
                                        <button key={region} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${id === 0 ? 'bg-primary text-[#0a0a0a]' : 'bg-gray-100 dark:bg-white/5 border border-transparent hover:border-primary/30'}`}>
                                            {region}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Inactive Sections */}
                        {[
                            { id: '02', title: 'Research Scope' },
                            { id: '03', title: 'Timeline & Budget' },
                            { id: '04', title: 'Review & Submit' }
                        ].map((sec) => (
                            <div key={sec.id} className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-gray-800 opacity-30 grayscale">
                                <div className="flex items-center gap-2">
                                    <span className="size-6 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center text-[10px] font-black">{sec.id}</span>
                                    <h3 className="text-gray-400 dark:text-gray-500 text-sm font-black uppercase tracking-[0.1em]">{sec.title}</h3>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 !text-sm">lock</span>
                            </div>
                        ))}

                        {/* Case Study Card */}
                        <div className="mt-6 p-5 rounded-3xl bg-gray-50 dark:bg-primary/5 border border-gray-100 dark:border-primary/10 flex flex-col gap-4 shadow-sm">
                            <div className="flex items-center justify-between">
                                <span className="bg-primary/20 text-primary text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-[0.2em] shadow-sm">Success Story</span>
                                <span className="material-symbols-outlined text-primary !text-sm">bookmark</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-20 h-20 shrink-0 rounded-2xl bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1IOxv3MCXGtLa-tLB3wAH28wc3NS8XG4SilqYKkSNn2K83LiqyTRYA9VZmo8oUm8sZNQTysKjBdhd2OpgaN2BqOZOzd3W56tn3HX3hfUHdHVrfPoVsr8blOB_mTXuGU8mgcuZ2aS95qLcfYhuRRaT0t1T2vM_C0BP5bCXm2peDYjGCdjwaxPOXC64lynC8a2AURgvDPIm8gjqCo2hjbfL1nayYNhZp7k9GnsbZefLQahqNXGYEX5dXKSscP9oAWrU7tJluOKqGA')" }}></div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="text-[#111811] dark:text-white font-black text-sm leading-tight mb-1">Oncology Supply Chain Mapping</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-normal">Optimizing distribution for global partners</p>
                                    <button className="text-primary text-[10px] font-black mt-3 flex items-center gap-1 uppercase tracking-widest transition-transform hover:translate-x-1">
                                        Read Case Study <span className="material-symbols-outlined !text-xs">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Sticky Footer */}
                <div className="sticky bottom-0 bg-white/90 dark:bg-background-dark/95 backdrop-blur-md p-4 border-t border-gray-100 dark:border-gray-800 flex gap-3 z-20">
                    <button
                        onClick={() => setStep(Math.min(step + 1, 4))}
                        className="flex-1 flex items-center justify-center bg-primary text-[#0a0a0a] py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        {step === 4 ? 'Submit Request' : 'Continue to Scope'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomResearch;
