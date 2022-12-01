import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
  padding: 40px;
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  /* width: 30rem; */
`;

export const ValuesSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  div {
    display: flex;
    column-gap: 10rem;
    justify-content: space-between;
    p {
      margin-bottom: 1rem;
      color: ${(props) => props.theme['base-text']};
    }
    h2 {
      font-family: 'Roboto';
    }
  }
`;

export const ConfimrButton = styled.button`
  /* margin-bottom: 20px; */
  width: 80%;

  background: ${(props) => props.theme['yellow']};
  color: #fff;
  font-weight: bold;
  border: 0;
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`;
