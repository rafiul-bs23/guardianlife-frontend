import React from 'react';
import logo from '../../assets/images/shared/logo.png';

interface NavbarProps {
    transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
    const HamburgerColor = transparent ? 'bg-white' : 'bg-primary';
    return (
        <nav className={`w-full ${transparent ? 'bg-transparent' : 'bg-white'} px-4 md:px-10 lg:px-20 md:h-32 h-20 flex items-center justify-between relative z-50 py-0 md:py-2  `}>
            {/* Hamburger Menu Icon */}
            <button className="flex flex-col gap-1 cursor-pointer" aria-label="Menu">
                <span className={`w-8 h-[3px] ${HamburgerColor} rounded-full`}></span>
                <span className={`w-8 h-[3px] ${HamburgerColor} rounded-full`}></span>
                <span className={`w-8 h-[3px] ${HamburgerColor} rounded-full`}></span>
            </button>

            {/* Centered Logo in Orange Container */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 md:h-32 h-20 w-30 md:w-64 bg-primary rounded-b-[30px] flex items-center justify-center shadow-lg">
                <img src={logo} alt="Guardian Logo" className="w-[120px] md:w-[220px] object-contain mb-4 px-4" />
            </div>

            {/* Login Button */}
            <button className="bg-primary hover:bg-[#e0661d] text-white px-8 py-2 rounded-full font-bold text-sm md:text-base transition-colors shadow-sm">
                Login
            </button>
        </nav>
    );
};

export default Navbar;
