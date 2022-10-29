import styled from 'styled-components';

export const CounterContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* height: 1px; */
  font-family: 'Roboto';
  margin: 0.8rem;
  padding: 0.3rem 0.8rem;
  button {
    border: 0;
    background: ${(props) => props.theme['base-button']};

    padding: 0.3rem 0.6rem;
    cursor: pointer;
    color: ${(props) => props.theme.purple};

    :hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`;
