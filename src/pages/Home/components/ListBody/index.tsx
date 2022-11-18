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
            coverImage={coffe.photo}
            description={coffe.description}
            tags={coffe.tags}
            titleCard={coffe.name}
            id={coffe.id}
            key={coffe.id}
            itemsAmount={coffe.itemsAmount}
          />
        );
      })}
    </ListContainer>
  );
}
