import { createStore, createTypedHooks } from 'easy-peasy';

import { storeModel, StoreModel } from './model';

export const hooks = createTypedHooks<StoreModel>();
export const store = createStore(storeModel);
