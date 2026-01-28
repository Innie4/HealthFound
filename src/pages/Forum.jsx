import React from 'react';
import { Link } from 'react-router-dom';

const Forum = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111811] dark:text-white font-display">
            <div className="relative flex min-h-screen w-full flex-col max-w-7xl mx-auto bg-white dark:bg-background-dark shadow-xl pb-24 border-x border-gray-100 dark:border-white/5">
                {/* Top Navigation Bar */}
                <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center p-4 pb-2 justify-between max-w-7xl mx-auto">
                        <Link to="/" className="text-[#111811] dark:text-white flex size-10 shrink-0 items-center justify-start">
                            <span className="material-symbols-outlined">arrow_back_ios</span>
                        </Link>
                        <h2 className="text-[#111811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Debate Circle</h2>
                        <div className="flex w-10 items-center justify-end">
                            <button className="flex cursor-pointer items-center justify-center text-[#111811] dark:text-white">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                        </div>
                    </div>
                    {/* Horizontal Category Tabs */}
                    <div className="flex gap-4 px-4 pb-3 overflow-x-auto no-scrollbar max-w-7xl mx-auto">
                        {['General', 'Funding', 'Policy', 'Technology', 'Education'].map((cat, idx) => (
                            <button key={cat} className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-bold ${idx === 0 ? 'bg-primary text-[#10221c]' : 'bg-transparent text-[#111811] dark:text-gray-400 border border-gray-200 dark:border-gray-800'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto">
                    {/* Search Bar */}
                    <div className="px-4 py-3">
                        <label className="flex flex-col min-w-40 h-12 w-full">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm bg-gray-50 dark:bg-gray-800/50">
                                <div className="text-gray-400 flex items-center justify-center pl-4 rounded-l-xl">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent placeholder:text-gray-500 px-4 text-sm font-medium focus:ring-0"
                                    placeholder="Search debates..."
                                />
                            </div>
                        </label>
                    </div>

                    {/* Discussion List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-7xl mx-auto">
                        {[
                            {
                                id: 1,
                                title: "How will the new Nigerian health mandates affect bootstrapped startups?",
                                author: "Dr. Amara O.",
                                time: "2h ago",
                                replies: 42,
                                votes: 128,
                                tags: ['Policy', 'Nigeria'],
                                avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg9GzK67FkKYwHjR5aYwwWacz08ejhE_OmFJB8t2pORTJTnESWtp7ymvW1qyoSpnudHqpe9Rs3QLZSLVNHU_wWehmvJ56OxN5EFzMgR7uDC54J0yc3VdtqxKr1A2d5Ye0y--jPE4s3vFV6EqRlWM_z5a034CxmmorruR0FBwzoFNSS1JeZwRRGc9SecYyflvaO_sakl6A9Te-wL7R8KtbX5XiZ3dO83-s5aGJ49FriyZbwzBI0QKaUUS5qGGS7enL-2pvfQDf87Q"
                            },
                            {
                                id: 2,
                                title: "Telehealth vs In-person: Is the honeymoon over for virtual consults?",
                                author: "Kofi Mensah",
                                time: "5h ago",
                                replies: 156,
                                votes: 89,
                                tags: ['Digital Health'],
                                avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMI73_x2F7Rn6dAQT-a9IVhVaUOFRJmoi8-Frz2U4v9Oq-rN7XsvSYXhiMV4kIkekDI5hA8m-hCnTBx6V6YvuOfHAgH5BUJd0_Js0Uj3ce5J-xD1YUS0BkwOYcnoyC_3TrV_9e4oDXvs8-y21JzQnBVhcLuyzixbJRNKXESaoXDKyBkIlFLKcKNwjlJIsD1pA1cg5U4MyntHF0oQOtwIR2D0lXXCNrAy1qHciKUVM23ifDlONVD7RhHEuHJ6ZEz63vT_OUpIPmXQ"
                            },
                            {
                                id: 3,
                                title: "Predictive Analytics in Malaria Prevention: Current State-of-the-art",
                                author: "Sarah J.",
                                time: "1d ago",
                                replies: 28,
                                votes: 215,
                                tags: ['Public Health', 'AI'],
                                avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZluDG4fhoAuoQalpDhulyrISNHkFv7Jnwdtpl3bb2g2RJNhC5DtldjMsWPEJrqUiVZReLsRrpT70Ug7mrTpmbyTdM1kuTC0rmU6ONlQ9EcnYWKAtyUS5LTylVUN1qWZcPsoTIJGSUzSQ448m3GKEZ4np_iCOy3ewzQ1Fp_hkh89qunvv80shdCu1Kdor-j35HCO0XzyfmE6srOSk71r94CspR6m-K9xcUQ85iblNFvJDEAGte-LX1mfmRtwWV2jQ_UUucG4QDGA"
                            },
                        ].map((debate) => (
                            <Link to={`/forum/${debate.id}`} key={debate.id} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary transition-all shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="size-12 rounded-full bg-cover bg-center shrink-0 border-2 border-primary/20" style={{ backgroundImage: `url(${debate.avatar})` }}></div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold text-sm text-[#111811] dark:text-white/90">{debate.author}</span>
                                            <span className="text-[10px] text-gray-500 uppercase tracking-widest">• {debate.time}</span>
                                        </div>
                                        <h3 className="text-lg font-black leading-tight mb-3 dark:text-white group-hover:text-primary transition-colors">{debate.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {debate.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black text-primary uppercase tracking-widest border border-primary/10">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
                                            <div className="flex items-center gap-1.5 text-gray-500">
                                                <span className="material-symbols-outlined text-lg">forum</span>
                                                <span className="text-xs font-bold">{debate.replies}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-gray-500">
                                                <span className="material-symbols-outlined text-lg">thumb_up</span>
                                                <span className="text-xs font-bold">{debate.votes}</span>
                                            </div>
                                            <button className="flex items-center gap-1.5 text-gray-400 ml-auto hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-lg">share</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>

                {/* Floating Action Button */}
                <button className="fixed bottom-24 right-4 bg-primary text-[#10221c] size-14 rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-95 group">
                    <span className="material-symbols-outlined !text-3xl group-hover:rotate-90 transition-transform">add</span>
                </button>

                {/* Navigation Bar */}
                <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 px-6 py-3 flex justify-between items-center z-50">
                    <Link to="/" className="flex flex-col items-center gap-1 text-gray-400">
                        <span className="material-symbols-outlined">home</span>
                        <span className="text-[10px] font-medium">Home</span>
                    </Link>
                    <div className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined">forum</span>
                        <span className="text-[10px] font-bold">Forum</span>
                    </div>
                    <Link to="/insights" className="flex flex-col items-center gap-1 text-gray-400">
                        <span className="material-symbols-outlined">analytics</span>
                        <span className="text-[10px] font-medium">Insights</span>
                    </Link>
                    <Link to="/profile" className="flex flex-col items-center gap-1 text-gray-400">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-medium">Profile</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Forum;
