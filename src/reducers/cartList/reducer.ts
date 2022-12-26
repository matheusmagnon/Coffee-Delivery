import { ActionTypes } from './actions';

export type CoffeType = {
  coverImage?: string;
  tags?: string[];
  titleCard?: string;
  description?: string;
  price: number;
  id: number;
  itemsAmount: number;
};

interface CartListState {
  cartList: CoffeType[];
}

export function cartListReducer(state: CartListState, action: any) {
  //Verifica se já existe o coffe vigente no cartList
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      const coffeeAlreadyExistsInCart = state.cartList.findIndex(
        (cartItem) => cartItem.id == action.payload.newItem.id,
      );
      //Se existir o mesmo café no carrinho seta o valor 1 no ItemsAmount
      if (coffeeAlreadyExistsInCart < 0) {
        action.payload.newItem.itemsAmount = 1;
        return {
          ...state,
          cartList: [...state.cartList, action.payload.newItem],
        };
        //Se não retorna com o atributo do objeto alterado
      } else {
        return {
          ...state,
          cartList: state.cartList.map((coffeInCart) => {
            if (coffeInCart.id === action.payload.newItem.id) {
              const contItems = coffeInCart.itemsAmount;
              return { ...coffeInCart, itemsAmount: contItems + 1 };
            } else {
              return coffeInCart;
            }
          }),
        };
      }
    case ActionTypes.DELETE_ITEM:
      if (action.payload.itemToDelete.itemsAmount == 1) {
        return {
          ...state,
          cartList: state.cartList.filter(
            (coffe) => coffe.id !== action.payload.itemToDelete.id,
          ),
        };
      } else {
        return {
          ...state,
          cartList: state.cartList.map((coffeInCart) => {
            if (coffeInCart.id === action.payload.itemToDelete.id) {
              const contItems = coffeInCart.itemsAmount;
              return { ...coffeInCart, itemsAmount: contItems - 1 };
            } else {
              return coffeInCart;
            }
          }),
        };
      }
    default:
      return state;
  }
}
