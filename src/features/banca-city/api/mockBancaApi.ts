import { createMockAxiosError } from "../../../utils/mockAxiosError";
import { MOCK_BANK_INFO_DATA, MOCK_BRANCHES_DATA } from "./mockData";
import type { BancaBankInfoResponse, BancaBranchResponse } from "../types";


export const getMockBancaData = (): Promise<BancaBankInfoResponse> => {
  const SHOULD_ERROR = import.meta.env.VITE_USE_MOCK_API_ERROR === 'true';

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (SHOULD_ERROR) {
        console.warn('⚠️ MOCK API: Simulating Error State');

        const error = createMockAxiosError(
          404,
          {},
          'Product Not Found'
        );

        reject(error);
      } else {
        console.info('✅ MOCK API: Returning Success Data');
        resolve(MOCK_BANK_INFO_DATA);
      }
    }, 1000);
  });
};

export const getMockBancaBranches = (): Promise<BancaBranchResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_BRANCHES_DATA);
    }, 1000);
  });
};
