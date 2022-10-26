import styled from 'styled-components';

export const LocalizationContainer = styled.button`
  border: 0;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 4px;
  padding: 0.2rem;
`;

export const TextLocation = styled.span`
  color: ${(props) => props.theme['purple-dark']};
  display: flex;
  align-items: center;
`;
