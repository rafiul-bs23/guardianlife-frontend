import { useState, useEffect } from "react";
import { fetchDirectorsData } from "../api";
import type { DirectorDetail } from "../types";

export const useDirectors = () => {
    const [data, setData] = useState<DirectorDetail[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                const response = await fetchDirectorsData();

                if (response?.status && response?.data) {
                    setData(response.data);
                } else {
                    throw new Error("Invalid response format");
                }
            } catch (err) {
                setError(err instanceof Error ? err : new Error("Failed to fetch directors data"));
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    return { data, isLoading, error };
};
