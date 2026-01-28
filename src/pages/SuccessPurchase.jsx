import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPurchase = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white font-display">
            <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-white dark:bg-background-dark overflow-x-hidden shadow-2xl">
                {/* TopAppBar */}
                <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-white/5">
                    <h2 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 font-display">Order Confirmation</h2>
                    <Link to="/" className="text-primary text-base font-black leading-normal tracking-widest uppercase shrink-0 font-display">Done</Link>
                </div>

                <main className="flex-1 pb-10">
                    {/* Success Visual */}
                    <div className="flex flex-col items-center pt-10 pb-6 px-4">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse">
                                <span className="material-symbols-outlined text-primary !text-6xl font-black">verified</span>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-white dark:bg-background-dark p-1 rounded-full shadow-lg">
                                <div className="bg-primary size-6 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined !text-[12px] text-[#112116] font-black">star</span>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-[#111813] dark:text-white tracking-tight text-3xl font-black leading-tight text-center font-display">Purchase Successful!</h1>
                    </div>

                    {/* Featured info card */}
                    <div className="px-4 py-2">
                        <div className="flex flex-col items-center gap-6 bg-gray-50 dark:bg-white/5 rounded-3xl p-6 border border-primary/10 shadow-sm">
                            <div className="relative aspect-video rounded-2xl w-full overflow-hidden shadow-2xl group cursor-pointer" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAXrPKiyunX0mwiktooJGlBFKpw1ctz_o2ivyZkii4J5EIBakcCKd3wzFDWL6KrZTlLgIrEyHy9Jdij0qbbnHdZZTQovcr1f2oedKV3Fvg7Qd98mzswbyd-JtIrhFLqY8ph_6EzdVMmYPoyOV4b0YZb29LketPXLAuLFitTEX0N18TwLoeQnkaZvpZmTwcARXJoQ_lC11lDva0aRFEdkkhNDGsjdyHrgTuQIbp6JG58xyVVRwwUrS26-rBRIDSXfkMuvIertzufQ')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all"></div>
                            </div>
                            <p className="text-[#111813] dark:text-gray-300 text-sm font-bold leading-relaxed text-center font-display">
                                Your report <span className="text-primary">'African Healthcare Trends 2024'</span> is processed and ready for your intelligence hub.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4 px-4 py-8">
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-5 bg-primary text-[#111813] text-base font-black leading-normal tracking-widest uppercase w-full shadow-xl shadow-primary/20 active:scale-95 transition-all">
                            <span className="material-symbols-outlined mr-3 !text-2xl">download</span>
                            Download (PDF)
                        </button>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-5 bg-white dark:bg-white/10 border-2 border-primary/30 text-[#111813] dark:text-white text-base font-black leading-normal tracking-widest uppercase w-full active:scale-95 transition-all">
                            <span className="material-symbols-outlined mr-3 text-primary !text-2xl">mail</span>
                            Email a Copy
                        </button>
                    </div>

                    {/* Receipt Summary */}
                    <div className="px-4">
                        <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-3 mb-6">
                            <h3 className="text-[#111813] dark:text-white text-lg font-black leading-tight tracking-widest uppercase font-display">Receipt</h3>
                            <span className="material-symbols-outlined text-gray-400 text-xl cursor-pointer hover:text-primary transition-colors">ios_share</span>
                        </div>
                        <div className="space-y-4 bg-gray-50 dark:bg-white/5 p-6 rounded-3xl">
                            {[
                                { label: 'Order ID', val: '#HF-88291' },
                                { label: 'Date', val: 'Oct 24, 2023' },
                                { label: 'Payment Method', val: 'Visa •••• 4242' },
                            ].map((item, id) => (
                                <div key={id} className="flex justify-between items-center">
                                    <span className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest leading-none">{item.label}</span>
                                    <span className="text-[#111813] dark:text-white text-sm font-black">{item.val}</span>
                                </div>
                            ))}
                            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
                                <span className="text-[#111813] dark:text-white font-black uppercase tracking-[0.2em] text-xs">Total Amount</span>
                                <span className="text-primary text-2xl font-black">$149.00</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SuccessPurchase;
