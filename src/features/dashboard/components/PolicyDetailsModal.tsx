import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import type { Policy } from '../types';
import { usePolicyInformation } from '../hooks/usePolicyInformation';
import { fetchPolicyClaimsApi } from '../api/dashboardApi';

interface PolicyDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  policy: Policy | null;
}

const formatDate = (dateString?: string | null) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const formatCurrency = (amount?: number | string | null) => {
  if (amount === undefined || amount === null || amount === '') return '';
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(amount)).replace('BDT', '৳');
};

const PolicyDetailsModal: React.FC<PolicyDetailsModalProps> = ({ isOpen, onClose, policy }) => {
  const { policyData, isLoading, error, fetchInformation, reset } = usePolicyInformation();
  console.log(policyData);

  const [activeTab, setActiveTab] = useState('Basic Info');
  const [claims, setClaims] = useState<any[] | null>(null);
  const [isLoadingClaims, setIsLoadingClaims] = useState(false);
  const [claimsError, setClaimsError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && policy?.policyNumber) {
      fetchInformation(policy.policyNumber);
    } else {
      reset();
      setActiveTab('Basic Info');
      setClaims(null);
      setClaimsError(null);
    }
  }, [isOpen, policy, fetchInformation, reset]);

  useEffect(() => {
    if (activeTab === 'Claims' && isOpen && policy?.policyNumber && claims === null && !isLoadingClaims) {
      const fetchClaims = async () => {
        setIsLoadingClaims(true);
        setClaimsError(null);
        try {
          const res = await fetchPolicyClaimsApi(policy.policyNumber);
          setClaims(res);
        } catch (err: any) {
          setClaimsError(err?.response?.data?.message || err.message || 'Failed to fetch claims');
        } finally {
          setIsLoadingClaims(false);
        }
      };
      fetchClaims();
    }
  }, [activeTab, isOpen, policy, claims, isLoadingClaims]);

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

  if (!isOpen || !policy) return null;

  const tabs = ['Basic Info', 'Nominee', 'Supplementary', 'Claims', 'Premiums', 'Transactions', 'Loans'];

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex justify-center items-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4 sm:p-6 lg:p-10">
      <div className="relative bg-gray-50 rounded-2xl shadow-xl w-full max-w-[720px] mx-auto overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-8 py-5 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-gray-900">Policy Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto flex-1">
          {/* Main Policy Card */}
          <div className="bg-white border rounded-xl p-6 mb-6 shadow-sm relative overflow-hidden" style={{ borderColor: '#F28C28', borderWidth: '1.5px' }}>
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {policy.segment === 'GROUP' && policy.organizationName ? policy.organizationName : policy.planName}
                </h3>
                <div className="text-gray-500 text-base flex items-center gap-2 mt-1.5">
                  <span>#{policy.policyNumber}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-400 capitalize">{policy.policyStatus?.toLowerCase() || 'Unknown'}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 my-4"></div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-5">
              <div>
                <div className="text-gray-400 text-sm mb-1">Commencement Date</div>
                <div className="text-base font-medium text-gray-800">{formatDate(policy.startDate)}</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">{policy.segment === 'GROUP' ? 'Expire Date' : 'Maturity Date'}</div>
                <div className="text-base font-medium text-gray-800">{formatDate(policy.maturityDate)}</div>
              </div>
              
              {policy.segment !== 'GROUP' && (
                <>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Term</div>
                    <div className="text-base font-medium text-gray-800">{policy.policyTerm} Year(s)</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Sum Assured</div>
                    <div className="text-base font-medium text-gray-800">{formatCurrency(policy.sumAssured)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Next Due Date</div>
                    <div className="text-base font-medium text-gray-800">{formatDate(policy.nextDueDate) || '-'}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Premium Amount</div>
                    <div className="text-base font-medium text-gray-800">{formatCurrency(policy.premiumAmount)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">No of Premium Due</div>
                    <div className="text-base font-medium text-gray-800">{policyData?.noOfDue || '0'}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Premium Due Amount</div>
                    <div className="text-base font-medium text-gray-800">{formatCurrency(policy.dueAmount)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Suspense</div>
                    <div className="text-base font-medium text-gray-800">{formatCurrency(policy.suspenseAmount)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Payable Amount with Late Fee</div>
                    <div className="text-base font-medium text-gray-800">{formatCurrency(policy.totalDueAmount)}</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="overflow-x-auto hide-scrollbar mb-6 pb-1">
            <div className="flex gap-2 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-base font-medium border transition-colors ${activeTab === tab
                    ? 'bg-[#F28C28] text-white border-[#F28C28] shadow-sm'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm min-h-[300px]">
            {isLoading ? (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F28C28]"></div>
              </div>
            ) : error ? (
              <div className="text-center text-red-500 py-8">{error}</div>
            ) : policyData ? (
              <div className="duration-300">
                {activeTab === 'Basic Info' && (
                  <div className="space-y-7">
                    <h4 className="font-semibold text-gray-800 text-[20px] border-b pb-3">Personal Details</h4>
                    <div className="space-y-6">
                      <div>
                        <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Name</div>
                        <div className="text-[17px] text-gray-800 uppercase">{policyData.fullName || policyData.personalInfo?.name || '-'}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Father Name</div>
                        <div className="text-[17px] text-gray-800">{policyData.fatherName || policyData.personalInfo?.fatherName || '-'}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Mother Name</div>
                        <div className="text-[17px] text-gray-800">{policyData.motherName || policyData.personalInfo?.motherName || '-'}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Date of Birth</div>
                        <div className="text-[17px] text-gray-800">{formatDate(policyData.birthDate || policyData.personalInfo?.dob || policy.dateOfBirth)}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">NID/Passport</div>
                        <div className="text-[17px] text-gray-800">{policyData.identityNumber ? `${policyData.identityType || ''} ${policyData.identityNumber}`.trim() : '-'}</div>
                      </div>
                    </div>

                    {(policyData.email || policyData.contactNo || policyData.presentAddress || policyData.permanentAddress || policyData.contactInfo?.email || policyData.contactInfo?.address) && (
                      <>
                        <h4 className="font-semibold text-gray-800 text-[20px] border-b pb-3 pt-5">Contact</h4>
                        <div className="space-y-6">
                          <div>
                            <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Mobile Number</div>
                            <div className="text-[17px] text-gray-800">{policyData.contactNo || policyData.contactInfo?.mobileNo || policy.phoneNumber || '-'}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Email</div>
                            <div className="text-[17px] text-gray-800">{policyData.email || policyData.contactInfo?.email || '-'}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Present Address</div>
                            <div className="text-[17px] text-gray-800">{policyData.presentAddress || policyData.contactInfo?.address || '-'}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Permanent Address</div>
                            <div className="text-[17px] text-gray-800">{policyData.permanentAddress || '-'}</div>
                          </div>
                        </div>
                      </>
                    )}

                    {(policyData.accountName || policyData.accountNo || policyData.bankName) && (
                      <>
                        <h4 className="font-semibold text-gray-800 text-[20px] border-b pb-3 pt-5">Bank Info</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Bank Name</div>
                            <div className="text-[17px] text-gray-800">{policyData.bankName || '-'}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Branch Name</div>
                            <div className="text-[17px] text-gray-800">{policyData.branchName || '-'}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Account No</div>
                            <div className="text-[17px] text-gray-800">{policyData.accountNo || '-'}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Routing No</div>
                            <div className="text-[17px] text-gray-800">{policyData.routingNo || '-'}</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
                {activeTab === 'Nominee' && (
                  <div className="space-y-4">
                    {policyData.nominees && policyData.nominees.length > 0 ? (
                      policyData.nominees.map((nominee: any, idx: number) => (
                        <div key={idx} className="border border-gray-100 rounded-xl p-6 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                          <div className="space-y-5">
                            <div>
                              <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Name of Nominee</div>
                              <div className="text-lg font-medium text-gray-800 uppercase">{nominee.name || '-'}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                              <div>
                                <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Relation</div>
                                <div className="text-base text-gray-800">{nominee.relationName || nominee.relation || '-'}</div>
                              </div>
                              <div>
                                <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Share</div>
                                <div className="text-base text-gray-800">{nominee.share ?? nominee.sharePercentage ? `${nominee.share ?? nominee.sharePercentage}%` : '-'}</div>
                              </div>
                              <div>
                                <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Age</div>
                                <div className="text-base text-gray-800">{nominee.age || '-'}</div>
                              </div>
                              <div>
                                <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Date of Birth</div>
                                <div className="text-base text-gray-800">{formatDate(nominee.dateOfBirth || nominee.dob) || '-'}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center text-gray-500 py-6">No nominee details found</div>
                    )}
                  </div>
                )}
                {activeTab === 'Supplementary' && (
                  <div className="space-y-4">
                    {policyData.supplementary && policyData.supplementary.length > 0 ? (
                      policyData.supplementary.map((sup: any, idx: number) => (
                        <div key={idx} className="flex justify-between items-center bg-gray-50 p-5 rounded-xl border border-gray-100">
                          <span className="text-[17px] text-gray-700 font-medium">{sup.name || 'Supplementary Benefit'}</span>
                          <span className="text-[17px] font-bold text-gray-900">{formatCurrency(sup.amount || 0)}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center text-gray-500 py-6">No supplementary benefits found</div>
                    )}
                  </div>
                )}
                {activeTab === 'Claims' && (
                  <div className="space-y-4">
                    {isLoadingClaims ? (
                      <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F28C28]"></div>
                      </div>
                    ) : claimsError ? (
                      <div className="text-center text-red-500 py-8">{claimsError}</div>
                    ) : claims && claims.length > 0 ? (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 text-[18px]">Claim Details</h4>
                        {claims.map((claim: any, idx: number) => {
                          const isSettled = claim.claimStatus?.toUpperCase() === 'SETTLED';
                          return (
                            <div key={idx} className="bg-white border border-gray-100 rounded-[14px] p-5 shadow-[0_2px_8px_rgb(0,0,0,0.04)] relative overflow-hidden">
                              <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                                <div>
                                  <div className="text-gray-400 text-sm mb-1.5">Intimation No</div>
                                  <div className="text-[15px] font-medium text-gray-800">{claim.intimationNo || '-'}</div>
                                </div>
                                <div className="relative">
                                  <div className="text-gray-400 text-sm mb-1.5">Claim Amount</div>
                                  <div className="text-[15px] font-medium text-gray-800">{formatCurrency(claim.dueClaim)}</div>
                                  <div className="absolute top-1.5 right-0">
                                    <div className={`w-2.5 h-2.5 rounded-full ring-4 ${isSettled ? 'bg-[#00603b] ring-[#d0ebd6]' : 'bg-[#e21b4d] ring-[#fbe2e8]'}`}></div>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-gray-400 text-sm mb-1.5">Claim Date</div>
                                  <div className="text-[15px] font-medium text-gray-800">{formatDate(claim.claimDate)}</div>
                                </div>
                                <div>
                                  <div className="text-gray-400 text-sm mb-1.5">Status</div>
                                  <div className="text-[15px] font-medium text-gray-800 uppercase">{claim.claimStatus || '-'}</div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-10 flex flex-col items-center">
                        <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-[#F28C28]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        </div>
                        <p className="text-gray-600 font-medium mb-1">No Claims Available</p>
                      </div>
                    )}
                  </div>
                )}
                {['Premiums', 'Transactions', 'Loans'].includes(activeTab) && (
                  <div className="text-center text-gray-500 py-10 flex flex-col items-center">
                    <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-[#F28C28]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                    </div>
                    <p className="text-gray-600 font-medium mb-1">Information Not Available</p>
                    <p className="text-sm text-gray-400">Details for {activeTab} will be displayed here once available.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">No active policy information found</div>
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

export default PolicyDetailsModal;
