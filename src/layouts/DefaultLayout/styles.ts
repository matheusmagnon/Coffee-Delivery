import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 20rem;
  background: ${(props) => props.theme.background};
`;
