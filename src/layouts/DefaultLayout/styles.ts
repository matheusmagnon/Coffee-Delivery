import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-self: center;
  /* align-items: center; */
  padding: 1rem 14rem;
  background: ${(props) => props.theme.background};
`;
