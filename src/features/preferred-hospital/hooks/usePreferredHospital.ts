import { useState, useEffect, useCallback, useMemo } from 'react';
import { AxiosError } from 'axios';
import { get_hospitals } from '../api/index';
import type {
    Hospital,
    HospitalType,
    HospitalFrontendFilters,
    UsePreferredHospitalResult,
} from '../types';

const DEFAULT_FRONTEND_FILTERS: HospitalFrontendFilters = {
    hospital_name: '',
    division_name: '',
    district_name: '',
    area_name: '',
    country_name: '',
};

const unique_values = (arr: (string | null | undefined)[]): string[] =>
    [...new Set(arr.filter((v): v is string => !!v))].sort();

export const usePreferredHospital = (): UsePreferredHospitalResult => {
    const [hospitals, set_hospitals] = useState<Hospital[]>([]);
    const [is_loading, set_is_loading] = useState<boolean>(true);
    const [error, set_error] = useState<string | null>(null);
    const [active_type, set_active_type_state] = useState<HospitalType>('national_hospital');
    const [frontend_filters, set_frontend_filters_state] =
        useState<HospitalFrontendFilters>(DEFAULT_FRONTEND_FILTERS);

    const fetch_hospitals = useCallback(async (type: HospitalType) => {
        set_is_loading(true);
        set_error(null);

        try {
            const response = await get_hospitals({ type });

            if (response?.success) {
                set_hospitals(response?.data ?? []);
            } else {
                set_error(response?.message ?? 'Failed to fetch hospitals.');
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
    }, []);

    const set_frontend_filters = useCallback((filters: HospitalFrontendFilters) => {
        set_frontend_filters_state(filters);
    }, []);

    const reset_filters = useCallback(() => {
        set_frontend_filters_state(DEFAULT_FRONTEND_FILTERS);
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

    // Apply frontend filters
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

    return {
        hospitals,
        filtered_hospitals,
        is_loading,
        error,
        active_type,
        frontend_filters,
        set_active_type,
        set_frontend_filters,
        reset_filters,
        division_options,
        district_options,
        area_options,
        country_options,
    };
};
