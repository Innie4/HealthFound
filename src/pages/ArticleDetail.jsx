import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const ArticleDetail = () => {
    const { id } = useParams();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white antialiased min-h-screen">
            {/* Top Bar & Progress */}
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#e5e7eb] dark:border-white/10">
                <div className="flex items-center justify-between p-4 pb-2 max-w-4xl mx-auto">
                    <div className="flex items-center">
                        <Link to="/news" className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-[#111813] dark:text-white font-bold">arrow_back_ios_new</span>
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-[#111813] dark:text-white">share</span>
                        </button>
                        <Link to="/saved" className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-[#111813] dark:text-white">bookmark</span>
                        </Link>
                    </div>
                </div>
                {/* Reading Progress Bar */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
                    style={{ scaleX }}
                />
            </header>

            <main className="max-w-4xl mx-auto pb-24">
                {/* Article Header */}
                <section className="px-5 pt-10">
                    {/* Category Chip */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3 mb-6"
                    >
                        <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4 border border-primary/30">
                            <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] leading-normal">Funding</p>
                        </div>
                        <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-white/5 px-4 border border-white/10">
                            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] leading-normal">Insights</p>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[#111813] dark:text-white tracking-tight text-4xl md:text-5xl font-black leading-[1.1] pb-8"
                    >
                        The Future of Healthcare Investment in Africa: 2024 Trends
                    </motion.h1>

                    {/* Author Byline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 py-6 border-y border-gray-100 dark:border-white/5"
                    >
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl h-14 w-14 border-2 border-primary shadow-lg"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAg9GzK67FkKYwHjR5aYwwWacz08ejhE_OmFJB8t2pORTJTnESWtp7ymvW1qyoSpnudHqpe9Rs3QLZSLVNHU_wWehmvJ56OxN5EFzMgR7uDC54J0yc3VdtqxKr1A2d5Ye0y--jPE4s3vFV6EqRlWM_z5a034CxmmorruR0FBwzoFNSS1JeZwRRGc9SecYyflvaO_sakl6A9Te-wL7R8KtbX5XiZ3dO83-s5aGJ49FriyZbwzBI0QKaUUS5qGGS7enL-2pvfQDf87Q")' }}
                        >
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-[#111813] dark:text-white text-lg font-black leading-tight">Dr. Amara Okafor</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Oct 24, 2023 • 5 min read</p>
                        </div>
                    </motion.div>
                </section>

                {/* Featured Image */}
                <section className="px-5 py-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-full aspect-video rounded-3xl bg-cover bg-center shadow-2xl overflow-hidden"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1E7WPZvoCUOO6JJZtn5jF8q6LRpQs_Rrk21PRBTzFOlvkyX6l2crYi8tRrPtOzzYejt5tkpNJjhtEZltIBftRxGCxjXs8b2HheF2SKJXKMywgwwK_91A1PckARMN1pu0HTrUBS-5HwXQjDaMdK30qPZQayV_G7PoRI-P7YH30ZWL-VmaoLh6hKP0HEDVhiOtEmwRcmnQWeSxuPGgvFNC8ooHBnSIJBwIYYhKGUnOoA9IUZsttXX0ucqYBOGHxkoiPilTWf3P-SQ")' }}
                    >
                    </motion.div>
                    <p className="text-sm text-gray-500 font-medium mt-4 italic text-center">New diagnostic centers are expanding across West Africa. (Photo: HealthFound Intel)</p>
                </section>

                {/* Article Content */}
                <article className="px-5 text-xl md:text-2xl leading-[1.6] text-[#111813]/90 dark:text-white/80 space-y-8 font-medium">
                    <p>
                        The landscape of healthcare investment in Africa is undergoing a radical transformation. For decades, funding was primarily driven by international NGOs and government grants. However, the last 24 months have seen a massive influx of private venture capital targeting tech-enabled health solutions.
                    </p>
                    {/* Pull Quote */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        viewport={{ once: true }}
                        className="my-12 py-8 px-10 border-l-8 border-primary bg-primary/5 rounded-r-3xl shadow-inner"
                    >
                        <p className="text-2xl md:text-4xl font-black italic text-[#111813] dark:text-white leading-tight">
                            "Investment in African health-tech has grown by 40% year-over-year, signaling a shift toward sustainable digital infrastructure rather than temporary fixes."
                        </p>
                    </motion.div>
                    <p>
                        Digital pharmacy platforms in Nigeria and telemedicine startups in Kenya are leading the charge. Investors are no longer just looking at user growth; they are scrutinizing integration with local supply chains and the ability to navigate complex regulatory environments.
                    </p>
                    <p>
                        As we look toward 2025, the focus is shifting toward AI-driven diagnostics that can operate in low-bandwidth environments, bringing specialist-level care to rural populations that previously had no access to such services.
                    </p>
                </article>

                {/* Social Shares */}
                <section className="mx-5 py-8 flex gap-6 mt-12 border-y border-gray-100 dark:border-white/10 items-center justify-center">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Share Article</p>
                    <div className="flex gap-4">
                        <button className="size-12 flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-white/5 hover:bg-primary transition-all group">
                            <span className="material-symbols-outlined text-xl group-hover:text-[#112116]">link</span>
                        </button>
                        <button className="size-12 flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-white/5 hover:bg-primary transition-all group">
                            <span className="material-symbols-outlined text-xl group-hover:text-[#112116]">send</span>
                        </button>
                        <button className="size-12 flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-white/5 hover:bg-primary transition-all group">
                            <span className="material-symbols-outlined text-xl group-hover:text-[#112116]">alternate_email</span>
                        </button>
                    </div>
                </section>

                {/* Related Articles */}
                <section className="px-5 mt-16 pb-12">
                    <h2 className="text-3xl font-black mb-10 tracking-tight">Related Intelligence</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Related Item 1 */}
                        <motion.div whileHover={{ scale: 1.02 }} className="flex gap-5 p-4 bg-white dark:bg-white/5 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 cursor-pointer">
                            <div className="size-28 shrink-0 rounded-2xl bg-cover bg-center shadow-md"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMI73_x2F7Rn6dAQT-a9IVhVaUOFRJmoi8-Frz2U4v9Oq-rN7XsvSYXhiMV4kIkekDI5hA8m-hCnTBx6V6YvuOfHAgH5BUJd0_Js0Uj3ce5J-xD1YUS0BkwOYcnoyC_3TrV_9e4oDXvs8-y21JzQnBVhcLuyzixbJRNKXESaoXDKyBkIlFLKcKNwjlJIsD1pA1cg5U4MyntHF0oQOtwIR2D0lXXCNrAy1qHciKUVM23ifDlONVD7RhHEuHJ6ZEz63vT_OUpIPmXQ")' }}
                            >
                            </div>
                            <div className="flex flex-col justify-between py-1">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">Infrastructure</p>
                                    <h3 className="font-black text-lg leading-tight line-clamp-2">Scaling Cold-Chain Logistics for Vaccines in Rwanda</h3>
                                </div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Nov 02 • 4 min read</p>
                            </div>
                        </motion.div>
                        {/* Related Item 2 */}
                        <motion.div whileHover={{ scale: 1.02 }} className="flex gap-5 p-4 bg-white dark:bg-white/5 rounded-3xl shadow-sm border border-gray-100 dark:border-white/5 cursor-pointer">
                            <div className="size-28 shrink-0 rounded-2xl bg-cover bg-center shadow-md"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdciTGOa2oO1D-t-oMsPeOkqt17SOAQEr2KfxYbvihGwRwAcAMkICDca5bYZ6CGo-NvclU2Q0Gp9Vf7gZxXkhJvldthVr9cYbPO99yLNDhxTrCPAmyNpRNSL7UVX7asloxyd-7zjAEnKnmunuWFGElBRfcYEsV_fVqm3Tzn9qVIPVMhMR0Va6vaCvwPQqwofpVhiVV-axxspfhbdF1C5P3C_LwcJnRTMHYKB5WsPdx1xp2QAnxbfsHMjcRJ2LjeISp21CkKiSNtg")' }}
                            >
                            </div>
                            <div className="flex flex-col justify-between py-1">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">Telemedicine</p>
                                    <h3 className="font-black text-lg leading-tight line-clamp-2">The Regulatory Hurdles for Cross-Border E-Health</h3>
                                </div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Oct 28 • 7 min read</p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Global Bottom Tab Bar Simulation */}
            <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 flex justify-around items-center px-6 pb-8 z-50 transition-all sm:hidden">
                <Link to="/" className="flex flex-col items-center gap-1 text-gray-400">
                    <span className="material-symbols-outlined font-black">home</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Home</span>
                </Link>
                <Link to="/news" className="flex flex-col items-center gap-1 text-gray-400">
                    <span className="material-symbols-outlined font-black">newspaper</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">News</span>
                </Link>
                <Link to="/saved" className="flex flex-col items-center gap-1 text-gray-400">
                    <span className="material-symbols-outlined font-black">bookmark</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Saved</span>
                </Link>
                <Link to="/profile" className="flex flex-col items-center gap-1 text-gray-400">
                    <span className="material-symbols-outlined font-black">person</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Profile</span>
                </Link>
            </nav>
        </div>
    );
};

export default ArticleDetail;
