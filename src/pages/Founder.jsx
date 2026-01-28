import React from 'react';
import { Link } from 'react-router-dom';

const Founder = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111816] dark:text-white font-display">
            <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark overflow-x-hidden shadow-xl">
                {/* Header with Background Image */}
                <div className="relative w-full h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE0HiVX0_0QbCxlLYeEpkY8E9bu-t5Sgoe5I7I9IoNA6XEzheeZT3bhk7E4HS2fYI6XAT_izkenuGUYHJU1m27fFSF_g2DxMP9fgIz_1v6HFDU4dYELp2umU17YynW4s2JeLW-y0e4N4WyRs8CVF7viIhKFy-Z0MoZwt9xJnSWoXVvKAbTXKpal2Hhfg7U2j-4IFPZMW4nC8UQ4wn28LzHjyiN7En7oFCBG5rN0P7CW7gVp3n4bqbNFi9A-2jlJswHl6VHqapsIg')` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
                    <Link to="/about" className="absolute top-4 left-4 size-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <div className="absolute bottom-6 left-6">
                        <h1 className="text-white text-3xl font-extrabold tracking-tight">The Vision</h1>
                        <p className="text-primary font-bold text-sm tracking-widest uppercase">From the Founder</p>
                    </div>
                </div>

                <main className="p-6">
                    <div className="flex flex-col gap-8">
                        {/* Intro Quote */}
                        <section>
                            <div className="relative p-6 bg-primary/5 dark:bg-primary/10 rounded-2xl border-l-4 border-primary italic">
                                <span className="absolute -top-4 left-4 text-7xl text-primary/20 font-serif leading-none">“</span>
                                <p className="text-lg leading-relaxed dark:text-gray-200">
                                    Africa doesn't need more aid; it needs more innovation that scales. We built HealthFound to be the connective tissue for that progress.
                                </p>
                            </div>
                        </section>

                        {/* The Story / Journey */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight border-b-2 border-primary w-fit pb-1">The Genesis</h2>
                            <div className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                <p>
                                    My journey began in a rural clinic in Northern Nigeria, where I saw first-hand the devastating gap between life-saving medical knowledge and the communities that needed it most.
                                </p>
                                <p>
                                    As a physician-turned-entrepreneur, I realized that the hurdle wasn't just infrastructure—it was information. Data was fragmented, investments were blind, and founders were isolated.
                                </p>
                            </div>
                        </section>

                        {/* Timeline / Milestones */}
                        <section>
                            <h2 className="text-2xl font-bold tracking-tight mb-6">Milestones</h2>
                            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/20">
                                {[
                                    { year: '2020', title: 'The Concept', desc: 'Launched as a weekly newsletter mapping healthcare startups in West Africa.' },
                                    { year: '2021', title: 'The Intelligence Hub', desc: 'Introduced premium market reports for institutional investors.' },
                                    { year: '2023', title: 'HealthFound 2.0', desc: 'Evolved into the full-scale diagnostic and intelligence ecosystem we are today.' },
                                ].map((milestone, idx) => (
                                    <div key={idx} className="relative pl-10">
                                        <div className="absolute left-0 top-1.5 size-6 rounded-full bg-background-dark dark:bg-white border-4 border-primary flex items-center justify-center"></div>
                                        <p className="text-primary font-bold text-xs mb-1">{milestone.year}</p>
                                        <h3 className="text-lg font-bold dark:text-white">{milestone.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-normal">{milestone.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Mission Statement */}
                        <section className="bg-background-dark text-white p-8 rounded-3xl text-center space-y-4 shadow-2xl">
                            <span className="material-symbols-outlined text-primary text-4xl">travel_explore</span>
                            <h2 className="text-xl font-bold uppercase tracking-widest">Our North Star</h2>
                            <p className="text-base leading-relaxed opacity-80">
                                To reduce healthcare inequity in Africa by providing the intelligence, capital, and community needed for disruptive innovations to thrive.
                            </p>
                        </section>
                    </div>
                </main>

                <footer className="p-8 border-t border-gray-100 dark:border-gray-800 text-center space-y-4">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Connect with the founder</p>
                    <div className="flex justify-center gap-6">
                        <button className="flex items-center gap-2 text-[#0077b5] font-bold">
                            <span className="material-symbols-outlined">contact_page</span>
                            LinkedIn
                        </button>
                        <button className="flex items-center gap-2 text-[#1DA1F2] font-bold">
                            <span className="material-symbols-outlined">chat</span>
                            X (Twitter)
                        </button>
                    </div>
                    <div className="h-8"></div>
                </footer>
            </div>
        </div>
    );
};

export default Founder;
