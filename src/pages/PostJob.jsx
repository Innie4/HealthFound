import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const PostJob = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 p-4">
                <div className="flex items-center justify-between max-w-xl mx-auto">
                    <Link to="/jobs" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </Link>
                    <h1 className="text-xl font-black">Post a Role</h1>
                    <div className="w-10"></div>
                </div>
            </header>

            <main className="max-w-xl mx-auto p-5 pb-32">
                <div className="mb-8">
                    <div className="flex justify-between items-end mb-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-talent">Job Details</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Step {step} of 3</p>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-talent"
                            initial={{ width: '33%' }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                        ></motion.div>
                    </div>
                </div>

                <section className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-black uppercase tracking-widest ml-1">Company Name</label>
                        <input className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 h-16 rounded-[1.5rem] px-6 text-base font-medium focus:ring-2 focus:ring-talent outline-none transition-all" placeholder="e.g. Helium Health" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-black uppercase tracking-widest ml-1">Job Title</label>
                        <input className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 h-16 rounded-[1.5rem] px-6 text-base font-medium focus:ring-2 focus:ring-talent outline-none transition-all" placeholder="e.g. Clinical Operations Manager" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-black uppercase tracking-widest ml-1">Location</label>
                            <input className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 h-16 rounded-[1.5rem] px-6 text-base font-medium focus:ring-2 focus:ring-talent outline-none transition-all" placeholder="Lagos, NG" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-black uppercase tracking-widest ml-1">Job Type</label>
                            <select className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 h-16 rounded-[1.5rem] px-6 text-base font-medium focus:ring-2 focus:ring-talent outline-none transition-all appearance-none">
                                <option>Full-time</option>
                                <option>Contract</option>
                                <option>Remote</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-black uppercase tracking-widest ml-1">Job Description</label>
                        <textarea className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 h-48 rounded-[1.5rem] p-6 text-base font-medium focus:ring-2 focus:ring-talent outline-none transition-all resize-none" placeholder="What are the key responsibilities?"></textarea>
                    </div>

                    <button
                        onClick={() => step < 3 ? setStep(step + 1) : navigate('/success')}
                        className="w-full h-16 bg-talent text-[#10221c] font-black rounded-3xl shadow-2xl shadow-talent/20 hover:scale-[1.02] active:scale-95 transition-all mt-8"
                    >
                        {step === 3 ? 'Publish Premium Listing' : 'Continue to Next Step'}
                    </button>
                </section>
            </main>
        </div>
    );
};

export default PostJob;
