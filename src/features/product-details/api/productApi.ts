
import axiosClient from '../../../lib/axios';
import type { ProductApiResponse } from '../types';

export const getRealProductData = async (productCode: string): Promise<ProductApiResponse> => {
  const { data } = await axiosClient.get<ProductApiResponse>(`/products/${productCode}`);
  return data;
};