import { Card, Counter, FooterCard, ListContainer, TagCard } from './styles';
// import Decrease from '../../../../assets/decrease.svg';
// import Increase from '../../../../assets/increase.svg';

import { Plus, Minus } from 'phosphor-react';

import ExpressoTradicional from '../../../../assets/coffeesImages/expresso-tradicional.svg';
import { Cart } from '../../../../components/Cart';

export function List() {
  return (
    <ListContainer>
      <Card>
        <img src={ExpressoTradicional} />
        <TagCard>TRADICIONAL</TagCard>
        <h3>Expresso Tradicional </h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <FooterCard>
          <span>R$ 9,90</span>
          <Counter>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            1
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>
          <Cart colorCard="#FFF" backgroundCard="purpler" />
        </FooterCard>
      </Card>
    </ListContainer>
  );
}
