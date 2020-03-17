import { Planet, ResourceType } from '../models';
import { api } from './api';
import { createItemPath } from './createPath';

export type Response = Planet;

export const fetchPlanet = async (id: string | number): Promise<Response> => {
  return api<Response>(createItemPath(ResourceType.Planet, id));
};
