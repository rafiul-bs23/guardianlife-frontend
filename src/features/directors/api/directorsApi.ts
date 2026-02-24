import axiosClient from "../../../lib/axios";
import type { DirectorApiResponse } from "../types";

export const getDirectorsData = async (): Promise<DirectorApiResponse> => {
    const response = await axiosClient.get("/about/directors");
    return response.data;
};
