import type { BoardDirectorApiResponse } from "../types";
import { MOCK_BOARD_DIRECTOR_DATA } from "./mockData";

export const getMockBoardDirectorsData = async (): Promise<BoardDirectorApiResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_BOARD_DIRECTOR_DATA);
        }, 800);
    });
};
