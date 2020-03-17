import { Action, action, Thunk, thunk } from 'easy-peasy';

import { fetchPlanet } from '../api/fetchPlanet';
import { Planet, Store, StoreStatus } from '../models';

export type Item = Store<Planet | undefined> & { id: string };
export type Content = Item[];
export interface StoreState {
  content: Content;
}

export interface PlanetsItemsStoreModel extends StoreState {
  fetch: Thunk<PlanetsItemsStoreModel, string>;
  fetchError: Action<PlanetsItemsStoreModel, { error: Error; id: string }>;
  fetchSuccess: Action<PlanetsItemsStoreModel, Planet>;
  fetchStart: Action<PlanetsItemsStoreModel, string>;
}

const findItem = (planetId: string, items: Content) => items.find(({ id }) => id === planetId);

export const planetsItemsStore: PlanetsItemsStoreModel = {
  content: [],
  fetchStart: action((state, id) => {
    const item = findItem(id, state.content);
    if (!item) {
      state.content.push({
        id,
        content: undefined,
        status: StoreStatus.Fetching,
        error: null
      });
    }
  }),
  fetchError: action((state, { id, error }) => {
    const item = findItem(id, state.content);
    if (item) {
      item.status = StoreStatus.Error;
      item.error = error.message;
    }
  }),
  fetchSuccess: action((state, payload) => {
    const item = findItem(payload.id, state.content);
    if (item) {
      item.content = payload;
      item.status = StoreStatus.Success;
      item.error = null;
    }
  }),
  fetch: thunk(async (actions, id, { getState }) => {
    const alreadyExists = findItem(id, getState().content);
    if (alreadyExists) {
      return;
    }
    try {
      actions.fetchStart(id);
      const item = await fetchPlanet(id);
      actions.fetchSuccess({ ...item, id });
    } catch (error) {
      actions.fetchError({ id, error });
    }
  })
};
