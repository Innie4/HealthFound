import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/HealthF.jpeg';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        if (email && password) {
            localStorage.setItem('healthfound_user', JSON.stringify({ email }));
            navigate('/');
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            <div className="relative flex h-auto min-h-screen w-full max-w-[480px] mx-auto flex-col bg-white dark:bg-background-dark group/design-root overflow-x-hidden shadow-xl">
                {/* TopAppBar / Brand Logo Section */}
                <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between">

                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="HealthFound" className="h-16 w-auto rounded-md" />
                        <h2 className="text-[#111816] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">HealthFound</h2>
                    </Link>

                </div>
                <div className="h-2 bg-white dark:bg-background-dark"></div>

                {/* Headline & Welcome */}
                <div className="flex flex-col items-center">
                    <h1 className="text-[#111816] dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-2 pt-8">Welcome Back</h1>
                    <p className="text-[#61897c] dark:text-gray-400 text-base font-normal leading-normal pb-8 pt-1 px-8 text-center">Access Africa's healthcare innovation intelligence hub</p>
                </div>

                {/* Form Section */}
                <form className="flex flex-col gap-4 px-4" onSubmit={handleLogin}>
                    {/* Email Field */}
                    <div className="flex flex-col w-full">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#111816] dark:text-white text-sm font-semibold leading-normal pb-2">Email Address</p>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe6e2] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#61897c] p-[15px] text-base font-normal leading-normal"
                                placeholder="name@company.com"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col w-full">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#111816] dark:text-white text-sm font-semibold leading-normal pb-2">Password</p>
                            <div className="relative">
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe6e2] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#61897c] p-[15px] text-base font-normal leading-normal"
                                    placeholder="••••••••"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#61897c]">
                                    <span className="material-symbols-outlined">visibility</span>
                                </button>
                            </div>
                        </label>
                    </div>

                    {/* Forgot Password */}
                    <div className="flex justify-end px-1">
                        <a className="text-primary text-sm font-semibold hover:underline" href="#">Forgot Password?</a>
                    </div>

                    {/* Login Button */}
                    <div className="pt-4 pb-2">
                        <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-[#10221c] font-bold text-base h-14 rounded-xl transition-colors shadow-lg shadow-primary/20">
                            Log In
                        </button>
                    </div>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 px-4 py-8">
                    <div className="h-px bg-[#dbe6e2] dark:bg-gray-700 flex-1"></div>
                    <p className="text-[#61897c] text-xs font-bold uppercase tracking-widest">Or continue with</p>
                    <div className="h-px bg-[#dbe6e2] dark:bg-gray-700 flex-1"></div>
                </div>

                {/* Social Logins */}
                <div className="flex flex-col gap-3 px-4 pb-12">
                    <button className="flex items-center justify-center gap-3 w-full border border-[#dbe6e2] dark:border-gray-700 h-12 rounded-xl bg-white dark:bg-gray-800 text-[#111816] dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <span className="text-[#0077b5] material-symbols-outlined">contact_emergency</span>
                        Sign in with LinkedIn
                    </button>
                    <button className="flex items-center justify-center gap-3 w-full border border-[#dbe6e2] dark:border-gray-700 h-12 rounded-xl bg-white dark:bg-gray-800 text-[#111816] dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <span className="material-symbols-outlined text-red-500">google</span>
                        Sign in with Google
                    </button>
                </div>

                <div className="flex-grow"></div>

                {/* Footer CTA */}
                <div className="p-6 text-center">
                    <p className="text-[#61897c] dark:text-gray-400 text-sm">
                        Don't have an account?
                        <Link className="text-primary font-bold hover:underline ml-1" to="/register">Sign Up</Link>
                    </p>
                </div>

                {/* Subtle Background Accent */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
            </div>
        </div>
    );
};

export default Login;
