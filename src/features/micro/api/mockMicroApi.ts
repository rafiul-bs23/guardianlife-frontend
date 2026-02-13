import { mockMicroData } from './mockData';
import type { MicroSolutionsData, MicroImpactMetric, MicroApiResult, MicroPartner } from '../types';

export const getMockMicroSolutions = async (): Promise<MicroApiResult<MicroSolutionsData>> => {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                transactionId: `tx-${Math.random().toString(36).substring(2, 11)}`,
                message: "Solutions fetched successfully (Mock)",
                data: mockMicroData.solutions
            });
        }, 800);
    });
};

export const getMockMicroImpact = async (): Promise<MicroApiResult<MicroImpactMetric[]>> => {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                transactionId: "GLIL-TXN-ID",
                message: "Impact data fetched successfully (Mock)",
                data: mockMicroData.impactMetrics
            });
        }, 1000);
    });
};

export const getMockMicroPartners = async (): Promise<MicroApiResult<MicroPartner[]>> => {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                transactionId: "GLIL-TXN-ID",
                message: "Partners fetched successfully (Mock)",
                data: mockMicroData.partnersDynamic
            });
        }, 1200);
    });
};
