import { Mail, Phone, ArrowLeft, Mail as MailIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface Step1IdentityProps {
  identity: string;
  setIdentity: (val: string) => void;
  loading: boolean;
  onSubmit: () => void;
  onBack: () => void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getIdentifierIcon = (value: string): ReactNode => {
  if (!value) return <MailIcon className="w-5 h-5 text-gray-400" />;
  return EMAIL_REGEX.test(value.trim())
    ? <Mail className="w-5 h-5 text-primary" />
    : <Phone className="w-5 h-5 text-primary" />;
};

const getIdentifierLabel = (value: string): string => {
  if (!value) return 'Email or Mobile Number';
  return EMAIL_REGEX.test(value.trim()) ? 'Email Address' : 'Mobile Number';
};

const Step1Identity = ({ identity, setIdentity, loading, onSubmit, onBack }: Step1IdentityProps) => {
  const inputBase =
    'w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-brand-gray placeholder-gray-400 text-sm font-medium outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10';

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-brand-dark tracking-tight">Forgot Password</h1>
        <p className="mt-2 text-sm text-gray-500 pb-4">
          Enter your registered email or mobile number to reset your password
        </p>
      </div>

      <div className="space-y-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
            {getIdentifierLabel(identity)}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              {getIdentifierIcon(identity)}
            </span>
            <input
              type="text"
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              placeholder="Enter email or mobile number"
              disabled={loading}
              className={inputBase}
            />
          </div>
        </div>

        <button
          onClick={onSubmit}
          disabled={loading || !identity.trim()}
          className="w-full flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl py-4 shadow-md shadow-primary/30 transition-all duration-200"
        >
          {loading ? 'Sending OTP...' : 'Continue'}
        </button>

        <div className="flex justify-center pt-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1Identity;
