import { Trash } from 'phosphor-react';
import { Counter } from '../../../../components/Card/Counter';
import { defaultTheme } from '../../../../styles/themes/default';
import { ActionsItem, ButtonRemove, Divider, Item, ItemHeader } from './styles';

type CartItemProps = {
  CoverImage?: string;
  TitleCard?: string;
  Value?: string;
};

export function CartItem({ CoverImage, TitleCard, Value }: CartItemProps) {
  return (
    <Item>
      <img src={CoverImage} />
      <ItemHeader>
        <p>{TitleCard}</p>
        <ActionsItem>
          <Counter />
          <ButtonRemove>
            <Trash size={16} color={defaultTheme.purple} />
            <span> REMOVER</span>
          </ButtonRemove>
        </ActionsItem>
      </ItemHeader>
      <span>{Value}</span>
      <Divider />
    </Item>
  );
}
