import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
max-width: 1440px;

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

span,p{
    font-family: 'Roboto', sans-serif
}

h1,h2,h3{
    font-family: 'Baloo 2', sans-serif;
}
h1{
    font-size: 48px;
}


`;
