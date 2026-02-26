import type { LeadRequest, LeadApiResult } from '../types';

export const post_mock_lead = async (_payload: LeadRequest): Promise<LeadApiResult> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                transaction_id: 'GLIL-TXN-ID',
                data: {
                    status: 'Submitted',
                    received_at: new Date().toISOString(),
                },
            });
        }, 700);
    });
};
