import { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

interface Step2OtpProps {
  identity: string;
  otp: string;
  setOtp: (val: string) => void;
  loading: boolean;
  onSubmit: () => void;
  onBack: () => void;
  onResend: () => void;
  error?: string | null;
}

const Step2Otp = ({ identity, otp, setOtp, loading, onSubmit, onBack, onResend, error }: Step2OtpProps) => {
  const [timer, setTimer] = useState(119);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResend = () => {
    setTimer(119);
    setOtp('');
    onResend();
    otpRefs.current[0]?.focus();
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d?$/.test(value)) return;

    const otpArray = otp.split('');
    while (otpArray.length < 6) otpArray.push('');
    
    otpArray[index] = value;
    const newOtp = otpArray.join('').slice(0, 6);
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && (!otp[index] || otp[index] === '') && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const maskIdentity = (val: string) => {
    if (val.includes('@')) {
      const [user, domain] = val.split('@');
      return `${user.slice(0, 3)}***@${domain}`;
    }
    if (val.length <= 6) return val;
    return `${val.slice(0, 3)}***${val.slice(-3)}`;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <h2 className="text-xl font-bold text-gray-800">Verify Identity</h2>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step 2/3</span>
      </div>

      <div>
        <p className="text-gray-500 leading-relaxed">
          Enter the verification code sent to your {identity.includes('@') ? 'email' : 'phone number'}{' '}
          <span className="font-semibold text-gray-800">{maskIdentity(identity)}</span>
        </p>
      </div>

      <div className="space-y-10">
        <div className="flex justify-between gap-2 sm:gap-3">
          {[...Array(6)].map((_, index) => {
            const digit = otp[index] || '';
            return (
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
                } ${error ? 'border-red-400' : ''}`}
                disabled={loading}
              />
            );
          })}
        </div>

        <div className="space-y-6">
          <button
            onClick={onSubmit}
            disabled={loading || otp.length < 6}
            className="w-full flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl py-4 shadow-md shadow-primary/30 transition-all duration-200"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Verifying...</span>
              </div>
            ) : 'Verify & Continue'}
          </button>

          <div className="flex items-center justify-center gap-2 text-[15px]">
            <span className="text-gray-500">Didn't get OTP?</span>
            <button 
              type="button"
              disabled={timer > 0}
              onClick={handleResend}
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

          <div className="flex justify-center">
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-primary uppercase tracking-wider transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2Otp;
