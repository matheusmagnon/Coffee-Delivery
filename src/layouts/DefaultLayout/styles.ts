import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 10%;
  background: ${(props) => props.theme.background};
  max-width: 1440px;
  align-self: center;
`;
