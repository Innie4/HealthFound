import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
    const location = useLocation();
    const path = location.pathname;

    const items = [
        { icon: 'home', label: 'Home', to: '/' },
        { icon: 'newspaper', label: 'News', to: '/news' },
        { icon: 'bookmark', label: 'Saved', to: '/saved' },
        { icon: 'person', label: 'Profile', to: '/profile' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 flex justify-around items-center px-6 pb-8 z-50 transition-all sm:hidden">
            {items.map((item) => (
                <Link
                    key={item.to}
                    to={item.to}
                    className={`flex flex-col items-center gap-1 transition-all ${path === item.to || (item.to !== '/' && path.startsWith(item.to))
                            ? 'text-primary'
                            : 'text-gray-400'
                        }`}
                >
                    <span className={`material-symbols-outlined ${path === item.to ? 'font-black' : ''}`}>
                        {item.icon}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                </Link>
            ))}
        </nav>
    );
};

export default BottomNav;
