import type { AboutDynamicResponse } from "../types";
import { MOCK_DYNAMIC_DATA } from "./mockData";

export const getMockAboutDynamicData = async (): Promise<AboutDynamicResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_DYNAMIC_DATA);
        }, 800);
    });
};
