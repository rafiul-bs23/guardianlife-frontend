import { useState, useEffect } from 'react';
import { getMancomMembers } from '../api';
import type { MancomMember } from '../types';

export const useMancom = () => {
    const [members, setMembers] = useState<MancomMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                setIsLoading(true);
                const response = await getMancomMembers();
                if (response.status) {
                    setMembers(response.data);
                } else {
                    setError('Failed to fetch management committee members');
                }
            } catch (err) {
                setError('An error occurred while fetching members');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMembers();
    }, []);

    return { members, isLoading, error };
};
