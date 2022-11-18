import { Minus, Plus } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CardProps } from '..';
import {
  CartItemType,
  CartListContext,
} from '../../../context/CartListContext';
import { CounterContainer } from './styles';

export const Counter = ({
  coverImage,
  tags,
  titleCard,
  description,
  price,
  id,
  itemsAmount,
}: // itemsAmount,
CartItemType) => {
  const [count, setCount] = useState(0);

  const { addItem, deleteItem, CartList } = useContext(CartListContext);

  // CartList.map((item) => {
  //   if (item.id == id) {
  //     currentCoffe.itemsAmount=item.itemsAmount
  //     console.log(item.id, id);
  //   }
  // });

  const currentCoffe: CartItemType = {
    id: id,
    price: price,
    coverImage: coverImage,
    description: description,
    tags: tags,
    titleCard: titleCard,
    itemsAmount: count,
  };

  const handlePlus = (currentCoffe: CartItemType) => {
    setCount((prev) => prev + 1);
    addItem(currentCoffe);
  };

  const handleMinus = (currentCoffe: CartItemType) => {
    setCount((prev) => prev - 1);
    deleteItem(currentCoffe);
  };

  return (
    <CounterContainer>
      {count > 0 && (
        <button onClick={() => handleMinus(currentCoffe)}>
          <Minus size={14} weight="bold" />
        </button>
      )}
      {currentCoffe.itemsAmount || 0}
      <button onClick={() => handlePlus(currentCoffe)}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  );
};
