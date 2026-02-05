import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import AdBanner from '../components/AdBanner';

const Profile = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 p-4">
                <div className="flex items-center justify-between max-w-xl mx-auto">
                    <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h1 className="text-xl font-black">Account Profile</h1>
                    <button className="text-primary p-2 rounded-full hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                </div>
            </header>

            <main className="max-w-xl mx-auto p-4 pb-32">
                {/* Profile Card */}
                <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/10 shadow-sm text-center mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                    <div className="relative inline-block mb-6">
                        <div className="size-32 rounded-[2.5rem] bg-gray-200 dark:bg-white/10 overflow-hidden border-4 border-white dark:border-background-dark shadow-2xl mx-auto">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg9GzK67FkKYwHjR5aYwwWacz08ejhE_OmFJB8t2pORTJTnESWtp7ymvW1qyoSpnudHqpe9Rs3QLZSLVNHU_wWehmvJ56OxN5EFzMgR7uDC54J0yc3VdtqxKr1A2d5Ye0y--jPE4s3vFV6EqRlWM_z5a034CxmmorruR0FBwzoFNSS1JeZwRRGc9SecYyflvaO_sakl6A9Te-wL7R8KtbX5XiZ3dO83-s5aGJ49FriyZbwzBI0QKaUUS5qGGS7enL-2pvfQDf87Q" className="w-full h-full object-cover" alt="Profile" />
                        </div>
                        <button className="absolute bottom-0 right-0 size-10 bg-primary text-[#112116] rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-xl font-black">camera_alt</span>
                        </button>
                    </div>
                    <h2 className="text-3xl font-black mb-1">Inimfon Udoh</h2>
                    <p className="text-gray-500 dark:text-white/40 font-bold uppercase tracking-widest text-xs">Digital Health Strategist</p>

                    <div className="flex justify-center gap-12 mt-8">
                        <div className="text-center">
                            <p className="text-2xl font-black">12</p>
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">SAVED</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-black">4</p>
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">APPLIED</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-black">156</p>
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">RANK</p>
                        </div>
                    </div>
                </div>

                <AdBanner />

                {/* Action List */}
                <div className="space-y-4">
                    <Link to="/saved" className="flex items-center gap-5 p-6 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-primary/50 transition-all group">
                        <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-[#112116] transition-all">
                            <span className="material-symbols-outlined font-black">bookmark</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-black text-lg">Saved Items</h4>
                            <p className="text-xs text-gray-400 font-bold">Articles and jobs you flagged</p>
                        </div>
                        <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                    </Link>

                    <Link to="/resumes" className="flex items-center gap-5 p-6 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-primary/50 transition-all group">
                        <div className="size-12 rounded-2xl bg-talent/10 text-talent flex items-center justify-center group-hover:bg-talent group-hover:text-[#112116] transition-all">
                            <span className="material-symbols-outlined font-black">description</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-black text-lg">Resume Manager</h4>
                            <p className="text-xs text-gray-400 font-bold">Update your professional credentials</p>
                        </div>
                        <span className="material-symbols-outlined text-gray-300">chevron_right</span>
                    </Link>

                    <button className="w-full flex items-center gap-5 p-6 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-red-500/50 transition-all group text-left">
                        <div className="size-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined font-black">logout</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-black text-lg">Sign Out</h4>
                            <p className="text-xs text-gray-400 font-bold">End your current session</p>
                        </div>
                    </button>
                </div>
            </main>

            <BottomNav />
        </div>
    );
};

export default Profile;
