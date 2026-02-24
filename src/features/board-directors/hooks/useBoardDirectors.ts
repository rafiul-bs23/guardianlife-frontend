import { useState, useEffect } from "react";
import { fetchBoardDirectorsData } from "../api";
import type { Director } from "../types";

export const useBoardDirectors = () => {
    const [data, setData] = useState<Director[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                const response = await fetchBoardDirectorsData();

                if (response?.status && response?.data) {
                    setData(response.data);
                } else {
                    throw new Error("Invalid response format");
                }
            } catch (err) {
                setError(err instanceof Error ? err : new Error("Failed to fetch board directors data"));
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    return { data, isLoading, error };
};
