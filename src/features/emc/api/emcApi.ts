import axiosClient from "../../../lib/axios";
import type { EmcApiResponse } from "../types";

export const getRealEmcData = async (): Promise<EmcApiResponse> => {
    const { data } = await axiosClient.get<EmcApiResponse>("/about/emc");
    return data;
};
