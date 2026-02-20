import { useState, useEffect } from 'react';
import { MOCK_TAX_REBATE_HEADER_DATA } from '../api/mockData';
import type { HeaderData } from '../../../shared/types/header';

export const useHeader = () => {
    const [data, setData] = useState<HeaderData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 800));
                setData(MOCK_TAX_REBATE_HEADER_DATA.data);
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
