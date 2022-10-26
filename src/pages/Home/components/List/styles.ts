import styled from 'styled-components';

export const ListContainer = styled.div``;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 0 8px 0 8px;
  img {
    width: 7.5rem;
    margin-top: -1.25rem;
  }
  div {
    display: flex;
  }
  p {
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const TagCard = styled.div`
  border: 1px solid ${(props) => props.theme.yellow};
  padding: 0.3rem;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  margin: 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  :hover {
    color: ${(props) => props.theme['yellow-light']};
    background: ${(props) => props.theme['yellow-dark']};
  }
`;

export const FooterCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
  }
  /* background: red; */
`;

export const Counter = styled.div`
  background: ${(props) => props.theme['base-button']};
  height: 2rem;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-family: 'roboto';
  margin: 0.8rem;
  padding: 0.3rem 0.5rem;
  button {
    border: 0;
    background: ${(props) => props.theme['base-button']};
    /* margin: 0 0.2rem; */
    padding: 0.3rem 0.6rem;
    cursor: pointer;
    color: ${(props) => props.theme.purple};

    :hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`;
