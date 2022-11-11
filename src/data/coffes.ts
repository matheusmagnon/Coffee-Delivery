import ExpressoTradicional from '../assets/coffeesImages/expresso-tradicional.svg';
import ExpressoAmericano from '../assets/coffeesImages/expresso-americano.svg';
import ExpressoCremoso from '../assets/coffeesImages/expresso-cremoso.svg';
import ExpressoGelado from '../assets/coffeesImages/expresso-gelado.svg';
import CafeComLeite from '../assets/coffeesImages/cafe-com-leite.svg';
import Latte from '../assets/coffeesImages/latte.svg';
import Cappuccino from '../assets/coffeesImages/capuccino.svg';
import Macchiato from '../assets/coffeesImages/macchiato.svg';
import Mocaccino from '../assets/coffeesImages/mocaccino.svg';
import Cubano from '../assets/coffeesImages/cubano.svg';
import Arabe from '../assets/coffeesImages/arabe.svg';

export const coffes = [
  {
    id: 1,
    tags: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    photo: ExpressoTradicional,
    price: 9.5,
  },
  {
    id: 2,
    tags: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    photo: ExpressoAmericano,
    price: 8.9,
  },
  {
    id: 3,
    tags: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    photo: ExpressoCremoso,
    price: 9.9,
  },
  {
    id: 4,
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    photo: ExpressoGelado,
    price: 5.9,
  },
  {
    id: 5,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    photo: CafeComLeite,
    price: 6.9,
  },
  {
    id: 6,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    photo: Latte,
    price: 9.9,
  },
  {
    id: 7,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    photo: Cappuccino,
    price: 4.9,
  },
  {
    id: 8,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    photo: Macchiato,
    price: 7.9,
  },
  {
    id: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    photo: Mocaccino,
    price: 9.9,
  },
  {
    id: 10,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    photo: Cubano,
    price: 8.9,
  },
  {
    id: 11,
    tags: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    photo: Arabe,
    price: 9.9,
  },
];
