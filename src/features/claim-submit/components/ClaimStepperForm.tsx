import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import type { Policy } from '../../dashboard/types';
import { fetchMemberInfo, fetchHospitalAreaList, fetchHospitalList, fetchFileSettings, uploadFile, submitHiClaim, submitGopClaim } from '../api/claimSubmitApi';
import type { MemberInfoResponse, HospitalItem, FileSettingsResponse } from '../types';
import { parseApiError } from '../../../shared/utils/api-error-handler';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ClaimFormData {
  memberId: string;
  claimTypeId: number | string;
  admissionDate: string;
  dischargeDate: string;
  treatmentDate: string;
  mobileNumber: string;
  area: string;
  hospitalId: string | number;
  physicianName: string;
  cabinNo: string
  claimedAmount: string | number;
  admissionReason: string;
  claimDocuments: number[];
}

interface ClaimStepperFormProps {
  isOpen: boolean;
  onClose: () => void;
  policy: Policy | null;
}

const ClaimStepperForm: React.FC<ClaimStepperFormProps> = ({ isOpen, onClose, policy }) => {
  const { type } = useParams<{ type: string }>();
  const [step, setStep] = useState(1);
  const [memberInfo, setMemberInfo] = useState<MemberInfoResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [apiErrors, setApiErrors] = useState<string[]>([]);

  const [areas, setAreas] = useState<string[]>([]);
  const [loadingAreas, setLoadingAreas] = useState(false);
  const [hospitals, setHospitals] = useState<HospitalItem[]>([]);
  const [loadingHospitals, setLoadingHospitals] = useState(false);
  const [areaSearch, setAreaSearch] = useState('');
  const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false);
  const [hospitalSearch, setHospitalSearch] = useState('');
  const [isHospitalDropdownOpen, setIsHospitalDropdownOpen] = useState(false);

  const [fileSettings, setFileSettings] = useState<FileSettingsResponse | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [uploadedFiles, setUploadedFiles] = useState<{ id: number; name: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, watch, setValue, formState: { errors: formErrors }, trigger, reset } = useForm<ClaimFormData>({
    defaultValues: {
      memberId: '',
      claimTypeId: '',
      admissionDate: '',
      dischargeDate: '',
      treatmentDate: '',
      mobileNumber: '',
      area: '',
      hospitalId: '',
      physicianName: '',
      cabinNo: '',
      claimedAmount: '',
      admissionReason: '',
      claimDocuments: [],
    }
  });

  const watchAdmissionDate = watch('admissionDate');
  const watchMemberId = watch('memberId');
  const watchClaimTypeId = watch('claimTypeId');
  const watchArea = watch('area');
  const watchHospitalId = watch('hospitalId');

  const getFormattedDate = (daysOffset = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);
    return date.toISOString().split('T')[0];
  };

  const today = getFormattedDate(0);
  const next7Days = getFormattedDate(7);

  useEffect(() => {
    if (type !== 'cashless-payment' && step === 1) {
      setValue('dischargeDate', '');
    }
  }, [watchAdmissionDate, type, step, setValue]);

  const selectedPatient = memberInfo?.members.find(m => String(m.id) === String(watchMemberId)) || null;
  const selectedClaimType = selectedPatient?.claimTypes.find(ct => String(ct.id) === String(watchClaimTypeId)) || null;

  const isClaimSubmission = type !== 'cashless-payment';
  const isIPD = selectedClaimType?.name === 'IPD';
  const isOPD = selectedClaimType?.name === 'OPD';

  const isAreaRequired = !isClaimSubmission || (!(isIPD || isOPD));
  const isHospitalRequired = !isClaimSubmission || (!(isIPD || isOPD));
  const isPhysicianRequired = isClaimSubmission && !isIPD;

  useEffect(() => {
    if (step === 2 && areas.length === 0) {
      const getAreas = async () => {
        setLoadingAreas(true);
        try {
          const res = await fetchHospitalAreaList(type === 'cashless-payment');
          setAreas(res);
        } catch (err) {
          setApiErrors(parseApiError(err));
        } finally {
          setLoadingAreas(false);
        }
      };
      getAreas();
    }
  }, [step, type, areas.length]);

  useEffect(() => {
    if (watchArea) {
      const getHospitals = async () => {
        setLoadingHospitals(true);
        try {
          const res = await fetchHospitalList(type === 'cashless-payment', watchArea);
          setHospitals(res);
          // Only clear if the selected hospital is not in the new list (basic check)
        } catch (err) {
          setApiErrors(parseApiError(err));
        } finally {
          setLoadingHospitals(false);
        }
      };
      getHospitals();
    } else {
      setHospitals([]);
    }
  }, [watchArea, type]);

  const filteredAreas = areas.filter(a =>
    a.toLowerCase().includes(areaSearch.toLowerCase())
  );

  const filteredHospitals = hospitals.filter(h =>
    h.name.toLowerCase().includes(hospitalSearch.toLowerCase())
  );

  const selectedHospitalName = hospitals.find(h => String(h.id) === String(watchHospitalId))?.name || '';

  useEffect(() => {
    if (step === 3 && !fileSettings) {
      const getFileSettings = async () => {
        try {
          // Feature 2 for GOP (Cashless), 3 for HIClaim (Submission)
          const featureId = type === 'cashless-payment' ? 2 : 3;
          const res = await fetchFileSettings(featureId);
          setFileSettings(res);
        } catch (err) {
          setApiErrors(parseApiError(err));
        }
      };
      getFileSettings();
    }
  }, [step, type, fileSettings]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !fileSettings) return;

    // Clear previous errors
    setApiErrors([]);

    // Validate size
    const fileSizeMB = file.size / (1024 * 1024);
    const minSizeMB = fileSettings.minFileSize / 1024;
    const maxSizeMB = fileSettings.maxFileSize / 1024;

    if (fileSizeMB < minSizeMB || fileSizeMB > maxSizeMB) {
      setApiErrors([`File size must be between ${minSizeMB}MB and ${maxSizeMB}MB`]);
      return;
    }

    // Validate extension
    const extension = '.' + file.name.split('.').pop()?.toLowerCase();
    const allowedExtensions = fileSettings.fileExtensions.toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      setApiErrors([`Invalid file type. Allowed: ${fileSettings.fileExtensions}`]);
      return;
    }

    setIsUploading(true);
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
        service: fileSettings.feature,
        fileName: file.name,
        extension: extension,
        base64Data: base64Data
      });

      const currentDocs = watch('claimDocuments') || [];
      setValue('claimDocuments', [...currentDocs, res.id]);
      setUploadedFiles(prev => [...prev, { id: res.id, name: file.name }]);
    } catch (err) {
      setApiErrors(parseApiError(err));
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removeFile = (id: number) => {
    const currentDocs = watch('claimDocuments') || [];
    setValue('claimDocuments', currentDocs.filter(docId => docId !== id));
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  useEffect(() => {
    if (isOpen && policy?.policyNumber) {
      const getInfo = async () => {
        setLoading(true);
        setApiErrors([]);
        try {
          const res = await fetchMemberInfo(policy.policyNumber);
          setMemberInfo(res);
          if (res.members.length > 0) {
            const firstMember = res.members[0];
            setValue('memberId', String(firstMember.id));

            if (firstMember.claimTypes.length > 0) {
              const types = firstMember.claimTypes;
              const initialType = type === 'cashless-payment'
                ? types.find(t => t.name !== 'OPD') || types[0]
                : types[0];
              setValue('claimTypeId', initialType.id);
            }
          }
        } catch (err) {
          setApiErrors(parseApiError(err));
        } finally {
          setLoading(false);
        }
      };
      getInfo();
    } else if (!isOpen) {
      setStep(1);
      setMemberInfo(null);
      setApiErrors([]);
      setSubmissionStatus('idle');
      setUploadedFiles([]);
      reset();
    }
  }, [isOpen, policy?.policyNumber, type, setValue, reset]);

  if (!isOpen || !policy) return null;

  const nextStep = async () => {
    let fieldsToValidate: (keyof ClaimFormData)[] = [];
    if (step === 1) {
      fieldsToValidate = ['memberId', 'claimTypeId'];
      if (type === 'cashless-payment') {
        fieldsToValidate.push('admissionDate', 'mobileNumber');
      } else {
        if (selectedClaimType?.name === 'OPD') {
          fieldsToValidate.push('treatmentDate');
        } else {
          fieldsToValidate.push('admissionDate', 'dischargeDate');
        }
      }
    } else if (step === 2) {
      if (isAreaRequired) fieldsToValidate.push('area');
      if (isHospitalRequired) fieldsToValidate.push('hospitalId');
      
      if (isClaimSubmission) {
        if (isPhysicianRequired) fieldsToValidate.push('physicianName');
        fieldsToValidate.push('claimedAmount');
      }
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid && step < 3) {
      setStep(step + 1);
      setApiErrors([]); // Clear errors when moving forward
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setApiErrors([]); // Clear errors when moving back
    }
    else onClose();
  };

  const onFinalSubmit = async (data: ClaimFormData) => {
    setIsSubmitting(true);
    try {
      if (type === 'cashless-payment') {
        // GOP Submission Mapping
        const payload = {
          policyNo: policy.policyNumber,
          memberId: String(data.memberId), // String in GOP
          claimType: String(data.claimTypeId), // String in GOP
          treatmentDate: data.admissionDate, // Admission/Treatment Date
          hospitalId: Number(data.hospitalId),
          cabinOrBedNo: data.cabinNo || 'N/A', // cabinOrBedNO in curl example
          contactNo: data.mobileNumber,
          admissionReason: data.admissionReason || 'test',
          claimDocuments: data.claimDocuments
        };
        await submitGopClaim(payload as any);
      } else {
        // HI Claim Submission Mapping
        const payload = {
          policyNumber: policy.policyNumber,
          memberId: Number(data.memberId), // Numeric in HI
          claimType: Number(data.claimTypeId), // Numeric in HI
          treatmentDate: selectedClaimType?.name === 'OPD' ? data.treatmentDate : data.admissionDate,
          dischargeDate: (selectedClaimType?.name === 'OPD' ? data.treatmentDate : data.dischargeDate) || data.admissionDate,
          claimCategory: selectedClaimType?.name || 'OPD',
          claimedAmount: Number(data.claimedAmount),
          hospitalId: Number(data.hospitalId),
          physicianName: data.physicianName,
          cabinNo: data.cabinNo || 'N/A',
          claimDocuments: data.claimDocuments
        };
        await submitHiClaim(payload);
      }
      setSubmissionStatus('success');
    } catch (err) {
      setApiErrors(parseApiError(err));
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6" style={{ zIndex: 99999 }}>
      <div className="w-full max-w-md bg-[#16171d] rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <button onClick={prevStep} className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold text-white">Claim Submission</h2>
          <button onClick={onClose} className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Info */}
        <div className="px-6 py-4 flex justify-between items-center">
          <span className="text-gray-300 font-medium">
            {step === 1 ? 'Basic Info' : step === 2 ? 'Info' : 'Upload Documents'}
          </span>
          <span className="text-gray-400 text-sm">Step {step} / 3</span>
        </div>

        {/* Progress Bar */}
        <div className="px-6 w-full flex bg-gray-800 h-1 mb-4">
          <div className="h-full bg-[#F37021] transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }} />
        </div>

        {/* Error Banner */}
        {apiErrors.length > 0 && (
          <div className="mx-6 mb-4 p-4 bg-red-500/10 border border-red-500/50 rounded-xl animate-fadeIn">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-red-500 mb-1">Status Error</h4>
                <div className="space-y-1">
                  {apiErrors.map((err: string, i: number) => (
                    <p key={i} className="text-xs text-red-400 font-medium leading-relaxed">
                      • {err}
                    </p>
                  ))}
                </div>
              </div>
              <button onClick={() => setApiErrors([])} className="text-red-500/50 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5 custom-scrollbar">
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              {loading ? (
                <div className="text-center py-10 text-gray-400">Loading member info...</div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Patient</label>
                    <div className="space-y-2">
                      {memberInfo?.members.map((m) => (
                        <div
                          key={m.policyNo}
                          className={`p-4 rounded-xl border ${watchMemberId === m.policyNo ? 'border-[#F37021] bg-[#1a1512]' : 'border-gray-700 bg-[#1f2128]'} flex items-center cursor-pointer transition-all`}
                          onClick={() => {
                            setValue('memberId', String(m.id));
                            if (m.claimTypes.length > 0) {
                              const initialType = type === 'cashless-payment'
                                ? m.claimTypes.find(t => t.name !== 'OPD') || m.claimTypes[0]
                                : m.claimTypes[0];
                              setValue('claimTypeId', initialType.id);
                            }
                          }}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${String(watchMemberId) === String(m.id) ? 'border-[#F37021]' : 'border-gray-500'}`}>
                            {String(watchMemberId) === String(m.id) && <div className="w-2.5 h-2.5 bg-[#F37021] rounded-full" />}
                          </div>
                          <div>
                            <div className="text-white font-medium">{m.memberName}</div>
                            <div className="text-gray-400 text-xs mt-0.5">{m.relation}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {policy.segment === 'GROUP' ? (
                    <>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Member ID</label>
                        <input
                          type="text"
                          readOnly
                          value={selectedPatient?.policyNo || ''}
                          className="w-full bg-[#1b1c23] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-gray-500 cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Organization</label>
                        <input
                          type="text"
                          readOnly
                          value={memberInfo?.organization || ''}
                          className="w-full bg-[#1b1c23] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-gray-500 cursor-not-allowed"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Policy no</label>
                        <input
                          type="text"
                          readOnly
                          value={policy.policyNumber}
                          className="w-full bg-[#1b1c23] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-gray-500 cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Policy name</label>
                        <input
                          type="text"
                          readOnly
                          value={policy.planName}
                          className="w-full bg-[#1b1c23] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-gray-500 cursor-not-allowed"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Claim Type</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedPatient?.claimTypes
                        .filter(ct => type === 'cashless-payment' ? ct.name !== 'OPD' : true)
                        .map((ct) => (
                          <button
                            key={ct.id}
                            type="button"
                            onClick={() => setValue('claimTypeId', ct.id)}
                            className={`flex-1 min-w-[100px] py-3 rounded-lg font-medium transition-colors ${String(watchClaimTypeId) === String(ct.id) ? 'bg-[#F37021] text-white' : 'bg-[#1b1c23] border border-gray-700 text-gray-300'}`}
                          >
                            {ct.name}
                          </button>
                        ))
                      }
                    </div>
                  </div>

                  {type === 'cashless-payment' ? (
                    <>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Admission/Treatment Date <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <input
                            type="date"
                            {...register('admissionDate', { required: true })}
                            min={today}
                            max={next7Days}
                            className={`w-full bg-transparent border ${formErrors.admissionDate ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-[#F37021] z-10 relative appearance-none date-input-custom`}
                            style={{ colorScheme: 'dark' }}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Mobile Number <span className="text-red-500">*</span></label>
                        <input
                          type="tel"
                          placeholder="+880"
                          {...register('mobileNumber', { required: true })}
                          className={`w-full bg-transparent border ${formErrors.mobileNumber ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-[#F37021]`}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {selectedClaimType?.name === 'OPD' ? (
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Treatment Date <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <input
                              type="date"
                              {...register('treatmentDate', { required: true })}
                              max={today}
                              className={`w-full bg-transparent border ${formErrors.treatmentDate ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-[#F37021] z-10 relative appearance-none date-input-custom`}
                              style={{ colorScheme: 'dark' }}
                            />
                          </div>
                        </div>
                      ) : (
                        <>
                          <div>
                            <label className="block text-sm text-gray-400 mb-2">Admission Date <span className="text-red-500">*</span></label>
                            <div className="relative">
                              <input
                                type="date"
                                {...register('admissionDate', { required: true })}
                                max={today}
                                className={`w-full bg-transparent border ${formErrors.admissionDate ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-[#F37021] z-10 relative appearance-none date-input-custom`}
                                style={{ colorScheme: 'dark' }}
                              />
                            </div>
                          </div>
                          <div>
                            <label className={`block text-sm ${!watchAdmissionDate ? 'text-gray-600' : 'text-gray-400'} mb-2`}>Discharge Date <span className="text-red-500">*</span></label>
                            <div className="relative">
                              <input
                                type="date"
                                {...register('dischargeDate', { required: true })}
                                disabled={!watchAdmissionDate}
                                min={watchAdmissionDate}
                                max={today}
                                className={`w-full bg-transparent border ${formErrors.dischargeDate ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-[#F37021] z-10 relative appearance-none date-input-custom ${!watchAdmissionDate ? 'opacity-50 cursor-not-allowed' : ''}`}
                                style={{ colorScheme: 'dark' }}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Area{isAreaRequired && <span className="text-red-500">*</span>}</label>
                <div className="relative">
                  <div
                    className={`w-full bg-[#1b1c23] border ${formErrors.area ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white cursor-pointer flex justify-between items-center transition-all`}
                    onClick={() => !loadingAreas && setIsAreaDropdownOpen(!isAreaDropdownOpen)}
                  >
                    <span className={watchArea ? 'text-white' : 'text-gray-500'}>
                      {loadingAreas ? 'Loading areas...' : watchArea || 'Select area'}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {isAreaDropdownOpen && (
                    <div className="absolute z-50 mt-1 w-full bg-[#1f2128] border border-gray-700 rounded-lg shadow-xl overflow-hidden flex flex-col">
                      <div className="p-2 border-b border-gray-700 bg-[#1b1c23]">
                        <input
                          type="text"
                          autoFocus
                          placeholder="Search area..."
                          className="w-full bg-transparent p-2 text-white text-sm focus:outline-none"
                          value={areaSearch}
                          onChange={(e) => setAreaSearch(e.target.value)}
                        />
                      </div>
                      <div className="max-h-60 overflow-y-auto custom-scrollbar">
                        {filteredAreas.length > 0 ? (
                          filteredAreas.map(area => (
                            <div
                              key={area}
                              className="px-4 py-3 text-sm text-gray-300 hover:bg-[#F37021] hover:text-white cursor-pointer transition-colors"
                              onClick={() => {
                                setValue('area', area);
                                setIsAreaDropdownOpen(false);
                                setAreaSearch('');
                                // Reset hospital when area changes
                                setValue('hospitalId', '');
                              }}
                            >
                              {area}
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-sm text-gray-500">No areas found</div>
                        )}
                      </div>
                    </div>
                  )}
                  {/* Invisible input for rhf registration */}
                  <input type="hidden" {...register('area', { required: isAreaRequired })} />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Hospital{isHospitalRequired && <span className="text-red-500">*</span>}</label>
                <div className="relative">
                  <div
                    className={`w-full bg-[#1b1c23] border ${formErrors.hospitalId ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white cursor-pointer flex justify-between items-center`}
                    onClick={() => !loadingHospitals && watchArea && setIsHospitalDropdownOpen(!isHospitalDropdownOpen)}
                  >
                    <span className={selectedHospitalName ? 'text-white' : 'text-gray-500'}>
                      {loadingHospitals ? 'Loading hospitals...' : selectedHospitalName || 'Select hospital'}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {isHospitalDropdownOpen && (
                    <div className="absolute z-50 mt-1 w-full bg-[#1f2128] border border-gray-700 rounded-lg shadow-xl overflow-hidden flex flex-col">
                      <div className="p-2 border-b border-gray-700 bg-[#1b1c23]">
                        <input
                          type="text"
                          autoFocus
                          placeholder="Search hospital..."
                          className="w-full bg-transparent p-2 text-white text-sm focus:outline-none"
                          value={hospitalSearch}
                          onChange={(e) => setHospitalSearch(e.target.value)}
                        />
                      </div>
                      <div className="max-h-60 overflow-y-auto custom-scrollbar">
                        {filteredHospitals.length > 0 ? (
                          filteredHospitals.map(hospital => (
                            <div
                              key={hospital.id}
                              className="px-4 py-3 text-sm text-gray-300 hover:bg-[#F37021] hover:text-white cursor-pointer transition-colors"
                              onClick={() => {
                                setValue('hospitalId', hospital.id);
                                setIsHospitalDropdownOpen(false);
                                setHospitalSearch('');
                              }}
                            >
                              {hospital.name}
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-sm text-gray-500">No hospitals found</div>
                        )}
                      </div>
                    </div>
                  )}
                  {/* Invisible input for rhf registration */}
                  <input type="hidden" {...register('hospitalId', { required: isHospitalRequired })} />
                </div>
                {!watchArea && <p className="mt-1 text-xs text-amber-500/80">Please select an area first</p>}
              </div>

              {type === 'cashless-payment' ? (
                <>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Bed Number (optional)</label>
                    <input
                      type="text"
                      placeholder="Enter Bed Number"
                      {...register('cabinNo')}
                      className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#F37021]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Cause of Admission (optional)</label>
                    <textarea
                      placeholder="Enter Cause of Admission"
                      {...register('admissionReason')}
                      className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#F37021] h-24"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Physician/Doctor Name {isPhysicianRequired && <span className="text-red-500">*</span>}</label>
                    <input
                      type="text"
                      placeholder="Enter Physician/Doctor Name"
                      {...register('physicianName', { required: isPhysicianRequired })}
                      className={`w-full bg-transparent border ${formErrors.physicianName ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-[#F37021]`}
                    />
                  </div>

                  {selectedClaimType?.name === 'MATERNITY' && (
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Bed/Cabin Number <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="Enter Cabin Number"
                        {...register('cabinNo', { required: true })}
                        className={`w-full bg-transparent border ${formErrors.cabinNo ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-[#F37021]`}
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Claim Amount <span className="text-red-500">*</span></label>
                    <input
                      type="number"
                      placeholder="Enter Claim Amount"
                      {...register('claimedAmount', { required: true, min: 1 })}
                      className={`w-full bg-transparent border ${formErrors.claimedAmount ? 'border-red-500' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-[#F37021]`}
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                accept={fileSettings?.fileExtensions?.replace(/,/g, ', ')}
              />

              <div
                className={`border-2 border-dashed ${isUploading ? 'border-[#F37021] bg-[#1a1512]' : 'border-gray-600 bg-[#1e1f26]'} rounded-xl p-8 hover:bg-[#252630] transition-colors cursor-pointer text-center flex flex-col items-center justify-center`}
                onClick={() => !isUploading && fileInputRef.current?.click()}
              >
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 border-4 border-t-[#F37021] border-gray-700 rounded-full animate-spin mb-4" />
                    <p className="text-white text-lg font-medium">Uploading...</p>
                  </div>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <h3 className="text-white text-lg font-medium mb-2">Upload a file</h3>
                    <p className="text-sm text-gray-500 max-w-[250px] mx-auto">
                      {fileSettings
                        ? `Upload ${fileSettings.fileExtensions}. Max size ${fileSettings.maxFileSize / 1024}MB.`
                        : 'Loading requirements...'}
                    </p>
                  </>
                )}
              </div>

              {uploadedFiles.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-medium text-gray-400">Successfully Uploaded ({uploadedFiles.length})</h4>
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-gray-200 truncate">{file.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(file.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors p-1"
                        aria-label="Remove file"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-gray-800">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={step === 3 ? handleSubmit(onFinalSubmit) : nextStep}
            className={`w-full py-4 ${isSubmitting ? 'bg-gray-700 cursor-not-allowed' : 'bg-[#F37021] hover:bg-[#d6601b]'} text-white font-medium rounded-xl transition-colors text-lg flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-t-white border-white/20 rounded-full animate-spin mr-3" />
                Submitting...
              </>
            ) : (
              step === 3 ? 'Submit' : 'Continue'
            )}
          </button>
        </div>
      </div>

      {/* Professional Status Popup */}
      {submissionStatus !== 'idle' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fadeIn"
            onClick={() => submissionStatus === 'error' && setSubmissionStatus('idle')}
          />

          {/* Status Modal Container */}
          <div className="relative z-10 bg-[#121418] border border-gray-800 rounded-3xl shadow-2xl p-8 sm:p-10 max-w-sm w-full flex flex-col items-center gap-6 animate-scaleUp">
            {submissionStatus === 'success' ? (
              <>
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-white tracking-tight">Submission Completed</h2>
                  <p className="text-sm text-gray-400">
                    Your claim request has been successfully received. Our team will review the documents and notify you shortly.
                  </p>
                </div>

                <div className="w-full h-px bg-gray-800/50 mt-2" />

                <button
                  onClick={onClose}
                  className="w-full py-4 rounded-2xl bg-[#F37021] text-white font-bold text-base hover:bg-[#FF7D35] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#F37021]/20"
                >
                  Done
                </button>
              </>
            ) : (
              <>
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                    <XCircle className="w-10 h-10 text-red-500" />
                  </div>
                  <div className="absolute -inset-2 bg-red-500/20 rounded-full blur-xl animate-pulse" />
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-white tracking-tight">Submission Failed</h2>
                  <p className="text-sm text-gray-400">
                    We encountered an error while processing your request. Please check your data and try again.
                  </p>
                </div>

                <div className="w-full h-px bg-gray-800/50 mt-2" />

                <div className="flex gap-3 w-full">
                  <button
                    onClick={() => setSubmissionStatus('idle')}
                    className="flex-1 py-4 rounded-2xl bg-gray-800 text-white font-bold text-base hover:bg-gray-700 transition-all active:scale-[0.98]"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={() => {
                      setSubmissionStatus('idle');
                      handleSubmit(onFinalSubmit)();
                    }}
                    className="flex-1 py-4 rounded-2xl bg-[#F37021] text-white font-bold text-base hover:bg-[#FF7D35] transition-all active:scale-[0.98] shadow-lg shadow-[#F37021]/20"
                  >
                    Try Again
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-scaleUp {
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #374151;
          border-radius: 20px;
        }
      `}</style>
    </div>,
    document.body
  );
};

export default ClaimStepperForm;
