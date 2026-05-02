import React, { useState, useRef, useMemo } from 'react';
import type { Claim } from '../types';
import ClaimCard from './ClaimCard';
import ClaimDetailsModal from './ClaimDetailsModal';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ClaimsListProps {
  claims?: Claim[];
}

const ClaimsList: React.FC<ClaimsListProps> = ({ claims = [] }) => {
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const inProgressClaims = useMemo(() => {
    return claims.filter((claim) => 
      claim.claimStatus.toLowerCase().includes('in progress') || 
      claim.actualClaimStatus?.toLowerCase().includes('in progress')
    );
  }, [claims]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const AllClaimsModal = () => {
    if (!showAllModal) return null;

    return createPortal(
      <div className="fixed inset-0 z-[99990] flex justify-center items-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
        <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-[900px] max-h-[85vh] overflow-hidden flex flex-col scale-in-center">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Total Claims</h2>
              <p className="text-gray-500 mt-1 font-medium">Viewing all {claims.length} history items</p>
            </div>
            <button 
              onClick={() => setShowAllModal(false)}
              className="p-3 rounded-2xl hover:bg-white hover:shadow-md transition-all text-gray-400 hover:text-gray-900"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/50">
            {claims.map((claim) => (
              <ClaimCard 
                key={claim.intimationNo} 
                claim={claim} 
                onClick={() => {
                  setSelectedClaim(claim);
                }}
              />
            ))}
          </div>
        </div>
      </div>,
      document.body
    );
  };

  if (!claims || claims.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-gray-100">
        <p className="text-gray-400 font-medium">No claims found.</p>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg text-gray-700">
          Claims ({claims.length})
        </h3>
      </div>

      {inProgressClaims.length > 0 ? (
        <div 
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-8 px-1 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {inProgressClaims.map((claim) => (
            <div key={claim.intimationNo} className="min-w-[320px] md:min-w-[360px] snap-start">
              <ClaimCard 
                claim={claim} 
                onClick={() => setSelectedClaim(claim)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100 text-center mb-8">
           <p className="text-blue-700 font-medium text-lg">No active "In Progress" claims right now.</p>
           <p className="text-blue-500 text-sm mt-1">Check "See All" for your full claim history.</p>
        </div>
      )}

      {/* Navigation Arrows Overlay */}
      {inProgressClaims.length > 0 && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={() => scroll('right')}
            className="text-[#F37021] hover:scale-110 transition-transform active:scale-95 drop-shadow-md"
            aria-label="Next"
          >
            <ChevronRight size={48} strokeWidth={2} />
          </button>
        </div>
      )}

      <ClaimDetailsModal
        isOpen={!!selectedClaim}
        onClose={() => setSelectedClaim(null)}
        claim={selectedClaim}
      />

      <AllClaimsModal />

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes scale-in-center {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .scale-in-center {
          animation: scale-in-center 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default ClaimsList;
