import { mockMicroProductsResponse, mockMicroImpactResponse } from './mockData';
import type { MicroProductsData, MicroImpactMetric, MicroApiResult } from '../types';

export const getMockMicroSolutions = async (): Promise<MicroApiResult<MicroProductsData>> => {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: true,
                transactionId: mockMicroProductsResponse.transaction_id,
                message: "Solutions fetched successfully (Mock)",
                data: mockMicroProductsResponse.data
            });
        }, 800);
    });
};

export const getMockMicroImpact = async (): Promise<MicroApiResult<MicroImpactMetric[]>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: true,
                transactionId: mockMicroImpactResponse.transaction_id,
                message: "Impact data fetched successfully (Mock)",
                data: mockMicroImpactResponse.data
            });
        }, 1000);
    });
};
