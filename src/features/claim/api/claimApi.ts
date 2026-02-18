import { mockDocumentsData } from './mockData';
import type { ClaimDocumentsData } from '../types';

export const getClaimDocuments = async (): Promise<ClaimDocumentsData> => {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockDocumentsData.data);
        }, 500);
    });
};
