import { useState, useEffect } from 'react';
import { MOCK_TAX_REBATE_DETAILS } from '../api/mockData';
import type { TaxRebateDetails } from '../types';

export const useTaxRebateData = () => {
    const [data, setData] = useState<TaxRebateDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 800));
                setData(MOCK_TAX_REBATE_DETAILS.data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading, error };
};
