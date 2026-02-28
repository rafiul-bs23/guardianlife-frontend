import type { EmcApiResponse } from "../types";
import { MOCK_EMC_DATA } from "./mockData";

export const getMockEmcData = async (): Promise<EmcApiResponse> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return MOCK_EMC_DATA;
};
