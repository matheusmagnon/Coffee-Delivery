import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    /* font-size: 1.6rem;
    line-height: 1.8rem; */
    background: ${(props) => props.theme['background']};
} 

`;
