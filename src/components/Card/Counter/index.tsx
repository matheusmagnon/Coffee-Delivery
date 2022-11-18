import { Minus, Plus } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CoffeType, CartListContext } from '../../../context/CartListContext';
import { CounterContainer } from './styles';

export const Counter = ({
  coverImage,
  tags,
  titleCard,
  description,
  price,
  id,
  itemsAmount,
}: CoffeType) => {
  const quantityOfItems = itemsAmount;

  const { addCoffe, deleteCoffe, cartList } = useContext(CartListContext);

  const currentCoffe: CoffeType = {
    id: id,
    price: price,
    coverImage: coverImage,
    description: description,
    tags: tags,
    titleCard: titleCard,
    itemsAmount: quantityOfItems,
  };

  cartList.map((item) => {
    if (item.id == id) {
      currentCoffe.itemsAmount = item.itemsAmount;
    }
  });

  return (
    <CounterContainer>
      <button onClick={() => deleteCoffe(currentCoffe)}>
        <Minus size={14} weight="bold" />
      </button>
      {currentCoffe.itemsAmount}
      <button onClick={() => addCoffe(currentCoffe)}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  );
};
