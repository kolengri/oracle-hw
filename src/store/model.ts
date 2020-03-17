import { peoplesStore, PeopleStoreModel } from './peoplesStore';
import { planetsItemsStore, PlanetsItemsStoreModel } from './planetsItemsStore';

export interface StoreModel {
  peoples: PeopleStoreModel;
  planetsItems: PlanetsItemsStoreModel;
}

export const storeModel: StoreModel = {
  peoples: peoplesStore,
  planetsItems: planetsItemsStore
};
