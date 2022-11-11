import { ListContainer } from './styles';

import { Card } from '../../../../components/Card';

import { coffes } from '../../../../data/coffes';

export function ListBody() {
  return (
    <ListContainer>
      {coffes.map((coffe) => {
        return (
          <Card
            price={coffe.price}
            CoverImage={coffe.photo}
            Description={coffe.description}
            Tags={coffe.tags}
            TitleCard={coffe.name}
            key={coffe.id}
          />
        );
      })}
    </ListContainer>
  );
}
