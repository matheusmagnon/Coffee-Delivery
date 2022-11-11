import styled from 'styled-components';

export const CoffeListContainer = styled.div`
  width: 100%;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderCoffeList = styled.div`
  display: flex;
  width: 99%;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.375rem;

  div {
    display: flex;
    margin-left: 0.5rem;
    padding: 0.375rem 0.75rem;
  }
`;

export const Tag = styled.div`
  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 10px;
  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  margin: 0.5rem;

  :hover {
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`;
