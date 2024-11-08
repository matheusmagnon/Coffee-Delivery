import { ListContainer } from './styles';

import { Card } from '../../../../components/Card';

import { coffees } from '../../../../data/coffees';

export function ListBody() {
  return (
    <ListContainer>
      {coffees.map((coffee) => {
        return (
          <Card
            price={coffee.price}
            coverImage={coffee.photo}
            description={coffee.description}
            tags={coffee.tags}
            titleCard={coffee.name}
            id={coffee.id}
            key={coffee.id}
            itemsAmount={coffee.itemsAmount}
          />
        );
      })}
    </ListContainer>
  );
}
