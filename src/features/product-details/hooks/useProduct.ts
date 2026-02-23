import { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { getProductData } from '../api';
import type { ProductApiResponse, ProductData, UseProductResult, ValidationError } from '../types';


export const useProduct = (productId: string): UseProductResult => {
  const [data, setData] = useState<ProductData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ValidationError[]>([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setFieldErrors([]);

    try {
      const response: ProductApiResponse = await getProductData(productId);
      console.log("response:", response);

      if (response.status) {
        setData(response.data);
      } else {
        console.warn('API Business Error:', response.message);
        setError(response.message);

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
  }, [productId]);
  useEffect(() => {
    if (productId) {
      fetchData();
    }
  }, [fetchData]);

  return { data, isLoading, error, fieldErrors, refetch: fetchData };
};