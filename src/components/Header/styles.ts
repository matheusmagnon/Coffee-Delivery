import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  padding: 0.5rem 10%;
  opacity: 0.9;
  position: fixed;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};

  nav {
    display: flex;
    gap: 1rem;
  }
`;
