import type { AboutDynamicResponse } from "../types";
import { getAboutDynamicData } from "./aboutApi";
import { getMockAboutDynamicData } from "./mockAboutApi";

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'false';

export const fetchAboutDynamicData = async (): Promise<AboutDynamicResponse> => {
    if (USE_MOCK) {
        return getMockAboutDynamicData();
    }
    return getAboutDynamicData();
};
