import { useState, useEffect, useCallback, useMemo } from 'react';
import { AxiosError } from 'axios';
import { get_hospitals } from '../api/index';
import type {
    Hospital,
    HospitalType,
    HospitalFrontendFilters,
    UsePreferredHospitalResult,
    HospitalApiSuccessResponse,
    HospitalApiErrorResponse,
} from '../types';

import type { PaginationData } from '../../../shared/types/pagination';

const DEFAULT_FRONTEND_FILTERS: HospitalFrontendFilters = {
    hospital_name: '',
    division_name: '',
    district_name: '',
    area_name: '',
    country_name: '',
};



const unique_values = (arr: (string | null | undefined)[]): string[] =>
    [...new Set(arr.filter((v): v is string => !!v))].sort();

const ITEMS_PER_PAGE = 10;

export const usePreferredHospital = (): UsePreferredHospitalResult => {
    const [hospitals, set_hospitals] = useState<Hospital[]>([]);
    const [is_loading, set_is_loading] = useState<boolean>(true);
    const [error, set_error] = useState<string | null>(null);
    const [active_type, set_active_type_state] = useState<HospitalType>('national_hospital');
    const [frontend_filters, set_frontend_filters_state] =
        useState<HospitalFrontendFilters>(DEFAULT_FRONTEND_FILTERS);
    const [current_page, set_current_page] = useState<number>(1);

    const fetch_hospitals = useCallback(async (type: HospitalType) => {
        set_is_loading(true);
        set_error(null);

        try {
            const response = await get_hospitals({
                type,
                // page,
                // page_size: ITEMS_PER_PAGE
            });

            if (response?.status) {
                // Nested data structure as per user's provided response
                const data = (response as HospitalApiSuccessResponse).data;
                set_hospitals(data?.hospitals ?? []);
            } else {
                set_error((response as HospitalApiErrorResponse)?.message ?? 'Failed to fetch hospitals.');
                set_hospitals([]);
            }
        } catch (err) {
            const axios_error = err as AxiosError;
            set_error(axios_error?.message ?? 'An unexpected error occurred.');
            set_hospitals([]);
        } finally {
            set_is_loading(false);
        }
    }, []);

    useEffect(() => {
        fetch_hospitals(active_type);
    }, [active_type, fetch_hospitals]);

    const set_active_type = useCallback((type: HospitalType) => {
        set_active_type_state(type);
        set_frontend_filters_state(DEFAULT_FRONTEND_FILTERS);
        set_current_page(1);
    }, []);

    const set_frontend_filters = useCallback((filters: HospitalFrontendFilters) => {
        set_frontend_filters_state(filters);
        set_current_page(1);
    }, []);

    const reset_filters = useCallback(() => {
        set_frontend_filters_state(DEFAULT_FRONTEND_FILTERS);
        set_current_page(1);
    }, []);

    const go_to_page = useCallback((page: number) => {
        set_current_page(page);
    }, []);

    // Derived: all available divisions from current dataset
    const division_options = useMemo(
        () => unique_values(hospitals?.map((h) => h?.division_name)),
        [hospitals]
    );

    // Derived: districts filtered by selected division
    const district_options = useMemo(() => {
        const source = frontend_filters?.division_name
            ? hospitals?.filter((h) => h?.division_name === frontend_filters.division_name)
            : hospitals;
        return unique_values(source?.map((h) => h?.district_name));
    }, [hospitals, frontend_filters?.division_name]);

    // Derived: areas filtered by selected division + district
    const area_options = useMemo(() => {
        let source = hospitals;
        if (frontend_filters?.division_name) {
            source = source?.filter((h) => h?.division_name === frontend_filters.division_name);
        }
        if (frontend_filters?.district_name) {
            source = source?.filter((h) => h?.district_name === frontend_filters.district_name);
        }
        return unique_values(source?.map((h) => h?.area_name));
    }, [hospitals, frontend_filters?.division_name, frontend_filters?.district_name]);

    // Derived: unique countries from international dataset
    const country_options = useMemo(
        () => unique_values(hospitals?.map((h) => h?.country_name)),
        [hospitals]
    );

    // Filtered Hospitals (now we use current data returned by API)
    const filtered_hospitals = useMemo(() => {
        let result = hospitals ?? [];

        if (frontend_filters?.hospital_name?.trim()) {
            const search = frontend_filters.hospital_name.trim().toLowerCase();
            result = result.filter((h) =>
                h?.hospital_name?.toLowerCase()?.includes(search)
            );
        }
        if (frontend_filters?.division_name) {
            result = result.filter((h) => h?.division_name === frontend_filters.division_name);
        }
        if (frontend_filters?.district_name) {
            result = result.filter((h) => h?.district_name === frontend_filters.district_name);
        }
        if (frontend_filters?.area_name) {
            result = result.filter((h) => h?.area_name === frontend_filters.area_name);
        }
        if (frontend_filters?.country_name) {
            result = result.filter((h) => h?.country_name === frontend_filters.country_name);
        }

        return result;
    }, [hospitals, frontend_filters]);

    // Calculate pagination data locally
    const pagination = useMemo((): PaginationData => {
        const total_records = filtered_hospitals.length;
        const total_pages = Math.ceil(total_records / ITEMS_PER_PAGE);

        return {
            current_page,
            total_pages: total_pages || 1,
            total_records,
            has_next: current_page < total_pages,
            has_previous: current_page > 1,
        };
    }, [filtered_hospitals.length, current_page]);

    // Slice hospitals for current page
    const paginated_hospitals = useMemo(() => {
        const start = (current_page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filtered_hospitals.slice(start, end);
    }, [filtered_hospitals, current_page]);

    return {
        hospitals,
        filtered_hospitals,
        paginated_hospitals,
        is_loading,
        error,
        active_type,
        frontend_filters,
        current_page,
        pagination,
        set_active_type,
        set_frontend_filters,
        reset_filters,
        go_to_page,
        division_options,
        district_options,
        area_options,
        country_options,
    };
};
