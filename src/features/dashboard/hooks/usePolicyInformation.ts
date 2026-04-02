import { useState, useCallback } from 'react';
import { fetchPolicyInformationApi } from '../api';

export const usePolicyInformation = () => {
    const [policyData, setPolicyData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchInformation = useCallback(async (policyNo: string) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetchPolicyInformationApi(policyNo);
            if (response) {
                // Some endpoints wrap with {status, data}, this one returns the policy object directly
                setPolicyData(response.data !== undefined ? response.data : response);
            } else {
                setError(response?.message || 'Failed to fetch policy information');
            }
        } catch (err) {
            setError('An error occurred while fetching policy information');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const reset = useCallback(() => {
        setPolicyData(null);
        setError(null);
    }, []);

    return { policyData, isLoading, error, fetchInformation, reset };
};
