import { CartContainer, ItemsAmount } from './styles';

import { ShoppingCart } from 'phosphor-react';

type CartProps = {
  backgroundCard: 'yellow' | 'purple';
  backgroundCardHover?: 'purpleLight';
  colorCart: string;
};

// const teste = (props) =>props.theme.

export function Cart({
  colorCart,
  backgroundCard,
  backgroundCardHover,
}: // backgroundHover,
CartProps) {
  return (
    <>
      <CartContainer
        backgroundColor={backgroundCard}
        backgroundHoverColor={backgroundCardHover}
      >
        <ShoppingCart size={32} color={colorCart} weight="fill" />
        <ItemsAmount>
          <span>3</span>
        </ItemsAmount>
      </CartContainer>
    </>
  );
}
