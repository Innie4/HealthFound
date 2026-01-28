import React from 'react';
import { Link } from 'react-router-dom';

const VideoInterview = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111811] dark:text-white font-display transition-colors duration-300">
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden mx-auto max-w-[480px] bg-white dark:bg-[#0a0a0a] shadow-xl pb-10">
                {/* TopAppBar */}
                <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
                    <Link to="/" className="text-[#111811] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer transition-transform hover:scale-110">
                        <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    </Link>
                    <h2 className="text-[#111811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Founder Interview</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button className="flex items-center justify-center text-[#111811] dark:text-white transition-opacity hover:opacity-70">
                            <span className="material-symbols-outlined">ios_share</span>
                        </button>
                    </div>
                </div>

                {/* Video Hero Player */}
                <div className="relative flex items-center justify-center bg-[#111811] bg-cover bg-center aspect-video group cursor-pointer" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2lugTMF00GkUfu7LtSRQWsPIOKL5TKhINtaQzGUd-tMMSb6A0cUQfO-YuZRyAKxS5qHEN7_MMW3NS0-m0uaH_uwHtGArD5bpRNNxWfVZ11LD2D13y2QJ6tvbKp01us18VmIpk1SZvnr-M3qNwjjU3C_gOi9m5wQKegtTkuJz05fZlqUsCoEpVTlTwKKBq80mxCt8nTaUPB6sPIioUYCyqAhzEEdiJGQygLx1M6ZhtFaap6Y8RmgzYDAMoZf3SgTTbH1e_lVM7Iw')` }}>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                    <button className="relative flex shrink-0 items-center justify-center rounded-full size-20 bg-primary/90 text-white shadow-2xl scale-100 active:scale-95 transition-transform">
                        <span className="material-symbols-outlined !text-4xl fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </button>
                    <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex h-1.5 items-center justify-center mb-2">
                            <div className="h-1.5 w-1/4 rounded-full bg-primary"></div>
                            <div className="relative">
                                <div className="size-4 rounded-full bg-primary border-2 border-white shadow-sm -translate-x-1/2"></div>
                            </div>
                            <div className="h-1 flex-1 rounded-full bg-white opacity-30"></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-white text-xs font-bold leading-normal tracking-wider">04:12</p>
                            <p className="text-white text-xs font-medium leading-normal opacity-70">15:45</p>
                        </div>
                    </div>
                </div>

                {/* Headline & Meta */}
                <div className="px-4">
                    <h1 className="text-[#111811] dark:text-white tracking-tight text-[28px] font-extrabold leading-tight pt-6 pb-2">
                        Revolutionizing Telehealth: An Interview with Dr. Sarah Chen
                    </h1>
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20">
                            <span className="material-symbols-outlined text-primary text-xl">health_metrics</span>
                        </div>
                        <div>
                            <p className="text-[#111811] dark:text-white text-sm font-bold">HealthFound Exclusive</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">Published Oct 24, 2023 • 15 min watch</p>
                        </div>
                    </div>
                </div>

                {/* Key Takeaways Card */}
                <div className="px-4 py-6">
                    <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-5 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-primary">auto_awesome</span>
                            <h3 className="text-primary text-lg font-extrabold leading-tight tracking-[-0.015em]">Key Takeaways</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Leveraging AI to reduce clinician burnout by 40% through automated charting.",
                                "The importance of \"Human-in-the-loop\" systems for diagnostic accuracy.",
                                "Future outlook on decentralized clinical trials and patient accessibility.",
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span>
                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-normal">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Q&A Section */}
                <div className="px-4 space-y-8">
                    {[
                        { tag: "The Problem", q: "What was the specific 'aha' moment that led you to start HealthFound?", a: "It happened during a late-night shift at the hospital. I realized that 60% of my time wasn't spent with patients, but with a legacy EHR system that felt like it was built in the 90s. I knew there had to be a way to prioritize the patient-provider relationship again through better tech infrastructure." },
                        { tag: "The Solution", q: "How are you balancing rapid AI integration with patient safety?", a: "Safety isn't a feature; it's the foundation. We've implemented a triple-check architecture. Every AI-generated clinical note is verified by a physician, and our models are trained exclusively on validated medical datasets, ensuring zero hallucination in critical diagnostics." },
                        { tag: "Future Outlook", q: "Where do you see the telehealth industry in the next 5 years?", a: "We're moving from 'Telehealth' to 'Ambient Health'. Your home will become a passive diagnostic hub, and doctors will only intervene when proactive sensors flag an anomaly. It's about moving from reactive sick-care to true preventative healthcare." }
                    ].map((item, idx) => (
                        <div key={idx} className="space-y-3">
                            <h4 className="text-primary text-base font-bold uppercase tracking-widest">{item.tag}</h4>
                            <p className="text-[#111811] dark:text-white text-xl font-extrabold leading-tight">{item.q}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>

                {/* Watch More Interviews Carousel */}
                <div className="py-8 bg-background-light dark:bg-[#112111]/30 mt-8">
                    <div className="flex items-center justify-between px-4 pb-4">
                        <h3 className="text-[#111811] dark:text-white text-lg font-bold">Watch More Interviews</h3>
                        <button className="text-primary font-bold text-sm hover:underline">View all</button>
                    </div>
                    <div className="flex overflow-x-auto px-4 gap-4 no-scrollbar pb-4">
                        {[
                            { title: "Scaling Biotech Infrastructure: Mark Lawson", date: "Oct 18, 2023", duration: "12:30", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHcMj2g7MO_suLtTxWFLga0RavpFHH4axh0vjI7_TlmM1sF-zi4ZNpSzh7yCqT1Y-3CrO-t9aUJjr1QwQRYXUsK85wBwjxButsqZQU9JSo9G9qEWyJaXwsv0-xu-DFmcEJcRQOuhU_gHugqTZVYziQxVM-DIyCkK8u0vQWf42imqCZ7CAVq0CY1ZO3wGxWXb3Szqj1RAsYTHS9MlwQGC1nrdOkHcWaiJppuGFCN5GBsbwjku2O1r7Ou6ijbNUxlJBQBzrHVgaAlQ" },
                            { title: "The Future of Wearables with BioLink Founders", date: "Oct 15, 2023", duration: "08:45", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC63tbdaPbECbq3edhvEOVCQpnCV66PG3Afa8zSI_cJ58M-XszVv4nQJroyF0SWxC9HwjTan3bCIBttzpgXNvtez6PzHdgYkjSHRka6bQBODqJJBQQ52US4tZvX-36Tl5gBlzzpGfBoNEQgYy0y6Gtpffq18GHXHnU285bxCxTa4PUECvNKdUM1qC5wmClRKQwim2s1RToueECEp3ynH4tyqqgKtR2Pp3-_3Oo00yauFN8lZFCcXblm9YMoXJGAQUU0gtAtLTZHoQ" },
                            { title: "Navigating FDA Approval: Lessons from Clinical AI", date: "Oct 10, 2023", duration: "22:15", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQfr4ALlvkM75M3gkU3HAn5UjuAWM6oSedD9Aqxm0_0eDnIXYU4W6uMSt566pHkaFbBFLgRzhzJ1c365nOo07MJxo_gnSnI7ATaq7jn4y2CP_H2zsrs6g3WrWXWdgHBJISpQAbjLcv60BedF0J_z7rLX3Z6YrsNdT-e_q9WJmfmlb1w7lQ0xB1uoq645S9ZVlhw8Ldkxe__kteO4QR6gpMv92tpghg1mTto_T4qw72Kc-kDlY8XGGC-xCdfmHvg5iTvPcNHIJzYA" },
                        ].map((video, idx) => (
                            <div key={idx} className="min-w-[240px] w-[240px] bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col transition-transform hover:scale-[1.02] cursor-pointer">
                                <div className="relative aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${video.img})` }}>
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white font-bold">{video.duration}</div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h5 className="text-[#111811] dark:text-white font-bold text-sm line-clamp-2 leading-tight">{video.title}</h5>
                                    <p className="text-gray-500 text-[10px] mt-1 uppercase font-bold tracking-wider">{video.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoInterview;
