import axiosClient from "../../../lib/axios";
import type { BancaBankInfoResponse, BancaBranchResponse } from "../types";
import { getMockBancaData, getMockBancaBranches } from "./mockBancaApi";
import { getBancaBranches as getRealBancaBranches } from "./bancaApi";

const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getBancaBankInfo = async (bankCode: string): Promise<BancaBankInfoResponse> => {
  if (USE_MOCK) {
    return getMockBancaData() as unknown as BancaBankInfoResponse;
  }

  const { data } = await axiosClient.get<BancaBankInfoResponse>(`/banca/bank-info/${bankCode}`);
  return data;
};

export const getBancaBranches = async (params: any): Promise<BancaBranchResponse> => {
  if (USE_MOCK) {
    return getMockBancaBranches();
  }
  return getRealBancaBranches(params);
};