import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};

  nav {
    display: flex;
    gap: 1rem;
  }
`;
