import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setShow(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setShow(false);
    };

    return (
        <AnimatePresence>
            {show && (
                <div className="fixed inset-0 z-[100] flex flex-col justify-end bg-black/40 backdrop-blur-sm">
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="flex flex-col bg-white dark:bg-background-dark rounded-t-3xl border-t-4 border-primary shadow-2xl overflow-hidden max-w-[480px] mx-auto w-full"
                    >
                        {/* BottomSheetHandle */}
                        <div className="flex h-6 w-full items-center justify-center">
                            <div className="h-1.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
                        </div>

                        {/* Content Area */}
                        <div className="px-6 pt-4 pb-10 flex flex-col gap-6">
                            {/* Title & Description */}
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-2xl font-bold">cookie</span>
                                    <h3 className="text-[#111816] dark:text-white text-xl font-black uppercase tracking-tight font-display">Privacy Preference</h3>
                                </div>
                                <p className="text-[#111816]/70 dark:text-gray-300 text-sm font-medium leading-relaxed font-display">
                                    We use cookies to enhance your experience and analyze our traffic. By clicking <span className="font-bold text-primary">"Accept All"</span>, you consent to our use of cookies.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3">
                                {/* Primary Button */}
                                <button
                                    onClick={handleAccept}
                                    className="flex w-full cursor-pointer items-center justify-center rounded-2xl h-14 bg-primary text-[#10221c] text-base font-black uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                                >
                                    Accept All
                                </button>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setShow(false)}
                                        className="flex-1 cursor-pointer flex items-center justify-center rounded-2xl h-12 bg-gray-100 dark:bg-white/5 text-[#111816] dark:text-white text-xs font-bold uppercase tracking-widest border border-gray-200 dark:border-white/10"
                                    >
                                        Reject Non-Essential
                                    </button>
                                    <button
                                        className="flex-1 cursor-pointer flex items-center justify-center rounded-2xl h-12 bg-gray-100 dark:bg-white/5 text-[#111816] dark:text-white text-xs font-bold uppercase tracking-widest border border-gray-200 dark:border-white/10"
                                    >
                                        Settings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
