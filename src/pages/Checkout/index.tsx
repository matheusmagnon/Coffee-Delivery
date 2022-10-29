import { CheckoutContainer } from './styles';

import { FormBody } from './components/FormBody';

import { ShoppingCart } from './components/ShoppingCart';

export function Checkout() {
  return (
    <CheckoutContainer>
      <aside>
        <h2>Complete seu pedido</h2>
        <FormBody />
      </aside>
      <aside>
        <h2>Cafés selecionados</h2>
        <ShoppingCart />
      </aside>
    </CheckoutContainer>
  );
}
