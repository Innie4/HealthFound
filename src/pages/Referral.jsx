import React from 'react';
import { Link } from 'react-router-dom';

const Referral = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111816] dark:text-white font-display">
            <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-xl overflow-x-hidden pb-10">
                {/* Top Header */}
                <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center p-4 justify-between">
                        <Link to="/profile" className="text-[#111816] dark:text-white transition-transform hover:scale-110">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </Link>
                        <h2 className="text-[#111816] dark:text-white text-lg font-bold">Refer a Colleague</h2>
                        <div className="size-10"></div>
                    </div>
                </header>

                <main className="p-6">
                    {/* Hero Promo */}
                    <section className="bg-gradient-to-br from-primary via-primary to-[#2beead] p-8 rounded-[40px] text-[#0a0a0a] shadow-2xl shadow-primary/30 relative overflow-hidden mb-10 group">
                        <div className="relative z-10">
                            <span className="bg-black/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block">Pro Reward</span>
                            <h1 className="text-3xl font-black leading-tight tracking-tight mb-4">Get 1 Month Free Pro Access</h1>
                            <p className="text-sm font-bold opacity-80 leading-relaxed mb-8">For every colleague who signs up for an Individual or Institutional plan using your link.</p>
                            <div className="flex -space-x-3 mb-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="size-10 rounded-full border-2 border-primary bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAg9GzK67FkKYwHjR5aYwwWacz08ejhE_OmFJB8t2pORTJTnESWtp7ymvW1qyoSpnudHqpe9Rs3QLZSLVNHU_wWehmvJ56OxN5EFzMgR7uDC54J0yc3VdtqxKr1A2d5Ye0y--jPE4s3vFV6EqRlWM_z5a034CxmmorruR0FBwzoFNSS1JeZwRRGc9SecYyflvaO_sakl6A9Te-wL7R8KtbX5XiZ3dO83-s5aGJ49FriyZbwzBI0QKaUUS5qGGS7enL-2pvfQDf87Q')` }}></div>
                                ))}
                                <div className="size-10 rounded-full border-2 border-primary bg-black text-white flex items-center justify-center text-[10px] font-black">+80</div>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Success Referrals this week</p>
                        </div>
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 size-48 bg-white/20 rounded-full -translate-y-12 translate-x-12 blur-3xl transition-transform group-hover:scale-125 duration-1000"></div>
                    </section>

                    {/* Referral Link Copy */}
                    <section className="space-y-6 mb-12">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#63886f] border-l-4 border-primary pl-3">Your Referral Link</h3>
                        <div className="relative group">
                            <input
                                readOnly
                                value="healthfound.africa/ref/amara-42"
                                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl h-16 px-6 text-sm font-bold text-[#111816] dark:text-white focus:ring-4 ring-primary/10 transition-all outline-none"
                            />
                            <button className="absolute right-2 top-2 bg-primary text-[#0a0a0a] px-5 h-12 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg active:scale-95 transition-transform">
                                Copy
                            </button>
                        </div>
                    </section>

                    {/* Share Options */}
                    <section className="mb-12">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#63886f] border-l-4 border-primary pl-3 mb-6">Quick Share</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: 'chat', label: 'WhatsApp', color: 'bg-[#25D366] text-white' },
                                { icon: 'share', label: 'LinkedIn', color: 'bg-[#0077b5] text-white' },
                                { icon: 'mail', label: 'Email', color: 'bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white' },
                            ].map((plat, idx) => (
                                <button key={idx} className="flex flex-col items-center gap-3 group">
                                    <div className={`size-16 rounded-3xl ${plat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                        <span className="material-symbols-outlined !text-3xl">{plat.icon}</span>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">{plat.label}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Referral Stats */}
                    <section>
                        <div className="bg-gray-50 dark:bg-white/5 rounded-[40px] p-8 border border-gray-100 dark:border-white/10">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-sm font-black dark:text-gray-100 uppercase tracking-widest leading-none">Your Progress</h3>
                                <span className="text-primary text-xs font-black uppercase tracking-widest">340 Points</span>
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Pending Referrals</span>
                                    <span className="text-base font-black">12</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Successful Referrals</span>
                                    <span className="text-base font-black text-primary">08</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Rewards Claimed</span>
                                    <span className="text-base font-black">01</span>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100 dark:bg-white/10 my-8"></div>
                            <button className="w-full h-14 bg-[#10221c] dark:bg-primary text-primary dark:text-[#10221c] rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl active:scale-[0.98] transition-transform">
                                View Reward History
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Referral;
