import { FormBodyContainer, FormHeader, InputFormText } from './styles';

import {
  MapPinLine,
  CurrencyDollarSimple,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react';

import { defaultTheme } from '../../../../styles/themes/default';
import { Payment } from './Payment';

export function FormBody() {
  return (
    <form>
      <FormBodyContainer>
        <FormHeader>
          <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
          <div>
            <h4>Endereço de entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FormHeader>
        <InputFormText
          type={'text'}
          placeholder="CEP"
          InputWidth="36%"
          InputHeight="42px"
        />
        <InputFormText type={'text'} placeholder="RUA" />
        <div>
          <InputFormText type={'text'} placeholder="Número" InputWidth="36%" />
          <InputFormText
            type={'text'}
            placeholder={`Complemento`}
            InputWidth="60%"
          />
        </div>
        <div>
          <InputFormText type={'text'} placeholder="Bairro" InputWidth="36%" />
          <InputFormText type={'text'} placeholder="Cidade" InputWidth="48%" />
          <InputFormText type={'text'} placeholder="UF" InputWidth="10%" />
        </div>
      </FormBodyContainer>

      <FormBodyContainer>
        <FormHeader>
          <CurrencyDollarSimple size={22} color={defaultTheme['purple']} />
          <div>
            <h4>Pagamento</h4>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </FormHeader>
        <Payment />
      </FormBodyContainer>
    </form>
  );
}
