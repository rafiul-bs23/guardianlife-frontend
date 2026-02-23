import { useState, useEffect, useCallback } from 'react';
import { getBancaBranches } from '../api';
import type { BancaBranch, PaginationData } from '../types';

interface UseBancaBranchesParams {
    branch_name?: string;
    division_name?: string;
    district_name?: string;
    area_name?: string;
}

export const useBancaBranches = (initialParams: UseBancaBranchesParams = {}) => {
    const [branches, setBranches] = useState<BancaBranch[]>([]);
    const [pagination, setPagination] = useState<PaginationData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [params, setParams] = useState(initialParams);

    const fetchBranches = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await getBancaBranches(params);
            if (response.status) {
                setBranches(response.data.branches);
                setPagination(response.data.pagination);
            } else {
                setError(new Error(response.message || 'Failed to fetch branches'));
            }
        } catch (err) {
            setError(err as Error);
        } finally {
            setIsLoading(false);
        }
    }, [params]);

    useEffect(() => {
        fetchBranches();
    }, [fetchBranches]);

    const updateParams = (newParams: Partial<UseBancaBranchesParams>) => {
        setParams(prev => ({ ...prev, ...newParams }));
    };

    return { branches, pagination, isLoading, error, updateParams, refetch: fetchBranches };
};
