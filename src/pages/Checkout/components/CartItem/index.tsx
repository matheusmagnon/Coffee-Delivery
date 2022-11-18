import { Trash } from 'phosphor-react';
import { Counter } from '../../../../components/Card/Counter';
import { CoffeType } from '../../../../context/CartListContext';
import { defaultTheme } from '../../../../styles/themes/default';
import { ActionsItem, ButtonRemove, Divider, Item, ItemHeader } from './styles';

interface CartItemType extends CoffeType {
  priceString?: string;
}

export function CartItem({
  itemsAmount,
  id,
  price,
  coverImage,
  description,
  tags,
  titleCard,
  priceString,
}: CartItemType) {
  const currentCoffe: CoffeType = {
    id: id,
    price: price,
    coverImage: coverImage,
    description: description,
    tags: tags,
    titleCard: titleCard,
    itemsAmount: itemsAmount,
  };

  return (
    <Item>
      <img src={coverImage} />
      <ItemHeader>
        <p>{titleCard}</p>
        <ActionsItem>
          <Counter
            id={id}
            itemsAmount={itemsAmount}
            price={price}
            coverImage={coverImage}
            description={description}
            tags={tags}
            titleCard={titleCard}
          />
          <ButtonRemove>
            <Trash size={16} color={defaultTheme.purple} />
            <span> REMOVER</span>
          </ButtonRemove>
        </ActionsItem>
      </ItemHeader>
      <span>{priceString}</span>
      <Divider />
    </Item>
  );
}
