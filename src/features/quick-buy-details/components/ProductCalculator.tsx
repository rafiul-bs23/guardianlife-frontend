import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProductInformationData, PremiumViewItem } from '../types';
import Button from '../../../shared/Components/Button';
import { usePopup } from '../../../shared/context/PopupContext';
import { usePremiumCalculation } from '../hooks/usePremiumCalculation';

interface ProductCalculatorProps {
    dynamicData: ProductInformationData;
}

const ProductCalculator: React.FC<ProductCalculatorProps> = ({ dynamicData }) => {
    const [dob, setDob] = useState<string>('2006-03-13');
    const [term, setTerm] = useState<number>(dynamicData?.terms?.[0] || 10);
    const [coverage, setCoverage] = useState<number>(dynamicData?.coverages?.[0] || 100000);
    const [showDetails, setShowDetails] = useState(false);

    const { calculate, data: calcData, isLoading: isCalculating } = usePremiumCalculation();

    const handleCalculate = async () => {
        const payload = {
            product_id: dynamicData.id,
            category: dynamicData.category,
            plan_no: dynamicData.plan_no,
            date_of_birth: dob,
            term: term,
            sum_assured: null,
            premium: coverage,
            mode: dynamicData.mode || 'Yearly',
            validity: null
        };
        const result = await calculate(payload);
        console.log({ result });
        if (result) {
            setShowDetails(true);
        }
    };

    const { showPopup } = usePopup();

    const minTerm = dynamicData?.terms?.[0] ?? 10;
    const maxTerm = dynamicData?.terms?.[dynamicData.terms.length - 1] ?? 25;
    const termStep = 1;

    return (
        <section className="w-full bg-[#F8F9FA] py-16">
            <div className="px-2 md:px-10 xl:px-28  mx-auto">
                {/* Inputs Section */}
                <div className="flex flex-col gap-12 mb-8">
                    {/* DOB Row */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-6">
                        <label className="text-xl font-bold text-gray-800">DOB</label>
                        <div className="relative">
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => {
                                    setDob(e.target.value);
                                    setShowDetails(false);
                                }}
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
                                {dynamicData?.terms?.map(t => (
                                    <span key={t} className={`text-[11px] font-bold ${t === term ? 'text-[#EB6925] opacity-0' : 'text-gray-300'}`}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Selected Indicator */}
                            <div
                                className="absolute top-0 flex flex-col items-center -translate-x-1/2 transition-all duration-150 pointer-events-none"
                                style={{
                                    left: `calc(14px + (${((term - minTerm) / (maxTerm - minTerm)) * 100}% - ${((term - minTerm) / (maxTerm - minTerm)) * 28}px))`
                                }}
                            >
                                <span className="text-[11px] font-extrabold text-[#2A2B68] whitespace-nowrap mb-1 uppercase">
                                    {term} YEARS
                                </span>
                                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#EB6925]"></div>
                            </div>

                            <input
                                type="range"
                                min={minTerm}
                                max={maxTerm}
                                step={termStep}
                                value={term}
                                onChange={(e) => {
                                    setTerm(parseInt(e.target.value));
                                    setShowDetails(false);
                                }}
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-orange"
                                style={{
                                    background: `linear-gradient(to right, #EB6925 0%, #EB6925 ${((term - minTerm) / (maxTerm - minTerm)) * 100}%, #E5E7EB ${((term - minTerm) / (maxTerm - minTerm)) * 100}%, #E5E7EB 100%)`
                                }}
                            />
                        </div>
                    </div>

                    {/* COVERAGE Dropdown */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-6">
                        <label className="text-xl font-bold text-gray-800 uppercase">COVERAGE</label>
                        <div className="relative">
                            <select
                                value={coverage}
                                onChange={(e) => {
                                    setCoverage(parseInt(e.target.value));
                                    setShowDetails(false);
                                }}
                                className="w-full bg-[#FFEEE5] border border-[#EB6925] rounded-[14px] px-8 py-4 text-[#EB6925] text-xl font-bold focus:outline-none appearance-none cursor-pointer"
                            >
                                {dynamicData?.coverages?.map(c => (
                                    <option key={c} value={c}>
                                        {c >= 100000 ? `${c / 100000} Lac` : c} (BDT {c.toLocaleString()})
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none">
                                <svg className="w-6 h-6 text-[#EB6925]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-10">
                    <Button
                        label={isCalculating ? "Calculating..." : "Calculate"}
                        variant="solid-orange"
                        className="rounded-lg min-w-[150px]"
                        onClick={handleCalculate}
                        disabled={isCalculating}
                    />
                </div>

                {/* Details Section */}
                <AnimatePresence>
                    {showDetails && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-tight">DETAILS OF THE PRODUCT</h2>
                                <p className="text-gray-500 text-[13px] font-medium italic">
                                    calculated value based on selected term and coverage
                                </p>
                            </div>

                            <div className="bg-white rounded-[24px] p-10 shadow-sm border border-gray-100 mb-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                                    {calcData?.view && (
                                        <>
                                            {/* Left Column */}
                                            <div className="flex flex-col gap-4 border-r-0 lg:border-r border-gray-100 pr-0 lg:pr-12">
                                                {Object.entries(calcData.view)
                                                    .filter(([_, item]) => item !== null && item !== undefined)
                                                    .filter((_, index, filteredItems) => index < Math.ceil(filteredItems.length / 2))
                                                    .map(([key, item]) => {
                                                        const viewItem = item as PremiumViewItem;
                                                        return (
                                                            <DetailRow
                                                                key={key}
                                                                label={viewItem.title}
                                                                value={viewItem.value}
                                                                bold={key === 'total'}
                                                            />
                                                        );
                                                    })}
                                            </div>

                                            {/* Right Column */}
                                            <div className="flex flex-col gap-4">
                                                {Object.entries(calcData.view)
                                                    .filter(([_, item]) => item !== null && item !== undefined)
                                                    .filter((_, index, filteredItems) => index >= Math.ceil(filteredItems.length / 2))
                                                    .map(([key, item]) => {
                                                        const viewItem = item as PremiumViewItem;
                                                        return (
                                                            <DetailRow
                                                                key={key}
                                                                label={viewItem.title}
                                                                value={viewItem.value}
                                                                bold={key === 'total'}
                                                            />
                                                        );
                                                    })}
                                            </div>
                                        </>
                                    )}
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
                                        className="rounded-lg"
                                        onClick={() => showPopup({ title: "", message: "Log in to your profile and grab your QuickBuy products in seconds. Fast, simple, and hassle-free." })}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
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
