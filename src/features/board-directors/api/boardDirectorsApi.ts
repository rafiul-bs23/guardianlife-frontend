import axiosClient from "../../../lib/axios";
import type { BoardDirectorApiResponse } from "../types";

export const getBoardDirectorsData = async (): Promise<BoardDirectorApiResponse> => {
    const response = await axiosClient.get("/about/board/less-info");
    return response.data;
};
