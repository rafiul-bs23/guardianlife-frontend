import axiosClient from "../../../lib/axios";
import type { ProductApiResponse } from "../types";
import { getMockProductData } from "./mockProductApi";
const USE_MOCK = import.meta.env.VITE_USE_MOCK_API === 'true';

export const getProductData = async (id: string): Promise<ProductApiResponse> => {
  if (USE_MOCK) {
    return getMockProductData() as unknown as ProductApiResponse;
  }

  const { data } = await axiosClient.get<ProductApiResponse>(`/products/${id}`);
  return data;
};

export const getPlanInformation = async (payload: { date_of_birth: string, plan_no: string }) => {
  const { data } = await axiosClient.post('/retail/plan/information', payload);
  return data;
};

export const getSupplementaryInfo = async (payload: { plan_id: string, gender: string, sum_assured: string, age: number, term: number }) => {
  const { data } = await axiosClient.post('/retail/plan/supplementary', payload);
  return data;
};

export const calculatePremium = async (payload: any) => {
  const { data } = await axiosClient.post('/retail/premium/calculate', payload);
  return data;
};