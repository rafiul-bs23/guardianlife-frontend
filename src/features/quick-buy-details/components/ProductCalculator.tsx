import React, { useState, useEffect } from 'react';
import type { ProductCalculatorSection } from '../types';
import Button from '../../../shared/Components/Button';

interface ProductCalculatorProps {
    data: ProductCalculatorSection;
}

const ProductCalculator: React.FC<ProductCalculatorProps> = ({ data }) => {
    const [dob, setDob] = useState<string>('2002-01-10');
    const [term, setTerm] = useState<number>(data.term);
    const [coverage, setCoverage] = useState<number>(data.sumAssured / 100000); // In Lakhs

    // Calculation states (simulated)
    const [yearlyPremium, setYearlyPremium] = useState<number>(data.yearlyPremium);
    const [total, setTotal] = useState<number>(data.total);

    // Dynamic calculation simulation
    useEffect(() => {
        // Just a simple simulation to make the values change
        const baseRate = 0.0035; // 0.35%
        const termFactor = (30 - term) / 10;
        const calculatedPremium = Math.round(coverage * 100000 * baseRate * termFactor);

        setYearlyPremium(calculatedPremium);
        setTotal(calculatedPremium + data.stampFee);
    }, [term, coverage, data.stampFee]);

    const formatCurrency = (val: number) => {
        return `BDT ${val.toLocaleString()}`;
    };

    return (
        <section className="w-full bg-[#F8F9FA] py-16">
            <div className="max-w-[1000px] mx-auto px-4">
                {/* Inputs Section */}
                <div className="flex flex-col gap-12 mb-16">
                    {/* DOB Row */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-6">
                        <label className="text-xl font-bold text-gray-800">DOB</label>
                        <div className="relative">
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="w-full bg-[#FFEEE5] border border-[#EB6925] rounded-[14px] px-8 py-4 text-[#EB6925] text-xl font-bold focus:outline-none appearance-none cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* TERM Slider */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-6">
                        <label className="text-xl font-bold text-gray-800 uppercase">TERM</label>
                        <div className="relative pt-8 pb-4">
                            {/* Tick Labels */}
                            <div className="absolute top-0 w-full flex justify-between px-2">
                                {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(t => (
                                    <span key={t} className={`text-[11px] font-bold ${t === term ? 'text-[#EB6925] opacity-0' : 'text-gray-300'}`}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Selected Indicator */}
                            <div
                                className="absolute top-0 flex flex-col items-center -translate-x-1/2 transition-all duration-150 pointer-events-none"
                                style={{
                                    left: `calc(14px + (${((term - 10) / 15) * 100}% - ${((term - 10) / 15) * 28}px))`
                                }}
                            >
                                <span className="text-[11px] font-extrabold text-[#2A2B68] whitespace-nowrap mb-1 uppercase">
                                    {term} YEARS
                                </span>
                                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#EB6925]"></div>
                            </div>

                            <input
                                type="range"
                                min="10"
                                max="25"
                                value={term}
                                onChange={(e) => setTerm(parseInt(e.target.value))}
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-orange"
                                style={{
                                    background: `linear-gradient(to right, #EB6925 0%, #EB6925 ${((term - 10) / 15) * 100}%, #E5E7EB ${((term - 10) / 15) * 100}%, #E5E7EB 100%)`
                                }}
                            />
                        </div>
                    </div>

                    {/* COVERAGE Slider */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-6">
                        <label className="text-xl font-bold text-gray-800 uppercase">COVERAGE</label>
                        <div className="relative pt-8 pb-4">
                            {/* Tick Labels */}
                            <div className="absolute top-0 w-full flex justify-between px-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(c => (
                                    <span key={c} className={`text-[11px] font-bold ${c === coverage ? 'text-[#EB6925] opacity-0' : 'text-gray-300'}`}>
                                        {c}
                                    </span>
                                ))}
                            </div>

                            {/* Selected Indicator */}
                            <div
                                className="absolute top-0 flex flex-col items-center -translate-x-1/2 transition-all duration-150 pointer-events-none"
                                style={{
                                    left: `calc(14px + (${((coverage - 1) / 9) * 100}% - ${((coverage - 1) / 9) * 28}px))`
                                }}
                            >
                                <span className="text-[11px] font-extrabold text-[#2A2B68] whitespace-nowrap mb-1 uppercase">
                                    {coverage} LAKH
                                </span>
                                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#EB6925]"></div>
                            </div>

                            <input
                                type="range"
                                min="1"
                                max="10"
                                value={coverage}
                                onChange={(e) => setCoverage(parseInt(e.target.value))}
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-orange"
                                style={{
                                    background: `linear-gradient(to right, #EB6925 0%, #EB6925 ${((coverage - 1) / 9) * 100}%, #E5E7EB ${((coverage - 1) / 9) * 100}%, #E5E7EB 100%)`
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-tight">DETAILS OF THE PRODUCT</h2>
                    <p className="text-gray-500 text-[13px] font-medium italic">
                        automatic calculate value by changing the term and coverage
                    </p>
                </div>

                <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                        {/* Left Column */}
                        <div className="flex flex-col gap-4 border-r-0 lg:border-r border-gray-100 pr-0 lg:pr-12">
                            <DetailRow label="Product Name" value={data.productName} />
                            <DetailRow label="Sum Assured" value={`BDT ${coverage} Lac`} />
                            <DetailRow label="Term" value={`${term} years`} />
                            <DetailRow label="Yearly Premium" value={formatCurrency(yearlyPremium)} />
                            <DetailRow label="Stamp Fee (One Time Payment)" value={formatCurrency(data.stampFee)} />
                            <DetailRow label="Total" value={formatCurrency(total)} bold />
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4">
                            <DetailRow label="Life Coverage From Day One" value={data.lifeCoverageFromDayOne ? 'Yes' : 'No'} />
                            <DetailRow label="Premium Payment Mode" value={data.premiumPaymentMode} />
                            <DetailRow label="Age" value={`${data.minAge} to ${data.maxAge} years nearest birthday`} />
                            <DetailRow label="Medical Test" value={data.medicalTest} />
                            <DetailRow label="Maturity Benefit" value={data.maturityBenefit ? 'Yes' : 'No'} />
                            <DetailRow label="Surrender Option" value={data.surrenderOption ? 'Yes' : 'No'} />
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="flex flex-col items-left gap-8">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 rounded border-gray-300 text-[#EB6925] focus:ring-[#EB6925]"
                            defaultChecked
                        />
                        <label htmlFor="terms" className="text-sm font-medium text-gray-500">
                            Terms and Conditions (<span className="text-[#EB6925] cursor-pointer">Read and Agree</span>)
                        </label>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <Button
                            label="Buy Now"
                            variant="solid-orange"
                            className="min-w-[200px] lg:min-w-[400px] py-4 text-xl rounded-lg"
                            onClick={() => console.log('Buy Now clicked')}
                        />
                    </div>
                </div>
            </div>

            <style>{`
                input[type='range']::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 28px;
                    height: 28px;
                    background: #EB6925;
                    border: 4px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                }
                input[type='range']::-moz-range-thumb {
                    width: 28px;
                    height: 28px;
                    background: #EB6925;
                    border: 4px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                }
            `}</style>
        </section>
    );
};

const DetailRow: React.FC<{ label: string; value: string; bold?: boolean }> = ({ label, value, bold }) => (
    <div className="flex justify-between items-center gap-4">
        <span className="text-[15px] font-bold text-gray-800">{label}:</span>
        <span className={`text-[15px] ${bold ? 'font-extrabold text-gray-900' : 'font-medium text-gray-700'}`}>
            {value}
        </span>
    </div>
);

export default ProductCalculator;
