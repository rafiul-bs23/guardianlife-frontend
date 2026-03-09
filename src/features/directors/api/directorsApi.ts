import axiosClient from "../../../lib/axios";
import type { DirectorApiResponse } from "../types";

export const getDirectorsData = async (): Promise<DirectorApiResponse> => {
    const response = await axiosClient.get("/about/board/more-info");
    return response.data;
};
