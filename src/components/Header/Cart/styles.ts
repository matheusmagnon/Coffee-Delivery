import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  padding: 0.2rem;

  background: ${(props) => props.theme['yellow-light']};
  border-radius: 4px;
`;
