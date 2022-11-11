import { Bank, CreditCard, Money } from 'phosphor-react';
import { defaultTheme } from '../../../../../styles/themes/default';
import { PaymentContainer } from './styles';

export function Payment() {
  return (
    <PaymentContainer>
      {/* <PaymentCard> */}
      <input type="radio" name="paymentMethod" id="credit" />
      <label htmlFor="credit">
        {/* <ContentButtom> */}
        <CreditCard weight="regular" size={16} color={defaultTheme.purple} />
        <span>CARTÃO DE CRÉDITO</span>
        {/* </ContentButtom> */}
      </label>
      {/* </PaymentCard> */}

      <input type={'radio'} name="paymentMethod" id="debit" />
      <label htmlFor="debit">
        {/* <ContentButtom> */}
        <Bank size={16} color={defaultTheme.purple} />
        <span>CARTÃO DE DÉBITO</span>
        {/* </ContentButtom> */}
      </label>

      <input type={'radio'} name="paymentMethod" id="money" />
      <label htmlFor="money">
        {/* <ContentButtom> */}
        <Money weight="regular" size={16} color={defaultTheme.purple} />
        <span>DINHEIRO</span>
        {/* </ContentButtom> */}
      </label>
    </PaymentContainer>
  );
}
