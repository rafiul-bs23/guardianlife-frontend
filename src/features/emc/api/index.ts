import type { EmcApiResponse } from "../types";
import { getRealEmcData } from "./emcApi";
import { getMockEmcData } from "./mockEmcApi";

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getEmcData = async (): Promise<EmcApiResponse> => {
    if (USE_MOCK) {
        return getMockEmcData();
    }
    return getRealEmcData();
};
