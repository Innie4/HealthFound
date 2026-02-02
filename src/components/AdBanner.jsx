import React from 'react';
import { motion } from 'framer-motion';

const AdBanner = ({ variant = 'horizontal' }) => {
    // variant could be 'horizontal', 'sidebar', etc.

    return (
        <div className="w-full max-w-4xl mx-auto px-4 my-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full bg-gray-50 dark:bg-white/5 border border-dashed border-gray-200 dark:border-white/10 rounded-xl p-4 flex items-center justify-between gap-4 overflow-hidden relative"
            >
                <div className="flex items-start gap-3 z-10">
                    <div className="bg-yellow-100 text-yellow-700 text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
                        Ad
                    </div>
                    <div>
                        <p className="text-sm font-bold text-[#111816] dark:text-white leading-tight">
                            Unlock Premium Insights
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Get exclusive reports and ad-free experience.
                        </p>
                    </div>
                </div>
                <button className="text-primary text-xs font-black uppercase tracking-widest hover:underline z-10 whitespace-nowrap">
                    Learn More
                </button>

                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#15A147_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </motion.div>
        </div>
    );
};

export default AdBanner;
