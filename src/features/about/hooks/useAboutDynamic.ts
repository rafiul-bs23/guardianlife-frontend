import { useState, useEffect } from 'react';
import { fetchAboutDynamicData } from '../api';
import type { DynamicAboutData } from '../types';

export const useAboutDynamic = () => {
    const [data, setData] = useState<DynamicAboutData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getDynamicData = async () => {
            try {
                setIsLoading(true);
                const response = await fetchAboutDynamicData();
                if (response?.status) {
                    setData(response?.data);
                } else {
                    setError('Failed to fetch dynamic about data');
                }
            } catch (err) {
                setError('An error occurred while fetching dynamic about data');
                console.error('Error fetching dynamic about data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        getDynamicData();
    }, []);

    return { data, isLoading, error };
};
