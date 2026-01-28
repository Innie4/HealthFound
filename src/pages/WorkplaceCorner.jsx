import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const WorkplaceCorner = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white font-display uppercase-tracking">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 px-4 py-3">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl font-bold">work</span>
                        <h1 className="text-xl font-extrabold tracking-tight">Workplace Corner</h1>
                    </Link>
                    <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">person</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-7xl mx-auto pb-24 px-4">
                <section className="py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-primary/10 dark:bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 text-center space-y-8 shadow-inner"
                    >
                        <div className="bg-primary/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-lg">
                            <span className="material-symbols-outlined text-primary text-6xl">corporate_fare</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Level Up Your Career</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                            The ultimate destination for healthcare professionals seeking growth, workplace culture insights, and career evolution in Africa.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-primary text-white font-black px-10 py-5 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.05] active:scale-95 transition-all">
                                Explore Opportunities
                            </button>
                            <Link to="/career-convo" className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary font-black px-10 py-5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all">
                                Join Career Convo
                            </Link>
                        </div>
                    </motion.div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                    {[
                        { title: "Managing Burnout", desc: "How frontline doctors are finding balance.", icon: "self_care" },
                        { title: "Leadership Skills", desc: "Transitioning from clinical to management.", icon: "leaderboard" },
                        { title: "Workplace Culture", desc: "Top 10 HealthTech startups to work for.", icon: "groups" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="text-primary mb-6 group-hover:scale-110 transition-transform inline-block">
                                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                            </div>
                            <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </section>
            </main>

            <BottomNav />
        </div>
    );
};

export default WorkplaceCorner;
