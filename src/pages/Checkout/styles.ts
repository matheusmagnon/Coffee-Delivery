import { Student } from 'phosphor-react';
import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  padding: 6rem 0;
  /* gap: 20px; */
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
  }
`;
