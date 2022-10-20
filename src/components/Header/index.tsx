import { HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';
import { Cart } from './Cart';
import { Localization } from './Localization';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Logo Caffe Delivery" />
      </NavLink>

      <nav>
        <Localization />
        <NavLink to="/checkout" title="Checkout">
          <Cart />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
