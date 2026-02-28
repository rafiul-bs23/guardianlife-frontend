import { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig, } from 'axios';

export const createMockAxiosError = (
    status: number,
    data: any,
    message: string = 'Mock Error'
): AxiosError => {
    const config = {} as InternalAxiosRequestConfig;
    const response: AxiosResponse = {
        data,
        status,
        statusText: message,
        headers: {},
        config,
        request: {}
    };

    const error = new AxiosError(message, String(status), config, {}, response);
    return error;
};