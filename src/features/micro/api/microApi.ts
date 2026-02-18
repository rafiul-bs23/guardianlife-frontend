import axiosClient from '../../../lib/axios';
import type { MicroSolutionsData, MicroImpactMetric, MicroApiResult, MicroPartner } from '../types';

export const getRealMicroSolutions = async (): Promise<MicroApiResult<MicroSolutionsData>> => {
    const { data } = await axiosClient.get<MicroApiResult<MicroSolutionsData>>('/micro/solutions');
    return data;
};

export const getRealMicroImpact = async (): Promise<MicroApiResult<MicroImpactMetric[]>> => {
    const { data } = await axiosClient.get<MicroApiResult<MicroImpactMetric[]>>('/micro/impact-metrics');
    return data;
};

export const getRealMicroPartners = async (): Promise<MicroApiResult<MicroPartner[]>> => {
    const { data } = await axiosClient.get<MicroApiResult<MicroPartner[]>>('/micro/partners');
    return data;
};
