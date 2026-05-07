import React, { useState, useRef, useEffect } from 'react';
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [policies]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Approx width of card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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

      {policies.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-gray-100">
          <p className="text-gray-400 font-medium">No policies found.</p>
        </div>
      ) : (
        <div className="relative">
          {/* Left Blur + Arrow */}
          {canScrollLeft && (
            <div
              className="absolute left-0 top-0 bottom-8 w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 hidden md:flex items-center justify-start pointer-events-none">
              <button
                onClick={() => scroll('left')}
                className="text-[#F37021] hover:scale-110 transition-transform active:scale-95 drop-shadow-md pointer-events-auto"
                aria-label="Previous"
              >
                <ChevronLeft size={48} strokeWidth={2}/>
              </button>
            </div>
          )}

          {/* Right Blur + Arrow */}
          {canScrollRight && (
            <div
              className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 hidden md:flex items-center justify-end pointer-events-none">
              <button
                onClick={() => scroll('right')}
                className="text-[#F37021] hover:scale-110 transition-transform active:scale-95 drop-shadow-md pointer-events-auto"
                aria-label="Next"
              >
                <ChevronRight size={48} strokeWidth={2}/>
              </button>
            </div>
          )}

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto no-scrollbar pb-8 px-1 scroll-smooth snap-x snap-mandatory items-stretch"
            style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
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
        </div>
      )}


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
