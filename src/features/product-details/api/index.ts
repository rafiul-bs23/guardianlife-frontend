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