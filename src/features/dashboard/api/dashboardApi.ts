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

export const fetchClaimDetailsApi = async (intimationNo: string, channelId: number) => {
  const response = await axiosClient.get(`${DASHBOARD_BASE_URL}/claim/details`, {
    params: {
      IntimationNo: intimationNo,
      ChannelId: channelId
    }
  });
  return response.data;
};

export const validatePolicyMappingApi = async (policyNumber: string, dateOfBirth: string) => {
  const response = await axiosClient.post(`${DASHBOARD_BASE_URL}/policy/mapping-validation`, {
    policyNumber,
    dateOfBirth
  });
  return response.data;
};

export const withOtpMappingApi = async (phoneNumber: string, otp: string, email: string | null = null) => {
  const response = await axiosClient.post(`${DASHBOARD_BASE_URL}/policy/mapping/with-otp`, {
    phoneNumber,
    email,
    otp
  });
  return response.data;
};

export const fetchPolicyClaimsApi = async (policyNumber: string) => {
  const response = await axiosClient.get(`${DASHBOARD_BASE_URL}/claim/list`, {
    params: {
      PolicyNumber: policyNumber
    }
  });
  return response.data;
};

export const fetchPolicyLoansApi = async (policyNumber: string) => {
  const response = await axiosClient.post(`${DASHBOARD_BASE_URL}/policy/loan/list`, {
    policyNo: policyNumber
  });
  return response.data;
};

