import { ConfimrButton, ShoppingCartContainer, ValuesSummary } from './styles';

import ExpressoTradicional from '../../../../assets/coffeesImages/expresso-tradicional.svg';
import Latte from '../../../../assets/coffeesImages/latte.svg';
import { CartItem } from '../CartItem';

export function ShoppingCart() {
  return (
    <>
      <ShoppingCartContainer>
        <CartItem
          CoverImage={ExpressoTradicional}
          TitleCard="Expresso Tradicional"
          Value={(9.9).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        />
        <CartItem
          CoverImage={Latte}
          TitleCard="Latte"
          Value={(5.9).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        />
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
    </>
  );
}
