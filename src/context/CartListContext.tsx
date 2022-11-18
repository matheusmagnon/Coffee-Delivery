import { createContext, ReactNode, useState } from 'react';

export type CartItemType = {
  coverImage?: string;
  tags?: string[];
  titleCard?: string;
  description?: string;
  price: number | string;
  id: number;
  itemsAmount: number;
};

interface CartContextType {
  addItem: (newItem: CartItemType) => void;
  deleteItem: (newItem: CartItemType) => void;
  CartList: CartItemType[];
  currentCoffe?: CartItemType;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartListContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [CartList, setCartList] = useState<CartItemType[]>([]);

  const changeQuantilyMinus = (id: number) => {
    setCartList(
      CartList.map((item) => {
        if (item.id === id) {
          const contItems = item.itemsAmount;
          return { ...item, itemsAmount: contItems - 1 };
        } else {
          return item;
        }
      }),
    );
  };

  const deleteItem = (itemToDelete: CartItemType) => {
    const coffeeAlreadyExistsInCart = CartList.findIndex(
      (cartItem) => cartItem.id == itemToDelete.id,
    );

    coffeeAlreadyExistsInCart >= 0
      ? changeQuantilyMinus(itemToDelete.id)
      : setCartList(CartList.filter((coffe) => coffe.id !== itemToDelete.id));
  };

  //Muda o valor de itemsAmount do item repetido +
  const changeQuantilyPlus = (id: number) => {
    setCartList(
      CartList.map((item) => {
        if (item.id === id) {
          const contItems = item.itemsAmount;
          return { ...item, itemsAmount: contItems + 1 };
        } else {
          return item;
        }
      }),
    );
  };

  //Adiciona o novo item no carrinho de compras
  const addItem = (newItem: CartItemType) => {
    newItem.itemsAmount = 1;

    const coffeeAlreadyExistsInCart = CartList.findIndex(
      (cartItem) => cartItem.id == newItem.id,
    );

    //Verifica se o café existe
    coffeeAlreadyExistsInCart >= 0
      ? changeQuantilyPlus(newItem.id)
      : setCartList((prevItem) => [...prevItem, newItem]);
  };

  console.log(CartList);

  return (
    <CartListContext.Provider value={{ addItem, deleteItem, CartList }}>
      {children}
    </CartListContext.Provider>
  );
}
