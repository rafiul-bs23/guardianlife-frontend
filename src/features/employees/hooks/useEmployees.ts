import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { getEmployeesData } from '../api';
import type { EmployeeApiResponse, Employee, UseEmployeesResult, ValidationError } from '../types';

export const useEmployees = (query?: string): UseEmployeesResult => {
    const [data, setData] = useState<Employee[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<ValidationError[]>([]);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setFieldErrors([]);

        try {
            const response: EmployeeApiResponse = await getEmployeesData(query);

            if (response.success) {
                setData(response.data);
            } else {
                console.warn('API Business Error:', response.message);
                setError(response.message || 'Failed to fetch employees');

                if (response.errors) {
                    setFieldErrors(response.errors);
                }
            }
        } catch (err) {
            const axiosError = err as AxiosError;

            const errorMessage =
                axiosError.response?.data && typeof axiosError.response.data === 'object' && 'message' in axiosError.response.data
                    ? (axiosError.response.data as any).message
                    : axiosError.message || 'An unexpected network error occurred.';

            console.error('Network Error:', errorMessage);
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, error, fieldErrors, refetch: fetchData };
};
