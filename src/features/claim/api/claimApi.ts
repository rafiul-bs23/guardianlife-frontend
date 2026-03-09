import axiosClient from "../../../lib/axios";
import type { ClaimDocumentsData } from '../types';

export const getRealClaimDocuments = async (): Promise<ClaimDocumentsData> => {
    const { data } = await axiosClient.get<{ status: boolean; data: ClaimDocumentsData }>('/documents/claims');
    return data.data;
};
