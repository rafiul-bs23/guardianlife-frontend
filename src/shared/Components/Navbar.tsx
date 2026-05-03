import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { X, ChevronDown } from 'lucide-react';
import { MENU_DATA } from '../constants/menuData';
import type { MenuItem } from '../types/menu';
import Button from './Button';
import LanguageToggle from './LanguageToggle';
import { getAuthToken, clearAuthData } from '../utils/authUtils';
import { submitLogout } from '../../features/login/api';

interface NavbarProps {
    transparent?: boolean;
    animateIn?: boolean;
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

const Navbar: React.FC<NavbarProps> = ({ transparent = false, animateIn = false }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setIsLoggedIn(!!getAuthToken());
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = async () => {
        try {
            await submitLogout();
        } catch (error) {
            console.error('Logout API failed', error);
        } finally {
            clearAuthData();
            setIsLoggedIn(false);
            navigate('/login');
        }
    };

    const isDashboardPage = location.pathname.startsWith('/dashboard');

    const HamburgerColor = (transparent && !isScrolled) ? 'bg-white' : 'bg-primary';

    const toggleDrawer = () => setIsOpened(!isOpened);

    const navBackground = (transparent && !isScrolled)
        ? 'bg-transparent'
        : isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-white';

    const NavElement = animateIn ? motion.nav : 'nav';
    const animateProps = animateIn
        ? {
            initial: { y: -100, opacity: 0 } as const,
            animate: { y: 0, opacity: 1 } as const,
            transition: { duration: 0.5, ease: 'easeOut' as const },
        }
        : {};

    return (
        <>
            <NavElement
                {...animateProps}
                className={`w-full fixed top-0 left-0 ${navBackground} px-4 md:px-10 lg:px-20 ${isScrolled ? 'md:h-20 h-16' : 'md:h-28 h-16'} flex items-center justify-between z-[9999] ${animateIn ? 'transition-[background-color,height,box-shadow] duration-300' : 'transition-all duration-300'}`}
            >

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
                <Link to="/">
                    <div className={`absolute left-1/2 -translate-x-1/2 top-0 ${isScrolled ? 'md:h-16 h-12 w-28 md:w-56' : 'md:h-28 h-12 w-32 md:w-64'} bg-primary  md:rounded-b-[35px] rounded-b-[16px] flex items-center justify-center shadow-[0_10px_30px_rgba(235,105,37,0.3)] transition-all hover:h-30 group`}>
                        <img
                            src="/assets/images/shared/logo.png"
                            alt="Guardian Logo"
                            className={`transition-all duration-300 ${isScrolled ? 'w-[110px] md:w-[155px]' : 'w-[120px] md:w-[180px]'} object-contain mb-0 md:mb-2 px-4 group-hover:scale-110`}
                        />
                    </div>
                </Link>

                {/* Right Side Actions */}
                <div className={`flex items-center ${GAPS.NAVBAR_RIGHT_ACTIONS}`}>

                    {/* <LanguageToggle scrolled={!transparent || isScrolled} /> */}
                    {isLoggedIn && isDashboardPage ? (
                        <Button
                            label="Logout"
                            variant="base"
                            onClick={handleLogout}
                            className="h-[40px] md:h-[45px]"
                            labelClass="!text-[12px] md:!text-[18px]"
                            // leadingIcon={LogOut}
                        />
                    ) : (
                        <Button
                            label={isLoggedIn ? "Dashboard" : "Login"}
                            variant='base'
                            to={isLoggedIn ? "/dashboard" : "/login"}
                            className="!w-[80px] md:!w-[130px] h-[40px] md:h-[45px]"
                            labelClass="!text-[12px] md:!text-[18px]"
                        />
                    )}
                </div>
            </NavElement>

            {/* Navigation Drawer Menu */}
            {typeof document !== 'undefined' && createPortal(
                <div
                    className={`fixed inset-0 z-[10001] transition-all duration-500 ease-in-out ${isOpened ? 'visible opacity-100' : 'invisible opacity-0'}`}
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
                        <div className="pt-8 px-8 pb-3">
                            <div className={`flex items-center justify-between border-b-[1.5px] border-primary pb-4 ${GAPS.DRAWER_HEADER}`}>
                                {/* Guardian Logo with Masking */}
                                <div
                                    className="w-[120px] h-[30px] bg-primary"
                                    style={{
                                        maskImage: 'url(/assets/images/shared/logo.png)',
                                        maskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        maskPosition: 'left center',
                                        WebkitMaskImage: 'url(/assets/images/shared/logo.png)',
                                        WebkitMaskSize: 'contain',
                                        WebkitMaskRepeat: 'no-repeat',
                                        WebkitMaskPosition: 'left center'
                                    }}
                                    aria-label="Guardian Logo"
                                    role="img"
                                />

                                {/* Right Side: Language Toggle & Close Button */}
                                <div className="flex items-center gap-4 lg:gap-6">
                                    <LanguageToggle variant="switch" />
                                    <button
                                        onClick={toggleDrawer}
                                        className="text-primary hover:bg-orange-50 rounded transition-all group pr-1"
                                        aria-label="Close Menu"
                                    >
                                        <X size={28} strokeWidth={3} className="transition-transform group-hover:rotate-90" />
                                    </button>
                                </div>
                            </div>
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