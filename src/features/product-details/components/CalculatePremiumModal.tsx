import React, { useState, useEffect } from 'react';
import { X, Info, Check } from 'lucide-react';
import PremiumDetailsModal from './PremiumDetailsModal';
import Button from "../../../shared/Components/Button.tsx";

interface CalculatePremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalculatePremiumModal: React.FC<CalculatePremiumModalProps> = ({ isOpen, onClose }) => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');

  const [mode, setMode] = useState('Yearly');
  const [term, setTerm] = useState(20);

  const [sumAssured, setSumAssured] = useState('');

  const [hiEnabled, setHiEnabled] = useState(false);
  const [hiOption, setHiOption] = useState('BRONZE');
  const [hiBeneficiary, setHiBeneficiary] = useState('Self');
  const [spouseDob, setSpouseDob] = useState('');
  const [spouseAge, setSpouseAge] = useState('');
  const [childrenCount, setChildrenCount] = useState('');
  const [maternityPlan, setMaternityPlan] = useState('Standard');

  const [ciEnabled, setCiEnabled] = useState(false);
  const [ciOption, setCiOption] = useState('50%');

  const [pdabEnabled, setPdabEnabled] = useState(false);
  const [diabEnabled, setDiabEnabled] = useState(false);

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

  const handleClose = () => {
    setIsProcessed(false);
    onClose();
  };

  if (!isOpen) return null;

  const isSumAssuredFilled = parseFloat(sumAssured.replace(/,/g, '')) > 0;

  const calculateCeilAge = (dateString: string) => {
    if (!dateString) return '';
    const dobDate = new Date(dateString);
    const now = new Date();
    if (isNaN(dobDate.getTime()) || now < dobDate) return '';

    let years = now.getFullYear() - dobDate.getFullYear();

    // Check if we are past the birthday this year
    if (
      now.getMonth() > dobDate.getMonth() ||
      (now.getMonth() === dobDate.getMonth() && now.getDate() > dobDate.getDate())
    ) {
      years++;
    }

    return years.toString();
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDob(val);
    setAge(calculateCeilAge(val));
  };

  const handleSpouseDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSpouseDob(val);
    setSpouseAge(calculateCeilAge(val));
  };

  const handleToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>, currentValue: boolean, isPdab: boolean = false, isDiab: boolean = false) => {
    if (!isSumAssuredFilled) return; // cannot turn on if sum assured is empty

    const newValue = !currentValue;
    setter(newValue);

    // Mutual exclusivity
    if (newValue) {
      if (isPdab) setDiabEnabled(false);
      if (isDiab) setPdabEnabled(false);
    }
  };

  const handleSumAssuredChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Basic number formatter for BDT
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    if (rawValue) {
      const formatted = new Intl.NumberFormat('en-IN').format(Number(rawValue));
      setSumAssured(formatted);
    } else {
      setSumAssured('');
      // Reset toggles when empty
      setHiEnabled(false);
      setCiEnabled(false);
      setPdabEnabled(false);
      setDiabEnabled(false);
    }
  };

  interface OptionButtonProps {
    label: string | number;
    selected: boolean;
    onClick: () => void;
    activeClass?: string;
    inactiveClass?: string;
  }

  const OptionButton = ({ label, selected, onClick, activeClass = 'bg-[#F37021] text-white border-[#F37021]', inactiveClass = 'bg-white text-gray-700 border-gray-300 hover:border-[#F37021]' }: OptionButtonProps) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${selected ? activeClass : inactiveClass}`}
    >
      {label}
    </button>
  );

  return (
    <>
      <div className={`fixed inset-0 z-[99999] flex justify-center items-start overflow-y-auto bg-black/40 backdrop-blur-sm p-4 sm:p-6 lg:p-10 ${isDetailsModalOpen ? 'hidden' : ''}`}>
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-[1428px] mx-auto p-6 sm:p-8 lg:p-12">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 transition-colors"
          >
            <X size={27} />
          </button>

          <div className="mb-8">
            <p className="text-sm text-gray-500 font-medium mb-1">Calculate</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">GUARDIAN 3 STAGE PLAN</h2>
            <div className="h-px bg-orange-200 w-full mt-4"></div>
          </div>

          <div className="space-y-8">
            {/* Row 1: Name, Phone, Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-1 focus:ring-[#F37021] focus:border-[#F37021] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone <span className="text-red-500">*</span></label>
                <input type="tel" placeholder="01XXXXXXXXX" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-1 focus:ring-[#F37021] focus:border-[#F37021] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-1 focus:ring-[#F37021] focus:border-[#F37021] outline-none" />
              </div>
            </div>

            {/* Row 2: Date of Birth, Age, Gender */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input type="date" placeholder="DD/MM/YY" value={dob} onChange={handleDobChange} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-1 focus:ring-[#F37021] focus:border-[#F37021] outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                <input type="text" placeholder="0" value={age} disabled className="w-full border border-gray-300 rounded-md px-4 py-2.5 bg-gray-50 text-gray-500 cursor-not-allowed outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender <span className="text-red-500">*</span></label>
                <select value={gender} onChange={e => setGender(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-1 focus:ring-[#F37021] focus:border-[#F37021] outline-none bg-white">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            {/* Process Button */}
            {!isProcessed && (
              <div className="flex justify-center pt-4">
                <Button
                  label="Process"
                  onClick={() => setIsProcessed(true)}
                />
              </div>
            )}

            {isProcessed && (
              <>
                {/* Mode Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Mode</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Yearly', 'Half-Yearly', 'Quarterly', 'Monthly'].map(m => (
                      <OptionButton key={m} label={m} selected={mode === m} onClick={() => setMode(m)} />
                    ))}
                  </div>
                </div>

                {/* Term Slider */}
                <div className="pt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-6">Term</label>
                  <div className="relative pt-8 pb-4">
                    {/* Tick Labels */}
                    <div className="absolute top-0 w-full flex justify-between px-2">
                      {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(t => (
                        <span key={t} className={`text-[11px] font-bold ${t === term ? 'text-[#F37021] opacity-0' : 'text-gray-300'}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Selected Indicator */}
                    <div
                      className="absolute top-0 flex flex-col items-center -translate-x-1/2 transition-all duration-150 pointer-events-none"
                      style={{
                        left: `calc(14px + (${((term - 10) / 15) * 100}% - ${((term - 10) / 15) * 28}px))`
                      }}
                    >
                      <span className="text-[11px] font-extrabold text-[#1E3161] whitespace-nowrap mb-1 uppercase">
                        {term} YEARS
                      </span>
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#F37021]"></div>
                    </div>

                    <input
                      type="range"
                      min="10"
                      max="25"
                      value={term}
                      onChange={(e) => setTerm(parseInt(e.target.value))}
                      className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #F37021 0%, #F37021 ${((term - 10) / 15) * 100}%, #E5E7EB ${((term - 10) / 15) * 100}%, #E5E7EB 100%)`
                      }}
                    />
                  </div>
                </div>

                {/* Sum Assured */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sum Assured</label>
                  <div className="relative max-w-full">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-gray-900 font-medium"></span>
                    </div>
                    <input
                      type="text"
                      placeholder="0"
                      value={sumAssured}
                      onChange={handleSumAssuredChange}
                      className="w-full border border-gray-300 rounded-md py-3 pl-8 pr-4 text-center font-semibold text-lg focus:ring-1 focus:ring-[#F37021] focus:border-[#F37021] outline-none"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">(50000 - 1000000)</p>
                </div>

                {/* Health Insurance Section */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-800">Health Insurance (HI)</h3>
                    <button
                      onClick={() => handleToggle(setHiEnabled, hiEnabled)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${hiEnabled ? 'bg-[#F37021]' : 'bg-gray-300'} ${!isSumAssuredFilled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full flex items-center justify-center transform transition-transform duration-200 ease-in-out ${hiEnabled ? 'translate-x-6' : 'translate-x-0'}`}>
                        {hiEnabled && <Check size={10} className="text-[#F37021]" />}
                      </div>
                    </button>
                  </div>

                  {hiEnabled && (
                    <div className="space-y-6 pt-2">
                      {/* HI Options */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { name: 'BRONZE', value: '50,000', color: '#D28E5D' },
                          { name: 'SILVER', value: '150,000', color: '#B0B6BA' },
                          { name: 'GOLD', value: '300,000', color: '#FBB03B' },
                          { name: 'PLATINUM', value: '500,000', color: '#6F7678' }
                        ].map(opt => (
                          <div
                            key={opt.name}
                            onClick={() => setHiOption(opt.name)}
                            className={`border rounded-lg flex flex-col overflow-hidden cursor-pointer transition-all bg-white ${hiOption === opt.name ? 'border-[#F37021] shadow-md ring-2 ring-[#F37021] ring-opacity-20' : 'border-orange-100 hover:border-orange-300'}`}
                          >
                            <div
                              className="w-full pt-2 pb-6 text-center text-[13px] font-bold text-[#464646] uppercase relative flex items-start justify-center"
                              style={{
                                backgroundColor: opt.color,
                                maskImage: 'url("data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 L100,0 L100,70 Q50,100 0,70 Z\'/%3E%3C/svg%3E")',
                                WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 L100,0 L100,70 Q50,100 0,70 Z\'/%3E%3C/svg%3E")',
                                maskSize: '100% 100%',
                                WebkitMaskSize: '100% 100%',
                              }}
                            >
                              <span className="relative z-10 pt-1 tracking-wider">{opt.name}</span>
                            </div>
                            <div className="pt-2 pb-4 text-center font-bold text-gray-900 text-lg">
                              {opt.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Beneficiary */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Beneficiary</label>
                        <div className="flex flex-wrap gap-4">
                          {['Self', 'Couple', 'Family', 'Children'].map(ben => (
                            <label key={ben} onClick={() => setHiBeneficiary(ben)} className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border cursor-pointer transition-colors ${hiBeneficiary === ben ? 'border-[#F37021] bg-orange-50/50' : 'border-gray-200 hover:border-[#F37021]'}`}>
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${hiBeneficiary === ben ? 'border-[#F37021]' : 'border-gray-300'}`}>
                                {hiBeneficiary === ben && <div className="w-2 h-2 bg-[#F37021] rounded-full"></div>}
                              </div>
                              <span className="text-sm font-medium text-gray-700">{ben}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Conditional Fields for Beneficiary */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {['Couple', 'Family'].includes(hiBeneficiary) && (
                          <>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Spouse Date Of Birth</label>
                              <div className="relative">
                                <input type="date" placeholder="DD/MM/YY" value={spouseDob} onChange={handleSpouseDobChange} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-1 focus:ring-[#F37021] focus:border-[#F37021] outline-none" />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                              <input type="text" placeholder="12" value={spouseAge} disabled className="w-full border border-gray-300 rounded-md px-4 py-2.5 bg-gray-50 text-gray-500 cursor-not-allowed outline-none" />
                            </div>
                          </>
                        )}
                        {['Family', 'Children'].includes(hiBeneficiary) && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Children</label>
                            <input type="number" placeholder="Enter Number of Children" value={childrenCount} onChange={e => setChildrenCount(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-1 focus:ring-[#F37021] focus:border-[#F37021] outline-none" />
                          </div>
                        )}
                      </div>

                      {/* Maternity Plan (Couple/Family only) */}
                      {['Couple', 'Family'].includes(hiBeneficiary) && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">Maternity Plan</label>
                          <div className="flex flex-wrap gap-4">
                            {['Standard', 'Delux', 'No Maternity'].map(plan => (
                              <OptionButton key={plan} label={plan} selected={maternityPlan === plan} onClick={() => setMaternityPlan(plan)} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Critical Illness (CI) */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-800">Critical Illness (CI)</h3>
                    <button
                      onClick={() => handleToggle(setCiEnabled, ciEnabled)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${ciEnabled ? 'bg-[#F37021]' : 'bg-gray-300'} ${!isSumAssuredFilled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full flex items-center justify-center transform transition-transform duration-200 ease-in-out ${ciEnabled ? 'translate-x-6' : 'translate-x-0'}`}>
                        {ciEnabled && <Check size={10} className="text-[#F37021]" />}
                      </div>
                    </button>
                  </div>

                  {ciEnabled && (
                    <div className="flex gap-4 pt-2">
                      {['50%', '100%'].map(opt => (
                        <OptionButton key={opt} label={opt} selected={ciOption === opt} onClick={() => setCiOption(opt)} />
                      ))}
                    </div>
                  )}
                </div>

                {/* PDAB */}
                <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    Permanent Disability Accidental Benefit (PDAB)
                    <Info size={14} className="text-gray-400" />
                  </h3>
                  <button
                    onClick={() => handleToggle(setPdabEnabled, pdabEnabled, true, false)}
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${pdabEnabled ? 'bg-[#F37021]' : 'bg-gray-300'} ${!isSumAssuredFilled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full flex items-center justify-center transform transition-transform duration-200 ease-in-out ${pdabEnabled ? 'translate-x-6' : 'translate-x-0'}`}>
                      {pdabEnabled && <Check size={10} className="text-[#F37021]" />}
                    </div>
                  </button>
                </div>

                {/* DIAB */}
                <div className="pt-2 flex items-center justify-between pb-6">
                  <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    Double Indemnity Accidental Benefit (DIAB)
                    <Info size={14} className="text-gray-400" />
                  </h3>
                  <button
                    onClick={() => handleToggle(setDiabEnabled, diabEnabled, false, true)}
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${diabEnabled ? 'bg-[#F37021]' : 'bg-gray-300'} ${!isSumAssuredFilled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full flex items-center justify-center transform transition-transform duration-200 ease-in-out ${diabEnabled ? 'translate-x-6' : 'translate-x-0'}`}>
                      {diabEnabled && <Check size={10} className="text-[#F37021]" />}
                    </div>
                  </button>
                </div>
              </>
            )}

          </div>

          {/* Footer */}
          {isProcessed && (
            <div className="mt-8 flex justify-center">
              <Button
                label="Check Premium"
                onClick={() => setIsDetailsModalOpen(true)}
              />
            </div>
          )}
        </div>
      </div>

      <PremiumDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => {
          setIsDetailsModalOpen(false);
          handleClose(); // Close both modals
        }}
        onCheckAgain={() => setIsDetailsModalOpen(false)}
      />

      <style>{`
        input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 28px;
            height: 28px;
            background: #F37021;
            border: 4px solid white;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        input[type='range']::-moz-range-thumb {
            width: 28px;
            height: 28px;
            background: #F37021;
            border: 4px solid white;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  );
};

export default CalculatePremiumModal;
