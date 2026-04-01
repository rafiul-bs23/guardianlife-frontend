import React, { useState } from 'react';
import type { Policy } from '../types';
import PolicyCard from './PolicyCard';

interface PolicyListProps {
  policies?: Policy[];
}

const PolicyList: React.FC<PolicyListProps> = ({ policies = [] }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Individual' | 'Group'>('All');

  const filteredPolicies = policies.filter((policy) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Individual') return policy.segment === 'INDIVIDUAL';
    if (activeTab === 'Group') return policy.segment === 'GROUP';
    return true;
  });

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 px-1 flex justify-center">
        My Policies
      </h2>

      <div className="flex gap-2 mb-6 px-1">
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
        <button
          onClick={() => setActiveTab('Individual')}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'Individual'
              ? 'bg-[#F28C28] text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => setActiveTab('Group')}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'Group'
              ? 'bg-[#F28C28] text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Group
        </button>
      </div>

      <div className="flex flex-col gap-4 px-1 pb-10">
        {filteredPolicies.length > 0 ? (
          filteredPolicies.map((policy) => (
            <PolicyCard key={policy.policyNumber} policy={policy} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 bg-white rounded-lg border border-gray-200">
            No policies found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default PolicyList;
