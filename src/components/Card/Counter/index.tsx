import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { CardProps } from '..';
import { CounterContainer } from './styles';

export function Counter() {
  const [count, setCount] = useState(0);

  const [coffeInCart, setCoffeInCart] = useState<CardProps>();

  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <CounterContainer>
      <button onClick={handleMinus}>
        <Minus size={14} weight="bold" />
      </button>
      {count}
      <button onClick={handlePlus}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  );
}
