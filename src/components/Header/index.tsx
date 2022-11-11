import { NavLink } from 'react-router-dom';

import { defaultTheme } from '../../styles/themes/default';

import { HeaderContainer } from './styles';

import { Cart } from '../Cart';
import { Localization } from './Localization';

import logo from '../../assets/logo.svg';
import { ItemsAmount } from '../Cart/styles';

export function Header() {
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
            itemsAmount={2}
          />
          {/* <ItemsAmount>2</ItemsAmount> */}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
