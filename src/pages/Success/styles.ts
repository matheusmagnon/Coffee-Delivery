import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
  main {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const Title = styled.h1`
  line-height: 3rem;
  color: ${(props) => props.theme['yellow']};
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 2rem;
`;

export const OrderInfoContainer = styled.div``;

export const Informations = styled.div`
  color: ${(props) => props.theme['base-text']};
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2.5rem;
  margin-right: 15rem;
  width: 40%;
  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme['yellow-dark']},
        ${(props) => props.theme['purple-dark']}
      )
      border-box;
  border-radius: 0 2rem;
  border: 1px solid transparent;
`;

export const Items = styled.div`
  div {
    display: flex;
    column-gap: 1.25rem;
  }
`;
