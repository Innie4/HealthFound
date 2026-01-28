import React from 'react';
import { Link } from 'react-router-dom';

const Spotlight = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-xl overflow-x-hidden">
                {/* TopAppBar */}
                <div className="fixed top-0 z-50 w-full max-w-[480px] flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-primary/10">
                    <Link to="/" className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </Link>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Community Spotlight</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button className="flex items-center justify-center text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined">share</span>
                        </button>
                    </div>
                </div>

                <main className="pt-16 pb-24">
                    {/* Header Image with Overlay Content */}
                    <div className="relative w-full h-[450px]">
                        <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE0HiVX0_0QbCxlLYeEpkY8E9bu-t5Sgoe5I7I9IoNA6XEzheeZT3bhk7E4HS2fYI6XAT_izkenuGUYHJU1m27fFSF_g2DxMP9fgIz_1v6HFDU4dYELp2umU17YynW4s2JeLW-y0e4N4WyRs8CVF7viIhKFy-Z0MoZwt9xJnSWoXVvKAbTXKpal2Hhfg7U2j-4IFPZMW4nC8UQ4wn28LzHjyiN7En7oFCBG5rN0P7CW7gVp3n4bqbNFi9A-2jlJswHl6VHqapsIg')` }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center">
                            <div className="bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full px-4 py-1 mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">stars</span>
                                <span className="text-primary text-xs font-extrabold uppercase tracking-widest">Contributor of the Month</span>
                            </div>
                            <h1 className="text-white tracking-tight text-4xl font-extrabold leading-tight text-center pb-1">Dr. Amara Okezie</h1>
                            <p className="text-primary/90 text-sm font-medium leading-normal px-4 text-center">Health Equity Researcher & Top Policy Writer</p>

                            <div className="flex gap-3 mt-6 w-full max-w-sm">
                                <button className="flex-1 bg-primary text-background-dark font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-transform active:scale-95">
                                    <span className="material-symbols-outlined text-[20px]">person_add</span>
                                    Follow
                                </button>
                                <button className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95">
                                    <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                                    Debate
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Achievement Section */}
                    <div className="px-4 py-8">
                        <h4 className="text-primary text-xs font-bold leading-normal tracking-[0.2em] uppercase pb-4">Why They’re Featured</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-primary/5 border border-primary/10 p-4 rounded-xl">
                                <span className="material-symbols-outlined text-yellow-500 mb-2">trending_up</span>
                                <p className="text-2xl font-bold dark:text-white">50k+</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Total Reads this month</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-primary/5 border border-primary/10 p-4 rounded-xl">
                                <span className="material-symbols-outlined text-primary mb-2">verified</span>
                                <p className="text-2xl font-bold dark:text-white">Top 1%</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Contributor Ranking</p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                            "Dr. Okezie's analysis on rural healthcare access has sparked critical dialogue, garnering over 400 insightful comments from medical professionals worldwide."
                        </p>
                    </div>

                    {/* Top Insights Grid */}
                    <div className="px-4 pb-12">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-primary text-xs font-bold leading-normal tracking-[0.2em] uppercase">Top Insights from Amara</h4>
                            <span className="text-primary text-xs font-bold cursor-pointer">View All</span>
                        </div>
                        <div className="space-y-4">
                            {[
                                { title: "The Future of Telemedicine in Emerging Markets", type: "Analysis", time: "6 min read", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-ok21mLccYTsHDSZb0LMatOlKnAfiqSe5VsQuz-MbJ6kIrE8hi-dkgeX7zXFMS1EndCniWvcfjvSpJxGQOxkaUhONMNFk-ooth5g3q_DP-sEz-BwRFewDlRHt1RVnh1O4pIywaugpTZthJj2xda54zu1yQuDA5Efqc8aCZIpK_zjSeil6Rw9TsPZsK05j1-khxtmszZ1Za2bAjiVdqeiBNWcdRnY9YcNktPA8V0AABWCuGZ2rMsZqNDRKV97EXqYzYm0xdkb44w" },
                                { title: "Data Integrity in Community Health Research", type: "Research", time: "12 min read", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzluDG4fhoAuoQalpDhulyrISNHkFv7Jnwdtpl3bb2g2RJNhC5DtldjMsWPEJrqUiVZReLsRrpT70Ug7mrTpmbyTdM1kuTC0rmU6ONlQ9EcnYWKAtyUS5LTylVUN1qWZcPsoTIJGSUzSQ448m3GKEZ4np_iCOy3ewzQ1Fp_hkh89qunvv80shdCu1Kdor-j35HCO0XzyfmE6srOSk71r94CspR6m-K9xcUQ85iblNFvJDEAGte-LX1mfmRtwWV2jQ_UUucG4QDGA" },
                                { title: "Navigating Policy Barriers for Local Clinics", type: "Opinion", time: "4 min read", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnt5k1yjWV-Xty3F9XnWLLgp94_4p5FkVvgMvS8DYN57BupxfcLxMkboqFlcZLERPUJLamBhLoFarG0uo6SfDqJnJpfu7v6bQ6yGu4MfadsSfgoRHMwq7mLF47qndrhxjLWKzPMoDH4JvY4eJKKRkD647dc1i3o48EWpj8rXsNj3yWUIHAZz5WyK4SqDbiWZjh6Q8VB04hsRko1q-Q8FKaUzZZLdPTlmGk2wEFi4zFkYoElSFcvenV5ERF1PmzRwmDt6Nx_wOS9g" },
                            ].map((insight, idx) => (
                                <div key={idx} className="flex gap-4 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-primary/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                    <div className="w-24 h-24 shrink-0 bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: `url(${insight.img})` }}></div>
                                    <div className="flex flex-col justify-center pr-4">
                                        <h3 className="text-sm font-bold line-clamp-2 dark:text-white">{insight.title}</h3>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-bold uppercase">{insight.type}</span>
                                            <span className="text-[10px] text-slate-400 italic">{insight.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Join Debate CTA */}
                    <div className="px-4 pb-12">
                        <div className="bg-gradient-to-br from-background-dark to-[#1a3a1a] border border-primary/20 rounded-2xl p-6 text-center shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Ready to contribute?</h3>
                            <p className="text-sm text-slate-300 mb-6 px-4">Share your knowledge and you could be our next featured spotlight contributor.</p>
                            <Link to="/forum" className="block w-full bg-primary text-background-dark font-extrabold py-4 rounded-xl shadow-xl shadow-primary/20 transition-transform active:scale-95 text-center">
                                Join the Debate Circle
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Spotlight;
