import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { CoffeType } from '../../context/CartListContext';
import { Cart } from './Cart';
import { Counter } from './Counter';
import { CardContainer, FooterCard, TagCard } from './styles';

interface CardProps extends CoffeType {}

export function Card(currentCoffe: CardProps) {
  return (
    <CardContainer key={currentCoffe.id}>
      <img src={currentCoffe?.coverImage} />
      <div>
        {currentCoffe.tags?.map((tag) => {
          return <TagCard key={uuidv4()}>{tag}</TagCard>;
        })}
      </div>
      <h3>{currentCoffe.titleCard}</h3>
      <p>{currentCoffe.description}</p>
      <FooterCard>
        <span>
          {currentCoffe.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <Counter {...currentCoffe} key={currentCoffe.id} />
        <Cart
          colorCart="#FFF"
          backgroundCard="purple"
          backgroundCardHover="purpleLight"
        />
      </FooterCard>
    </CardContainer>
  );
}
