import { mockBranchData } from './mockData';
import type { BranchApiResult, BranchQueryParams } from '../types';

export const getMockBranches = async (params?: BranchQueryParams): Promise<BranchApiResult> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const allBranches = mockBranchData.data.branches;

            // Apply filters on mock data
            let filtered = [...allBranches];

            if (params?.query) {
                const search = params.query.toLowerCase();
                filtered = filtered.filter(
                    (b) =>
                        b.office_name.toLowerCase().includes(search) ||
                        b.office_category.toLowerCase().includes(search) ||
                        b.division_name.toLowerCase().includes(search) ||
                        b.district_name.toLowerCase().includes(search) ||
                        b.area_name.toLowerCase().includes(search) ||
                        b.address.toLowerCase().includes(search)
                );
            }

            // Pagination
            const page = params?.page ?? 1;
            const limit = params?.limit ?? 10;
            const total_records = filtered.length;
            const total_pages = Math.ceil(total_records / limit) || 1;
            const start = (page - 1) * limit;
            const paginated = filtered.slice(start, start + limit);

            resolve({
                success: true,
                transaction_id: "GLIL-TXN-ID",
                data: {
                    pagination: {
                        current_page: page,
                        total_pages,
                        total_records,
                        has_next: page < total_pages,
                        has_previous: page > 1,
                    },
                    branches: paginated,
                },
            });
        }, 700);
    });
};
