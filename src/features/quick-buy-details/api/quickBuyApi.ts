
import axiosClient from '../../../lib/axios';
import type { QuickBuyApiResponse } from '../types';
import { MOCK_SUCCESS_DATA } from './mockData';

export const getRealQuickBuyData = async (productId: string): Promise<QuickBuyApiResponse> => {
    const { data } = await axiosClient.get<QuickBuyApiResponse>(`/quick-buy/${productId}`);
    return data;
};

export const getMockQuickBuyData = async (_productId: string): Promise<QuickBuyApiResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_SUCCESS_DATA);
        }, 500);
    });
};

export const getProductBuyDetailsData = async (productId: string): Promise<QuickBuyApiResponse> => {
    const useMock = import.meta.env.VITE_USE_MOCK_API === 'true';
    if (useMock) {
        return getMockQuickBuyData(productId);
    }
    return getRealQuickBuyData(productId);
};
