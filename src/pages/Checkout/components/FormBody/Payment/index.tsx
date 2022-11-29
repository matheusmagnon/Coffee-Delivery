import { Bank, CreditCard, Money } from 'phosphor-react';
import { defaultTheme } from '../../../../../styles/themes/default';
import { PaymentContainer } from './styles';

export function Payment() {
  return (
    <PaymentContainer>
      <input type="radio" name="paymentMethod" id="credit" />
      <label htmlFor="credit">
        <CreditCard weight="regular" size={16} color={defaultTheme.purple} />
        <span>CARTÃO DE CRÉDITO</span>
      </label>

      <input type={'radio'} name="paymentMethod" id="debit" />
      <label htmlFor="debit">
        <Bank size={16} color={defaultTheme.purple} />
        <span>CARTÃO DE DÉBITO</span>
      </label>

      <input type={'radio'} name="paymentMethod" id="money" />
      <label htmlFor="money">
        <Money weight="regular" size={16} color={defaultTheme.purple} />
        <span>DINHEIRO</span>
      </label>
    </PaymentContainer>
  );
}
