import axiosClient from '../../../lib/axios';
import type { MicroProductsData, MicroImpactMetric, MicroApiResult } from '../types';

export const getRealMicroSolutions = async (): Promise<MicroApiResult<MicroProductsData>> => {
    const { data } = await axiosClient.get<MicroApiResult<MicroProductsData>>('/products/?channel=micro');
    return data;
};

export const getRealMicroImpact = async (): Promise<MicroApiResult<MicroImpactMetric[]>> => {
    const { data } = await axiosClient.get<MicroApiResult<MicroImpactMetric[]>>('/micro/impact');
    return data;
};
