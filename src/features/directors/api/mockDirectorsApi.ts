import type { DirectorApiResponse } from "../types";
import { MOCK_DIRECTORS_DATA } from "./mockData";

export const getMockDirectorsData = async (): Promise<DirectorApiResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_DIRECTORS_DATA);
        }, 800);
    });
};
