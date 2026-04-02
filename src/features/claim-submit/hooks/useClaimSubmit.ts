import { useState, useEffect } from 'react';
import { fetchDashboardDataApi } from '../../dashboard/api';
import type { DashboardApiResponse } from '../../dashboard/types';

export const useClaimSubmit = () => {
  const [data, setData] = useState<DashboardApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchDashboardDataApi();
        setData(result);
      } catch (err) {
        setError('Failed to load claims data.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { data, loading, error };
};
