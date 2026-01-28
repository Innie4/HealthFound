import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* TopAppBar */}
                <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
                    <Link to="/" className="text-[#111813] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </Link>
                    <h2 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Get In Touch</h2>
                </header>

                <main className="flex-1 pb-10 max-w-xl mx-auto w-full">
                    {/* Headline Section */}
                    <div className="px-4 pt-8">
                        <motion.h3
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[#111813] dark:text-white tracking-tight text-4xl font-black leading-tight"
                        >
                            Contact HealthFound Team
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#111813]/70 dark:text-white/70 text-lg font-normal leading-normal pt-4"
                        >
                            Have a question about African healthcare innovation? Our team is here to help you navigate the ecosystem.
                        </motion.p>
                    </div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="px-4 py-8 space-y-6"
                    >
                        <div className="bg-white dark:bg-[#1c2e22] rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800 space-y-5">
                            {/* Name Field */}
                            <div className="flex flex-col w-full">
                                <p className="text-[#111813] dark:text-white text-sm font-bold leading-normal pb-2 ml-1">Full Name</p>
                                <input
                                    className="form-input flex w-full rounded-2xl text-[#111813] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#112116] h-14 placeholder:text-gray-400 p-4 text-base font-medium transition-all"
                                    placeholder="John Doe"
                                    type="text"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col w-full">
                                <p className="text-[#111813] dark:text-white text-sm font-bold leading-normal pb-2 ml-1">Email Address</p>
                                <input
                                    className="form-input flex w-full rounded-2xl text-[#111813] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#112116] h-14 placeholder:text-gray-400 p-4 text-base font-medium transition-all"
                                    placeholder="john@example.com"
                                    type="email"
                                />
                            </div>

                            {/* Subject Dropdown */}
                            <div className="flex flex-col w-full">
                                <p className="text-[#111813] dark:text-white text-sm font-bold leading-normal pb-2 ml-1">Subject</p>
                                <div className="relative">
                                    <select className="appearance-none flex w-full rounded-2xl text-[#111813] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#112116] h-14 p-4 text-base font-medium cursor-pointer transition-all">
                                        <option value="general">General Inquiry</option>
                                        <option value="media">Media & Press</option>
                                        <option value="partnerships">Partnerships</option>
                                        <option value="data">Data Insights</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-col w-full">
                                <p className="text-[#111813] dark:text-white text-sm font-bold leading-normal pb-2 ml-1">Message</p>
                                <textarea
                                    className="form-textarea flex w-full rounded-2xl text-[#111813] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#112116] h-40 placeholder:text-gray-400 p-4 text-base font-medium resize-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-primary hover:scale-[1.02] active:scale-[0.98] text-[#112116] font-black py-5 rounded-2xl transition-all shadow-xl shadow-primary/20">
                                Send Message
                            </button>
                        </div>
                    </motion.div>

                    {/* Direct Contact Info */}
                    <div className="px-4 pt-4 space-y-6">
                        <h4 className="text-[#111813] dark:text-white text-xl font-black">Other ways to reach us</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* General */}
                            <div className="flex md:flex-col items-start gap-4 p-5 rounded-3xl bg-white dark:bg-[#1c2e22] border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-colors group">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#112116] transition-all">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#112116]/50 dark:text-white/40 mb-1">General</p>
                                    <p className="text-base font-bold">hello@healthfound.com</p>
                                </div>
                            </div>
                            {/* Advertising */}
                            <div className="flex md:flex-col items-start gap-4 p-5 rounded-3xl bg-white dark:bg-[#1c2e22] border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-colors group">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#112116] transition-all">
                                    <span className="material-symbols-outlined">campaign</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#112116]/50 dark:text-white/40 mb-1">Advertising</p>
                                    <p className="text-base font-bold">ads@healthfound.com</p>
                                </div>
                            </div>
                            {/* Partnerships */}
                            <div className="flex md:flex-col items-start gap-4 p-5 rounded-3xl bg-white dark:bg-[#1c2e22] border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-colors group">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#112116] transition-all">
                                    <span className="material-symbols-outlined">handshake</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#112116]/50 dark:text-white/40 mb-1">Partnerships</p>
                                    <p className="text-base font-bold">partner@healthfound.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="px-4 mt-12 mb-10">
                        <div className="flex justify-center gap-6">
                            <a className="flex size-14 items-center justify-center rounded-2xl bg-white dark:bg-[#1c2e22] border border-gray-100 dark:border-gray-800 text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
                                <span className="material-symbols-outlined text-2xl">share</span>
                            </a>
                            <a className="flex size-14 items-center justify-center rounded-2xl bg-white dark:bg-[#1c2e22] border border-gray-100 dark:border-gray-800 text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
                                <span className="material-symbols-outlined text-2xl">public</span>
                            </a>
                            <a className="flex size-14 items-center justify-center rounded-2xl bg-white dark:bg-[#1c2e22] border border-gray-100 dark:border-gray-800 text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
                                <span className="material-symbols-outlined text-2xl">groups</span>
                            </a>
                        </div>
                        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-10">© 2024 HealthFound. Africa's Healthcare Intelligence.</p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Contact;
