import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const TalentApply = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        coverLetter: '',
        interest: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            navigate('/success');
        }, 1000);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111816] dark:text-white">
            <div className="relative flex h-auto min-h-screen w-full max-w-2xl mx-auto flex-col bg-white dark:bg-background-dark overflow-x-hidden shadow-2xl">
                {/* TopAppBar */}
                <div className="flex items-center bg-white/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
                    <Link to="/jobs" className="text-[#111816] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors pl-2">
                        <span className="material-symbols-outlined font-black">arrow_back</span>
                    </Link>
                    <h2 className="text-[#111816] dark:text-white text-lg font-black leading-tight tracking-[-0.015em] flex-1 text-center">TalentHub Application</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button className="flex items-center justify-center rounded-full size-10 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined">share</span>
                        </button>
                    </div>
                </div>

                <main className="flex-1 pb-32">
                    {/* ProgressBar */}
                    <div className="flex flex-col gap-3 p-6">
                        <div className="flex gap-6 justify-between items-end">
                            <p className="text-[#111816] dark:text-white text-lg font-black leading-none">Application Details</p>
                            <p className="text-[#111816]/40 dark:text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Step 3 of 3</p>
                        </div>
                        <div className="h-2 rounded-full bg-[#dbe6e2] dark:bg-gray-800 overflow-hidden shadow-inner">
                            <motion.div
                                initial={{ width: '66%' }}
                                animate={{ width: '100%' }}
                                className="h-full rounded-full bg-talent shadow-[0_0_15px_rgba(43,238,173,0.5)]"
                            ></motion.div>
                        </div>
                    </div>

                    {/* Headline & Title */}
                    <div className="px-6 pt-6">
                        <motion.h2
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[#111816] dark:text-white tracking-tight text-[32px] md:text-[40px] font-black leading-tight"
                        >
                            Senior Product Manager
                        </motion.h2>
                        <p className="text-talent text-xl font-black leading-tight tracking-tight mt-2 italic shadow-sm w-fit">HealthFound Intelligence</p>
                    </div>

                    {/* Form Content */}
                    <form className="flex flex-col gap-8 p-6 md:p-8 mt-4" onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            {/* Personal Info Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#111816] dark:text-white text-sm font-black uppercase tracking-widest ml-1">Full Name</p>
                                    <input
                                        required
                                        className="w-full rounded-2xl text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-talent border border-[#dbe6e2] dark:border-gray-800 bg-gray-50 dark:bg-white/5 h-16 p-5 placeholder:text-gray-400 text-base font-medium transition-all"
                                        placeholder="Jane Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#111816] dark:text-white text-sm font-black uppercase tracking-widest ml-1">Email Address</p>
                                    <input
                                        required
                                        className="w-full rounded-2xl text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-talent border border-[#dbe6e2] dark:border-gray-800 bg-gray-50 dark:bg-white/5 h-16 p-5 placeholder:text-gray-400 text-base font-medium transition-all"
                                        placeholder="jane@example.com"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#111816] dark:text-white text-sm font-black uppercase tracking-widest ml-1">Phone Number</p>
                                    <input
                                        required
                                        className="w-full rounded-2xl text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-talent border border-[#dbe6e2] dark:border-gray-800 bg-gray-50 dark:bg-white/5 h-16 p-5 placeholder:text-gray-400 text-base font-medium transition-all"
                                        placeholder="+234 800 000 0000"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#111816] dark:text-white text-sm font-black uppercase tracking-widest ml-1">LinkedIn URL</p>
                                    <input
                                        className="w-full rounded-2xl text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-talent border border-[#dbe6e2] dark:border-gray-800 bg-gray-50 dark:bg-white/5 h-16 p-5 placeholder:text-gray-400 text-base font-medium transition-all"
                                        placeholder="linkedin.com/in/janedoe"
                                        value={formData.linkedin}
                                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Resume Upload Zone */}
                            <div className="space-y-3 pt-4">
                                <p className="text-[#111816] dark:text-white text-sm font-black uppercase tracking-widest ml-1">Resume / CV</p>
                                <div className="group relative flex flex-col items-center justify-center border-4 border-dashed border-talent/20 hover:border-talent/50 bg-talent/5 rounded-[2.5rem] p-12 gap-4 cursor-pointer transition-all hover:bg-talent/10 active:scale-[0.99] shadow-inner">
                                    <div className="size-20 rounded-3xl bg-talent/20 flex items-center justify-center text-talent group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl font-black">cloud_upload</span>
                                    </div>
                                    <div className="text-center space-y-1">
                                        <p className="text-[#111816] dark:text-white font-black text-lg">Tap to upload your credentials</p>
                                        <p className="text-[#111816]/40 dark:text-white/40 text-xs font-bold uppercase tracking-widest">PDF, DOCX up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                            {/* Narrative Fields */}
                            <div className="space-y-6 pt-4">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#111816] dark:text-white text-sm font-black uppercase tracking-widest ml-1">Cover Letter Summary</p>
                                    <textarea
                                        className="w-full rounded-2xl text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-talent border border-[#dbe6e2] dark:border-gray-800 bg-gray-50 dark:bg-white/5 h-48 p-5 placeholder:text-gray-400 text-base font-medium resize-none transition-all"
                                        placeholder="Tell us why you are a great fit for HealthFound..."
                                        value={formData.coverLetter}
                                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                    ></textarea>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[#111816] dark:text-white text-sm font-black uppercase tracking-widest ml-1">Why this impact role?</p>
                                    <textarea
                                        className="w-full rounded-2xl text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-talent border border-[#dbe6e2] dark:border-gray-800 bg-gray-50 dark:bg-white/5 h-32 p-5 placeholder:text-gray-400 text-base font-medium resize-none transition-all"
                                        placeholder="Share your motivation to transform African health..."
                                        value={formData.interest}
                                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button Section */}
                        <div className="pt-10">
                            <button
                                type="submit"
                                className="group flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-[1.5rem] h-20 bg-talent text-[#10221c] gap-3 text-xl font-black leading-none tracking-wide shadow-2xl shadow-talent/30 active:scale-[0.98] transition-all hover:brightness-110"
                            >
                                <span className="group-hover:translate-x-1 transition-transform">Submit Ecosystem Application</span>
                                <span className="material-symbols-outlined font-black">send</span>
                            </button>
                            <p className="text-center text-[#111816]/30 dark:text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mt-8 px-8 leading-loose">
                                By submitting, you agree to TalentHQ's Terms of Impact and Privacy Protocol.
                            </p>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default TalentApply;
