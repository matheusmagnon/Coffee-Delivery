import { CartListContext } from '../../context/CartListContext';

import {
  Informations,
  Items,
  OrderInfoContainer,
  SubTitle,
  SuccessContainer,
  Title,
} from './styles';

import { MapPin, Timer, CurrencyDollarSimple } from 'phosphor-react';
import { BackgroundIcon } from '../Home/styles';
import IllustrationSuccess from '../../assets/IllustrationSuccess.svg';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

export function Success(props: any) {
  const { order } = useContext(CartListContext);
  console.log('🚀 ~ file: index.tsx:20 ~ Success ~ order', order);
  console.log(props);

  const location = useLocation();
  const state = location;
  console.log(state);

  return (
    <SuccessContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
      <OrderInfoContainer>
        <main>
          <Informations>
            <Items>
              <div>
                <BackgroundIcon backgroundColor="purpleNormal">
                  <MapPin color="#FFF" weight="fill" />
                </BackgroundIcon>
                <p>
                  Entrega em <b>Rua João Daniel Martinelli, 102</b>
                  <br /> Farrapos - Porto Alegre, RS
                </p>
              </div>
            </Items>
            <Items>
              <div>
                <BackgroundIcon backgroundColor="yellowNormal">
                  <Timer color="#FFF" weight="fill" />
                </BackgroundIcon>
                <p>
                  Previsão de entrega: <br />
                  <b>20 min - 30 min</b>
                </p>
              </div>
            </Items>

            <Items>
              <div>
                <BackgroundIcon backgroundColor="yellowNormal">
                  <CurrencyDollarSimple color="#FFF" weight="fill" />
                </BackgroundIcon>
                <p>
                  Pagamento na entrega
                  <br />
                  <b> Cartão de Crédito</b>
                </p>
              </div>
            </Items>
          </Informations>
          <img src={IllustrationSuccess} />
        </main>
      </OrderInfoContainer>
    </SuccessContainer>
  );
}
