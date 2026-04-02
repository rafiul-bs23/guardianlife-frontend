import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Check } from 'lucide-react';
import type { Claim } from '../types';
import { useClaimDetails } from '../hooks/useClaimDetails';

interface ClaimDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  claim: Claim | null;
}

const formatDate = (dateString?: string | null) => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const formatCurrency = (amount?: number | string | null) => {
  if (amount === undefined || amount === null || amount === '') return '-';
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(amount)).replace('BDT', '৳');
};

const ClaimDetailsModal: React.FC<ClaimDetailsModalProps> = ({ isOpen, onClose, claim }) => {
  const { claimData, isLoading, error, fetchDetails, reset } = useClaimDetails();
  const [activeTab, setActiveTab] = useState('Tracking');

  useEffect(() => {
    if (isOpen && claim?.intimationNo && claim?.channelId !== undefined) {
      fetchDetails(claim.intimationNo, claim.channelId);
    } else {
      reset();
      setActiveTab('Tracking');
    }
  }, [isOpen, claim, fetchDetails, reset]);

  // Body scroll lock
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

  if (!isOpen || !claim) return null;

  const tabs = ['Tracking', 'Settlement', 'Documents'];

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex justify-center items-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4 sm:p-6 lg:p-10">
      <div className="relative bg-white rounded-3xl shadow-xl w-full max-w-[720px] mx-auto overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-8 py-5 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-gray-900">Claim Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto flex-1">
          {/* Main Card */}
          <div className="bg-white border rounded-2xl p-6 mb-8 shadow-sm relative overflow-hidden" style={{ borderColor: 'rgba(216, 180, 226, 0.5)', borderWidth: '1.5px' }}>
             <h3 className="text-xl font-semibold text-gray-800 mb-5">GUARDIAN LIFE INSURANCE LIMITED</h3>
             
             <div className="grid grid-cols-2 gap-y-6 gap-x-5">
               <div>
                  <div className="text-gray-400 text-sm mb-1 capitalize tracking-wide">Intimation No</div>
                  <div className="text-base font-medium text-gray-800">{claimData?.intimationNo || claim.intimationNo}</div>
               </div>
               <div>
                  <div className="text-gray-400 text-sm mb-1 capitalize tracking-wide">Patient Name</div>
                  <div className="text-base font-medium text-gray-800">{claimData?.memberName || '-'}</div>
               </div>
               <div>
                  <div className="text-gray-400 text-sm mb-1 capitalize tracking-wide">Claim Date</div>
                  <div className="text-base font-medium text-gray-800">{formatDate(claimData?.claimDate || claim.claimDate)}</div>
               </div>
               <div>
                  <div className="text-gray-400 text-sm mb-1 capitalize tracking-wide">Start Date</div>
                  <div className="text-base font-medium text-gray-800">{formatDate(claimData?.incidentDate)}</div>
               </div>
               <div>
                  <div className="text-gray-400 text-sm mb-1 capitalize tracking-wide">Claim Amount</div>
                  <div className="text-base font-medium text-gray-800">{formatCurrency(claimData?.claimAmount || claim.dueClaim)}</div>
               </div>
               <div>
                  <div className="text-gray-400 text-sm mb-1 capitalize tracking-wide">Paid Amount</div>
                  <div className="text-base font-medium text-gray-800">{formatCurrency(claimData?.netPayableAmount || 0)}</div>
               </div>
               <div>
                  <div className="text-gray-400 text-sm mb-1 capitalize tracking-wide">Claim Type</div>
                  <div className="text-base font-medium text-gray-800">{claimData?.categoryName || '-'}</div>
               </div>
               <div>
                  <div className="text-gray-400 text-sm mb-1 capitalize tracking-wide">Status</div>
                  <div className="text-base font-medium text-gray-800 uppercase">{claimData?.claimStatus || claim.claimStatus}</div>
               </div>
             </div>
          </div>

          {/* Tabs */}
          <div className="overflow-x-auto hide-scrollbar mb-6 pb-1 flex justify-center">
             <div className="flex gap-4 border-b border-gray-100 pb-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap px-8 py-2 rounded-full text-base font-medium transition-colors ${
                      activeTab === tab 
                        ? 'border border-[#F28C28] text-[#F28C28]' 
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
             </div>
          </div>

          {/* Details Section */}
          <div className="min-h-[250px]">
             {isLoading ? (
               <div className="flex justify-center items-center h-48">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F28C28]"></div>
               </div>
             ) : error ? (
               <div className="text-center text-red-500 py-8">{error}</div>
             ) : claimData ? (
               <div className="duration-300">
                 {activeTab === 'Tracking' && (
                    <div className="relative pl-6 mt-6">
                       {/* Line connecting tracking nodes */}
                       <div className="absolute left-[35px] top-6 bottom-8 w-0.5 z-0" style={{ background: 'linear-gradient(to bottom, #15803d 40%, rgba(181, 141, 61, 0.4) 60%, #e5e7eb) ' }}></div>

                       {claimData.tracking?.map((track: any, idx: number) => {
                          const isCompleted = track.date !== null;
                          const isCurrent = !isCompleted && idx > 0 && claimData.tracking[idx-1]?.date !== null;

                          return (
                            <div key={idx} className="relative flex gap-8 mb-8 group z-10">
                               <div className="absolute left-[-1px] top-1 bg-white rounded-full p-1">
                                  {isCompleted ? (
                                    <div className="w-8 h-8 rounded-full border-2 border-green-700 bg-green-700 flex items-center justify-center">
                                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                                    </div>
                                  ) : isCurrent ? (
                                    <div className="w-6 h-6 m-1 rounded-full border-[3.5px] border-[#B58D3D] bg-white"></div>
                                  ) : (
                                    <div className="w-6 h-6 m-1 rounded-full border-[2px] border-gray-200 bg-gray-50"></div>
                                  )}
                               </div>
                               <div className="pl-14 pt-1">
                                  <h4 className={`text-[19px] font-bold ${isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-400'}`}>
                                     {track.title}
                                  </h4>
                                  {(track.date || track.status) && (
                                     <div className="text-[17px] text-gray-500 mt-1">
                                        {track.date ? formatDate(track.date) : (track.status || '-')}
                                     </div>
                                  )}
                               </div>
                            </div>
                          );
                       })}
                    </div>
                 )}
                 {activeTab === 'Settlement' && (
                    <div className="text-center text-gray-500 py-10">
                       <p className="text-gray-600 font-medium mb-1">No settlements available</p>
                    </div>
                 )}
                 {activeTab === 'Documents' && (
                    <div className="space-y-4 pt-4">
                      {claimData.documents && claimData.documents.length > 0 ? (
                        claimData.documents.map((doc: any, idx: number) => (
                           <div key={idx} className="flex justify-between items-center bg-gray-50 p-5 rounded-2xl border border-gray-100">
                             <div className="flex items-center gap-4">
                               <div className="bg-white p-3 rounded-lg text-gray-400 shadow-sm">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                               </div>
                               <div>
                                 <div className="font-medium text-[17px] text-gray-800">{doc.name || `Document ${idx + 1}`}</div>
                                 <div className="text-sm text-gray-400 uppercase">{doc.extension || 'FILE'}</div>
                               </div>
                             </div>
                             <button className="text-[#F28C28] hover:text-orange-600 font-medium text-sm px-5 py-2.5 bg-orange-50 rounded-xl transition-colors">View</button>
                           </div>
                        ))
                      ) : (
                        <div className="text-center text-gray-500 py-6">No documents found</div>
                      )}
                    </div>
                 )}
               </div>
             ) : (
               <div className="text-center text-gray-500 py-12">No active claim information found</div>
             )}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ClaimDetailsModal;
