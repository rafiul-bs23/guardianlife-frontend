import { mockBranchData } from './mockData';
import type { BranchApiResult, BranchQueryParams } from '../types';

export const getMockBranches = async (params?: BranchQueryParams): Promise<BranchApiResult> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const allBranches = mockBranchData.data.branches;

            // Apply filters on mock data
            let filtered = [...allBranches];

            if (params?.office_category) {
                filtered = filtered.filter(
                    (b) => b.office_category.toLowerCase() === params.office_category!.toLowerCase()
                );
            }
            if (params?.division_name) {
                filtered = filtered.filter(
                    (b) => b.division_name.toLowerCase() === params.division_name!.toLowerCase()
                );
            }
            if (params?.district_name) {
                filtered = filtered.filter(
                    (b) => b.district_name.toLowerCase() === params.district_name!.toLowerCase()
                );
            }
            if (params?.area_name) {
                filtered = filtered.filter(
                    (b) => b.area_name.toLowerCase() === params.area_name!.toLowerCase()
                );
            }
            if (params?.branch_name) {
                filtered = filtered.filter((b) =>
                    b.office_name.toLowerCase().includes(params.branch_name!.toLowerCase())
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
