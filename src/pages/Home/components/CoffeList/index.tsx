import { ListBody } from '../ListBody';
import { CoffeListContainer, HeaderCoffeList, Tag } from './styles';

export function CoffeList() {
  return (
    <CoffeListContainer>
      <HeaderCoffeList>
        <h2>Nossos cafés</h2>
        <div>
          <Tag>TRADICIONAL</Tag>
          <Tag>ESPECIAL</Tag>
          <Tag>COM LEITE</Tag>
          <Tag>ALCOÓLICO</Tag>
          <Tag>GELADO</Tag>
        </div>
      </HeaderCoffeList>
      <ListBody />
    </CoffeListContainer>
  );
}
