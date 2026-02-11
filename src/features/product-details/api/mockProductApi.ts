import { createMockAxiosError } from "../../../utils/mockAxiosError";
import type { ProductSuccessResponse } from "../types";
import { MOCK_ERROR_DATA, MOCK_SUCCESS_DATA } from "./mockData";

export const getMockProductData = (): Promise<ProductSuccessResponse> => {
  const SHOULD_ERROR = import.meta.env.VITE_USE_MOCK_API_ERROR === 'true';

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (SHOULD_ERROR) {
        console.warn('⚠️ MOCK API: Simulating Error State');

        const error = createMockAxiosError(
          404,
          MOCK_ERROR_DATA,
          'Product Not Found'
        );

        reject(error);
      } else {
        console.info('✅ MOCK API: Returning Success Data');
        resolve(MOCK_SUCCESS_DATA);
      }
    }, 1000);
  });
};
