import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { getBranches } from '../api/index';
import type { Branch, Pagination, BranchQueryParams, UseLocateBranchResult } from '../types';

const DEFAULT_FILTERS: BranchQueryParams = {
    page: 1,
    limit: 10,
};

export const useLocateBranch = (): UseLocateBranchResult => {
    const [branches, setBranches] = useState<Branch[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFiltersState] = useState<BranchQueryParams>(DEFAULT_FILTERS);

    const fetchBranches = useCallback(async (params: BranchQueryParams) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await getBranches(params);

            if (response.success) {
                setBranches(response.data.branches);
                setPagination(response.data.pagination);
            } else {
                setError(response.message);
                setBranches([]);
                setPagination(null);
            }
        } catch (err) {
            const axiosError = err as AxiosError;
            setError(axiosError.message || 'An unexpected error occurred.');
            setBranches([]);
            setPagination(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBranches(filters);
    }, [filters, fetchBranches]);

    const setFilters = useCallback((newFilters: BranchQueryParams) => {
        setFiltersState({ ...newFilters, page: 1 });
    }, []);

    const resetFilters = useCallback(() => {
        setFiltersState(DEFAULT_FILTERS);
    }, []);

    const goToPage = useCallback((page: number) => {
        setFiltersState((prev) => ({ ...prev, page }));
    }, []);

    return { branches, pagination, isLoading, error, filters, setFilters, resetFilters, goToPage };
};
