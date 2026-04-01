import React from 'react';
import type { Claim } from '../types';

interface ClaimCardProps {
  claim: Claim;
}

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 2,
  }).format(amount);
};

const ClaimCard: React.FC<ClaimCardProps> = ({ claim }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-gradient-to-r from-blue-400 to-purple-400 p-[1.5px] rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
      <div className="bg-white rounded-2xl p-5 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="text-gray-600 text-lg">
            Intimation No: <span className="text-black font-medium">{claim.intimationNo}</span>
          </div>
        </div>

        {/* Progress bar visual */}
        <div className="flex items-center gap-1 mb-6">
          <div className="h-1.5 flex-1 bg-orange-400 rounded-full"></div>
          <div className="h-1.5 flex-1 bg-orange-400 rounded-full"></div>
          <div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
        </div>

        <div className="flex justify-between items-end">
          <div className="text-gray-400 text-sm">
            Claim Date: {formatDate(claim.claimDate)}
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[#B58D3D] text-xs font-medium uppercase tracking-wider mb-1 flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B58D3D] inline-block flex-shrink-0 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]"></span>
              {claim.claimStatus}
            </span>
            <span className="text-gray-500 text-sm">
              Amt: <span className="text-gray-700">{formatCurrency(claim.dueClaim)}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimCard;
