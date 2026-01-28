import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white min-h-screen transition-colors duration-200">
            <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-[#112116] shadow-xl overflow-x-hidden">
                {/* Top Navigation Bar */}
                <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#112116]/80 backdrop-blur-md border-b border-[#dce5df] dark:border-white/10">
                    <div className="flex items-center p-4 justify-between">
                        <Link to="/report-preview" className="text-[#111813] dark:text-white flex size-12 shrink-0 items-center cursor-pointer transition-transform hover:scale-110">
                            <span className="material-symbols-outlined">arrow_back_ios</span>
                        </Link>
                        <h2 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12 font-display">Checkout</h2>
                    </div>
                </header>

                <main className="flex-1 pb-44">
                    {/* Order Summary Section */}
                    <section className="mt-2">
                        <h3 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 font-display">Order Summary</h3>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-xl bg-gray-50 dark:bg-[#1a2e20] p-4 shadow-sm border border-[#dce5df] dark:border-white/5">
                                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                    <p className="text-primary font-black text-xl leading-normal">$299.00</p>
                                    <p className="text-[#111813] dark:text-white text-base font-bold leading-tight">African Healthcare Innovation Report 2024</p>
                                    <p className="text-[#63886f] dark:text-[#a3bba8] text-[10px] font-bold uppercase tracking-widest mt-1">Premium Market Intelligence</p>
                                </div>
                                <div className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0 shadow-sm" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbi-MSrOL9jk_RnrTy4ZQKVgzSbTsd5cRwKn6aoPiWELEGMnWD0ufajL86rXee3b_qwF-Pm_ZO4w2wcilOdQlaBbY0-1HAB4IaxbfJwB02NQOl1kRDVzzFpKAJ6Mzg_ic_lySSa1zcLso4AcSpUETYXamtij-N1CPbbRu3c56f83DeVfB53yJmfl0a44_GTeNwGHHGgh4h1L1xtxIgeCw9rmpiprNvObh0oeMzh74-SFg4P8ezfbldH-Qrhdo7zL926MwCfLsaKQ')` }}></div>
                            </div>
                        </div>
                    </section>

                    {/* Payment Details Section */}
                    <form className="mt-4">
                        <div className="flex items-center justify-between px-4">
                            <h3 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] py-2 font-display">Payment Details</h3>
                            <div className="flex items-center gap-1.5 opacity-50">
                                <span className="material-symbols-outlined !text-sm">lock</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">Secure</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 px-4 py-3">
                            {/* Cardholder Name */}
                            <label className="flex flex-col w-full">
                                <p className="text-[#111813] dark:text-white text-xs font-bold uppercase tracking-widest pb-2 opacity-70">Cardholder Name</p>
                                <input className="form-input flex w-full rounded-xl text-[#111813] focus:outline-0 focus:ring-2 focus:ring-primary/40 border border-[#dce5df] dark:border-white/10 bg-white dark:bg-[#1a2e20] dark:text-white h-14 placeholder:text-[#63886f]/40 p-[15px] text-base font-bold" placeholder="Name as it appears on card" type="text" />
                            </label>

                            {/* Card Number */}
                            <label className="flex flex-col w-full relative">
                                <p className="text-[#111813] dark:text-white text-xs font-bold uppercase tracking-widest pb-2 opacity-70">Card Number</p>
                                <div className="relative">
                                    <input className="form-input flex w-full rounded-xl text-[#111813] focus:outline-0 focus:ring-2 focus:ring-primary/40 border border-[#dce5df] dark:border-white/10 bg-white dark:bg-[#1a2e20] dark:text-white h-14 placeholder:text-[#63886f]/40 p-[15px] pr-12 text-base font-bold tracking-[0.1em]" inputMode="numeric" placeholder="0000 0000 0000 0000" type="text" />
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#63886f]">credit_card</span>
                                </div>
                            </label>

                            {/* Expiry and CVV Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <label className="flex flex-col">
                                    <p className="text-[#111813] dark:text-white text-xs font-bold uppercase tracking-widest pb-2 opacity-70">Expiry Date</p>
                                    <input className="form-input flex w-full rounded-xl text-[#111813] focus:outline-0 focus:ring-2 focus:ring-primary/40 border border-[#dce5df] dark:border-white/10 bg-white dark:bg-[#1a2e20] dark:text-white h-14 placeholder:text-[#63886f]/40 p-[15px] text-base font-bold" inputMode="numeric" placeholder="MM / YY" type="text" />
                                </label>
                                <label className="flex flex-col">
                                    <div className="flex items-center gap-1 pb-2">
                                        <p className="text-[#111813] dark:text-white text-xs font-bold uppercase tracking-widest opacity-70">CVV</p>
                                        <span className="material-symbols-outlined !text-xs text-[#63886f]">help</span>
                                    </div>
                                    <input className="form-input flex w-full rounded-xl text-[#111813] focus:outline-0 focus:ring-2 focus:ring-primary/40 border border-[#dce5df] dark:border-white/10 bg-white dark:bg-[#1a2e20] dark:text-white h-14 placeholder:text-[#63886f]/40 p-[15px] text-base font-bold" inputMode="numeric" maxLength="4" placeholder="•••" type="password" />
                                </label>
                            </div>
                        </div>
                    </form>

                    {/* Trust Badges */}
                    <section className="mt-12 px-8 text-center">
                        <div className="flex justify-center items-center gap-8 opacity-40 grayscale dark:invert mb-6">
                            <span className="material-symbols-outlined !text-3xl">verified_user</span>
                            <span className="material-symbols-outlined !text-3xl">security</span>
                            <span className="material-symbols-outlined !text-3xl">lock</span>
                        </div>
                        <p className="text-[#63886f] dark:text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-[280px] mx-auto">
                            Your payment information is processed securely. We do not store full credit card details on our servers.
                        </p>
                    </section>
                </main>

                {/* Sticky Bottom Purchase */}
                <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#112116] border-t border-[#dce5df] dark:border-white/10 p-4 pb-8 max-w-[480px] mx-auto z-50">
                    <div className="flex justify-between items-center mb-5 px-1">
                        <span className="text-[#63886f] dark:text-[#a3bba8] font-bold text-xs uppercase tracking-widest">Total Amount</span>
                        <span className="text-[#111813] dark:text-white text-2xl font-black">$299.00</span>
                    </div>
                    <Link to="/success-purchase" className="w-full bg-primary hover:bg-opacity-90 text-[#112116] font-black text-sm uppercase tracking-[0.1em] h-16 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-transform active:scale-[0.98]">
                        Complete Purchase
                        <span className="material-symbols-outlined !text-xl">lock_open</span>
                    </Link>
                </div>

                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20 overflow-hidden">
                    <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
