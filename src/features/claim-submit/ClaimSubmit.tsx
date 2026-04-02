import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PolicyList from '../../shared/Components/PolicyList';
import ClaimStepperForm from './components/ClaimStepperForm';
import { useClaimSubmit } from './hooks/useClaimSubmit';
import type { Policy } from '../dashboard/types';
import Navbar from '../../shared/Components/Navbar';

const ClaimSubmit: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    const navigate = useNavigate();
    const { data, loading, error } = useClaimSubmit();

    const [selectedPolicy, setSelectedPolicy] = React.useState<Policy | null>(null);
    const [isStepperOpen, setIsStepperOpen] = React.useState(false);

    const filteredPolicies = React.useMemo(() => {
        if (!data?.policies) return [];
        if (type === 'cashless-payment') {
            return data.policies.filter(policy => policy.isEligibleForGOP === true);
        }
        return data.policies;
    }, [data?.policies, type]);

    const handlePolicyClick = (policy: Policy) => {
        setSelectedPolicy(policy);
        setIsStepperOpen(true);
    };

    const pageTitle = type === 'cashless-payment' ? 'Cashless Payment' : 'Claims Submission';

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="container mx-auto px-4 py-32 min-h-[60vh]">
                <div className="bg-white shadow drop-shadow-sm rounded-lg p-8 max-w-5xl mx-auto">
                    <div className="flex justify-between mb-8">
                        <h1 className="text-3xl font-bold">{pageTitle}</h1>
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="px-4 py-2 bg-[#F37021] hover:bg-[#d6601b] text-white rounded-md font-medium transition-colors"
                        >
                            Back to Dashboard
                        </button>
                    </div>

                    <div className="mt-8">
                        <PolicyList policies={filteredPolicies} onPolicyClick={handlePolicyClick} />
                    </div>
                </div>
            </div>

            <ClaimStepperForm
                isOpen={isStepperOpen}
                onClose={() => setIsStepperOpen(false)}
                policy={selectedPolicy}
            />
        </div>
    );
};

export default ClaimSubmit;
