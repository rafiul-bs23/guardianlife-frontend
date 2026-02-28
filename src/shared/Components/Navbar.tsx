import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';

import { X, ChevronDown } from 'lucide-react';
import { MENU_DATA } from '../constants/menuData';
import type { MenuItem } from '../types/menu';

interface NavbarProps {
    transparent?: boolean;
}

const TEXT_SIZES = {
    NAV_ITEM: 'text-[14px]',
    LOGIN_BTN: 'text-sm md:text-base',
    DRAWER_CLOSE: 'text-lg', // Used in the close button if needed, otherwise for future-proofing
};

const GAPS = {
    NAV_ITEM_CONTAINER: 'gap-1', // Reduced from gap-2
    NAV_ITEM_DEPTH_MARGIN: 'mt-1',
    DRAWER_HEADER: 'gap-2',
    NAVBAR_LEFT_ITEMS: 'gap-8',
    NAVBAR_RIGHT_ACTIONS: 'gap-4',
};

const NavItem: React.FC<{
    item: MenuItem;
    depth?: number;
    onClose: () => void;
}> = ({ item, depth = 0, onClose }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();
    const hasChildren = item.children && item.children.length > 0;
    const isActive = item.path ? location.pathname === item.path : false;

    const toggleExpand = (e: React.MouseEvent) => {
        if (hasChildren) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    const content = (
        <div className="flex items-center justify-between w-full">
            <span>{item.label}</span>
            {hasChildren && (
                <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={14} />
                </div>
            )}
        </div>
    );

    const baseClasses = `
        flex items-center justify-between p-2.5 rounded-xl ${TEXT_SIZES.NAV_ITEM} font-bold uppercase tracking-wider transition-all duration-300 group
        ${isActive
            ? 'bg-primary text-white shadow-lg shadow-orange-500/20'
            : 'hover:bg-orange-50 text-gray-700 hover:text-primary'
        }
    `;

    const paddingLeft = depth > 0 ? { paddingLeft: `${depth * 1.5}rem` } : {};

    return (
        <div className="w-full">
            {item.path ? (
                <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) => `
                        ${baseClasses}
                        ${isActive ? 'bg-primary text-white shadow-lg shadow-orange-500/20' : ''}
                    `}
                    style={paddingLeft}
                >
                    {content}
                </NavLink>
            ) : (
                <button
                    onClick={toggleExpand}
                    className={`${baseClasses} w-full text-left`}
                    style={paddingLeft}
                >
                    {content}
                </button>
            )}

            {hasChildren && (
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? `max-h-[1000px] opacity-100 ${GAPS.NAV_ITEM_DEPTH_MARGIN}` : 'max-h-0 opacity-0'}`}
                >
                    <div className={`flex flex-col ${GAPS.NAV_ITEM_CONTAINER} border-l-2 border-orange-100 ml-4`}>
                        {item.children?.map((child, index) => (
                            <NavItem
                                key={`${child.label}-${index}`}
                                item={child}
                                depth={depth + 1}
                                onClose={onClose}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
    const [isOpened, setIsOpened] = useState(false);

    const HamburgerColor = transparent ? 'bg-white' : 'bg-primary';

    const toggleDrawer = () => setIsOpened(!isOpened);

    return (
        <>
            <nav className={`w-full fixed top-0 left-0 ${transparent ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md'} px-4 md:px-10 lg:px-20 md:h-28 h-20 flex items-center justify-between relative z-[900] transition-all duration-300`}>

                <div className={`flex items-center ${GAPS.NAVBAR_LEFT_ITEMS}`}>
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
                        src="/assets/images/shared/logo.png"
                        alt="Guardian Logo"
                        className="w-[100px] md:w-[180px] object-contain mb-2 px-4 transition-transform group-hover:scale-110"
                    />
                </div>

                {/* Right Side Actions */}
                <div className={`flex items-center ${GAPS.NAVBAR_RIGHT_ACTIONS}`}>

                    <button className={`border border-white/50 bg-primary hover:bg-[#e0661d] text-white px-8 py-2.5 rounded-full font-black ${TEXT_SIZES.LOGIN_BTN} transition-all shadow-lg`}>
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
                        className={`absolute top-0 left-0 h-full w-full md:w-[450px] bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-out border-r border-white/20 flex flex-col ${isOpened ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                        {/* Drawer Header */}
                        <div className={`flex items-center justify-between p-8 border-b border-gray-100 ${GAPS.DRAWER_HEADER}`}>
                            <div className={`flex items-center ${GAPS.DRAWER_HEADER}`}>
                                <div className="w-32 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                                    <img src="/assets/images/shared/logo.png" alt="Logo" className="w-28 h-6 object-contain" />
                                </div>
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
                        <div className="flex-grow overflow-y-auto px-6 pt-6 pb-10 no-scrollbar">
                            <div className={`grid ${GAPS.NAV_ITEM_CONTAINER}`}>
                                {MENU_DATA.map((item, index) => (
                                    <NavItem
                                        key={`${item.label}-${index}`}
                                        item={item}
                                        onClose={toggleDrawer}
                                    />
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
