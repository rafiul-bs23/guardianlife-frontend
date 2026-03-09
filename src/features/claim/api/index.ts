import type { ClaimDocumentsData } from '../types';
import { getMockClaimDocuments } from './mockClaimApi';
import { getRealClaimDocuments } from './claimApi';

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'false';

export const getClaimDocuments = async (): Promise<ClaimDocumentsData> => {
    if (USE_MOCK) {
        return getMockClaimDocuments();
    }
    return getRealClaimDocuments();
};
