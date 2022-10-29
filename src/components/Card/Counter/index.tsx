import { Minus, Plus } from 'phosphor-react';
import { CounterContainer } from './styles';

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      1
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  );
}
