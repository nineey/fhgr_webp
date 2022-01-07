import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
  --primary-color: ${(props) =>
    props.darkTheme === true ? "#18181B" : "#f5f5f5"};
  --secondary-color: ${(props) =>
    props.darkTheme === true ? "#ffffff" : "#18181B"};
}

body {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
  
  h1 {
    font-size: 3em;
  }
  
  h2 {
    font-size: 1.5em;
    font-weight: 300;
  }
  
  a {
    color: var(--secondary-color);
    text-decoration: none;
  }
  
  a:hover {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 500;
  }
  
  .page-link {
    color: black;
  }
`;

export default GlobalStyle;
