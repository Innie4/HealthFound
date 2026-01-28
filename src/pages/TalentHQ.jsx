import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const TalentHQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const featuredRoles = [
        {
            id: 1,
            title: "Product Lead",
            company: "Helium Health",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfyOvXLFxK4ZlTwp-wVOo_3M8g5jUKWtbD95pRDkyIY3S9mk9K1JD7yWvCYyGjBenp5h48OJU-mepFquYXCvU1zqWqIrMELGe9S7hHtvUKaSGYBdQiaa3xjIgefuq1EP3l9TVJKAkApN-tEQ_LJvJ1Vjwjct6cVyxKUJrrpin5J7BWJ6MT26MKFO5WgZfzK07ocDNNkuB_2EnvZcU6HHLzNhqS1ldjFHABQBtDcAJydCz3OG6upKFt0S0vDuacxTdDSlL5rxZsxA",
            tag: "Hot",
            vibe: "Lagos",
            type: "Remote"
        },
        {
            id: 2,
            title: "Ops Manager",
            company: "mPharma",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiKt7PI5_qQEq_oMn2WSlSQcp1WWtm5kTDvu791NtjlUG2Zq6Pai9CEqf9lPMP7r2QRg7fqwJr8cbn8qiIuVAeclskCMEVjS9jcHcibs5iSEsy7GMqaFzEtOnf1xi4JCir19ecZDKwVnC4j1mHbh6m-tfydXUdpfl3fzRbH2VR23l2I2PxoqmyoOqDau7yAHSp98XpxkNk-d6cZSkwqLFNrZ7qwPd5YL8BMFcAdPlIR5940p2pJ_zW876Axml2bFd1ardQzBriTg",
            tag: "New",
            vibe: "Accra",
            type: "On-site"
        },
        {
            id: 3,
            title: "Supply Chain Lead",
            company: "LifeBank",
            logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHiaAtKhISdG370C5CRoskLhYmhrpCQUCpQYud4xvfvt0MzqSCyJ26MD0U6ynRJL42ajka2zUANAqEU1uNd81mpdyB3r4oqwJTyez8VVzqD8zfo2J3CfZlinJMhTu_RL4RlvEA7IrPBPU22s3VzlTrxIHf6xKhiF_nTuthm4Mei1IWXWP06_xegBmr5TATcxNzkMSCIGhfzm3nAN-LECRVru-11Fx_3UheKzRV_bMyerQTfueHmhKtPaNGr8opkQw5MTel5eu32w",
            tag: "Urgent",
            vibe: "Nairobi",
            type: "Full-time"
        }
    ];

    const recentRoles = [
        {
            id: 4,
            title: "Health Informatics Specialist",
            company: "Digital Health Africa",
            location: "Kigali, Rwanda",
            salary: "$1.5k - $2.8k",
            type: "Full-time",
            workStyle: "Hybrid"
        },
        {
            id: 5,
            title: "Clinical Operations Lead",
            company: "SafeMotherhood Initiative",
            location: "Nairobi, Kenya",
            salary: "Competitive",
            type: "Contract",
            workStyle: "Remote"
        },
        {
            id: 6,
            title: "Health Data Analyst",
            company: "Bio-Analytics Lab",
            location: "Johannesburg, SA",
            salary: "$3.0k - $4.5k",
            type: "Full-time",
            workStyle: "Office"
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111816] dark:text-white">
            {/* Top App Bar */}
            <div className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#dbe6e2] dark:border-gray-800">
                <div className="flex items-center p-4 justify-between max-w-4xl mx-auto">
                    <div className="flex size-12 shrink-0 items-center justify-start">
                        <Link to="/" className="bg-talent rounded-2xl size-10 flex items-center justify-center shadow-lg shadow-talent/20 hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[#10221c] text-xl font-black">health_and_safety</span>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-[#111816] dark:text-white text-xl font-black leading-tight tracking-tight">TalentHQ</h2>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#61897c] font-black">By HealthFound Intelligence</p>
                    </div>
                    <div className="flex w-12 items-center justify-end">
                        <Link to="/profile" className="flex cursor-pointer items-center justify-center rounded-full h-10 w-10 bg-transparent text-[#111816] dark:text-white hover:bg-talent/10 transition-colors">
                            <span className="material-symbols-outlined">account_circle</span>
                        </Link>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto pb-32">
                {/* Search & Filter Section */}
                <div className="bg-white dark:bg-transparent px-6 py-10 border-b border-[#dbe6e2] dark:border-gray-800">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row gap-6"
                    >
                        <label className="flex flex-col flex-1">
                            <p className="text-[#111816] dark:text-gray-300 text-sm font-black uppercase tracking-widest pb-3 ml-1">Job Role</p>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-talent text-2xl group-focus-within:scale-110 transition-transform">search</span>
                                <input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full rounded-2xl text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-talent border border-[#dbe6e2] dark:border-gray-800 bg-gray-50 dark:bg-white/5 h-16 pl-14 placeholder:text-gray-400 text-base font-medium transition-all"
                                    placeholder="e.g. Health Informatics Specialist"
                                />
                            </div>
                        </label>
                        <label className="flex flex-col flex-1">
                            <p className="text-[#111816] dark:text-gray-300 text-sm font-black uppercase tracking-widest pb-3 ml-1">Location</p>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-talent text-2xl group-focus-within:scale-110 transition-transform">location_on</span>
                                <input
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full rounded-2xl text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-talent border border-[#dbe6e2] dark:border-gray-800 bg-gray-50 dark:bg-white/5 h-16 pl-14 placeholder:text-gray-400 text-base font-medium transition-all"
                                    placeholder="Lagos, Nairobi, Remote..."
                                />
                            </div>
                        </label>
                    </motion.div>
                </div>

                {/* Quick Actions / CTAs */}
                <div className="flex flex-wrap md:flex-nowrap justify-stretch bg-white dark:bg-transparent px-6 py-6 gap-4 border-b border-[#dbe6e2] dark:border-gray-800">
                    <Link to="/resumes" className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-[1.25rem] h-14 px-8 bg-talent text-[#111816] text-base font-black tracking-wide shadow-xl shadow-talent/20 hover:scale-[1.02] active:scale-95 transition-all">
                        <span className="material-symbols-outlined mr-3 text-2xl font-black">upload_file</span>
                        <span className="truncate">Upload CV / Resume</span>
                    </Link>
                    <Link to="/jobs/post" className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-[1.25rem] h-14 px-8 bg-white dark:bg-white/5 text-[#111816] dark:text-white text-base font-black tracking-wide border-2 border-talent/30 hover:border-talent transition-all shadow-sm">
                        <span className="material-symbols-outlined mr-3 text-2xl font-black">add_circle</span>
                        <span className="truncate">Post a Premium Job</span>
                    </Link>
                </div>

                {/* Featured Opportunities Section */}
                <div className="pt-12">
                    <div className="flex items-center justify-between px-6 pb-6">
                        <h2 className="text-[#111816] dark:text-white text-3xl font-black tracking-tight">Featured Roles</h2>
                        <button className="text-talent text-sm font-black uppercase tracking-widest hover:underline transition-all">View all</button>
                    </div>
                    <div className="flex overflow-x-auto hide-scrollbar gap-6 px-6 pb-8">
                        {featuredRoles.map((role) => (
                            <motion.div
                                key={role.id}
                                whileHover={{ y: -5 }}
                                className="flex-none w-72 bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-[#dbe6e2] dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="size-16 bg-white rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden p-3 shadow-inner">
                                        <img
                                            alt={`${role.company} logo`}
                                            className="w-full h-full object-contain"
                                            src={role.logo}
                                        />
                                    </div>
                                    {role.tag && (
                                        <span className="bg-talent/20 text-talent text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-talent/30">
                                            {role.tag}
                                        </span>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[#111816] dark:text-white text-xl font-black leading-tight">{role.title}</p>
                                    <p className="text-[#61897c] text-base font-bold mb-6 tracking-tight">{role.company}</p>
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        <span className="text-[10px] font-black px-3 py-2 bg-gray-50 dark:bg-white/10 text-gray-400 dark:text-white/40 rounded-xl uppercase tracking-widest">{role.vibe}</span>
                                        <span className="text-[10px] font-black px-3 py-2 bg-talent/10 text-talent rounded-xl uppercase tracking-widest">{role.type}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Recent Opportunities List */}
                <div className="px-6 pt-12">
                    <h2 className="text-[#111816] dark:text-white text-3xl font-black tracking-tight pb-8">Recent Opportunities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {recentRoles.map((role, idx) => (
                            <motion.div
                                key={role.id}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-[#dbe6e2] dark:border-gray-800 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-xl hover:border-talent/40 transition-all cursor-pointer"
                            >
                                <div className="size-16 bg-talent/10 rounded-2xl flex items-center justify-center shrink-0 border border-talent/20 shadow-inner group-hover:scale-105 transition-transform">
                                    <span className="material-symbols-outlined text-talent text-3xl">medical_services</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-[#111816] dark:text-white text-xl font-black leading-tight group-hover:text-talent transition-colors">{role.title}</h3>
                                        <button className="text-gray-300 hover:text-talent transition-colors">
                                            <span className="material-symbols-outlined text-2xl">bookmark</span>
                                        </button>
                                    </div>
                                    <p className="text-[#61897c] text-base font-bold tracking-tight mb-4">{role.company}</p>
                                    <div className="flex flex-wrap items-center gap-6 text-[#61897c] dark:text-white/40 text-xs font-bold uppercase tracking-widest">
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-base">location_on</span>
                                            <span>{role.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-base">payments</span>
                                            <span className="text-talent font-black">{role.salary}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-6">
                                        <span className="text-[10px] font-black px-4 py-2 bg-talent text-[#10221c] rounded-full uppercase tracking-[0.2em] shadow-lg shadow-talent/10">{role.type}</span>
                                        <span className="text-[10px] font-black px-4 py-2 bg-gray-50 dark:bg-white/10 text-gray-500 dark:text-white/60 rounded-full uppercase tracking-[0.2em]">{role.workStyle}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end sm:justify-center">
                                    <Link
                                        to={`/jobs/apply/${role.id}`}
                                        className="bg-talent/20 hover:bg-talent text-talent hover:text-[#10221c] p-3 rounded-2xl transition-all group-hover:rotate-45"
                                    >
                                        <span className="material-symbols-outlined font-black">arrow_outward</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <button className="w-full mt-12 py-5 text-center text-xs font-black uppercase tracking-[0.5em] text-[#61897c] dark:text-white/20 hover:text-talent transition-colors">
                        Load more healthcare opportunities
                    </button>
                </div>
            </main>

            {/* Bottom Navigation Bar (iOS Style) */}
            <BottomNav />
        </div>
    );
};

export default TalentHQ;
