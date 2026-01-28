import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Events = () => {
    const upcomingEvents = [
        {
            title: "Healthtech Investment Summit 2024",
            date: "Nov 15, 2024",
            type: "Conference",
            location: "Lagos, Nigeria",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_3LZQw_2564FgaoWhwGVXpZv6KYsaG13kMWsC9tXiLJJdKc9MK-MjhqSbCCX46ng4-FnS4AiIKsopwwnp0WKOor9YgZ1x1Ua6y2zngEqu1N8J9Tub4ozGQ6j6xCHSthtWMqg9uSNDHZGj8m4xo10nlbqspb4tBZ_yt24SGHi34ZErTKrqmz39-JGe4Nm1JwaQSkcDnn4HL4PC79XpRF2N0RbdUhAOqLfprYOWT1lqn_FMLnLY9d7eQf23IVHhbcdp8HzEq-I14Q"
        },
        {
            title: "Digital Health Policy Webinar",
            date: "Oct 30, 2024",
            type: "Webinar",
            location: "Online",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ_0yb-vSeyySRBlwDtvJy5_hguT45GwafR3StZ6Y7CJO9M6jOCNH4cdcBaIdJaFn0I99S3NbsRDHqBRD7Cka6xO5u4HmNms3FDGk5UJVm3uafB8GgA_KPlKXnl6Ob9f-USo2dxZVEqZdqr6G2QXvQsn2sYxbYgNGvzbN5D-reuDzfEwgUhMhRzYEtiCmBVMrHXq4HAY4K0st3gBGGvFFsSHuysqV95WrECgCPMWGvVU29pakaFgr5ftL07aAWsCBljL8_4Z_Vwg"
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111816] dark:text-white">
            <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-2xl overflow-x-hidden">
                {/* TopAppBar */}
                <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
                    <Link to="/" className="text-[#111816] dark:text-white flex size-12 shrink-0 items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors pl-2">
                        <span className="material-symbols-outlined font-black">arrow_back</span>
                    </Link>
                    <h2 className="text-[#111816] dark:text-white text-lg font-black leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Events & Webinars</h2>
                </div>

                <main className="pb-24">
                    <div className="px-6 pt-10 pb-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl font-black tracking-tight"
                        >
                            Industry Events
                        </motion.h2>
                        <p className="text-gray-500 dark:text-white/40 text-lg font-medium mt-1">Connect with the African HealthTech community.</p>
                    </div>

                    <div className="px-4 py-4 space-y-6">
                        {upcomingEvents.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative overflow-hidden rounded-[2.5rem] bg-gray-900 min-h-[350px] flex flex-col justify-end p-8 shadow-2xl transition-all"
                            >
                                <img
                                    alt={event.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[5s]"
                                    src={event.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                <div className="relative z-10 space-y-3">
                                    <div className="flex gap-2">
                                        <span className="bg-talent text-[#10221c] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{event.type}</span>
                                    </div>
                                    <h3 className="text-white text-2xl font-black leading-tight tracking-tight">{event.title}</h3>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex flex-col text-white/60 text-xs font-bold uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-sm font-black">calendar_today</span>
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="material-symbols-outlined text-sm font-black">location_on</span>
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-talent hover:text-[#10221c] transition-all">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </main>

                {/* Global Bottom Tab Bar Simulation */}
                <BottomNav />
            </div>
        </div>
    );
};

export default Events;
