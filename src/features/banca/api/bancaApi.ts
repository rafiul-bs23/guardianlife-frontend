import axiosClient from "../../../lib/axios";
import type { BancaProductsResponse } from "../types";

export async function get_banca_products(): Promise<BancaProductsResponse> {
    const response = await axiosClient.get<BancaProductsResponse>('/products/?channel=banca&category=banca-product-category');
    return response.data;
}
