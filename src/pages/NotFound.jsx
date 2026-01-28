import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111816] dark:text-white transition-colors duration-300 font-display">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* TopAppBar */}
                <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between">
                    <Link to="/" className="text-[#111816] dark:text-white flex size-12 shrink-0 items-center justify-start">
                        <span className="material-symbols-outlined cursor-pointer">arrow_back_ios</span>
                    </Link>
                    <h2 className="text-[#111816] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
                        Error Report
                    </h2>
                </div>

                {/* Main Content Container */}
                <div className="flex flex-col items-center justify-center flex-grow px-6 py-8">
                    {/* Illustration Area (Healthcare themed) */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex w-full max-w-sm grow-0 mb-8"
                    >
                        <div className="w-full aspect-square rounded-full bg-primary/10 dark:bg-primary/5 flex items-center justify-center relative overflow-hidden">
                            {/* Abstract Pulse/Medical Pattern background */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDX5aC-sEzxy3Zm0gOu_QL412sAJ-DD_tLJOVw0JXWh4kPGEwiPE_-FpGGsbRJxuAj_RABWwm1I1uWIgy6bPBjfAkSJPZyQ_R66If1XPhpyB6nzX2EZuCn7zX8MtITemFOWthplaLo0mX7yXSiMgw9unlROkzq5D2sxkZmb9MT7J61zX83zvQXJbxTCD0SpLNyDbIKs-zdKyGXp31WJgmGzdxu4zQUMbpNH7LG97rcYmD0I3OB4jYE_Ijx9hly9KethtS-7ROTtpQ')`, backgroundSize: 'cover' }}></div>

                            {/* Focal Graphic */}
                            <div className="relative flex flex-col items-center">
                                <span className="material-symbols-outlined text-primary text-[120px] font-light">
                                    clinical_notes
                                </span>
                                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-background-dark p-2 rounded-full shadow-lg">
                                    <span className="material-symbols-outlined text-red-500 text-3xl font-bold">question_mark</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stylized 404 Headline */}
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary tracking-tighter text-[84px] font-extrabold leading-none text-center"
                    >
                        404
                    </motion.h1>

                    {/* Diagnosis Headline */}
                    <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[#111816] dark:text-white tracking-tight text-2xl font-bold leading-tight text-center pb-2 pt-4"
                    >
                        Diagnosis: Page Not Found
                    </motion.h3>

                    {/* Body Text */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-[#111816]/70 dark:text-white/70 text-base font-normal leading-normal pb-8 px-4 text-center max-w-xs"
                    >
                        It looks like the insight you're looking for has been moved or doesn't exist. Let's get your research back on track.
                    </motion.p>

                    {/* Navigation Options (Action Stack) */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="w-full max-w-xs flex flex-col gap-3"
                    >
                        {/* Primary Action */}
                        <Link to="/" className="w-full bg-primary text-[#10221c] font-black py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all text-center">
                            Back to Homepage
                        </Link>
                        {/* Secondary Actions */}
                        <Link to="/search" className="w-full bg-white dark:bg-white/5 text-[#111816] dark:text-white border border-[#111816]/10 dark:border-white/10 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-xl">search</span>
                            Search Intelligence News
                        </Link>
                        <Link to="/insights" className="w-full bg-white dark:bg-white/5 text-[#111816] dark:text-white border border-[#111816]/10 dark:border-white/10 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-xl">description</span>
                            View Latest Reports
                        </Link>
                    </motion.div>
                </div>

                {/* Footer Logo/Branding */}
                <div className="flex flex-col items-center pb-10 opacity-40">
                    <div className="flex items-center gap-2">
                        <div className="size-6 bg-primary rounded-sm flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px] text-[#10221c] font-bold">bolt</span>
                        </div>
                        <span className="font-display font-bold text-sm tracking-tight text-[#111816] dark:text-white">HEALTHFOUND</span>
                    </div>
                    <p className="text-[10px] mt-1 font-medium tracking-widest uppercase">Intelligence Hub</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
