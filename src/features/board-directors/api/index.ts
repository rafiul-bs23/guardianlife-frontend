import type { BoardDirectorApiResponse } from "../types";
import { getBoardDirectorsData } from "./boardDirectorsApi";
import { getMockBoardDirectorsData } from "./mockBoardDirectorsApi";

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const fetchBoardDirectorsData = async (): Promise<BoardDirectorApiResponse> => {
    if (USE_MOCK) {
        return getMockBoardDirectorsData();
    }
    return getBoardDirectorsData();
};
