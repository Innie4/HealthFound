import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DesktopNav = () => {
    const location = useLocation();
    const path = location.pathname;

    const items = [
        { label: 'Home', to: '/' },
        { label: 'News', to: '/news' },
        { label: 'Pricing', to: '/pricing' },
        { label: 'Saved', to: '/saved' },
    ];

    return (
        <nav className="hidden md:flex items-center gap-6">
            {items.map((item) => (
                <Link
                    key={item.to}
                    to={item.to}
                    className={`text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors ${path === item.to || (item.to !== '/' && path.startsWith(item.to))
                        ? 'text-primary'
                        : 'text-[#111816] dark:text-gray-300'
                        }`}
                >
                    {item.label}
                </Link>
            ))}
            <Link to="/profile" className="flex items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-primary/10 hover:text-primary text-[#111816] dark:text-white transition-all">
                <span className="material-symbols-outlined text-xl">person</span>
            </Link>
        </nav>
    );
};

export default DesktopNav;
