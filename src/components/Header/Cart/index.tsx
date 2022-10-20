import { CartContainer } from './styles';

import { ShoppingCart } from 'phosphor-react';

export function Cart() {
  return (
    <CartContainer>
      <ShoppingCart size={32} color="#C47F17" weight="fill" />
    </CartContainer>
  );
}
