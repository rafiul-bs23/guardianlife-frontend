import { Eye, EyeOff, Lock, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';

interface Step3ResetPasswordProps {
  password: string;
  setPassword: (val: string) => void;
  confirmPassword: string;
  setConfirmPassword: (val: string) => void;
  showPassword: boolean;
  toggleShowPassword: () => void;
  loading: boolean;
  onSubmit: () => void;
  onBack: () => void;
}

const Step3ResetPassword = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  showPassword,
  toggleShowPassword,
  loading,
  onSubmit,
  onBack,
}: Step3ResetPasswordProps) => {
  const inputBase =
    'w-full pl-12 pr-12 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-brand-gray placeholder-gray-400 text-sm font-medium outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10';

  const rules = [
    { label: 'At least 8 characters', valid: password.length >= 8 },
    { label: 'At least 1 capital letter (A-Z)', valid: /[A-Z]/.test(password) },
    { label: 'At least 1 small letter (a-z)', valid: /[a-z]/.test(password) },
    { label: 'At least 1 Digit (0-9)', valid: /\d/.test(password) },
    { label: 'At least 1 special character (@, $, &, #, !, *, %)', valid: /[@$&#!*%]/.test(password) },
  ];

  const allRulesValid = rules.every(r => r.valid);
  const passwordsMatch = password && password === confirmPassword;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <h2 className="text-xl font-bold text-gray-800">New Password</h2>
        <span className="text-xs font-bold text-gray-400 capitalize">Step 3/3</span>
      </div>

      <div className="space-y-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
            New Password
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Lock className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              disabled={loading}
              className={inputBase}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Password Rules */}
        <div className="space-y-2 py-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-gray-500">Security Requirement</span>
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            {rules.map((rule, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {rule.valid ? (
                  <CheckCircle2 size={14} className="text-green-500" />
                ) : (
                  <XCircle size={14} className="text-gray-300" />
                )}
                <span className={`text-xs ${rule.valid ? 'text-gray-700' : 'text-gray-400'}`}>
                  {rule.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Confirm New Password
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Lock className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              disabled={loading}
              className={inputBase}
            />
          </div>
          {confirmPassword && !passwordsMatch && (
            <p className="text-[10px] text-red-500 font-bold uppercase mt-1">Passwords do not match</p>
          )}
        </div>

        <button
          onClick={onSubmit}
          disabled={loading || !allRulesValid || !passwordsMatch}
          className="w-full flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl py-4 shadow-md shadow-primary/30 transition-all duration-200 mt-4"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Resetting...</span>
            </div>
          ) : 'Reset Password'}
        </button>

        <div className="flex justify-center pt-2">
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
  );
};

export default Step3ResetPassword;
