import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const handleNext = () => {
        if (step < 2) {
            setStep(step + 1);
        } else {
            navigate('/');
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center items-center font-display">
            <div className="relative flex h-auto min-h-screen w-full max-w-[480px] flex-col bg-white dark:bg-[#111816] overflow-x-hidden shadow-xl">
                {/* TopAppBar */}
                <div className="flex items-center bg-white dark:bg-[#111811] p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
                    <div className="text-[#111811] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </div>
                    <h2 className="text-[#111811] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Onboarding</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button onClick={() => navigate('/')} className="text-primary text-sm font-bold">Skip</button>
                    </div>
                </div>

                {step === 1 ? (
                    <div className="flex flex-col flex-1">
                        <div className="px-4 pt-6 pb-2">
                            <h1 className="text-[#111811] dark:text-white tracking-light text-[32px] font-extrabold leading-tight">What interests you most?</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal pt-1">Personalize your intelligence feed by selecting your primary areas of focus.</p>
                        </div>

                        <div className="flex flex-col gap-3 p-4">
                            {[
                                { id: 'funding', title: 'Startups & Funding', desc: 'VC deals, seed rounds, and equity trends.', icon: 'payments' },
                                { id: 'policy', title: 'Healthcare Policy', desc: 'Government regulations and regional mandates.', icon: 'gavel' },
                                { id: 'tech', title: 'Medical Technology', desc: 'AI diagnostics, wearables, and e-health.', icon: 'biotech' },
                                { id: 'talent', title: 'Talent & Hiring', desc: 'New roles and workforce development.', icon: 'groups' },
                            ].map((interest) => (
                                <label key={interest.id} className="group relative flex items-center justify-between p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 cursor-pointer hover:border-primary transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined">{interest.icon}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[#111811] dark:text-white text-base font-bold leading-tight">{interest.title}</p>
                                            <p className="text-gray-500 dark:text-gray-400 text-xs leading-normal">{interest.desc}</p>
                                        </div>
                                    </div>
                                    <input type="checkbox" className="size-6 rounded-full border-2 border-gray-200 text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700" />
                                </label>
                            ))}
                        </div>

                        <div className="mt-auto p-4 border-t border-gray-50 dark:border-gray-800">
                            <button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90 text-[#10221c] font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                                Next Step
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col flex-1">
                        <div className="px-4 pt-6 pb-2">
                            <h1 className="text-[#111811] dark:text-white tracking-light text-[32px] font-extrabold leading-tight">Regional Alerts</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal pt-1">Select the regions where you want to receive real-time intelligence alerts.</p>
                        </div>

                        <div className="flex flex-col gap-4 p-4">
                            {[
                                { id: 'west', title: 'West Africa', countries: 'Nigeria, Ghana, Senegal, etc.' },
                                { id: 'east', title: 'East Africa', countries: 'Kenya, Rwanda, Ethiopia, etc.' },
                                { id: 'south', title: 'Southern Africa', countries: 'South Africa, Botswana, etc.' },
                                { id: 'north', title: 'North Africa', countries: 'Egypt, Morocco, Tunisia, etc.' },
                            ].map((region) => (
                                <div key={region.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                                    <div className="flex flex-col">
                                        <p className="text-[#111811] dark:text-white text-sm font-bold uppercase tracking-wider">{region.title}</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs">{region.countries}</p>
                                    </div>
                                    <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-6 h-6 bg-white dark:bg-gray-400 rounded-full border border-gray-300 peer-checked:translate-x-6 peer-checked:bg-primary peer-checked:border-primary transition-all"></div>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-8 p-5 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">notifications_active</span>
                                    <p className="text-[#111811] dark:text-white text-sm font-bold">Smart Notification Frequency</p>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-2">
                                    <button className="py-2 px-1 text-[10px] font-bold border-2 border-primary bg-primary/10 rounded-lg text-primary uppercase">Real-time</button>
                                    <button className="py-2 px-1 text-[10px] font-bold border border-gray-200 dark:border-gray-800 rounded-lg text-gray-500 uppercase">Daily</button>
                                    <button className="py-2 px-1 text-[10px] font-bold border border-gray-200 dark:border-gray-800 rounded-lg text-gray-500 uppercase">Weekly</button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto p-4 border-t border-gray-50 dark:border-gray-800">
                            <button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90 text-[#10221c] font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Onboarding;
