
import axiosClient from '../../../lib/axios';
import type { ProductApiResponse } from '../types';

export const getRealProductData = async (product_code: string): Promise<ProductApiResponse> => {
  const { data } = await axiosClient.get<ProductApiResponse>(`/products/${product_code}`);
  return data;
};