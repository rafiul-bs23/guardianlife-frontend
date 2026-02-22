import axiosClient from '../../../lib/axios';
import type { FormLibraryResponse } from '../types';

export const getRealFormLibrary = async (): Promise<FormLibraryResponse> => {
    const { data } = await axiosClient.get<FormLibraryResponse>('/api/v1/documents/forms');
    return data;
};
