import { Action, action, Thunk, thunk } from 'easy-peasy';

import { fetchPeople, Query } from '../api/fetchPeople';
import { PagedResults, People, Store, StoreStatus } from '../models';

export type Content = PagedResults<People>;

export interface PeopleStoreModel extends Store<Content | undefined> {
  fetch: Thunk<PeopleStoreModel, Query>;
  fetchError: Action<PeopleStoreModel, Error>;
  fetchSuccess: Action<PeopleStoreModel, Content>;
  fetchStart: Action<PeopleStoreModel>;
}

export const peopleStore: PeopleStoreModel = {
  status: StoreStatus.Empty,
  content: undefined,
  error: null,
  fetchStart: action((state) => {
    state.status = StoreStatus.Fetching;
    state.error = null;
  }),
  fetchError: action((state, error) => {
    state.status = StoreStatus.Error;
    state.error = error.message;
  }),
  fetchSuccess: action((state, content) => {
    state.status = StoreStatus.Success;
    state.content = content;
    state.error = null;
  }),
  fetch: thunk(async (actions, payload) => {
    try {
      actions.fetchStart();
      const content = await fetchPeople(payload);
      actions.fetchSuccess(content);
    } catch (error) {
      actions.fetchError(error);
    }
  })
};
