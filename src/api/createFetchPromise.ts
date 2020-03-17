import { api } from './api';

export const createFetchPromise = <T>(path: string, options?: RequestInit): Promise<T> => {
  return api<T>(path, {
    method: 'get',
    // Pass the signal to your request
    ...options
  });
};
