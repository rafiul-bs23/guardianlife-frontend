import type { DirectorApiResponse } from "../types";
import { getDirectorsData } from "./directorsApi";
import { getMockDirectorsData } from "./mockDirectorsApi";

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const fetchDirectorsData = async (): Promise<DirectorApiResponse> => {
    if (USE_MOCK) {
        return getMockDirectorsData();
    }
    return getDirectorsData();
};
