import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { Counter } from '../../../../components/Card/Counter';
import {
  CartListContext,
  CoffeType,
} from '../../../../context/CartListContext';
import { defaultTheme } from '../../../../styles/themes/default';
import { ActionsItem, ButtonRemove, Divider, Item, ItemHeader } from './styles';

interface CartItemType extends CoffeType {
  priceString?: string;
}

export function CartItem(currentCoffe: CartItemType) {
  const { deleteCoffe } = useContext(CartListContext);

  return (
    <Item>
      <img src={currentCoffe.coverImage} />
      <ItemHeader>
        <p>{currentCoffe.titleCard}</p>
        <ActionsItem>
          <Counter
            id={currentCoffe.id}
            itemsAmount={currentCoffe.itemsAmount}
            price={currentCoffe.price}
          />
          <ButtonRemove onClick={() => deleteCoffe(currentCoffe)}>
            <Trash size={16} color={defaultTheme.purple} />
            <span>REMOVER</span>
          </ButtonRemove>
        </ActionsItem>
      </ItemHeader>
      <span>{currentCoffe.priceString}</span>
      <Divider />
    </Item>
  );
}
