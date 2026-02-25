import axiosClient from '../../../lib/axios';
import type { HospitalApiResult, HospitalQueryParams } from '../types';

export const get_real_hospitals = async (params?: HospitalQueryParams): Promise<HospitalApiResult> => {
    const { data } = await axiosClient.get<HospitalApiResult>('/partner-hospitals', { params });
    return data;
};
