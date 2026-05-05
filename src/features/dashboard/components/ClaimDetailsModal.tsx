import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Check } from 'lucide-react';
import type { Claim } from '../types';
import { useClaimDetails } from '../hooks/useClaimDetails';
import { uploadFile, fetchFileSettings } from '../../claim-submit/api/claimSubmitApi';
import type { FileSettingsResponse } from '../../claim-submit/types';

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

  const [fileSettings, setFileSettings] = useState<FileSettingsResponse | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ id: number; name: string }[]>([]);
  const [apiErrors, setApiErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const status = claimData?.claimStatus || claim?.claimStatus;
  const isDocumentsRequired = status === 'DOCUMENTS REQUIRED';

  useEffect(() => {
    if (activeTab === 'Documents' && isDocumentsRequired && !fileSettings) {
      const getFileSettings = async () => {
        try {
          const res = await fetchFileSettings(3);
          setFileSettings(res);
        } catch (err) {
          console.error(err);
        }
      };
      getFileSettings();
    }
  }, [activeTab, isDocumentsRequired, fileSettings]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length || !fileSettings) return;

    setApiErrors([]);
    setIsUploading(true);

    const newUploadedFiles = [...uploadedFiles];
    const newErrors: string[] = [];

    for (const file of files) {
      const fileSizeMB = file.size / (1024 * 1024);
      const minSizeMB = fileSettings.minFileSize / 1024;
      const maxSizeMB = fileSettings.maxFileSize / 1024;

      if (fileSizeMB < minSizeMB || fileSizeMB > maxSizeMB) {
        newErrors.push(`File ${file.name} size must be between ${minSizeMB}MB and ${maxSizeMB}MB`);
        continue;
      }

      const extension = '.' + file.name.split('.').pop()?.toLowerCase();
      const allowedExtensions = fileSettings.fileExtensions.toLowerCase();
      if (!allowedExtensions.includes(extension)) {
        newErrors.push(`Invalid file type for ${file.name}. Allowed: ${fileSettings.fileExtensions}`);
        continue;
      }

      try {
        const base64Data = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = (reader.result as string).split(',')[1];
            resolve(base64);
          };
          reader.onerror = () => reject(new Error('Failed to read file'));
          reader.readAsDataURL(file);
        });

        const res = await uploadFile({
          service: 'HiClaim',
          fileName: file.name,
          extension: extension,
          base64Data: base64Data
        });

        newUploadedFiles.push({ id: res.id, name: file.name });
      } catch (err: any) {
        newErrors.push(`Failed to upload ${file.name}: ${err?.response?.data?.message || err.message}`);
      }
    }

    setUploadedFiles(newUploadedFiles);
    if (newErrors.length > 0) setApiErrors(newErrors);
    setIsUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (id: number) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const onSubmitDocuments = async () => {
    if (uploadedFiles.length === 0) return;
    setIsSubmitting(true);
    setApiErrors([]);
    try {
      console.log('Submitted document IDs:', uploadedFiles.map(f => f.id));
      alert('Documents submitted successfully!');
      setUploadedFiles([]);
    } catch (err: any) {
      setApiErrors([err?.response?.data?.message || err.message]);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                     <div className="relative px-4 sm:px-8 mt-4 pt-2">
                        {claimData.tracking?.map((track: any, idx: number) => {
                           const isCompleted = track.date !== null;
                           const isCurrent = !isCompleted && idx > 0 && claimData.tracking[idx-1]?.date !== null;
                           const isLast = idx === claimData.tracking.length - 1;

                           return (
                             <div key={idx} className="relative flex gap-4 sm:gap-6 group">
                                {/* Timeline line segment */}
                                {!isLast && (
                                   <div 
                                     className={`absolute left-[19px] top-[30px] bottom-[-10px] w-[2px] z-0 transition-colors duration-300 ${isCompleted ? 'bg-green-600' : 'bg-gray-200'}`}
                                   ></div>
                                )}

                                {/* Icon Column */}
                                <div className="relative z-10 flex flex-col items-center w-[40px] pt-[2px]">
                                   <div className="bg-white rounded-full flex flex-col items-center justify-center">
                                     {isCompleted ? (
                                       <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shadow-md ring-[6px] ring-white">
                                         <Check className="w-5 h-5 text-white" strokeWidth={3} />
                                       </div>
                                     ) : isCurrent ? (
                                       <div className="w-[22px] h-[22px] rounded-full border-[4px] border-[#F28C28] bg-white ring-[8px] ring-white shadow-sm mt-1.5"></div>
                                     ) : (
                                       <div className="w-4 h-4 rounded-full border-[2px] border-gray-300 bg-white ring-[10px] ring-white mt-3"></div>
                                     )}
                                   </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-10">
                                   <h4 className={`text-[17px] sm:text-[18px] font-bold ${isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-400'}`}>
                                      {track.title}
                                   </h4>
                                   {(track.date || track.status) && (
                                      <div className={`text-[14px] sm:text-[15px] mt-1 tracking-wide ${isCurrent ? 'text-[#F28C28] font-bold uppercase' : 'text-gray-500'}`}>
                                         {track.date ? formatDate(track.date) : (track.status || 'PENDING')}
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
                      {isDocumentsRequired && (
                        <div className="mb-6 space-y-4">
                          <h4 className="font-semibold text-gray-800">Submit Required Documents</h4>
                          
                          {apiErrors.length > 0 && (
                            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 space-y-1">
                              {apiErrors.map((err, i) => (
                                <p key={i}>• {err}</p>
                              ))}
                            </div>
                          )}

                          <input
                            type="file"
                            multiple
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                            accept={fileSettings?.fileExtensions?.replace(/,/g, ', ')}
                          />

                          <div
                            className={`border-2 border-dashed ${isUploading ? 'border-[#F28C28] bg-orange-50' : 'border-gray-300 bg-gray-50'} rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer text-center flex flex-col items-center justify-center`}
                            onClick={() => !isUploading && fileInputRef.current?.click()}
                          >
                            {isUploading ? (
                              <div className="flex flex-col items-center">
                                <div className="w-8 h-8 border-4 border-t-[#F28C28] border-gray-200 rounded-full animate-spin mb-3" />
                                <p className="text-gray-600 font-medium">Uploading...</p>
                              </div>
                            ) : (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                <h3 className="text-gray-700 font-medium mb-1">Click to upload multiple files</h3>
                                <p className="text-xs text-gray-500">
                                  {fileSettings
                                    ? `Allowed: ${fileSettings.fileExtensions}. Max size: ${fileSettings.maxFileSize / 1024}MB.`
                                    : 'Loading requirements...'}
                                </p>
                              </>
                            )}
                          </div>

                          {uploadedFiles.length > 0 && (
                            <div className="space-y-2 mt-4">
                              <h5 className="text-sm font-medium text-gray-600">Ready to Submit ({uploadedFiles.length})</h5>
                              {uploadedFiles.map((file) => (
                                <div key={file.id} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                                  <span className="text-sm text-gray-700 truncate mr-2">{file.name}</span>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(file.id)}
                                    className="text-red-500 p-1 hover:bg-red-50 rounded-md"
                                  >
                                    <X size={16} />
                                  </button>
                                </div>
                              ))}
                              
                              <div className="pt-2">
                                <button
                                  onClick={onSubmitDocuments}
                                  disabled={isSubmitting}
                                  className="w-full bg-[#F28C28] text-white py-2.5 rounded-xl font-medium hover:bg-orange-600 transition-colors disabled:opacity-50"
                                >
                                  {isSubmitting ? 'Submitting...' : 'Submit Documents'}
                                </button>
                              </div>
                            </div>
                          )}
                          <hr className="my-6 border-gray-100" />
                        </div>
                      )}

                      <h4 className="font-semibold text-gray-800">Existing Documents</h4>
                      {claimData.documents && claimData.documents.length > 0 ? (
                        claimData.documents.map((doc: any, idx: number) => (
                           <div key={idx} className="flex justify-between items-center bg-gray-50 px-5 py-2 rounded-2xl border border-gray-100">
                             <div className="flex items-center gap-4">
                               <div className="bg-white p-3 rounded-lg text-gray-400 shadow-sm">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                               </div>
                               <div>
                                 <div className="font-medium text-[17px] text-gray-800">{doc.name || `Document ${idx + 1}`}</div>
                                 <div className="text-sm text-gray-400 uppercase">{doc.extension || 'FILE'}</div>
                               </div>
                             </div>
                             <a href={doc.documentPath}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#F28C28] hover:text-orange-600 font-medium text-sm px-5 py-2.5 bg-orange-50 rounded-xl transition-colors">
                               View
                             </a>
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
