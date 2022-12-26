import { createContext, ReactNode, useReducer, useState } from 'react';
import {
  addNewItemAction,
  deleteItemAction,
} from '../reducers/cartList/actions';
import { cartListReducer, CoffeType } from '../reducers/cartList/reducer';
// import { NewOrderFormData } from '../pages/Checkout/index';

interface CartContextType {
  addCoffe: (newCoffe: CoffeType) => void;
  deleteCoffe: (coffe: CoffeType) => void;
  cartList: CoffeType[];
  currentCoffe?: CoffeType;
  totalItemsInCart: number;
  resetCartList: () => void;
  // order?: OrderType;
  // createOrder: (cartlist: CoffeType[]) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartListContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  // const [order, setOrder] = useState<OrderType>();

  const [cartListState, dispatch] = useReducer(cartListReducer, {
    cartList: [],
  });

  console.log(cartListState.cartList);

  const resetCartList = () => console.log('tt');

  // setCartList([]);
  const { cartList } = cartListState;
  const totalItemsInCart = cartList.reduce(
    (total, current) => total + current.itemsAmount,
    0,
  );

  const deleteCoffe = (itemToDelete: CoffeType) => {
    dispatch(deleteItemAction(itemToDelete));
  };

  //Adiciona o novo item no carrinho de compras
  const addCoffe = (newItem: CoffeType) => {
    dispatch(addNewItemAction(newItem));
  };

  return (
    <CartListContext.Provider
      value={{
        addCoffe,
        deleteCoffe,
        resetCartList,
        cartList,
        totalItemsInCart,
        // order,
        // createOrder,
      }}
    >
      {children}
    </CartListContext.Provider>
  );
}
