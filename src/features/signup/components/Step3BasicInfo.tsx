import { Calendar, User, ArrowLeft } from 'lucide-react';

interface Step3BasicInfoProps {
  firstName: string;
  setFirstName: (val: string) => void;
  lastName: string;
  setLastName: (val: string) => void;
  dateOfBirth: string;
  setDateOfBirth: (val: string) => void;
  loading: boolean;
  onSubmit: () => void;
  onBack: () => void;
}

const Step3BasicInfo = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  dateOfBirth,
  setDateOfBirth,
  loading,
  onSubmit,
  onBack,
}: Step3BasicInfoProps) => {
  const inputBase =
    'w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-brand-gray placeholder-gray-400 text-sm font-medium outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10';

  const isFormValid = firstName.trim() && lastName.trim() && dateOfBirth;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-2">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Basic Info</span>
        <span className="text-xs font-bold text-gray-400 capitalize">Step 3/4</span>
      </div>

      <div className="space-y-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
            First Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <User className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              disabled={loading}
              className={inputBase}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Last Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <User className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              disabled={loading}
              className={inputBase}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Calendar className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              disabled={loading}
              className={`${inputBase} appearance-none`}
            />
          </div>
        </div>

        <button
          onClick={onSubmit}
          disabled={loading || !isFormValid}
          className="w-full flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl py-4 shadow-md shadow-primary/30 transition-all duration-200 mt-4"
        >
          {loading ? 'Processing...' : 'Continue'}
        </button>

        <div className="flex justify-center pt-2">
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

export default Step3BasicInfo;
