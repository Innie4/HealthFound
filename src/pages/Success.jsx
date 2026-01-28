import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative flex h-full max-w-[430px] w-full flex-col bg-white dark:bg-background-dark shadow-[0_30px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden rounded-[3rem] border border-gray-100 dark:border-white/5"
            >
                {/* TopAppBar */}
                <div className="flex items-center bg-white dark:bg-background-dark p-6 pb-2 justify-between">
                    <Link to="/jobs" className="text-[#111816] dark:text-white flex size-12 shrink-0 items-center justify-start hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors pl-2">
                        <span className="material-symbols-outlined cursor-pointer font-black">close</span>
                    </Link>
                    <h2 className="text-[#111816] dark:text-white text-lg font-black leading-tight tracking-widest uppercase flex-1 text-center pr-12">System Update</h2>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="mb-10 flex items-center justify-center bg-talent/20 dark:bg-talent/10 rounded-[3rem] p-10 shadow-inner"
                    >
                        <div className="bg-talent rounded-full p-6 flex items-center justify-center shadow-2xl shadow-talent/50 ring-8 ring-talent/10">
                            <span className="material-symbols-outlined text-[#10221c] text-6xl font-black">check</span>
                        </div>
                    </motion.div>

                    {/* HeadlineText */}
                    <h1 className="text-[#111816] dark:text-white tracking-tight text-4xl font-black leading-tight text-center pb-4">
                        Application Transmitted!
                    </h1>
                    {/* BodyText */}
                    <p className="text-gray-500 dark:text-white/40 text-lg font-medium leading-relaxed pb-12 text-center max-w-[320px]">
                        Your application for <span className="font-black text-[#111816] dark:text-talent">Senior Product Manager</span> has been securely received by our intelligence hub.
                    </p>

                    {/* SectionHeader & List (What's Next?) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full bg-gray-50 dark:bg-white/5 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5"
                    >
                        <h3 className="text-[#111816] dark:text-white text-xl font-black leading-tight tracking-tight pb-6 flex items-center gap-3">
                            <span className="material-symbols-outlined text-talent text-2xl font-black">timeline</span>
                            Protocol Steps
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "We've sent a detailed confirmation to your secure inbox.",
                                "Our talent intelligence team will review your ecosystem impact score.",
                                "Direct communication protocol will initiate within 14 cycles."
                            ].map((step, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-2xl bg-talent text-[#10221c] flex items-center justify-center text-xs font-black shadow-lg shadow-talent/20">{idx + 1}</div>
                                    <p className="text-sm text-gray-600 dark:text-white/60 font-bold leading-relaxed">{step}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Action Buttons */}
                <div className="px-8 pb-12 space-y-4">
                    <Link to="/jobs" className="w-full bg-talent hover:brightness-110 text-[#10221c] font-black py-5 rounded-[1.5rem] shadow-2xl shadow-talent/30 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                        Back to Intelligence Board
                    </Link>
                    <Link to="/news" className="w-full bg-white dark:bg-white/5 border-2 border-talent/20 dark:border-white/10 text-[#111816] dark:text-talent font-black py-5 rounded-[1.5rem] hover:bg-talent/5 transition-all text-center">
                        Explore Ecosystem News
                    </Link>
                </div>

                {/* Footer Indicator (iOS style) */}
                <div className="flex justify-center pb-4">
                    <div className="w-24 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default Success;
