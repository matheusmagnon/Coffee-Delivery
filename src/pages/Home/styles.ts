import styled from 'styled-components';

export const IntoContainer = styled.div`
  display: flex;
  padding: 6rem 0;
  /* height: 300px; */

  span {
    font-size: 20px;
  }
  p {
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
  }

  img {
    width: 50%;
  }
`;

export const Title = styled.h1`
  line-height: 3rem;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 2rem;
`;

export const SubTitle = styled.span`
  font-size: 20px;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const Items = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

export const Shopping = styled.div`
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
`;

export const TimerDelivery = styled.div`
  background: ${(props) => props.theme['yellow']};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
`;

export const PackDelivery = styled.div`
  background: ${(props) => props.theme['base-text']};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
`;

export const FreshCoffe = styled.div`
  background: ${(props) => props.theme['purple']};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
`;
