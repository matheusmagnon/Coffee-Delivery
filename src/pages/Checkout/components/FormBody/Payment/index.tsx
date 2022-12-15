import { Bank, CreditCard, Money } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { NewOrderFormData } from '../../..';
import { defaultTheme } from '../../../../../styles/themes/default';
import { PaymentContainer } from './styles';

export function Payment() {
  const { register } = useFormContext<NewOrderFormData>();
  return (
    <PaymentContainer>
      <input
        type="radio"
        value={'credit'}
        id={'credit'}
        {...register('paymentMethod')}
      />
      <label htmlFor="credit">
        <CreditCard weight="regular" size={16} color={defaultTheme.purple} />
        <span>CARTÃO DE CRÉDITO</span>
      </label>

      <input
        type={'radio'}
        id="debit"
        value={'debit'}
        {...register('paymentMethod')}
      />
      <label htmlFor="debit">
        <Bank size={16} color={defaultTheme.purple} />
        <span>CARTÃO DE DÉBITO</span>
      </label>

      <input
        type={'radio'}
        id="money"
        value={'money'}
        {...register('paymentMethod')}
      />
      <label htmlFor="money">
        <Money weight="regular" size={16} color={defaultTheme.purple} />
        <span>DINHEIRO</span>
      </label>
    </PaymentContainer>
  );
}
