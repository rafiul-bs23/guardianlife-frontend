import React, { useState } from 'react';
import type { Claim } from '../types';
import ClaimCard from './ClaimCard';
import ClaimDetailsModal from './ClaimDetailsModal';

interface ClaimsListProps {
  claims?: Claim[];
}

const ClaimsList: React.FC<ClaimsListProps> = ({ claims = [] }) => {
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);

  if (!claims || claims.length === 0) return null;

  return (
    <div className="w-full mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4 px-1">
        CLAIMS ({claims.length})
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1 pb-4">
        {claims.map((claim) => (
          <ClaimCard 
            key={claim.intimationNo} 
            claim={claim} 
            onClick={() => setSelectedClaim(claim)}
          />
        ))}
      </div>

      <ClaimDetailsModal
        isOpen={!!selectedClaim}
        onClose={() => setSelectedClaim(null)}
        claim={selectedClaim}
      />
    </div>
  );
};

export default ClaimsList;
