import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  /* width: 1440px; */

  /* align-items: center; */
  padding: 2rem 20rem;
  background: ${(props) => props.theme.background};
`;
