import { ConfimrButton, ShoppingCartContainer, ValuesSummary } from './styles';

import { CartItem } from '../CartItem';
import { ReactNode, useContext } from 'react';
import { CartListContext } from '../../../../context/CartListContext';

export function ShoppingCart() {
  const { cartList } = useContext(CartListContext);

  // const [valueTotalItems, setValueTotalItems] = useState(0);

  let tt = 0;
  let deliveryValue = 1;

  var valueTotalItems = cartList.reduce(
    (total, current) => total + current.itemsAmount * current.price,
    0,
  );
  return (
    <div>
      <ShoppingCartContainer>
        {cartList.map((item) => {
          const valueItem: number = item.price;
          const quantityItem = item.itemsAmount;
          const totalValueItem = quantityItem * valueItem;

          return (
            <CartItem
              key={item.id}
              priceString={totalValueItem.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
              price={item.price}
              coverImage={item.coverImage}
              description={item.description}
              tags={item.tags}
              titleCard={item.titleCard}
              id={item.id}
              itemsAmount={item.itemsAmount}
            />
          );
        })}

        <ValuesSummary>
          <div>
            <p>Total de Itens </p>
            <p>
              {(valueTotalItems || 0).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>

          <div>
            <p>Entrega </p>
            <p>
              {deliveryValue.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>

          <div>
            <h2>Total</h2>
            <h2>
              {(valueTotalItems + deliveryValue).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h2>
          </div>
        </ValuesSummary>
        <ConfimrButton>CONFIRMAR PEDIDO</ConfimrButton>
      </ShoppingCartContainer>
    </div>
  );
}
