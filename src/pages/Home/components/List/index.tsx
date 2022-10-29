import { ListContainer } from './styles';

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

import { Card } from '../../../../components/Card';

export function List() {
  return (
    <ListContainer>
      <Card
        CoverImage={ExpressoTradicional}
        TitleCard="Expresso Tradicional"
        Description="O tradicional café feito com água quente e grãos moídos"
        Tags={['TRADICIONAL']}
      />

      <Card
        CoverImage={ExpressoAmericano}
        TitleCard="Expresso Americano"
        Description="Expresso diluído, menos intenso que o tradicional"
        Tags={['TRADICIONAL']}
      />

      <Card
        CoverImage={ExpressoCremoso}
        TitleCard="Expresso Cremoso"
        Description="Café expresso tradicional com espuma cremosa"
        Tags={['TRADICIONAL']}
      />

      <Card
        CoverImage={ExpressoGelado}
        TitleCard="Expresso Gelado "
        Description="Bebida preparada com café expresso e cubos de gelo"
        Tags={['TRADICIONAL', 'GELADO']}
      />

      <Card
        CoverImage={CafeComLeite}
        TitleCard="Café com Leite"
        Description="Meio a meio de expresso tradicional com leite vaporizado"
        Tags={['TRADICIONAL', 'COM LEITE']}
      />

      <Card
        CoverImage={Latte}
        TitleCard="Latte"
        Description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
        Tags={['TRADICIONAL', 'COM LEITE']}
      />

      <Card
        CoverImage={Cappuccino}
        TitleCard="Cappuccino"
        Description="Bebida com canela feita de doses iguais de café, leite e espuma"
        Tags={['TRADICIONAL', 'COM LEITE']}
      />

      <Card
        CoverImage={Macchiato}
        TitleCard="Macchiato"
        Description="Café expresso misturado com um pouco de leite quente e espuma"
        Tags={['TRADICIONAL', 'COM LEITE']}
      />

      <Card
        CoverImage={Mocaccino}
        TitleCard="Mocaccino"
        Description="Café expresso com calda de chocolate, pouco leite e espuma"
        Tags={['TRADICIONAL', 'COM LEITE']}
      />

      <Card
        CoverImage={Cubano}
        TitleCard="Cubano"
        Description="Drink gelado de café expresso com rum, creme de leite e hortelã"
        Tags={['ESPECIAL', 'ALCOÓCICO', 'GELADO']}
      />

      <Card
        CoverImage={Arabe}
        TitleCard="Arabe"
        Description="Bebida preparada com grãos de café árabe e especiarias"
        Tags={['ESPECIAL']}
      />
    </ListContainer>
  );
}
