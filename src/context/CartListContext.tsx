import { createContext, ReactNode, useState } from 'react';
import { NewOrderFormData } from '../pages/Checkout/index';

interface OrderType extends NewOrderFormData {
  cartList?: CoffeType[];
}

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
  totalItemsInCart: number;
  resetCartList: () => void;
  order?: OrderType;
  // createOrder: (cartlist: CoffeType[]) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartListContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  // const [order, setOrder] = useState<OrderType>();
  const [cartList, setCartList] = useState<CoffeType[]>([]);

  const resetCartList = () => setCartList([]);

  const totalItemsInCart = cartList.reduce(
    (total, current) => total + current.itemsAmount,
    0,
  );

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
    //Verifica se já existe o coffe vigente no cartList
    const coffeeAlreadyExistsInCart = cartList.findIndex(
      (cartItem) => cartItem.id == newItem.id,
    );

    console.log(coffeeAlreadyExistsInCart);

    // Para o item vigente iniciar com 1
    newItem.itemsAmount = 1;

    //Se o coffe vigente existir vai executar o changeQuantity, se não adiciona o coffe vigete no array
    coffeeAlreadyExistsInCart > -1
      ? changeQuantity(newItem.id, 'increse')
      : setCartList((prevItem) => [...prevItem, newItem]);
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
