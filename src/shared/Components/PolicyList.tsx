import React, { useState } from 'react';
import type { Policy } from '../../features/dashboard/types';
import PolicyCard from './PolicyCard';

interface PolicyListProps {
  policies?: Policy[];
  onPolicyClick?: (policy: Policy) => void;
}

const PolicyList: React.FC<PolicyListProps> = ({ policies = [], onPolicyClick }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const segments = React.useMemo(() => {
    return Array.from(new Set(policies.map(p => p.segment).filter(Boolean)));
  }, [policies]);

  const filteredPolicies = policies.filter((policy) => {
    if (activeTab === 'All') return true;
    return policy.segment === activeTab;
  });

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-gray-800 mb-4 px-1">
        My Policies
      </h3>

      <div className="flex flex-wrap gap-2 mb-6 px-1">
        <button
          onClick={() => setActiveTab('All')}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'All'
              ? 'bg-[#F28C28] text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          All
        </button>
        {segments.map((segment) => (
          <button
            key={segment}
            onClick={() => setActiveTab(segment as string)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === segment
                ? 'bg-[#F28C28] text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {segment ? segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase() : segment}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1 pb-10">
        {filteredPolicies.length > 0 ? (
          filteredPolicies.map((policy) => (
            <PolicyCard key={policy.policyNumber} policy={policy} onClick={onPolicyClick} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 bg-white rounded-lg border border-gray-200 col-span-1 md:col-span-2">
            No policies found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default PolicyList;
