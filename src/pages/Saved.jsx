import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Saved = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 p-4">
                <div className="flex items-center justify-between max-w-xl mx-auto">
                    <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h1 className="text-xl font-black">Saved Intelligence</h1>
                    <div className="w-10"></div>
                </div>
            </header>

            <main className="max-w-xl mx-auto p-5 pb-24">
                <div className="flex gap-4 mb-8">
                    <button className="bg-primary text-[#112116] px-6 py-2 rounded-full font-black text-sm shadow-md">Articles</button>
                    <button className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 px-6 py-2 rounded-full font-bold text-sm">Jobs</button>
                </div>

                <div className="space-y-6">
                    {/* Saved Article 1 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex gap-4 p-4 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm"
                    >
                        <div className="size-24 rounded-2xl overflow-hidden shrink-0">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXVahMINPcfrKlRWRW-5iUdG_dFXPQESKg3C_YUczPNZEmAqUpzW8NDPX955ogxH9wkkaPpN8weKR7NWlaSdU0_QCw86jyQzuX0imBt7BFh4Rn7ikG-tRw3qtumjVt6FUwyYcE2Tuk5BfZ0ucs5PnRTAH9x7V-nZ6kJTfq_b29jUZvZhhoZiaBC9gYVWrpBy27nLx5LFhpC5-lCMzHFPLoouLpbSUFnVhasp8ShkxCjHqW2RByT3S7ntRxGiKNrKzvp4id0ad9mA" className="w-full h-full object-cover" alt="Article" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <span className="text-primary text-[10px] font-black uppercase tracking-widest">MedTech</span>
                                <h3 className="font-bold text-base leading-tight mt-1 line-clamp-2">How AI is streamlining maternal care in rural Kenya</h3>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-[10px] text-gray-400 font-bold">SAVED 2 DAYS AGO</span>
                                <button className="text-primary">
                                    <span className="material-symbols-outlined text-xl">bookmark</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Saved Article 2 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex gap-4 p-4 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm"
                    >
                        <div className="size-24 rounded-2xl overflow-hidden shrink-0">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6TxYVstZqE3ATzaZKu7V7SUiRgOCpAJ67w5EDDEErfdvN6lcRKLS2aiG8kSJCycUzpHlXWQFJeW7ihvfFEcv3e-_aFV0qj7YMLTgqxlJcWItoEgPFiUfxETIiOHsCJxFtKJSZzLWQpLWWQs9gh0Q3BdtDtupIaI6r78iS8XN_Htcm--u5Ml0BfcRUUAK8iSSsjgiuttQymNW6mIjap1Rc1LaMeefvklbTxZYTcr8q4SvZ-5dnZh_dPd1Pp2D-78lO1m7vP6QXHA" className="w-full h-full object-cover" alt="Article" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <span className="text-primary text-[10px] font-black uppercase tracking-widest">Policy</span>
                                <h3 className="font-bold text-base leading-tight mt-1 line-clamp-2">New regulatory framework for digital pharmacies</h3>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-[10px] text-gray-400 font-bold">SAVED 1 WEEK AGO</span>
                                <button className="text-primary">
                                    <span className="material-symbols-outlined text-xl">bookmark</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Empty State Illustration if none */}
                {/* <div className="flex flex-col items-center justify-center py-20 opacity-30">
          <span className="material-symbols-outlined text-9xl">bookmark_border</span>
          <p className="font-bold mt-4">No saved items yet</p>
        </div> */}
            </main>

            <BottomNav />
        </div>
    );
};

export default Saved;
