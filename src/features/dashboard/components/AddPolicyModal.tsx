import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Calendar, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../shared/Components/Button';
import { useAddPolicy } from '../hooks/useAddPolicy';

interface AddPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  refresh?: () => void;
}

const AddPolicyModal: React.FC<AddPolicyModalProps> = ({ isOpen, onClose, refresh }) => {
  const { 
    isLoading, 
    error, 
    contactNumber, 
    isSuccess, 
    partialSuccessMsg, 
    validatePolicy, 
    verifyOtp, 
    reset: resetApi 
  } = useAddPolicy();

  const [step, setStep] = useState<1 | 2>(1);
  const [policyNumber, setPolicyNumber] = useState('');
  const [dob, setDob] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(119); // 01:59 = 119 seconds
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset state on close
      setStep(1);
      setPolicyNumber('');
      setDob('');
      setOtp(['', '', '', '', '', '']);
      setTimer(119);
      resetApi();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Resend code timer
  useEffect(() => {
    let interval: any;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleContinueToOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await validatePolicy(policyNumber, dob);
    if (result.success) {
      setStep(2);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await verifyOtp(contactNumber || '', otp.join(''));
    if (result.success) {
      if (!result.isPartial && !result.message) {
        // Full success
        refresh?.();
        onClose();
      }
    }
  };

  const isStep1Valid = policyNumber.trim() !== '' && dob.trim() !== '';
  const isOtpComplete = otp.every((digit) => digit !== '');

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            {step === 2 && (
              <button 
                onClick={() => setStep(1)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </button>
            )}
            <h2 className="text-xl font-bold text-gray-800">
              {step === 1 ? 'Add Policy' : 'Verify Mobile Number'}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-all duration-300"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleContinueToOtp} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">
                      Policy Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Enter new policy number"
                        value={policyNumber}
                        onChange={(e) => setPolicyNumber(e.target.value)}
                        className={`w-full px-5 py-4 bg-gray-50 border rounded-2xl text-gray-800 placeholder:text-gray-300 outline-none focus:ring-4 focus:ring-[#F37021]/10 transition-all duration-300 ${error && step === 1 ? 'border-red-500' : 'border-gray-200 focus:border-[#F37021]'}`}
                        required
                        disabled={isLoading}
                      />
                    </div>
                    {error && step === 1 && (
                      <p className="mt-1.5 text-xs text-red-500 font-medium ml-1 animate-in fade-in slide-in-from-top-1">
                        {error}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">
                      Date of Birth <span className="text-red-400">*</span>
                    </label>
                    <div className="relative group">
                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className={`w-full px-5 py-4 bg-gray-50 border rounded-2xl text-gray-800 placeholder:text-gray-300 outline-none focus:ring-4 focus:ring-[#F37021]/10 transition-all duration-300 appearance-none pr-12 ${error && step === 1 ? 'border-red-500' : 'border-gray-200 focus:border-[#F37021]'}`}
                        required
                        disabled={isLoading}
                      />
                      <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-[#F28C28] pointer-events-none group-focus-within:scale-110 transition-transform duration-300" size={20} />
                    </div>
                    <p className="mt-2 text-xs text-gray-400 ml-1">Pick birth date of policy owner</p>
                  </div>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={!isStep1Valid || isLoading}
                      className="w-full relative"
                      variant="base"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Validating...</span>
                        </div>
                      ) : 'Continue'}
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Verify Mobile Number</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Enter the verification code sent to your phone number <span className="font-semibold text-gray-800">{contactNumber || 'XXXX***XXX'}</span>
                  </p>
                </div>

                <form onSubmit={handleVerifyOtp} className="space-y-10">
                  <div className="flex justify-between gap-2 sm:gap-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => { otpRefs.current[index] = el; }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className={`w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold bg-gray-50 border-2 rounded-xl outline-none transition-all duration-300 ${
                          digit !== '' 
                          ? 'border-[#F37021] text-[#F37021] bg-white shadow-md' 
                          : 'border-gray-200 text-gray-800 focus:border-[#F37021] focus:ring-4 focus:ring-[#F37021]/10'
                        } ${error && step === 2 ? 'border-red-400' : ''}`}
                        disabled={isLoading}
                      />
                    ))}
                  </div>
                  {error && step === 2 && (
                    <p className="mt-[-24px] text-xs text-red-500 font-medium text-center animate-in fade-in slide-in-from-top-1">
                      {error}
                    </p>
                  )}

                  <div className="space-y-6">
                    <Button
                      type="submit"
                      disabled={!isOtpComplete || isLoading}
                      className="w-full relative"
                      variant="base"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Verifying...</span>
                        </div>
                      ) : 'Continue'}
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-[15px]">
                      <span className="text-gray-500">Didn't get OTP?</span>
                      <button 
                        type="button"
                        disabled={timer > 0}
                        onClick={() => {
                          setTimer(119);
                          setOtp(['', '', '', '', '', '']);
                          otpRefs.current[0]?.focus();
                        }}
                        className={`font-bold transition-colors ${
                          timer > 0 ? 'text-gray-300 cursor-not-allowed' : 'text-[#F37021] hover:text-[#e46519]'
                        }`}
                      >
                        Resend Code
                      </button>
                      <span className="text-gray-600 font-mono bg-gray-100 px-2 py-0.5 rounded-md text-sm">
                        {formatTimer(timer)}
                      </span>
                    </div>
                  </div>
                </form>

                {/* Success/Partial Success Message */}
                {(isSuccess || partialSuccessMsg) && (
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`mt-12 -mx-6 -mb-6 py-4 px-6 flex items-center justify-center gap-3 text-white font-medium ${partialSuccessMsg ? 'bg-orange-600' : 'bg-[#006A4E]'}`}
                  >
                    <CheckCircle2 size={18} />
                    <span>{partialSuccessMsg || 'Policy Added Successfully'}</span>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          background: transparent;
          bottom: 0;
          color: transparent;
          cursor: pointer;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: auto;
          height: auto;
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default AddPolicyModal;
