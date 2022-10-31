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
`;

export const ItemsAmount = styled.div`
  /* display: fixed; */
  margin-top: -30px;
  margin-right: -5px;
  width: 13px;
  height: 8px;
  background: red;
  border-radius: 10px;
  font-size: 8px;
  padding-left: 2px;
`;
