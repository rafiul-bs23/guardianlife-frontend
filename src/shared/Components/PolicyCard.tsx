import React from 'react';
import type { Policy } from '../../features/dashboard/types';

interface PolicyCardProps {
  policy: Policy;
  onClick?: (policy: Policy) => void;
}

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getBorderGradient = (status: string) => {
  const normStatus = status.toUpperCase();
  if (normStatus === 'ACTIVE' || normStatus === 'INFORCE') {
    return 'from-blue-400 via-indigo-400 to-purple-400';
  } else if (normStatus === 'MATURED' || normStatus === 'LAPSE') {
    return 'from-orange-400 to-orange-200';
  }
  return 'from-gray-300 to-gray-400';
};

const getStatusColor = (status: string) => {
  const normStatus = status.toUpperCase();
  if (normStatus === 'ACTIVE' || normStatus === 'INFORCE') {
    return 'text-gray-600';
  } else if (normStatus === 'MATURED' || normStatus === 'LAPSE') {
    return 'text-gray-500';
  }
  return 'text-gray-500';
};

const PolicyCard: React.FC<PolicyCardProps> = ({ policy, onClick }) => {
  const gradientClass = getBorderGradient(policy.policyStatus);
  const statusColor = getStatusColor(policy.policyStatus);

  return (
    <div className={`w-full bg-gradient-to-r ${gradientClass} p-[1.5px] rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-shadow`} onClick={() => onClick && onClick(policy)}>
      <div className="bg-white rounded-2xl px-5 py-4 w-full h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-[17px] font-semibold text-gray-900 leading-tight pr-4">
            {policy.planName}
          </h3>
          <span className={`text-[11px] font-medium uppercase tracking-wider ${statusColor} border-l-[1.5px] border-gray-300 pl-2 whitespace-nowrap pt-1`}>
            {policy.policyStatus}
          </span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-600 text-[15px]">
            {policy.policyNumber}
          </div>
          <div className="text-gray-500 text-sm">
            Start Date: {formatDate(policy.startDate)}
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-100 mb-3" />

        <div className="flex justify-start items-center">
          {policy.isShowPremiumAmount && (
            <span className="text-gray-800 text-[15px]">
              Premium {formatCurrency(policy.premiumAmount)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
