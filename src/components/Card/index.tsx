import { Cart } from '../Cart';
import { Counter } from './Counter';
import { CardContainer, FooterCard, TagCard } from './styles';

export type CardProps = {
  CoverImage?: string;
  Tags?: string[];
  TitleCard?: string;
  Description?: string;
  price: number;
  id: number;
};

export function Card({
  CoverImage,
  Tags,
  TitleCard,
  Description,
  price,
  id,
}: CardProps) {
  return (
    <CardContainer key={id}>
      <img src={CoverImage} />
      <div>
        {Tags?.map((tag) => {
          return <TagCard>{tag}</TagCard>;
        })}
      </div>
      <h3>{TitleCard}</h3>
      <p>{Description}</p>
      <FooterCard>
        <span>
          {' '}
          {price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <Counter />
        <Cart
          colorCart="#FFF"
          backgroundCard="purple"
          backgroundCardHover={'purpleLight'}
        />
      </FooterCard>
    </CardContainer>
  );
}
