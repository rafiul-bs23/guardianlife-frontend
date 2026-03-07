import { mock_product_solutions_response } from "./mockData";
import type { BancaProductsResponse } from "../types";

export async function get_banca_products(): Promise<BancaProductsResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock_product_solutions_response);
        }, 1000);
    });
}
