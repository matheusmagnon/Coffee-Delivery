import { useContext } from 'react';

import { CartListContext } from '../../../../context/CartListContext';

import { MapPinLine, CurrencyDollarSimple } from 'phosphor-react';

import { useFormContext } from 'react-hook-form';

import {
  FormBodyAddress,
  FormBodyPayment,
  FormContainer,
  FormHeader,
  InputFormText,
} from './styles';
import { NewOrderFormData } from '../../../Checkout/index';
import { defaultTheme } from '../../../../styles/themes/default';
import { Payment } from './Payment';
import { ShoppingCart } from '../ShoppingCart';

export function FormBody() {
  const { order, cartList } = useContext(CartListContext);
  const { register, reset, handleSubmit } = useFormContext<NewOrderFormData>();

  interface OrderType extends NewOrderFormData {
    cartList?: typeof cartList;
  }

  const handleCreateNewOrder = (order: OrderType) => {
    order.cartList = cartList;

    console.log(order);
    // resetCartList();

    // console.log(cartList);
    // console.log();

    // reset();
  };

  return (
    <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
      <FormContainer>
        <div>
          <h2>Complete seu pedido</h2>
          <FormBodyAddress>
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
              {...register('cep')}
            />
            {/* <p>{errors.cep?.message}</p> */}
            <InputFormText
              type={'text'}
              placeholder="RUA"
              {...register('street')}
            />
            {/* <p>{errors.cep?.message}</p> */}
            <div>
              <InputFormText
                type={'text'}
                placeholder="Número"
                InputWidth="36%"
                {...register('number')}
              />
              <InputFormText
                type={'text'}
                placeholder={`Complemento`}
                InputWidth="60%"
                {...register('complement')}
              />
            </div>
            <div>
              <InputFormText
                type={'text'}
                placeholder="Bairro"
                InputWidth="36%"
                {...register('neighborhood')}
              />
              <InputFormText
                type={'text'}
                placeholder="Cidade"
                InputWidth="48%"
                {...register('city')}
              />
              <InputFormText
                type={'text'}
                placeholder="UF"
                InputWidth="10%"
                {...register('state')}
              />
            </div>
          </FormBodyAddress>
        </div>

        <FormBodyPayment>
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
        </FormBodyPayment>
        <ShoppingCart />
      </FormContainer>
    </form>
  );
}
