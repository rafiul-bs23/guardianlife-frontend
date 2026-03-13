
import axiosClient from '../../../lib/axios';
import type { QuickBuyApiResponse, ProductInformationResponse, PremiumCalculationRequest, PremiumCalculationResponse } from '../types';
import { MOCK_SUCCESS_DATA, MOCK_PRODUCT_INFORMATION, MOCK_PREMIUM_CALCULATION } from './mockData';
const useMock = import.meta.env.VITE_USE_MOCK_API === 'false';

export const getRealQuickBuyData = async (productId: string): Promise<QuickBuyApiResponse> => {
    const { data } = await axiosClient.get<QuickBuyApiResponse>(`/products/${productId}`);
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

    if (useMock) {
        return getMockQuickBuyData(productId);
    }
    return getRealQuickBuyData(productId);
};

export const getProductInformation = async (planId: number, planNo: string): Promise<ProductInformationResponse> => {

    if (useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(MOCK_PRODUCT_INFORMATION);
            }, 500);
        });
    }
    const { data } = await axiosClient.post<ProductInformationResponse>(
        '/digital/product/information',
        { plan_id: planId, plan_no: planNo }
    );
    return data;
};

export const calculatePremium = async (payload: PremiumCalculationRequest): Promise<PremiumCalculationResponse> => {

    if (useMock) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(MOCK_PREMIUM_CALCULATION);
            }, 500);
        });
    }
    const { data } = await axiosClient.post<PremiumCalculationResponse>(
        '/digital/premium/calculate',
        payload
    );
    return data;
};
