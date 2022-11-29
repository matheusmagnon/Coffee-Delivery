import { NavLink } from 'react-router-dom';

import { defaultTheme } from '../../styles/themes/default';

import { HeaderContainer } from './styles';

import { Cart } from '../Card/Cart';
import { Localization } from './Localization';

import logo from '../../assets/logo.svg';
import { useContext } from 'react';
import { CartListContext } from '../../context/CartListContext';

export function Header() {
  const { totalItemsInCart } = useContext(CartListContext);

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Logo Caffe Delivery" />
      </NavLink>

      <nav>
        <Localization />
        <Cart
          colorCart={defaultTheme['yellow-dark']}
          backgroundCard="yellow"
          itemsAmount={totalItemsInCart}
        />
      </nav>
    </HeaderContainer>
  );
}
