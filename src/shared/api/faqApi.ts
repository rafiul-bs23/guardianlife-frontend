import axiosClient from '../../lib/axios';
import type { FaqApiResult } from './types';

export const getRealFaqData = async (): Promise<FaqApiResult> => {
    const { data } = await axiosClient.get<FaqApiResult>('/faqs');
    return data;
};
