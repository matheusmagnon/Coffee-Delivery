import { ConfimrButton, ShoppingCartContainer, ValuesSummary } from './styles';

import { CartItem } from '../CartItem';
import { useContext } from 'react';
import { CartListContext } from '../../../../context/CartListContext';
import { useNavigate, Navigate, NavLink } from 'react-router-dom';

export function ShoppingCart(orderT: any) {
  const { resetCartList, cartList, order } = useContext(CartListContext);

  let navigate = useNavigate();

  const routeChange = () => {
    navigate(`/success`);

    // });
  };
  // const Data = order?.state;
  //
  // console.log(Data);
  // console.log(props);

  // const city = order?.city;

  // const [valueTotalItems, setValueTotalItems] = useState(0);

  let deliveryValue = 1;

  var valueTotalItems = cartList.reduce(
    (total, current) => total + current.itemsAmount * current.price,
    0,
  );

  return (
    <div>
      <h2>Cafés selecionados</h2>
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
        {/* <NavLink
          to={{
            pathname: '/success',
          }}
          state={`${order}`}
        > */}
        <NavLink to="/success" title="Sucesso">
          <ConfimrButton type={'submit'} onClick={resetCartList}>
            CONFIRMAR PEDIDO
          </ConfimrButton>
          {/* </Link> */}
        </NavLink>
      </ShoppingCartContainer>
    </div>
  );
}
