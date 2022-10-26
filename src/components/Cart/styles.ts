import styled from 'styled-components';

const BACKGROUND_COLORS = {
  yellow: 'yellow-light',
  purpler: 'purple-dark',
} as const;

interface BackgroundProps {
  backgroundColor: 'yellow' | 'purpler';
}

export const CartContainer = styled.div<BackgroundProps>`
  cursor: pointer;
  border: 0;

  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;

  width: 1.8rem;
  height: 1.8rem;
  padding: 0.2rem;
  background: ${(props) =>
    props.theme[BACKGROUND_COLORS[props.backgroundColor]]};
  border-radius: 4px;
`;
