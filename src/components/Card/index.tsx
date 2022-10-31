import { defaultTheme } from '../../styles/themes/default';
import { Cart } from '../Cart';
import { Counter } from './Counter';
import { CardContainer, FooterCard, TagCard } from './styles';

type CardProps = {
  CoverImage?: string;
  Tags?: string[];
  TitleCard?: string;
  Description?: string;
};

export function Card({ CoverImage, Tags, TitleCard, Description }: CardProps) {
  return (
    <CardContainer>
      <img src={CoverImage} />
      <div>
        {Tags?.map((tag) => {
          return <TagCard>{tag}</TagCard>;
        })}
      </div>
      <h3>{TitleCard}</h3>
      <p>{Description}</p>
      <FooterCard>
        <span>R$ 9,90</span>
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
