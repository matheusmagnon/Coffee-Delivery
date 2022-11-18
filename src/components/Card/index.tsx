import { useContext } from 'react';
import { CartListContext } from '../../context/CartListContext';
import { Cart } from '../Cart';
import { Counter } from './Counter';
import { CardContainer, FooterCard, TagCard } from './styles';

// const { CartList } = useContext(CartListContext);

export type CardProps = {
  coverImage?: string;
  tags?: string[];
  titleCard?: string;
  description?: string;
  price: number;
  id: number;
  itemsAmount: number;
  // children?: React.ReactNode;
};

export function Card({
  coverImage,
  tags,
  titleCard,
  description,
  price,
  id,
  itemsAmount,
}: CardProps) {
  return (
    <CardContainer key={id}>
      <img src={coverImage} />
      <div key={titleCard}>
        {tags?.map((tag) => {
          return <TagCard>{tag}</TagCard>;
        })}
      </div>
      <h3>{titleCard}</h3>
      <p>{description}</p>
      <FooterCard>
        <span>
          {price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <Counter
          price={price}
          coverImage={coverImage}
          description={description}
          tags={tags}
          titleCard={titleCard}
          id={id}
          itemsAmount={itemsAmount}
        />
        <Cart
          colorCart="#FFF"
          backgroundCard="purple"
          backgroundCardHover={'purpleLight'}
        />
      </FooterCard>
    </CardContainer>
  );
}
