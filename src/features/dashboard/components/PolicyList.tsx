import React, { useState, useRef } from 'react';
import type { Policy } from '../types';
import PolicyCard from './PolicyCard';
import PolicyDetailsModal from './PolicyDetailsModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PolicyListProps {
  policies?: Policy[];
  onAddPolicy?: () => void;
}

const PolicyList: React.FC<PolicyListProps> = ({ policies = [], onAddPolicy }) => {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Approx width of card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!policies || policies.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-gray-100">
        <p className="text-gray-400 font-medium">No policies found.</p>
      </div>
    );
  }

  return (
    <div className="w-full relative group">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg text-gray-700">
          My Policy ({policies.length})
        </h3>
        {onAddPolicy && (
          <button
            onClick={onAddPolicy}
            className="border border-[#F37021] hover:bg-orange-50 text-gray-700 px-4 py-1.5 rounded-full font-medium flex items-center gap-2 transition-colors duration-300"
          >
            <span className="text-[#F37021] text-xl leading-none font-semibold">+</span> Add Policy
          </button>
        )}
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto no-scrollbar pb-8 px-1 scroll-smooth snap-x snap-mandatory items-stretch"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {policies.map((policy) => (
          <div key={policy.policyNumber} className="min-w-[320px] md:min-w-[360px] snap-start flex">
            <PolicyCard 
              policy={policy} 
              onClick={() => setSelectedPolicy(policy)} 
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows Overlay */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <button
          onClick={() => scroll('right')}
          className="text-[#F37021] hover:scale-110 transition-transform active:scale-95 drop-shadow-md"
          aria-label="Next"
        >
          <ChevronRight size={48} strokeWidth={2} />
        </button>
      </div>

      <PolicyDetailsModal 
        isOpen={!!selectedPolicy} 
        policy={selectedPolicy} 
        onClose={() => setSelectedPolicy(null)} 
      />

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PolicyList;
