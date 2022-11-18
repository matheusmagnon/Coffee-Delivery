import styled from 'styled-components';

const BACKGROUND_COLORS = {
  yellow: 'yellow-light',
  purple: 'purple-dark',
  purpleLight: 'purple',
} as const;

interface BackgroundProps {
  backgroundColor: 'yellow' | 'purple';
  backgroundHoverColor: 'purpleLight';
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

  :hover {
    background: ${(props) =>
      props.theme[BACKGROUND_COLORS[props.backgroundHoverColor]]};
  }

  svg {
    /* position: absolute; */
    z-index: 1;
  }
`;

export const ItemsAmount = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme['yellow-dark']};
  position: absolute;
  margin-left: 25px;
  margin-bottom: 32px;
  border-radius: 50%;
  padding-left: 0.33rem;
  /* top: 20px; */
  /* left: 20px; */
`;
