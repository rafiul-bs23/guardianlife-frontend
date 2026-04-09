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
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[22px] font-bold text-gray-800">
          Policies <span className="text-[#f37021]/80 ml-1">({policies.length})</span>
        </h3>
        {onAddPolicy && (
          <button
            onClick={onAddPolicy}
            className="bg-[#F37021] hover:bg-[#F36021] text-white px-5 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-[1.05] active:scale-[0.95]"
          >
            <span className="text-xl leading-none">+</span> Add Policy
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

      {/* Navigation Arrows at Bottom */}
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => scroll('left')}
          className="p-3 rounded-full bg-white border border-gray-200 shadow-md hover:border-[#f37021] hover:text-[#f37021] transition-all active:scale-90"
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="p-3 rounded-full bg-white border border-gray-200 shadow-md hover:border-[#f37021] hover:text-[#f37021] transition-all active:scale-90"
          aria-label="Next"
        >
          <ChevronRight size={22} />
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
