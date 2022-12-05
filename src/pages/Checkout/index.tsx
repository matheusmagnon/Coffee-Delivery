import { CheckoutContainer } from './styles';

import { FormBody } from './components/FormBody';

import { ShoppingCart } from './components/ShoppingCart';

import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const newFormAddressValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe sua rua'),
  number: zod.string().min(1, 'Informe o numero'),
  complement: zod.string().min(1, 'Informe o complemento'),
  neighborhood: zod.string().min(1, 'Informe a sua rua'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe seu estado'),
});

export type NewOrderFormData = zod.infer<typeof newFormAddressValidationSchema>;

export function Checkout() {
  const newOrderForm = useForm<NewOrderFormData>({
    // resolver: zodResolver(newOrderFormValidationSchema),
  });
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   // watch
  //   // formState: { errors },
  // } = newOrderForm;
  return (
    <CheckoutContainer>
      <FormProvider {...newOrderForm}>
        <FormBody />
      </FormProvider>
    </CheckoutContainer>
  );
}
