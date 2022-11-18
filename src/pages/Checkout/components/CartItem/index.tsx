import { Trash } from 'phosphor-react';
import { Counter } from '../../../../components/Card/Counter';
import { CartItemType } from '../../../../context/CartListContext';
import { defaultTheme } from '../../../../styles/themes/default';
import { ActionsItem, ButtonRemove, Divider, Item, ItemHeader } from './styles';

export function CartItem({
  itemsAmount,
  id,
  price,
  coverImage,
  description,
  tags,
  titleCard,
}: CartItemType) {
  return (
    <Item>
      <img src={coverImage} />
      <ItemHeader>
        <p>{titleCard}</p>
        <ActionsItem>
          <Counter
            price={price}
            coverImage={coverImage}
            description={description}
            tags={tags}
            titleCard={titleCard}
            id={id}
            itemsAmount={itemsAmount}
          />
          <ButtonRemove>
            <Trash size={16} color={defaultTheme.purple} />
            <span> REMOVER</span>
          </ButtonRemove>
        </ActionsItem>
      </ItemHeader>
      <span>{price}</span>
      <Divider />
    </Item>
  );
}
