import { Planet, ResourceType } from '../models';
import { createFetchPromise } from './createFetchPromise';
import { createItemPath } from './createPath';

export type Response = Planet;

export const fetchPlanet = async (id: string | number): Promise<Response> => {
  return createFetchPromise<Response>(createItemPath(ResourceType.Planet, id));
};
