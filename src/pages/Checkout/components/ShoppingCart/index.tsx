import { ConfimrButton, ShoppingCartContainer, ValuesSummary } from './styles';

import { CartItem } from '../CartItem';
import { useContext } from 'react';
import { CartListContext } from '../../../../context/CartListContext';

export function ShoppingCart() {
  const { CartList } = useContext(CartListContext);
  return (
    <div>
      <ShoppingCartContainer>
        {CartList.map((item) => {
          return (
            <CartItem
              key={item.id}
              price={item.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
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
              {(15.8).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>

          <div>
            <p>Entrega </p>
            <p>
              {(9.9).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>

          <div>
            <h2>Total</h2>
            <h2>
              {(9.9).toLocaleString('pt-br', {
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
