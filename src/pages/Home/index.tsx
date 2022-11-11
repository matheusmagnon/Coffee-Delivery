import ImageCoffeeDelivery from '../../assets/coffee-delivery.svg';
import {
  FreshCoffe,
  IntoContainer,
  Items,
  PackDelivery,
  Shopping,
  SubTitle,
  TimerDelivery,
  Title,
} from './styles';
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';
import { CoffeList } from './components/CoffeList';

export function Home() {
  return (
    <div>
      <IntoContainer>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <Items>
            <div>
              <Shopping>
                <ShoppingCart color="#FFF" weight="fill" />
              </Shopping>
              <p>Compra simples e segura</p>
            </div>

            <div>
              <TimerDelivery>
                <Timer color="#FFF" weight="fill" />
              </TimerDelivery>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <PackDelivery>
                <Package color="#FFF" weight="fill" />
              </PackDelivery>
              <p>Embalagem mantém o café intacto</p>
            </div>

            <div>
              <FreshCoffe>
                <Coffee color="#FFF" weight="fill" />
              </FreshCoffe>
              <p>O café chega fresquinho até você</p>
            </div>
          </Items>
        </div>
        <img src={ImageCoffeeDelivery} />
      </IntoContainer>
      <CoffeList />
    </div>
  );
}
