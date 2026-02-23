import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/shared/logo.png';
import { NAV_ROUTES } from '../../app/router';
import { X } from 'lucide-react';

interface NavbarProps {
    transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
    const [isOpened, setIsOpened] = useState(false);

    const HamburgerColor = transparent ? 'bg-white' : 'bg-primary';

    const toggleDrawer = () => setIsOpened(!isOpened);

    return (
        <>
            <nav className={`w-full fixed top-0 left-0 ${transparent ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md'} px-4 md:px-10 lg:px-20 md:h-28 h-20 flex items-center justify-between relative z-[900] transition-all duration-300`}>

                <div className="flex items-center gap-8">
                    {/* Hamburger Menu Icon */}
                    <button
                        onClick={toggleDrawer}
                        className="flex flex-col gap-1.5 cursor-pointer group"
                        aria-label="Open Menu"
                    >
                        <span className={`w-8 group-hover:w-12  h-[3px] ${HamburgerColor} rounded-full transition-all`}></span>
                        <span className={`w-8  h-[3px] ${HamburgerColor} rounded-full transition-all `}></span>
                        <span className={`w-8 group-hover:w-12 h-[3px] ${HamburgerColor} rounded-full transition-all`}></span>
                    </button>
                </div>

                {/* Centered Logo in Orange Container */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 md:h-28 h-20 w-32 md:w-56 bg-primary rounded-b-[35px] flex items-center justify-center shadow-[0_10px_30px_rgba(235,105,37,0.3)] transition-all hover:h-32 group">
                    <img
                        src={logo}
                        alt="Guardian Logo"
                        className="w-[100px] md:w-[180px] object-contain mb-2 px-4 transition-transform group-hover:scale-110"
                    />
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">

                    <button className=" border border-white/50 bg-primary hover:bg-[#e0661d] text-white px-8 py-2.5 rounded-full font-black text-sm md:text-base transition-all shadow-lg">
                        Login
                    </button>
                </div>
            </nav>

            {/* Navigation Drawer Menu */}
            {typeof document !== 'undefined' && createPortal(
                <div
                    className={`fixed inset-0 z-[1000] transition-all duration-500 ease-in-out ${isOpened ? 'visible opacity-100' : 'invisible opacity-0'}`}
                >
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
                        onClick={toggleDrawer}
                    />

                    {/* Drawer Content */}
                    <div
                        className={`absolute top-0 left-0 h-full w-full md:w-[400px] bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-out border-r border-white/20 flex flex-col ${isOpened ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between p-8 border-b border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="w-32 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                                    <img src={logo} alt="Logo" className="w-28 h-6 object-contain" />
                                </div>
                                {/* <span className="font-black text-xl tracking-tight text-gray-900">MENU</span> */}
                            </div>
                            <button
                                onClick={toggleDrawer}
                                className="p-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all group shadow-sm"
                                aria-label="Close Menu"
                            >
                                <X size={24} className="transition-transform group-hover:rotate-90" />
                            </button>
                        </div>

                        {/* Navigation Items */}
                        <div className="flex-grow overflow-y-auto px-6 pt-2 pb-10 no-scrollbar">
                            <div className="grid gap-3">
                                {NAV_ROUTES.map((route) => (
                                    <NavLink
                                        key={route.path}
                                        to={route.path}
                                        onClick={toggleDrawer}
                                        className={({ isActive }) => `
                                            flex items-center justify-between p-2 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-300 group
                                            ${isActive
                                                ? 'bg-primary text-white shadow-lg shadow-orange-500/20'
                                                : 'hover:bg-orange-50 text-gray-700 hover:text-primary'
                                            }
                                        `}
                                    >
                                        <span>{route.label}</span>
                                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isOpened ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                                            <div className="w-full h-full rounded-full bg-current animate-pulse" />
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default Navbar;
