import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface Step2OtpProps {
  identity: string;
  otp: string;
  setOtp: (val: string) => void;
  loading: boolean;
  onSubmit: () => void;
  onBack: () => void;
  onResend: () => void;
}

const Step2Otp = ({ identity, otp, setOtp, loading, onSubmit, onBack, onResend }: Step2OtpProps) => {
  const [timer, setTimer] = useState(117); // 01:57 matches screenshot roughly

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResend = () => {
    setTimer(117);
    onResend();
  };

  const inputBase =
    'w-12 h-12 text-center text-xl font-bold rounded-xl border border-gray-200 bg-gray-50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-2">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Verification</span>
        <span className="text-xs font-bold text-gray-400 capitalize">Step 2/4</span>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-brand-dark tracking-tight">Verify Mobile Number</h1>
        <p className="mt-2 text-sm text-gray-500">
          Enter the verification code sent to your {identity.includes('@') ? 'email' : 'phone number'} <span className="text-brand-dark font-medium">{identity}</span>
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between gap-2">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              value={otp[i] || ''}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d?$/.test(val)) {
                  const newOtp = otp.split('');
                  newOtp[i] = val;
                  setOtp(newOtp.join(''));
                  if (val && e.target.nextElementSibling) {
                    (e.target.nextElementSibling as HTMLInputElement).focus();
                  }
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Backspace' && !otp[i] && (e.currentTarget.previousElementSibling)) {
                  (e.currentTarget.previousElementSibling as HTMLInputElement).focus();
                }
              }}
              className={inputBase}
            />
          ))}
        </div>

        <button
          onClick={onSubmit}
          disabled={loading || otp.length < 6}
          className="w-full flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl py-4 shadow-md shadow-primary/30 transition-all duration-200"
        >
          {loading ? 'Validating...' : 'Continue'}
        </button>

        <div className="flex flex-col items-center gap-4 pt-2">
          <p className="text-sm text-gray-500">
            Didn't get OTP?{' '}
            {timer > 0 ? (
              <span className="text-gray-400">Resend Code {formatTime(timer)}</span>
            ) : (
              <button
                onClick={handleResend}
                className="text-primary font-bold hover:underline"
              >
                Resend Code
              </button>
            )}
          </p>
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-primary uppercase tracking-wider"
          >
            <ArrowLeft size={14} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2Otp;
