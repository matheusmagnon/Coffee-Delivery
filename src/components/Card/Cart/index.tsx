import { CartContainer, ItemsAmount } from './styles';

import { ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { CartListContext } from '../../../context/CartListContext';

type CartProps = {
  backgroundCard: 'yellow' | 'purple';
  //Um problema de tipagem
  backgroundCardHover?: any;
  colorCart: string;
  itemsAmount?: number;
};

export function Cart({
  colorCart,
  backgroundCard,
  backgroundCardHover,
  itemsAmount,
}: CartProps) {
  const { cartList } = useContext(CartListContext);

  return (
    <>
      <CartContainer
        backgroundColor={backgroundCard}
        backgroundHoverColor={backgroundCardHover}
      >
        {/* <input> */}
        <ShoppingCart size={22} color={colorCart} weight="fill" />
        {itemsAmount != undefined && itemsAmount > 0 && (
          <ItemsAmount>{itemsAmount}</ItemsAmount>
        )}
        {/* </input> */}
      </CartContainer>
    </>
  );
}
