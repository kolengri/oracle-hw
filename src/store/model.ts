import { peopleStore, PeopleStoreModel } from './peopleStore';
import { planetsItemsStore, PlanetsItemsStoreModel } from './planetsItemsStore';

export interface StoreModel {
  people: PeopleStoreModel;
  planetsItems: PlanetsItemsStoreModel;
}

export const storeModel: StoreModel = {
  people: peopleStore,
  planetsItems: planetsItemsStore
};
