import axiosClient from '../../../lib/axios';

const DASHBOARD_BASE_URL = import.meta.env.VITE_DASHBOARD_API_URL || 'https://gliapp-stg.myguardianbd.com/base-gate/api';

export const fetchDashboardDataApi = async () => {
  const response = await axiosClient.post(`${DASHBOARD_BASE_URL}/dashboard`, {
    shouldClearCache: true
  });
  return response.data;
};

export const fetchPolicyInformationApi = async (policyNo: string) => {
  const response = await axiosClient.post(`${DASHBOARD_BASE_URL}/policy/information`, {
    policyNo
  });
  return response.data;
};
