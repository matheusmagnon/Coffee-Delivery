import { Card, Counter, FooterCard, ListContainer, TagCard } from './styles';
// import Decrease from '../../../../assets/decrease.svg';
// import Increase from '../../../../assets/increase.svg';

import { Plus, Minus } from 'phosphor-react';

import Arabe from '../../../../assets/coffeesImages/arabe.svg';
import CafeComLeite from '../../../../assets/coffeesImages/cafe-com-leite.svg';
import Cappuccino from '../../../../assets/coffeesImages/capuccino.svg';
import Cubano from '../../../../assets/coffeesImages/cubano.svg';
import ExpressoAmericano from '../../../../assets/coffeesImages/expresso-americano.svg';
import ExpressoCremoso from '../../../../assets/coffeesImages/expresso-cremoso.svg';
import ExpressoGelado from '../../../../assets/coffeesImages/expresso-gelado.svg';
import ExpressoTradicional from '../../../../assets/coffeesImages/expresso-tradicional.svg';
import Latte from '../../../../assets/coffeesImages/latte.svg';
import Macchiato from '../../../../assets/coffeesImages/macchiato.svg';
import Mocaccino from '../../../../assets/coffeesImages/mocaccino.svg';
import { Cart } from '../../../../components/Cart';

export function List() {
  return (
    <ListContainer>
      <Card>
        <img src={ExpressoTradicional} />
        <div>
          <TagCard>TRADICIONAL</TagCard>
        </div>
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

      <Card>
        <img src={ExpressoAmericano} />
        <div>
          <TagCard>TRADICIONAL</TagCard>
        </div>
        <h3>Expresso Americano</h3>
        <p>Expresso diluído, menos intenso que o tradicional</p>
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

      <Card>
        <img src={ExpressoCremoso} />
        <div>
          <TagCard>TRADICIONAL</TagCard>
        </div>
        <h3>Expresso Cremoso </h3>
        <p>Café expresso tradicional com espuma cremosa</p>
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

      <Card>
        <img src={ExpressoGelado} />
        <div>
          <TagCard>TRADICIONAL</TagCard>
          <TagCard>GELADO</TagCard>
        </div>
        <h3>Expresso Gelado </h3>
        <p>Bebida preparada com café expresso e cubos de gelo</p>
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

      <Card>
        <img src={CafeComLeite} />
        <div>
          <TagCard>TRADICIONAL</TagCard>
          <TagCard>COM LEITE</TagCard>
        </div>
        <h3>Café com Leite </h3>
        <p>Meio a meio de expresso tradicional com leite vaporizado</p>
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

      <Card>
        <img src={Latte} />
        <div>
          <TagCard>TRADICIONAL</TagCard>
          <TagCard>COM LEITE</TagCard>
        </div>
        <h3>Latte</h3>
        <p>Uma dose de café expresso com o dobro de leite e espuma cremosa</p>
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

      <Card>
        <img src={Cappuccino} />
        <div>
          <TagCard>TRADICIONAL</TagCard>
          <TagCard>COM LEITE</TagCard>
        </div>
        <h3>Cappuccino</h3>
        <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>
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

      <Card>
        <img src={Macchiato} />
        <div>
          <TagCard>TRADICIONAL</TagCard>
          <TagCard>COM LEITE</TagCard>
        </div>
        <h3>Macchiato</h3>
        <p>Café expresso misturado com um pouco de leite quente e espuma</p>
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

      <Card>
        <img src={Mocaccino} />
        <div>
          <TagCard>TRADICIONAL</TagCard>
          <TagCard>COM LEITE</TagCard>
        </div>
        <h3>Mocaccino</h3>
        <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
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

      <Card>
        <img src={Cubano} />
        <div>
          <TagCard>ESPECIAL</TagCard>
          <TagCard>ALCOÓCICO</TagCard>
          <TagCard>GELADO</TagCard>
        </div>
        <h3>Cubano</h3>
        <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
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

      <Card>
        <img src={Arabe} />
        <div>
          <TagCard>ESPECIAL</TagCard>
        </div>
        <h3>Arabe</h3>
        <p>Bebida preparada com grãos de café árabe e especiarias</p>
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
