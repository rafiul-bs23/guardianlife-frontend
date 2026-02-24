import axiosClient from "../../../lib/axios";
import type { AboutDynamicResponse } from "../types";

export const getAboutDynamicData = async (): Promise<AboutDynamicResponse> => {
    const response = await axiosClient.get("/about/awards-milestones");
    return response.data;
};
