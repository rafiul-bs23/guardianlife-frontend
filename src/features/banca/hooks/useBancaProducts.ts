import { useState, useEffect } from "react";
import { get_banca_products } from "../api";
import type { BancaProductsData } from "../types";

export function useBancaProducts() {
    const [data, set_data] = useState<BancaProductsData | null>(null);
    const [loading, set_loading] = useState<boolean>(true);
    const [error, set_error] = useState<string | null>(null);

    useEffect(() => {
        async function fetch_products() {
            try {
                set_loading(true);
                const response = await get_banca_products();
                if (response?.status) {
                    set_data(response?.data);
                } else {
                    set_error("Failed to fetch products");
                }
            } catch (err) {
                set_error(err instanceof Error ? err.message : "An error occurred");
            } finally {
                set_loading(false);
            }
        }

        fetch_products();
    }, []);

    return { data, loading, error };
}
