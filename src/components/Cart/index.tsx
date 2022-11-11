import { CartContainer, ItemsAmount } from './styles';

import { ShoppingCart } from 'phosphor-react';

type CartProps = {
  backgroundCard: 'yellow' | 'purple';
  backgroundCardHover?: 'purpleLight';
  colorCart: string;
  itemsAmount?: number;
};

// const teste = (props) =>props.theme.

export function Cart({
  colorCart,
  backgroundCard,
  backgroundCardHover,
  itemsAmount,
}: CartProps) {
  return (
    <>
      <CartContainer
        backgroundColor={backgroundCard}
        backgroundHoverColor={backgroundCardHover}
      >
        <ShoppingCart size={22} color={colorCart} weight="fill" />
        {itemsAmount > 0 && <ItemsAmount>{itemsAmount}</ItemsAmount>}
      </CartContainer>
    </>
  );
}
