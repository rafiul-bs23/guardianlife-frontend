import React from 'react';

const InvestmentSectors: React.FC = () => {
    const paths = {
        left: "M 305 249 H 68 Q 53 247 55 229 v -115 Q 56 103 71 103 H 430 C 455 102 453 116 453 121 V 160 C 417 177 390 202 379 249",
        right: "M 695 249 H 932 Q 947 247 945 229 V 114 Q 944 103 929 103 H 570 C 545 102 547 116 547 121 V 160 C 583 177 610 202 621 249",
        // Adjusted Y-coordinates for 550 height
        bottomLeft: "M 305 301 H 68 Q 53 303 55 321 V 436 Q 56 447 71 447 H 430 C 455 448 453 434 453 429 V 390 C 417 373 390 348 379 301",
        bottomRight: "M 695 301 H 932 Q 947 303 945 321 V 436 Q 944 447 929 447 H 570 C 545 448 547 434 547 429 V 390 C 583 373 610 348 621 301"
    }
    return (
        <section className="py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-lg md:text-2xl font-bold text-[#212529] text-center uppercase  tracking-wide">
                    INVESTMENT SECTORS FOR TAX REBATE
                </h2>

                <div className="relative w-full max-w-[1100px] mx-auto hidden md:block aspect-[1.8/1]">
                    {/* SVG Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* TOP LEFT */}
                        <path d={paths.left} stroke="#4C51BF" strokeWidth="5" strokeLinecap="round" fill="none" />
                        <circle cx="305" cy="249" r="7" fill="#4C51BF" />

                        {/* TOP RIGHT */}
                        <path d={paths.right} stroke="#ED8936" strokeWidth="5" strokeLinecap="round" fill="none" />
                        <circle cx="695" cy="249" r="7" fill="#ED8936" />

                        {/* BOTTOM LEFT */}
                        <path d={paths.bottomLeft} stroke="#4299E1" strokeWidth="5" strokeLinecap="round" fill="none" />
                        <circle cx="305" cy="301" r="7" fill="#4299E1" />

                        {/* BOTTOM RIGHT */}
                        <path d={paths.bottomRight} stroke="#48BB78" strokeWidth="5" strokeLinecap="round" fill="none" />
                        <circle cx="695" cy="301" r="7" fill="#48BB78" />
                    </svg>

                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-56 h-56 bg-white rounded-full border-[5px] border-[#1E1E54] flex flex-col items-center justify-center shadow-lg">
                        <div className="w-20 h-20 mb-1">
                            <img src="https://img.icons8.com/isometric-line/100/EB6925/tax.png" alt="Tax Icon" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-black text-[#212529] uppercase tracking-tighter">TAX REBATE</span>
                    </div>

                    {/* Content Positioning */}

                    {/* Top Left Text */}
                    <div className="absolute top-[30%] left-[3%] w-[38%] text-center">
                        <h3 className="text-xl font-bold text-[#212529]">Life Insurance Premium</h3>
                    </div>

                    {/* Top Right Text */}
                    <div className="absolute top-[27%] right-[3%] w-[38%] text-center">
                        <h3 className="text-xl font-bold text-[#212529]">Investment in stock exchange,<br />mutual funds or in debentures</h3>
                    </div>

                    {/* Bottom Left Text */}
                    <div className="absolute bottom-[28%] left-[3%] w-[38%] text-center">
                        <h3 className="text-xl font-bold text-[#212529]">Investment in Savings<br />Certificates</h3>
                    </div>

                    {/* Bottom Right Text */}
                    <div className="absolute bottom-[25%] right-[7%] w-[32%] text-center">
                        <h3 className="text-xl font-bold text-[#212529] leading-tight">Investment in deposit pension scheme: maximum investment<br />of BDT 60,000 per annum</h3>
                    </div>

                </div>

                {/* Mobile View (Stack) */}
                <div className="md:hidden space-y-6">
                    <div className="p-6 border-l-4 border-[#4C51BF] bg-gray-50 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-black text-[#212529]">Life Insurance Premium</h3>
                    </div>
                    <div className="p-6 border-l-4 border-[#ED8936] bg-gray-50 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-black text-[#212529]">Investment in stock exchange, mutual funds or in debentures</h3>
                    </div>
                    <div className="p-6 border-l-4 border-[#4299E1] bg-gray-50 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-black text-[#212529]">Investment in Savings Certificates</h3>
                    </div>
                    <div className="p-6 border-l-4 border-[#48BB78] bg-gray-50 rounded-r-xl shadow-sm">
                        <h3 className="text-lg font-black text-[#212529]">Investment in deposit pension scheme</h3>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InvestmentSectors;
