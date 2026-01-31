import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        role: '',
        password: '',
        agreeTerms: false,
        newsletter: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Simulate registration
        if (formData.email && formData.password && formData.fullName && formData.agreeTerms) {
            localStorage.setItem('healthfound_user', JSON.stringify({ email: formData.email, name: formData.fullName }));
            navigate('/');
        } else {
            alert("Please fill all fields and agree to terms.");
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center items-start font-display">
            <div className="relative flex h-auto min-h-screen w-full max-w-[480px] flex-col bg-white dark:bg-[#111816] overflow-x-hidden shadow-xl">
                {/* TopAppBar */}
                <div className="flex items-center bg-white dark:bg-[#111816] p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
                    <Link to="/login" className="text-[#111816] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer transition-transform hover:scale-110">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </Link>
                    <h2 className="text-[#111816] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">New Account</h2>
                </div>

                <div className="flex flex-col flex-1 pb-10">
                    {/* HeadlineText */}
                    <div className="px-4">
                        <h1 className="text-[#111816] dark:text-white tracking-light text-[32px] font-bold leading-tight pb-3 pt-6">Join the HealthFound Community</h1>
                        <p className="text-[#111816] dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1">Access Africa's healthcare innovation intelligence hub.</p>
                    </div>

                    <div className="h-4"></div>

                    {/* Form Section */}
                    <form className="flex flex-col gap-1" onSubmit={handleRegister}>
                        {/* Full Name Field */}
                        <div className="flex flex-wrap items-end gap-4 px-4 py-2">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#111816] dark:text-white text-base font-medium leading-normal pb-2">Full Name</p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe6e2] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 placeholder:text-[#61897c] dark:placeholder:text-gray-500 p-[15px] text-base font-normal"
                                    placeholder="e.g., Jane Doe"
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        {/* Email Address Field */}
                        <div className="flex flex-wrap items-end gap-4 px-4 py-2">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#111816] dark:text-white text-base font-medium leading-normal pb-2">Email Address</p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe6e2] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 placeholder:text-[#61897c] dark:placeholder:text-gray-500 p-[15px] text-base font-normal"
                                    placeholder="name@example.com"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        {/* Professional Role Dropdown */}
                        <div className="flex flex-wrap items-end gap-4 px-4 py-2">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#111816] dark:text-white text-base font-medium leading-normal pb-2">Professional Role</p>
                                <div className="relative">
                                    <select
                                        className="form-select appearance-none flex w-full min-w-0 flex-1 rounded-lg text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe6e2] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 p-[15px] text-base font-normal pr-10"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option disabled value="">Select your role</option>
                                        <option value="provider">Healthcare Provider</option>
                                        <option value="founder">Startup Founder</option>
                                        <option value="investor">Investor</option>
                                        <option value="researcher">Researcher</option>
                                        <option value="policymaker">Policy Maker</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                            </label>
                        </div>

                        {/* Password Field */}
                        <div className="flex flex-wrap items-end gap-4 px-4 py-2">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#111816] dark:text-white text-base font-medium leading-normal pb-2">Create Password</p>
                                <div className="relative">
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#111816] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe6e2] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 placeholder:text-[#61897c] dark:placeholder:text-gray-500 p-[15px] text-base font-normal"
                                        placeholder="Minimum 8 characters"
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        minLength={8}
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 cursor-pointer">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </div>
                                </div>
                            </label>
                        </div>

                        {/* Checkboxes */}
                        <div className="px-4 py-4 flex flex-col gap-4">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    className="mt-1 size-5 rounded border-[#dbe6e2] text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 transition-colors"
                                    type="checkbox"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="text-[#111816] dark:text-gray-300 text-sm font-normal leading-tight">
                                    I agree to the <span className="text-primary font-semibold underline">Terms</span> and <span className="text-primary font-semibold underline">Privacy Policy</span>
                                </span>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    className="mt-1 size-5 rounded border-[#dbe6e2] text-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 transition-colors"
                                    type="checkbox"
                                    name="newsletter"
                                    checked={formData.newsletter}
                                    onChange={handleChange}
                                />
                                <span className="text-[#111816] dark:text-gray-300 text-sm font-normal leading-tight">
                                    Subscribe to the Startup Weekly newsletter
                                </span>
                            </label>
                        </div>

                        {/* Primary Action Button */}
                        <div className="px-4 py-4">
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-opacity-90 text-[#10221c] font-bold text-lg py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <span>Create Account</span>
                            </button>
                        </div>
                    </form>

                    {/* Footer Navigation */}
                    <div className="px-4 pt-6 pb-12 text-center">
                        <p className="text-[#111816] dark:text-gray-400 text-sm">
                            Already have an account?
                            <Link className="text-primary font-bold hover:underline ml-1" to="/login">Log In</Link>
                        </p>
                    </div>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute bottom-0 right-0 -z-10 w-48 h-48 opacity-10 blur-3xl pointer-events-none">
                    <div className="w-full h-full bg-primary rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Register;
