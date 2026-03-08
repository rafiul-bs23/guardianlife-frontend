import React, { useEffect } from 'react';
import { X, Info } from 'lucide-react';
import Button from "../../../shared/Components/Button.tsx";

interface PremiumDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCheckAgain: () => void;
}

const PremiumDetailsModal: React.FC<PremiumDetailsModalProps> = ({ isOpen, onClose, onCheckAgain }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex justify-center items-start overflow-y-auto bg-black/40 backdrop-blur-sm p-4 sm:p-6 lg:p-10">
            <div className="relative bg-white rounded-3xl shadow-xl w-full max-w-[900px] mx-auto p-6 sm:p-8 lg:p-10">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-orange-100 text-[#F37021] hover:bg-orange-200 transition-colors"
                >
                    <X size={27}/>
                </button>

                <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Calculate</p>
                    <h2 className="text-2xl sm:text-[28px] font-black text-gray-900 uppercase tracking-tight">GUARDIAN 3 STAGE PLAN</h2>
                    <div className="h-0.5 bg-[#F37021] w-full mt-4"></div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-700">Benefit - Base Plan</h3>
                    <button className="px-6 py-2 rounded-full border border-[#F37021] text-[#F37021] font-medium text-sm hover:bg-orange-50 transition-colors">
                        Download Details
                    </button>
                </div>

                <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span>Premium Rate</span>
                        <span>৳134.53</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span>Basic Premium</span>
                        <span>৳7063</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span>Health Insurance Premium</span>
                        <span>৳4253</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span>Critical Illness Premium</span>
                        <span>৳77</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="flex items-center gap-1.5">
                            PDAB
                            <Info size={14} className="text-gray-400" />
                        </span>
                        <span>৳184</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 pb-3 font-bold text-gray-900 text-base sm:text-lg">
                        <span>Total Premium</span>
                        <span>৳5,621</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-gray-900 text-base sm:text-lg">
                        <span>Sum Assured</span>
                        <span>৳100,000</span>
                    </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button
                      label="Check Again"
                      onClick={onCheckAgain}
                      variant="outline-orange"
                    />
                    <Button
                      label="Proceed To Proposal"
                    />
                </div>
            </div>
        </div>
    );
};

export default PremiumDetailsModal;
