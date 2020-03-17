import qs from 'qs';

import { API_ROOT_URL } from '../config';
import { ResourceType } from '../models/Base';

// Simple path generator
export const createPath = (type: ResourceType, query?: object) => {
  const queryStr = qs.stringify(query, { addQueryPrefix: true });
  return `${API_ROOT_URL}${type}${queryStr}`;
};

export const createItemPath = (type: ResourceType, id: number | string) => {
  return `${API_ROOT_URL}${type}/${id}`;
};
