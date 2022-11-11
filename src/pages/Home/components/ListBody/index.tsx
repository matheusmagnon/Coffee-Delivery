import { ListContainer } from './styles';

import { Card } from '../../../../components/Card';

import { coffes } from '../../../../data/coffes';

export function ListBody() {
  return (
    <ListContainer>
      {coffes.map((coffe) => {
        console.log(coffe.id);

        return (
          <Card
            price={coffe.price}
            CoverImage={coffe.photo}
            Description={coffe.description}
            Tags={coffe.tags}
            TitleCard={coffe.name}
            id={coffe.id}
          />
        );
      })}
    </ListContainer>
  );
}
