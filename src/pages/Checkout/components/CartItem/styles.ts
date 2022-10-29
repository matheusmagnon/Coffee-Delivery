import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1.875rem;

  img {
    width: 64px;
  }
  > span {
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  p {
    padding-left: 10px;
  }
`;

export const ActionsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    padding: 0.625rem;
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: 0;
  font-family: 'Roboto';
`;

export const Divider = styled.div`
  display: flex;
  padding-top: 1rem;
  width: 80%;
  border-bottom: 2px solid ${(props) => props.theme['base-button']};
`;
