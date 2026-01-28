import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const CareerConvo = () => {
    return (
        <div className="bg-[#fbfcfa] dark:bg-[#0f140a] min-h-screen text-[#111813] dark:text-white font-display">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0f140a]/80 backdrop-blur-md border-b border-[#e1ead6] dark:border-white/5 px-4 py-3">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-[#B3D684] p-1.5 rounded-lg">
                            <span className="material-symbols-outlined text-[#0f140a] text-2xl font-bold">forum</span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tight">Career Convo</h1>
                    </Link>
                    <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-[#B3D684]">account_circle</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-7xl mx-auto pb-24 px-4">
                <section className="py-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] flex items-center p-8 md:p-16 border-4 border-[#B3D684]/20"
                        style={{
                            background: 'linear-gradient(135deg, #B3D684 0%, #d4e9b8 100%)'
                        }}
                    >
                        <div className="max-w-2xl space-y-6 relative z-10 text-[#0f140a]">
                            <span className="bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Live discussion</span>
                            <h2 className="text-4xl md:text-6xl font-black leading-tight">Authentic conversations about health careers.</h2>
                            <p className="text-lg opacity-80 font-bold max-w-lg">
                                Join our community of healthcare experts, students, and recruiters as we talk about what it really takes to succeed in the African health tech space.
                            </p>
                            <button className="bg-[#0f140a] text-[#B3D684] px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:scale-[1.05] transition-all">
                                Join the Conversation
                            </button>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                            <span className="material-symbols-outlined !text-[300px]">chat_bubble</span>
                        </div>
                    </motion.div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section className="space-y-6">
                        <h3 className="text-2xl font-black flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#B3D684]">trending_up</span>
                            Trending Topics
                        </h3>
                        <div className="space-y-4">
                            {[
                                "Is an MBA worth it for Doctors?",
                                "Negotiating remote salaries with global startups",
                                "The rise of Biomedical engineering in Egypt",
                            ].map((topic, i) => (
                                <div key={i} className="bg-white dark:bg-white/5 border border-[#e1ead6] dark:border-white/10 p-6 rounded-2xl hover:border-[#B3D684] transition-colors cursor-pointer group shadow-sm">
                                    <p className="font-extrabold text-lg group-hover:text-[#B3D684] transition-colors">{topic}</p>
                                    <div className="flex gap-4 mt-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
                                        <span>42 REPLIES</span>
                                        <span>•</span>
                                        <span>2K VIEWS</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h3 className="text-2xl font-black flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#B3D684]">psychology</span>
                            Expert Advice
                        </h3>
                        <div className="bg-[#B3D684]/5 dark:bg-[#B3D684]/10 rounded-3xl p-8 border border-[#B3D684]/20">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="size-16 rounded-full bg-cover bg-center border-2 border-[#B3D684]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAg9GzK67FkKYwHjR5aYwwWacz08ejhE_OmFJB8t2pORTJTnESWtp7ymvW1qyoSpnudHqpe9Rs3QLZSLVNHU_wWehmvJ56OxN5EFzMgR7uDC54J0yc3VdtqxKr1A2d5Ye0y--jPE4s3vFV6EqRlWM_z5a034CxmmorruR0FBwzoFNSS1JeZwRRGc9SecYyflvaO_sakl6A9Te-wL7R8KtbX5XiZ3dO83-s5aGJ49FriyZbwzBI0QKaUUS5qGGS7enL-2pvfQDf87Q")' }}></div>
                                <div>
                                    <p className="font-black text-[#B3D684]">Dr. Sarah A.</p>
                                    <p className="text-xs font-bold opacity-60 uppercase">Career Coach @ HealthFound</p>
                                </div>
                            </div>
                            <p className="text-[#0f140a] dark:text-white/80 font-medium italic text-lg leading-relaxed">
                                "The most successful founders in African healthtech aren't just technologists—they're systems thinkers who understand the regulatory nuances of their home markets."
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default CareerConvo;
