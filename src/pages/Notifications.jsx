import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Notifications = () => {
    const notifications = [
        {
            id: 1,
            type: 'Breaking',
            title: 'Major Funding Alert',
            message: 'HealthStack just closed a $5M seed round for West African expansion.',
            time: '2h ago',
            icon: 'bolt',
            color: 'text-yellow-500'
        },
        {
            id: 2,
            type: 'Intelligence',
            title: 'New Market Report',
            message: 'Q3 2023 State of HealthTech in Africa report is now available for download.',
            time: '5h ago',
            icon: 'analytics',
            color: 'text-primary'
        },
        {
            id: 3,
            type: 'Career',
            title: 'Job Match Found',
            message: 'A new Product Lead role at Helium Health matches your profile.',
            time: 'Yesterday',
            icon: 'work',
            color: 'text-talent'
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 p-4">
                <div className="flex items-center justify-between max-w-xl mx-auto">
                    <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h1 className="text-xl font-black">Notifications</h1>
                    <button className="text-primary text-xs font-bold uppercase tracking-widest">Mark All Read</button>
                </div>
            </header>

            <main className="max-w-xl mx-auto p-4 pb-24">
                <div className="space-y-3">
                    {notifications.map((notif, idx) => (
                        <motion.div
                            key={notif.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-4 p-5 bg-white dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-all"
                        >
                            <div className={`size-12 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center ${notif.color} shrink-0 shadow-inner`}>
                                <span className="material-symbols-outlined font-black">{notif.icon}</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${notif.color}`}>{notif.type}</span>
                                    <span className="text-[10px] text-gray-400 font-bold">{notif.time}</span>
                                </div>
                                <h3 className="font-black text-lg leading-tight group-hover:text-primary transition-colors">{notif.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{notif.message}</p>
                            </div>
                            {idx === 0 && <div className="absolute top-4 right-4 size-2 bg-primary rounded-full shadow-[0_0_10px_rgba(25,230,94,0.8)]"></div>}
                        </motion.div>
                    ))}
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default Notifications;
