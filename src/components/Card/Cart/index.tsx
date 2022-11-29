import { CartContainer, ItemsAmount } from './styles';

import { ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { CartListContext } from '../../../context/CartListContext';
import { NavLink } from 'react-router-dom';

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
  // const
  return (
    <>
      <NavLink to="/checkout" title="Checkout">
        <CartContainer
          backgroundColor={backgroundCard}
          backgroundHoverColor={backgroundCardHover}
        >
          <ShoppingCart size={22} color={colorCart} weight="fill" />
          {itemsAmount != undefined && itemsAmount > 0 && (
            <ItemsAmount>{itemsAmount}</ItemsAmount>
          )}
        </CartContainer>
      </NavLink>
    </>
  );
}
