import { NavLink } from 'react-router-dom';

import { defaultTheme } from '../../styles/themes/default';

import { HeaderContainer } from './styles';

import { Cart } from '../Cart';
import { Localization } from './Localization';

import logo from '../../assets/logo.svg';
import { useContext } from 'react';
import { CartListContext } from '../../context/CartListContext';

export function Header() {
  const { CartList } = useContext(CartListContext);

  var sumItemsCart = CartList.reduce(
    (total, current) => total + current.itemsAmount,
    0,
  );

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Logo Caffe Delivery" />
      </NavLink>

      <nav>
        <Localization />
        <NavLink to="/checkout" title="Checkout">
          <Cart
            colorCart={defaultTheme['yellow-dark']}
            backgroundCard="yellow"
            itemsAmount={sumItemsCart}
          />
          {/* <ItemsAmount>2</ItemsAmount> */}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
