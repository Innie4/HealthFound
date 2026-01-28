import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ForumDetail = () => {
    const { id } = useParams();

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111811] dark:text-white font-display">
            <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-xl pb-24">
                {/* TopAppBar */}
                <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center p-4 pb-2 justify-between">
                        <Link to="/forum" className="text-[#111811] dark:text-white flex size-10 shrink-0 items-center justify-start">
                            <span className="material-symbols-outlined">arrow_back_ios</span>
                        </Link>
                        <h2 className="text-[#111811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Discussion</h2>
                        <div className="flex w-10 items-center justify-end">
                            <button className="flex cursor-pointer items-center justify-center text-[#111811] dark:text-white">
                                <span className="material-symbols-outlined">more_vert</span>
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto">
                    {/* Main Thread Post */}
                    <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="size-12 rounded-full bg-cover bg-center shrink-0 border-2 border-primary/20" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAg9GzK67FkKYwHjR5aYwwWacz08ejhE_OmFJB8t2pORTJTnESWtp7ymvW1qyoSpnudHqpe9Rs3QLZSLVNHU_wWehmvJ56OxN5EFzMgR7uDC54J0yc3VdtqxKr1A2d5Ye0y--jPE4s3vFV6EqRlWM_z5a034CxmmorruR0FBwzoFNSS1JeZwRRGc9SecYyflvaO_sakl6A9Te-wL7R8KtbX5XiZ3dO83-s5aGJ49FriyZbwzBI0QKaUUS5qGGS7enL-2pvfQDf87Q')` }}></div>
                            <div className="flex-1">
                                <div className="flex items-baseline justify-between">
                                    <span className="font-bold text-[#111811] dark:text-white">Dr. Amara O.</span>
                                    <span className="text-[10px] text-gray-400 capitalize bg-primary/10 px-2 py-0.5 rounded text-primary">OP</span>
                                </div>
                                <p className="text-xs text-gray-500">2 hours ago • Health Equity Specialist</p>
                            </div>
                        </div>

                        <h1 className="text-xl font-extrabold leading-tight mb-4 dark:text-white tracking-tight">How will the new Nigerian health mandates affect bootstrapped startups?</h1>

                        <div className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 space-y-4">
                            <p>The recent policy shift toward mandatory digital health insurance record synchronization is a double-edged sword for early-stage founders.</p>
                            <p>While it improves data interoperability across the sector, the compliance costs for sub-seed startups are significantly higher than expected. I'm concerned this might stifle innovation in rural health diagnostics which usually operates on very thin margins.</p>
                            <p>What are your thoughts on current feasibility windows?</p>
                        </div>

                        <div className="flex items-center gap-6 pt-4 border-t border-gray-50 dark:border-gray-800">
                            <div className="flex items-center gap-2 text-primary font-bold">
                                <span className="material-symbols-outlined">thumb_up</span>
                                <span className="text-sm">128</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="material-symbols-outlined">comment</span>
                                <span className="text-sm">42</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="material-symbols-outlined">share</span>
                                <span className="text-sm">Share</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 ml-auto">
                                <span className="material-symbols-outlined">bookmark</span>
                            </div>
                        </div>
                    </div>

                    {/* Comments Section Header */}
                    <div className="bg-gray-50 dark:bg-gray-800/20 px-4 py-3 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#63886f]">Replies (42)</h3>
                        <div className="flex items-center gap-1 text-[#63886f] text-xs font-bold">
                            <span>Top</span>
                            <span className="material-symbols-outlined !text-sm">expand_more</span>
                        </div>
                    </div>

                    {/* Comments List */}
                    <div className="flex flex-col">
                        {[
                            {
                                id: 101,
                                author: "Tunde Bakare",
                                role: "FinTech Lead",
                                time: "1h ago",
                                content: "Spot on, Amara. The API integration fees alone for the new government portal are a huge barrier. We need a 'Lite' compliance tier for startups with under 10k users.",
                                votes: 45,
                                avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY_FS7Hnyc5veWJMXaf117ZfUyVnRwel81samR_xtKCZaxBwDxrPFwinBM9Gst_erlQiWbAJlGQpqoiqnRs2VyRAMHIKmZVqfWv2felu3mZM54Xi0yNBgGCo9YZU_7kVACK1OyN7ElEblv0vVvHYVbJSC8HFpPhlq4BeJ6cjgCirDOuSHF2LzvYp3cNo_-RaGA9TXyDiYA1zqlQeqtbsJk8HLq4tr_DdJMOobz70Nc6HK_XRecUdaREg_MCnVLPhjiGIqNwAnuew"
                            },
                            {
                                id: 102,
                                author: "Chibuzor Eze",
                                role: "Policy Analyst",
                                time: "45m ago",
                                content: "I've been in meetings with the ministry. They are currently reviewing the grace period extension. Expect an update by next Friday.",
                                votes: 32,
                                avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg9GzK67FkKYwHjR5aYwwWacz08ejhE_OmFJB8t2pORTJTnESWtp7ymvW1qyoSpnudHqpe9Rs3QLZSLVNHU_wWehmvJ56OxN5EFzMgR7uDC54J0yc3VdtqxKr1A2d5Ye0y--jPE4s3vFV6EqRlWM_z5a034CxmmorruR0FBwzoFNSS1JeZwRRGc9SecYyflvaO_sakl6A9Te-wL7R8KtbX5XiZ3dO83-s5aGJ49FriyZbwzBI0QKaUUS5qGGS7enL-2pvfQDf87Q"
                            },
                        ].map((comment) => (
                            <div key={comment.id} className="p-4 border-b border-gray-50 dark:border-gray-800">
                                <div className="flex items-start gap-3">
                                    <div className="size-8 rounded-full bg-cover bg-center shrink-0 border border-gray-100 dark:border-gray-800" style={{ backgroundImage: `url(${comment.avatar})` }}></div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold text-sm dark:text-white">{comment.author}</span>
                                            <span className="text-[10px] text-gray-500">{comment.time}</span>
                                        </div>
                                        <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-normal mb-3">{comment.content}</p>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1.5 text-gray-400">
                                                <span className="material-symbols-outlined !text-lg">thumb_up</span>
                                                <span className="text-xs font-bold">{comment.votes}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-gray-400">
                                                <span className="material-symbols-outlined !text-lg">reply</span>
                                                <span className="text-xs font-bold">Reply</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Post Comment Input */}
                <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 p-4 pb-8 z-50">
                    <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2 border border-gray-100 dark:border-gray-800">
                            <input
                                className="w-full bg-transparent border-none focus:ring-0 text-sm py-1 dark:text-white"
                                placeholder="Add to the debate..."
                            />
                        </div>
                        <button className="text-primary font-extrabold text-sm uppercase tracking-wider px-2">Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForumDetail;
