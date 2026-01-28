import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Resumes = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 p-4">
                <div className="flex items-center justify-between max-w-xl mx-auto">
                    <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h1 className="text-xl font-black">Resume Manager</h1>
                    <div className="w-10"></div>
                </div>
            </header>

            <main className="max-w-xl mx-auto p-5 pb-32">
                <div className="mb-10 text-center">
                    <div className="bg-talent/10 text-talent size-20 rounded-[2rem] flex items-center justify-center mx-auto mb-4 shadow-inner">
                        <span className="material-symbols-outlined text-4xl font-black">upload_file</span>
                    </div>
                    <h2 className="text-2xl font-black mb-2">My Credentials</h2>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Optimized for African HealthTech</p>
                </div>

                <div className="space-y-4 mb-10">
                    <div className="p-6 bg-white dark:bg-white/5 rounded-[2.5rem] border border-talent/30 dark:border-talent/20 flex items-center gap-5 shadow-xl shadow-talent/5 group hover:scale-[1.01] transition-all">
                        <div className="size-14 rounded-2xl bg-talent text-[#10221c] flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined font-black">picture_as_pdf</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-black text-lg truncate max-w-[180px]">Main_CV_2024.pdf</p>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">UPLOADED 2 DAYS AGO • 2.4 MB</p>
                        </div>
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </div>

                    <button className="w-full dashed-border border-2 border-dashed border-gray-200 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center justify-center gap-3 hover:border-talent transition-all group">
                        <div className="size-12 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-talent group-hover:bg-talent/10 transition-all">
                            <span className="material-symbols-outlined font-black">add</span>
                        </div>
                        <span className="text-sm font-black text-center text-gray-400 group-hover:text-talent uppercase tracking-widest">Add alternative resume</span>
                    </button>
                </div>

                <div className="bg-talent/5 rounded-[2.5rem] p-8 border border-talent/20">
                    <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-talent">auto_awesome</span>
                        AI Profile Score
                    </h3>
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-sm font-bold text-gray-400">Match Potential</span>
                        <span className="text-talent text-2xl font-black">88%</span>
                    </div>
                    <div className="h-2 w-full bg-talent/20 rounded-full overflow-hidden mb-6">
                        <div className="h-full bg-talent w-[88%] rounded-full shadow-[0_0_10px_rgba(43,238,173,0.5)]"></div>
                    </div>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                        Your profile is highly optimized for **Product** and **Operations** roles in the West African health sector. Keep your certifications up to date!
                    </p>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default Resumes;
