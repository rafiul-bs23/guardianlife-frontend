import { useState, useEffect } from 'react';
import type { ShareholderItem } from '../types';
import { getShareholders } from '../api';

export const useShareholders = () => {
    const [shareholders, setShareholders] = useState<ShareholderItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchShareholders = async () => {
            try {
                const response = await getShareholders();
                if (response.success) {
                    setShareholders(response.data);
                } else {
                    setError('Failed to fetch shareholders');
                }
            } catch (err) {
                setError('An error occurred while fetching shareholders');
            } finally {
                setLoading(false);
            }
        };

        fetchShareholders();
    }, []);

    return { shareholders, loading, error };
};
