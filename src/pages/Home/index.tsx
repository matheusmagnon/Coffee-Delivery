import ImageCoffeeDelivery from '../../assets/coffee-delivery.svg';
import {
  IntoContainer,
  Items,
  BackgroundIcon,
  SubTitle,
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
              <BackgroundIcon backgroundColor="yellowDark">
                <ShoppingCart color="#FFF" weight="fill" />
              </BackgroundIcon>
              <p>Compra simples e segura</p>
            </div>

            <div>
              <BackgroundIcon backgroundColor="yellowNormal">
                <Timer color="#FFF" weight="fill" />
              </BackgroundIcon>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <BackgroundIcon backgroundColor="gray">
                <Package color="#FFF" weight="fill" />
              </BackgroundIcon>
              <p>Embalagem mantém o café intacto</p>
            </div>

            <div>
              <BackgroundIcon backgroundColor="purpleNormal">
                <Coffee color="#FFF" weight="fill" />
              </BackgroundIcon>
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
