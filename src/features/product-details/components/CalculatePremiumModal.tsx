import React, { useState, useEffect } from 'react';
import { X, Info, Check, Calendar } from 'lucide-react';
import { getPlanInformation, getSupplementaryInfo, calculatePremium } from '../api';
import PremiumDetailsModal from './PremiumDetailsModal';
import Button from "../../../shared/Components/Button.tsx";

interface CalculatePremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  planNumbers?: any[];
}

const CalculatePremiumModal: React.FC<CalculatePremiumModalProps> = ({ isOpen, onClose, planNumbers }) => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  useEffect(() => {
    if (planNumbers && planNumbers.length > 0 && !selectedPlan) {
      setSelectedPlan(planNumbers[0]);
    }
  }, [planNumbers, selectedPlan]);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [displayDob, setDisplayDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');

  const [availableModes, setAvailableModes] = useState<any[]>([]); // Store full mode objects
  const [mode, setMode] = useState<any>(null); // Store selected mode object
  const [availableTerms, setAvailableTerms] = useState<number[]>([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
  const [term, setTerm] = useState(20);

  const [sumAssured, setSumAssured] = useState('');
  const [minSumAss, setMinSumAss] = useState<number>(50000);
  const [maxSumAss, setMaxSumAss] = useState<number>(1000000);

  const [hiEnabled, setHiEnabled] = useState(false);
  const [hiOption, setHiOption] = useState<any>(null); // Store selected plan object
  const [hiBeneficiary, setHiBeneficiary] = useState('Self');
  const [spouseDob, setSpouseDob] = useState('');
  const [displaySpouseDob, setDisplaySpouseDob] = useState('');
  const [spouseAge, setSpouseAge] = useState('');
  const [childrenCount, setChildrenCount] = useState('');
  const [maternityPlan, setMaternityPlan] = useState('Standard');

  const [ciEnabled, setCiEnabled] = useState(false);
  const [ciOption, setCiOption] = useState('50%');

  const [pdabEnabled, setPdabEnabled] = useState(false);
  const [diabEnabled, setDiabEnabled] = useState(false);

  const [hiBeneficiaries, setHiBeneficiaries] = useState<any[]>([]);
  const [hiMaternityPlans, setHiMaternityPlans] = useState<any[]>([]);
  const [hiHealthPlans, setHiHealthPlans] = useState<any[]>([]);
  const [ciPercentages, setCiPercentages] = useState<any[]>([]);
  const [calculationData, setCalculationData] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);



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

  const sumAssuredValue = parseFloat(sumAssured.replace(/,/g, '')) || 0;
  const isValidSumAssured = sumAssuredValue >= minSumAss && sumAssuredValue <= maxSumAss;

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

  const handleNativeDobChange = (e: React.ChangeEvent<HTMLInputElement>, setDate: any, setDisplay: any, setAgeState: any) => {
    const val = e.target.value; // YYYY-MM-DD
    setDate(val);
    if (val) {
      const parts = val.split('-');
      if (parts.length === 3) {
        setDisplay(`${parts[2]}/${parts[1]}/${parts[0]}`);
      }
      setAgeState(calculateCeilAge(val));
    } else {
      setDisplay('');
      setAgeState('');
    }
  };

  const handleTextDobChange = (e: React.ChangeEvent<HTMLInputElement>, setDate: any, setDisplay: any, setAgeState: any) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 8) val = val.slice(0, 8);

    let formatted = val;
    if (val.length > 4) {
      formatted = `${val.slice(0, 2)}/${val.slice(2, 4)}/${val.slice(4)}`;
    } else if (val.length > 2) {
      formatted = `${val.slice(0, 2)}/${val.slice(2)}`;
    }

    setDisplay(formatted);

    if (formatted.length === 10) {
      const parts = formatted.split('/');
      const isoDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      // Basic validation
      const d = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10);
      const y = parseInt(parts[2], 10);
      if (d > 0 && d <= 31 && m > 0 && m <= 12 && y > 1900) {
        setDate(isoDate);
        setAgeState(calculateCeilAge(isoDate));
      }
    } else {
      setDate('');
      setAgeState('');
    }
  };

  const handleProcess = async () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!dob) {
      // Just a simple validation prompt or alert.
      alert("Please enter a valid Date of Birth");
      return;
    }

    try {
      setIsLoading(true);
      const data = await getPlanInformation({
        date_of_birth: dob,
        plan_no: selectedPlan?.plan_no || "03"
      });

      console.log('API Response:', data);

      if (data && data.status && data.data) {
        const { payment_mode, term: apiTerms, min_sumass, max_sumass } = data.data;

        // Update modes
        if (payment_mode && Array.isArray(payment_mode)) {
          setAvailableModes(payment_mode);
          if (payment_mode.length > 0) {
            setMode(payment_mode[0]);
          }
        }

        // Update terms
        if (apiTerms && Array.isArray(apiTerms)) {
          const termsList = apiTerms.map((t: any) => t.term).sort((a: number, b: number) => a - b);
          setAvailableTerms(termsList);
          if (termsList.length > 0 && !termsList.includes(term)) {
            setTerm(termsList[0]);
          }
        }

        // Update sum assured min-max
        if (min_sumass) setMinSumAss(Number(min_sumass));
        if (max_sumass) setMaxSumAss(Number(max_sumass));
      }
    } catch (error) {
      console.error('Error fetching plan info:', error);
    } finally {
      setIsLoading(false);
      setIsProcessed(true);
    }
  };

  useEffect(() => {
    if (isValidSumAssured) {
      const handler = setTimeout(async () => {
        try {
          const payload = {
            plan_id: "03",
            gender: gender.toLowerCase(),
            sum_assured: sumAssuredValue.toString(),
            age: Number(age),
            term: Number(term)
          };
          const response = await getSupplementaryInfo(payload);
          console.log('Supplementary API Response:', response);

          if (response && response.status && response.data) {
            const hiData = response.data.find((item: any) => item.supplementary_name === 'HI');
            if (hiData) {
              setHiBeneficiaries(hiData.beneficiaries || []);
              setHiMaternityPlans(hiData.hi_maternity_plan || []);
              setHiHealthPlans(hiData.health_insurance || []);
              
              // Set defaults if currently empty or not in new list
              if (hiData.health_insurance?.length > 0) {
                if (!hiOption || !hiData.health_insurance.find((h: any) => h.id === hiOption.id)) {
                  setHiOption(hiData.health_insurance[0]);
                }
              }
              if (hiData.beneficiaries?.length > 0) {
                const names = hiData.beneficiaries.map((b: any) => b.name);
                if (!names.includes(hiBeneficiary.toLowerCase())) setHiBeneficiary(names[0]);
              }
              if (hiData.hi_maternity_plan?.length > 0) {
                const names = hiData.hi_maternity_plan.map((m: any) => m.name);
                if (!names.includes(maternityPlan)) setMaternityPlan(names[0]);
              }
            }

            const ciData = response.data.find((item: any) => item.supplementary_name === 'CI');
            if (ciData) {
              setCiPercentages(ciData.ci_percentage || []);
              if (ciData.ci_percentage?.length > 0) {
                const opts = ciData.ci_percentage.map((c: any) => c.percentage + '%');
                if (!opts.includes(ciOption)) setCiOption(opts[0]);
              }
            }
          }
        } catch (error) {
          console.error('Error fetching supplementary info:', error);
        }
      }, 500);
      return () => clearTimeout(handler);
    }
  }, [sumAssuredValue, isValidSumAssured, gender, age, term]);

  const handleToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>, currentValue: boolean, isPdab: boolean = false, isDiab: boolean = false) => {
    if (!isValidSumAssured) return; // cannot turn on if sum assured is invalid

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

  const handleCheckPremium = async () => {
    const selectedHiBeneficiary = hiBeneficiaries.find(b => b.name === hiBeneficiary);
    const selectedMaternityPlan = hiMaternityPlans.find(m => m.name === maternityPlan);

    const payload = {
      date_of_birth: dob,
      plan_no: selectedPlan?.plan_no || "01",
      gender: gender.toLowerCase(),
      term: term,
      mode: mode?.id || 1,
      annuity_pension_unit: sumAssuredValue,
      channel: "retail",
      hi: hiEnabled ? 1 : 0,
      hi_plan: hiEnabled ? (hiOption?.id || 5) : null,
      hi_beneficiary: hiEnabled ? (selectedHiBeneficiary?.id || 1) : null,
      hi_spouse_date_of_birth: (hiEnabled && ['couple', 'family'].includes(hiBeneficiary.toLowerCase()) && spouseDob) ? spouseDob : null,
      hi_maternity_plan: (hiEnabled && ['couple', 'family'].includes(hiBeneficiary.toLowerCase())) ? (selectedMaternityPlan?.id || 1) : null,
      hi_number_of_children: (hiEnabled && ['family', 'children'].includes(hiBeneficiary.toLowerCase())) ? childrenCount : null,
      ci: ciEnabled ? 2 : 0,
      ci_percentage: ciEnabled ? ciOption.replace('%', '') : null,
      pdab: pdabEnabled ? 3 : 0,
      diab: diabEnabled ? 4 : 0
    };

    try {
      setIsCalculating(true);
      const data = await calculatePremium(payload);
      if (data && data.status) {
        // Collect extra info for PDF document request
        const docPayload = {
          name: name,
          age: Number(age),
          gender: gender.toLowerCase(),
          date_of_birth: dob, // Already in "YYYY-MM-DD" format from state
          plan_no: selectedPlan?.plan_no || "101",
          term: term,
          payment_mode: mode?.name || "Yearly",
          sum_assured: sumAssuredValue,
          life_sum_assured: sumAssuredValue,
          installment_premium: 33000, // Static for now to avoid float error
          life_premium: 25000, // Static for now to avoid float error
          ci_premium: data.data.ci_premium || null,
          diab_premium: diabEnabled ? data.data.pdab_diab_premium : null,
          pdab_premium: pdabEnabled ? data.data.pdab_diab_premium : null,
          hi_premium: data.data.total_hi_premium || null,
          hi_sum_assured: hiEnabled ? (hiOption?.sum_assured || null) : null,
          phone: phone,
          payment_mode_id: mode?.id || 1
        };
        setCalculationData({ ...data.data, docPayload });
        setIsDetailsModalOpen(true);
      } else {
        alert(data?.message || "Failed to calculate premium");
      }
    } catch (err) {
      console.error("Calculation Error:", err);
      alert("An error occurred while calculating premium");
    } finally {
      setIsCalculating(false);
    }
  };

  if (!isOpen) return null;

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
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-2">
              Calculate Premium
            </h2>
            <div className="h-1 bg-orange-500 w-24"></div>
          </div>

          {planNumbers && planNumbers.length > 0 && (
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                Select Plan
              </label>
              <div className="flex flex-wrap gap-3">
                {planNumbers.map((p) => (
                  <OptionButton
                    key={p.plan_no}
                    label={p.name}
                    selected={selectedPlan?.plan_no === p.plan_no}
                    onClick={() => setSelectedPlan(p)}
                  />
                ))}
              </div>
            </div>
          )}

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
                <div className="relative flex items-center border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-[#F37021] focus-within:border-[#F37021] bg-white overflow-hidden">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    value={displayDob}
                    onChange={(e) => handleTextDobChange(e, setDob, setDisplayDob, setAge)}
                    className="w-full px-4 py-2.5 outline-none bg-transparent"
                    maxLength={10}
                  />
                  <div className="relative flex items-center justify-center p-3 border-l border-gray-200 hover:bg-gray-50 transition-colors">
                    <Calendar size={20} className="text-gray-500" />
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => handleNativeDobChange(e, setDob, setDisplayDob, setAge)}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                  </div>
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
                  label={isLoading ? "Processing..." : "Process"}
                  onClick={isLoading ? undefined : handleProcess}
                />
              </div>
            )}

            {isProcessed && (
              <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                {/* Mode Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Mode</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {availableModes.map(m => (
                      <OptionButton key={m.id || m.name} label={m.name} selected={mode?.name === m.name} onClick={() => setMode(m)} />
                    ))}
                  </div>
                </div>

                {/* Term Slider */}
                <div className="pt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-6">Term</label>
                  <div className="relative pt-8 pb-4">
                    <div className="absolute top-0 w-full flex justify-between px-2">
                      {availableTerms.map(t => (
                        <span key={t} className={`text-[11px] font-bold ${t === term ? 'text-[#F37021] opacity-0' : 'text-gray-300'}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {(() => {
                      const index = availableTerms.indexOf(term) >= 0 ? availableTerms.indexOf(term) : 0;
                      const maxIndex = availableTerms.length > 1 ? availableTerms.length - 1 : 1;
                      const ratio = index / maxIndex;
                      return (
                        <div
                          className="absolute top-0 flex flex-col items-center -translate-x-1/2 transition-all duration-150 pointer-events-none"
                          style={{
                            left: `calc(14px + (${ratio * 100}% - ${ratio * 28}px))`
                          }}
                        >
                          <span className="text-[11px] font-extrabold text-[#1E3161] whitespace-nowrap mb-1 uppercase">
                            {term} YEARS
                          </span>
                          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#F37021]"></div>
                        </div>
                      );
                    })()}

                    <input
                      type="range"
                      min="0"
                      max={availableTerms.length > 1 ? availableTerms.length - 1 : 0}
                      value={availableTerms.indexOf(term) >= 0 ? availableTerms.indexOf(term) : 0}
                      onChange={(e) => {
                        const idx = parseInt(e.target.value);
                        if (availableTerms[idx]) setTerm(availableTerms[idx]);
                      }}
                      className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: (() => {
                          const index = availableTerms.indexOf(term) >= 0 ? availableTerms.indexOf(term) : 0;
                          const maxIndex = availableTerms.length > 1 ? availableTerms.length - 1 : 1;
                          const ratio = index / maxIndex;
                          return `linear-gradient(to right, #F37021 0%, #F37021 ${ratio * 100}%, #E5E7EB ${ratio * 100}%, #E5E7EB 100%)`;
                        })()
                      }}
                    />
                  </div>
                </div>

                {/* Sum Assured */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sum Assured</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="0"
                      value={sumAssured}
                      onChange={handleSumAssuredChange}
                      className={`w-full border ${sumAssuredValue > 0 && !isValidSumAssured ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-[#F37021] focus:border-[#F37021]'} rounded-md py-3 px-4 text-center font-semibold text-lg focus:ring-1 outline-none`}
                    />
                  </div>
                  <p className={`text-xs mt-2 ${sumAssuredValue > 0 && !isValidSumAssured ? 'text-red-500 font-medium' : 'text-gray-400'}`}>
                    {sumAssuredValue > 0 && sumAssuredValue < minSumAss && `Minimum Sum Assured is ${new Intl.NumberFormat('en-IN').format(minSumAss)}`}
                    {sumAssuredValue > maxSumAss && `Maximum Sum Assured is ${new Intl.NumberFormat('en-IN').format(maxSumAss)}`}
                    {(sumAssuredValue === 0 || isValidSumAssured) && `(${new Intl.NumberFormat('en-IN').format(minSumAss)} - ${new Intl.NumberFormat('en-IN').format(maxSumAss)})`}
                  </p>
                </div>

                {/* Health Insurance Section */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-800">Health Insurance (HI)</h3>
                    <button
                      onClick={() => handleToggle(setHiEnabled, hiEnabled)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${hiEnabled ? 'bg-[#F37021]' : 'bg-gray-300'} ${!isValidSumAssured ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full flex items-center justify-center transform transition-transform duration-200 ease-in-out ${hiEnabled ? 'translate-x-6' : 'translate-x-0'}`}>
                        {hiEnabled && <Check size={10} className="text-[#F37021]" />}
                      </div>
                    </button>
                  </div>

                  {hiEnabled && (
                    <div className="space-y-6 pt-2">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {hiHealthPlans.map((opt, idx) => {
                          const colors = ['#D28E5D', '#B0B6BA', '#FBB03B', '#6F7678'];
                          return (
                            <div
                              key={opt.id || opt.name}
                              onClick={() => setHiOption(opt)}
                              className={`border rounded-lg flex flex-col overflow-hidden cursor-pointer transition-all bg-white ${hiOption?.name === opt.name ? 'border-[#F37021] shadow-md ring-2 ring-[#F37021] ring-opacity-20' : 'border-orange-100 hover:border-orange-300'}`}
                            >
                              <div
                                className="w-full pt-2 pb-6 text-center text-[13px] font-bold text-[#464646] uppercase relative flex items-start justify-center"
                                style={{
                                  backgroundColor: colors[idx % colors.length],
                                  maskImage: 'url("data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 L100,0 L100,70 Q50,100 0,70 Z\'/%3E%3C/svg%3E")',
                                  WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 L100,0 L100,70 Q50,100 0,70 Z\'/%3E%3C/svg%3E")',
                                  maskSize: '100% 100%',
                                  WebkitMaskSize: '100% 100%',
                                }}
                              >
                                <span className="relative z-10 pt-1 tracking-wider">{opt.name}</span>
                              </div>
                              <div className="pt-2 pb-4 text-center font-bold text-gray-900 text-lg">
                                {new Intl.NumberFormat('en-IN').format(Number(opt.sum_assured))}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Beneficiary</label>
                        <div className="flex flex-wrap gap-4">
                          {hiBeneficiaries.map(ben => (
                            <label key={ben.id || ben.name} onClick={() => setHiBeneficiary(ben.name)} className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border cursor-pointer transition-colors ${hiBeneficiary.toLowerCase() === ben.name.toLowerCase() ? 'border-[#F37021] bg-orange-50/50' : 'border-gray-200 hover:border-[#F37021]'}`}>
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${hiBeneficiary.toLowerCase() === ben.name.toLowerCase() ? 'border-[#F37021]' : 'border-gray-300'}`}>
                                {hiBeneficiary.toLowerCase() === ben.name.toLowerCase() && <div className="w-2 h-2 bg-[#F37021] rounded-full"></div>}
                              </div>
                              <span className="text-sm font-medium text-gray-700 capitalize">{ben.name}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {['couple', 'family'].includes(hiBeneficiary.toLowerCase()) && (
                          <>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Spouse Date Of Birth</label>
                              <div className="relative flex items-center border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-[#F37021] focus-within:border-[#F37021] bg-white overflow-hidden">
                                <input
                                  type="text"
                                  placeholder="DD/MM/YYYY"
                                  value={displaySpouseDob}
                                  onChange={(e) => handleTextDobChange(e, setSpouseDob, setDisplaySpouseDob, setSpouseAge)}
                                  className="w-full px-4 py-2.5 outline-none bg-transparent"
                                  maxLength={10}
                                />
                                <div className="relative flex items-center justify-center p-3 border-l border-gray-200 hover:bg-gray-50 transition-colors">
                                  <Calendar size={20} className="text-gray-500" />
                                  <input
                                    type="date"
                                    value={spouseDob}
                                    onChange={(e) => handleNativeDobChange(e, setSpouseDob, setDisplaySpouseDob, setSpouseAge)}
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                              <input type="text" placeholder="0" value={spouseAge} disabled className="w-full border border-gray-300 rounded-md px-4 py-2.5 bg-gray-50 text-gray-500 cursor-not-allowed outline-none" />
                            </div>
                          </>
                        )}
                        {['family', 'children'].includes(hiBeneficiary.toLowerCase()) && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Children</label>
                            <input type="number" placeholder="Enter Number of Children" value={childrenCount} onChange={e => setChildrenCount(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:ring-1 focus:ring-[#F37021] focus:border-[#F37021] outline-none" />
                          </div>
                        )}
                      </div>

                      {['couple', 'family'].includes(hiBeneficiary.toLowerCase()) && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">Maternity Plan</label>
                          <div className="flex flex-wrap gap-4">
                            {hiMaternityPlans.map(plan => (
                              <OptionButton key={plan.id || plan.name} label={plan.name} selected={maternityPlan === plan.name} onClick={() => setMaternityPlan(plan.name)} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-800">Critical Illness (CI)</h3>
                    <button
                      onClick={() => handleToggle(setCiEnabled, ciEnabled)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${ciEnabled ? 'bg-[#F37021]' : 'bg-gray-300'} ${!isValidSumAssured ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full flex items-center justify-center transform transition-transform duration-200 ease-in-out ${ciEnabled ? 'translate-x-6' : 'translate-x-0'}`}>
                        {ciEnabled && <Check size={10} className="text-[#F37021]" />}
                      </div>
                    </button>
                  </div>

                  {ciEnabled && (
                    <div className="flex gap-4 pt-2">
                      {ciPercentages.map(opt => (
                        <OptionButton key={opt.percentage} label={opt.percentage + '%'} selected={ciOption === opt.percentage + '%'} onClick={() => setCiOption(opt.percentage + '%')} />
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    Permanent Disability Accidental Benefit (PDAB)
                    <Info size={14} className="text-gray-400" />
                  </h3>
                  <button
                    onClick={() => handleToggle(setPdabEnabled, pdabEnabled, true, false)}
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${pdabEnabled ? 'bg-[#F37021]' : 'bg-gray-300'} ${!isValidSumAssured ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full flex items-center justify-center transform transition-transform duration-200 ease-in-out ${pdabEnabled ? 'translate-x-6' : 'translate-x-0'}`}>
                      {pdabEnabled && <Check size={10} className="text-[#F37021]" />}
                    </div>
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-between pb-6">
                  <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    Double Indemnity Accidental Benefit (DIAB)
                    <Info size={14} className="text-gray-400" />
                  </h3>
                  <button
                    onClick={() => handleToggle(setDiabEnabled, diabEnabled, false, true)}
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${diabEnabled ? 'bg-[#F37021]' : 'bg-gray-300'} ${!isValidSumAssured ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full flex items-center justify-center transform transition-transform duration-200 ease-in-out ${diabEnabled ? 'translate-x-6' : 'translate-x-0'}`}>
                      {diabEnabled && <Check size={10} className="text-[#F37021]" />}
                    </div>
                  </button>
                </div>

                {/* Footer / Results Button */}
                <div className="mt-8 flex justify-center border-t border-gray-100 pt-8">
                  <Button
                    label={isCalculating ? "Calculating..." : "Check Premium"}
                    onClick={isCalculating ? undefined : handleCheckPremium}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <PremiumDetailsModal
        isOpen={isDetailsModalOpen}
        data={calculationData}
        pdabLabel={diabEnabled ? "DIAB" : "PDAB"}
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
