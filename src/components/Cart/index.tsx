import { CartContainer } from './styles';

import { ShoppingCart } from 'phosphor-react';

type CartProps = {
  backgroundCard: 'yellow' | 'purpler';
  colorCard: string;
};

// const teste = (props) =>props.theme.

export function Cart({ colorCard, backgroundCard }: CartProps) {
  return (
    <CartContainer backgroundColor={backgroundCard}>
      <ShoppingCart size={32} color={colorCard} weight="fill" />
    </CartContainer>
  );
}
