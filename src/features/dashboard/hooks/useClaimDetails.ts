import { useState, useCallback } from 'react';
import { fetchClaimDetailsApi } from '../api/dashboardApi';

export const useClaimDetails = () => {
    const [claimData, setClaimData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchDetails = useCallback(async (intimationNo: string, channelId: number) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetchClaimDetailsApi(intimationNo, channelId);
            if (response) {
                // Handle both wrapped {data: ...} and flat JSON structures interchangeably.
                setClaimData(response.data !== undefined ? response.data : response);
            } else {
                setError(response?.message || 'Failed to fetch claim details');
            }
        } catch (err) {
            setError('An error occurred while fetching claim details');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const reset = useCallback(() => {
        setClaimData(null);
        setError(null);
    }, []);

    return { claimData, isLoading, error, fetchDetails, reset };
};
