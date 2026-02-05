import React from 'react';
import { motion } from 'framer-motion';

const AdBanner = ({ variant = 'horizontal' }) => {
    // variant could be 'horizontal', 'horizontal-large', 'sidebar', etc.

    if (variant === 'horizontal-large') {
        return (
            <div className="w-full max-w-4xl mx-auto px-4 my-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/10 dark:to-white/5 border border-dashed border-gray-200 dark:border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden relative"
                >
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-yellow-100 text-yellow-700 text-[10px] font-black px-3 py-1 rounded uppercase tracking-wider">
                                Featured Ad
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Premium Partnership</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-[#111816] dark:text-white mb-3 leading-tight">
                                    Transform Your Healthcare Business
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    Discover how industry leaders are leveraging advanced analytics and real-time data to scale their healthcare innovations across Africa.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                        Comprehensive market insights
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                        Expert network access
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                        Real-time competitive analysis
                                    </li>
                                </ul>
                                <button className="bg-primary text-[#111816] font-black px-6 md:px-8 py-3 rounded-lg hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20">
                                    Get Started Today
                                </button>
                            </div>

                            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="material-symbols-outlined text-6xl text-primary/30">trending_up</span>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 font-medium">Premium partner content</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none bg-[radial-gradient(#15A147_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </motion.div>
            </div>
        );
    }

    // Default 'horizontal' variant
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
