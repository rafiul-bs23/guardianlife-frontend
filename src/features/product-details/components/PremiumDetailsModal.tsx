import React, { useEffect, useState } from 'react';
import { X, Info, Download } from 'lucide-react';
import Button from "../../../shared/Components/Button.tsx";
import { getPremiumDocument } from '../api';

interface PremiumDetailsModalProps {
    isOpen: boolean;
    data: any;
    pdabLabel: string;
    onClose: () => void;
    onCheckAgain: () => void;
}

const PremiumDetailsModal: React.FC<PremiumDetailsModalProps> = ({ isOpen, data, pdabLabel, onClose, onCheckAgain }) => {
    const [isDownloading, setIsDownloading] = useState(false);

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

    const handleDownloadDetails = async () => {
        if (!data?.docPayload) {
            alert("Document data not available");
            return;
        }

        try {
            setIsDownloading(true);
            const response = await getPremiumDocument(data.docPayload);
            if (response && response.status && response.data?.document) {
                const base64String = response.data.document;
                const byteCharacters = atob(base64String);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'application/pdf' });
                
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'premium-details.pdf');
                document.body.appendChild(link);
                link.click();
                link.parentNode?.removeChild(link);
                window.URL.revokeObjectURL(url);
            } else {
                alert(response?.message || "Failed to download document");
            }
        } catch (error) {
            console.error("Download Error:", error);
            alert("Error downloading document");
        } finally {
            setIsDownloading(false);
        }
    };

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
                    <button 
                        onClick={handleDownloadDetails}
                        disabled={isDownloading}
                        className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#F37021] text-[#F37021] font-medium text-sm hover:bg-orange-50 transition-colors disabled:opacity-50"
                    >
                        {isDownloading ? "Downloading..." : (
                            <>
                                <Download size={18} />
                                Download Details
                            </>
                        )}
                    </button>
                </div>

                <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span>Premium Rate</span>
                        <span>৳{data?.life_premium_rate || 0}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span>Basic Premium</span>
                        <span>৳{new Intl.NumberFormat('en-IN').format(data?.life_premium || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span>Health Insurance Premium</span>
                        <span>৳{new Intl.NumberFormat('en-IN').format(data?.total_hi_premium || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span>Critical Illness Premium</span>
                        <span>৳{new Intl.NumberFormat('en-IN').format(data?.ci_premium || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="flex items-center gap-1.5">
                            {pdabLabel}
                            <Info size={14} className="text-gray-400" />
                        </span>
                        <span>৳{new Intl.NumberFormat('en-IN').format(data?.pdab_diab_premium || 0)}</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 pb-3 font-bold text-gray-900 text-base sm:text-lg">
                        <span>Total Premium</span>
                        <span>৳{new Intl.NumberFormat('en-IN').format(data?.total_annual_premium || 0)}</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-gray-900 text-base sm:text-lg">
                        <span>Sum Assured</span>
                        <span>৳{new Intl.NumberFormat('en-IN').format(data?.sum_assured || 0)}</span>
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
