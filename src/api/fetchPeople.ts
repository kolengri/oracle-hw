import { PagedResults, People, ResourceType } from '../models';
import { api } from './api';
import { createPath } from './createPath';

export type Response = PagedResults<People>;
export type Query = {
  search?: string;
  page?: number;
};

export const fetchPeople = async (query: Query): Promise<Response> => {
  return api<Response>(createPath(ResourceType.People, query));
};
