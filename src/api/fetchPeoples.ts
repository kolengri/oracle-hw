import { PagedResults, People, ResourceType } from '../models';
import { createFetchPromise } from './createFetchPromise';
import { createPath } from './createPath';

export type Response = PagedResults<People>;
export type Query = {
  search?: string;
  page?: number;
};

export const fetchPeoples = async (query: Query): Promise<Response> => {
  return createFetchPromise<Response>(createPath(ResourceType.People, query));
};
