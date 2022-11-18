import { createContext, ReactNode, useState } from 'react';

export type CoffeType = {
  coverImage?: string;
  tags?: string[];
  titleCard?: string;
  description?: string;
  price: number;
  id: number;
  itemsAmount: number;
};

interface CartContextType {
  addCoffe: (newCoffe: CoffeType) => void;
  deleteCoffe: (coffe: CoffeType) => void;
  cartList: CoffeType[];
  currentCoffe?: CoffeType;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartListContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartList, setCartList] = useState<CoffeType[]>([]);

  //Altera a quantidade de itens de um item no carrinho
  const changeQuantity = (idCoffe: number, action: string) => {
    if (action == 'decrease') {
      setCartList(
        cartList.map((coffeInCart) => {
          if (coffeInCart.id === idCoffe) {
            const contItems = coffeInCart.itemsAmount;
            return { ...coffeInCart, itemsAmount: contItems - 1 };
          } else {
            return coffeInCart;
          }
        }),
      );
    } else if (action == 'increse') {
      setCartList(
        cartList.map((coffeInCart) => {
          if (coffeInCart.id === idCoffe) {
            const contItems = coffeInCart.itemsAmount;
            return { ...coffeInCart, itemsAmount: contItems + 1 };
          } else {
            return coffeInCart;
          }
        }),
      );
    }
  };

  const deleteCoffe = (itemToDelete: CoffeType) => {
    itemToDelete.itemsAmount == 1
      ? setCartList(cartList.filter((coffe) => coffe.id !== itemToDelete.id))
      : changeQuantity(itemToDelete.id, 'decrease');
  };

  //Adiciona o novo item no carrinho de compras
  const addCoffe = (newItem: CoffeType) => {
    newItem.itemsAmount = 1;

    const coffeeAlreadyExistsInCart = cartList.findIndex(
      (cartItem) => cartItem.id == newItem.id,
    );

    //Verifica se o café existe
    coffeeAlreadyExistsInCart >= 0
      ? changeQuantity(newItem.id, 'increse')
      : setCartList((prevItem) => [...prevItem, newItem]);
  };

  console.log(cartList);

  return (
    <CartListContext.Provider
      value={{
        addCoffe,
        deleteCoffe,
        cartList,
      }}
    >
      {children}
    </CartListContext.Provider>
  );
}
