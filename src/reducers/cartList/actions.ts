import { CoffeType } from './reducer';

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

export function addNewItemAction(newItem: CoffeType) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem,
    },
  };
}

export function deleteItemAction(itemToDelete: CoffeType) {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: {
      itemToDelete,
    },
  };
}
