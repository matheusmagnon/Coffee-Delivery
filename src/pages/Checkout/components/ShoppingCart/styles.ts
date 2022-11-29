import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  width: 448px;
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
`;

export const ValuesSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1.875rem;
  margin: 0 3rem 1rem;
  div {
    display: flex;
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
  margin-bottom: 20px;
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
