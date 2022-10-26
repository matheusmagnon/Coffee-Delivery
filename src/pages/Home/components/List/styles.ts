import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Card = styled.div`
  padding: 0 1rem;
  height: 19.375rem;
  margin-top: 2.5rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 18rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 0 8px 0 8px;
  img {
    /* width: 7.5rem; */
    /* padding: -1rem; */
  }
  div {
    display: flex;
  }

  h3 {
    padding-bottom: 1rem;
  }
  p {
    padding-bottom: 1rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const TagCard = styled.div`
  /* border: 1px solid ${(props) => props.theme.yellow}; */
  display: flex;
  flex-direction: row;
  padding: 0.3rem;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  margin: 1rem 0.5rem;
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
  padding-bottom: 0;
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
