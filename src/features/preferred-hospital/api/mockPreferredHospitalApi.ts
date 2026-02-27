import { mock_hospital_data } from './mockData';
import type { HospitalApiResult, HospitalQueryParams, HospitalType } from '../types';

export const get_mock_hospitals = async (params?: HospitalQueryParams): Promise<HospitalApiResult> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const type: HospitalType = params?.type ?? 'national_hospital';
            const source = mock_hospital_data?.[type];

            if (!source) {
                resolve({
                    success: false,
                    transaction_id: "GLIL-TXN-ID",
                    message: "Invalid hospital type.",
                });
                return;
            }

            resolve({
                success: true,
                transaction_id: "GLIL-TXN-ID",
                data: source?.data ?? [],
            });
        }, 700);
    });
};
