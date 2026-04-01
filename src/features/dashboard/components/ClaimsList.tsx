import React from 'react';
import type { Claim } from '../types';
import ClaimCard from './ClaimCard';

interface ClaimsListProps {
  claims?: Claim[];
}

const ClaimsList: React.FC<ClaimsListProps> = ({ claims = [] }) => {
  if (!claims || claims.length === 0) return null;

  return (
    <div className="w-full mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4 px-1">
        CLAIMS ({claims.length})
      </h3>
      <div className="flex overflow-x-auto gap-4 pb-4 snap-x hide-scroll-bar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {claims.map((claim) => (
          <div key={claim.intimationNo} className="snap-start">
            <ClaimCard claim={claim} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimsList;
