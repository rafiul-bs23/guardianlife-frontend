import { mockHeaderData } from './mockData';
import type { HeaderResponse } from '../types';

/**
 * Fetches header data for a specific section.
 * @param section The section name (e.g., 'about', 'micro', 'claim').
 * @returns Promise with header data.
 */
export const fetchHeaderData = async (section: string): Promise<HeaderResponse> => {
    // In a real application, this would be an API call:
    // const response = await fetch(`/api/v1/header/${section}`);
    // return response.json();

    // For now, returning mock data from mockData.ts
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetching header data for section: ${section}`);
            resolve(mockHeaderData);
        }, 500);
    });
};
